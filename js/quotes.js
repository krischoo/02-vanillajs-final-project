const quotes = [
	{
		quote: "펭현숙 귄카",
		author: "박명수",
	},
	{
		quote: "감사의 표시는 돈으로 해라",
		author: "박명수",
	},
	{
		quote: "참을 인 세 번이면 호구",
		author: "박명수",
	},
	{
		quote: "티끌 모아 티끌",
		author: "박명수",
	},
	{
		quote: "죽음과 결혼은 미룰수록 좋다",
		author: "박명수",
	},
	{
		quote: "아버지 나를 낳으시고 바지적삼 다 적시셨네",
		author: "박명수",
	},
	{
		quote: "바나나맛 우유 그만 먹으라고",
		author: "길",
	},
	{
		quote: "나온다 그랬더라 어떻게 됐더라...?",
		author: "길",
	},
	{
		quote: "나 이런 게 무서워 하네",
		author: "길",
	},
	{
		quote: "당당하게 외국 나가서도 영어로 얘기합니다",
		author: "길",
	},
	{
		quote: "정발산기슧곰발냄새타령부인사잘해",
		author: "하하",
	},
	{
		quote: "정신차려이각박한세상속에서",
		author: "하하",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
