const quotes = [
	{
		quote: "펭현숙 귄카",
		author: "박명수",
	},

	{
		quote: "아버지 나를 낳으시고 바지적삼 다 적시셨네",
		author: "박명수",
	},
	{
		quote: "아 진짜 바나나우유 그만 먹으라고!",
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
	{
		quote: "엮은이는 아는데요. 김경식씨",
		author: "길",
	},
	{
		quote: "아버지끼리 원터치 붙든가",
		author: "박명수",
	},
	{
		quote: "북쪽에 계신 아름다운 메리메리 리얼 카인드니스 여러분 안녕하십니까",
		author: "박명수",
	},
	{
		quote: "웃지마 민병관!",
		author: "정준하",
	},
	{
		quote: "야 마 모 또 없냐",
		author: "정준하",
	},
	{
		quote: "제발 가랑이 밑으로 들어가게 해주세요",
		author: "정준하",
	},
	{
		quote: "이름이 존이냐 박이냐",
		author: "정준하",
	},
	{
		quote: "하모예~ 와이러는데~ 이카는데~",
		author: "정준하",
	},
	{
		quote:
			"쓰~읍 좀 난 반댄데, 왜냐면 이친구 거기 맛들여가지고 나중에 싹쓸이 할지도",
		author: "데프콘",
	},
	{
		quote: "너무 꾸미고 오면 그분들이 도매상인 줄 알고 비싸게 받아",
		author: "데프콘",
	},
	{
		quote: "싸브레? 두 분은 연인이세요?",
		author: "유재석",
	},
	{
		quote: "필승! Yes I Can",
		author: "박명수",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
