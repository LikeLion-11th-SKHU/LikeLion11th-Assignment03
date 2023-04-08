
function Clock() {
    let nowTime = new Date();
    let hour = add_0(nowTime.getHours());
    let minute = add_0(nowTime.getMinutes());
    let second = add_0(nowTime.getSeconds());

    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;

}

Clock();
setInterval(clock, 1000);



function add_0(time) {

    if(parseInt(time) < 10) {
        return "0" + time;
    }
    else {
        return time;
    }
}



function day() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    document.getElementById("today").innerHTML=year+"년"+month+"월"+date+"일";
}


