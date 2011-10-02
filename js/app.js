function preventBehavior(e) {
  e.preventDefault(); 
};

document.addEventListener("touchmove", preventBehavior, false);
	
function onBodyLoad() {		
	document.addEventListener("deviceready",onDeviceReady,false);
}

function onDeviceReady() {

}

$(document).ready(function() {
  $("#query").submit(function(e){
	$.mobile.changePage("#view");
	go("40.760196","-73.982019", $('#queryInput').val());
    return false;
  });
  $('#view').live( 'pageshow',function(event, ui){
    var query_venue = $('#venue').attr("value");
    $('#query-venue').html(query_venue);
  });
});
