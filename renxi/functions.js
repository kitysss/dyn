/*
 * http://love.hackerzhou.me
 */

// variables
// var $win = $(window);
// var clientWidth = $win.width();
// var clientHeight = $win.height();

// $(window).resize(function() {
//     var newWidth = $win.width();
//     var newHeight = $win.height();
//     if (newWidth != clientWidth && newHeight != clientHeight) {
//         location.replace(location);
//     }
// });

// (function($) {
// 	$.fn.typewriter = function() {
// 		this.each(function() {
// 			var $ele = $(this), str = $ele.html(), progress = 0;
// 			$ele.html('');
// 			var timer = setInterval(function() {
// 				var current = str.substr(progress, 1);
// 				if (current == '<') {
// 					progress = str.indexOf('>', progress) + 1;
// 				} else {
// 					progress++;
// 				}
// 				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
// 				if (progress >= str.length) {
// 					clearInterval(timer);
// 				}
// 			}, 120);
// 		});
// 		return this;
// 	};
// })(jQuery);

   function timeElapse() {
            var startDate = new Date("2025-03-18T00:00:00");
            var current = new Date();
            var seconds = (current - startDate) / 1000;

            var days = Math.floor(seconds / (3600 * 24));
            seconds %= 3600 * 24;

            var hours = Math.floor(seconds / 3600);
            hours = hours < 10 ? "0" + hours : hours;

            seconds %= 3600;
            var minutes = Math.floor(seconds / 60);
            minutes = minutes < 10 ? "0" + minutes : minutes;

            seconds = Math.floor(seconds % 60);
            seconds = seconds < 10 ? "0" + seconds : seconds;

            var result = `第 <span class="digit">${days}</span> 天 <span class="digit">${hours}</span> 小时 <span class="digit">${minutes}</span> 分钟 <span class="digit">${seconds}</span> 秒`;
            $("#clock").html(result);
        }

        $(function () {
            timeElapse();
            setInterval(timeElapse, 1000);
        });

