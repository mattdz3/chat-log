'use strict';

var pizzaServer;

var user = "TheHamBurgler";

var chatLog = _.template($('.input-box').text());


function renderChat(data) {
  $('.container').empty();

  for (var i = 0; i < data.length - 1; i += 1) {

      if (data[i].message) {

      var render = chatLog(data[i]);

      $('.container').append(render);
    }
  }
}

function loadChat() {

$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(data) {
	
	pizzaServer = data;

	loadChat(data);
	});
}

function ChatObject (user, message, time) {
	this.user = user || '';
	this.message = message || '';
	this.time = time || '';	
}

function refresh(info) {
  $.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', info)
}

$('.submit').click(function() {

  var message = $('.input-box').val();
  $('.input-box').val('');

  var time = Date.now();

  var outgoing = new ChatObject(user, message, time);

  refresh(outgoing);
})


$('.button').click(function() {
	prompt("What's your name?");
});


setInterval(loadChat, 1000);




