var worker;
function startWorker() {
    worker = new Worker("js/worker.js");
    console.log(worker);
    timedCount();
}
var i=0;
function stopWorker() {
    worker.terminate();
}
function timedCount() {
    i = i + 1;
    //postMessage(i);
    worker.postMessage(i);
    setTimeout("timedCount()",500);
}
