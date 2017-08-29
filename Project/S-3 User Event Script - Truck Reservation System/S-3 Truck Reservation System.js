/**
 *@NApiVersion 2.x
 *@NModuleScope Public
 *@NScriptType UserEventScript
 */

define(['N/search'], function(search) {
function beforeSubmit(context) {
    var record = context.newRecord; // loads record object for the Sales Order
    var truckRecord = search.lookupFields({ type: 'customrecord_nw_is395_delivery_trucks', id: record.getValue({ fieldId: 'custbody_nw_is395_delivery_shipment' }), columns: ['custrecord_nw_is395_sq_ft', 'custrecord_nw_is395_delivery_truck']
});
    log.debug('look up fields', JSON.stringify(truckRecord));

    // {"custrecord_nw_is395_sq_ft":"1000","custrecord_nw_is395_delivery_truck":[{"value":"1","text":"Available"}]}
   //  var spaceAvailable = record.getValue({ fieldId: 'custrecord_nw_is395_sq_ft' });
   var spaceAvailable = truckRecord.custrecord_nw_is395_sq_ft;
   log.debug({
    title: 'spaceAvailable',
    details: 'Value of Space Available : ' + spaceAvailable
   });
    var spaceNeeded = record.getValue({ fieldId: 'custbody_nw_is_395_s2_order_space' });
    log.debug({
    title: 'spaceNeeded',
    details: 'Value of Space Needed : ' + spaceNeeded
   });
  //  var truckStatus = record.getValue({ fieldId: 'custrecord_nw_is395_delivery_truck' });
  var truckStatus = truckRecord.custrecord_nw_is395_delivery_truck[0].value;
    log.debug({
    title: 'truckStatus',
    details: 'Value of Truck Status : ' + truckStatus
   });
    if (spaceAvailable > spaceNeeded + 100) {
        log.debug('square feet')
        record.setValue({
            fieldId: "custrecord_nw_is395_sq_ft",
            value: (spaceAvailable - spaceNeeded)
        });
    }
}
    return {
        beforeSubmit: beforeSubmit
    }
});
