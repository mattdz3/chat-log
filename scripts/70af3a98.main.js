"use strict";function ChatObject(a,b,c){this.user=a,this.message=b,this.time=c}function loadChat(){$.getJSON("http://tiny-pizza-server.herokuapp.com/collections/chat-messages").done(function(a){renderChat(a)})}function renderChat(a){for($(".container").empty(),i=0;i<a.length-1;i+=1)if(a[i].message){var b=chatLog(a[i]);$(".container").append(b)}}function post(a){$.post("http://tiny-pizza-server.herokuapp.com/collections/chat-messages",a)}var user="Time Wizard",time=Date.now()/1e3,chatLog=_.template($(".chat").text()),i;$(".button").click(function(){$(".display-user-name").empty();var a=prompt("What's your name?");$(".display-user-name").prepend(a)}),$(".submit").click(function(){var a=$(".input-box").val();$(".input-box").val("");var b=new ChatObject(user,a,time);post(b)}),loadChat(),setInterval(loadChat,1e3);