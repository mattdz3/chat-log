'use strict';

var user = $('.input-name').val();

var time = Date.now();

var chatLog = _.template($('.chat').text());

var i;

function ChatObject (user, message, time) {
  this.user = user;
  this.message = message;
  this.time = time; 
}

function loadChat() {
  $.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(data) {

  renderChat(data);
 
  });
}
 
function renderChat(data) {
  $('.container').empty();

    for (i = 0; i < data.length - 1; i += 1) {

      if (data[i].message) {

      var render = chatLog(data[i]);

      $('.container').append(render);
    }
  }
}

$('.button').click(function() {
  $('.display-user-name').empty();
  var user = $('.input-name').val();

  $('.display-user-name').prepend(user);
  $('.input-name').empty();
});

function post(info) {
  $.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', info)
}

$('.submit').click(function() {

  var message = $('.input-box').val();
  $('.input-box').val('');

  var sentMessage = new ChatObject(user, message, time);

  post(sentMessage);
});

loadChat();
setInterval(loadChat, 1000);




