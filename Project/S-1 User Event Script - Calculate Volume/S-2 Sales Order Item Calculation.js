/**
 *@NApiVersion 2.x
 *@NModuleScope Public
 *@NScriptType UserEventScript
 */

var noLines = newRecord.getLineCount({
    sublistId: 'item' // from SO record browser
}); 
// for each line
var total = 0;
