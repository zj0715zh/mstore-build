module.exports = {
    '/avtm/getIndexBanner':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/avtm/getIndexBanner':'/data/index/getIndexBanner.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/avtm/getIndexCategoryNav':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/avtm/getIndexCategoryNav':'/data/index/getIndexCategoryNav.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/avtm/getMarketingPic':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/avtm/getMarketingPic':'/data/index/getMarketingPic.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/discount/getIndexDiscount':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/discount/getIndexDiscount':'/data/index/getIndexDiscount.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/avtm/getIndexRecommend':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/avtm/getIndexRecommend':'/data/index/getIndexRecommend.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/avtm/getIndexColumn':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/avtm/getIndexColumn':'/data/index/getIndexColumn.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/order/getMyOrders':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/order/getMyOrders':'/data/my_order/getMyOrders.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/userCoupon/getUserCoupons':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/userCoupon/getUserCoupons':'/data/my_card/getUserCoupons.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/order/getDownPayInfo':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/order/getDownPayInfo':'/data/order_confirm/getDownPayInfo.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/user/userCoupons':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/user/userCoupons':'/data/order_confirm/userCoupons.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/address/getAddress':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/address/getAddress':'/data/edite_address/getAddress.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/address/getThreeLayerBaseAddress':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/address/getThreeLayerBaseAddress':'/data/edite_address/getThreeLayerBaseAddress.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/user/getUserTempAmountTips':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/user/getUserTempAmountTips':'/data/index/getUserTempAmountTips.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/userCoupon/getUserCouponTips':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/userCoupon/getUserCouponTips':'/data/index/getUserCouponTips.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/avtm/getIndexTexts':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/avtm/getIndexTexts':'/data/index/getIndexTexts.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/product/getSkuProDeatils':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/product/getSkuProDeatils':'/data/pro_detail/getSkuProDeatils.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/product/getAttribute':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/product/getAttribute':'/data/pro_detail/getAttribute.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/user/getUserPeriods':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/user/getUserPeriods':'/data/pro_detail/getUserPeriods.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/avtm/getCateBanner':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/avtm/getCateBanner':'/data/category/getCateBanner.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/category/getChildCategories':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/category/getChildCategories':'/data/category/getChildCategories.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/product/searchSku':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/product/searchSku':'/data/category/searchSku.json'
        }
    },//跟searchPro返回的数据基本一致，只是为了区分筛选项
    '/product/searchPro':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/product/searchPro':'/data/category/searchPro.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/return/applyReturnOrder':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/applyReturnOrder':'/data/my_order/applyReturnOrder.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/return/cancelReturnOrderApply':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/cancelReturnOrderApply':'/data/my_order/cancelReturnOrderApply.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/return/getSellerAddress':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/getSellerAddress':'/data/my_order/getSellerAddress.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/return/expressMessagee':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/expressMessagee':'/data/my_order/expressMessagee.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/return/failMessage':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/failMessage':'/data/my_order/failMessage.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/return/orderReasons':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/orderReasons':'/data/my_order/orderReasons.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/return/getReturnOrderSchedule':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/getReturnOrderSchedule':'/data/my_order/getReturnOrderSchedule.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/return/getExpressMessage':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/getExpressMessage':'/data/my_order/getExpressMessage.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/product/getBrandAndSeller':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/product/getBrandAndSeller':'/data/category/getBrandAndSeller.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/drawPromotion/myPrizes':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/drawPromotion/myPrizes':'/data/bigWheel/myPrizes.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/drawPromotion/doDraw':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/drawPromotion/doDraw':'/data/bigWheel/doDraw.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/drawPromotion/hitRecords':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/drawPromotion/hitRecords':'/data/bigWheel/hitRecords.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/drawPromotion/nums':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/drawPromotion/nums':'/data/bigWheel/nums.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/user/getUserAmount':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/user/getUserAmount':'/data/user_center/getUserAmount.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
        }
    },
    '/user/isLogin':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/user/isLogin':'/data/bigWheel/isLogin.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex

        }
    },
    '/coupon/info':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/coupon/info':'/data/coupon/info.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex

        }
    },
    '/coupon/userClaimCoupon':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/coupon/userClaimCoupon':'/data/coupon/userClaimCoupon.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex

        }
    },
    '/coupon/schedule':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/coupon/schedule':'/data/coupon/schedule.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex

        }
    },
    '/coupon/aviCouponNum':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/coupon/aviCouponNum':'/data/coupon/aviCouponNum.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex

        }
    },
    '/coupon/userCouponStatus':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/coupon/userCouponStatus':'/data/coupon/userCouponStatus.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex

        }
    },
    '/avtm/getPromotoPic':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        pathRewrite:{
            '^/avtm/getPromotoPic':'/data/index/getPromotoPic.json'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex

        }
    }
}