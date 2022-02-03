'use strict'
 
var tg = require('telegram-node-bot')('5212968969:AAEpEQG9HmloOThDW9VtEo8EmsNqZK6XrHg')
 
tg.router.
    when(['ping'], 'PingController')
     
tg.controller('PingController', ($) => {
	tg.for('ping', () => {
		console.log($);
		$.sendMessage('pong')
	})
}) 
