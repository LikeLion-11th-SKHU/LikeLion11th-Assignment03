function clock() {
  let nowTime = new Date();
  let hour = add_0(nowTime.getHours());
  let minute = add_0(nowTime.getMinutes());
  let second = add_0(nowTime.getSeconds());
  document.getElementById("clock").innerHTML =
    hour + ":" + minute + ":" + second;
}
clock();
setInterval(clock, 1000);

function add_0(time) {
  time = parseInt(time);
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}
let btn = document.getElementById("btn");
let day = document.getElementById("day");

function Text() {
  let Time = new Date();
  let year = Time.getFullYear();
  let month = Time.getMonth() + 1;
  let date = Time.getDate();

  day.innerHTML = year + "년 " + month + "월 " + date + "일";
  if (day.style.visibility != "visible") day.style.visibility = "visible";
  else day.style.visibility = "hidden";
}
btn.addEventListener("click", Text);
