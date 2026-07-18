var decks = null;
var allPlanes = null;
var deckPlanes = null;
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
            allPlanes = JSON.parse(JSON.stringify(data.planes));
            decks = JSON.parse(JSON.stringify(data.decks));
            var ul = document.getElementById("deckChoose");

            for (let d of decks) {
                var li = document.createElement("li");
                var btn = document.createElement("button");
                btn.addEventListener('click', () => {
                    start(d.name);
                });
                btn.innerHTML = d.name;
                li.appendChild(btn);
                ul.appendChild(li);
            }

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
        planes = JSON.parse(JSON.stringify(deckPlanes));
        shuffle(planes)
    } else {
        document.getElementById("planeview").classList.remove('hidden');
        document.getElementById("shuffle").classList.add('hidden');

        var plane = planes.pop();

        document.getElementById("planeswalkDiv").classList.add('hidden');
        document.getElementById("loading").classList.remove('hidden');

        document.getElementById("planeName").innerHTML = plane.name;
        document.getElementById("planeType").innerHTML = plane.type;
        document.getElementById("planeOracle").innerHTML = plane.oracle;
        document.getElementById("planeChaos").innerHTML = plane.chaos;
        document.getElementById("planeBg").src = plane.src;

        document.getElementById("loading").classList.add('hidden');
        document.getElementById("planeswalkDiv").classList.remove('hidden');
    }
}

function start(deckName) {
    targetNames = null;
    for (d of decks) {
        if (d.name == deckName) {
            targetNames = d.planes;
            break;
        }
    }
    
    planes = [];
    for (p of allPlanes) {
        for (targetName of targetNames) {
            if (targetName == p.name) {
                planes.push(p)
            }
        }
    }
    
    deckPlanes = JSON.parse(JSON.stringify(planes));

    document.getElementById("planeswalkBtn").innerHTML = `Planeswalk in "${deckName}"`;
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