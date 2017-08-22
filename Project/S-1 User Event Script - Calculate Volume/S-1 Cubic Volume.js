/**
 *@NApiVersion 2.x
 *@NModuleScope Public
 *@NScriptType UserEventScript
 */

define(['N/record'], function(record) {
    function beforeSubmit(context) {
        log.debug('beforeSubmit Triggered');
        if (context.type === context.UserEventType.CREATE)
            return;
        var itemRecord = context.newRecord;
        var oldItemRecord = context.oldRecord;
        var length = record.getFieldValue( {fieldid: record.custitem_nw_is395_item_length_inches} );
        var height = record.getFieldValue( {fieldid: record.custitem_nw_is395_item_height_inches} );
        var width = record.getFieldValue( {fieldid: record.custitem_nw_is395_item_width_inches} );
        itemRecord.setValue({
            fieldId: 'custitem_nw_is395_item_vol_cub_inches',
            value: length * width * height
            });
        };
        return {
            beforeSubmit: beforeSubmit
        };
    })

define([], function() {
    function beforeSubmit(context) {
        var record = context.newRecord; // record.Record object, not "record" module
        var length = record.getValue({ fieldId: "custitem_nw_is395_item_length_inches"})
        var width = record.getValue({ fieldId: "custitem_nw_is395_item_width_inches"})
        var height = record.getValue({ fieldId:"custitem_nw_is395_item_height_inches"})
    });
}

return {
    beforeSubmit: beforeSubmit
};
});