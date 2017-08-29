/**
 *@NApiVersion 2.x
 *@NModuleScope Public
 *@NScriptType UserEventScript
 */

define(['N/record'], function (volumeCalc) {
  function beforeSubmit(context) {
    var record = context.newRecord; // record.Record OBJECT NOT "record" module
    var length = record.getValue({ fieldId: "custitem_nw_is395_item_length_inches" });
    log.debug({
      title: 'length',
      details: 'Value of Length: ' + typeof(length)
    });
    var width = record.getValue({ fieldId: "custitem_nw_is395_width_inches" });
      log.debug({
      title: 'width',
      details: 'Value of Width: ' + typeof(width)
    });
    var height = record.getValue({ fieldId: "custitem_nw_is395_item_height_inches" });
      log.debug({
      title: 'height',
      details: 'Value of Height: ' + typeof(height)
    });
    log.debug({
    title: 'Testing Calculation', 
    details: 'Value of Item Volume: ' + (length * width * height)
    });
    record.setValue({
      fieldId: 'custitem_nw_is395_item_vol_cub_inches',
      value: length * width * height
    });
    log.debug('value set')
  }

  return {
    beforeSubmit: beforeSubmit
  };
});
