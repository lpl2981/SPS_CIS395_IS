var SEARCHMODULE;
 
/**
 *@NApiVersion 2.x
 *@NModuleScope Public
 *@NScriptType UserEventScript
 */

define(['N/record'], function(record) {
    function beforeSubmit(scriptContext) {
        //SEARCHMODULE.load(123);
        log.debug('beforeSubmit Triggered');
        if (scriptContext.type === scriptContext.UserEventType.CREATE) {
            var newRecord = scriptContext.newRecord;
            var oldRecord = scriptContext.oldRecord;
            var length = record.getFieldValue( {fieldid: record.custitem_nw_is395_item_length_inches} );
            var height = record.getFieldValue( {fieldid: record.custitem_nw_is395_item_height_inches} );
            var width = record.getFieldValue( {fieldid: record.custitem_nw_is395_item_width_inches} );
        newRecord.setValue({
            fieldid: 'custitem_nw_is395_item_vol_cub_inches',
            value: length * width * height});
            };
        };
    });