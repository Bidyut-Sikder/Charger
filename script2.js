


console.log('bidyut sikder')


const check = document.getElementById('show')
const charge = document.getElementById('charge')


navigator.getBattery().then(function (battery) {
    // Battery level is between 0 and 1, so we multiply it by 100 to get in percents
    console.log("Battery level: " + battery.level * 100 + "%");
    const volume = "Battery level: " + battery.level * 100 + "%"
    check.innerHTML = volume
});


navigator.getBattery().then(function (battery) {
    if (battery.charging) {
        console.log("Battery is charging");
        const charging = "Battery is charging"
        charge.innerHTML = charging
    } else {
        console.log("Battery is discharging");
        const notCharging = "Battery is not charging"
        charge.innerHTML = notCharging

    }
});



var players = [{ name: "Tyler", score: 22 }, { name: "Ryan", score: 41 }];
localStorage.setItem('players', JSON.stringify(players));
console.log(JSON.parse(localStorage.getItem('players')));
   // [ Object { name: "Tyler", score: 22 }, Object { name: "Ryan", score: 41 } ]







