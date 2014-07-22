/* global describe, it */

(function () {
    'use strict';

    describe('Chat constructor', function () {

    	// var user = new ChatObject('Matt');

        it('Should bulid the chat object', function () {
        	
        	expect(user).to.be.instanceof(ChatObject);	
        });
    });

    describe("loadChat function", function() {

    	it('should load the data from tiny server', function() {

    		expect()
    	});
    });

    describe('renderChat function', function() {
    	it("should render the chat log to the page", function() {

    		expect()
    	});
    });

    describe('post function', function() {
    	it('should post a new obj to the server', function() {

    		expect()
    	});
    });

/*    describe('newName function', function() {
    	it('should set the name given to the prompt as user', function() {

    		function newName () {
			  $('.button').click(function() {
			    $('.display-user-name').empty();
			  	var myNewName = prompt("What's your name?");
			    $('.display-user-name').prepend(myNewName);   
			  });
			}

    		expect(user).to.equal(myNewName);
    	});
    });*/

})();
