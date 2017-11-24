Ext.define('EmailApp.view.header.HeaderSearchContainer', {
	extend : 'Ext.form.Panel',
	alias : 'widget.headersearchcontainer',
	initComponent : function() {
		//for later use
		this.callParent();
	},
	bodyStyle: 'background:none;border:0px;',
	layout: {
		type: 'hbox'
		//align : 'stretch'
	},
	defaults : {
		//labelAlign : 'right',
		//labelWidth : '10%',
		width: '50%'
	},
	items : [ {
		xtype : 'textfield',
		name : 'search'
		//fieldLabel : 'To',
		//allowBlank : false,
		//vtype : 'email'
	},
	{	xtype : 'image',
		src : 'https://cdnjs.cloudflare.com/ajax/libs/extjs/6.0.0/modern/theme-neptune/resources/images/pictos/search1.png',
		alt:'Search',
		style: 'back',
		width: 15,
		height: 15,
		style: 'margin:4px 0px 0px 5px;cursor:pointer;',
		itemId: 'icon-search'
	}
	]
});