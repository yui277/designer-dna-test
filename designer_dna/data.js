/**
 * 设计师人格基因数据库 - 完整版110位
 * Designer DNA Database v2.0
 */

const DESIGNERS_DB = [
    // ========== 建筑设计 (26位) ==========
    {id:'lu_ban',name:'鲁班',nameEn:'Lu Ban',era:'中国春秋',field:'建筑',subfield:'木构/匠作',title:'中华建筑与木匠鼻祖',traits:['匠人精神','榫卯智慧','工具发明','经验传承','实用主义'],description:'鲁班是中国古代建筑的象征，榫卯理念影响了千年营建史。',color:'#8B4513',icon:'🔨'},
    {id:'li_jie',name:'李诫',nameEn:'Li Jie',era:'中国北宋',field:'建筑',subfield:'规范/理论',title:'《营造法式》编纂者',traits:['系统思维','规范制定','知识整理','制度建构','学术精神'],description:'李诫编纂的《营造法式》是中国古代最完整的建筑技术规范。',color:'#A0522D',icon:'📜'},
    {id:'vitruvius',name:'维特鲁威',nameEn:'Vitruvius',era:'古罗马',field:'建筑',subfield:'理论/古典',title:'建筑三要素提出者',traits:['古典理性','坚固实用','比例秩序','理论奠基','永恒法则'],description:'维特鲁威的《建筑十书》提出了"坚固、实用、美观"的建筑三要素。',color:'#CD853F',icon:'🏛️'},
    {id:'palladio',name:'帕拉迪奥',nameEn:'Andrea Palladio',era:'意大利文艺复兴',field:'建筑',subfield:'古典主义',title:'古典主义对称美学大师',traits:['对称美学','比例和谐','古典复兴','数学理性','优雅秩序'],description:'帕拉迪奥的古典主义美学影响了西方建筑几个世纪。',color:'#D2B48C',icon:'🏰'},
    {id:'gaudi',name:'高迪',nameEn:'Antoni Gaudí',era:'西班牙',field:'建筑',subfield:'塑性/仿生',title:'塑性建筑大师',traits:['自然仿生','曲线幻想','宗教虔诚','工艺极致','有机形态'],description:'高迪的圣家族大教堂是塑性建筑的巅峰。',color:'#FF6347',icon:'⛪'},
    {id:'frank_lloyd_wright',name:'赖特',nameEn:'Frank Lloyd Wright',era:'美国',field:'建筑',subfield:'有机建筑',title:'有机建筑之父',traits:['自然共生','水平延展','空间流动','美国本土','整体设计'],description:'赖特提出有机建筑理念，流水别墅是建筑与自然共生的典范。',color:'#228B22',icon:'🏡'},
    {id:'le_corbusier',name:'柯布西耶',nameEn:'Le Corbusier',era:'瑞士/法国',field:'建筑',subfield:'现代主义',title:'现代主义建筑旗手',traits:['功能主义','机械美学','模度理论','城市乌托邦','革命精神'],description:'柯布西耶提出现代建筑五原则，深刻改变了现代城市面貌。',color:'#4682B4',icon:'🏢'},
    {id:'mies_vander',name:'密斯',nameEn:'Mies van der Rohe',era:'德国/美国',field:'建筑',subfield:'极简/包豪斯',title:'"少即是多"的倡导者',traits:['极简克制','钢玻纯粹','流动空间','结构诚实','精致节点'],description:'密斯的巴塞罗那馆是极简与空间流动的永恒经典。',color:'#2F4F4F',icon:'▫️'},
    {id:'gropius',name:'格罗皮乌斯',nameEn:'Walter Gropius',era:'德国',field:'建筑',subfield:'包豪斯/教育',title:'包豪斯学校创始人',traits:['教育改革','跨学科','艺术与工业','集体协作','社会理想'],description:'格罗皮乌斯创立了包豪斯，彻底改变了现代设计教育。',color:'#4169E1',icon:'🎓'},
    {id:'louis_kahn',name:'路易·康',nameEn:'Louis Kahn',era:'美国',field:'建筑',subfield:'纪念性/精神',title:'光与影的诗人',traits:['精神性','厚重体量','光之冥想','永恒纪念','哲学追问'],description:'路易·康追求建筑的"存在感"，萨尔克研究所是光与影的对话。',color:'#696969',icon:'💡'},
    {id:'alvar_aalto',name:'阿尔托',nameEn:'Alvar Aalto',era:'芬兰',field:'建筑',subfield:'人性化现代',title:'斯堪的纳维亚现代主义之父',traits:['人文关怀','有机材料','波浪曲线','自然光线','北欧温情'],description:'阿尔托将人性化的温暖融入现代主义。',color:'#8FBC8F',icon:'🌲'},
    {id:'liang_sicheng',name:'梁思成',nameEn:'Liang Sicheng',era:'中国',field:'建筑',subfield:'古建保护',title:'中国建筑史学奠基人',traits:['文化守护','学术研究','中西融合','营造法式','历史情怀'],description:'梁思成系统研究中国古代建筑，为古建保护做出巨大贡献。',color:'#8B0000',icon:'🏯'},
    {id:'lin_huiyin',name:'林徽因',nameEn:'Lin Huiyin',era:'中国',field:'建筑',subfield:'国徽/纪念碑',title:'中国第一位女性建筑学家',traits:['文学诗意','国徽设计','文化融合','女性先锋','家国情怀'],description:'林徽因参与设计国徽和人民英雄纪念碑。',color:'#DB7093',icon:'🎭'},
    {id:'pei_im',name:'贝聿铭',nameEn:'I. M. Pei',era:'美籍华人',field:'建筑',subfield:'现代几何',title:'现代主义最后的巨匠',traits:['几何纯粹','文化对话','光之运用','现代东方','优雅理性'],description:'贝聿铭的卢浮宫玻璃金字塔和苏州博物馆是东西方对话的典范。',color:'#4682B4',icon:'🔷'},
    {id:'kenzo_tange',name:'丹下健三',nameEn:'Kenzo Tange',era:'日本',field:'建筑',subfield:'现代日本',title:'首位普利兹克奖日本建筑师',traits:['现代传统','结构表现','城市尺度','战后重建','新陈代谢'],description:'丹下健三将现代主义与日本传统完美融合。',color:'#DC143C',icon:'🗼'},
    {id:'tadao_ando',name:'安藤忠雄',nameEn:'Tadao Ando',era:'日本',field:'建筑',subfield:'清水混凝土',title:'清水混凝土诗人',traits:['禅意空间','光影游戏','混凝土诗意','几何纯粹','自然冥想'],description:'安藤忠雄用清水混凝土创造出充满禅意的精神空间。',color:'#808080',icon:'✝️'},
    {id:'zaha_hadid',name:'扎哈·哈迪德',nameEn:'Zaha Hadid',era:'英国/伊拉克',field:'建筑',subfield:'解构/参数化',title:'解构主义女皇',traits:['参数化曲线','未来主义','解构颠覆','流体几何','突破边界'],description:'扎哈的流线型建筑打破了传统建筑的静态秩序。',color:'#9400D3',icon:'🌀'},
    {id:'rem_koolhaas',name:'库哈斯',nameEn:'Rem Koolhaas',era:'荷兰',field:'建筑',subfield:'OMA/思想',title:'最具颠覆性的思想家',traits:['批判思维','城市研究','功能混合','非常规形态','理论写作'],description:'库哈斯是建筑师中的思想家，央视大楼是他颠覆性的体现。',color:'#FF4500',icon:'📐'},
    {id:'norman_foster',name:'诺曼·福斯特',nameEn:'Norman Foster',era:'英国',field:'建筑',subfield:'高技派',title:'高技派代表人物',traits:['技术表现','生态智能','结构透明','未来工程','效率美学'],description:'福斯特的苹果飞船总部是高技派与生态智能的结合。',color:'#00CED1',icon:'🚀'},
    {id:'frank_gehry',name:'弗兰克·盖里',nameEn:'Frank Gehry',era:'美国',field:'建筑',subfield:'解构/钛金属',title:'钛金属扭曲建筑大师',traits:['雕塑变形','钛金属曲面','艺术碰撞','非线性格局','自由表达'],description:'盖里的毕尔巴鄂古根海姆用钛金属曲面震撼世界。',color:'#C0C0C0',icon:'🦋'},
    {id:'renzo_piano',name:'伦佐·皮亚诺',nameEn:'Renzo Piano',era:'意大利',field:'建筑',subfield:'高技/文化',title:'蓬皮杜中心设计者',traits:['轻盈透明','文化建筑','技术诗意','精细节点','开放公共'],description:'皮亚诺的蓬皮杜中心颠覆了文化建筑的表达方式。',color:'#FF69B4',icon:'🎨'},
    {id:'peter_zumthor',name:'卒姆托',nameEn:'Peter Zumthor',era:'瑞士',field:'建筑',subfield:'氛围/材质',title:'极致追求材质与氛围的工匠',traits:['感官体验','材质记忆','氛围营造','慢工细活','空间冥想'],description:'卒姆托的瓦尔斯温泉浴场是材质与光影的极致冥想。',color:'#556B2F',icon:'🧘'},
    {id:'wang_shu',name:'王澍',nameEn:'Wang Shu',era:'中国',field:'建筑',subfield:'本土/文人',title:'首位普利兹克奖中国籍得主',traits:['传统匠艺','废弃材料','文人审美','自然山水','文化记忆'],description:'王澍用回收青砖废瓦建造出深具中国文化底蕴的建筑。',color:'#6B4423',icon:'🧱'},
    {id:'ma_yansong',name:'马岩松',nameEn:'Ma Yansong',era:'中国',field:'建筑',subfield:'MAD/山水',title:'"山水城市"理念倡导者',traits:['山水意境','自然有机','东方未来','情感建筑','诗意乌托邦'],description:'马岩松的梦露大厦是山水意境的当代诠释。',color:'#00FA9A',icon:'🏔️'},
    {id:'bjarke_ingels',name:'英格斯',nameEn:'Bjarke Ingels',era:'丹麦',field:'建筑',subfield:'BIG/实用乌托邦',title:'"实用乌托邦"倡导者',traits:['趣味脑洞','图解思维','社交驱动','可持续乐观','跨界叙事'],description:'英格斯的BIG事务所用趣味和脑洞重新定义建筑。',color:'#FFD700',icon:'💡'},
    {id:'toyo_ito',name:'伊东丰雄',nameEn:'Toyo Ito',era:'日本',field:'建筑',subfield:'流动性/自然',title:'"漫游式"建筑倡导者',traits:['轻盈流动','自然隐喻','游牧空间','模糊边界','诗意结构'],description:'伊东丰雄的仙台传媒中心是流动性建筑的当代杰作。',color:'#87CEEB',icon:'🌊'},

    // ========== 平面/视觉传达 (20位) ==========
    {id:'william_morris',name:'威廉·莫里斯',nameEn:'William Morris',era:'英国',field:'平面',subfield:'工艺美术',title:'工艺美术运动领袖',traits:['手工艺复兴','反工业化','自然纹样','中世纪浪漫','社会理想'],description:'莫里斯反对工业粗制滥造，复兴了精美手工艺与排版。',color:'#2E8B57',icon:'🌿'},
    {id:'jan_tschichold',name:'奇肖尔德',nameEn:'Jan Tschichold',era:'德国',field:'平面',subfield:'排印学',title:'现代字体排布法则制定者',traits:['理性排版','非对称','功能性','字体革命','规则建立'],description:'奇肖尔德的《新排印学》制定了现代字体排布的核心法则。',color:'#1C1C1C',icon:'🔤'},
    {id:'muller_brockmann',name:'布罗克曼',nameEn:'Josef Müller-Brockmann',era:'瑞士',field:'平面',subfield:'网格系统',title:'网格系统先驱',traits:['理性网格','无衬线美学','信息秩序','瑞士精确','视觉逻辑'],description:'布罗克曼确立了瑞士国际主义的网格排版美学。',color:'#DC143C',icon:'📊'},
    {id:'paul_rand',name:'保罗·兰德',nameEn:'Paul Rand',era:'美国',field:'平面',subfield:'企业标识',title:'现代企业标识之父',traits:['标志设计','现代主义','视觉幽默','企业品牌','永恒简洁'],description:'兰德为IBM、ABC等设计的标志至今仍在沿用。',color:'#000080',icon:'💼'},
    {id:'saul_bass',name:'索尔·巴斯',nameEn:'Saul Bass',era:'美国',field:'平面',subfield:'电影视觉',title:'电影片头设计之父',traits:['动态图形','极简符号','电影叙事','几何构成','悬念张力'],description:'巴斯为希区柯克等导演创造了动态排印的视觉奇观。',color:'#8B008B',icon:'🎬'},
    {id:'milton_glaser',name:'格拉泽',nameEn:'Milton Glaser',era:'美国',field:'平面',subfield:'图像设计',title:'"I ♥ NY"创作者',traits:['图像符号','波普色彩','人文关怀','文化标识','迷幻风格'],description:'格拉泽的"I ♥ NY"是史上最成功的城市标识。',color:'#FF1493',icon:'❤️'},
    {id:'massimo_vignelli',name:'维涅里',nameEn:'Massimo Vignelli',era:'意大利/美国',field:'平面',subfield:'信息设计',title:'信息设计教科书级大师',traits:['信息架构','现代纪律','网格严谨','Helvetica','永恒优雅'],description:'维涅里的纽约地铁导视系统是信息设计的标杆。',color:'#FFD700',icon:'🚇'},
    {id:'paula_scher',name:'宝拉·雪儿',nameEn:'Paula Scher',era:'美国',field:'平面',subfield:'字体/品牌',title:'Pentagram首位女性合伙人',traits:['字体表现','大胆色彩','品牌塑造','女性力量','视觉叙事'],description:'雪儿塑造了花旗银行、蒂芙尼等品牌的视觉形象。',color:'#FF6347',icon:'✏️'},
    {id:'stefan_sagmeister',name:'萨格迈斯特',nameEn:'Stefan Sagmeister',era:'奥地利',field:'平面',subfield:'实验字体',title:'惊世骇俗的"设计怪才"',traits:['实验精神','身体媒介','反叛表达','字体创新','观念冲击'],description:'萨格迈斯特用实验性字体震撼设计界。',color:'#FF4500',icon:'🤯'},
    {id:'david_carson',name:'大卫·卡森',nameEn:'David Carson',era:'美国',field:'平面',subfield:'Grunge排版',title:'"垃圾派"字体设计先锋',traits:['打破规则','混沌美学','青年文化','叛逆精神','感性表达'],description:'卡森完全打破排版规则，定义了90年代青年文化视觉。',color:'#8B4513',icon:'💥'},
    {id:'yusaku_kamekura',name:'龟仓雄策',nameEn:'Yusaku Kamekura',era:'日本',field:'平面',subfield:'日本现代',title:'日本现代平面设计之父',traits:['奥运视觉','国家形象','现代日本','国际语言','开拓精神'],description:'龟仓雄策确立了日本设计在国际舞台上的地位。',color:'#DC143C',icon:'🇯🇵'},
    {id:'ikko_tanaka',name:'田中一光',nameEn:'Ikko Tanaka',era:'日本',field:'平面',subfield:'传统现代',title:'无印良品缔造者之一',traits:['浮世绘融合','包豪斯网格','MUJI美学','日本精神','东西对话'],description:'田中一光将日本传统艺术与现代包豪斯网格完美结合。',color:'#FF8C00',icon:'🎎'},
    {id:'shigeo_fukuda',name:'福田繁雄',nameEn:'Shigeo Fukuda',era:'日本',field:'平面',subfield:'错视/海报',title:'世界三大海报设计师之一',traits:['视觉错视','幽默反战','极简表达','智力游戏','空间幻觉'],description:'福田繁雄以错视和幽默的极简海报闻名于世。',color:'#4B0082',icon:'👁️'},
    {id:'kenya_hara',name:'原研哉',nameEn:'Kenya Hara',era:'日本',field:'平面',subfield:'MUJI/哲学',title:'无印良品艺术总监',traits:['白之美学','空Emptiness','感觉设计','极简禅意','东方哲学'],description:'原研哉的"白"和"空"美学深刻影响了亚洲当代美学。',color:'#F5F5F5',icon:'⬜'},
    {id:'kan_taikeung',name:'靳埭强',nameEn:'Kan Tai-keung',era:'中国香港',field:'平面',subfield:'水墨文化',title:'华人平面设计泰斗',traits:['水墨意境','中西融合','文化身份','银行标志','文人精神'],description:'靳埭强将中国水墨文化与西方现代设计观念融为一体。',color:'#2F4F4F',icon:'🖌️'},
    {id:'alan_chan',name:'陈幼坚',nameEn:'Alan Chan',era:'中国香港',field:'平面',subfield:'东情西韵',title:'"东情西韵"倡导者',traits:['东西方对话','商业品牌','精致优雅','文化平衡','国际视野'],description:'陈幼坚成功融合中西文化，操刀大量品牌案例。',color:'#C0C0C0',icon:'🌏'},
    {id:'lv_jingren',name:'吕敬人',nameEn:'Lü Jingren',era:'中国',field:'平面',subfield:'书籍设计',title:'中国当代书籍设计大师',traits:['书筑理念','传统装帧','书籍艺术','材质感知','文化传承'],description:'吕敬人将中国传统装帧与现代书籍艺术完美结合。',color:'#8B4513',icon:'📖'},
    {id:'han_jiaying',name:'韩家英',nameEn:'Han Jiaying',era:'中国',field:'平面',subfield:'当代中国',title:'当代中国平面设计里程碑',traits:['当代中国','文化符号','天涯海报','视觉隐喻','批判意识'],description:'韩家英的《天涯》杂志海报是当代中国设计的里程碑。',color:'#B22222',icon:'🌅'},
    {id:'huang_hai',name:'黄海',nameEn:'Huang Hai',era:'中国',field:'平面',subfield:'电影海报',title:'当代中国电影海报设计第一人',traits:['电影叙事','东方意境','文化出海','手绘质感','情感共鸣'],description:'黄海的电影海报以东方意境惊艳全球。',color:'#DAA520',icon:'🎞️'},
    {id:'neville_brody',name:'布罗迪',nameEn:'Neville Brody',era:'英国',field:'平面',subfield:'数字排版',title:'数字时代排版先锋',traits:['数字先锋','杂志排版','网页设计启蒙','反叛排版','技术实验'],description:'布罗迪为《The Face》制定的视觉语言影响了网页设计。',color:'#00FFFF',icon:'💻'},

    // ========== 工业/产品设计 (22位) ==========
    {id:'peter_behrens',name:'贝伦斯',nameEn:'Peter Behrens',era:'德国',field:'工业',subfield:'企业形象',title:'世界上第一位工业设计师',traits:['企业形象','全面设计','AEG系统','工业先驱','设计整合'],description:'贝伦斯为AEG设计了全面形象，首创CI设计。',color:'#36454F',icon:'⚡'},
    {id:'raymond_loewy',name:'罗维',nameEn:'Raymond Loewy',era:'美国',field:'工业',subfield:'流线型/商业',title:'工业设计之父',traits:['流线造型','商业嗅觉','大众市场','可口可乐','工业设计之父'],description:'罗维的设计涵盖可口可乐瓶到NASA空间站。',color:'#CC0000',icon:'🥤'},
    {id:'walter_teague',name:'提格',nameEn:'Walter Dorwin Teague',era:'美国',field:'工业',subfield:'装饰艺术',title:'柯达相机设计者',traits:['装饰艺术','工业美学','柯达设计','Boeing','几何优雅'],description:'提格将几何装饰艺术引入大规模工业生产。',color:'#B8860B',icon:'📷'},
    {id:'norman_bel_geddes',name:'盖迪斯',nameEn:'Norman Bel Geddes',era:'美国',field:'工业',subfield:'未来主义',title:'流线型风格推崇者',traits:['未来想象','流线型','城市规划','高速公路','乌托邦愿景'],description:'盖迪斯的"未来世界"展览影响了美国高速公路规划。',color:'#4682B4',icon:'🚗'},
    {id:'henry_dreyfuss',name:'德雷福斯',nameEn:'Henry Dreyfuss',era:'美国',field:'工业',subfield:'人体工程',title:'人体工程学设计先驱',traits:['人体尺度','用户研究','电话设计','科学方法','功能优先'],description:'德雷福斯的《人体尺度》奠定了人体工程学的基础。',color:'#708090',icon:'📞'},
    {id:'charles_ray_eames',name:'伊姆斯夫妇',nameEn:'Charles & Ray Eames',era:'美国',field:'工业',subfield:'家具/跨界',title:'20世纪最具影响力设计夫妇',traits:['胶合板成型','民主设计','趣味实验','跨界多元','伊姆斯椅'],description:'伊姆斯夫妇的伊姆斯椅是20世纪最具标志性的设计。',color:'#D2691E',icon:'🪑'},
    {id:'dieter_rams',name:'迪特·拉姆斯',nameEn:'Dieter Rams',era:'德国',field:'工业',subfield:'博朗/极简',title:'"设计十诫"提出者',traits:['少即是多','设计十诫','博朗美学','功能纯粹','永恒耐用'],description:'拉姆斯的"设计十诫"直接启发了苹果公司的设计。',color:'#1C1C1C',icon:'📻'},
    {id:'richard_sapper',name:'萨珀',nameEn:'Richard Sapper',era:'德国/意大利',field:'工业',subfield:'IT产品',title:'ThinkPad缔造者',traits:['黑盒子美学','ThinkPad','Tizio台灯','技术精致','极简商务'],description:'萨珀的ThinkPad是商务产品设计的永恒经典。',color:'#000000',icon:'💻'},
    {id:'ettore_sottsass',name:'索特萨斯',nameEn:'Ettore Sottsass',era:'意大利',field:'工业',subfield:'孟菲斯/后现代',title:'"孟菲斯"设计学派创始人',traits:['后现代反叛','孟菲斯色彩','情人节打字机','打破刻板','感官愉悦'],description:'索特萨斯以孟菲斯学派引领后现代主义风潮。',color:'#FF69B4',icon:'🎪'},
    {id:'mario_bellini',name:'贝里尼',nameEn:'Mario Bellini',era:'意大利',field:'工业',subfield:'高科技雕塑',title:'高科技感与雕塑美结合',traits:['雕塑形态','好利维蒂','高科技','柔软几何','意大利精致'],description:'贝里尼的产品兼具高科技感与细腻的雕塑美。',color:'#CD853F',icon:'🗿'},
    {id:'luigi_colani',name:'克拉尼',nameEn:'Luigi Colani',era:'德国',field:'工业',subfield:'生物设计',title:'"生物设计"倡导者',traits:['生物形态','空气动力学','流线极端','自然启发','激进创新'],description:'克拉尼以夸张的生物流线造型颠覆了传统设计。',color:'#32CD32',icon:'🐛'},
    {id:'hartmut_esslinger',name:'艾斯林格',nameEn:'Hartmut Esslinger',era:'德国',field:'工业',subfield:'青蛙设计',title:'青蛙设计创始人',traits:['白雪公主','情感科技','Frog Design','苹果早期','感性科技'],description:'艾斯林格为早期苹果电脑确立了"白雪公主"设计语言。',color:'#00FF7F',icon:'🐸'},
    {id:'jony_ive',name:'乔纳森·伊维',nameEn:'Jony Ive',era:'英国',field:'工业',subfield:'苹果/极简',title:'iPhone/iPod缔造者',traits:['极致简约','铝合金语言','用户直觉','苹果DNA','细节偏执'],description:'伊维与乔布斯共同缔造了改变世界的极简电子产品。',color:'#C0C0C0',icon:'📱'},
    {id:'james_dyson',name:'戴森',nameEn:'James Dyson',era:'英国',field:'工业',subfield:'发明/工程',title:'无袋吸尘器发明家',traits:['工程严谨','持续创新','透明技术','失败韧性','实用发明'],description:'戴森将严谨工程学与工业设计完美结合。',color:'#B22222',icon:'🌀'},
    {id:'philippe_starck',name:'斯塔克',nameEn:'Philippe Starck',era:'法国',field:'工业',subfield:'后现代/民主',title:'设计"顽童"',traits:['幽默感官','外星人榨汁机','民主设计','跨界多产','争议表达'],description:'斯塔克的外星人榨汁机是后现代工业设计的感官代表。',color:'#FFD700',icon:'👽'},
    {id:'marc_newson',name:'马克·纽森',nameEn:'Marc Newson',era:'澳大利亚',field:'工业',subfield:'柔和极简',title:'"柔和极简主义"代表',traits:['流动曲线','未来感','洛克希德椅','有机极简','跨界产品'],description:'纽森以极具未来感的流动曲线设计闻名全球。',color:'#E0E0E0',icon:'🛋️'},
    {id:'sori_yanagi',name:'柳宗理',nameEn:'Sori Yanagi',era:'日本',field:'工业',subfield:'民艺/手工艺',title:'日本民间手工艺与现代工业衔接者',traits:['民艺精神','蝴蝶凳','手工艺温暖','日本现代','有机工业'],description:'柳宗理将日本民艺之美与现代工业设计无缝衔接。',color:'#8B7355',icon:'🦋'},
    {id:'naoto_fukasawa',name:'深泽直人',nameEn:'Naoto Fukasawa',era:'日本',field:'工业',subfield:'无意识设计',title:'"无意识设计"提出者',traits:['无意识行为','直觉设计','MUJI的CD机','环境融入','克制内敛'],description:'深泽直人从不经意的行为中提炼自然流畅的设计方案。',color:'#B0C4DE',icon:'🎵'},
    {id:'karim_rashid',name:'拉希德',nameEn:'Karim Rashid',era:'埃及/加拿大',field:'工业',subfield:'色彩/塑料',title:'"塑料与色彩魔术师"',traits:['高饱和色彩','流线塑料','民主设计','乐观主义','流行文化'],description:'拉希德以流线型和高饱和色彩著称。',color:'#FF1493',icon:'💖'},
    {id:'kenji_ekuan',name:'荣久庵宪司',nameEn:'Kenji Ekuan',era:'日本',field:'工业',subfield:'GK设计',title:'龟甲万酱油瓶设计者',traits:['日常美学','GK集团','酱油瓶经典','新干线','社会设计'],description:'荣久庵宪司的酱油瓶和新干线设计是日本国民设计。',color:'#8B0000',icon:'🍶'},
    {id:'yang_mingjie',name:'杨明洁',nameEn:'Jamy Yang',era:'中国',field:'工业',subfield:'用户体验',title:'中国当代代表性工业设计师',traits:['用户体验','生活方式','科技产品','中国当代','设计思考'],description:'杨明洁倡导"创造完美用户体验"。',color:'#4169E1',icon:'🧭'},
    {id:'jia_wei',name:'贾伟',nameEn:'Jia Wei',era:'中国',field:'工业',subfield:'洛可可/商业',title:'洛可可创新设计集团创始人',traits:['商业转化','本土创新','国际化','设计产业化','洛可可风格'],description:'贾伟推动中国本土工业设计走向国际化与商业化。',color:'#FF8C00',icon:'🏭'},

    // ========== 室内/家具设计 (10位) ==========
    {id:'elsie_de_wolfe',name:'德·沃尔夫',nameEn:'Elsie de Wolfe',era:'美国',field:'室内',subfield:'现代室内',title:'美国第一位职业室内设计师',traits:['明亮清新','摆脱沉闷','现代室内','浅色美学','女性先锋'],description:'德·沃尔夫将维多利亚式的沉闷转向了明亮的现代风格。',color:'#FFFACD',icon:'🌸'},
    {id:'dorothy_draper',name:'德雷珀',nameEn:'Dorothy Draper',era:'美国',field:'室内',subfield:'现代巴洛克',title:'现代巴洛克室内设计先驱',traits:['大胆色彩','大型图案','奢华酒店','巴洛克复兴','戏剧张力'],description:'德雷珀以极其大胆的色彩统治了20世纪中期的奢华酒店。',color:'#800080',icon:'🏨'},
    {id:'eileen_gray',name:'艾琳·格雷',nameEn:'Eileen Gray',era:'爱尔兰',field:'室内',subfield:'包豪斯家具',title:'现代主义家具与建筑先锋',traits:['漆器艺术','钢管家具','E-1027','包豪斯精神','女性先锋'],description:'格雷的E-1027别墅和家具是包豪斯时期的杰作。',color:'#2F4F4F',icon:'🪞'},
    {id:'arne_jacobsen',name:'雅各布森',nameEn:'Arne Jacobsen',era:'丹麦',field:'室内',subfield:'丹麦功能主义',title:'"蛋椅"创作者',traits:['蛋椅','功能主义','有机曲线','丹麦设计','整体环境'],description:'雅各布森的蛋椅和天鹅椅是丹麦功能主义的经典。',color:'#F5F5DC',icon:'🥚'},
    {id:'hans_wegner',name:'韦格纳',nameEn:'Hans Wegner',era:'丹麦',field:'室内',subfield:'椅子大师',title:'一生创作500多把椅子的"椅子大师"',traits:['Y椅','明式灵感','木工精湛','500把椅子','丹麦传统'],description:'韦格纳的Y椅灵感来自中国明式家具。',color:'#DEB887',icon:'🪑'},
    {id:'eero_saarinen',name:'沙里宁',nameEn:'Eero Saarinen',era:'芬兰/美国',field:'室内',subfield:'跨界建筑家具',title:'TWA航站楼与郁金香椅设计者',traits:['流线有机','郁金香椅','TWA航站楼','单腿支撑','未来主义'],description:'沙里宁是跨界建筑与家具的天才。',color:'#FFA500',icon:'✈️'},
    {id:'kelly_wearstler',name:'韦斯特勒',nameEn:'Kelly Wearstler',era:'美国',field:'室内',subfield:'极繁主义',title:'当代极繁主义室内设计大师',traits:['极繁混搭','好莱坞魅力','材质碰撞','戏剧空间','大胆奢华'],description:'韦斯特勒以融合好莱坞魅力与现代艺术的混搭风格闻名。',color:'#FF69B4',icon:'✨'},
    {id:'kelly_hoppen',name:'赫本',nameEn:'Kelly Hoppen',era:'英国',field:'室内',subfield:'禅意奢华',title:'"中性色调大师"',traits:['中性色调','东方禅意','低调奢华','平衡美学','精致简约'],description:'赫本开创了将东方禅意与西方低调奢华结合的现代室内风格。',color:'#D2B48C',icon:'🕊️'},
    {id:'tony_chi',name:'季裕棠',nameEn:'Tony Chi',era:'华裔',field:'室内',subfield:'酒店设计',title:'国际顶级酒店室内设计大师',traits:['光影讲究','瑰丽酒店','高奢体验','细节偏执','东方含蓄'],description:'季裕棠在全球打造了诸多极其讲究光影的高奢酒店。',color:'#1C1C1C',icon:'🏩'},
    {id:'andre_fu',name:'傅厚民',nameEn:'Andre Fu',era:'中国香港',field:'室内',subfield:'宁静奢华',title:'"宁静的奢华"提出者',traits:['宁静奢华','瑞吉酒店','东方当代','温润材质','低调优雅'],description:'傅厚民提出"宁静的奢华"，是亚洲当代顶尖室内设计师。',color:'#F5F5F0',icon:'🌙'},

    // ========== 景观设计 (8位) ==========
    {id:'ji_cheng',name:'计成',nameEn:'Ji Cheng',era:'中国明代',field:'景观',subfield:'古典园林',title:'《园冶》作者，"虽由人作，宛自天开"',traits:['造园专著','天人合一','自然天成','中国古典','园林哲学'],description:'计成的《园冶》是世界第一部造园专著。',color:'#228B22',icon:'🏡'},
    {id:'andre_lenotre',name:'勒诺特尔',nameEn:'André Le Nôtre',era:'法国',field:'景观',subfield:'规则式园林',title:'凡尔赛宫园林设计者',traits:['几何对称','宏大轴线','规则式','法国古典','皇权美学'],description:'勒诺特尔奠定了法国古典规则式园林的绝对地位。',color:'#DAA520',icon:'⚜️'},
    {id:'capability_brown',name:'布朗',nameEn:'Capability Brown',era:'英国',field:'景观',subfield:'自然风景园',title:'英国自然风景式园林代表',traits:['自然风景','宛如天成','打破几何','自然丘陵','田园诗意'],description:'布朗打破了规则几何，追求宛如天成的自然景观。',color:'#6B8E23',icon:'🌳'},
    {id:'frederick_olmsted',name:'奥姆斯特德',nameEn:'Frederick Law Olmsted',era:'美国',field:'景观',subfield:'城市公园',title:'美国景观设计之父',traits:['中央公园','公共空间','社会关怀','学科奠基','民主绿地'],description:'奥姆斯特德的纽约中央公园将景观设计提升为现代学科。',color:'#2E8B57',icon:'🌳'},
    {id:'roberto_burle_marx',name:'布雷·马克斯',nameEn:'Roberto Burle Marx',era:'巴西',field:'景观',subfield:'热带现代',title:'现代景观设计大师',traits:['立体派应用','抽象艺术','热带植物','曲线地面','巴西现代'],description:'布雷·马克斯将立体派和抽象艺术应用于园林设计。',color:'#32CD32',icon:'🌴'},
    {id:'martha_schwartz',name:'施瓦茨',nameEn:'Martha Schwartz',era:'美国',field:'景观',subfield:'艺术景观',title:'艺术景观与波普景观先锋',traits:['波普色彩','非传统材料','塑料景观','视觉冲击','反叛表达'],description:'施瓦茨以极具视觉冲击力的非传统材料进行景观创作。',color:'#FF1493',icon:'🎨'},
    {id:'peter_walker',name:'沃克',nameEn:'Peter Walker',era:'美国',field:'景观',subfield:'极简主义',title:'极简主义景观设计泰斗',traits:['极简原则','现代艺术','911纪念','克制表达','纪念性'],description:'沃克将现代艺术原则引入景观，代表作为911纪念广场。',color:'#696969',icon:'🕯️'},
    {id:'yu_kongjian',name:'俞孔坚',nameEn:'Kongjian Yu',era:'中国',field:'景观',subfield:'海绵城市',title:'"海绵城市"与"反规划"先驱',traits:['海绵城市','反规划','生态基建','土人设计','自然做功'],description:'俞孔坚致力于用生态基础设施解决城市环境问题。',color:'#00CED1',icon:'🌊'},

    // ========== 设计理论/交互/跨界 (16位) ==========
    {id:'johannes_itten',name:'伊顿',nameEn:'Johannes Itten',era:'瑞士',field:'理论',subfield:'包豪斯基础',title:'包豪斯基础课程奠基人',traits:['色彩理论','基础课程','设计教育','直觉训练','精神表达'],description:'伊顿为现代设计教育体系打下了基石。',color:'#FF4500',icon:'🎨'},
    {id:'laszlo_moholy',name:'莫霍利-纳吉',nameEn:'László Moholy-Nagy',era:'匈牙利',field:'理论',subfield:'新媒体',title:'包豪斯新媒体与视觉教育先驱',traits:['新媒体','摄影实验','技术教学','视觉创新','未来教育'],description:'莫霍利-纳吉将摄影和新科技结合进行实验性教学。',color:'#C0C0C0',icon:'📷'},
    {id:'victor_papanek',name:'帕帕奈克',nameEn:'Victor Papanek',era:'美国',field:'理论',subfield:'社会责任',title:'《为真实的世界设计》作者',traits:['社会批判','绿色设计','伦理责任','真实世界','反商业化'],description:'帕帕奈克最早对商业化设计提出尖锐批评。',color:'#228B22',icon:'🌍'},
    {id:'buckminster_fuller',name:'富勒',nameEn:'Buckminster Fuller',era:'美国',field:'理论',subfield:'设计科学',title:'"宇宙飞船地球"概念提出者',traits:['测地线穹顶','系统思维','极简结构','全球视野','科学人文'],description:'富勒的测地线穹顶是极简材料实现最大结构强度的奇迹。',color:'#4682B4',icon:'🌐'},
    {id:'don_norman',name:'唐·诺曼',nameEn:'Don Norman',era:'美国',field:'理论',subfield:'用户体验',title:'"用户体验"一词提出者',traits:['设计心理学','以用户为中心','UX定义','认知科学','可用性'],description:'诺曼是当代以用户为中心设计（UCD）的鼻祖。',color:'#4169E1',icon:'🧠'},
    {id:'john_maeda',name:'约翰·前田',nameEn:'John Maeda',era:'美籍日裔',field:'理论',subfield:'计算设计',title:'计算设计先驱，《极简法则》作者',traits:['编程艺术','极简法则','RISD院长','计算思维','跨界融合'],description:'前田将计算机编程与传统艺术设计结合。',color:'#00CED1',icon:'💻'},
    {id:'william_mcdonough',name:'麦克多诺',nameEn:'William McDonough',era:'美国',field:'理论',subfield:'循环经济',title:'《从摇篮到摇篮》作者',traits:['循环经济','零废弃','可持续','摇篮到摇篮','生态伦理'],description:'麦克多诺深远影响了今天的可持续设计。',color:'#32CD32',icon:'♻️'},
   {id:'wang_shouzhi',name:'王受之',nameEn:'Wang Shouzhi',era:'美籍华人',field:'理论',subfield:'设计史',title:'华人现代设计史泰斗',traits:['设计史','理论启蒙','教育传承','世界现代史','学术著作'],description:'王受之的《世界现代设计史》是无数中国设计师的启蒙教材。',color:'#8B4513',icon:'📚'},
    {id:'bruno_munari',name:'布鲁诺·穆纳里',nameEn:'Bruno Munari',era:'意大利',field:'理论',subfield:'设计方法论',title:'设计方法论先驱',traits:['跨界实验','设计即游戏','儿童教育','视觉传达','方法论创新','艺术与设计'],description:'布鲁诺·穆纳里是20世纪意大利最具影响力的跨界创作者之一，横跨纯艺术、平面设计、工业设计与儿童教育。他倡导"设计即游戏"的哲学，认为创造力源于好奇心与实验精神。其著作《设计艺术》系统阐述了设计方法论，深刻影响了后世设计教育体系。',color:'#E85D04',icon:'🎲'},
    {id:'otl_aicher',name:'奥特尔·艾舍',nameEn:'Otl Aicher',era:'德国',field:'理论',subfield:'系统设计',title:'乌尔姆设计学院联合创始人',traits:['系统设计','奥运视觉','图标语言','理性主义','设计教育','功能美学'],description:'奥特尔·艾舍是乌尔姆设计学院的联合创始人，1972年慕尼黑奥运会整套视觉识别系统的设计者。他开创了系统化的图标设计语言——那套运动员象形图至今仍是信息设计的标杆。他坚信设计是理性与社会责任的结合，深刻影响了德国战后设计哲学。',color:'#1A535C',icon:'🏅'},
    {id:'ellen_lupton',name:'艾伦·拉普顿',nameEn:'Ellen Lupton',era:'美国',field:'理论',subfield:'设计教育',title:'设计理论教育家与策展人',traits:['设计教育','排版理论','策展实践','设计写作','普及传播','批判思维'],description:'艾伦·拉普顿是当代最具影响力的设计理论教育家之一，马里兰艺术学院教授、库珀·休伊特博物馆策展人。她著有《Thinking with Type》《Design Is Storytelling》等经典教材，以清晰易懂的方式将设计理论传递给全球设计师与学生，是设计知识民主化的推动者。',color:'#7209B7',icon:'📝'},
    {id:'alan_cooper',name:'艾伦·库珀',nameEn:'Alan Cooper',era:'美国',field:'理论',subfield:'交互/用户体验',title:'"交互设计之父"',traits:['人物角色法','交互设计','用户研究','About Face','目标导向','软件人性化'],description:'艾伦·库珀被誉为"交互设计之父"，是人物角色方法（Persona）的发明者。他的著作《About Face》奠定了交互设计的理论基础，提出目标导向设计（Goal-Directed Design）方法论。他创立了Cooper公司，致力于让软件变得更加人性化，深刻改变了数字产品的设计方式。',color:'#3A86FF',icon:'👤'},
    {id:'bill_moggridge',name:'比尔·莫格里奇',nameEn:'Bill Moggridge',era:'英国',field:'理论',subfield:'交互/用户体验',title:'"交互设计"一词的创造者',traits:['IDEO创始人','交互设计','笔记本电脑','设计方法','以人为本','跨学科'],description:'比尔·莫格里奇是IDEO的联合创始人，设计了世界上第一台翻盖式笔记本电脑GRiD Compass。他创造了"交互设计"（Interaction Design）这一术语，著有《Designing Interactions》，系统记录了数字时代交互设计的演进历程，是连接工业设计与数字体验的桥梁人物。',color:'#023E8A',icon:'💻'},
    {id:'tim_brown',name:'蒂姆·布朗',nameEn:'Tim Brown',era:'英国',field:'理论',subfield:'交互/用户体验',title:'"设计思维"全球推广者',traits:['设计思维','以人为本','IDEO','创新方法','跨界协作','原型驱动'],description:'蒂姆·布朗是IDEO前CEO，"设计思维"（Design Thinking）方法论的全球推广者。他的著作《Change by Design》将设计思维从设计圈推向商业、教育和社会创新领域，倡导以人为本、快速原型、跨学科协作的创新方法，深刻影响了全球企业的创新实践。',color:'#0077B6',icon:'💡'},
    {id:'ezio_manzini',name:'埃齐奥·曼齐尼',nameEn:'Ezio Manzini',era:'意大利',field:'理论',subfield:'服务/社会创新',title:'社会创新与可持续设计先驱',traits:['社会创新','可持续设计','人人设计师','服务设计','社区营造','系统变革'],description:'埃齐奥·曼齐尼是社会创新与可持续设计领域的全球领军人物，提出"人人都是设计师"的理念。他创立了DESIS网络（社会创新与可持续设计网络），连接全球设计院校推动社区层面的可持续变革。其著作《Design, When Everybody Designs》重新定义了设计师在社会变革中的角色。',color:'#2D6A4F',icon:'🌱'},
    {id:'cameron_tonkinwise',name:'卡梅隆·汤金怀斯',nameEn:'Cameron Tonkinwise',era:'澳大利亚',field:'理论',subfield:'服务/社会创新',title:'转型设计理论家',traits:['转型设计','系统变革','设计哲学','批判理论','后可持续','未来思维'],description:'卡梅隆·汤金怀斯是转型设计（Transition Design）领域的核心理论家，任教于卡内基梅隆大学设计学院。他研究设计如何推动社会系统性变革，将哲学思辨引入设计实践，批判性地审视设计在资本主义和可持续发展中的角色，为设计学科提供了深刻的理论反思。',color:'#52796F',icon:'🔄'},

    // ========== 时尚/服装设计 (8位) ==========
    {id:'coco_chanel',name:'可可·香奈儿',nameEn:'Coco Chanel',era:'法国',field:'时尚',subfield:'高级时装',title:'时尚革命先驱',traits:['少即是多','女性解放','优雅哲学','小黑裙','经典永恒','品牌传奇'],description:'可可·香奈儿是20世纪最具革命性的时尚设计师，彻底解放了女性着装。她创造了小黑裙、斜纹软呢套装和No.5香水等永恒经典，提出"少即是多"的优雅哲学。她让女性从束腰和繁复装饰中解脱，用简洁利落的线条重新定义了现代女性的优雅形象，其品牌至今仍是时尚界的终极图腾。',color:'#1C1C1C',icon:'👗'},
    {id:'yohji_yamamoto',name:'山本耀司',nameEn:'Yohji Yamamoto',era:'日本',field:'时尚',subfield:'解构时装',title:'解构主义时尚大师',traits:['黑色美学','解构主义','东方哲学','诗意剪裁','反时尚','不对称'],description:'山本耀司是日本解构主义时尚的代表人物，以标志性的黑色美学挑战西方审美标准。他的设计融合东方哲学与诗意剪裁，用不对称、超大廓形和解构手法重新定义服装与身体的关系。他曾说"黑色是最谦逊也最傲慢的颜色"，其反时尚的态度和深邃的设计哲学影响了整个时装界。',color:'#0D0D0D',icon:'🖤'},
    {id:'rei_kawakubo',name:'川久保玲',nameEn:'Rei Kawakubo',era:'日本',field:'时尚',subfield:'概念时装',title:'概念时尚先锋',traits:['概念先锋','模糊边界','反审美','Comme des Garçons','艺术时装','激进创新'],description:'川久保玲是Comme des Garçons的创始人，当代最激进的概念时尚先锋。她的设计彻底模糊了时尚与艺术的边界，以"反审美"姿态挑战一切关于美、身体和服装的传统定义。2017年纽约大都会博物馆为她举办个展，她是继伊夫·圣罗兰之后第二位获此殊荣的在世设计师。',color:'#B5179E',icon:'🎭'},
    {id:'alexander_mcqueen',name:'亚历山大·麦昆',nameEn:'Alexander McQueen',era:'英国',field:'时尚',subfield:'高级定制',title:'暗黑浪漫主义大师',traits:['暗黑浪漫','戏剧叙事','高级定制','裁缝技艺','情感张力','惊世骇俗'],description:'亚历山大·麦昆是英国最具天赋的时装设计师之一，将高级定制的精湛技艺与暗黑浪漫主义的戏剧性叙事完美融合。他的秀场如同剧场般震撼——机器人喷漆、全息投影、骷髅丝巾，每一季都是对美与死亡、自然与技术的深刻探讨。他用服装讲述了当代最动人也最令人不安的故事。',color:'#590D22',icon:'💀'},
    {id:'issey_miyake',name:'三宅一生',nameEn:'Issey Miyake',era:'日本',field:'时尚',subfield:'面料创新',title:'褶皱美学开创者',traits:['褶皱美学','面料创新','身体与织物','一生之水','技术融合','东方极简'],description:'三宅一生是日本时装界的传奇人物，以革命性的褶皱技术（Pleats Please）开创了全新的服装美学。他探索身体与织物之间的关系，将技术创新融入服装设计，创造出兼具雕塑感与实穿性的作品。他的"一生之水"香水瓶设计同样经典，体现了他对纯粹形式的不懈追求。',color:'#4361EE',icon:'🌊'},
    {id:'vivienne_westwood',name:'薇薇安·韦斯特伍德',nameEn:'Vivienne Westwood',era:'英国',field:'时尚',subfield:'朋克时尚',title:'朋克时尚教母',traits:['朋克精神','政治态度','社会反叛','英伦风格','环保行动','颠覆传统'],description:'薇薇安·韦斯特伍德是朋克时尚运动的教母级人物，用服装表达政治态度和社会反叛精神。她在1970年代与Sex Pistols共同定义了朋克美学，此后不断将历史服饰元素与激进政治主张融合。她是时尚界最具社会意识的设计师之一，晚年更积极投身环保运动，用时尚作为社会变革的武器。',color:'#E63946',icon:'🎸'},
    {id:'virgil_abloh',name:'维吉尔·阿布洛',nameEn:'Virgil Abloh',era:'美国',field:'时尚',subfield:'街头高定',title:'街头文化与高级时装跨界先锋',traits:['街头高定','3%法则','跨界先锋','Off-White','打破壁垒','文化混搭'],description:'维吉尔·阿布洛是街头文化与高级时装融合的标志性人物，Off-White创始人和路易威登男装艺术总监。他提出"3%法则"——只需改变3%就能创造新事物，以此打破时尚、建筑、音乐和艺术之间的壁垒。作为首位执掌法国顶级时装屋的非裔美国设计师，他重新定义了奢侈品的文化语境。',color:'#FF6B00',icon:'🔶'},
    {id:'christian_dior',name:'克里斯汀·迪奥',nameEn:'Christian Dior',era:'法国',field:'时尚',subfield:'高级定制',title:'New Look创始人',traits:['New Look','战后优雅','高级定制','女性轮廓','花朵灵感','奢华美学'],description:'克里斯汀·迪奥在1947年推出革命性的"New Look"系列，以收腰、阔摆的优雅轮廓重塑了战后女性形象。他将高级定制时装提升为艺术，每一件作品都如同绽放的花朵般精美绝伦。迪奥品牌至今仍是法国高级时装的象征，其"New Look"精神——用美重建希望——已成为时尚史上最具影响力的宣言之一。',color:'#C9ADA7',icon:'🌹'}
];

