Ext.define('EmailApp.view.west.MailFolderTree', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.mailfoldertree',
	initComponent : function() {
		//for later use
		this.callParent();
	},
	//bodyStyle: 'background:none;border:0px;',
	//title : 'Mail Folder',
	rootVisible: false,
	itemId: 'mail-folder-tree',
	root : {
		text : 'Root',
		expanded : true,
		children : [ {
			text : 'Inbox',
			leaf : true,
			type: 'Inbox'
		}, {
			text : 'Sent',
			leaf : true
		}, {
			text : 'Draft',
			leaf : true
		} ]
	}
});