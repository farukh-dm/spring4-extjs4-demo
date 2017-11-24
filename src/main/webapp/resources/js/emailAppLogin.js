Ext.application({
  requires: ['EmailApp.common.EmailAppConstant'],
  name: 'EmailApp',
  appFolder: 'resources/js/app',
  controllers: ['EmailApp.controller.login.LoginController'],
  launch: function() {
	  
	  Ext.create('EmailApp.view.login.LoginViewport');
	
  }
});