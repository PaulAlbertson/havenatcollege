(function(window){
	function Students(){

		//TweenLite.to(campusImage, 3, {css:{opacity:0}, ease:Sine.easeOut, delay:1.5});
		//TweenLite.to(campusHouse, 2, {css:{width:"258px", top:"107px", left:"359px"}, ease:Sine.easeInOut, delay:1.8});
		//TweenLite.to(hmPgLogo, 1, {css:{opacity:1}, ease:Sine.easeOut, delay:4});

		
	
		$("#communityBtnDiv").hover(function() {
				  TweenLite.to(communityBtnOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
				  TweenLite.to(communityBtnOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
		});
		$("#communityBtnDiv").click(function() {
				comingSoonVisibility();
				 
		});
		function mailContact(){
			window.location.href="mailto:info@recoverygrads.com";
		}
	}

	
	window.Students = Students;
	
}(window));