var btnRose = document.getElementById("flowers");
var sunflowers = document.getElementById('sunflowers');

btnRose.addEventListener('click', function(){
    var request = new XMLHttpRequest;
    request.onload = function () {
        if (request.status === 200) {
            responseObject = JSON.parse(request.responseText);
            var content = '';
            for (var i = 0; i < responseObject.events.length; i++) {
                content += '<div>';
                content += '<img src="' + responseObject.events[i].image + '">';
                content += '<p>' + responseObject.events[i].name + '</p>';
                content += '</div>';
            }
            document.getElementById('div-content').innerHTML = content +"<br>";
        }
    };
    request.open('GET', 'data/data.json', true);
    request.send(null);
})