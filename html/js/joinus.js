(function(){
    var ua = navigator.userAgent.toLowerCase();
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
            (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

    var workInfo = {
        responsibility:[
            [
                "负责购物中心的整体招商工作，带领团队做好客户关系维护及品牌调整等工作"
            ],
            [
                "负责所属业务（母婴/美妆个护/进口食品保健品/生活家居/3C电子品类）在所属海外市场的代理商开发、采购、管理； 负责新客户的接洽，分析目标海外市场商品的主要类目及产品的市场形势",
                "了解追求高品质用户需求，系统性有计划的收集类目目标品牌或产品线商品信息，了解竞品采购、销售等上游供应链体系行业情报和最新动态信息",
                "负责KA供应商的选品、价格谈判；前期订货数量预估、到货跟踪及后期上架等全程业务跟进",
                "能独立完成项目接洽、签订合同、供应商资质审核、协调、产品接洽等工作",
                "做好日常供应商维护工作，建立供应商信息资源库； 与供应商报关清关流程对接",
                "优化公司现有合作资源，对已有资源拓展新的合作点，保证业务良好开展",
                "根据供应商账单做审核，请款，整理，透视与分析",
                "海外仓前期规则铺建, 试行，维护与更新；国际供应链线路开发，跟进，维护与更新"
            ],
            [
                "负责内部商务需求整理，新客户的接洽、归结、执行与维护",
                "新供应商服务条款/合同的谈判, 拟定，跟进, 回顾及更新",
                "向供应商询价、报价整理、制表、透视与分析",
                "根据供应商账单做审核，请款，整理等跟单工作",
                "建立供应商信息资源库； 与供应商报关清关流程对接",
                "部门行政管理"
            ],
            [
                "负责新店铺的前期筹建工作（含Layout确定、建设工程跟进、各类市调、展具及商品入场陈列、人员招募培训、证照跟进、政府关系处理等、开店活动安排）；自有员工及合作单位驻场员工的管理；管理、维护卖场，控制商品毛利率、周转天数、库存率等；带领店铺员工达成销售预算目标；店铺安全、商品品质的控制；推动及提升店铺服务水平，客诉跟进及反省；根据店铺的实际情况制作周报、月报等"
            ],
            [
                "对卖场营运相关部门管理模式有系统的了解和实践经验。熟悉食品部门商品知识、以及《食品法》等法规的相关知识。熟悉各部门商品的特点、特性，了解超市的营运流程、工作规范；对员工的日常管理"
            ],
            [
                "根据公司年度推广计划，负责品牌推广方案的创意策划；",
                "负责加盟商的活动策划、分析及效果评估；",
                "负责公司各官网、微信、微博等推广软文策划编辑；",
                "时刻了解市场及同行业推广信息，并做内部推广战略调整。"
            ],
            [
                "根据公司整体规划及合作业务发展需要，收集、建立并维护品牌供应商、生产商以及合作伙伴资源，对收集到的信息进行梳理、分类、入库",
                "跟进商户以及合作伙伴从签约到线上线下合作的沟通、协调，促进合作顺利落地",
                "参与相关项目的对外联络、沟通与谈判，负责对合作项目的进度进行跟进、管理",
                "主动挖掘市场需求，为公司的产品和服务寻找新的业务增长点",
                "策划并组织相关市场推广活动，提出营销方案与营销模式，制定营销策略",
                "协助BD总监助推工作顺利开展"
            ],
            [
                "熟练掌握填具发票、登记账簿、点钞、识别真假币等技术",
                "办理日常现金和银行收付业务，做到日清月结，款帐相符"
            ],
            [
                "根据公司的人力资源规划及各部门用人需求制订招聘计划，组织招聘工作",
                "开拓、维护并逐步优化各有效招聘渠道，充分利用各招聘渠道为公司获取所需人才",
                "协助拟定需求岗位的职位说明书",
                "负责各招聘岗位的具体招聘工作，并组织相关人员开展初试、复试、录用等",
                "建立、健全企业人才库，主动了解业内人才的动态信息",
                "总结招聘工作中存在的问题，逐步优化招聘制度、流程等",
                "制作人事报表，办理员工合同、入职离职手续、建立人员档案、考勤统计、薪资核算等",
                "协助人事经理完成其他相关人事工作"
            ],
            [
                "负责所属业务（母婴/美妆个护/进口食品保健品/生活家居/3C电子品类）在所属海外市场的代理商开发、采购、管理； 负责新客户的接洽，分析目标海外市场商品的主要类目及产品的市场形势",
                "了解追求高品质用户需求，系统性有计划的收集类目目标品牌或产品线商品信息，了解竞品采购、销售等上游供应链体系行业情报和最新动态信息",
                "负责KA供应商的选品、价格谈判；前期订货数量预估、到货跟踪及后期上架等全程业务跟进",
                "能独立完成项目接洽、签订合同、供应商资质审核、协调、产品接洽等工作；",
                "做好日常供应商维护工作，建立供应商信息资源库； 与供应商报关清关流程对接",
                "优化公司现有合作资源，对已有资源拓展新的合作点，保证业务良好开展",
                "根据供应商账单做审核，请款，整理，透视与分析",
                "海外仓前期规则铺建, 试行，维护与更新；国际供应链线路开发，跟进，维护与更新"
            ],
            [
                "负责内部商务需求整理，新客户的接洽、归结、执行与维护",
                "新供应商服务条款/合同的谈判, 拟定，跟进, 回顾及更新",
                "向供应商询价、报价整理、制表、透视与分析",
                "根据供应商账单做审核，请款，整理等跟单工作",
                "建立供应商信息资源库； 与供应商报关清关流程对接",
                "部门行政管理"
            ],
            [
                "负责西狗国际各大类目线的运营管理，对销售产出和各类KPI负责",
                "规划各类目线的运营策略和定位",
                "根据用户需求和运营目标，不断优化各类目线产品功能",
                "负责优化和运营各类目线内容和活动",
                "通过数据分析不断优化各项功能和促销的产出，提高用户粘度",
                "与设计部，产品部，采购部，市场部有效沟通，协作完成各类工作"
            ],
            [
                "根据业务流程设计产品需求，进行分析定义，使系统规划与业务需求保持一致",
                "负责跨境电商平台的分析采集、维护及数据异常的跟踪处理，建立良好的数据分析和汇报机制",
                "负责西狗国际电商平台前端/后端产品的业务需求整理与分析、功能整理设计、产品开发进度跟进并有效推动PD实现、产品测试与发布跟进等",
                "负责上线产品的维护运营，跟踪解决各种系统问题，收集用户建议并进行改善",
                "针对阶段性的核心业绩指标，制定和导入相应的产品运营策略，提升产品用户粘性"
            ],
            [
                "负责对UI设计整体表现风格的定位，能够对用户视觉感受的整体进行把握",
                "进行网站和手机界面UI的具体设计制作",
                "对现有的网站流程、页面、栏目进行用户体验方面的优化改进",
                "协助产品技术对新栏目制定合理的交互流程和交互体验"
            ],
            [
                "全面负责客户服务团队整体运营及管理工作",
                "负责整体客服部门规范化管理，制定规范化的客服工作流程，妥善安排客服日常工作计划，进行团队员工培训以及人员的招募",
                "负责与各部门保持良好的业务沟通与协作，为公司提供有力的决策参考及建议",
                "不断提高公司客服工作质量，保证良好的公司形象、品牌及美誉度",
                "全面实施客户关系管理，建立、维护和改善客户服务体系的工作标准和运作模式，不断完善和优化服务质量",
                "代表公司形象和利益，拓展和维系公司客户群体，处理客户危机事件",
                "对会员进行二次营销，挖掘客户潜能，提升客户粘性",
                "掌握市场情况，了解竞争对手，分析客户需求，并定期提交分析报告"
            ],
            [
                "负责为客户提供满意的电话和在线咨询服务",
                "负责日常管理工作，保证公司客户服务工作的质量",
                "协助建立和完善客服部门的工作标准、流程和制度",
                "监控客户服务标准、流程的运行情况，并及时与有关部门进行沟通及优化",
                "了解各区域销售、运营实际工作，根据各区反馈的数据进行及时有效的处理和分析",
                "搭建客户关怀体系，建设客户调研，回访，满意度调查等，了解客户真实需求",
                "结合实际客户需求，进行建设业务模块，推动业务流程优化，并与对接部门的实现落地"
            ],
            [
                "负责app、html5网站产品",
                "负责需求调研分析、界面原型设计、竞品分析、用户反馈整理",
                "了解市场动态，优化用户体验，调整产品方向"
            ],
            [
                "负责会员中心、促销、CMS 微信等后台规划设计",
                "负责整理优化运营需求，把控产品开发进度",
                "了解市场动态，优化用户体验，调整产品方向"
            ],
            [
                "负责订单、商品、仓储、财务、采购等后台规划设计",
                "负责整理分析运营数据，动态调整产品方向"
            ],
            [
                "负责阿里云自动化发布，监控等",
                "负责内网开发和测试服务器环境配置和维护"
            ],
            [
                "负责app安全防护",
                "负责电商系统安全防护",
                "负责公司内网安全防护"
            ],
            [
                "负责移动端网站页面开发",
                "负责微信页面开发",
                "优化前端性能和用户体验"
            ],
            [
                "负责iOS平台应用软件的设计和开发",
                "负责应用程序的测试和维护"
            ],
            [
                "负责Android平台应用软件的设计和开发",
                "负责应用程序的测试和维护"
            ],
            [
                "负责电商后台业务开发和维护工作",
                "负责技术文档整理"
            ],
            [
                "负责电商后台业务流程测试",
                "负责电商app和网页测试"
            ]
        ],
        requirement:[
            [
                "有2年以上丰富的大型商场或购物中心的招商工作经验",
                "责任心及抗压能力强，有一定创新精神",
                "有大量品牌招商资源储备",
                "有良好的沟通协调能力",
                "有团队管理能力"
            ],
            [
                "3年以上招商及进口直采经验；了解所负责产品线（母婴/美妆个护/进口食品保健品/生活家居3C电子品类）的商品；",
                "熟悉供应商管理及其流程，并具备优秀的海外供应商资源；",
                "具有强烈的责任心、较强的组织协调能力、良好的沟通能力、语言表达能力、商务拓展及合同谈判能力；",
                "良好的英文读写能力。"
            ],
            [
                "对电子商务行业、移动互联网行业充满热情，熟悉供应商管理及其流程、跨境电商平台经验者优先",
                "具有强烈的责任心、良好的沟通能力、语言表达能力、善于学习，主动，积极",
                "精通Excel，Word, PowerPoint",
                "良好的英文读写能力（或其它小语种语言能力）者优先"
            ],
            [
                "2年以上超市管理工作经验"
            ],
            [
                "2年以上超市课长及主管工作经验"
            ],
            [
                "专科及以上学历，广告学或汉语言文学专业；",
                "二年以上乙方广告公司策划经验；",
                "思维敏捷，文字功底强，可以独立、快速撰写各类文案（平面、POP软文等）",
                "工作主动性强，富有创造力以及团队合作精神，可为品牌发展提供建设性的意见。",
                "较强的审美观，走在市场及时尚的前端，会PS 、PPT、AI等优秀考虑"
            ],
            [
                "2年以上工作经验，本科学历，有电子商务、O2O及品牌推广工作经验者优先",
                "热爱商务营销工作，对合作开拓有极大的兴趣及热忱，责任感强，敢于面对挑战",
                "有良好的策划能力、执行方案的能力以及沟通表达能力",
                "有极强的责任心和服务意识，执行力强，富有团队合作精神",
                "善于挖掘并整合各种资源，制定合作实施计划，开展深度合作",
                "英语水平六级及以上"
            ],
            [
                "具备一定的会计理论专业知识，具有初级会计职称",
                "具有现金、银行、银行票据管理方面的知识、掌握现金、银行存款管理制度和财务开支标准",
                "具备2年以上出纳实际经验，熟悉企业收支工作程序、工作内容"
            ],
            [
                "根据公司的人力资源规划及各部门用人需求制订招聘计划，组织招聘工作",
                "开拓、维护并逐步优化各有效招聘渠道，充分利用各招聘渠道为公司获取所需人才",
                "协助拟定需求岗位的职位说明书",
                "负责各招聘岗位的具体招聘工作，并组织相关人员开展初试、复试、录用等",
                "建立、健全企业人才库，主动了解业内人才的动态信息",
                "总结招聘工作中存在的问题，逐步优化招聘制度、流程等",
                "制作人事报表，办理员工合同、入职离职手续、建立人员档案、考勤统计、薪资核算等",
                "协助人事经理完成其他相关人事工作"
            ],
            [
                "3年以上招商及进口直采经验；了解所负责产品线（母婴/美妆个护/进口食品保健品/生活家居3C电子品类）的商品；",
                "熟悉供应商管理及其流程，并具备优秀的海外供应商资源；",
                "具有强烈的责任心、较强的组织协调能力、良好的沟通能力、语言表达能力、商务拓展及合同谈判能力；",
                "良好的英文读写能力。"
            ],
            [
                "对电子商务行业、移动互联网行业充满热情，熟悉供应商管理及其流程、跨境电商平台经验者优先",
                "具有强烈的责任心、良好的沟通能力、语言表达能力、善于学习，主动，积极",
                "精通Excel，Word, PowerPoint",
                "良好的英文读写能力（或其它小语种语言能力）者优先"
            ],
            [
                "本科或以上学历",
                "有电商行业背景5年以上",
                "有线上线下商超运营，跨境重点母婴/美妆个护/食品保健品的商品采购经验，跨境电商平台线上运营经验者优先",
                "有较好的规划、协调、沟通、策划能力",
                "有较好的创新能力和数据分析能力",
                "热爱挑战，有较强承压能力，敢于创新突破，强调以结果为导向，具备团队合作精神"
            ],
            [
                "计算机及市场营销等相关专业本科毕业，电商行业经验3年以上",
                "对无线端用户了解，并对其需求有一定分析判断能力",
                "对数据敏感，善于通过数据分析，了解客户行为和需求，并不断运用创新的方法来实现客户需求",
                "非常强的沟通和理解能力，能迅速建立与平行部门的合作关系",
                "负责并成功规划过大型电商平台信息化项目优先；有互联网应用软件和无线产品运营、开放平台运营工作经验者优先",
                "有较强的跨部门组织、协调能力、组织协调和管理能力，良好的团队合作精神"
            ],
            [
                "2年以上网站和UI设计和互动设计经验，艺术、美术等相关专业",
                "具有扎实的美术功底，色彩感强，具备新颖的设计创意，良好的视觉表达能力",
                "精通Photoshop、Illustrator或Sketch等软件，让你的创意与灵感得到有效的表达，具备较强的设计能力",
                "有网站和手机界面线上作品，面试须提供详尽的作品案例",
                "能独立完成整个设计方案的优先"
            ],
            [
                "大专以上学历，至少5年及以上电商客服经验或具备3年以上领导50人以上客服团队相关管理经验",
                "熟悉客服运营流程，有较强独立处理问题能力",
                "有良好的组织能力，能够协调各分公司、部门，有大局观",
                "执行能力强，能严格要求各分公司客服团队去贯彻执行现有制度",
                "能熟练操作办公软件，有较强的语言能力和较强的文字处理能力",
                "能承受工作压力，责任心强",
                "有营销（电销、网销等）工作经验优先"
            ],
            [
                "大学专科以上学历",
                "至少三年以上电商行业客服主管工作经验，至少五年以上互联网行业客户服务相关经验",
                "具备客服、物流、运营、质量监管等相关管理工作经验者优先",
                "有较高的数据分析能力和对数据的敏感度",
                "思维严谨，善于思考，观察及沟通能力强，服务意识好",
                "高效、积极、具有带领团队的能力、亲和力及号召力",
                "熟练使用各类电脑办公软件（ppt、word、Excel、visio等）",
                "心理素质良好，心态平和有耐心，能够承受一定的服务工作压力，协助建立和完善客服部门的工作标准、流程和制度"
            ],
            [
                "2年以上电商产品经理经验",
                "熟悉产品规划、需求分析、产品功能设计、业务流程设计、原型设计",
                "良好的沟通和协调能力",
                "有独立app产品相关经验者优化"
            ],
            [
                "2年以上电商产品经理经验",
                "熟悉产品规划、需求分析、产品功能设计、业务流程设计、原型设计",
                "良好的沟通和协调能力",
                "有会员中心、促销、CMS等相关经验者优化"
            ],
            [
                "2年以上电商产品经理经验",
                "熟悉产品规划、需求分析、产品功能设计、业务流程设计、原型设计",
                "良好的沟通和协调能力",
                "有订单、商品、仓储、财务、采购等相关经验者优化"
            ],
            [
                "熟悉centos、shell编程、nginx、apache、mysql、redis、tomcat等",
                "熟悉zabbix、cacti、nagios等开源监控工具",
                "熟悉lvs、haproxy等负载均衡技术",
                "熟悉xen、kvm、lxc、vmware等虚拟化技术"
            ],
            [
                "熟悉汇编语言，熟悉ida wireshark等分析工具",
                "熟悉手机安全逆向、加解密算法、身份认证等",
                "熟悉web漏洞挖掘分析，sql注入/跨站/文件包含/命令执行等",
                "有电商相关经验者优化"
            ],
            [
                "熟悉web前端技术，包括HTML、XML、CSS、Javascript、json等开发技术",
                "熟练使用前端调试工具",
                "熟练编写自适应html5页面，适配各种尺寸移动设备",
                "有iOS、Android等移动网页开发经验优先考虑",
                "有独立开发html5项目经验者优先考虑"
            ],
            [
                "熟悉objective-c、c、c++开发",
                "一年以上iPhone工作经验，熟悉cocadata、json、网络编程等",
                "熟悉iOS界面开发规范以及AppStore上架流程和规则",
                "有AppStore线上作品者优先考虑",
                "有app安全相关经验者优先考虑"
            ],
            [
                "具有扎实java语言基础，良好的编程习惯",
                "1年以上Android平台实际开发经验，熟悉多线程、json、sqlite、网络编程等",
                "熟悉Android SDK框架和运行机制, 熟悉Android的编译和打包的流程和原理",
                "有独立开发app项目经验者优先考虑",
                "有app安全相关经验者优先考虑"
            ],
            [
                "JAVA基础扎实，对JVM原理有一定的了解",
                "熟悉Spring、ibatis/mybatis、struts等开源框架熟悉",
                "熟悉分布式系统的设计和应用，熟悉分布式、缓存、消息等机制",
                "熟悉多线程及高性能的设计与编码及性能调优",
                "有电商相关经验者优化"
            ],
            [
                "熟悉app和网页测试",
                "熟练使用loadrunner jira fiddler等工具",
                "有电商相关经验者优化"
            ]
        ]
    };
    $('.items').click(function(){
        var index = parseInt($(this).attr("index"));
        var text = $(this).text();
        var textArr = text.split('(');
        textArr.pop();
        $('.work_name').text(textArr.join('('));

        if (index < 9) {
            $(".work_address span").text("杭州");
        }
        else {
            $(".work_address span").text("上海");
        }

        var htmlData1 = [];
        for (var i = 0; i < workInfo.responsibility[index].length; i++) {
            htmlData1.push('<li>' + workInfo.responsibility[index][i] + '</li>');
        }
        $('#ol_1').empty().append(htmlData1.join(''));

        var htmlData2 = [];
        for (var i = 0; i < workInfo.requirement[index].length; i++) {
            htmlData2.push('<li>' + workInfo.requirement[index][i] + '</li>');
        }
        $('#ol_2').empty().append(htmlData2.join(''));

        $('.div_detail').show();
    });

    $('.delete').click(function() {
        $('.div_detail').hide();
    });

    var $TapTop = $('.tap_top');
    var scrollFunc = function(e) {
        e = e || window.event;
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        if (scrollTop > 50) {
            $('.div_top').hide();
            if ($TapTop.hasClass('tap_top_hide')) {
                $TapTop.removeClass('tap_top_hide');
            }
        }
        else {
            $('.div_top').show();
            if (!$TapTop.hasClass('tap_top_hide')) {
                $TapTop.addClass('tap_top_hide');
            }
        }
    }

    $TapTop.click(function() {
        if (Sys.firefox){
            document.documentElement.scrollTop = 0;
        }
        $('body').scrollTop(0);
    });

    if(document.addEventListener){
        document.addEventListener('DOMScroll',scrollFunc,false);
    }
    window.onscroll=document.onscroll=scrollFunc;
})();