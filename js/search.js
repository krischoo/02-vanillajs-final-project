const searchNaver = document.querySelector("#search-naver");
const searchGoogle = document.querySelector("#search-google");
const naverInput = document.querySelector("#search-naver input");
const googleInput = document.querySelector("#search-google input");

searchNaver.addEventListener("submit", () => {
	window.open(
		`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${naverInput.value}`,
		"_blank"
	);
});
searchGoogle.addEventListener("submit", () => {
	window.open(`https://www.google.com/search?q=${googleInput.value}`, "_blank");
});
