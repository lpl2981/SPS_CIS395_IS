var SEARCHMODULE;
 
/**
 *@NApiVersion 2.x
 *@NModuleScope Public
 *@NScriptType UserEventScript
 */
define(['N/search'], runUserEvent);

function runUserEvent(search) {
	SEARCHMODULE = search;
	var returnObj = {};
	returnObj.beforeLoad = beforeLoad;
	returnObj.afterSubmit = afterSubmit;
	returnObj.beforeSubmit = beforeSubmit;
	return returnObj;
}
 
function beforeSubmit(context) {
	//SEARCHMODULE.load(123);
	log.debug('beforeSubmit Triggered');
	context.newRecord;
	context.oldRecord;
	context.type;
	return;
}

function Volume(context) {
    //Calculates volume & writes to field before submit to server
    log.debug('beforeSubmit Triggered');
    var record = context.currentRecord;
    var length = record.getFieldValue( {fieldid: record.custitem_nw_is395_item_length_inches} );
    var height = record.getFieldValue( {fieldid: record.custitem_nw_is395_item_height_inches} );
    var width = record.getFieldValue( {fieldid: record.custitem_nw_is395_item_width_inches} );
    currentRecord.setValue({
        fieldid: 'custitem_nw_is395_item_vol_cub_inches',
        value: length * width * height
    });
}
