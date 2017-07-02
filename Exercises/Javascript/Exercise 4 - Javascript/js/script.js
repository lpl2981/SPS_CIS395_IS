function handleClick(callback) { 
    alert('This button has been clicked');
    if (callback) {
        callback();
    }
}
//adds first alert on click

function doMore() {
    alert('I could process more logic here!');
}
//adds second alert

function doSomethingElse() {
    document.writeIn('Test Message');
}
//should replace html with writein message