// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'NOW!',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/completar/',
    	url: 'completar.html',
    	name: 'completar',
  		},
		{
		path: '/vista/',
    	url: 'vista.html',
    	name: 'vista',
  		},
		{
		path: '/cards/',
    	url: 'cards.html',
    	name: 'cards',
  		},
		{
		path: '/swiper/',
    	url: 'swiper.html',
    	name: 'swiper',
  		},
		{
		path: '/checkout/',
    	url: 'checkout.html',
    	name: 'checkout',
  		},
			{
		path: '/eliminar/',
    	url: 'eliminar.html',
    	name: 'eliminar',
  		},
		{
		path: '/cancelada/',
    	url: 'cancelada.html',
    	name: 'cancelada',
  		},
		{
		path: '/fotos1/',
    	url: 'fotos1.html',
    	name: 'fotos1',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
	    {
		path: '/ajustes/',
    	url: 'ajustes.html',
    	name: 'ajustes',
  		},
		
		{
		path: '/aboutus/',
    	url: 'aboutus.html',
    	name: 'aboutus',
  		},
		{
		path: '/tareas/',
    	url: 'tareas.html',
    	name: 'tareas',
  		},
	],
	dialog: {
		title: 'Diseño Web App',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a la APP !');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {
		
		//app.dialog.alert('Great!');
		
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Your order has been received.",
		  closeTimeout: 3000,
		});
		notification.open();
		
	});
	
	
	
});





