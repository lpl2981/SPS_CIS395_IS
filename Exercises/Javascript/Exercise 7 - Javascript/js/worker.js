var i = 0;

self.onmessage = function(event) {
    document.getElementById("output").innerHTML += '<li>' + event.data + '</li>'
    }