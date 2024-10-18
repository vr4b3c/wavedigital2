import './css/theme.css';
import './css/user.css';
var $ = require('jquery');
require('jquery-ui');
import './js/deleteAlert.js';
require('bootstrap');
//import './js/fa-all.min.js';
// require('is_js');
import dt from 'datatables.net';
import dataTableInit from './js/dataTableInit';
import './js/theme.js';
import './js/preview';
import './js/changesMadeChecker';
import initPreview from './js/preview';
import './js/form-checkbox';
import {
	addFieldWithButton,
	generateDynamicFields,
} from './js/field-generator';
import './js/titleLengthWarning.js';
import './js/passwordValidator';
import './js/imageUploadValidation';
require('jquery.redirect');
import './js/paragraphOrder';
import './js/secondaryFormButtons';
import './js/addSectionInputType';
import './js/tableRowLink';
global.$ = global.jQuery = $;
global.dataTableInit = dataTableInit;
global.initPreview = initPreview;
global.generateDynamicFields = generateDynamicFields;
global.addFieldWithButton = addFieldWithButton;
