'use strict';


var user = "TheHamBurgler";

var time = Date.now();

var chatLog = _.template($('.chat').text());

function loadChat() {
$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(data) {

  renderChat(data);
  });
}

function renderChat(data) {
  $('.container').empty();
    var i
  for (i = 0; i < data.length - 1; i += 1) {

      if (data[i].message) {

      var render = chatLog(data[i]);

      $('.container').prepend(render);
    }
  }
}

function ChatObject (user, message, time) {
	this.user = user;
	this.message = message;
	this.time = time;	
}

function refresh(info) {
  $.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', info)
}

$('.submit').click(function() {

  var message = $('.input-box').val();
  $('.input-box').val('');

  var sentMessage = new ChatObject(user, message, time);

  refresh(sentMessage);
})


$('.button').click(function() {
	prompt("What's your name?");
});

loadChat();
setInterval(loadChat, 1000);




