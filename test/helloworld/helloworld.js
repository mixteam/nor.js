/**
* @fileOverview This is a HelloWorld!
* @author zhuxun
* @version 0.5
* @requires debug@0.5
*/

var Debug = require('debug'),
	debug = new Debug();
/**
* HelloWorld
* @constructor
*/
function HelloWorld() {
    /** @type {string} */
    this.word = 'helloworld';
    debug.log('create helloworld');
}

/**
 * say the word
 * @param {string=} word
 * @this {HelloWorld}
 */
HelloWorld.prototype.say = function(word) {
    return word || this.word;
}

module.exports = HelloWorld;