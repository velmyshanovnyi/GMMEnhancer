// @date 2015.04.04
// ЧОМУСЬ НЕ ХОЧЕ КОРЕКТНО ПРАЦЮВАТИ :(

$(document).ready(function hideClassName(className){
    document.getElementsByClassName('className')[0].style.display = 'none';
/*    
    var СlassNameElements = document.getElementsByClassName(className);
    for (var i = 0, ClassNameLength = ClassNameElements.length; i < ClassNameLength; i++) {
       if (СlassNameElements[i].textContent !== '') {
           СlassNameElements[i].style.display =  'none';
           console.log("СlassNameElements[i].style.display =  'none';");
           document.getElementsByClassName('dups')[0].style.display = 'none';
           console.log("document.getElementsByClassName('dups')[0].style.display = 'none';");
       }
    }
*/
});
//hideСlassName('dups');  

console.log('--------------DELETE-Class-dups------------');









/*
var dups = false;
setInterval(function() {
	if ($('div[class="dups"]').is(':visible')) {
		dups = true;
	}
	if ($('div.gw-dups-summary').is(':visible') && dups === true) {
		$('#dbutton').click();
		dups = false;
	}
}, 300);

*/