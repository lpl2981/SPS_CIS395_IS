/**
 *@NApiVersion 2.x
 *@NModuleScope Public
 *@NScriptType UserEventScript
 */

define(['N/search'], function() {
function beforeSubmit(context) {
    var record = context.newRecord; // loads record object
    var truckRecord = search.lookupFields({ type: search.Type.customrecord_nw_is395_delivery_trucks, id: record.getValue({ fieldId: 'custbody_nw_is395_delivery_shipment.id' }), columns: ['custrecord_nw_is395_sq_ft', 'custrecord_nw_is395_delivery_truck']
    });
    var spaceAvailable = record.getValue({ fieldId: 'custrecord_nw_is395_sq_ft' });
    var spaceNeeded = record.getValue({ fieldId: 'custbody_nw_is_395_s2_order_space' });
    var truckStatus = record.getValue({ fieldId: 'custrecord_nw_is395_delivery_truck' });
    if (spaceAvailable > spaceNeeded + 100) {
        newRecord.setValue({
            fieldId: "custrecord_nw_is395_sq_ft",
            value: (spaceAvailable - spaceNeeded)
        });
    }
    return {
        beforeSubmit: beforeSubmit
    };
});