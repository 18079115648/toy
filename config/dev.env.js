'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WEBSOCKET_URL: '"http://121.41.101.63:8000/netty/socket-wawaji"',
  WEIXIN: {
	    APP_ID: '"wxa44aee61d206be4a"',
	    APP_SECRET: '"82247ce969bf0b7f3e12a636fe87434f"',
	    REDIRECT_URI: '"http://192.168.0.61:8080/#/oauth"'
	}
})
