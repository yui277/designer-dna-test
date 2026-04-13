/* =========================================
   [网页基底脚本] webbase.js
   包含：Canvas背景自动生成、完整的光/暗主题动画逻辑、主题切换功能
   ========================================= */

(function() {
    let canvas = document.getElementById('bg-canvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'bg-canvas';
        document.body.insertBefore(canvas, document.body.firstChild);
    }
    const ctx = canvas.getContext('2d');
    let currentEffectInstance = null;

    class LightThemeEffect {
        constructor(canvas, ctx) {
            this.canvas = canvas;
            this.ctx = ctx;
            this.animationId = null;
            this.resizeHandler = this.init.bind(this);
            this.mousemoveHandler = this.onMouseMove.bind(this);
            this.clickHandler = this.onClick.bind(this);
            this.touchHandler = this.onTouch.bind(this);
            this.width = 0;
            this.height = 0;
            this.particles = [];
            this.cols = 0;
            this.rows = 0;
            this.runners = [];
            this.hoverX = -9999;
            this.hoverY = -9999;
            this.isIdle = false;
            this.idleTimer = null;
            this.globalTime = 0;
            this.config = {
                tileSize: 30,
                gap: 1,
                baseColorH: 210,
                baseColorS: 5,
                baseColorL: 93,
                idleAnimAmp: 3.0,
                idleAnimSpeed: 0.05,
                hoverRange: 80,
                runnerSpeed: 2,
                flipSpeed: 0.15,
                turnChance: 0.2,
                runnerSatMin: 5,
                runnerSatMax: 15
            };
        }

        start() {
            window.addEventListener('resize', this.resizeHandler);
            window.addEventListener('mousemove', this.mousemoveHandler);
            window.addEventListener('click', this.clickHandler);
            window.addEventListener('touchstart', this.touchHandler, {passive: false});
            this.init();
            this.animate();
        }

        stop() {
            cancelAnimationFrame(this.animationId);
            window.removeEventListener('resize', this.resizeHandler);
            window.removeEventListener('mousemove', this.mousemoveHandler);
            window.removeEventListener('click', this.clickHandler);
            window.removeEventListener('touchstart', this.touchHandler);
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        init() {
            this.width = this.canvas.width = window.innerWidth;
            this.height = this.canvas.height = window.innerHeight;
            this.cols = Math.ceil(this.width / (this.config.tileSize + this.config.gap));
            this.rows = Math.ceil(this.height / (this.config.tileSize + this.config.gap));
            this.particles = [];
            for (let i = 0; i < this.cols; i++) {
                this.particles[i] = [];
                for (let j = 0; j < this.rows; j++) {
                    let x = i * (this.config.tileSize + this.config.gap);
                    let y = j * (this.config.tileSize + this.config.gap);
                    this.particles[i][j] = new LightParticle(this, i, j, x, y, this.config.tileSize);
                }
            }
        }

        onMouseMove(e) {
            this.hoverX = e.clientX;
            this.hoverY = e.clientY;
            this.isIdle = false;
            clearTimeout(this.idleTimer);
            this.idleTimer = setTimeout(() => { this.isIdle = true; this.hoverX = -9999; }, 2000);
        }

        onClick(e) {
            this.triggerPulse(e.clientX, e.clientY);
        }
        
        onTouch(e) {
            this.triggerPulse(e.touches[0].clientX, e.touches[0].clientY);
        }

        triggerPulse(x, y) {
            this.isIdle = false;
            let c = Math.floor(x / (this.config.tileSize + this.config.gap));
            let r = Math.floor(y / (this.config.tileSize + this.config.gap));
            if (c < 0 || c >= this.cols || r < 0 || r >= this.rows) return;
            let runnerCount = Math.floor(Math.random() * 5) + 2;
            for (let i = 0; i < runnerCount; i++) {
                let dirs = [{dc: 0, dr: -1}, {dc: 0, dr: 1}, {dc: -1, dr: 0}, {dc: 1, dr: 0}];
                let dir = dirs[Math.floor(Math.random() * dirs.length)];
                let life = Math.floor(Math.random() * 40) + 10;
                let h = Math.floor(Math.random() * 360);
                let s = this.config.runnerSatMin + Math.random() * (this.config.runnerSatMax - this.config.runnerSatMin);
                let l;
                if (Math.random() < 0.15) l = 45 + Math.random() * 20;
                else l = 75 + Math.random() * 10;
                this.runners.push(new LightRunner(this, c, r, dir.dc, dir.dr, life, h, s, l));
            }
            if(this.particles[c] && this.particles[c][r]) {
                 this.particles[c][r].triggerFlip(Math.floor(Math.random() * 360), 20, 30);
            }
        }

        animate() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.globalTime += this.config.idleAnimSpeed;
            for (let i = this.runners.length - 1; i >= 0; i--) {
                let runner = this.runners[i];
                runner.update();
                if (runner.life <= 0) this.runners.splice(i, 1);
            }
            for (let i = 0; i < this.cols; i++) {
                for (let j = 0; j < this.rows; j++) {
                    let p = this.particles[i][j];
                    p.update();
                    p.draw();
                }
            }
            this.animationId = requestAnimationFrame(this.animate.bind(this));
        }
    }

    class LightParticle {
        constructor(effect, col, row, x, y, size) {
            this.effect = effect;
            this.col = col; this.row = row; this.x = x; this.y = y; this.size = size;
            this.h = effect.config.baseColorH + (Math.random() * 20 - 10);
            this.s = effect.config.baseColorS + Math.random() * 5;
            this.l = effect.config.baseColorL + (Math.random() * 4 - 2);
            this.scale = 1; this.targetScale = 1;
            this.lightnessOffset = 0; this.idleLightness = 0;
            this.phase = Math.random() * Math.PI * 2 + (col * 0.1) + (row * 0.1);
            this.flipProgress = 0; this.isFlipping = false;
            this.activeH = 0; this.activeS = 0; this.activeL = 0;
            this.offsetX = 0; this.offsetY = 0;
        }
        update() {
            this.idleLightness = Math.sin(this.effect.globalTime + this.phase) * this.effect.config.idleAnimAmp;
            if (!this.effect.isIdle) {
                let dx = this.effect.hoverX - (this.x + this.size/2);
                let dy = this.effect.hoverY - (this.y + this.size/2);
                let dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < this.effect.config.hoverRange) {
                    let force = 1 - (dist / this.effect.config.hoverRange);
                    this.targetScale = 1 + force * 0.3;
                    this.offsetX = dx * force * 0.1;
                    this.offsetY = dy * force * 0.1;
                    this.lightnessOffset = force * 7;
                } else {
                    this.targetScale = 1; this.offsetX *= 0.9; this.offsetY *= 0.9;
                    if (!this.isFlipping) this.lightnessOffset *= 0.9;
                }
            } else {
                this.targetScale = 1; this.offsetX *= 0.9; this.offsetY *= 0.9;
                if (!this.isFlipping) this.lightnessOffset *= 0.9;
            }
            this.scale += (this.targetScale - this.scale) * 0.1;
            if (this.isFlipping) {
                this.flipProgress += this.effect.config.flipSpeed;
                if (this.flipProgress < 0.5) this.lightnessOffset = 10 * (this.flipProgress * 2);
                else this.lightnessOffset = 10 * (1 - (this.flipProgress - 0.5) * 2);
                if (this.flipProgress >= 1) {
                    this.isFlipping = false; this.flipProgress = 0; this.lightnessOffset = 0;
                }
            }
        }
        triggerFlip(h, s, l) {
            if (!this.isFlipping || this.flipProgress > 0.8) {
                this.isFlipping = true; this.flipProgress = 0;
                this.activeH = h; this.activeS = s; this.activeL = l;
            }
        }
        draw() {
            let drawSize = this.size * this.scale;
            let drawX = this.x + this.offsetX + (this.size - drawSize) / 2;
            let drawY = this.y + this.offsetY + (this.size - drawSize) / 2;
            let flipScaleX = 1;
            if (this.isFlipping) flipScaleX = Math.abs(Math.cos(this.flipProgress * Math.PI));
            let finalW = drawSize * flipScaleX;
            let finalH = drawSize;
            let finalX = drawX + (drawSize - finalW) / 2;
            let drawH, drawS, drawL;
            if (this.isFlipping) {
                drawH = this.activeH; drawS = this.activeS; drawL = this.activeL + this.lightnessOffset;
            } else {
                drawH = this.h; drawS = this.s; drawL = this.l + this.lightnessOffset + this.idleLightness;
            }
            this.effect.ctx.fillStyle = `hsl(${drawH}, ${drawS}%, ${drawL}%)`;
            this.effect.ctx.fillRect(finalX, drawY, finalW, finalH);
        }
    }

    class LightRunner {
        constructor(effect, c, r, dc, dr, life, h, s, l) {
            this.effect = effect; this.c = c; this.r = r; this.dc = dc; this.dr = dr;
            this.life = life; this.h = h; this.s = s; this.l = l;
            this.stepTimer = 0;
        }
        update() {
            this.stepTimer++;
            if (this.stepTimer >= this.effect.config.runnerSpeed) {
                this.stepTimer = 0;
                this.c += this.dc; this.r += this.dr;
                this.life--;
                if (this.life > 0 && Math.random() < this.effect.config.turnChance) this.changeDirection();
                if (this.c >= 0 && this.c < this.effect.cols && this.r >= 0 && this.r < this.effect.rows) {
                    if (this.effect.particles[this.c] && this.effect.particles[this.c][this.r]) {
                        this.effect.particles[this.c][this.r].triggerFlip(this.h, this.s, this.l);
                    }
                } else {
                    this.life = 0;
                }
            }
        }
        changeDirection() {
            if (this.dc !== 0) {
                this.dc = 0; this.dr = Math.random() > 0.5 ? 1 : -1;
            } else {
                this.dr = 0; this.dc = Math.random() > 0.5 ? 1 : -1;
            }
        }
    }

    class DarkThemeEffect {
        constructor(canvas, ctx) {
            this.canvas = canvas;
            this.ctx = ctx;
            this.animationId = null;
            this.resizeHandler = this.init.bind(this);
            this.mousemoveHandler = this.onMouseMove.bind(this);
            this.mousedownHandler = this.onMouseDown.bind(this);
            this.touchHandler = this.onTouch.bind(this);
            this.width = 0;
            this.height = 0;
            this.cells = [];
            this.waves = [];
            this.mouse = { x: -1000, y: -1000 };
            this.lastActiveTime = Date.now();
            this.currentHue = 210;
            this.targetHue = 210;
            this.cellSize = 30;
            this.gap = 40;
        }

        start() {
            window.addEventListener('resize', this.resizeHandler);
            window.addEventListener('mousemove', this.mousemoveHandler);
            window.addEventListener('mousedown', this.mousedownHandler);
            window.addEventListener('touchstart', this.touchHandler, {passive: false});
            this.init();
            this.animate();
        }

        stop() {
            cancelAnimationFrame(this.animationId);
            window.removeEventListener('resize', this.resizeHandler);
            window.removeEventListener('mousemove', this.mousemoveHandler);
            window.removeEventListener('mousedown', this.mousedownHandler);
            window.removeEventListener('touchstart', this.touchHandler);
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        init() {
            this.width = this.canvas.width = window.innerWidth;
            this.height = this.canvas.height = window.innerHeight;
            this.cells = [];
            const cols = Math.ceil(this.width / this.gap) + 1;
            const rows = Math.ceil(this.height / this.gap) + 1;
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const x = col * this.gap;
                    const y = row * this.gap;
                    this.cells.push(new DarkCell(this, x, y, col, row));
                }
            }
        }

        onMouseMove(e) {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            this.lastActiveTime = Date.now();
        }

        onMouseDown(e) {
            this.lastActiveTime = Date.now();
            this.targetHue = Math.random() * 360;
            this.waves.push({ x: e.clientX, y: e.clientY, radius: 0, width: 150, strength: 1.5 });
        }

        onTouch(e) {
            this.lastActiveTime = Date.now();
            this.targetHue = Math.random() * 360;
            const t = e.touches[0];
            this.mouse.x = t.clientX;
            this.mouse.y = t.clientY;
            this.waves.push({ x: t.clientX, y: t.clientY, radius: 0, width: 150, strength: 1.5 });
        }

        animate() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            if (Date.now() - this.lastActiveTime > 2000) {
                this.mouse.x = -1000; this.mouse.y = -1000;
            }
            if (Math.abs(this.targetHue - this.currentHue) > 1) {
                this.currentHue += (this.targetHue - this.currentHue) * 0.05;
            }
            for (let i = this.waves.length - 1; i >= 0; i--) {
                this.waves[i].radius += 1.5;
                this.waves[i].strength *= 0.995;
                if (this.waves[i].strength < 0.01) this.waves.splice(i, 1);
            }
            this.cells.forEach(c => c.update());
            
            this.ctx.beginPath();
            this.ctx.lineWidth = 1;
            this.cells.forEach((c1, i) => {
                if (c1.energy < 0.05) return;
                for (let j = i + 1; j < this.cells.length; j++) {
                    const c2 = this.cells[j];
                    if (c2.y - c1.y > this.gap * 1.5) break;
                    const dx = Math.abs(c1.x - c2.x);
                    const dy = Math.abs(c1.y - c2.y);
                    const isHorizontal = (dy < 5 && dx < this.gap * 1.5);
                    const isVertical = (dx < 5 && dy < this.gap * 1.5);
                    if (isHorizontal || isVertical) {
                        const avgEnergy = (c1.energy + c2.energy) / 2;
                        if (avgEnergy > 0.05) {
                            const h = this.currentHue + avgEnergy * 20;
                            const s = 2 + avgEnergy * 13;
                            const l = 15 + avgEnergy * 35;
                            this.ctx.beginPath();
                            this.ctx.moveTo(c1.x, c1.y);
                            this.ctx.lineTo(c2.x, c2.y);
                            this.ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${avgEnergy * 0.6})`;
                            this.ctx.stroke();
                        }
                    }
                }
            });

            this.cells.forEach(c => c.draw());
            this.animationId = requestAnimationFrame(this.animate.bind(this));
        }
    }

    class DarkCell {
        constructor(effect, x, y, col, row) {
            this.effect = effect;
            this.x = x; this.y = y; this.col = col; this.row = row;
            this.baseAngle = 0; this.angle = this.baseAngle;
            this.baseScale = 0.6; this.scale = this.baseScale;
            this.energy = 0;
            this.ease = 0.005 + Math.random() * 0.02;
            this.randomPhase = Math.random() * Math.PI * 2;
        }
        update() {
            let waveAdding = 0;
            for (let i = 0; i < this.effect.waves.length; i++) {
                const w = this.effect.waves[i];
                const dx = this.x - w.x; const dy = this.y - w.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const distFromWaveFront = Math.abs(dist - w.radius);
                if (distFromWaveFront < w.width) {
                    const intensity = (1 - distFromWaveFront / w.width) * w.strength;
                    waveAdding += intensity;
                }
            }
            const dx = this.effect.mouse.x - this.x;
            const dy = this.effect.mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const mouseRange = 120;
            let targetAngle = this.baseAngle;
            let targetScale = this.baseScale + waveAdding * 0.5;
            let targetEnergy = waveAdding;
            if (dist < mouseRange) {
                const influence = (1 - dist / mouseRange);
                const angleToMouse = Math.atan2(dy, dx);
                const noise = Math.sin(Date.now() * 0.002 + this.randomPhase) * 0.3;
                targetAngle = influence * (angleToMouse + noise);
                targetScale += influence * (0.4 + Math.random() * 0.1);
                targetEnergy += influence * 0.4;
            }
            this.angle += (targetAngle - this.angle) * this.ease;
            this.scale += (targetScale - this.scale) * this.ease;
            this.energy += (targetEnergy - this.energy) * this.ease;
            if (this.energy > 1) this.energy = 1;
        }
        draw() {
            const h = this.effect.currentHue + this.energy * 20;
            const s = 2 + this.energy * 13;
            const l = 15 + this.energy * 35;
            const currentStroke = `hsla(${h}, ${s}%, ${l}%, 1)`;
            const currentFill = `hsla(${h}, ${s}%, ${l - 5}%, 1)`;
            const ctx = this.effect.ctx;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.scale(this.scale, this.scale);
            ctx.beginPath();
            const sz = this.effect.cellSize / 2;
            ctx.rect(-sz, -sz, this.effect.cellSize, this.effect.cellSize);
            ctx.fillStyle = currentFill;
            ctx.strokeStyle = currentStroke;
            ctx.lineWidth = 2;
            ctx.fill();
            ctx.stroke();
            if (this.energy > 0.05) {
                ctx.fillStyle = currentStroke;
                const inner = sz * 0.3;
                ctx.fillRect(-inner, -inner, inner * 2, inner * 2);
            }
            ctx.restore();
        }
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        const themeBtn = document.getElementById('theme-btn');
        const iconSun = document.getElementById('icon-sun');
        const iconMoon = document.getElementById('icon-moon');
        let isDarkMode = false;

        function switchTheme(toDark) {
            isDarkMode = toDark;
            if (currentEffectInstance) {
                currentEffectInstance.stop();
            }
            document.body.classList.toggle('dark-mode', isDarkMode);

            if (themeBtn && iconSun && iconMoon) {
                if (isDarkMode) {
                    iconSun.style.display = 'none';
                    iconMoon.style.display = 'block';
                    currentEffectInstance = new DarkThemeEffect(canvas, ctx);
                } else {
                    iconSun.style.display = 'block';
                    iconMoon.style.display = 'none';
                    currentEffectInstance = new LightThemeEffect(canvas, ctx);
                }
                currentEffectInstance.start();
            } else {
                if (isDarkMode) currentEffectInstance = new DarkThemeEffect(canvas, ctx);
                else currentEffectInstance = new LightThemeEffect(canvas, ctx);
                currentEffectInstance.start();
            }
        }

        currentEffectInstance = new LightThemeEffect(canvas, ctx);
        currentEffectInstance.start();

        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                switchTheme(!isDarkMode);
            });
        }
    });

})();
