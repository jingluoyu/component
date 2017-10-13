// 鼠标滑过，菜单下拉
$('li.dropdown').mouseover(function() {   
	$(this).addClass('open');
}).mouseout(function() {
	$(this).removeClass('open');    
}); 