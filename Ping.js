'use strict'
 
var tg = require('telegram-node-bot')('YOUR_TOKEN')
 
tg.router.
    when(['ping'], 'PingController')
     
tg.controller('PingController', ($) => {
	tg.for('ping', () => {
		console.log($);
		$.sendMessage('pong')
	})
}) 
