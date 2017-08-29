/**
 *@NApiVersion 2.x
 *@NModuleScope Public
 *@NScriptType UserEventScript
 */

define(['N/search', 'N/record'], function(search, record) {
function beforeSubmit(context) {
    var IFRecord = context.newRecord; // loads record object for the Fulfillment
    var truckRecord = search.lookupFields({ type: 'customrecord_nw_is395_delivery_trucks', id: IFRecord.getValue({ fieldId: 'custbody_nw_is395_delivery_shipment' }), columns: ['custrecord_nw_is395_sq_ft', 'custrecord_nw_is395_delivery_truck', 'custrecord_nw_is395_max_capacity']
});
    var spaceAvailable = truckRecord.custrecord_nw_is395_sq_ft;
        log.debug({
            title: 'spaceAvailable',
            details: 'Value of Space Available : ' + spaceAvailable + ' ' + typeof(spaceAvailable)
        });
    var maxSpace = truckRecord.custrecord_nw_is395_max_capacity;
        log.debug({
            title: 'Maximum Space',
            details: 'Value of Maximum Space : ' + maxSpace + ' ' + typeof(maxSpace)
        });
    var spaceReturned = IFRecord.getValue({ fieldId: 'custbody_nw_is_395_s2_order_space' });
        log.debug({
            title: 'spaceReturned',
            details: 'Value of Space Needed : ' + spaceReturned
        });
        //  var truckStatus = IFRecord.getValue({ fieldId: 'custrecord_nw_is395_delivery_truck' });
    var truckStatus = truckRecord.custrecord_nw_is395_delivery_truck[0].value;
        log.debug({
            title: 'truckStatus',
            details: 'Value of Truck Status : ' + truckStatus
        });
        record.submitFields({
            type: 'customrecord_nw_is395_delivery_trucks',
            id: IFRecord.getValue({ fieldId: 'custbody_nw_is395_delivery_shipment' }),
            values: {
            custrecord_nw_is395_sq_ft: (Number(spaceAvailable) + Number(spaceReturned)),
            custrecord_nw_is395_delivery_truck: 2
        }
        });
if (spaceAvailable == maxSpace) {
        log.debug('square feet')
            //record.submitField({
                //fieldId: "custrecord_nw_is395_sq_ft",
                //value: (spaceAvailable - spaceReturned)
            //});
    record.submitFields({
        type: 'customrecord_nw_is395_delivery_trucks',
        id: IFRecord.getValue({ fieldId: 'custbody_nw_is395_delivery_shipment' }),
        values: {
        custrecord_nw_is395_delivery_truck: 1
    }

});
    }
}
    return {
        beforeSubmit: beforeSubmit
    }
});