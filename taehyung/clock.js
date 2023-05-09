/*
innerHTML : DOM 요소로 가져온 HTML 코드를 js 내에서 변경한다
(openArea2.onclick의 onclick과 같이 앞에 .을 붙여 작성한다)
*/


// Clock 이라는 함수를 만들고 함수 안에 아래의 코드들을 작성하라

	// 1. Date 인스턴스를 nowTime이라는 변수에 저장하라
	
	// 2. hour이라는 변수에 Date의 인스턴스가 된, nowTime을 이용하여 시각 메소드를 불러온 것을 저장하라
	
	// 3. minute이라는 변수에 nowTime을 이용하여 분 메소드를 불러온 것을 저장하라

	// 4. second라는 변수에 nowTime을 이용하여 초 메소드를 불러온 것을 저장하라

	// 5. clock.html로부터 DOM 요소 접근 방식을 통해 clock id를 불러와서 .innerHTML을 붙인 코드에
	//    위에서 선언한 변수들을 이용하여 시각 : 분 : 초의 형태를 저장하라

// 함수를 닫고

// Clock 함수를 호출하라
function clock () {
	let nowTime = new Date();
	let hour = add_0(nowTime.getHours());
	let minute = add_0(nowTime.getMinutes());
	let second = add_0(nowTime.getSeconds());
	document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;
}
clock();

function add_0(time){
	if( parseInt(time) < 10 ) {
		return "0" + time;
	}
	
	else {
		
		return time;
	}
}
clock();
setInterval(clock,1000)

function day() {
	let today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth()+1;
	let date = today.getDate();
	document.getElementById("today").innerHTML=year+":"+month+":"+date+":";
}