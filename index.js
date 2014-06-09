/**
 * Flip template
 */

var domify = require('domify');
var classes = require('classes');
var el = require('./template.js');
var matches = require('matches-selector');

/**
 * Export `Flip`
 */

module.exports = Flip;

/**
 * Initialize `Flip`
 */

function Flip() {
  if (!(this instanceof Flip)) return new Flip();
  this.el = domify(el);
  this.front = this.el.querySelector('.front');
  this.back = this.el.querySelector('.back');
  this.classes = classes(this.el.querySelector('.flip-card'));
  this.cards = [];
}

/**
 * Face
 *
 * @param {Element} el
 * @return {Flip}
 * @api public
 */

Flip.prototype.face = function(el) {
  var len = this.cards.length;
  if (!len) this.front.appendChild(el);
  else if (1 == len) this.back.appendChild(el);
  this.cards.push(el);
  return this;
};

/**
 * Flip
 *
 * @param {Number|String} cls
 */

Flip.prototype.flip = function(cls) {
  var cards = this.cards;
  var card;

  if ('string' == typeof cls) {
    for (var i = 0, card; card = cards[i]; i++) {
      if (matches(card)) break;
    }
  } else {
    card = cards[cls];
  }
  // console.log(cards, );

  if (!card) return this;

  // update the back card
  this.back.textContent = '';
  this.back.appendChild(card);

  // flip
  this.classes.toggle('flipped');

  // change the state
  var front = this.front;
  this.front = this.back;
  this.back = front;

  return this;
};
