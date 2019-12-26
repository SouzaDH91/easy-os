/*************** TO DO **********************/
'use strict';
$(document).on('click', '.todo-check label', function() {
	$(this).parents('li').children('.todo-title').toggleClass('line-through');
});
$(document).on('click', '.todo-remove', function() {
	$(this).closest("li").remove();
	return false;
});

$(document).on('click', '.panel .tools .fa-times', function() {
	$(this).parents(".panel").parent().remove();
});