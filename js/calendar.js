function createCalendar() {
	const today = new Date();
	const currentMonth = today.getMonth();
	const currentYear = today.getFullYear();
	const firstDay = new Date(currentYear, currentMonth, 1);
	const lastDay = new Date(currentYear, currentMonth + 1, 0);

	const calendarHeader = document.querySelector(".calendar-header");
	const calendarGrid = document.querySelector(".calendar-grid");

	// 월 표시
	calendarHeader.textContent = `${currentYear}년 ${currentMonth + 1}월`;

	// 요일 표시
	const days = ["일", "월", "화", "수", "목", "금", "토"];
	days.forEach((day) => {
		const dayDiv = document.createElement("div");
		dayDiv.textContent = day;
		calendarGrid.appendChild(dayDiv);
	});

	// 날짜 채우기
	for (let i = 0; i < firstDay.getDay(); i++) {
		const emptyDiv = document.createElement("div");
		calendarGrid.appendChild(emptyDiv);
	}

	for (let i = 1; i <= lastDay.getDate(); i++) {
		const dateDiv = document.createElement("div");
		dateDiv.textContent = i;
		if (i === today.getDate()) {
			dateDiv.classList.add("today");
		}
		calendarGrid.appendChild(dateDiv);
	}
}

createCalendar();
