function Clock() {
	let nowTime = new Date();
	let hour = add_0(nowTime.getHours());
	let minute = add_0(nowTime.getMinutes());
	let second = add_0(nowTime.getSeconds());

    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second ;
}

Clock()

setInterval(Clock, 1000); 

function add_0(time) {
    parseInt(time);
    if(time<10) {
        time = "0" + time;
        return time;
    }
    else {
        return time;
    }
}

function Day() {
	let nowTime = new Date();
	let year = nowTime.getFullYear();
	let month = (nowTime.getMonth()+1);
	let date = nowTime.getDate();

    document.getElementById("day").innerHTML = year + "년 " + month + "월 " + date + "일" ;
}

document.getElementById("date").addEventListener('click',Day);

