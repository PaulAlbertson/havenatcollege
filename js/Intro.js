(function(window){
	function Intro(){
		//this.winHeight = winHeight;
		//this.winWidth = winWidth;
		//this.r = r;
		//console.log("intro.js has loaded");
		//console.log("window height = "+winHeight);
		//console.log("window width = "+winWidth);
		
		//TweenLite.to(campusImage, 2, {css:{opacity:0}, ease:Sine.easeOut, delay:1.5});
		//TweenLite.to(campusHouse, 2, {css:{width:"258px", top:"107px", left:"359px"}, ease:Sine.easeInOut, delay:2.5});
		TweenLite.to(hmPgLogo, 1, {css:{opacity:1}, ease:Sine.easeOut, delay:1});
		TweenLite.to([hmPageHeaderH1, hmPgIntroHeader,hmPgIntroCopy,hmPageCopy], 1, {css:{opacity:1}, ease:Sine.easeOut, delay:1.2});

		TweenLite.to(hmUscHouse, 1, {css:{opacity:1}, ease:Sine.easeOut, delay:2});
		TweenLite.to(hmDrexelHouse, 1, {css:{opacity:1}, ease:Sine.easeOut, delay:2.2});
		TweenLite.to(hmRedlandsHouse, 1, {css:{opacity:1}, ease:Sine.easeOut, delay:2.4});
		TweenLite.to(hmUCSBHouse, 1, {css:{opacity:1}, ease:Sine.easeOut, delay:2.6});
		TweenLite.to(hmUSFHouse, 1, {css:{opacity:1}, ease:Sine.easeOut, delay:2.8});

		TweenLite.to([studentsBtnDiv,studentsBtnOff], 1, {css:{opacity:1}, ease:Sine.easeOut, delay:3.2});
		TweenLite.to([parentsBtnDiv,parentsBtnOff], 1, {css:{opacity:1}, ease:Sine.easeOut, delay:3.4});
		TweenLite.to([universAdminBtnDiv,universAdminBtnOff], 1, {css:{opacity:1}, ease:Sine.easeOut, delay:3.6});
		TweenLite.to([treatProsBtnDiv,treatProsBtnOff], 1, {css:{opacity:1}, ease:Sine.easeOut, delay:3.8});
		TweenLite.to([communityBtnDiv, communityBtnOff], 1, {css:{opacity:1}, ease:Sine.easeOut, delay:4});
		TweenLite.to([typDayBtnDiv, typDayBtnOff], 1, {css:{opacity:1}, ease:Sine.easeOut, delay:4.2});
		TweenLite.to([contactBtnDiv,contactBtnOff], 1, {css:{opacity:1}, ease:Sine.easeOut, delay:4.4});
		TweenLite.to([shareContainer], 1, {css:{opacity:1}, ease:Sine.easeOut, delay:5});


		//Added back the hmPageFeatureBanner
		
		//communityBtnDiv, studentsBtnDiv, typDayBtnDiv, parentsBtnDiv, treatProsBtnDiv, universAdminBtnDiv, contactBtnDiv, hmPgIntroHeader, hmPgIntroCopy
		
		//TweenLite.to(hmPgLogo, 1, {css:{opacity:1}, ease:Sine.easeOut, delay:5});
	
		$("#communityBtnDiv").hover(function() {
				  TweenLite.to(communityBtnOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
				  TweenLite.to(communityBtnOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
		});
		// $("#communityBtnDiv").click(function() {
		//         window.location.href="the-haven-recovery-grads-community-information.html";
		// 		//comingSoonVisibility();
				 
		// });
		$("#studentsBtnDiv").hover(function() {
				  TweenLite.to(studentsBtnOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
				  TweenLite.to(studentsBtnOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
		});
		// $("#studentsBtnDiv").click(function() {
		// 		window.location.href="the-haven-recovery-grads-student-information.html";
				 
		// });
		$("#typDayBtnDiv").hover(function() {
				  TweenLite.to(typDayBtnOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
				  TweenLite.to(typDayBtnOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
		});
		// $("#typDayBtnDiv").click(function() {
		// 		window.location.href="the-haven-recovery-grads-atypical-day.html";
				 
		// });
		$("#parentsBtnDiv").hover(function() {
				  TweenLite.to(parentsBtnOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
				  TweenLite.to(parentsBtnOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
		});
		// $("#parentsBtnDiv").click(function() {
		// 		window.location.href="the-haven-recovery-grads-parent-information.html";
				 
		// });
		$("#treatProsBtnDiv").hover(function() {
				  TweenLite.to(treatProsBtnOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
				  TweenLite.to(treatProsBtnOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
		});
		// $("#treatProsBtnDiv").click(function() {
		//     window.location.href="the-haven-recovery-grads-treatment-professionals-information.html";
		// 		//comingSoonVisibility();
				 
		// });
		$("#universAdminBtnDiv").hover(function() {
				  TweenLite.to(universAdminBtnOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
				  TweenLite.to(universAdminBtnOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
		});
		// $("#universAdminBtnDiv").click(function() {
		//     window.location.href="the-haven-recovery-grads-administrators-information.html";
		// 	//comingSoonVisibility();
				 
		// });
		$("#contactBtnDiv").hover(function() {
				  TweenLite.to(contactBtnOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
				  TweenLite.to(contactBtnOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
		});
		// $("#contactBtnDiv").click(function() {
		//     window.location.href="the-haven-recovery-grads-contact-us.html";
		// 		//mailContact();
		// 		//comingSoonVisibility();
				 
		// });
		function comingSoonVisibility(){
			TweenLite.to(homepageComingSoonOverlay, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0, overwrite:0});
			TweenLite.to(homepageComingSoonOverlay, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:3, overwrite:0});
		};
		function mailContact(){
			window.location.href="mailto:info@recoverygrads.com";
		}
	}

	
	//window.addEventListener("mouseover",eventHandler);
	window.Intro = Intro;
	
}(window));

