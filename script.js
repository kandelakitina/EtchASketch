function createGrid(parent, n) {
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