<template>
  <div class="home">
    <!-- <div class="home__trigger"></div> -->
    <nav class="home__nav">
      <h1 class="home__nav--logo">Wokine<span>.</span></h1>
    </nav>
    
    <header class="home__header" ref="mainHeader">
      <!-- <div class="overlay"></div> -->
      <div class="home__header--left" ref="sideHeader">
            <div class="home__header--left__description">
              <div class="home__header--left__description--container">
                <span class="date-since">
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="7" viewBox="0 0 73.94 14.19">
                    <polyline points="2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83" style="stroke-dashoffset: 2e-05; stroke-dasharray: none;"></polyline>
                  </svg>
                  <p>Since 2004.</p>
                </span>
                <p>Wokine is a global digital agency</p>
                <p>and a startup studio, providing innovative,</p>
                <p>modern and aesthetic solutions.</p>
              </div>
            </div>
            <h1 class="home__header--left__heading">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1242.000000pt" height="969.000000pt" viewBox="0 0 1242.000000 969.000000" preserveAspectRatio="xMidYMid meet">
                <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
                <g transform="translate(0.000000,969.000000) scale(0.100000,-0.100000)">
                 
                  <path id="helloH" d="M20 7420 l0 -2250 525 0 525 0 0 970 0 970 540 0 540 0 0 -970 0
                    -970 525 0 525 0 0 2250 0 2250 -525 0 -525 0 0 -745 0 -745 -540 0 -540 0 0
                    745 0 745 -525 0 -525 0 0 -2250z" >
                  </path>
                  <path  d="M4545 9679 c-418 -3 -786 -7 -817 -8 l-58 -1 0 -2247 c0 -1237 4
                    -2253 8 -2259 5 -8 394 -9 1457 -1 798 5 1450 10 1451 11 1 0 -1 212 -4 470
                    l-5 469 -983 -8 -984 -7 0 505 0 505 113 6 c61 3 505 7 985 10 481 2 875 6
                    876 8 2 2 1 213 -2 471 l-5 467 -406 -5 c-223 -3 -666 -7 -983 -10 l-578 -5 0
                    345 0 345 88 1 c48 0 491 4 984 8 493 3 899 9 901 11 2 3 2 213 -1 468 l-5
                    462 -636 -2 c-350 -1 -978 -5 -1396 -9z">
                  </path>
                  <path d="M8710 4520 c-443 -29 -873 -199 -1225 -483 -179 -145 -384 -380 -503
                    -578 -332 -553 -419 -1222 -241 -1844 224 -780 853 -1385 1629 -1564 178 -42
                    311 -53 540 -48 353 8 596 66 905 217 577 283 1015 827 1175 1458 57 225 64
                    294 64 582 0 289 -7 357 -65 584 -161 638 -606 1185 -1193 1467 -339 162 -706
                    233 -1086 209z m370 -966 c388 -73 735 -348 905 -717 96 -208 130 -382 122
                    -626 -4 -141 -10 -184 -35 -281 -151 -585 -641 -982 -1211 -981 -347 1 -637
                    126 -886 382 -181 187 -299 413 -352 677 -27 135 -25 395 6 531 58 264 179
                    488 364 672 289 289 696 418 1087 343z">
                  </path>
                  <path d="M3519 2398 c-3 -1168 -3 -2181 -1 -2252 l4 -129 857 6 c471 4 1123
                    10 1449 14 l592 6 0 468 0 468 -925 -6 -925 -6 0 1776 0 1777 -524 0 -524 0
                    -3 -2122z">
                  </path>
                  <path d="M0 2260 l0 -2250 288 0 c357 0 2616 21 2620 25 1 1 -1 212 -4 468
                    l-7 466 -866 -5 c-476 -2 -890 -6 -918 -9 l-53 -4 0 1780 0 1779 -530 0 -530
                    0 0 -2250z">
                  </path>
                  <path id="dot" d="M11540 1454 c-36 -7 -108 -34 -160 -60 -163 -80 -302 -239 -359 -409
                    -83 -251 -22 -535 157 -727 293 -315 815 -298 1084 36 108 135 158 278 158
                    456 0 208 -65 365 -210 511 -73 73 -101 94 -180 132 -52 25 -127 52 -167 61
                    -87 19 -234 19 -323 0z" >
                  </path>
                </g>
                </svg>
            </h1>
            <span class="scroll">
              <p>Scroll</p>
              <i>&darr;</i>
            </span>
      </div>
      <div class="home__header--right"></div>
    </header>
    <div class="home__social">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
    </div>
  </div>
</template>

<script>
import {TimelineLite, Power1} from 'gsap'
import $ from 'jquery'
export default {
  data(){
    return {
    }
  },
  mounted(){
    $(window).on('beforeunload', () => {
      $(window).scrollTop(0)
    })
    // const drawsvg = window.DrawSVGPlugin;
    const tlLoad = new TimelineLite();
    tlLoad
    .from('.home__header', 1, {scale: 1.5, transformOrigin: "center", zIndex: 100})
    .from('.home__header--left', .6, {width: "100%"}, "-=.4")

    const tlH1 = new TimelineLite();
    tlH1
      .to(".home__header--left__heading", .7, {x: "170%", ease: Power1.easeInOut})
      .to(".home__header--left", .6, {width: "100%", ease: Power1.easeInOut}, "-=.6")
      .to(".scroll", .4, {y:50, autoAlpha: 0}, "-=.4")
      .staggerTo(".home__header--left__description--container p", .5, {autoAlpha: 1, y: 0}, 0.2, "-=.2")
      .from(".date-since", .6, {autoAlpha: 0, x: -50}, "-=.5")

    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      triggerElement: '.home__trigger',
      triggerHook: 0, 
      offset: 1
    }).setPin('.home__header').addTo(controller).setTween(tlH1).addIndicators()

  }
}
</script>
