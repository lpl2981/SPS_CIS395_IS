var SEARCHMODULE;
 
/**
 *@NApiVersion 2.x
 *@NModuleScope Public
 *@NScriptType UserEventScript
 */
define(['N/search'], runUserEvent);

function runUserEvent(search) {
	SEARCHMODULE = search;
 
	var returnObj = {};
	returnObj.beforeLoad = beforeLoad;
	returnObj.afterSubmit = afterSubmit;
	returnObj.beforeSubmit = beforeSubmit;
	return returnObj;
}
 
function beforeLoad(context) {
	//SEARCHMODULE.load(123);
	log.debug('beforeLoad Triggered');
	context.newRecord;
	context.type;
	context.form;
	return;
}
 
function afterSubmit(context) {
	//SEARCHMODULE.load(123);
	log.debug('afterSubmit Triggered');
	context.newRecord;
	context.oldRecord;
	context.type;
	return;
}
 
function beforeSubmit(context) {
	//SEARCHMODULE.load(123);
	log.debug('beforeSubmit Triggered');
	context.newRecord;
	context.oldRecord;
	context.type;
	return;
}