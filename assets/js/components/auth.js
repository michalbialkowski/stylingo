$('.auth__client').on('click', function() {
	Cookies.set('auth', 'client');
	auth();
});

$('.auth__stylist').on('click', function() {
	Cookies.set('auth', 'stylist');
	auth();
});

$('.auth__logout').on('click', function() {
	Cookies.remove('auth');
	
	$('.auth__menu__client').addClass('d-none');
	$('.auth__menu__stylist').addClass('d-none');
	$('.auth__menu__register').removeClass('d-none');
	$('.auth__menu__login').removeClass('d-none');
	
	location.href = 'index.html';
});

auth();

function auth() {
	if (Cookies.get('auth')) {
		$('.auth__menu__register').addClass('d-none');
		$('.auth__menu__login').addClass('d-none');
		
		if (Cookies.get('auth') == 'client') {
			$('.auth__menu__stylist').addClass('d-none');
			$('.auth__menu__client').removeClass('d-none');
		}
		
		if (Cookies.get('auth') == 'stylist') {
			$('.auth__menu__client').addClass('d-none');
			$('.auth__menu__stylist').removeClass('d-none');
		}
	}
}