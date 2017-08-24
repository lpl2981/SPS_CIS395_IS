var worker = new Worker("js/worker.js");
function startWorker() {
    console.log(worker);
    timedCount();
}
var i=0;
function stopWorker() {
    if (worker != null)
        worker.terminate();
}
function timedCount() {
    i = i + 1;
    //postMessage(i);
    worker.postMessage(i);
    setTimeout("timedCount()",500);
}
