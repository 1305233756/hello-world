var captureMouse = function (element) {
	var mouse = {x:0, y:0, event: null};

	element.addEventListener('mousemove', function(event){
		var x;
		var y;
		//if(event.pageX || event.pageY){
			X = event.pageX;
			y = event.pageY;
		//}else {
		//	x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		//	y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
 		//}
 		//x -= element.offsetLeft;
 		//y -= element.offsetTop;

 		mouse.x = x;
 		mouse.y = y;
 		mouse.event = event;
	},false);

	return mouse;
};//鼠标位置
captureMouse = function (element) {
  var mouse = {x: 0, y: 0, event: null},
      body_scrollLeft = document.body.scrollLeft,
      element_scrollLeft = document.documentElement.scrollLeft,
      body_scrollTop = document.body.scrollTop,
      element_scrollTop = document.documentElement.scrollTop,
      offsetLeft = element.offsetLeft;
      offsetTop = element.offsetTop;
  
  element.addEventListener('mousemove', function (event) {
    var x, y;
    
    if (event.pageX || event.pageY) {
      x = event.pageX;
      y = event.pageY;
  }
    else {
      x = event.clientX + body_scrollLeft + element_scrollLeft;
      y = event.clientY + body_scrollTop + element_scrollTop;
    }
    x -= offsetLeft;
    y -= offsetTop;
    
    mouse.x = x;
    mouse.y = y;
    mouse.event = event;
  }, false);
  
  return mouse;
};









captureTouch = function (element) {
	var touch = {x: null, y: null, isPress: false};

	element.addEventListener('touchstart', function (event) {
		touch.isPress = true;
	},false);

	element.addEventListener('touchend', function (event) {
		touch.isPress = false;
		touch.x = null;
		touch.y = null;
	},false);

	element.addEventListener('touchmove', function (event){
		var x,y,
			touch_event = event.touches[0]; //first touch

		if (touch_event.pageX || touch_event.pageY) {
			x = touch_event.pageX;
			y = touch_event.pageY;
		}else{
			x = touch_event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = touch_event.clientY + document.body.scrollTop + document.Element.scrollTop;
		}
		x -= element.offsetLeft;
		y -= element.offsetTop;

		touch.x = x;
		touch.y = y;
	},false);

	return touch;
};//触摸位置







parseColor = function (color, toNumber) {
  if (toNumber === true) {
    if (typeof color === 'number') {
      return (color | 0); //chop off decimal
    }
    if (typeof color === 'string' && color[0] === '#') {
      color = color.slice(1);
    }
    return window.parseInt(color, 16);
  } else {
    if (typeof color === 'number') {
      color = '#' + ('00000' + (color | 0).toString(16)).substr(-6); //pad
    }
    return color;
  }
};



containsPoint = function (rect, x, y) {
  return !(x < rect.x ||
           x > rect.x + rect.width ||
           y < rect.y ||
           y > rect.y + rect.height);
};

/**
 * Determine if two rectangles overlap.
 * @param {object}  rectA Object with properties: x, y, width, height.
 * @param {object}  rectB Object with properties: x, y, width, height.
 * @return {boolean}
 */
intersects = function (rectA, rectB) {
  return !(rectA.x + rectA.width < rectB.x ||
           rectB.x + rectB.width < rectA.x ||
           rectA.y + rectA.height < rectB.y ||
           rectB.y + rectB.height < rectA.y);
};
