$(function () {

  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="slick-btn banner-section__slider-btn  banner-section__slider-btnprev "><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-btn banner-section__slider-btn  banner-section__slider-btnnext "><img src="images/icons/arrow-right.svg" alt=""></button>',
    responsive: [{
      breakpoint: 969,
      settings: {
        arrows: false
      }
    }]
  });

  $('.tabs__item').on('click', function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass('tabs__item--active');
    $($(this).closest('.tabs').siblings().find('div')).removeClass('tabs__content--active');

    $(this).addClass('tabs__item--active');
    $($(this).attr('href')).addClass('tabs__content--active');

    $('.product-slider').slick('setPosition');
  });

  $('.product-item__favorite').on('click', function () {
    $(this).toggleClass('product-item__favorite--active')
  });

  $('.catalog__filter-button').on('click', function () {
    $(this).toggleClass('catalog__filter-button--active')
  });

  $('.aside-filter__title-drop').on('click', function () {
    $(this).toggleClass('aside-filter__title-drop--active');
    $(this).next().slideToggle('200')
  });

  $('.aside-filter__extra').on('click', function () {
    $(this).toggleClass('aside-filter__extra--active');
    $(this).next().slideToggle('200')
  });

  $('.catalog__filter-grid').on('click', function () {
    $(this).addClass('catalog__button--active')
    $('.catalog__filter-line').removeClass('catalog__button--active')
    $('.product-item').removeClass('product-item--line')
  });

  $('.catalog__filter-line').on('click', function () {
    $(this).addClass('catalog__button--active')
    $('.catalog__filter-grid').removeClass('catalog__button--active')
    $('.product-item').addClass('product-item--line')
  });

  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-btn product-slider__slider-btn  product-slider__slider-btnprev "><img src="images/icons/arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-btn product-slider__slider-btn  product-slider__slider-btnnext "><img src="images/icons/arrow-black-right.svg" alt=""></button>',
    responsive: [{
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('.filter-style').styler();

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000
  });

  $(".rateYo").rateYo({
    starWidth: "23px",
    ratedFill: "#1C62CD",
    normalFill: "#C4C4C4",
    readOnly: true,
    spacing: "7px"
  });

  $('.menu__btn').on('click', function () {
    $('.menu-mobile').toggleClass('menu-mobile--active')
  });

  $('.footer__top-title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer__top-title--active');
  });

  $('.aside-btn').on('click', function () {
    $(this).next().slideToggle();
  });

});