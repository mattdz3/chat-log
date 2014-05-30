/* global describe, it */

(function () {
    'use strict';

    describe('Chat constructor', function () {

    	var user = new ChatObject('Matt', 'Hello');

        it('Should bulid the chat object', function () {
        	
        	expect(user).to.be.instanceof(ChatObject);
        	
        });

        it('should contain certain keys', function() {

        	expect(user).to.contain("Matt", "Hello");
        });
    });

    describe("Button press", function() {

    	it('should display a prompt for you to sign in', function() {

    		expect($('.button').click).to.equal(function() {
    			prompt("What's your name?"); })
    	})
    })

})();
