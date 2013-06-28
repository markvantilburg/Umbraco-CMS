yepnope({

  load: [
		'lib/jquery/jquery-1.8.2.min.js',
		'lib/jquery/jquery.cookie.js',
		'lib/angular/angular.min.js',
		'lib/bootstrap/js/bootstrap.js',
		'lib/underscore/underscore.js',
		'lib/umbraco/Extensions.js',
		
		'js/app_dev.js',

		'js/umbraco.mocks.js',
		'js/umbraco.directives.js',
		'js/umbraco.filters.js',
		'js/umbraco.services.js',
		'js/umbraco.security.js',
		'js/umbraco.controllers.js',
		'js/routes.js'
  		],

  complete: function () {
    jQuery(document).ready(function () {
        angular.bootstrap(document, ['umbraco']);
      });
  
  }
});