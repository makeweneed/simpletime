async function updateTime(flag12) {

    const lang = 'en'
    locationText = 'Your Local Time'
    var dateObj = new Date()
    var currentDate = dateObj.toLocaleDateString(lang);
    if (flag12) {
        var currentTime = dateObj.toLocaleTimeString(lang);
    } else {
        var currentTime = dateObj.toLocaleTimeString(lang, {hour12: false});
    }
    document.getElementById("location").textContent = `${locationText}`;
    document.getElementById("date").textContent = `${currentDate}`;
    document.getElementById("time").textContent = `${currentTime}`;

    
    // console.log(`${timeText} ${currentTime}`)

    callbackFunc = setInterval(() => {
        var dateObj = new Date()
        var currentDate = dateObj.toLocaleDateString(lang);
        if (flag12) {
            var currentTime = dateObj.toLocaleTimeString(lang);
        } else {
            var currentTime = dateObj.toLocaleTimeString(lang, {hour12: false});
        };
        document.getElementById("date").textContent = `${currentDate}`;
        document.getElementById("time").textContent = `${currentTime}`;
    }, 1000);
}

updateTime(true);

//  darkmode
var darkFlag = 1;
function darkMode() {
    // console.log(darkFlag)
    const bodyTag = document.getElementsByTagName('body')[0];
    const timeContents = document.getElementById('time-contents');
    if (darkFlag == 1) {
        // console.log(timeContents)
        bodyTag.style.backgroundColor = 'black'
        timeContents.style.color = 'white'
        darkFlag = 0;
    } else {
        bodyTag.style.backgroundColor = 'white'
        timeContents.style.color = 'black'
        darkFlag = 1;
    };
};

// 24h board
var flag12h = 1;
function view24h() {
    clearInterval(callbackFunc);
    if (flag12h == 1) {
        updateTime(false);
        flag12h = 0;
    } else {
        updateTime(true);
        flag12h = 1;
    };
};