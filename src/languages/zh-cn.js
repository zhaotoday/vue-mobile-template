export const zhCn = {
  $: {
    remark: "备注",
    stocks: "库存",
    sales: "销量",
    details: "详情",
    name: "姓名",
    gender: "性别",
    phoneNumber: "手机号",
    password: "密码",
    confirmPassword: "确认密码",
    captcha: "验证码",
    login: "登录",
    register: "注册",
    save: "保存",
    modify: "修改",
    del: "删除",
    add: "新增",
    logout: "退出账号",
    avatar: "头像",
    status: "状态",
    productInfo: "商品信息",
    total: "总计",
    payment: "支付方式",
    cashOnDelivery: "货到付款",
    paid: "实付",
    reset: "重置",
    bind: "绑定",
    pay: "支付",
    cart: "购物车",
    addToCart: "加入购物车",
    collect: "收藏",
    colon: "：",
    money: "$",
  },
  inputs: {
    content: "请输入内容",
    productName: "请输入商品名称",
    name: "请输入姓名",
    gender: "请选择性别",
    phoneNumber: "请输入手机号",
    password: "请输入密码",
    confirmPassword: "请确认密码",
    passwordTip: "请输入密码（6-16位字母和数字组合）",
    captcha: "请输入验证码",
    confirmPasswordNotEqualPassword: "两次密码输入不一致",
    passwordFormatError: "密码格式错误",
    bindSuccess: "绑定成功",
  },
  tips: {
    loginSuccess: "登录成功",
    logoutSuccess: "退出成功",
    registerSuccess: "注册成功",
    modifySuccess: "修改成功",
    addSuccess: "新增成功",
    saveSuccess: "保存成功",
    pleaseConfirm: "请确认",
  },
  orderStatuses: {
    all: "全部",
    toPay: "待付款",
  },
  components: {
    CART_SUBMIT: {
      titles: {
        settle: "去结算",
      },
    },
  },
  pages: {
    PAY: {
      RESULT: {
        paySuccess: "下单成功",
        gotoOrders: "查看订单列表",
        backHome: "返回首页",
      },
      selectAddress: "请选择收获地址",
    },
    PRODUCTS: {
      SEARCH: {
        history: "历史搜索",
        hot: "热门搜索",
      },
    },
    USER: {
      ACCOUNT_LOGIN: {
        captchaLogin: "验证码登录",
        forgotPassword: "忘记密码？",
      },
      ADDRESSES: {
        FORM: {
          titles: {
            consignee: "收货人",
            housingEstate: "小区",
            houseNo: "门牌号",
            addressTag: "地址类型",
          },
          inputs: {
            consignee: "收货人姓名",
            byWhichPhoneWeContactYou: "配送员联系您的手机号",
            housingEstate: "小区/写字楼等",
            houseNo: "门牌号，如：1 号楼 102",
          },
          addAddress: "新增收货地址",
          modifyAddress: "修改收货地址",
        },
        LIST: {
          setDefault: "设为默认",
        },
      },
      HOME: {
        titles: {
          login: "授权登录",
          myInformation: "我的资料",
          modifyPassword: "修改密码",
          bindPhoneNumber: "绑定手机号",
          bindWx: "绑定微信",
        },
        tips: {
          confirmLogout: "确认退出账号吗？",
        },
      },
      ORDERS: {
        titles: {
          orderNo: "订单号",
          orderTime: "下单时间",
          reachTime: "送达时间",
          payAtOnce: "立即付款",
        },
      },
      PHONE_NUMBER: {
        tips: {
          header:
            "应国家法律要求，使用互联网服务需进行账号实名。为保障账号的正常使用，请完成手机号绑定。感谢你的理解和支持。",
        },
      },
    },
  },
};
