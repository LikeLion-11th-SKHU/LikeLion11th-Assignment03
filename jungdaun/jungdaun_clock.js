/* 
innerHTML : DOM 요소로 가져온 HTML 코드를 js 내에서 변경한다
(openArea2.onclick의 onclick과 같이 앞에 .을 붙여 작성한다)
*/


// Clock 이라는 함수를 만들고 함수 안에 아래의 코드들을 작성하라
function Clock(){
    let nowTime = new Date();
    let hour = add_0(nowTime.getHours());
    let minute = add_0(nowTime.getMinutes());
    let second = add_0(nowTime.getSeconds());
    document.getElementById("clock").innerHTML = hour+":"+minute+":"+second;
}

Clock();
setInterval(Clock, 1000);

	// 1. Date 인스턴스를 nowTime이라는 변수에 저장하라
	
	// 2. hour이라는 변수에 Date의 인스턴스가 된, nowTime을 이용하여 시각 메소드를 불러온 것을 저장하라
	
	// 3. minute이라는 변수에 nowTime을 이용하여 분 메소드를 불러온 것을 저장하라
	
	// 4. second라는 변수에 nowTime을 이용하여 초 메소드를 불러온 것을 저장하라
	
	// 5. clock.html로부터 DOM 요소 접근 방식을 통해 clock id를 불러와서 .innerHTML을 붙인 코드에
	//    위에서 선언한 변수들을 이용하여 시각 : 분 : 초의 형태를 저장하라

// 함수를 닫고

// Clock 함수를 호출하라



/*
parseInt() : 내장객체로, 무슨 형태의 수가 들어오든 정수로 변환한다
*/

function add_0(time){
    time = parseInt(time);
    if(time < 10){
        return "0"+time;
    }
    else{
        return time;
    }
}
// time이라는 매개변수를 가지는 add_0이라는 이름의 함수를 만들고, add_0 함수 안에 아래의 코드들을 작성하라

	// add_0 함수 안에 아래의 코드들을 작성해라

	// 아래의 설명을 따라 if else문을 작성하라

	// if문과 if문의 조건인 "parseInt()를 이용하여 정수가 된 time이 10보다 작을 때"를 작성하라


		// if문의 명령 : 문자열 0을 time 앞에 붙여서 return하라

		
	// if문을 닫고, else문을 작성하라

		// else문의 명령 : time을 return하라



        
// Date
function Day(){
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    document.getElementById("date").innerHTML = year + "년 " + month + "월 " + date + "일 ";
}