/*----- Password Display -----*/
let eyeBtn = Array.from(document.querySelectorAll('.passDisplay'));
if (eyeBtn) {
  eyeBtn.forEach(e => {
    e.addEventListener('click', function () {
      let passwordWrapper = e.closest('.passwordWrapper');
      let passInput = passwordWrapper.querySelector('.passInput');
      let eyeIcon = passwordWrapper.querySelector('.passDisplay i');
      if (passInput.type == 'password') {
        passInput.setAttribute('type', 'text');
        eyeIcon.setAttribute('class', 'fas fa-eye');
      }
      else {
        passInput.setAttribute('type', 'password');
        eyeIcon.setAttribute('class', 'fas fa-eye-slash');
      }
    })
  })
}
/*----- Path Actions -----*/
let path = window.location.pathname;
path = path.split('/');
let activePath = path[path.length - 2];
let sideMenu = Array.from(document.querySelectorAll('.main-menu .nav-item'));
sideMenu.forEach(e => {
  let sideMenuLink = e.querySelector('.main-menu .nav-item a').href;
  sideMenuLink = sideMenuLink.split('/');
  let sideMenuActive = sideMenuLink[sideMenuLink.length - 2];
  if (sideMenuActive == activePath) {
    e.classList.add('active');
  }
})
/*----- Go Back To page -----*/
let backLink = Array.from(document.querySelectorAll('.go-back-icon'));
backLink.forEach(e => {
  e.addEventListener('click', function () {
    window.history.go(-1)
  })
})
/*----- Open SubMenu -----*/
let subNavItem = document.querySelector('.subactive');
if (subNavItem) {
  let navItem = subNavItem.closest('.has-sub');
  navItem.classList.add('open');
};

// product slider
jQuery(document).ready(function ($) {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $('a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });
});

/*modal click change start here*/
$(function () {
  /**** Pasword Visible***/
  $(".enter-icon").click(function () {
    //console.log("ds");
    //alert ("ds"); 
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $(".enter-input");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }

  });
});

/*modal click change end here*/


/*date picker start here*/
$('.one-product__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.one-product__slider_navigation',
  arrows: false,
  dots: false,
  infinite: true,
  focusOnSelect: true,
  fade: true,
  cssEase: 'linear'
});

// Slider | one-product-slider
$(document).ready(function () {
  $('.one-product__slider_navigation').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    asNavFor: '.one-product__slider',
    focusOnSelect: true,
    centerMode: false,
    vertical: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fas fa-caret-up'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fas fa-caret-down'></i></i></button>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          arrows: false
        }
      },
    ]
  });
});
// ******************** INCREAMENT/DECREAMENT COUNTER ***********************//
function wcqib_refresh_quantity_increments() {
  jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function (a, b) {
    var c = jQuery(b);
    c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
  })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function () {
  var a = this,
    b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function () {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function () {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function () {
  var a = jQuery(this).closest(".quantity").find(".qty"),
    b = parseFloat(a.val()),
    c = parseFloat(a.attr("max")),
    d = parseFloat(a.attr("min")),
    e = a.attr("step");
  b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});



$(document).ready(function () {
  $("#table_filter").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("table tbody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

