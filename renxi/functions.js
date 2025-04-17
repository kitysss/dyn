/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 120);
		});
		return this;
	};
})(jQuery);

function timeElapse(originalDate) {
    var current = new Date();
    
    // 计算原始天数差
    var secondsTotal = (Date.parse(current) - Date.parse(originalDate)) / 1000;
    var originalDays = Math.floor(secondsTotal / (3600 * 24));
    
    // 如果原始天数小于 29，调整初始日期，使得天数从 29 开始
    if (originalDays < 29) {
        var adjustedDate = new Date(originalDate);
        adjustedDate.setDate(adjustedDate.getDate() - (29 - originalDays));
        secondsTotal = (Date.parse(current) - Date.parse(adjustedDate)) / 1000;
    }
    
    // 计算天数、小时、分钟、秒
    var days = Math.floor(secondsTotal / (3600 * 24));
    secondsTotal = secondsTotal % (3600 * 24);
    
    var hours = Math.floor(secondsTotal / 3600);
    if (hours < 10) hours = "0" + hours;
    
    secondsTotal = secondsTotal % 3600;
    var minutes = Math.floor(secondsTotal / 60);
    if (minutes < 10) minutes = "0" + minutes;
    
    var seconds = Math.floor(secondsTotal % 60);
    if (seconds < 10) seconds = "0" + seconds;
    
    var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒";
    $("#clock").html(result);
}
