Ext.define(
'EmailApp.controller.mail.MailController', {
	
	extend : 'Ext.app.Controller',
	requires : [
	        'EmailApp.common.EmailAppConstant',
	        'EmailApp.common.EmailAppUtil',
	        'EmailApp.view.header.HeaderSearchContainer',
			'EmailApp.view.header.CurrentUserContainer',
			'EmailApp.view.mail.ComposeMail',
			'EmailApp.view.mail.MailTabPanel',
			'EmailApp.view.mail.MailGrid',
			'EmailApp.view.west.MailFolderTree',
			'EmailApp.view.mail.MailBoxCardContainer' ],
	refs : [ {
		ref : 'mailContentArea',
		selector : '#elem-center-2'
	}, {
		ref : 'mailBoxCardContainer',
		selector : 'mailboxcardcontainer#mail-box-card-cont'
	},

	{
		ref : 'primaryMailsMailGrid',
		selector : 'mailgrid#mailgrid-primary'

	} ],
	init : function() {
		
		this.control({
				
			// ['selector': {..}]
			
			'button#btn-mail-compose' : {
				'click' : this.handleMailComposeButton,
				scope : this
			},
			
			'mailgrid' : {
				scope : this,
				'activate' : this.handleGridActivate,
				'cellclick' : this.handleMailGridCellClick
			},
			
			'composemailpopup button#btn-mail-submit' : {
				'click' : this.handleSubmitMailButtonClick,
				scope : this
			},
			
			'mailfoldertree#mail-folder-tree' : {
				scope : this,
				'afterrender' : this.handleTreeAfterRender,
				'selectionchange' : this.handleTreeItemSelectionChange
			},
			
			'mailtabpanel#myMailTabPanel' : {
				scope: this,
				'activate': this.handleMailTabPanelActivate,
				'tabchange':this.handleMailTabPanelTabChange
			},
			
			'mailboxcardcontainer mailgrid#mailgrid-sent' : {
				scope: this,
				
				'activate' : function() {
					console.log('activate');
				},
				
				'show' : function() {
					console.log('show');
				}
				
			}
				
		});
	},

	handleMailComposeButton : function(btn, event) {
		this.mailWindow = Ext.create('EmailApp.view.mail.ComposeMail');
		this.mailWindow.show();
	},

	handleGridActivate : function(grid, eOpts) {

		this._clearMailContentArea();
		
		var mailStore = grid.getStore();
		if(mailStore.data.items.length == 0) {
			mailStore.load({
				params: {
					'type': grid.type
				}
			});
		}

	},

	handleMailGridCellClick : function(grid, td, cellIndex,
			record, tr, rowIndex, e, eOpts) {
		var mailContentArea = this.getMailContentArea();
		if (cellIndex != 0 && grid.getSelectedNodes().length == 0) {
			// var id = record.get('id');
			mailContentArea.getEl().update(Ext.htmlDecode(record.get('content')));
			record.set('read', true);
		} else {
			mailContentArea.getEl().update(null);
		}
	},

	handleSubmitMailButtonClick : function(btn, e) {
		var composeMailForm = btn.up('composemailpopup').down('form');

		var form = composeMailForm.getForm();
		if (form.isValid()) {
			form.submit({
				clientValidation : true,
				url : CONTEXT_PATH+'/mails.json',
				method : 'POST',
				params : {
				// extra params
				},
				success : function(form, action) {
					
					form.reset();
					Ext.Msg.alert('Success', "Mail Sent Successfully");

				},
				
				failure : function(form, action) {
					EmailAppUtil.ajaxGenericFailureEvaluation(action);
				}
			});

		} else {

			Ext.Msg.alert('Validation Failure:', 'Please provide valid data.');

		}

	},

	handleTreeAfterRender : function(component, eOpts) {

		component.getSelectionModel().select(0);

		// component.getSelectionModel().select(component.getRootNode().firstChild);
		/*
		 * var record =
		 * treePanel.getStore().getNodeById('item_id');
		 * treePanel.getSelectionModel().select(record)
		 */

	},

	handleTreeItemSelectionChange : function(view, selected, eOpts) {
		
		this._clearMailContentArea();
		
		var mailBoxCardContainerLayout = this.getMailBoxCardContainer().getLayout();
		var panelToShow = this.getMailBoxCardContainer().down('[type='+selected[0].data.text+']');
		mailBoxCardContainerLayout.setActiveItem(panelToShow);
		
	},
	
	handleMailTabPanelActivate: function(component, eOpts ) {
		
		component.setActiveTab(0);
		
	},
	
	handleMailTabPanelTabChange: function(tabPanel, newCard, oldCard, eOpts ) {
		
		this._clearMailContentArea();
		
	},
	
	_clearMailContentArea: function() {
		
		if(this.getMailContentArea() && this.getMailContentArea().getEl()) {
			this.getMailContentArea().getEl().update(null);
		}
		
	}

});