export const en = {
  $: {
    remark: "Remark",
    stocks: "Stocks",
    sales: "Sales",
    details: "Details",
    name: "Name",
    gender: "Gender",
    phoneNumber: "Phone",
    password: "Password",
    confirmPassword: "Re-password",
    captcha: "Captcha",
    login: "Login",
    register: "Register",
    save: "Save",
    modify: "Modify",
    del: "Delete",
    add: "New",
    logout: "Logout",
    avatar: "Avatar",
    status: "Status",
    productInfo: "Product Information",
    total: "Total",
    payment: "Payment",
    cashOnDelivery: "Cash on Delivery",
    paid: "Paid",
    reset: "Reset",
    bind: "Bind",
    pay: "Pay",
    cart: "Shopping Cart",
    addToCart: "Add to Chopping Cart",
    collect: "Collect",
    colon: ": ",
    money: "$",
    orderStatuses: {
      all: "All",
      toPay: "to Pay",
    },
  },
  inputs: {
    content: "Enter what you want to tell us",
    productName: "Enter product name",
    name: "Enter your name",
    gender: "Select your gender",
    phoneNumber: "Enter your phone number",
    password: "Enter your password",
    confirmPassword: "Repeat your password",
    passwordTip: "Enter your password",
    captcha: "Enter captcha",
    confirmPasswordNotEqualPassword: "Different from password",
    passwordFormatError: "Password format error",
    phoneNumberFormatError: "Phone number format error",
    captchaFormatError: "Captcha format error",
  },
  tips: {
    loginSuccess: "Login successfully",
    logoutSuccess: "Logout successfully",
    registerSuccess: "Register successfully",
    modifySuccess: "Modify successfully",
    addSuccess: "Add successfully",
    saveSuccess: "Save successfully",
    bindSuccess: "Bind successfully",
    pleaseConfirm: "Please confirm",
    sendCaptcha: "Send captcha",
    sendCaptchaSuccess: "Send captcha send successfully",
    waitCaptcha: "Wait {seconds}s",
  },
  components: {
    CART_SUBMIT: {
      $: {
        settle: "去结算",
      },
    },
  },
  pages: {
    PAY: {
      inputs: {
        selectAddress: "请选择收获地址",
      },
      RESULT: {
        $: {
          gotoOrders: "查看订单列表",
          backHome: "返回首页",
        },
        tips: {
          paySuccess: "下单成功",
        },
      },
    },
    PRODUCTS: {
      SEARCH: {
        $: {
          history: "历史搜索",
          hot: "热门搜索",
        },
      },
    },
    USER: {
      ACCOUNT_LOGIN: {
        $: {
          captchaLogin: "验证码登录",
          forgotPassword: "忘记密码？",
        },
      },
      ADDRESSES: {
        FORM: {
          $: {
            consignee: "收货人",
            housingEstate: "小区",
            houseNo: "门牌号",
            addressTag: "地址类型",
            addAddress: "新增收货地址",
            modifyAddress: "修改收货地址",
          },
          inputs: {
            consignee: "收货人姓名",
            byWhichPhoneWeContactYou: "配送员联系您的手机号",
            housingEstate: "小区/写字楼等",
            houseNo: "门牌号，如：1 号楼 102",
          },
        },
        LIST: {
          $: {
            setDefault: "设为默认",
          },
        },
      },
      HOME: {
        $: {
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
        $: {
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
