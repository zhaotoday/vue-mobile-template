export const en = {
  $: {
    remark: "Remark",
    stocks: "Stocks",
    sales: "Sales",
    details: "Details",
    name: "Name",
    gender: "Gender",
    phoneNumber: "Phone No",
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
        settle: "Settle",
      },
    },
  },
  pages: {
    PAY: {
      inputs: {
        selectAddress: "Select your address",
      },
      RESULT: {
        $: {
          gotoOrders: "Check orders",
          backHome: "Back to home page",
        },
        tips: {
          paySuccess: "Place an order successfully",
        },
      },
    },
    PRODUCTS: {
      SEARCH: {
        $: {
          history: "History",
          hot: "Hot",
        },
      },
    },
    USER: {
      ACCOUNT_LOGIN: {
        $: {
          captchaLogin: "Login by captcha",
          forgotPassword: "Forgot your password?",
        },
      },
      ADDRESSES: {
        FORM: {
          $: {
            consignee: "Consignee",
            housingEstate: "Housing Estate",
            houseNo: "House No",
            addressTag: "Address Tag",
            addAddress: "New address",
            modifyAddress: "Modify address",
          },
          inputs: {
            consignee: "Name",
            byWhichPhoneWeContactYou: "Your phone number",
            housingEstate: "House estate or office building",
            houseNo: "Your house number",
          },
        },
        LIST: {
          $: {
            setDefault: "Set as default address",
          },
        },
      },
      HOME: {
        $: {
          login: "Login",
          myInformation: "My information",
          modifyPassword: "Modify my password",
          bindPhoneNumber: "Bind phone number",
          bindWx: "Bind Wechat",
        },
        tips: {
          confirmLogout: "Confirm to logout?",
        },
      },
      ORDERS: {
        $: {
          orderNo: "Order No",
          orderTime: "Order Time",
          reachTime: "Reach Time",
          payAtOnce: "Pay at once",
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
