/* global describe, it */

(function () {
    'use strict';

    describe('Chat constructor', function () {

    	var user = new ChatObject('Matt', 'Hello');

        it('Should bulid the chat object', function () {
        	
        	expect(user).to.be.instanceof(ChatObject);
        	
        });
/*
        it('should contain certain keys', function() {

        	expect(user).to.contain("");
        });
    });*/

    /*describe("loadChat function", function() {
    	it('should load the chat server', function() {
    		expect()
    	})
    })*/


})();
