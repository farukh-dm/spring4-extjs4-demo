Ext.define('EmailApp.view.mail.MailGrid', {
	extend: 'Ext.grid.Panel',
	requires: ['EmailApp.store.mail.MailStore'],
	alias: 'widget.mailgrid',
	initComponent: function() {
		this.store = Ext.create('EmailApp.store.mail.MailStore');
		this.callParent();
		//this.store.load();
		
	},
	//store: Ext.create('mailStore'),
	columns: [
	  {
		  text: 'Date', 
		  dataIndex: 'date', 
		  width: 100,
	      hideable: false,
		  renderer : function(value, metadata, record) {
			  return new Date(value);
		  }
	  
	  },
	  {
		  text: 'From', 
		  dataIndex: 'from', 
		  width: 200
	  },
	  {
		  text: 'Subject', 
		  dataIndex: 'subject', 
		  flex: 1,
          hideable: false,
		  renderer: function(value, metadata, record) {
	    	if(record.get('read'))
	    		return value;
	    	else 
	    	return '<strong>'+value+'</strong>';
	    }
	  },
	  {
		  text: 'Action', 
		  xtype:'actioncolumn',
		  sortable: false,
		  items: [
	      // for later use
	      ],
	  }
    ],
    
    selType: 'checkboxmodel',
    selModel: {
    	mode: 'SIMPLE',
    	checkOnly: true //to avoid checkbox selection on row click
    },
	viewConfig: {
		emptyText: 'No Data to display.',
		deferEmptyText : false
	}
});