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
            var cubicInches = newRecord.getSublistValue({
                sublistId: 'item',
                fieldId: 'custcol_nw_is395_item_cubic_inches',
                line: index 
            });
            log.debug({
            title: 'value of Total',
            details: 'Value of Total: ' + total + typeof(total)
            });
            var quantity = newRecord.getSublistValue({
                sublistId: 'item',
                fieldId: 'quantity',
                line: index
            });
            total += (quantity * cubicInches);
        }
        newRecord.setValue({
            fieldId: 'custbody_nw_is_395_s2_order_space',
            value: parseInt(total/1728)
            //value: Math.round(total/1728)
        });
    }
    return {
        beforeSubmit: beforeSubmit
    };
}); 