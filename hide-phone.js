function hideMyPhone (selector) {
		var self = $(selector);
	    var fullData = self.has('a').length > 0 ? self.find('a').text() : self.text();
	    self.attr('data-full-phone',fullData);
	    var dataToShow = self.hasClass('ad_saver_phone') ? fullData.substr(0, 7) : fullData.substr(0, 9);
	    var dataToShowExtended = dataToShow + '<span class="js-show-text" style="cursor:pointer;">&nbsp;показать</span>';
	    self.html(dataToShowExtended);
}

$(document).ready(function() {
	var mySelector = '#telefon span';
	$(mySelector).each(function() {
		hideMyPhone(mySelector);
	})
	

    $('.js-show-text').click(function () {
    	dataLayer.push({'event': 'show_phone_number'});
		var parent = $(this).parent().closest('span');
		var data = parent.attr('data-full-phone');
		if (data) {
			var target = parent.has('a').length > 0 ? parent.children('a') : parent;
			target.html(data);
		}
	});
});




	$(".ad_saver_phone").bind("DOMSubtreeModified",function(){
	  	hideMyPhone(".ad_saver_phone");
	});
