function wresize() {
	var theight = $(window).height() - 130;
	var dheight = $(window).height() - 79;
	$('#code_src').css('min-height', theight + 'px');
	$('#code_dest').css('min-height', theight + 'px');
	$('.areadivider').css('min-height', dheight + 'px');
}

function rightopen(vv) {
	if ($(window).width() == $("main").width() ) {
		return false;
	} else if (vv) {
		// Open dest
		$("main").css("margin-left", "0");
		$("main").animate({"margin-left": "-100%"}, 250, "swing", function(){
			$("#code_dest").focus();
		});
	} else {
		// Open src
		$("main").css("margin-left", "-100%");
		$("main").animate({"margin-left": "0"}, 250, "swing", function(){
			$("#code_src").focus();
		});
	}
	return true;
}

$(document).ready(function() {
	var codestr = "";

	$(window).resize(function() { wresize(); });
	wresize();

	// To right and left button
	$("#btn_to_right").click(function(){
		rightopen(true);
	});
	$("#btn_to_left").click(function(){
		rightopen(false);
	});
	
	// Clear
	$("#btn_clear").click(function(){
		$("#code_src").val("");
		$("#code_dest").val("");
	});

	// Convert
	$("#btn_conv").click(function(){
		codestr = $("#code_src").val();
		if ($("#conv_target").val() == "tag_to_ent") {
			codestr = codestr.replace(/&lt;/g, '&amp;lt;');
			codestr = codestr.replace(/&gt;/g, '&amp;gt;');
			codestr = codestr.replace(/</g, '&lt;');
			codestr = codestr.replace(/>/g, '&gt;');
		} else if ($("#conv_target").val() == "ent_to_tag") {
			codestr = codestr.replace(/&lt;/g, '<');
			codestr = codestr.replace(/&gt;/g, '>');
			codestr = codestr.replace(/&amp;lt;/g, '&lt;');
			codestr = codestr.replace(/&amp;gt;/g, '&gt;');
		}
		$("#code_dest").val(codestr);
		rightopen(true);
	});

	// Copy
	$("#btn_copy").click(function(){
		$("#code_dest").select();
		try {
			var successful = document.execCommand('copy');
			if (successful) {
				// Animation
				$("#h2_dest").removeClass("clips").animate({'nothing':null}, 1, function () {
					$(this).addClass("clips");
				});
			}
		} catch (err) {
			// Failed
		}
	});
});