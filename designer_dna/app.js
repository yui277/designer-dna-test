/**
 * 设计师人格基因测试 - 主应用逻辑 v2.0
 * 纯前端评分 + DeepSeek开放题分析
 */

class DesignerDNATest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = {};
        this.openAnswers = {};
        this.scores = {};
        this.fieldScores = { architecture: 0, graphic: 0, industrial: 0, interior: 0, landscape: 0, theory: 0, fashion: 0 };
        this.dimensionScores = { order_vs_chaos: 0, rational_vs_emotional: 0, tradition_vs_innovation: 0, individual_vs_collective: 0, material_vs_spiritual: 0 };
        this.isProcessing = false;
        this.init();
    }
    
    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        document.getElementById('start-btn')?.addEventListener('click', () => this.startTest());
        document.getElementById('prev-btn')?.addEventListener('click', () => this.prevQuestion());
        document.getElementById('next-btn')?.addEventListener('click', () => this.nextQuestion());
        document.getElementById('retake-btn')?.addEventListener('click', () => this.retakeTest());
        document.getElementById('share-btn')?.addEventListener('click', () => this.shareResult());
    }
    
    showPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(pageId)?.classList.add('active');
    }
    
    startTest() {
        this.currentQuestion = 0;
        this.answers = {};
        this.openAnswers = {};
        this.scores = {};
        this.fieldScores = { architecture: 0, graphic: 0, industrial: 0, interior: 0, landscape: 0, theory: 0, fashion: 0 };
        this.dimensionScores = { order_vs_chaos: 0, rational_vs_emotional: 0, tradition_vs_innovation: 0, individual_vs_collective: 0, material_vs_spiritual: 0 };
        this.showPage('test-page');
        this.renderQuestion();
    }
    
    renderQuestion() {
        if (!QUESTIONS_DB || !QUESTIONS_DB.choice || !QUESTIONS_DB.open) {
            console.error('QUESTIONS_DB is not loaded properly.');
            return;
        }
        
        const isChoice = this.currentQuestion < QUESTIONS_DB.choice.length;
        const totalChoice = QUESTIONS_DB.choice.length;
        const totalOpen = QUESTIONS_DB.open.length;
        const totalQ = totalChoice + totalOpen;
        const isLast = this.currentQuestion === totalQ - 1;
        
        document.getElementById('current-q').textContent = this.currentQuestion + 1;
        document.getElementById('total-q').textContent = totalQ;
        document.getElementById('progress-fill').style.width = `${((this.currentQuestion + 1) / totalQ) * 100}%`;
        
        const badge = document.getElementById('q-type-badge');
        if (badge) badge.textContent = isChoice ? '选择题' : '开放题';
        
        if (isChoice) {
            const q = QUESTIONS_DB.choice[this.currentQuestion];
            if (q) this.renderChoiceQuestion(q);
        } else {
            const openIdx = this.currentQuestion - totalChoice;
            const q = QUESTIONS_DB.open[openIdx];
            if (q) this.renderOpenQuestion(q);
        }
        
        const prevBtn = document.getElementById('prev-btn');
        if (prevBtn) prevBtn.style.display = this.currentQuestion > 0 ? 'flex' : 'none';
        
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) nextBtn.textContent = isLast ? '查看结果' : '下一题';
    }
    
    renderChoiceQuestion(q) {
        const content = document.getElementById('question-content');
        const choicesEl = document.getElementById('choices-container');
        const openEl = document.getElementById('open-input-container');
        
        if (content) content.textContent = q.question || '题目加载失败';
        if (choicesEl) choicesEl.style.display = 'flex';
        if (openEl) openEl.style.display = 'none';
        
        const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
        const sel = this.answers[q.id];
        
        if (choicesEl && q.choices) {
            choicesEl.innerHTML = q.choices.map((c, i) => `
                <div class="choice-item ${sel === i ? 'selected' : ''}" data-qid="${q.id}" data-idx="${i}">
                    <div class="choice-letter">${letters[i]}</div>
                    <div class="choice-text">${c.text}</div>
                </div>
            `).join('');
            
            // 使用事件委托，避免重复绑定或绑定失效
            choicesEl.onclick = (e) => {
                const item = e.target.closest('.choice-item');
                if (!item) return;
                const qid = item.getAttribute('data-qid');
                const idx = parseInt(item.getAttribute('data-idx'));
                this.answers[qid] = idx;
                
                // 强制同步数字索引
                this.answers[parseInt(qid)] = idx;
                
                choicesEl.querySelectorAll('.choice-item').forEach(x => x.classList.remove('selected'));
                item.classList.add('selected');
            };
        }
    }
    
    renderOpenQuestion(q) {
        const content = document.getElementById('question-content');
        const choicesEl = document.getElementById('choices-container');
        const openEl = document.getElementById('open-input-container');
        
        if (content) content.textContent = q.question || '题目加载失败';
        if (choicesEl) choicesEl.style.display = 'none';
        if (openEl) openEl.style.display = 'block';
        
        const ta = document.getElementById('open-answer');
        if (ta) {
            ta.value = this.openAnswers[q.id] || '';
            ta.oninput = () => { 
                this.openAnswers[q.id] = ta.value; 
                this.openAnswers[q.id.toString()] = ta.value;
            };
        }
    }
    
    prevQuestion() {
        if (this.currentQuestion > 0) { 
            this.currentQuestion--; 
            this.renderQuestion(); 
        }
    }
    
    nextQuestion() {
        const totalChoice = QUESTIONS_DB.choice.length;
        const isChoice = this.currentQuestion < totalChoice;
        const isLast = this.currentQuestion === totalChoice + QUESTIONS_DB.open.length - 1;
        
        if (isChoice) {
            const q = QUESTIONS_DB.choice[this.currentQuestion];
            if (this.answers[q.id] === undefined && this.answers[q.id.toString()] === undefined) { 
                this.showToast('请选择一个答案'); 
                return; 
            }
        } else {
            const oi = this.currentQuestion - totalChoice;
            const q = QUESTIONS_DB.open[oi];
            const ans = this.openAnswers[q.id] || this.openAnswers[q.id.toString()];
            if (!ans || !ans.trim()) { 
                this.showToast('请输入你的想法'); 
                return; 
            }
        }
        
        if (isLast) { 
            this.submitTest(); 
        } else { 
            this.currentQuestion++; 
            this.renderQuestion(); 
        }
    }
    
    calculateScores() {
        DESIGNERS_DB.forEach(d => this.scores[d.id] = 0);
        
        QUESTIONS_DB.choice.forEach(q => {
            const si = this.answers[q.id];
            if (si === undefined) return;
            const ch = q.choices[si];
            if (!ch) return;
            
            if (ch.scores) {
                Object.entries(ch.scores).forEach(([k, v]) => {
                    if (this.scores[k] !== undefined) this.scores[k] += v;
                    if (this.fieldScores[k] !== undefined) this.fieldScores[k] += v;
                });
            }
            
            if (ch.dimensions) {
                Object.entries(ch.dimensions).forEach(([k, v]) => {
                    if (this.dimensionScores[k] !== undefined) this.dimensionScores[k] += v;
                });
            }
        });
    }
    
    getTopDesigners(n = 3) {
        const sorted = Object.entries(this.scores).sort((a, b) => b[1] - a[1]).filter(([, s]) => s > 0).slice(0, n);
        const totalSquared = sorted.reduce((sum, [, s]) => sum + s * s, 0);
        return sorted.map(([id, sc]) => {
            const d = DESIGNERS_DB.find(x => x.id === id);
            return { ...d, score: sc, percentage: totalSquared > 0 ? Math.round((sc * sc / totalSquared) * 100) : 0 };
        });
    }
    
    getDetectedField() {
        const mf = Object.entries(this.fieldScores).sort((a, b) => b[1] - a[1])[0];
        return { architecture: '建筑', graphic: '平面/视觉', industrial: '工业/产品', interior: '室内/家具', landscape: '景观', theory: '理论/交互', fashion: '时尚/服装' }[mf?.[0]] || '设计';
    }
    
    async submitTest() {
        this.showPage('loading-page');
        this.calculateScores();
        await this.simulateLoading();
        const ai = await this.analyzeOpenQuestions();
        this.showResult(ai);
    }
    
    async simulateLoading() {
        const el = document.getElementById('loading-status');
        for (const m of LOADING_MESSAGES) { el.textContent = m; await new Promise(r => setTimeout(r, 250)); }
    }
    
    async analyzeOpenQuestions() {
        try {
            const ctrl = new AbortController();
            const t = setTimeout(() => ctrl.abort(), 15000);
            const res = await fetch('api/interpret.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers: this.openAnswers, top: this.getTopDesigners(3).map(d => ({ n: d.name, p: d.percentage, t: d.traits })), field: this.getDetectedField() }),
                signal: ctrl.signal
            });
            clearTimeout(t);
            if (res.ok) {
                const r = await res.json();
                if (r.ok && r.data?.choices?.[0]?.message?.content) return r.data.choices[0].message.content;
            }
        } catch (e) { console.log('AI不可用'); }
        return this.generateFallback();
    }
    
    generateFallback() {
        const top = this.getTopDesigners(3);
        const field = this.getDetectedField();
        const txt = Object.values(this.openAnswers).join(' ').toLowerCase();
        const dims = this.dimensionScores;

        // 从用户开放题回答中提取高频词（非系统预设关键词）
        const kwGroups = {
            aesthetic: { keys: ['美','美学','审美','优雅','形式','视觉','色彩','比例','和谐'], label: '美学追求' },
            nature: { keys: ['自然','生态','绿色','植物','山水','环境','可持续','大地'], label: '自然共鸣' },
            tech: { keys: ['科技','技术','数字','AI','智能','参数','算法','数据','编程'], label: '技术思维' },
            human: { keys: ['人','用户','体验','情感','温度','关怀','生活','日常','温暖'], label: '人文关怀' },
            culture: { keys: ['文化','传统','历史','记忆','传承','民族','东方','中国','古典'], label: '文化意识' },
            space: { keys: ['空间','建筑','结构','体量','尺度','场所','光','影','材料','质感'], label: '空间感知' },
            system: { keys: ['系统','逻辑','秩序','规则','网格','理性','分析','功能','效率'], label: '系统思维' },
            rebel: { keys: ['打破','创新','颠覆','实验','突破','自由','大胆','冒险','反叛'], label: '先锋精神' },
            minimal: { keys: ['简洁','极简','纯粹','留白','克制','少','减法','安静','沉默'], label: '极简哲学' },
            social: { keys: ['社会','公共','责任','问题','改变','城市','社区','集体','公平'], label: '社会使命' }
        };

        const detected = [];
        for (const [gk, gv] of Object.entries(kwGroups)) {
            if (gv.keys.some(k => txt.includes(k))) detected.push({ key: gk, label: gv.label });
        }

        // 根据维度分数生成性格描述
        const dimDesc = [];
        if (dims.order_vs_chaos > 2) dimDesc.push('秩序感极强');
        else if (dims.order_vs_chaos < -2) dimDesc.push('拥抱混沌与自由');
        if (dims.rational_vs_emotional > 2) dimDesc.push('理性驱动');
        else if (dims.rational_vs_emotional < -2) dimDesc.push('感性细腻');
        if (dims.tradition_vs_innovation > 2) dimDesc.push('面向未来');
        else if (dims.tradition_vs_innovation < -2) dimDesc.push('敬畏传统');
        if (dims.material_vs_spiritual > 2) dimDesc.push('追求精神性');
        else if (dims.material_vs_spiritual < -2) dimDesc.push('注重物质表达');

        // 收集上方已展示的信息（用于去重）
        const topNames = top.map(d => d.name);
        const topFields = [...new Set(top.map(d => d.field))];
        const topTraits = top.flatMap(d => d.traits || []);
        const uniqueTraits = [...new Set(topTraits)].slice(0, 8);
        const displayedSet = new Set([...topNames, ...uniqueTraits, field]);

        // 从用户原始回答中提取有意义的短句片段（非预设关键词）
        const userSnippets = Object.values(this.openAnswers)
            .filter(v => v && v.trim().length > 4)
            .map(v => v.trim().slice(0, 30));

        // 辅助函数：过滤已在上方展示的词
        const filterDisplayed = (text) => {
            let result = text;
            displayedSet.forEach(word => {
                if (word && result.includes(word)) result = result.replace(new RegExp(word, 'g'), '');
            });
            return result.trim() || text;
        };

        // 三个模板使用完全不同的数据源
        const templateStyles = [
            // 模板1（基因解码）：仅使用 topNames + era/时代信息，不引用 detected
            () => {
                let h = `<h3>深度洞察</h3>`;
                h += `<h4>基因解码</h4>`;
                const eraSpan = top.filter(d => d.era).map(d => d.era);
                const eraText = eraSpan.length >= 2 ? `从「${eraSpan[0]}」到「${eraSpan[eraSpan.length-1]}」` : (eraSpan[0] ? `在「${eraSpan[0]}」时代` : '跨越时代');
                h += `<p>你的设计基因${eraText}画出了一道独特的弧线。`;
                h += `这种时间跨度本身就揭示了你的创作哲学——你并不拘泥于某一个流派，而是在不同时代的智慧中寻找共振。</p>`;
                if (top.length >= 2) {
                    h += `<h4>时空张力</h4>`;
                    const era1 = top[0].era || '经典时期';
                    const era2 = top[top.length - 1].era || '当代';
                    h += `<p>「${era1}」的沉淀与「${era2}」的锐气在你身上形成了一种富有创造力的张力——`;
                    h += `这意味着你既能从历史中汲取养分，又不会被传统所束缚。</p>`;
                }
                h += `<h4>发展方向</h4>`;
                h += `<p>建议你深入研究这些不同时代设计师的创作转折点——他们在何时、因何而改变了自己的设计方向。`;
                h += `这些转折故事，可能正是你当下需要的启发。</p>`;
                if (userSnippets.length) {
                    h += `<p>你在回答中提到的「${filterDisplayed(userSnippets[0])}」，正是这种跨时代思维的体现。</p>`;
                }
                return h;
            },
            // 模板2（人格画像）：仅使用 dimDesc + topFields，不引用 detected
            () => {
                let h = `<h3>深度洞察</h3>`;
                h += `<h4>人格画像</h4>`;
                const persona = dimDesc.length >= 2 ? `${dimDesc[0]}且${dimDesc[1]}` : (dimDesc[0] || '多元而开放');
                h += `<p>你的人格维度呈现出<strong>${persona}</strong>的特质组合。`;
                h += `这种看似矛盾的人格张力，恰恰是创造力的温床——最好的设计往往诞生在两种力量的拉扯之间。</p>`;
                if (dimDesc.length >= 3) {
                    h += `<h4>维度深层解读</h4>`;
                    h += `<p>值得注意的是，「${dimDesc[2]}」这一倾向为你的设计增添了额外的深度。`;
                    h += `当大多数设计师在两个维度之间摇摆时，你的第三维度赋予了你独特的判断力。</p>`;
                }
                if (topFields.length > 1) {
                    h += `<h4>跨领域潜力</h4>`;
                    h += `<p>你的维度组合天然适合<strong>${topFields.join(' × ')}</strong>的跨界实践。`;
                    h += `不同领域的碰撞会放大你人格中的独特优势，建议尝试跨学科项目来释放潜能。</p>`;
                }
                h += `<h4>成长建议</h4>`;
                h += `<p>你可以有意识地在弱势维度上做些尝试——比如如果你偏理性，试着做一个纯粹由直觉引导的设计实验；`;
                h += `如果你偏感性，试着用数据和逻辑来验证你的设计直觉。这种刻意的平衡练习会让你的设计更具说服力。</p>`;
                return h;
            },
            // 模板3（设计哲学）：仅使用 detected + uniqueTraits，不引用 dimDesc
            () => {
                let h = `<h3>深度洞察</h3>`;
                h += `<h4>设计哲学</h4>`;
                if (detected.length >= 2) {
                    h += `<p>从你的回答中，我们捕捉到<strong>${detected[0].label}</strong>与<strong>${detected[1].label}</strong>的深层交织。`;
                    h += `这不是简单的并列关系——当「${detected[0].label}」成为你的出发点，「${detected[1].label}」则是你抵达的方式。</p>`;
                } else if (detected.length === 1) {
                    h += `<p>你的回答中贯穿着强烈的<strong>${detected[0].label}</strong>基调。`;
                    h += `这种坚定的价值取向会成为你设计语言中最鲜明的标识。</p>`;
                } else {
                    h += `<p>你的回答展现出一种难以被单一标签定义的丰富性。`;
                    h += `这种多元的思维方式意味着你的设计哲学仍在动态演化中，而这本身就是一种力量。</p>`;
                }
                if (detected.length >= 3) {
                    h += `<h4>价值观图谱</h4>`;
                    h += `<p>进一步地，「${detected[2].label}」作为你的第三价值支点，`;
                    h += `为你的设计实践提供了差异化的角度。在同行还在两个维度上思考时，你已经拥有了三维视野。</p>`;
                }
                h += `<h4>实践路径</h4>`;
                h += `<p>建议你围绕自己的核心价值观，建立一个「设计判断清单」——`;
                h += `每当面对设计决策时，问自己：这个选择是否忠于我的设计哲学？`;
                h += `这会帮助你在商业需求和个人表达之间找到平衡。</p>`;
                if (userSnippets.length >= 2) {
                    h += `<p>你提到的「${filterDisplayed(userSnippets[userSnippets.length - 1])}」尤其值得深挖——`;
                    h += `这可能是你未来设计叙事的核心线索。</p>`;
                }
                return h;
            }
        ];

        const idx = (top[0]?.name?.length || 0) % templateStyles.length;
        return templateStyles[idx]();
    }
    
    showResult(ai) {
        const top = this.getTopDesigners(3);
        const field = this.getDetectedField();
        const card = document.getElementById('result-card');
        if (!top.length) { card.innerHTML = '<p class="empty-tip">无法计算结果</p>'; this.showPage('result-page'); return; }
        
        let html = `
        <div class="result-card-inner" id="shareable-card">
            <div class="card-header swiss-header">
                <div class="header-text">
                    <h2 class="card-title">DESIGNER DNA</h2>
                    <p class="card-subtitle">设计师人格基因测试结果</p>
                </div>
                <div class="header-logo">
                    <img src="https://topogenesis.top/designer_dna/httpstopogenesis.topdesigner_dnadna.png" alt="QR" class="header-qr-img" style="width:38px;height:38px;object-fit:contain;display:block;" />
                </div>
            </div>
            
            <div class="main-gene-swiss">
                <div class="swiss-gene-left">
                    <div class="gene-label">DOMINANT GENE // 主导基因</div>
                    <div class="gene-percentage" style="color:${top[0].color}">${top[0].percentage}<span class="pct-sign">%</span></div>
                </div>
                <div class="swiss-gene-right">
                    <div class="gene-designer">${top[0].name} <span class="en-name">${top[0].nameEn || ''}</span></div>
                    <div class="gene-field">DOMAIN: <strong>${field}</strong> // ${top[0].field || ''}</div>
                </div>
            </div>
            
            <div class="infographic-section">
                <h3 class="chart-title">GENE SPECTRUM // 基因图谱</h3>
                <div class="viz-container">
                    <div class="viz-grid">
                        <div class="viz-grid-line" style="left: 0%;"></div>
                        <div class="viz-grid-line" style="left: 25%;"></div>
                        <div class="viz-grid-line" style="left: 50%;"></div>
                        <div class="viz-grid-line" style="left: 75%;"></div>
                        <div class="viz-grid-line" style="left: 100%;"></div>
                    </div>
                    <div class="gene-bars-swiss">
                        ${top.map((d, i) => `
                        <div class="viz-row">
                            <div class="viz-label">
                                <span class="viz-name">${d.name}</span>
                                <span class="viz-era">${d.era || ''}</span>
                            </div>
                            <div class="viz-track">
                                <div class="viz-fill" style="width:0%; background-color:${d.color}" data-width="${d.percentage}%"></div>
                                <div class="viz-value-marker" style="left:0%" data-left="${d.percentage}%">${d.percentage}</div>
                            </div>
                        </div>`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="personality-chart">
                <h3 class="chart-title">DIMENSIONS // 人格维度</h3>
                <div class="radar-container swiss-radar">
                    <div class="radar-item"><div class="radar-tags"><span class="radar-tag-left">混沌 CHAOS</span><span class="radar-tag-right">秩序 ORDER</span></div><div class="radar-bar"><div class="radar-fill order" style="width:50%"></div><div class="radar-center-line"></div></div></div>
                    <div class="radar-item"><div class="radar-tags"><span class="radar-tag-left">感性 EMOTION</span><span class="radar-tag-right">理性 REASON</span></div><div class="radar-bar"><div class="radar-fill rational" style="width:50%"></div><div class="radar-center-line"></div></div></div>
                    <div class="radar-item"><div class="radar-tags"><span class="radar-tag-left">创新 NEW</span><span class="radar-tag-right">传统 OLD</span></div><div class="radar-bar"><div class="radar-fill tradition" style="width:50%"></div><div class="radar-center-line"></div></div></div>
                </div>
            </div>
            
            <div class="designer-profile swiss-profile">
                <div class="profile-header">
                    <div class="profile-title">PROFILE // 档案</div>
                </div>
                <div class="profile-content">
                    <div class="profile-info">
                        <div class="profile-desc">"${top[0].description || ''}"</div>
                        <div class="profile-traits">
                            ${top[0].traits?.slice(0, 4).map(t => `<span class="trait-tag-swiss">[ ${t} ]</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
            
            ${ai ? `<div class="ai-insight swiss-insight"><div class="insight-label">AI INSIGHT // 深度解析</div><div class="insight-body">${ai}</div></div>` : ''}
            
            <div class="card-footer swiss-footer"><span>DATA BY CELL & CHORD DESIGN LAB</span></div>
        </div>`;
        
        card.innerHTML = html;
        this.showPage('result-page');
        
        setTimeout(() => {
            document.querySelectorAll('.viz-fill').forEach(b => { b.style.width = b.dataset.width; b.style.transition = 'width 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)'; });
            document.querySelectorAll('.viz-value-marker').forEach(m => { m.style.left = m.dataset.left; m.style.transition = 'left 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)'; });
            this.setRadarPositions();
        }, 400);
    }
    
    setRadarPositions() {
        const getPct = (v) => Math.max(10, Math.min(90, 50 + v * 5));
        const o = document.querySelector('.radar-fill.order');
        const r = document.querySelector('.radar-fill.rational');
        const t = document.querySelector('.radar-fill.tradition');
        if (o) o.style.width = getPct(this.dimensionScores.order_vs_chaos) + '%';
        if (r) r.style.width = getPct(this.dimensionScores.rational_vs_emotional) + '%';
        if (t) t.style.width = getPct(this.dimensionScores.tradition_vs_innovation) + '%';
    }
    
    retakeTest() { this.showPage('welcome-page'); }
    
    async shareResult() {
        const card = document.getElementById('shareable-card');
        if (!card) {
            this.showToast('请先生成结果');
            return;
        }
        
        try {
            this.showToast('正在生成图片...');
            
            // 使用 html2canvas 将卡片转换为图片
            const canvas = await html2canvas(card, {
                scale: 2, // 提高分辨率
                useCORS: true,
                backgroundColor: getComputedStyle(document.body).getPropertyValue('--card').trim(),
                logging: false
            });
            
            // 将 canvas 转换为 blob
            canvas.toBlob(async (blob) => {
                if (!blob) {
                    this.showToast('生成图片失败');
                    return;
                }
                
                // 尝试使用 Web Share API 分享（移动端）
                if (navigator.share && navigator.canShare) {
                    const file = new File([blob], 'designer-dna-result.png', { type: 'image/png' });
                    const shareData = { files: [file], title: '设计师人格基因测试结果' };
                    
                    if (navigator.canShare(shareData)) {
                        try {
                            await navigator.share(shareData);
                            return;
                        } catch (err) {
                            // 用户取消分享，继续下载
                            if (err.name === 'AbortError') return;
                        }
                    }
                }
                
                // 下载图片
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `designer-dna-${Date.now()}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                
                this.showToast('图片已保存');
            }, 'image/png');
        } catch (err) {
            console.error('保存图片失败:', err);
            this.showToast('保存图片失败');
        }
    }
    
    showToast(m) {
        const e = document.querySelector('.toast'); if (e) e.remove();
        const t = document.createElement('div'); t.className = 'toast'; t.textContent = m;
        document.body.appendChild(t); setTimeout(() => t.classList.add('show'), 10);
        setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => { window.dnaTest = new DesignerDNATest(); });
