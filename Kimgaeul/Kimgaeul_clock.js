

function Clock() {

    let nowtime = new Date();
    let hour = nowtime.getHours();
    let minute = nowtime.getMinutes();
    let second = nowtime.getSeconds();
    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second
}


function add_0(time) {
	if ( parseInt(time<10)) {
		return "0" + time;
	}

	 else {
		return time;
	}
}


	Clock();
	setInterval (Clock, 1000);

// <-->


function displayDate() {
	let today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth() + 1;
	let day = today.getDate();

  document.getElementById("date").innerHTML = year + "년 " + month + "월 " + day + "일";;
}


