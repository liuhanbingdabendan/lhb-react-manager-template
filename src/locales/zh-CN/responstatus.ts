export default {
  'res.code.200': '成功',
  'res.code.500': '后台服务遇到了一个问题',
  'res.code.400': '请求参数不正确',
  'res.code.401': '未登录或登录失效',
  'res.code.403': '无访问权限',
  'res.code.404': '找到不到访问地址',
  'res.code.405': '不支持的请求类型',
  'res.code.412': '签名错误(客户端请求信息的先决条件错误)',
  'res.code.600': '接口传参信息不完整(必要参数)',
  'res.code.601': '没有查询到数据',
  // appKernel服务状态码
  'res.code.1000': '租户编码重复',
  'res.code.1001': '应用编码重复',
  'res.code.1002': '应用包ID重复',
  'res.code.1003': '应用角色编码重复',
  'res.code.1004': '租户不存在',
  'res.code.1005': '应用Id不存在',
  'res.code.1006': '租户与应用对应关系已存在',
  'res.code.1007': '类型名称或编码重复',
  'res.code.1008': '字典数据重复',
  'res.code.1009': '租户关系代码重复',
  'res.code.1010': '帮助信息已存在',
  'res.code.1011': '不能为空',
  'res.code.1012': '应用不存在',
  // account服务状态码
  'res.code.2000': '账户不存在或密码错误',
  'res.code.2001': '重试次数过多被限制',
  'res.code.2002': '账户禁用',
  'res.code.2003': '账户绑定租户错误',
  'res.code.2004': 'APP禁用或者不存在',
  'res.code.2005': '租户绑定App错误',
  'res.code.2006': '账户绑定APP错误',
  'res.code.2007': '账户已认证，请使用认证手机号登陆',
  'res.code.2020': '等待扫描',
  'res.code.2021': '已扫描',
  'res.code.2022': '已授权登录',
  'res.code.2023': '已失效',
  'res.code.2024': '状态错误',
  'res.code.2030': '没有人脸特征码',
  'res.code.2031': '禁止使用人脸登录',
  'res.code.2100': '账户不存在',
  'res.code.2101': '手机号重复',
  'res.code.2102': 'Email重复',
  'res.code.2103': '身份证重复',
  'res.code.2104': '账户重复',
  'res.code.2105': '旧密码错误',
  'res.code.2106': '解除登录状态错误',
  'res.code.2107': '密码错误',
  'res.code.2201': '导入数据重复',
  'res.code.2202': '导入数据已存在',
  'res.code.2203': '导入数据为空',
  'res.code.2204': '手机号不存在',
  'res.code.2300': '删除失败，账号需要至少保留一个租户',
  'res.code.2400': '手机号已存在',
  'res.code.2401': '手机号未认证',
  'res.code.2402': '创建账号异常',
  'res.code.2403': '身份证号已存在',
  'res.code.2404': '鼓点号已存在',
  'res.code.2405': '鼓点号一年只可修改一次',
  'res.code.2406': '鼓点号重复',
  'res.code.2500': '找不到配置',
  'res.code.2501': '获取openID失败',
  'res.code.2502': 'openId未绑定用户',
  'res.code.2060': '无权限跨租户切换',
  // bankConnector客户端服务
  'res.code.3010': '卡号没有配置',
  'res.code.3011': '企业名称已存在',
  'res.code.3020': '银行类型已存在',
  'res.code.3030': '银行账户已存在',
  // message信息服务
  'res.code.3501': '手机号格式错误',
  'res.code.3502': '短信发送失败',
  'res.code.3503': '验证码已过期',
  'res.code.3504': '验证码无效',
  'res.code.3505': '无响应模板',
  'res.code.3506': '租户未配置验证码',
  'res.code.3507': '验证码发送频次太高请稍后重试',
  // product服务状态码
  'res.code.4010': '品牌名称重复',
  'res.code.4011': '品牌英文名称重复',
  'res.code.4012': '品牌编码重复',
  'res.code.4020': '商品属性名称重复',
  'res.code.4021': '商品属性编码重复',
  'res.code.4022': '商品属性已被使用',
  'res.code.4030': '商品属性值重复',
  'res.code.4031': '商品属性值已被使用',
  'res.code.4040': '商品类目名称重复',
  'res.code.4041': '商品类目编码重复',
  'res.code.4042': '商品父类目已存在属性，不能建子类',
  'res.code.4043': '商品类目不是最末级',
  'res.code.4044': '商品类目已有属性',
  'res.code.4045': '商品类目已有产品',
  'res.code.4046': '父类目不存在',
  'res.code.4050': '商品类目属性已存在',
  'res.code.4060': '商品编码已存在',
  'res.code.4070': 'sku编码重复',
  'res.code.4071': 'sku工厂编码重复',
  'res.code.4072': 'sku条码重复',
  // organization服务
  'res.code.5010': '企业号已存在',
  'res.code.5011': '企业名称已存在',
  'res.code.6000': '销方代理code已存在',
  'res.code.6001': '消方代理名称已存在',
  'res.code.6002': '消方代理简称已存在',
  'res.code.6003': '消方代理的业务单元有启用的，自己不能禁用',
  'res.code.6010': '行政组织code已存在',
  'res.code.6011': '行政组织名称已存在',
  'res.code.6012': '行政组织简称已存在',
  'res.code.6013': '父类不能参与核算，子类也不能参与核算',
  'res.code.6014': '父类处于禁用状态，子类也必须处于禁用状态',
  'res.code.6015': '法人处于禁用状态，子类也必须处于禁用状态',
  'res.code.6016': '法人不是财务单位，子类也不能时核算单位',
  'res.code.6017': '父类不能挂到子类上',
  'res.code.6018': '子类有核算单位，父类不能不是',
  'res.code.6019': '子类有启用状态，父类不能禁用',
  'res.code.6020': '法人组织code已存在',
  'res.code.6021': '父类不是财务单位子类不允许是财务单位',
  'res.code.6022': '子类有财务单位',
  'res.code.6023': '父级被禁用，子集不能启用',
  'res.code.6024': '子类有启用状态，父类不能禁用',
  'res.code.6025': '父类不能挂到子类上',
  'res.code.6026': '下级供方有启用的，自己不能禁用',
  'res.code.6030': '供方code已存在',
  'res.code.6031': '供方名称已存在',
  'res.code.6032': '供方简称已存在',
  'res.code.6033': '法人禁用时，自己不能启用',
  'res.code.6040': '业务单元code已存在',
  'res.code.6041': '业务单元名称已存在',
  'res.code.6042': '业务单元简称已存在',
  'res.code.6043': '业务单元父类禁用，自己不能启用',
  'res.code.6050': '客户编码已存在',
  'res.code.6060': '客户属性级别已存在',
  'res.code.6070': '仓库编码已存在',
  'res.code.6080': '门店编码已存在',
  'res.code.6090': '岗位编码已存在',
  'res.code.6091': '岗位编码不存在',
  'res.code.6092': '专业线条不存在',
  'res.code.6093': '岗位类别不存在',
  'res.code.6100': '职等编码已存在',
  'res.code.6110': '职级编码已存在',
  'res.code.6120': '工号已存在',
  'res.code.6121': '员工基础信息为空',
  'res.code.6122': '员工身份证号已存在',
  'res.code.6123': '员工手机号已存在',
  'res.code.6130': '当前员工身份证在账户中心已存在账户，但非当前员工使用，请检查',
  'res.code.6131': '当前账户已绑定过员工，但非当前员工使用，请检查',
  'res.code.6132': '员工编码不存在',
  'res.code.6133': '公司不存在',
  'res.code.6140': '数据身份已存在',
  'res.code.6141': '应用编码不存在',
  'res.code.6142': '日期格式错误',
  'res.code.6143': '存在不属于该数据权限的应用',
  'res.code.6144': '编码已存在',
  'res.code.6145': '费用分类已被使用，不能删除',
  'res.code.6146': '税号已存在',
  'res.code.6147': '外接应用已存在',
  'res.code.6148': '应用外接信息未配置',
  'res.code.6149': '费用类型分组名称已存在',
  // after-sale服务
  'res.code.7001': '数据字典项目值已存在',
  'res.code.7002': '数据字典已被使用，不可编辑',
  'res.code.7003': '以下数据字典已被使用，不可删除',
  'res.code.7004': '数据字典在系统中没有找到',
  'res.code.7005': '父级数据字典在系统中没有找到',
  'res.code.7006': '数据字典项目名已存在',
  'res.code.7007': '数据字典有子集，不可变为不启用状态',
  'res.code.7010': '该产品型号在系统中不存在',
  'res.code.7011': '产品型号已被使用,不可删除',
  'res.code.7012': '该产品为同步数据,不可操作',
  'res.code.7013': '产品型号已被使用,不可变为不启用',
  'res.code.7014': '型号编码系统内已存在',
  'res.code.7020': '该配件在系统中不存在',
  'res.code.7021': '该物料代码已被使用',
  'res.code.7022': '该物料名称已被使用',
  'res.code.7023': '该配件已被使用,不可删除',
  'res.code.7024': '该配件已被使用,不可变为不启用状态',
  'res.code.7030': '该网点在系统中不存在',
  'res.code.7031': '该名称已被使用',
  'res.code.7032': '该编码已被使用',
  'res.code.7033': '该网点已被使用,不可删除',
  'res.code.7034': '网点已被引用,不可变为不启用状态',
  'res.code.7040': '该部门在系统中不存在',
  'res.code.7041': '该编码已被使用',
  'res.code.7042': '该名称已被使用',
  'res.code.7043': '该部门已被使用,不能变为不启用状态',
  'res.code.7044': '以下部门已被使用,不能删除',
  'res.code.7050': '该员工在系统中不存在',
  'res.code.7051': '该员工已存在',
  'res.code.7060': '该流程配置在系统中不存在',
  'res.code.7061': '编码不可修改',
  'res.code.7062': '名称不可修改',
  'res.code.7063': '同一节点只能出现一次',
  'res.code.7064': '复杂流程无配置不可开启',
  'res.code.7070': '收货对象在系统中没有找到',
  'res.code.7071': '该记录已收货',
  'res.code.7072': '物流单号已存在',
  'res.code.7073': '当前状态禁止编辑',
  'res.code.7074': '已收货数据不可删除',
  'res.code.7075': '已收货数据不可重复收货',
  'res.code.7076': '会员工单号已存在:',
  'res.code.7077': '会员工单号重复:',
  'res.code.7078': '收货单未上传图片',
  'res.code.7080': '该维修工单在系统中没有找到',
  'res.code.7081': '该维修工单当前状态禁止编辑',
  'res.code.7082': '售后系统来源禁止删除',
  'res.code.7083': '当前工单状态不能删除',
  'res.code.7084': '该产品下无有效配件',
  'res.code.7085': '该产品下无此配件',
  'res.code.7090': '初检对象在系统中没有找到',
  'res.code.7091': '当前工单状态不能进行初检动作',
  'res.code.7100': '收费对象在系统中没有找到',
  'res.code.7101': '当前工单状态不能进行收费动作',
  'res.code.7102': '未找到初检记录',
  'res.code.7103': '会员系统来源工单不能进行收费动作',
  'res.code.7104': '未找到维修流程配置',
  'res.code.7105': '售后系统来源工单不能进行收费动作',
  'res.code.7120': '该记录在系统中不存在',
  'res.code.7121': '编码已存在',
  'res.code.7122': '名称已存在',
  'res.code.7200': '该记录在系统中不存在',
  'res.code.7201': '编码已存在',
  'res.code.7202': '名称已存在',
  'res.code.7210': '产品类型对象不存在',
  'res.code.7211': '产品类型编码已存在',
  'res.code.7212': '产品类型已被使用，不可删除',
  'res.code.7213': '产品类型已被使用，不可变为不启用状态',
  'res.code.7220': '产品系列对象不存在',
  'res.code.7221': '产品系列编码已存在',
  'res.code.7222': '产品系列已被使用，不可删除',
  'res.code.7223': '产品系列已被使用，不可变为不启用状态',
  'res.code.7230': '该故障信息在系统中不存在',
  'res.code.7231': '该编码已被使用',
  'res.code.7232': '该名称已被使用',
  'res.code.7240': '该收货信息在系统中不存在',
  'res.code.7241': '当前状态不允许收获操作',
  'res.code.7242': '物流单号不可重复',
  'res.code.7243': '维修工单已在其他发货单中，不可添加',
  'res.code.7250': '维修工单未找到',
  'res.code.7251': '工单当前状态不可进行评分操作',
  'res.code.7260': '故障原因编码已存在',
  'res.code.7261': '故障原因原因已存在',
  'res.code.7262': '只有非会员寄修，未同步的数据才能同步',
  'res.code.7263': '已经同步过的订单不能重复同步',
  'res.code.7264': '物流单号重复',
  'res.code.7265': '单子已发货不能删除',
  // idis服务
  'res.code.8000': '正在获取数据中',
  // 工作流引擎服务
  'res.code.9000': '系统中已存在此名称',
  'res.code.9001': '系统中已存在此代码',
  'res.code.9002': '分类已被引用，删除失败',
  'res.code.9010': '系统中已存在此流程key',
  'res.code.9011': 'XML为空',
  'res.code.9012': '系统中已存在此流程编码',
  'res.code.9020': '任务已被处理',
  'res.code.9021': '当前任务不能驳回至上一环节',
  'res.code.9022': '登陆人无审批此任务的权限',
  'res.code.9023': '当前任务不能驳回至发起人',
  'res.code.9030': '流程已被删除',
  'res.code.9031': '当前流程版本已更新，退出后重新发起',
  'res.code.9032': '流程只有发起人可以撤回',
  'res.code.9033': '流程当前节点禁止撤回',
  'res.code.9040': '流程流转异常，缺失控件',
  'res.code.9041': '连线未正常连接',
  'res.code.9042': '任务节点必填项缺失',
  'res.code.9043': '第一个任务必须是用户填写表单',
  'res.code.9044': '流程条件变量字段不存在，请检查是否删除了字段',
  'res.code.9050': '触发器名称已存在',
  'res.code.9061': '文件袋已报废',
  'res.code.9060': '文件袋已使用',
  'res.code.9062': '文件袋不存在',
  'res.code.9070': '文件分类编码已存在',
  'res.code.9071': '文件分类名称已存在',
  'res.code.9072': '文件分类下有文件，不能删除',
  'res.code.9073': '文件已作废不能发布',
  'res.code.9074': '文件密码不能为空',
  'res.code.9075': '文件密码错误',
  'res.code.9076': '流程定义code不存在，或流程未发布',
  'res.code.9077': '编码重复',
  'res.code.9078': '交票信息已存在',
  'res.code.9079': '交票信息已存在',
  'res.code.9080': '流程处于多人审核节点，流程在此不可进行干预',
  'res.code.9081': '审批关系编码已存在',
  'res.code.9082': '重复请求',
  'res.code.9083': '其他途径审批流程类型错误',
  // 表单引擎服务
  'res.code.10000': '流程条件使用的表单字段code已存在',
  'res.code.10011': '表单字段重复',
  'res.code.10030': '表达式校验错误',
  'res.code.10031': '表达式中的变量错误',
  'res.code.10050': '此单据无打印模板，请检查',
  // 物流服务
  'res.code.11000': '物流设置名称重复',
  'res.code.11001': '物流设置标记重复',
  'res.code.11002': '信息不存在',
  'res.code.11003': '物流设置已被使用无法删除',
  'res.code.11004': '账户名称已存在',
  // 营销报表服务
  'res.code.12000': '无数据',
  'res.code.12001': '无对应用户',
  'res.code.12002': '字段配置已存在',
  // 共享财务服务
  'res.code.13000': '此编码已存在，不能使用',
  'res.code.13001': '编码类型匹配错误，无法识别区间',
  'res.code.13002': '结束编码应大于开始编码',
  'res.code.13003': '当前文件袋已被使用',
  'res.code.13004': '当前文件袋已被报废',
  'res.code.13005': '单据已收单',
  'res.code.13006': '单据不存在',
  'res.code.13007': '非未审核的单据不允许编辑',
  'res.code.13008': '当前文件袋不存在',
  'res.code.13009': '费用分发明细配置已存在',
  'res.code.13010': '费用分发明细配置已存在',
  'res.code.13011': '没有匹配上的单据，请检查单据分发配置和收支项目配置',
  // 云打印服务
  'res.code.14000': '打印模板编码重复',
  'res.code.14001': '找不到打印模板',
  'res.code.14002': '打印服务遇到问题',
  'res.code.14003': '打印设备不在线',
  'res.code.14004': '打印设备未注册',
  'res.code.14005': '设备注册信息有误',
  // hr服务
  'res.code.15001': '资料采集链接未配置',
  'res.code.15002': '入职手机号已存在',
  'res.code.15003': '采集链接已失效',
  'res.code.15004': '选中的申请中包含没有审核完成的申请',
  'res.code.15005': '选中的申请中包含没有邮箱的申请，只可使用二维码采集资料',
  'res.code.15006': '身份证号重复',
  'res.code.15007': '该对象已经存在异动单据，不可异动',
  'res.code.15008': '该对象存在离职单据，不可异动',
  'res.code.15009': '已经存在黑名单之内的人不可重复添加',
  'res.code.15010': '该对象存在离职单据',
  'res.code.15011': '该对象在黑名单中不可入职',
  'res.code.15012': '系统内已存在此工号，请更换工号重试',
  'res.code.15013': '考勤组织名称重复',
  'res.code.15014': '名称同年份不可重复',
  'res.code.15015': '考勤包名称不可重复',
  'res.code.15016': '考勤包编码不可重复',
  'res.code.15017': '考勤包编码不可重复',
  'res.code.15018': '考勤组织存在日历',
  'res.code.15019': '休假设置编码已存在',
  'res.code.15020': '出勤设置编码已存在',
  'res.code.15021': '加班设置编码已存在',
  'res.code.15022': '项目配置编码重复',
  'res.code.15023': '导入数据不能为空!',
  'res.code.15024': '打卡时间格式不正确',
  'res.code.15025': '考勤档案无对应员工信息!',
  'res.code.15026': '考勤档案已存在!',
  'res.code.15027': '该考勤组织已有生效的考勤期间!',
  'res.code.15028': '假期还有额度，请先使用!',
  'res.code.15029': '考勤包已被使用不可禁用!',
  'res.code.15030': '考勤包已被使用不可改为私有!',
  'res.code.15031': '该区间有请假申请!',
  'res.code.15032': '该区间有出差申请!',
  'res.code.15033': '该区间有公出申请!',
  'res.code.15034': '不满足单次休假最小时长!',
  'res.code.15035': '不满足单次休假最大时长!',
  'res.code.15036': '该假期需要上传附件!',
  'res.code.15037': '该区间没有获取到对应天数!',
  'res.code.15038': '考勤期间存在冻结状态!',
  'res.code.15039': '请假日期不在有效期内!',
  'res.code.15040': '请假额度不够!',
  'res.code.15041': '请假不符合规则设置!',
  'res.code.15042': '考勤档案无效，仍需加班请联系管理员!',
  'res.code.15043': '未配置考勤日历，仍需加班请联系管理员!',
  'res.code.15044': '找不到加班类型，仍需加班请联系管理员!',
  'res.code.15045': '上班时间内不可申请加班!',
  'res.code.15046': '所申请时段内存在加班记录，不可申请!',
  'res.code.15047': '不满足单次出差最小时长!',
  'res.code.15048': '不满足单次出差最大时长!',
  'res.code.15049': '不满足单次公出最小时长!',
  'res.code.15050': '不满足单次公出最大时长!',
  'res.code.15051': '当前补签事由已经超出限制!',
  'res.code.15052': '考勤档案停用状态禁止编辑!',
  'res.code.15060': '合同签署公司编码重复!',
  'res.code.15061': '考勤期间缺少间隔日期参数',
  'res.code.15062': '日历名称已存在',
  'res.code.15063': '作废单据状态错误',
  'res.code.15064': '额度调整值不允许修改',
  'res.code.15065': '要作废的单据正在审批中',
  'res.code.15066': '假期类型不允许新增',
  'res.code.15067': '员工没有该假期',
  'res.code.15068': '考勤期间已冻结',
  'res.code.15069': '重新发起转正错误',
  'res.code.15070': '没有要重新生成的额度',
  'res.code.15071': '格式错误',
  'res.code.15072': '不能为空',
  'res.code.15073': '数据不存在',
  'res.code.15074': '重复数据',
  'res.code.15075': '时长计算不正确，请退出重试',
  'res.code.15076': '日期格式错误，正确格式，例 2022-01-01',
  'res.code.15077': '考勤期间设置异常，联系人资进行维护',
  'res.code.15078': '工作日历设置异常，联系人资进行维护',
  'res.code.15079': '不需要填值',
  'res.code.15080': '邮箱重复',
  'res.code.15081': '考勤档案排班类型不支持调整班次',
  'res.code.15082': '导入对象，在现导入时间段内 存在两个考勤包，不可导入',
  'res.code.15083': '导入人员与刚才选择的公司不一致',
  'res.code.15084': '存在未来考勤档案历史记录，请通过考勤档案历史进行编辑',
  'res.code.15085': '假期余额同员工、同假期类型、同起止时间不可重复导入',
  // 电子签章服务
  'res.code.16001': '公司已存在',
  'res.code.16002': '公司不存在',
  'res.code.16003': '公司未申请实名认证',
  'res.code.16004': '发起公司未开启自动签',
  'res.code.16005': '获取公司实名认证信息失败',
  'res.code.16006': '法大大配置不存在',
  'res.code.16007': '法大大账号注册失败',
  'res.code.16008': '法大大获取企业实名认证地址失败',
  'res.code.16009': '法大大获取个人实名认证地址失败',
  'res.code.16010': '合同类型已存在',
  'res.code.16011': '合同模板已存在',
  'res.code.16012': '合同模板不存在',
  'res.code.16013': '合同模板已上传过模板',
  'res.code.16014': '上传合同模板失败',
  'res.code.16015': '合同模板未上传过模板',
  'res.code.16016': '下发文件不能为空',
  'res.code.16017': '合同不存在',
  'res.code.16018': '法大大返回异常',
  'res.code.16019': '其他认证信息不存在',
  'res.code.16020': '其他认证信息没有法大大记录',
  'res.code.16021': '没有找到可用的认证信息',
  'res.code.16022': '合同不允许审批',
  'res.code.16023': '数据为空',
  'res.code.16024': '下发对象重复',
  'res.code.16025': '过期时间不能为空',
  // 审计中心服务
  'res.code.21000': '审计类别id不存在',
  'res.code.21001': '审计对象id不存在',
  'res.code.21002': '审计计划id不存在',
  'res.code.21003': '问题id不存在',
  'res.code.21004': '审计风险点id不存在',
  'res.code.21005': '审计员工id不存在',
  'res.code.21006': '打分id不存在',
  'res.code.21007': '问题已经存在录入结果无法删除',
  'res.code.21008': '导入数据重复',
  'res.code.21009': '导入数据为空',
  'res.code.21010': '导入数据已存在',
  'res.code.21011': '导入数据项目编码不存在',
  'res.code.21012': '导入数据模块编码不存在',
  'res.code.21013': '导入数据问题性质不存在',
  'res.code.21014': '导入数据金额性质不存在',
  'res.code.21015': '审计模块编码已存在',
  'res.code.21016': '审计对象编码已存在',
  'res.code.21017': '审计计划编码已存在',
  'res.code.21018': '审计类别编码已存在',
  'res.code.21019': '审计项目编码已存在',
  'res.code.21020': '审计风险点已存在',
  'res.code.21021': '数据已被使用，无法删除',
  'res.code.21022': '员工已存在',
  'res.code.21023': '项目结束阶段禁止编辑',
  'res.code.21024': '负责人或项目成员已被设置模块执行负责人',
  'res.code.21025': '审计步骤id不存在',
  'res.code.21026': '审计步骤编码已存在',
  'res.code.21027': '已执行过的步骤不能重复执行',
  'res.code.21028': '风险点已执行',
  'res.code.21029': '风险点无需执行的不用复核',
  'res.code.21030': '风险点已复核',
  'res.code.21031': '没有执行过的风险点',
  'res.code.21032': '问题只能录入一次',
  'res.code.21033': '步骤已被使用',

  // 广告费资产服务
  'res.code.21500': '已过期的任务',
  'res.code.21510': '存在不识别的资产',
  'res.code.21520': '用户已存在',
  'res.code.21521': '用户不存在',
  'res.code.21530': '角色不存在',
  'res.code.21540': '编码已存在',
  'res.code.21541': '名称已存在',
  'res.code.21550': '该门店您已盘点，请勿重复操作！',
  'res.code.21551': '该商圈您已盘点，请勿重复操作！',
  // 人才盘点服务
  'res.code.23001': '暂不支持该方式发布',
  'res.code.23002': '投票发送失败，以下人员信息异常',
  'res.code.23003': '投票活动链接未配置',
  'res.code.23004': '投票活动不存在',
  'res.code.23005': '投票活动未开始',
  'res.code.23006': '投票活动已结束',
  'res.code.23007': '该词条名称已存在',
  'res.code.23008': '该层级名称已存在',
  'res.code.23009': '该维度名称已存在',
  'res.code.23010': '该投票名称已存在',
  'res.code.23011': '该画像名称已存在',
  'res.code.23012': '该投递对象已存在',
  'res.code.23013': '该试卷名称已存在',
  'res.code.23014': '导入数据为空',
  'res.code.23015': '该盘点活动名称已存在',
  'res.code.23016': '该评估活动不存在或者不是进行中',
  'res.code.23017': '360评估投票状态错误',
  'res.code.23018': '情景模拟已完成',
  'res.code.23019': '情景模选项和分值未设置拟已完成',
  'res.code.23020': '该试题名称已存在',
  'res.code.23021': '试卷类型已被使用，不可删除',
  'res.code.23022': '人才盘点活动名称已存在',
  'res.code.23023': '人才盘点活动不存在',
  'res.code.23024': '人才盘点活动当前状态不是进行中不能作废',
  'res.code.23025': '人才盘点活动当前状态不是进行中不能操作',
  'res.code.23026': '人才盘点活动含有未反馈数据不能完成',
  'res.code.23027': '人才盘点活动节点不允许后退',
  'res.code.23028': '人才盘点活动当前状态不是已作废不能重新启用',
  'res.code.23029': '人才盘点活动当前节点不是反馈不能完成',
  'res.code.23030': '人才盘点活动节点不存在',
  'res.code.23031': '手机号对应的账户不存在',
  'res.code.23032': '全部人员完成潜力分布才能进入下一步',
  'res.code.23033': '全部人员完成绩效分布才能进入下一步',
};
