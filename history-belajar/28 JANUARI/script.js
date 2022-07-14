// document.getElementById

// const judul = document.getElementById("judul");

// Semua Property CSS bisa diakses disini
// judul.style.color = "green";
// judul.style.border = "5px solid green";
// judul.style.padding = "5rem";
// judul.style.textAlign = "center";

// document.getElementsByTagName

// const p = document.getElementsByTagName("p");

// Menggunakan manual Indexing
// p[1].style.backgroundColor = "green";
// p[1].style.color = "white";

// Menggunakan Perulangan

// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "green";
//   p[i].style.color = "white";
//   p[i].innerHTML = "Menggunakan Perulangan";
// }

// document.getElementsByClassName

// const p1 = document.getElementsByClassName("p1");

// p1.innerHTML = "red";

// Query Selector

const p4 = document.querySelector(" #b p");

p4.style.color = "green";
p4.style.fontSize = "5rem";
p4.style.border = "2px solid green";

const li2 = document.querySelector("section#b ul li:nth-child(2)");

li2.style.backgroundColor = "green";
li2.style.color = "white";
