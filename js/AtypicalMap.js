var currentAtypicalSelection;

$("#atypicalDayRowOneContent > div").css('cursor', 'pointer').hover(function(event) {
    //currentSelection = event.target.id;
    switch(event.target.id)
    {
        case "atypicalDayCampusPoliceDiv":
            //console.log("atypicalDayCampusPoliceDiv");
            currentAtypicalSelection = atypicalDayCampusPoliceBubble;
            TweenLite.to(atypicalDayCampusPoliceBubble, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
        break;
        case "atypicalDayLibraryDiv":
            currentAtypicalSelection = atypicalDayLibraryBubble;
            TweenLite.to(atypicalDayLibraryBubble, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
        break;
        case "atypicalDayHealthCenterDiv":
            currentAtypicalSelection = atypicalDayHealthCenterBubble;
            TweenLite.to(atypicalDayHealthCenterBubble, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
        break;
        case "atypicalDayFratRowDiv":
            currentAtypicalSelection = atypicalDayFratRowBubble;
            TweenLite.to(atypicalDayFratRowBubble, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
        break;
        case "atypicalDayCoffeeHouseDiv":
            currentAtypicalSelection = atypicalDayCoffeeHouseBubble;
            TweenLite.to(atypicalDayCoffeeHouseBubble, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
        break;
        case "atypicalDayGymDiv":
            currentAtypicalSelection = atypicalDayGymBubble;
            TweenLite.to(atypicalDayGymBubble, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
        break;
        case "atypicalDayStadiumDiv":
            currentAtypicalSelection = atypicalDayStadiumBubble;
            TweenLite.to(atypicalDayStadiumBubble, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
        break;
        case "atypicalDayMCCDiv":
            currentAtypicalSelection = atypicalDayMCCBubble;
            TweenLite.to(atypicalDayMCCBubble, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
        break;
        case "atypicalDayCounselingDiv":
            currentAtypicalSelection = atypicalDayCounselingBubble;
            TweenLite.to(atypicalDayCounselingBubble, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
        break;
        case "atypicalDayYogaDiv":
            currentAtypicalSelection = atypicalDayYogaBubble;
            TweenLite.to(atypicalDayYogaBubble, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
        break;
        case "atypicalDayHavenDiv":
            currentAtypicalSelection = atypicalDayHavenBubble;
            TweenLite.to(atypicalDayHavenBubble, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
        break;
        case "atypicalDayPubDiv":
            currentAtypicalSelection = atypicalDayPubBubble;
            TweenLite.to(atypicalDayPubBubble, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
        break;
        case "atypicalDayConductDiv":
            currentAtypicalSelection = atypicalDayConductBubble;
            TweenLite.to(atypicalDayConductBubble, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
        break;
        case "atypicalDayHavenDiv":
            currentAtypicalSelection = atypicalDayHavenBubble;
            TweenLite.to(atypicalDayHavenBubble, .5, {css:{opacity:1}, ease:Sine.easeOut, delay:0});
        break;
        
        default:
    }
},function(){
    console.log("out");
    TweenLite.to(currentAtypicalSelection, .5, {css:{opacity:0}, ease:Sine.easeOut, delay:0, overwrite:0});
});


