'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WEBSOCKET_URL: '"http://42.157.192.96:8000/netty/socket-wawaji"',
  WEIXIN: {
	    APP_ID: '"wx74953a61b831d625"',
	    REDIRECT_URI: '"http://h5.toy.ydd100.cn/"'
	}
})