// 题目维度映射：每个选择题同时影响"人格维度"和"专业维度"
// 人格维度: order_vs_chaos(秩序vs混沌), rational_vs_emotional(理性vs感性), tradition_vs_innovation(传统vs创新), individual_vs_collective(个体vs集体), material_vs_spiritual(物质vs精神)
// 专业维度: architecture(建筑), graphic(平面), industrial(工业), interior(室内), landscape(景观), theory(理论), fashion(时尚)

const QUESTIONS_DB = {
    // 选择题32道 - 哲学性和思辨性
    choice: [
        // ========== 开场题: 抽象直觉 (通过荒诞场景揭示深层设计倾向) ==========
        {
            id: 1,
            question: '你在梦中发现自己变成了一件设计作品，醒来后你最希望自己是什么？',
            choices: [
                { text: '一座悬浮在云端的透明教堂，只有光能进入', scores: { louis_kahn:3, tadao_ando:2, peter_zumthor:1, architecture:3, theory:1 }, dimensions: { material_vs_spiritual:3, rational_vs_emotional:-1, order_vs_chaos:1 } },
                { text: '一本被无数人翻烂的口袋书，封面磨损但内容改变了一代人', scores: { naoto_fukasawa:3, kenji_ekuan:2, sori_yanagi:1, industrial:2, graphic:1 }, dimensions: { individual_vs_collective:-2, material_vs_spiritual:-1, tradition_vs_innovation:-1 } },
                { text: '一把从未被坐过的概念椅，在美术馆里被仰望', scores: { ettore_sottsass:3, philippe_starck:2, marc_newson:1, rei_kawakubo:1, industrial:2, interior:1, fashion:1 }, dimensions: { individual_vs_collective:2, material_vs_spiritual:1, tradition_vs_innovation:2 } },
                { text: '一座不断生长的花园迷宫，每天的路径都不一样', scores: { ji_cheng:3, roberto_burle_marx:2, capability_brown:1, landscape:3 }, dimensions: { order_vs_chaos:-2, tradition_vs_innovation:1, material_vs_spiritual:1 } }
            ]
        },
        {
            id: 2,
            question: '外星文明请你为他们的星球设计一样东西，你会设计什么？',
            choices: [
                { text: '一套通用符号系统，让所有物种都能沟通', scores: { massimo_vignelli:3, paul_rand:2, muller_brockmann:1, otl_aicher:2, graphic:3, theory:1 }, dimensions: { order_vs_chaos:2, rational_vs_emotional:2, individual_vs_collective:-1 } },
                { text: '一个能感知情绪并随之改变形态的居住空间', scores: { zaha_hadid:3, ma_yansong:2, toyo_ito:1, architecture:2, interior:1 }, dimensions: { rational_vs_emotional:-2, tradition_vs_innovation:2, material_vs_spiritual:1 } },
                { text: '一件完全由当地未知材料制成的日常用品', scores: { dieter_rams:2, james_dyson:3, charles_ray_eames:1, industrial:3 }, dimensions: { rational_vs_emotional:1, material_vs_spiritual:-1, tradition_vs_innovation:1 } },
                { text: '一个连接所有星球记忆的纪念公园', scores: { peter_walker:3, frederick_olmsted:2, yu_kongjian:1, landscape:2, theory:1 }, dimensions: { material_vs_spiritual:3, individual_vs_collective:-1, tradition_vs_innovation:-1 } }
            ]
        },
        // ========== 维度1: 对"秩序"的理解 (间接测试建筑/平面/理论的秩序倾向) ==========
        {
            id: 3,
            question: '你站在一个完全空旷的白色房间里，第一感觉是？',
            choices: [
                { text: '想要划分空间，划定边界和功能区域', scores: { li_jie:4, le_corbusier:1, andre_lenotre:1, architecture:2, graphic:1 }, dimensions: { order_vs_chaos:2, rational_vs_emotional:1, tradition_vs_innovation:-1 } },
                { text: '想要引入光线，看光影如何切割这个空间', scores: { louis_kahn:4, tadao_ando:1, toyo_ito:1, architecture:2, theory:1 }, dimensions: { material_vs_spiritual:2, rational_vs_emotional:1 } },
                { text: '想要留白，感受这种纯粹和无限可能', scores: { kenya_hara:4, ikko_tanaka:1, lv_jingren:1, graphic:2, theory:1 }, dimensions: { material_vs_spiritual:2, order_vs_chaos:-1 } },
                { text: '想要种一棵树，让自然打破这个人工盒子', scores: { roberto_burle_marx:1, yu_kongjian:4, capability_brown:1, landscape:3 }, dimensions: { material_vs_spiritual:1 } }
            ]
        },
        {
            id: 4,
            question: '你如何看待"规则"？',
            choices: [
                { text: '规则是必要的，它是效率和公平的基础', scores: { muller_brockmann:4, vitruvius:1, li_jie:1, graphic:2, theory:2 }, dimensions: { order_vs_chaos:3, rational_vs_emotional:2 } },
                { text: '规则是用来打破的，创新从破坏开始', scores: { david_carson:4, stefan_sagmeister:1, neville_brody:1, vivienne_westwood:2, rei_kawakubo:1, graphic:2, fashion:2 }, dimensions: { order_vs_chaos:-3, tradition_vs_innovation:2 } },
                { text: '真正的自由是在规则之内跳舞', scores: { massimo_vignelli:1, paul_rand:3, jan_tschichold:1, graphic:2, industrial:1 }, dimensions: { order_vs_chaos:1, rational_vs_emotional:1 } },
                { text: '规则应该从自然中生长出来，不是人为制定的', scores: { gaudi:1, frank_lloyd_wright:4, capability_brown:1, issey_miyake:1, architecture:1, landscape:2 }, dimensions: { order_vs_chaos:-1 } }
            ]
        },
        {
            id: 5,
            question: '如果时间可以凝固，你最想定格在哪个瞬间？',
            choices: [
                { text: '一件作品完成前的最后一刻，所有细节即将就位', scores: { jony_ive:4, hans_wegner:1, renzo_piano:1, christian_dior:1, industrial:2, interior:1, fashion:1 }, dimensions: { order_vs_chaos:1, material_vs_spiritual:1, tradition_vs_innovation:-1 } },
                { text: '一个人第一次走进你设计的空间时，脸上的表情', scores: { ma_yansong:3, eero_saarinen:1, andre_fu:1, architecture:1, interior:1, theory:1 }, dimensions: { material_vs_spiritual:2, rational_vs_emotional:-2 } },
                { text: '历史与未来在你手中交汇的那一秒', scores: { liang_sicheng:4, kenzo_tange:1, lin_huiyin:1, architecture:1, theory:2 }, dimensions: { tradition_vs_innovation:0, individual_vs_collective:1 } },
                { text: '你的设计被陌生人自然使用、甚至没有意识到的那一刻', scores: { naoto_fukasawa:4, henry_dreyfuss:1, kenji_ekuan:1, industrial:3, theory:1 }, dimensions: { material_vs_spiritual:1, individual_vs_collective:-1 } }
            ]
        },
        // ========== 维度2: 对"物质"的态度 (测试专业倾向) ==========
        {
            id: 6,
            question: '你拿起一块石头，首先感受到的是？',
            choices: [
                { text: '它的重量和密度——材料性能的物理数据', scores: { richard_sapper:3, walter_teague:1, peter_behrens:1, industrial:2 }, dimensions: { rational_vs_emotional:2, material_vs_spiritual:1 } },
                { text: '它经过亿万年的旅程，你手里握着的是时间', scores: { wang_shu:4, lu_ban:1, lv_jingren:1, architecture:1, landscape:1 }, dimensions: { material_vs_spiritual:3, tradition_vs_innovation:-1 } },
                { text: '它应该被雕琢成什么形态——创造的冲动', scores: { frank_gehry:4, luigi_colani:1, gaudi:1, alexander_mcqueen:1, architecture:1, industrial:2, fashion:1 }, dimensions: { individual_vs_collective:1, rational_vs_emotional:-1 } },
                { text: '它原本就属于这里，你只需要找到放它的位置', scores: { ji_cheng:4, frank_lloyd_wright:1, roberto_burle_marx:1, landscape:3 }, dimensions: { material_vs_spiritual:2, tradition_vs_innovation:-1 } }
            ]
        },
        {
            id: 7,
            question: '"材料"对你意味着什么？',
            choices: [
                { text: '材料是设计意图的忠实翻译者', scores: { mies_vander:4, peter_behrens:1, mario_bellini:1, architecture:1, industrial:2 }, dimensions: { rational_vs_emotional:1, material_vs_spiritual:1 } },
                { text: '材料有自己的性格，你需要倾听它想说什么', scores: { alvar_aalto:4, hans_wegner:1, sori_yanagi:1, issey_miyake:2, architecture:1, interior:2, fashion:1 }, dimensions: { material_vs_spiritual:3, rational_vs_emotional:-1 } },
                { text: '材料是限制，也是挑战——如何让不可能的成为可能', scores: { james_dyson:4, norman_foster:1, hartmut_esslinger:1, industrial:2, architecture:1 }, dimensions: { rational_vs_emotional:1 } },
                { text: '材料是文化的载体，每一道纹理都是历史的记忆', scores: { kan_taikeung:4, liang_sicheng:1, han_jiaying:1, architecture:1, graphic:2 }, dimensions: { material_vs_spiritual:2, tradition_vs_innovation:-2 } }
            ]
        },
        {
            id: 8,
            question: '如果"完美"存在，它更接近于？',
            choices: [
                { text: '一条没有任何多余线条的设计', scores: { dieter_rams:4, saul_bass:1, jan_tschichold:1, coco_chanel:2, industrial:2, graphic:1, fashion:1 }, dimensions: { order_vs_chaos:2, rational_vs_emotional:1 } },
                { text: '一个让人感到温暖的意外细节', scores: { elsie_de_wolfe:1, kelly_hoppen:3, alvar_aalto:1, interior:2, industrial:1 }, dimensions: { rational_vs_emotional:-2, material_vs_spiritual:1, tradition_vs_innovation:-1 } },
                { text: '一个完美解决复杂问题的系统', scores: { buckminster_fuller:4, don_norman:1, yang_mingjie:1, alan_cooper:1, tim_brown:1, theory:3, industrial:1 }, dimensions: { rational_vs_emotional:2, order_vs_chaos:1 } },
                { text: '一种无法被完全理解的、留有想象空间的余韵', scores: { louis_kahn:4, tadao_ando:1, kenya_hara:1, architecture:1, theory:2 }, dimensions: { material_vs_spiritual:3, rational_vs_emotional:-1 } }
            ]
        },
        // ========== 维度3: 对"变化"的态度 (推测创新和传统倾向) ==========
        {
            id: 9,
            question: '面对一栋有200年历史的老建筑，你的第一反应是？',
            choices: [
                { text: '小心修罕，让它原有的美继续说话', scores: { liang_sicheng:4, william_morris:1, lin_huiyin:1, bruno_munari:1, architecture:2, theory:1 }, dimensions: { tradition_vs_innovation:-2, material_vs_spiritual:1 } },
                { text: '在保留外壳的同时，让内部获得全新生命', scores: { renzo_piano:1, pei_im:4, norman_foster:1, architecture:2, industrial:1 }, dimensions: { tradition_vs_innovation:1, order_vs_chaos:1 } },
                { text: '拆除重建，新的时代需要新的空间', scores: { le_corbusier:4, gropius:1, norman_bel_geddes:1, architecture:1, industrial:2 }, dimensions: { tradition_vs_innovation:3, rational_vs_emotional:1 } },
                { text: '让它成为一面镜子，映照出时间本身的质感', scores: { peter_zumthor:4, wang_shu:1, andre_fu:1, architecture:1, interior:2, landscape:1 }, dimensions: { material_vs_spiritual:3, tradition_vs_innovation:-2 } }
            ]
        },
        {
            id: 10,
            question: '你相信"永恒"吗？',
            choices: [
                { text: '相信，好的设计可以超越时代', scores: { vitruvius:4, palladio:1, paul_rand:1, architecture:1, graphic:2 }, dimensions: { tradition_vs_innovation:-2, order_vs_chaos:1 } },
                { text: '不相信，一切都在变化，变化本身才是永恒', scores: { rem_koolhaas:4, david_carson:1, laszlo_moholy:1, architecture:1, graphic:2 }, dimensions: { tradition_vs_innovation:2, order_vs_chaos:-1 } },
                { text: '永恒存在于人与自然的关系中，而非具体形式', scores: { frank_lloyd_wright:1, ji_cheng:4, frederick_olmsted:1, landscape:2, architecture:1 }, dimensions: { material_vs_spiritual:2 } },
                { text: '永恒是一个危险的概念，它常常成为保守的借口', scores: { zaha_hadid:4, bjarke_ingels:1, toyo_ito:1, virgil_abloh:1, architecture:1, theory:2, fashion:1 }, dimensions: { tradition_vs_innovation:2, individual_vs_collective:1 } }
            ]
        },
        {
            id: 11,
            question: '你更认同以下哪种说法？',
            choices: [
                { text: '形式追随功能', scores: { le_corbusier:4, gropius:1, dieter_rams:1, otl_aicher:1, architecture:1, industrial:2 }, dimensions: { rational_vs_emotional:2, order_vs_chaos:1 } },
                { text: '形式追随情感', scores: { philippe_starck:3, dorothy_draper:1, ma_yansong:1, alexander_mcqueen:2, architecture:1, interior:2, fashion:1 }, dimensions: { rational_vs_emotional:-2, material_vs_spiritual:1 } },
                { text: '形式追随文化', scores: { kan_taikeung:1, ikko_tanaka:4, karim_rashid:1, graphic:2 }, dimensions: { tradition_vs_innovation:-1, material_vs_spiritual:1 } },
                { text: '形式追随问题', scores: { bjarke_ingels:1, victor_papanek:4, don_norman:1, tim_brown:2, ezio_manzini:1, architecture:1, theory:2 }, dimensions: { rational_vs_emotional:1 } }
            ]
        },
        {
            id: 12,
            question: '当有人说"这不符合传统"，你的回应是？',
            choices: [
                { text: '那我们就重新定义传统', scores: { zaha_hadid:4, luigi_colani:1, rem_koolhaas:1, rei_kawakubo:2, vivienne_westwood:1, architecture:1, theory:2, fashion:1 }, dimensions: { tradition_vs_innovation:2, individual_vs_collective:1 } },
                { text: '传统的价值不在于遵守，而在于理解其为什么这样', scores: { wang_shu:1, li_jie:4, lu_ban:1, architecture:1, landscape:1 }, dimensions: { tradition_vs_innovation:0, material_vs_spiritual:1 } },
                { text: '传统和现代可以共存，不需要非此即彼', scores: { pei_im:4, kenzo_tange:1, alan_chan:1, architecture:1, graphic:1 }, dimensions: { tradition_vs_innovation:1, rational_vs_emotional:1 } },
                { text: '传统是过去时，我关心的是未来', scores: { norman_foster:4, toyo_ito:1, norman_bel_geddes:1, architecture:1, industrial:2 }, dimensions: { tradition_vs_innovation:2, rational_vs_emotional:1 } }
            ]
        },
        // ========== 维度4: 对"人"的理解 (推测专业：UX/工业vs建筑/景观) ==========
        {
            id: 13,
            question: '你走在街上，最吸引你注意的是？',
            choices: [
                { text: '建筑的立面和天际线的轮廓', scores: { frank_gehry:3, eero_saarinen:1, ma_yansong:1, architecture:2, graphic:1 }, dimensions: { individual_vs_collective:1, rational_vs_emotional:-1 } },
                { text: '人们如何使用这些空间——坐、走、停留的方式', scores: { don_norman:4, henry_dreyfuss:1, frederick_olmsted:1, bill_moggridge:1, alan_cooper:1, theory:2, landscape:2 }, dimensions: { individual_vs_collective:-1, rational_vs_emotional:1 } },
                { text: '招牌、字体、色彩——视觉信息的组织', scores: { paula_scher:4, neville_brody:1, yusaku_kamekura:1, graphic:3, theory:1 }, dimensions: { order_vs_chaos:1, rational_vs_emotional:1 } },
                { text: '路边的植物、季节的变化、自然在城市中的存在', scores: { yu_kongjian:4, roberto_burle_marx:1, martha_schwartz:1, landscape:3 }, dimensions: { material_vs_spiritual:1 } }
            ]
        },
        {
            id: 14,
            question: '你设计一把椅子时，最在意的是什么？',
            choices: [
                { text: '坐上去时脊椎和身体的感受', scores: { henry_dreyfuss:4, naoto_fukasawa:1, yang_mingjie:1, industrial:3, theory:1 }, dimensions: { rational_vs_emotional:1, material_vs_spiritual:1 } },
                { text: '它在那个空间里看起来是什么样子', scores: { kelly_wearstler:1, arne_jacobsen:3, eileen_gray:1, interior:2, industrial:1 }, dimensions: { rational_vs_emotional:-1, individual_vs_collective:1 } },
                { text: '它能否被大规模生产、价格合理', scores: { charles_ray_eames:4, hans_wegner:1, kenji_ekuan:1, coco_chanel:1, industrial:3, theory:1, fashion:1 }, dimensions: { individual_vs_collective:-1, rational_vs_emotional:1 } },
                { text: '它能否成为一个时代的文化符号', scores: { ettore_sottsass:1, raymond_loewy:4, philippe_starck:1, industrial:3, theory:1 }, dimensions: { individual_vs_collective:1 } }
            ]
        },
        {
            id: 15,
            question: '如果一个设计让所有人都喜欢，你会？',
            choices: [
                { text: '高兴，设计本来就应该服务于人', scores: { yang_mingjie:1, kenji_ekuan:3, don_norman:1, theory:2, industrial:2 }, dimensions: { individual_vs_collective:-2, rational_vs_emotional:1 } },
                { text: '怀疑，所有人喜欢是否意味着平庸？', scores: { stefan_sagmeister:4, han_jiaying:1, david_carson:1, yohji_yamamoto:2, graphic:2, fashion:1 }, dimensions: { individual_vs_collective:2 } },
                { text: '分析它为什么成功，提取可复制的方法', scores: { john_maeda:1, wang_shouzhi:4, bjarke_ingels:1, theory:2 }, dimensions: { rational_vs_emotional:2, order_vs_chaos:1 } },
                { text: '反思——它解决了真正重要的问题吗？', scores: { victor_papanek:4, william_mcdonough:1, yu_kongjian:1, ezio_manzini:2, cameron_tonkinwise:1, theory:3, landscape:1 }, dimensions: { material_vs_spiritual:1, individual_vs_collective:-1 } }
            ]
        },
        {
            id: 16,
            question: '你在公共场所看到一个设计拙劣的指示牌，你的第一反应是？',
            choices: [
                { text: '想要重新设计它——字体、布局、色彩、信息层级', scores: { massimo_vignelli:4, jan_tschichold:1, yusaku_kamekura:1, graphic:3, theory:1 }, dimensions: { order_vs_chaos:2, rational_vs_emotional:1 } },
                { text: '思考为什么会出现这种情况——制度和流程的问题', scores: { victor_papanek:3, don_norman:1, ellen_lupton:1, theory:3, graphic:1 }, dimensions: { rational_vs_emotional:1, individual_vs_collective:-1 } },
                { text: '无视它，用直觉和身体记忆找到方向', scores: { naoto_fukasawa:4, sori_yanagi:1, tony_chi:1, industrial:2 }, dimensions: { material_vs_spiritual:1, rational_vs_emotional:-1 } },
                { text: '觉得有趣——这种“错误”中可能有一种未被发现的美学', scores: { karim_rashid:1, martha_schwartz:3, david_carson:1, graphic:2, landscape:1 }, dimensions: { order_vs_chaos:-2 } }
            ]
        },
        {
            id: 17,
            question: '"美"在你看来更接近于？',
            choices: [
                { text: '一种数学上的精确和比例的和谐', scores: { palladio:4, muller_brockmann:1, andre_lenotre:1, architecture:1, theory:1 }, dimensions: { rational_vs_emotional:2, order_vs_chaos:2, tradition_vs_innovation:-1 } },
                { text: '一种情感上的触动和共鸣', scores: { huang_hai:4, alvar_aalto:1, ma_yansong:1, christian_dior:1, architecture:1, graphic:2, fashion:1 }, dimensions: { rational_vs_emotional:-2, material_vs_spiritual:1 } },
                { text: '一种功能被完美满足时的自然呈现', scores: { charles_ray_eames:1, sori_yanagi:4, dieter_rams:1, industrial:3, architecture:1 }, dimensions: { rational_vs_emotional:1, material_vs_spiritual:1 } },
                { text: '一种打破预期时产生的惊奇感', scores: { frank_gehry:4, stefan_sagmeister:1, shigeo_fukuda:1, alexander_mcqueen:2, architecture:1, graphic:2, fashion:1 }, dimensions: { order_vs_chaos:-2, tradition_vs_innovation:3 } }
            ]
        },
        // ========== 维度5: 对"空间"的理解 (强专业倾向测试) ==========
        {
            id: 18,
            question: '你闭上眼睛想象"家"，最先出现的是？',
            choices: [
                { text: '一个有庭院的房子，室内外没有明确边界', scores: { frank_lloyd_wright:4, ji_cheng:1, andre_fu:1, architecture:2, landscape:1 }, dimensions: { material_vs_spiritual:1, tradition_vs_innovation:-1 } },
                { text: '一个工作室，到处都是工具和材料', scores: { gaudi:4, eileen_gray:1, charles_ray_eames:1, architecture:1, industrial:1 }, dimensions: { individual_vs_collective:1, material_vs_spiritual:1 } },
                { text: '一个安静的光线从高窗洒入的角落', scores: { louis_kahn:1, tadao_ando:4, peter_zumthor:1, architecture:2, theory:1 }, dimensions: { material_vs_spiritual:3, rational_vs_emotional:-1 } },
                { text: '一个有厨房和餐桌的空间，有人在做饭', scores: { elsie_de_wolfe:3, kelly_hoppen:1, alvar_aalto:1, interior:2, industrial:1 }, dimensions: { individual_vs_collective:-1, rational_vs_emotional:-1 } }
            ]
        },
        {
            id: 19,
            question: '"空"对你来说是什么？',
            choices: [
                { text: '等待被填满的机会', scores: { raymond_loewy:3, norman_bel_geddes:1, le_corbusier:1, architecture:1, industrial:1 }, dimensions: { order_vs_chaos:-1, material_vs_spiritual:-1 } },
                { text: '一种积极的、有力量的存在', scores: { kenya_hara:4, ikko_tanaka:1, louis_kahn:1, graphic:2, architecture:1 }, dimensions: { material_vs_spiritual:3, rational_vs_emotional:-1 } },
                { text: '让人呼吸的自由', scores: { mies_vander:4, toyo_ito:1, ma_yansong:1, architecture:1, interior:1, graphic:1 }, dimensions: { order_vs_chaos:-1, material_vs_spiritual:1 } },
                { text: '一种需要被精心设计的设计元素', scores: { peter_walker:4, saul_bass:1, tadao_ando:1, architecture:1, landscape:1 }, dimensions: { rational_vs_emotional:1, material_vs_spiritual:1 } }
            ]
        },
        {
            id: 20,
            question: '你更喜欢在什么样的环境中工作？',
            choices: [
                { text: '一个整洁有序、一切各就各位的工作室', scores: { dieter_rams:4, muller_brockmann:1, john_maeda:1, industrial:2, graphic:1 }, dimensions: { order_vs_chaos:3, rational_vs_emotional:1 } },
                { text: '一个充满模型、草图和半成品的工作台', scores: { gaudi:4, mario_bellini:1, frank_gehry:1, architecture:2, industrial:1 }, dimensions: { order_vs_chaos:-2 } },
                { text: '在自然中——公园、山上、水边', scores: { frank_lloyd_wright:4, capability_brown:1, yu_kongjian:1, landscape:3, architecture:1 }, dimensions: { material_vs_spiritual:2, rational_vs_emotional:-1 } },
                { text: '在人群中——咖啡馆、广场、热闹的街道', scores: { rem_koolhaas:4, jia_wei:1, frederick_olmsted:1, architecture:1, theory:2 }, dimensions: { individual_vs_collective:-2, rational_vs_emotional:1 } }
            ]
        },
        {
            id: 21,
            question: '如果要你设计一所学校，你最关注的是？',
            choices: [
                { text: '空间如何促进学习和交流', scores: { gropius:4, buckminster_fuller:1, bjarke_ingels:1, architecture:2, theory:2 }, dimensions: { individual_vs_collective:-1, rational_vs_emotional:1 } },
                { text: '建筑本身能否成为最好的美育教材', scores: { wang_shu:3, louis_kahn:1, alvar_aalto:1, architecture:2, theory:1 }, dimensions: { material_vs_spiritual:2, rational_vs_emotional:-1 } },
                { text: '校园与自然的关系——能否在自然中学习', scores: { roberto_burle_marx:1, frederick_olmsted:4, yu_kongjian:1, landscape:3, architecture:1 }, dimensions: { material_vs_spiritual:1 } },
                { text: '每个教室是否都能激发创造力和想象力', scores: { johannes_itten:4, laszlo_moholy:1, john_maeda:1, ellen_lupton:1, bruno_munari:1, theory:3, architecture:1 }, dimensions: { rational_vs_emotional:-1, individual_vs_collective:1 } }
            ]
        },
        {
            id: 22,
            question: '你觉得设计和艺术的区别在于？',
            choices: [
                { text: '设计要解决问题，艺术要提出问题', scores: { victor_papanek:4, yang_mingjie:1, don_norman:1, alan_cooper:1, theory:3, industrial:1 }, dimensions: { rational_vs_emotional:2, material_vs_spiritual:1 } },
                { text: '没有区别，好的设计就是艺术', scores: { zaha_hadid:3, philippe_starck:1, frank_gehry:1, yohji_yamamoto:1, architecture:1, industrial:2, fashion:1 }, dimensions: { material_vs_spiritual:-1, rational_vs_emotional:-1 } },
                { text: '设计服务于他人，艺术表达自我', scores: { paul_rand:4, kenji_ekuan:1, henry_dreyfuss:1, industrial:2, graphic:1 }, dimensions: { individual_vs_collective:-2, rational_vs_emotional:1, tradition_vs_innovation:-1 } },
                { text: '设计是约束中的创造，艺术是自由中的自律', scores: { kenya_hara:4, johannes_itten:1, peter_zumthor:1, cameron_tonkinwise:1, theory:2, architecture:1 }, dimensions: { order_vs_chaos:0, material_vs_spiritual:1 } }
            ]
        },
        // ========== 维度6: 深层价值观 (最终人格定位) ==========
        {
            id: 23,
            question: '如果只能保留一种能力，你会选？',
            choices: [
                { text: '在混乱中看到秩序的能力', scores: { muller_brockmann:4, massimo_vignelli:1, yusaku_kamekura:1, graphic:2, theory:2 }, dimensions: { order_vs_chaos:3, rational_vs_emotional:2 } },
                { text: '在平凡中发现惊奇的能力', scores: { shigeo_fukuda:4, naoto_fukasawa:1, milton_glaser:1, industrial:2, graphic:1 }, dimensions: { order_vs_chaos:-1, rational_vs_emotional:-2 } },
                { text: '在过去中看到未来的能力', scores: { liang_sicheng:4, lin_huiyin:1, wang_shu:1, architecture:1, theory:2 }, dimensions: { tradition_vs_innovation:0, material_vs_spiritual:1 } },
                { text: '在技术中感受温度的能力', scores: { jony_ive:4, hartmut_esslinger:1, alvar_aalto:1, industrial:2, architecture:1 }, dimensions: { rational_vs_emotional:-2, material_vs_spiritual:1, tradition_vs_innovation:-1 } }
            ]
        },
        {
            id: 24,
            question: '你对"简单"的态度是？',
            choices: [
                { text: '简单是终极的复杂——需要极深的功力', scores: { mies_vander:4, kenya_hara:1, dieter_rams:1, industrial:2, graphic:1 }, dimensions: { order_vs_chaos:2, rational_vs_emotional:1 } },
                { text: '简单有时是一种逃避——复杂性才有深度', scores: { rem_koolhaas:1, ettore_sottsass:4, kelly_wearstler:1, architecture:1, interior:1 }, dimensions: { order_vs_chaos:-1 } },
                { text: '简单是一种态度，不是结果', scores: { john_maeda:4, naoto_fukasawa:1, ikko_tanaka:1, graphic:2, theory:1 }, dimensions: { material_vs_spiritual:2, order_vs_chaos:0 } },
                { text: '简单应该来自对复杂的理解，而不是对复杂的否定', scores: { buckminster_fuller:4, wang_shouzhi:1, bjarke_ingels:1, theory:3, architecture:1 }, dimensions: { rational_vs_emotional:2, order_vs_chaos:0 } }
            ]
        },
        {
            id: 25,
            question: '如果你的设计生涯只能留下一件作品，你希望它？',
            choices: [
                { text: '改变了很多人每天的生活方式', scores: { charles_ray_eames:4, jia_wei:1, dieter_rams:1, industrial:3, theory:1 }, dimensions: { individual_vs_collective:-2, material_vs_spiritual:1 } },
                { text: '成为一个时代的文化符号', scores: { paul_rand:1, milton_glaser:4, raymond_loewy:1, graphic:3, industrial:1 }, dimensions: { individual_vs_collective:1 } },
                { text: '让人们重新思考什么是“好”的设计', scores: { victor_papanek:4, stefan_sagmeister:1, rem_koolhaas:1, vivienne_westwood:1, theory:3, graphic:1 }, dimensions: { material_vs_spiritual:1, tradition_vs_innovation:1 } },
                { text: '安静地存在着，像一棵树或一块石头', scores: { peter_zumthor:4, ji_cheng:1, wang_shu:1, architecture:2, landscape:1 }, dimensions: { material_vs_spiritual:3, rational_vs_emotional:-1 } }
            ]
        },
        {
            id: 26,
            question: '你如何看待"科技"在设计中的角色？',
            choices: [
                { text: '科技是实现设计目标的工具', scores: { norman_foster:1, james_dyson:3, richard_sapper:1, architecture:1, industrial:2 }, dimensions: { rational_vs_emotional:2 } },
                { text: '科技拓展了设计的可能性边界', scores: { zaha_hadid:4, buckminster_fuller:1, john_maeda:1, architecture:1, theory:2 }, dimensions: { rational_vs_emotional:1, tradition_vs_innovation:1 } },
                { text: '科技不应主导设计，人才是核心', scores: { sori_yanagi:4, kenji_ekuan:1, henry_dreyfuss:1, industrial:2, theory:2 }, dimensions: { rational_vs_emotional:-1, individual_vs_collective:-1 } },
                { text: '科技的终极目标是让自己消失，融入自然', scores: { peter_zumthor:1, ji_cheng:4, kenya_hara:1, graphic:1, architecture:1 }, dimensions: { material_vs_spiritual:2 } }
            ]
        },
        {
            id: 27,
            question: '你走在一条小巷里，最让你感动的是？',
            choices: [
                { text: '墙面的肌理、光影的变化、空间的收放', scores: { tony_chi:4, andre_fu:1, peter_zumthor:1, architecture:2, interior:1 }, dimensions: { material_vs_spiritual:2, rational_vs_emotional:-1 } },
                { text: '店铺招牌的字体和色彩排列', scores: { paula_scher:4, neville_brody:1, huang_hai:1, graphic:3, theory:1 }, dimensions: { order_vs_chaos:-1, rational_vs_emotional:-1 } },
                { text: '居民如何使用这些空间——晒晒、聊天、种植', scores: { rem_koolhaas:1, jia_wei:3, frederick_olmsted:1, architecture:1, landscape:2 }, dimensions: { individual_vs_collective:-2, rational_vs_emotional:1 } },
                { text: '巷子里那些被时间打磨出包浆的日用品', scores: { sori_yanagi:4, william_morris:1, lu_ban:1, industrial:3, theory:1 }, dimensions: { material_vs_spiritual:2, tradition_vs_innovation:-2 } }
            ]
        },
        {
            id: 28,
            question: '"创新"对你意味着什么？',
            choices: [
                { text: '用新的方式解决老问题', scores: { james_dyson:4, jia_wei:1, bjarke_ingels:1, architecture:1, industrial:2 }, dimensions: { tradition_vs_innovation:1, rational_vs_emotional:1 } },
                { text: '发现别人没有看到的问题', scores: { victor_papanek:4, wang_shouzhi:1, don_norman:1, cameron_tonkinwise:1, theory:3, architecture:1 }, dimensions: { rational_vs_emotional:1, individual_vs_collective:-1 } },
                { text: '打破学科边界，把不相关的东西连接起来', scores: { laszlo_moholy:4, buckminster_fuller:1, zaha_hadid:1, tim_brown:1, architecture:1, theory:2 }, dimensions: { tradition_vs_innovation:1, order_vs_chaos:-1 } },
                { text: '回到最初，重新理解事物的本质', scores: { lu_ban:4, liang_sicheng:1, han_jiaying:1, graphic:2, architecture:1 }, dimensions: { material_vs_spiritual:2, tradition_vs_innovation:0 } }
            ]
        },
        {
            id: 29,
            question: '如果设计是一种语言，你觉得它在说什么？',
            choices: [
                { text: '它说“我来帮你”——服务与关怀', scores: { victor_papanek:4, yang_mingjie:1, don_norman:1, bill_moggridge:1, theory:2, industrial:2 }, dimensions: { individual_vs_collective:-2, rational_vs_emotional:1 } },
                { text: '它说“你可以这样想”——启发与挑战', scores: { stefan_sagmeister:1, han_jiaying:4, david_carson:1, architecture:1, graphic:2 }, dimensions: { individual_vs_collective:1 } },
                { text: '它说“世界可以这样”——想象与可能', scores: { eero_saarinen:1, norman_bel_geddes:4, marc_newson:1, architecture:1, industrial:2 }, dimensions: { tradition_vs_innovation:1, material_vs_spiritual:-1 } },
                { text: '它说“我在这里”——存在与沉默', scores: { tadao_ando:4, louis_kahn:1, tony_chi:1, architecture:1, interior:2, landscape:1 }, dimensions: { material_vs_spiritual:3, rational_vs_emotional:-1 } }
            ]
        },
        {
            id: 30,
            question: '面对一个复杂项目，你的思考起点是？',
            choices: [
                { text: '用户的需求和行为模式', scores: { naoto_fukasawa:4, yang_mingjie:1, henry_dreyfuss:1, bill_moggridge:1, theory:2, industrial:2 }, dimensions: { individual_vs_collective:-1, rational_vs_emotional:1 } },
                { text: '场地的物理特性和环境条件', scores: { frank_lloyd_wright:3, yu_kongjian:1, roberto_burle_marx:1, architecture:2, landscape:2 }, dimensions: { material_vs_spiritual:1, rational_vs_emotional:1 } },
                { text: '概念和文化意义', scores: { kan_taikeung:4, alan_chan:1, dorothy_draper:1, architecture:1, graphic:2 }, dimensions: { material_vs_spiritual:1, tradition_vs_innovation:-1 } },
                { text: '形式和视觉秩序', scores: { muller_brockmann:4, marc_newson:1, saul_bass:1, architecture:1, graphic:2 }, dimensions: { order_vs_chaos:1, rational_vs_emotional:-1 } }
            ]
        },
        {
            id: 31,
            question: '你觉得未来10年设计界最大的变化会是？',
            choices: [
                { text: 'AI会彻底改变设计的方式', scores: { john_maeda:4, laszlo_moholy:1, hartmut_esslinger:1, theory:2, architecture:1 }, dimensions: { tradition_vs_innovation:2, rational_vs_emotional:1 } },
                { text: '可持续和生态会成为设计的底线', scores: { william_mcdonough:4, martha_schwartz:1, roberto_burle_marx:1, ezio_manzini:2, landscape:2, theory:2 }, dimensions: { material_vs_spiritual:1 } },
                { text: '设计会更加回归手工和人文温度', scores: { william_morris:4, lu_ban:1, sori_yanagi:1, architecture:1, interior:2 }, dimensions: { material_vs_spiritual:2, tradition_vs_innovation:-2 } },
                { text: '跨学科融合会产生全新的设计类型', scores: { zaha_hadid:1, buckminster_fuller:4, rem_koolhaas:1, virgil_abloh:1, architecture:1, theory:2, fashion:1 }, dimensions: { tradition_vs_innovation:1, order_vs_chaos:-1 } }
            ]
        },
        {
            id: 32,
            question: '最后一个问题——你觉得"设计师"是什么？',
            choices: [
                { text: '问题的解决者', scores: { walter_teague:1, mario_bellini:3, renzo_piano:1, theory:2, industrial:2 }, dimensions: { rational_vs_emotional:2, individual_vs_collective:-1 } },
                { text: '世界的重新诠释者', scores: { alan_chan:1, milton_glaser:4, paula_scher:1, architecture:1, graphic:2 }, dimensions: { material_vs_spiritual:1 } },
                { text: '未来的预言家', scores: { norman_bel_geddes:1, marc_newson:4, laszlo_moholy:1, architecture:1, theory:2 }, dimensions: { tradition_vs_innovation:1, individual_vs_collective:1 } },
                { text: '沉默的陪伴者——好的设计让你感觉不到它的存在', scores: { peter_walker:3, elsie_de_wolfe:1, arne_jacobsen:1, industrial:1, architecture:1 }, dimensions: { material_vs_spiritual:2, rational_vs_emotional:-1 } }
            ]
        }
    ],
    
    // 开放性题目3道 - 供DeepSeek分析
    open: [
        {
            id: 33,
            question: '描述一个让你感到"这就是好设计"的瞬间——可以是一件物品、一个空间、一次体验。为什么它打动了你？',
            dimension: 'design_awakening'
        },
        {
            id: 34,
            question: '如果你可以穿越到任何一个时代和一位设计师共事一天，你会选谁？你想和他/她聊什么？',
            dimension: 'design_hero'
        },
        {
            id: 35,
            question: '如果你现在就要设计一个项目，你最想解决什么现实问题？为什么这个问题对你重要？',
            dimension: 'design_mission'
        }
    ]
};

// 加载状态文案
const LOADING_MESSAGES = [
    '正在解析你的设计DNA...',
    '匹配设计师大脑回路...',
    '分析空间感知模式...',
    '计算文化基因权重...',
    '比对材料偏好图谱...',
    '生成人格光谱...',
    '连接历史与未来...',
    '提取你的美学密码...'
];
