let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

function startCount() {
  timer = true;
  stopWatch();
}

const stopCount = () => {
  timer = false;
  //   stopWatch();
};

const resetCount = () => {
  timer = false;
  document.getElementById("hr").innerText = "00";
  document.getElementById("min").innerText = "00";
  document.getElementById("sec").innerText = "00";
  document.getElementById("count").innerText = "00";
};

function stopWatch() {
  let hrString = hr;
  let minString = min;
  let secString = sec;
  let countString = count;

  if (timer == true) {
    count = count + 1;
    if (count < 10) {
      countString = "0" + countString;
    }

    if (count === 99) {
      sec++;
      count = 0;
      if (sec < 10) {
        secString = "0" + secString;
        document.getElementById("sec").innerHTML = secString;
      }

      if (sec === 60) {
        min++;
        sec = 0;
        if (min < 10) {
          minString = "0" + minString;
        }

        document.getElementById("min").innerHTML = minString;
      }

      if (min === 60) {
        hr++;
        min = 0;
        sec = 0;
        if (hr < 10) {
          hrString = "0" + hrString;
        }
        document.getElementById("min").innerHTML = hrString;
      }
    }

    document.getElementById("count").innerHTML = countString;

    setTimeout("stopWatch()", 10);
  }
}
