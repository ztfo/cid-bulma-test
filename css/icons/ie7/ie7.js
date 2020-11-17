/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'cd-ic-activity': '&#xe900;',
		'cd-ic-add-user': '&#xe901;',
		'cd-ic-alert-circle': '&#xe902;',
		'cd-ic-alert-square': '&#xe903;',
		'cd-ic-alert-triangle': '&#xe904;',
		'cd-ic-arrow-down': '&#xe905;',
		'cd-ic-arrow-left': '&#xe906;',
		'cd-ic-arrow-right': '&#xe907;',
		'cd-ic-arrow-up': '&#xe908;',
		'cd-ic-audio-low': '&#xe909;',
		'cd-ic-audio-off': '&#xe90a;',
		'cd-ic-audio-on': '&#xe90b;',
		'cd-ic-bag': '&#xe90c;',
		'cd-ic-bell': '&#xe90d;',
		'cd-ic-bookmark': '&#xe90e;',
		'cd-ic-briefcase': '&#xe90f;',
		'cd-ic-calendar': '&#xe910;',
		'cd-ic-call-missed': '&#xe911;',
		'cd-ic-call-silent': '&#xe912;',
		'cd-ic-calling': '&#xe913;',
		'cd-ic-caret-down': '&#xe914;',
		'cd-ic-caret-left': '&#xe915;',
		'cd-ic-caret-right': '&#xe916;',
		'cd-ic-caret-up': '&#xe917;',
		'cd-ic-chart': '&#xe918;',
		'cd-ic-check-shield': '&#xe919;',
		'cd-ic-check-square': '&#xe91a;',
		'cd-ic-close-square': '&#xe91b;',
		'cd-ic-compass': '&#xe91c;',
		'cd-ic-discount': '&#xe91d;',
		'cd-ic-document': '&#xe91e;',
		'cd-ic-down-circle': '&#xe91f;',
		'cd-ic-down-square': '&#xe920;',
		'cd-ic-download': '&#xe921;',
		'cd-ic-edit-square': '&#xe922;',
		'cd-ic-edit': '&#xe923;',
		'cd-ic-envelope': '&#xe924;',
		'cd-ic-filter': '&#xe925;',
		'cd-ic-folder': '&#xe926;',
		'cd-ic-game': '&#xe927;',
		'cd-ic-graph': '&#xe928;',
		'cd-ic-heart': '&#xe929;',
		'cd-ic-hide': '&#xe92a;',
		'cd-ic-home': '&#xe92b;',
		'cd-ic-image-full': '&#xe92c;',
		'cd-ic-image': '&#xe92d;',
		'cd-ic-left-circle': '&#xe92e;',
		'cd-ic-left-square': '&#xe92f;',
		'cd-ic-location': '&#xe930;',
		'cd-ic-locked': '&#xe931;',
		'cd-ic-login': '&#xe932;',
		'cd-ic-logout': '&#xe933;',
		'cd-ic-menu': '&#xe934;',
		'cd-ic-message': '&#xe935;',
		'cd-ic-microphone-lines': '&#xe936;',
		'cd-ic-microphone': '&#xe937;',
		'cd-ic-more-circle': '&#xe938;',
		'cd-ic-more-square': '&#xe939;',
		'cd-ic-paper-download': '&#xe93a;',
		'cd-ic-paper-minus': '&#xe93b;',
		'cd-ic-paper-plane': '&#xe93c;',
		'cd-ic-paper-plus': '&#xe93d;',
		'cd-ic-paper-upload': '&#xe93e;',
		'cd-ic-paper-x': '&#xe93f;',
		'cd-ic-paper': '&#xe940;',
		'cd-ic-password-key': '&#xe941;',
		'cd-ic-phone': '&#xe942;',
		'cd-ic-photo-camera': '&#xe943;',
		'cd-ic-play': '&#xe944;',
		'cd-ic-plus': '&#xe945;',
		'cd-ic-pointer-down': '&#xe946;',
		'cd-ic-pointer-left': '&#xe947;',
		'cd-ic-pointer-right': '&#xe948;',
		'cd-ic-pointer-up': '&#xe949;',
		'cd-ic-right-circle': '&#xe94a;',
		'cd-ic-right-square': '&#xe94b;',
		'cd-ic-scan': '&#xe94c;',
		'cd-ic-search': '&#xe94d;',
		'cd-ic-settings-1': '&#xe94e;',
		'cd-ic-settings': '&#xe94f;',
		'cd-ic-show': '&#xe950;',
		'cd-ic-star': '&#xe951;',
		'cd-ic-swap': '&#xe952;',
		'cd-ic-time-circle': '&#xe953;',
		'cd-ic-time-square': '&#xe954;',
		'cd-ic-times-chield': '&#xe955;',
		'cd-ic-trash': '&#xe956;',
		'cd-ic-unlocked': '&#xe957;',
		'cd-ic-up-circle': '&#xe958;',
		'cd-ic-up-square': '&#xe959;',
		'cd-ic-upload': '&#xe95a;',
		'cd-ic-user-group': '&#xe95b;',
		'cd-ic-user': '&#xe95c;',
		'cd-ic-users': '&#xe95d;',
		'cd-ic-video-camera': '&#xe95e;',
		'cd-ic-wallet': '&#xe95f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/cd-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
