module.exports = {
    '/user/getUserTempAmountTips':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/user/getUserTempAmountTips':'/data/index/getUserTempAmountTips.json'
        }
    },
    '/userCoupon/getUserCouponTips':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/userCoupon/getUserCouponTips':'/data/index/getUserCouponTips.json'
        }
    },
    '/product/searchPro':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/product/searchPro':'/data/category/searchPro.json'
        }
    },
    '/user/getUserAmount':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/user/getUserAmount':'/data/user_center/getUserAmount.json'
        }
    },
    '/user/isLogin':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/user/isLogin':'/data/bigWheel/isLogin.json'

        }
    },
    '/order/getDownPayInfo':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/order/getDownPayInfo':'/data/order_confirm/getDownPayInfo.json'
        }
    },
    '/user/getUserMobile':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/user/getUserMobile':'/data/edite_address/getUserMobile.json'
        }
    },
    '/sms/sentVerifyCode':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/sms/sentVerifyCode':'/data/edite_address/sentVerifyCode.json'
        }
    }
}