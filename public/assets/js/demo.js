'use strict';
$(function () {
    skinChanger();
    logoHeaderChanger();
    activateNotificationAndTasksScroll();

    setSkinListHeightAndScroll(true);
    setSettingListHeightAndScroll(true);
    $(window).resize(function () {
        setSkinListHeightAndScroll(false);
        setSettingListHeightAndScroll(false);
    });
    callFullScreen();
});

//Skin changer
function skinChanger() {
    $('.right-sidebar .demo-choose-skin li').on('click', function () {
        var $body = $('body');
        var $this = $(this);

        var existTheme = $('.right-sidebar .demo-choose-skin li.actived').data('theme');
        $('.right-sidebar .demo-choose-skin li').removeClass('actived');
        $body.removeClass('theme-' + existTheme);
        $this.addClass('actived');

        $body.addClass('theme-' + $this.data('theme'));
        var choose_skin = 'theme-' + $this.data('theme');
        localStorage.setItem("choose_skin", choose_skin);
        localStorage.setItem("choose_skin_active", $this.data('theme'));
    });
}

//Logo Header changer
function logoHeaderChanger() {
    $('.right-sidebar .demo-choose-logoheader li').on('click', function () {
        var $body = $('body');
        var $this = $(this);

        var existTheme = $('.right-sidebar .demo-choose-logoheader li.actived').data('theme');
        $('.right-sidebar .demo-choose-logoheader li').removeClass('actived');
        $body.removeClass('logo-' + existTheme);
        $this.addClass('actived');

        $body.addClass('logo-' + $this.data('theme'));
        var choose_logoheader = 'logo-' + $this.data('theme');
        localStorage.setItem("choose_logoheader", choose_logoheader);
        localStorage.setItem("choose_logoheader_active", $this.data('theme'));
    });
}

//Full screen window
function callFullScreen() {
    $(document).on('click','.fullscreen-btn',function(e) {
        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          }
        }

    });
}

function setSkinListHeightAndScroll(isFirstTime) {
    var height = $(window).height() - ($('.navbar').innerHeight() + $('.right-sidebar .nav-tabs').outerHeight());
    var $el = $('.right-sidebar .demo-skin');
    
    if (!isFirstTime){
      $el.slimScroll({ destroy: true }).height('auto');
      $el.parent().find('.slimScrollBar, .slimScrollRail').remove();
    }

    $el.slimscroll({
        height: height + 'px',
        color: 'rgba(0,0,0,0.5)',
        size: '6px',
        alwaysVisible: false,
        borderRadius: '0',
        railBorderRadius: '0'
    });
}

//Setting tab content set height and show scroll
function setSettingListHeightAndScroll(isFirstTime) {
    var height = $(window).height() - ($('.navbar').innerHeight() + $('.right-sidebar .nav-tabs').outerHeight());
    var $el = $('.right-sidebar .demo-settings');

    if (!isFirstTime){
      $el.slimScroll({ destroy: true }).height('auto');
      $el.parent().find('.slimScrollBar, .slimScrollRail').remove();
    }

    $el.slimscroll({
        height: height + 'px',
        color: 'rgba(0,0,0,0.5)',
        size: '6px',
        alwaysVisible: false,
        borderRadius: '0',
        railBorderRadius: '0'
    });
}

//Activate notification and task dropdown on top right menu
function activateNotificationAndTasksScroll() {
    $('.navbar-right .dropdown-menu .body .menu').slimscroll({
        height: '254px',
        color: 'rgba(0,0,0,0.5)',
        size: '4px',
        alwaysVisible: false,
        borderRadius: '0',
        railBorderRadius: '0'
    });
}
//Dark Light Sidebar ======================================================================================
$(".rightSetting .btn-sidebar-light").on("click", function() {
    $("body").removeClass("menu_dark");
    var menu_option = "";
    localStorage.setItem("menu_option", menu_option);
}), $(".rightSetting .btn-sidebar-dark").on("click", function() {
    $("body").addClass("menu_dark");
    var menu_option = "menu_dark";
    localStorage.setItem("menu_option", menu_option);
});
// set dark sidebar menu on startup
if(localStorage.getItem("menu_option")){
	jQuery("body").addClass(localStorage.getItem("menu_option"));
}else{
	jQuery("body").addClass("menu_dark");
}
// set header color on startup
if(localStorage.getItem("choose_skin")){
	jQuery("body").addClass(localStorage.getItem("choose_skin"));
}else{
	jQuery("body").addClass("theme-white");
	
}
if(localStorage.getItem("choose_skin_active")){
	$( ".right-sidebar .demo-choose-skin li" ).each(function( index ) {
		jQuery(this).removeClass("actived");
		if(jQuery(this).attr('data-theme') == localStorage.getItem("choose_skin_active")){
			jQuery(this).addClass("actived");
		}
	});
}

if(localStorage.getItem("choose_logoheader")){
	jQuery("body").addClass(localStorage.getItem("choose_logoheader"));
}else{
	jQuery("body").addClass("logo-light-blue");
}
if(localStorage.getItem("choose_logoheader_active")){
	$( ".right-sidebar .demo-choose-logoheader li" ).each(function( index ) {
		jQuery(this).removeClass("actived");
		if(jQuery(this).attr('data-theme') == localStorage.getItem("choose_logoheader_active")){
			jQuery(this).addClass("actived");
		}
	});
}
