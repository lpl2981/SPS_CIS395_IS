/**
 *@NApiVersion 2.x
 *@NModuleScope Public
 *@NScriptType UserEventScript
 */

define([], function() {
function beforeSubmit(context) {
    var newRecord = context.newRecord;
    var noLines = newRecord.getLineCount({
        sublistId: 'item' // from Sales Order record browser
    }); 
    // for each line
    var total = 0;
    for (var index = 0; index < noLines; index++) {
        total += newRecord.getSublistValue({
            sublistId: 'item',
            fieldId: 'custcol_nw_is395_item_cubic_inches',
            line: index 
        });
        total * newRecord.getSublistValue({
            sublistId: 'item',
            fieldId: 'quantity',
            line: index
        });
        }

    newRecord.setValue({
        fieldId: 'custbody_nw_is_395_s2_order_space',
        value: (total/12)
    });
}
    return {
        beforeSubmit: beforeSubmit
    };
    }); 