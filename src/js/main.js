import Form from './modules/form.js';
import ChainedForms from './modules/chained-forms.js';
import Avatar from './modules/avatar.js';

window['Form'] = Form;
window['ChainedForms'] = ChainedForms;
window['Avatar'] = Avatar;

$(document).ready(function () {
  /* Browser fullscreen experience on double click */
  if (self == top) {
    $('body').on('dblclick', function (e) {
      if (
        !document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
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
  } else {
  }

  /* float label checking input is not empty */
  $('.float-label .form-control').on('blur', function () {
    if ($(this).val() === null) return;

    if ($(this).val() || $(this).val().length != 0) {
      $(this).closest('.float-label').addClass('active');
    } else {
      $(this).closest('.float-label').removeClass('active');
    }
  });

  /* menu open close wrapper screen click close menu */
  $('.menu-btn').on('click', function (e) {
    e.stopPropagation();
    if ($('body').hasClass('sidemenu-open') == true) {
      $('body, html').removeClass('sidemenu-open');
      setTimeout(function () {
        $('body, html').removeClass('menuactive');
      }, 500);
    } else {
      $('body, html').addClass('sidemenu-open menuactive');
    }
  });
  $('.wrapper').on('click', function () {
    if ($('body').hasClass('sidemenu-open') == true) {
      $('body, html').removeClass('sidemenu-open');
      setTimeout(function () {
        $('body, html').removeClass('menuactive');
      }, 500);
    }
  });

  /* filter click open filter */
  if ($('body').hasClass('filtermenu-open') == true) {
    $('.filter-btn').find('i').html('close');
  }
  $('.filter-btn').on('click', function () {
    if ($('body').hasClass('filtermenu-open') == true) {
      $('body').removeClass('filtermenu-open');
      $(this).find('i').html('filter_list');
    } else {
      $('body').addClass('filtermenu-open');
      $(this).find('i').html('close');
    }
  });

  /* background image to cover */
  $('.background').each(function () {
    var imagewrap = $(this);
    var imagecurrent = $(this).find('img').attr('src');
    imagewrap.css('background-image', 'url("' + imagecurrent + '")');
    $(this).find('img').remove();
  });
});

$(window).on('load', function () {
  $('.loader-screen').fadeOut('slow');

  /* header active on scroll more than 50 px*/
  if ($(this).scrollTop() >= 30) {
    $('.header').addClass('active');
  } else {
    $('.header').removeClass('active');
  }

  $(window).on('scroll', function () {
    /* header active on scroll more than 50 px*/
    if ($(this).scrollTop() >= 30) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  });
});
