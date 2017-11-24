Ext.define('EmailApp.controller.login.LoginController', {

	extend : 'Ext.app.Controller',
	requires : [ 'EmailApp.view.login.LoginViewport',
	             'EmailApp.view.login.LoginForm', 
	             'EmailApp.common.EmailAppUtil' ],
	refs : [

	/*
	 * { ref : 'errorDisplayField', selector : 'displayfield#errorDisplay' }
	 */
	],
	init : function() {

		this.control({

			'button#btn-login' : {
				'click' : this.handleLoginButtonClick,
				scope : this
			},

		});
	},

	handleLoginButtonClick : function(btn, e, eOpts) {

		form = btn.up('form');

		// 1. Validate
		if (!form.isValid()) {

			EmailAppUtil.showMessageBox('Error',
					'Please provide valid details!', Ext.MessageBox.ERROR);

			return;
		}

		Ext.getBody().mask('Logging..');

		// 2. Make Server Call for login
		form.submit({
			clientValidation : true,
			url : CONTEXT_PATH + '/authenticate.json',
			method : 'POST',
			params : {
			// extra params
			},
			success : function(form, action) {
				form.reset();
				window.location.href = action.result.redirectUrl;

			},
			failure : function(form, action) {
				
				form.reset();
				Ext.getBody().unmask();
				
				EmailAppUtil.ajaxGenericFailureEvaluation(action);
				
			}

		});

	}

});