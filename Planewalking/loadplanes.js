var planes = null;
window.onload = function () {
    fetch('./planes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Failed to fetch data:', error));
}

function loadNextPlane() {

}

function start() {
    if (planes != null) {
        var startDiv = document.getElementById("start");
        menuList.classList.add('hidden');
    }
}