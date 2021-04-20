var events = [["Marvelous Merchandise","2021-04-16",40],
["Marvelous Merchandise","2021-04-17",40],
["Marvelous Merchandise","2021-04-18",40],
["Marvelous Merchandise","2021-04-19",40],
["Marvelous Merchandise","2021-04-20",140],
["Mihoyo Web Login","2021-04-20",20],
["Marvelous Merchandise","2021-04-21",40],
["Marvelous Merchandise","2021-04-22",40],
["1.5 Patch Compensation","2021-04-27",600],
["Zhongli Trial","2021-04-27",20],
["Mihoyo Web Login","2021-05-06",20],
["Mihoyo Web Login","2021-05-13",20],
["Eula Trial","2021-05-18",20],
["Mihoyo Web Login","2021-05-20",20],
["1.6 Livestream Codes","2021-05-26",300],
["Energy Amplifier Initiation","2021-05-30",0],
["Battlefront: Misty Dungeon","2021-05-30",70],
["Battlefront: Misty Dungeon","2021-05-30",70],
["Battlefront: Misty Dungeon","2021-05-30",70],
["Mimi Tomo","2021-05-30",40],
["Mimi Tomo","2021-05-30",40],
["Mimi Tomo","2021-05-30",40],
["Mimi Tomo","2021-05-30",40],
["Mimi Tomo","2021-05-30",40],
["Mimi Tomo","2021-05-30",40],
["Mimi Tomo","2021-05-30",40],
["Windtrace","2021-05-30",0],
["1.6 Patch Compensation","2021-06-08",600]];

function createTable() {
    var table = document.getElementById("events");
    var eventNames = [];
    for (var e in events) {
        if(eventNames.indexOf(events[e][0]) < 0)
            eventNames.push(events[e][0]);
    }
    for (var n in eventNames) {
        var row = table.insertRow(-1);
        ename = eventNames[n];
        row.insertCell(0).innerHTML = ename;
        var gems = 0;
        var start = "";
        var end = "";
        for (e in events) {
            if(events[e][0] == ename) {
                gems += events[e][2];
                end = events[e][1];
                if(start == "") {
                    start = events[e][1];
                }
            }
        }
        row.insertCell(1).innerHTML = start;
        row.insertCell(2).innerHTML = end;
        row.insertCell(3).innerHTML = gems;
    }
}

var past_events = [["Contending Tides","2021-04-02",60],
["Contending Tides","2021-04-03",60],
["Contending Tides","2021-04-04",60],
["Contending Tides","2021-04-05",60],
["Contending Tides","2021-04-06",60],
["Mihoyo Web Login","2021-04-06",20],
["Contending Tides","2021-04-07",60],
["Contending Tides","2021-04-08",60],
["Wishful Drops","2021-04-09",120],
["Wishful Drops","2021-04-10",60],
["Wishful Drops","2021-04-11",60],
["Wishful Drops","2021-04-12",60],
["Wishful Drops","2021-04-13",120],
["Archon Quest Act 1 Ch 4","2021-04-12",60],
["Mihoyo Web Login","2021-04-13",20],
["1.5 Livestream Codes","2021-04-16",300],
["Marvelous Merchandise","2021-04-16",40],
["Marvelous Merchandise","2021-04-17",40],
["Marvelous Merchandise","2021-04-18",40],
["Marvelous Merchandise","2021-04-19",40],
["Marvelous Merchandise","2021-04-20",140],
["Mihoyo Web Login","2021-04-20",20],
["Marvelous Merchandise","2021-04-21",40],
["Marvelous Merchandise","2021-04-22",40],
["1.5 Patch Compensation","2021-04-28",600]];