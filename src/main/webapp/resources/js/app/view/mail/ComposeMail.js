Ext.define('EmailApp.view.mail.ComposeMail', {
	extend : 'Ext.window.Window',
	// requires: ['EmailApp.store.mail.MailStore'],
	alias : 'widget.composemailpopup',
	layout : 'fit',
	initComponent : function() {
		this.callParent();
	},
	dockedItems : [ {
		dock : 'bottom',
		bodyPadding : 3,
		items : [ {
			xtype : 'button',
			text : 'Submit',
			itemId: 'btn-mail-submit'
		} ]
	} ],
	modal : true,
	autoDestroy : true,
	closable : true,
	title : 'Compose Mail',
	height : 400,
	width : 600,
	items : [ {
		'xtype' : 'form',
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		bodyPadding : 3,
		defaults : {
			labelAlign : 'right',
			labelWidth : '10%',
		},
		items : [ {
			xtype : 'textfield',
			name : 'to',
			fieldLabel : 'To',
			allowBlank : false,
			vtype : 'email'
		}, {
			xtype : 'textfield',
			name : 'cc',
			fieldLabel : 'Cc',
			vtype : 'email'
		}, {
			xtype : 'textfield',
			name : 'bcc',
			fieldLabel : 'Bcc',
			vtype : 'email'
		}, {
			xtype : 'textfield',
			name : 'subject',
			fieldLabel : 'Subject',
			allowBlank : false
		}, {
			xtype : 'htmleditor',
			name : 'content',
			allowBlank : false,
			flex : 1,
			getSubmitData: function() {
				var me = this,
	            data = null;
	        if (!me.disabled && me.submitValue && !me.isFileUpload()) {
	            data = {};
	            data[me.getName()] = '' + Ext.htmlEncode(me.getValue());
	        }
	        return data;
			}
		}

		]
	} ]

});