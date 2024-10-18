import footerAccordion from './footer-accordion';
import lightDarkMode from './light-dark-mode';
import mobileMenu from './mobile-menu';
import modal from './modal';
import scroll from './scroll';
import initLoadMore from './loadMorePresentations';
import preview from './preview';
import initFormAjax from './formAjax';
require('fitvids.js')
require('jquery');
global.initLoadMore = initLoadMore;
global.initFormAjax = initFormAjax;
global.$ = global.jQuery = $;