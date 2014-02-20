(function(window){
	function SideNav(){
		
		var navigationArray = [studentsSideButtonOver,parentsSideButtonOver,universAdminSideButtonOver,
								treatmentProsSideButtonOver,contactSideButtonOver,communitySideButtonOver,
								atypicalSideButtonOver];
		
		var selectedNavItem = 'something';
		
		
		this.setVarible = function(v){
			this.selectedNavItem = v;
			selectedNavItem = this.selectedNavItem;
			//console.log(selectedNavItem);
			TweenLite.to(navigationArray[selectedNavItem], .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
		};

		//console.log(this.selectedNavItem);
		
		$("#studentsSideBtnDiv").hover(function() {
				  TweenLite.to(studentsSideButtonOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
				  	if (selectedNavItem != 0){
				  		 TweenLite.to(studentsSideButtonOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});	
				  	}
		});
		$("#parentsSideBtnDiv").hover(function() {
				  TweenLite.to(parentsSideButtonOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
				  	if (selectedNavItem != 1){
					  TweenLite.to(parentsSideButtonOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
					 }
		});
		$("#universAdminSideBtnDiv").hover(function() {
				  TweenLite.to(universAdminSideButtonOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
				  	if (selectedNavItem != 2){
					  TweenLite.to(universAdminSideButtonOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
					}
		});
		$("#treatmentProsSideBtnDiv").hover(function() {
				  TweenLite.to(treatmentProsSideButtonOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
				  	if (selectedNavItem != 3){
					  TweenLite.to(treatmentProsSideButtonOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
					 }
		});
		$("#contactSideBtnDiv").hover(function() {
				  TweenLite.to(contactSideButtonOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
			  		if (selectedNavItem != 4){
				  		TweenLite.to(contactSideButtonOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
				  	}
		});
		$("#communitySideBtnDiv").hover(function() {
				  TweenLite.to(communitySideButtonOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
			  		if (selectedNavItem != 5){
				  		TweenLite.to(communitySideButtonOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
				  	}
		});
		$("#atypicalSideBtnDiv").hover(function() {
				  TweenLite.to(atypicalSideButtonOver, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
			  }, function() {
			  		if (selectedNavItem != 6){
				  		TweenLite.to(atypicalSideButtonOver, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0});
				  	}
		});
		$("#sideNavigationLogoContainer").click(function() {
				window.location.href="index.html";
				 
		});
		// function mailContact(){
			// window.location.href="mailto:info@recoverygrads.com";
		// };
		$("#sideNavigation").click(function(event) {
			switch(event.target.id)
			{
				case "sideNavigationLogoContainer":
					//console.log("click : studentsSideButtonOff");
					window.location.href="index.html";
				break;
				case "studentsSideButtonOff":
					//console.log("click : studentsSideButtonOff");
					window.location.href="the-haven-recovery-grads-student-information.html";
				break;
				case "parentsSideButtonOff":
					//console.log("click : parentsSideButtonOff");
					window.location.href="the-haven-recovery-grads-parent-information.html";
				break;
				case "universAdminSideButtonOff":
				    window.location.href="the-haven-recovery-grads-administrators-information.html";
					//console.log("click : universAdminSideButtonOff");
				break;
				case "treatmentProsSideButtonOff":
				    window.location.href="the-haven-recovery-grads-treatment-professionals-information.html";
					//console.log("click : treatmentProsSideButtonOff");
				break;
				case "contactSideButtonOff":
					window.location.href="the-haven-recovery-grads-contact-us.html";
					//console.log("click : contactSideButtonOff");
				break;
				case "communitySideButtonOff":
				window.location.href="the-haven-recovery-grads-community-information.html";
					//console.log("click : communitySideButtonOff");
				break;
				case "atypicalSideButtonOff":
					//console.log("click : atypicalSideButtonOff");
					window.location.href="the-haven-recovery-grads-atypical-day.html";
				break;
				
				
				default:
			}

			//console.log(event.target.id);
		});
	}

	
	window.SideNav = SideNav;
	
}(window));