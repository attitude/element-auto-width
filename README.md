Element Auto Width
==================

This is a jQuery plugin that automatically expands element horizontally and fits its content according
to set height of the element. Minified version is less than 1kB.

Usage
-----

### 1# Method using data API

You can use only the markup API without writing a single line of JavaScript. Just add
`data-element-auto-width` data attribute to each element you need to auto expand like this:

``` html
<div id="auto-width-expanding-element" data-element-auto-width="1">
	Some really really really really really really really really really really really really really
	really really really really really really really really really really really really really
	really really long content comes here...
</div>
```

And in your CSS file set element height:

``` css
#auto-width-expanding-element {
	height: 30px;
}
```

### 2# Method using javaScript

Apply plugin to any jQuery object. Remember to redraw element on events like rotationchange, resize etc.
Seet the plugin file.

``` js
$(document).ready(function() {
	$('#auto-width-expanding-element').elementAutoWidth();
});
```

Enjoy!

You can find me on twitter as [@martin_adamko](http://twitter.com/martin_adamko).