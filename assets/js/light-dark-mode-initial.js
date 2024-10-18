const isDark = window.matchMedia('(prefers-color-scheme:dark)');
const html = document.getElementsByTagName('html')[0];
const darkThemeClass = 'theme--dark';
const lightThemeClass = 'theme--light';
let cookieIsSet = false;

//function to find in cookies
function getCookie(cname) {
	let name = cname + '=';
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

const cookieSetting = getCookie('theme');
if (cookieSetting !== '') {
	if (cookieSetting === 'dark') {
		html.classList.toggle(darkThemeClass);
		cookieIsSet = true;
	} else {
		html.classList.toggle(lightThemeClass);
		cookieIsSet = true;
	}
}

if (isDark && cookieIsSet === false) {
	html.classList.toggle(darkThemeClass);
} else if (cookieIsSet === false) {
	html.classList.toggle(lightThemeClass);
}
