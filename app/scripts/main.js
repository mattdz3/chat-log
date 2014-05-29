
/*
$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(data){
  setData(data);
});

function setData (chatlog) {
  var userTemp = _.template($('.userData').text());
  chatlog.forEach(function(chat) {
    var rendered = userTemp(chat);
    $('.container').append(rendered);
  });
}*/

function ChatObject (user, message, time) {
	this.user = user;
	this.message = message;
	this.time = time;	
}

	var user = new ChatObject('Matt', "Hello");


$('.button').click(function() {
	prompt("What's your name?");
})