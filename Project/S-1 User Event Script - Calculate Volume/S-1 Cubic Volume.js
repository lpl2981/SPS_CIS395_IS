/**
 *@NApiVersion 2.x
 *@NModuleScope Public
 *@NScriptType UserEventScript
 */

define([], function () {
  function beforeSubmit(context) {
    var record = context.newRecord; // record.Record OBJECT NOT "record" module
    var length = record.getValue({ fieldId: "custitem_nw_is395_item_length_inches" });
    var width = record.getValue({ fieldId: "custitem_nw_is395_item_width_inches" });
    var height = record.getValue({ fieldId: "custitem_nw_is395_item_height_inches" });
    log.debug('testing calculation', length* width * height)
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