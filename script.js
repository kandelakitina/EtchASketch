function createGrid(parent, n) {
    if (n > 100) throw Error("Width's too high. Only <100 is accepted");
    let container = document.querySelector(parent);
    container.innerHTML = "";

    const blockSize = 100 / n;

    for (let i = 0; i < n * n; i++) {
        let div = document.createElement("div");
        div.classList.add("block");
        div.style.width = `${blockSize}%`;
        container.appendChild(div);
    }
}

createGrid(".container", 50);

function getRandomColor() {
    const rand = () => Math.floor(Math.random() * 256);
    return `rgb(${rand()}, ${rand()}, ${rand()})`;
}

let container = document.querySelector(".container");
container.addEventListener("mouseover", (e) => {
    let div = e.target.closest(".block");
    if (!div) return;
    if (!container.contains(div)) return;
    e.target.style.background = getRandomColor();
})

let button = document.querySelector(".button");
button.addEventListener("click", (e) => {
    let width = +prompt("Enter width", 5);
    createGrid(".container", width);
})