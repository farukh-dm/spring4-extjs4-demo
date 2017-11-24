Ext.define('EmailApp.view.login.LoginForm', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.loginform',
	itemId : 'login-form-cont',
	id : 'login-form-cont',
	initComponent : function() {
		this.callParent();
	},
	
	layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [{
    	xtype: 'form',
		title: "Please Login",
        width: '25%',
        dockedItems : [ {
			layout: {
				type: 'vbox',
		        align: 'center',
		        pack: 'center'
			},
			dock : 'bottom',
			bodyPadding : 10,
			items : [ {
				xtype : 'button',
				text : 'Login',
				itemId: 'btn-login',
				width: 70,
				scale: 'medium',
			} ]
		} ],
		bodyPadding : 10,
		defaults : {
			labelAlign : 'right',
			//labelWidth : 53,
			margin: '5px 0px'
		},
		items : [ {
			xtype : 'textfield',
			name : 'email',
			fieldLabel : 'Email',
			allowBlank : false,
			vtype : 'email'
		}, {
			xtype : 'textfield',
			name : 'password',
			fieldLabel : 'Password',
			inputType: 'password' 
		},
		{
			xtype : 'displayfield',
			hidden: true,
			value: 'Error Display',
			itemId: 'errorDisplay'
		}]
    }]
	
});