const images = [
	"0.jpg",
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// js에서 생성해서 html에 추가

const bgImage = document.createElement("img"); // 일단 만듦

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage");
document.body.appendChild(bgImage);
