Ext.define('EmailApp.common.EmailAppUtil', {
	config: {
		//currentUser : null
	},
	alternateClassName : 'EmailAppUtil',
	singleton: true,
	
	showMessageBox: function(title, msg, icon) {
		
		if(icon == null) {
			icon = Ext.MessageBox.INFO;
		}
		
		Ext.MessageBox.show({
			title   : title,
			msg     : msg,
			buttons : Ext.MessageBox.OK,
			icon    : icon
		});
	},
	
	eval: function(data) {
		var obj = null;
		try {
			obj = Ext.decode(data);
		} catch(e) {
			console.log('Error at EmailAppUtil.eval():' , e);
		}
		return obj;
	},
	
	ajaxGenericFailureEvaluation: function(action) {
		
		var result = null;
		
		if(action.response.responseText) {
			result = eval(action.response.responseText);
		}
		
		if (result && result.message) {

			EmailAppUtil.showMessageBox('Error', result.message,
				Ext.MessageBox.ERROR);
		
		} else {

			switch (action.failureType) {

			case Ext.form.action.Action.CONNECT_FAILURE:
				Ext.Msg.alert('Failure', 'Communication Failed!');
				break;

			case Ext.form.action.Action.SERVER_INVALID:
				Ext.Msg.alert('Failed', 'We got no response!');
				break;

			default:
				Ext.Msg.alert('Failed', 'Hey, looks like something is wrong!');
			}
		}
		
	}
	
});