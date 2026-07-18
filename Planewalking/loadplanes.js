var allPlanes = null;
var planes = null;
window.onload = function () {
    fetch('./planes.json')
        .then(response => {
            if (!response.ok) {
                document.getElementById("pError").innerHTML = response.status;
                document.getElementById("loading").classList.add('hidden');
                document.getElementById("error").classList.remove('hidden');
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            allPlanes = JSON.parse(JSON.stringify(data));
            shuffle(data)
            planes = JSON.parse(JSON.stringify(data));
            document.getElementById("loading").classList.add('hidden');
            document.getElementById("start").classList.remove('hidden');
        })
        .catch(error => {
            console.error('Failed to fetch data:', error);
            document.getElementById("pError").innerHTML = error;
            document.getElementById("loading").classList.add('hidden');
            document.getElementById("error").classList.remove('hidden');
        });
}

function loadNextPlane() {
    if (planes.length == 0) {
        document.getElementById("planeview").classList.add('hidden');
        document.getElementById("shuffle").classList.remove('hidden');
        planes = JSON.parse(JSON.stringify(allPlanes));
        shuffle(planes)
        console.log("shuffled planes");
        console.log(planes)
    } else {
        document.getElementById("planeview").classList.remove('hidden');
        document.getElementById("shuffle").classList.add('hidden');

        document.getElementById("planewalk").classList.add('hidden');
        var plane = planes.pop();
        console.log(plane);
        
        document.getElementById("planewalk").classList.add('hidden');
        document.getElementById("loading").classList.remove('hidden');

        document.getElementById("planeName").innerHTML = plane.name;
        document.getElementById("planeType").innerHTML = plane.type;
        document.getElementById("planeOracle").innerHTML = plane.oracle;
        document.getElementById("planeChaos").innerHTML = plane.chaos;
        document.getElementById("planeBg").src = plane.src;
        
        document.getElementById("loading").classList.add('hidden');
        document.getElementById("planewalk").classList.remove('hidden');
    }
}

function start() {
    document.getElementById("start").classList.add('hidden');
    if (planes == null) {
        document.getElementById("pError").innerHTML = "Planes did not load! Reload page to try again.";
        document.getElementById("loading").classList.add('hidden');
        document.getElementById("error").classList.remove('hidden');
    } else {
        document.getElementById("header").classList.add('hidden');
        loadNextPlane();
    }
}