const dateInfo = document.querySelector("#date");

function getDate() {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const dayOfWeek = date.toLocaleDateString("ko-KR", { weekday: "long" });
	dateInfo.innerText = `${year}년 ${month}월 ${day}일, ${dayOfWeek}`;
}

getDate();
