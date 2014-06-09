
# flip

  Flip cards. Supports more than 2 cards

## Installation

  Install with [component(1)](http://component.io):

    $ component install matthewmueller/flip

## Example

```js
var buy = domify('<div class="card buy">Buy</div>')
var sell = domify('<div class="card sell">Sell</div>')
var hold = domify('<div class="card hold">Hold</div>')

var flip = Flip()
  .card(buy)
  .card(sell)
  .card(hold)

cards.appendChild(flip.el)

var i = 1;
cards.addEventListener('click', function() {
  flip.flip(i++);
  i = 2 < i ? 0 : i;
});
```

## API

### Flip()

Initialize `Flip`.

### flip#card(el)

Add an card to the flip. The first card will be the front, the second card will be the back.

### flip#flip(n|selector)

Flip to the `n`th card or flip to the first card that matches the `selector`.

```js
flip.flip(1);
flip.flip('.buy');
```

## TODO

- Add `flip#effect(str)` for different transitions

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
