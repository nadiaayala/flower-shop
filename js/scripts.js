var tulips = document.getElementById('tulips');
var sunflowers = document.getElementById('sunflowers');
var roses = document.getElementById('roses');


sunflowers.addEventListener('click', function(){   
    var actives = document.getElementsByClassName('active');
    console.log(actives);
    while(actives.length>0){
        actives[0].classList.remove('active');
    }
    this.classList.add('active');
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

tulips.addEventListener('click', function(){
    var actives = document.getElementsByClassName('active');
    while(actives.length>0){
        actives[0].classList.remove('active');
    }
    this.classList.add('active');
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
    request.open('GET', 'data/data2.json', true);
    request.send(null);
})

roses.addEventListener('click', function(){
    var actives = document.getElementsByClassName('active');
    while(actives.length>0){
        actives[0].classList.remove('active');
    }
    this.classList.add('active');   
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
    request.open('GET', 'data/data3.json', true);
    request.send(null);
})

