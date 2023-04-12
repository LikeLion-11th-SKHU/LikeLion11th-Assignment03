function clock() {
    let nowTime = new Date();
    let hour = add_0(nowTime.getHours());
    let minute = add_0(nowTime.getMinutes());
    let second = add_0(nowTime.getSeconds());
    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;
}

clock();
setInterval(clock, 1000);


function add_0(time) {
    if(parseInt(time) < 10) {
        return "0" + time;
    }
    else{
        return time;
    }
}

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var date = date.getDate();
document.getElementById("date").innerHTML = year + "년 " + month + "월 " + date + "일";