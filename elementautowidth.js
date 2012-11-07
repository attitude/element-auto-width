/* ===================================================================
 * jQuery elementAutowidthPlugin v0.1
 * -------------------------------------------------------------------
 * Copyright 2012 Attitude.sk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributing author: Martin Adamko (@martin_adamko)
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * permissions and limitations under the License.
 *
 * ================================================================== */

;(function( $ ) {
	$.fn.elementAutoWidth = function() {
		return this.each(function() {
			// Shorthand
			var $this = $(this);
			
			// Remove previously set width.
			$this.width('');
			
			// Get dimensions of element.
			var height = $this.height();
			var width  = $this.width();
			
			$this
				.wrapInner('<div />')			// Wrap the inner content.
				.css({'overflow': 'hidden'});		// Set overflow to $this element.
			
			// Get the actual height of the inner content.
			var actualHeight = $this.children().eq(0).height();
			
			// Start with modul set to 100.
			var modul = 100;
			
			// Iteration
			var i = 1;
			
			// Loop until inner content fits height
			while(actualHeight > height && i < 100) {
				// 100 Tries should be more than necessary even when script fails.
				
				// Remember the actual width of inner content.
				var actualWidth = $this.width();
				
				// Increase the width and set it.
				$this.width(actualWidth + modul);
				
				// If inner content is way smaller than its container,
				// but when modul is set to one leave it smaller
				// (that would eventually stop the outer while loop).
				if( $this.children().eq(0).height() <= height && modul != 1 ) {
					// UNDO:
					$this.width(actualWidth);
					
					// Next time try it slower
					modul = modul / 10;
				}
				
				// Change the actual height for check in the while condition.
				actualHeight = $this.children().eq(0).height();
				
				// Increase iteration
				i++;
			}
			// Remove the inner wrapper
			$this.html( $this.children().eq(0).html() );
		});
	}
	
	// Find and cache every element with data attribute set:
	var $autoWidthElements = $('[data-element-auto-width]');
	
	// Function that inits the plugin upon cached elements.
	$.fn.elementAutoWidth.run = function() {
		$autoWidthElements.each(function () {
			$(this).elementAutoWidth();
		});
	}
	
	// You should take care of every other circumstance to redraw, e.g. after unhiding object or
	// changing elements height.
	
	// Fire plugin upon these circumstances for you:
	$(window).on('resize load orientationchange', function() {
		$.fn.elementAutoWidth.run();
	});
	
})( jQuery );
