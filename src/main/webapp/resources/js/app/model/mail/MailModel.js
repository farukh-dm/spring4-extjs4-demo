Ext.define('EmailApp.model.mail.MailModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'from',  type: 'string'},
        {name: 'subject',  type: 'string'},
        {name: 'date',  /*type: 'date',*/ /*map : 'date'*/},
        {name: 'content',  type: 'string'},
        {name: 'read',  type: 'boolean'},
        {name: 'type',  type: 'string'},
        {name: 'label',  type: 'string'},
    ]

});