/*
innerHTML : DOM 요소로 가져온 HTML 코드를 js 내에서 변경한다
(openArea2.onclick의 onclick과 같이 앞에 .을 붙여 작성한다)
*/
function Clock(){

    // Clock 이라는 함수를 만들고 함수 안에 아래의 코드들을 작성하라
    
        // 1. 시계
        let nowTime = new Date();
        let hour = add_0(nowTime.getHours());
        let minute = add_0( nowTime.getMinutes());
        let second = add_0(nowTime.getSeconds());
      document.getElementById("clock").innerHTML = hour + ":" + minute +":"+second;
      
    
    // 함수를 닫고
    }
    // Clock 함수를 호출하라 자바스크립트에서 1000이 1초임
    Clock();
    setInterval(Clock,1000); 
    /*
    parseInt() : 내장객체로, 무슨 형태의 수가 들어오든 정수로 변환한다
    */
    
    
    // time이라는 매개변수를 가지는 add_0이라는 이름의 함수를 만들고, add_0 함수 안에 아래의 코드들을 작성하라
    function add_0(time){
    
    
    
        // add_0 함수 안에 아래의 코드들을 작성해라
    
        // 아래의 설명을 따라 if else문을 작성하라
        
    
        // if문과 if문의 조건인 "parseInt()를 이용하여 정수가 된 time이 10보다 작을 때"를 작성하라
        if(parseInt(time)<10){
    
            // if문의 명령 : 문자열 0을 time 앞에 붙여서 return하라
            
    
                return "0"+time;
            }
        
            
        // if문을 닫고, else문을 작성하라
        else{
            return time;
        }
            
        
        
    
            // else문의 명령 : time을 return하라
            
    }

function Dates(){
// 2.날짜
let nowDate = new Date();
let year = nowDate.getFullYear();
let month = nowDate.getMonth() +1 ;
let day = nowDate.getDate();

document.getElementById("date").innerHTML = year + "년"+" "+ month+"월"+" "+day+"일";
 
}
   