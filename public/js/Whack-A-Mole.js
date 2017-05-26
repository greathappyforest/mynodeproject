var time = 0;


function Reset() {
    score = 0;
    time = 60;
    hide("Over");
    hide("mouse1");
    hide("mouse2");
    hide("mouse3");
    hide("mouse4");
    hide("mouse5");
    hide("mouse6");
    hide("mouse7");
    hide("mouse8");
    hide("mouse9");
    hide("mouse10");
    hide("mouse11");
    hide("mouse12");
    hide("mouse13");
    hide("mouse14");
    hide("mouse15");
    hide("mouse16");
    document.getElementById("score").innerHTML = "Score:" + 0;
    document.getElementById("timebar").innerHTML = "Time:" + 60;

}


function start() {
    //判断计时器是否处于关闭状态
    if (time == 0) {
        //设定间隔时间（秒） 
        time = 60;
        Reset();
        //启动计时器，倒计时time秒后自动关闭计时器。
        var index = setInterval(function () {
            if (time == 0) {
                clearInterval(index);
                document.getElementById("timebar").innerHTML = "Time:" + time;
                show("Over");
            } else {
                var id = pickid(time);
                show(id);
                document.getElementById("timebar").innerHTML = "Time:" + time;
                time--;
            }
        }, 1000);
    }
}

function delay() {
    var t = Math.random() * 400 + 700;
    setTimeout(console.log("11"), t);
}

function hide(id) {
    document.getElementById(id).style.visibility = 'hidden';
    return ("hidden");
}


function show(id) {
    document.getElementById(id).style.visibility = 'visible';
    var t = Math.random() * 400 + 500;
    setTimeout(function () {
        hide(id);
    }, t);
}


function pickid(RemainingTime) {
    if (RemainingTime != 0) {
        var rand1 = Math.round(Math.random() * 16);
        if (rand1 == 0) {
            rand1 = 1
        }
        var rand2 = Math.round(Math.random() * 2);
        var id = "mouse" + rand1;
        // console.log(rand1, rand2, id);
        return id;
    }

}

var score = 0;
var totalScore = 0;

function AddScore(RemainingTime) {
    if (RemainingTime != 0) {
        score = score + 1;
        console.log(score);
        document.getElementById("score").innerHTML = "Score:" + score;
    }
    var totalScore = score;
    return totalScore;
}
