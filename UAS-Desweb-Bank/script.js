// Transisi scroll
window.addEventListener("scroll", muncul);

function muncul() {
let elements = document.querySelectorAll(".efek-scroll");
for (let i = 0; i < elements.length; i++) {
    let tinggiLayar = window.innerHeight;
    let jarakAtasElemen = elements[i].getBoundingClientRect().top;
    let ukuranScroll = 150;
    if (jarakAtasElemen < tinggiLayar - ukuranScroll) {

    elements[i].classList.add("result-scroll");
    }
    // jika tidak maka hapus class tampil
    else {
    elements[i].classList.remove("result-scroll");
    }
}
}