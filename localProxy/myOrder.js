module.exports = {
	'/order/getMyOrders':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/order/getMyOrders':'/data/my_order/getMyOrders.json'
        }
    },
    '/return/applyReturnOrder':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/applyReturnOrder':'/data/my_order/applyReturnOrder.json'
        }
    },
    '/return/cancelReturnOrderApply':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/cancelReturnOrderApply':'/data/my_order/cancelReturnOrderApply.json'
        }
    },
    '/return/expressMessagee':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/expressMessagee':'/data/my_order/expressMessagee.json'
        }
    },
    '/return/failMessage':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/failMessage':'/data/my_order/failMessage.json'
        }
    },
    '/return/getExpressMessage':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/getExpressMessage':'/data/my_order/getExpressMessage.json'
        }
    },
    '/return/getReturnOrderSchedule':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/getReturnOrderSchedule':'/data/my_order/getReturnOrderSchedule.json'
        }
    },
    '/return/getSellerAddress':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/getSellerAddress':'/data/my_order/getSellerAddress.json'
        }
    },
    '/return/orderReasons':{
        target:'http://localhost:8181/',
        changeOrigin:true,
        pathRewrite:{
            '^/return/orderReasons':'/data/my_order/orderReasons.json'
        }
    }
}