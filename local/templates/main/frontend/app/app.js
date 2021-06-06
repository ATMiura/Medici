if(window.location.hash) window.setTimeout(() => { window.scrollTo(0, 0); }, 1);

function requireAll(r) {
    r.keys().forEach(r);
}

requireAll(require.context('./icons', true, /\.svg$/));

// Load plugins
import 'jquery'
import IMask from 'imask'

import svg4everybody from 'svg4everybody'
window.svg4everybody = svg4everybody;

import objectFitImages from 'object-fit-images'
window.objectFitImages = objectFitImages;

import imagesLoaded from 'imagesloaded'
window.imagesLoaded = imagesLoaded;

import 'bootstrap'

/*import AOS from 'aos';
import 'aos/dist/aos.css';*/

// load modules
//import Utils from'./js/utils/utils'
import SvgUse from'./js/svgUse'
//import Forms from'./js/forms/forms'
import Modals from'./js/modals'
import Custom from "./js/custom"
import Calculator from "./js/calculator"
//import MapObject from'./js/map-object'
//import Sliders from'./js/sliders'
//import Search from'./js/search'
//import Debounce from'./js/debounce'
// import MapObject from'./js/map'
// import MapObject from'./js/scrollbar'
// import Video from'./js/video'
// import Tabs from './js/tabs'
// import Media from './js/media'
//import Wow from "./js/wow";



// Load styles
import './styles/app.js';

// Run components

window.App = {
    nameProject: 'medici-invest',
    debug: false,
    lang: 'com'
};

if (window.SITE_LANG) {
    App.lang = window.SITE_LANG;
}

if (App.debug) {
    console.log('Debug: ' + App.debug);
    console.log('Lang: ' + App.lang);
}

document.addEventListener('DOMContentLoaded', function() {
    objectFitImages();

    //AOS.init();

    if('ontouchstart' in window || navigator.maxTouchPoints) $(document.body).addClass("touch");

    //App.Debounce = new Debounce();
    //App.Utils = new Utils();
    App.SvgUse = new SvgUse();
    //App.Forms = new Forms();
    App.Modals = new Modals();
    App.Custom = new Custom();
    App.Calculator = new Calculator();
    //App.Wow = new Wow();
    //App.MapObject = new MapObject();
    //App.Sliders = new Sliders();
    //App.Search = new Search();
    //App.Debounce = new Debounce();
    // App.Map = new Map();
    // App.Video = new Video();
    // App.Scrollbar = new Scrollbar();
    // App.Tabs = new Tabs();
    // App.Media = new Media();
    //App.Wow = new Wow();

    //$('[data-inputmask]').each(function () {
    //    IMask($(this)[0], {mask: "0 (000) 000-0000"});
    //});

    // prevent copying

    $('.no-select').on('selectstart', false);

    $(".no-select img").on('mousedown', false);
});