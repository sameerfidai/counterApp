let oldCount = localStorage.getItem("count");

if (oldCount != null) {
    count.innerText = oldCount;
}

function increment() {
    let count = document.getElementById("count");
    count.innerText++;
    localStorage.setItem("count", count.innerText);
}

function reset() {
    let count = document.getElementById("count");
    count.innerText = 0;
    localStorage.setItem("count", count.innerText);
}
