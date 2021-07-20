var events = [["2.0 Patch Compensation","2021-07-20",600],
["Ayaka Trial","2021-07-20",20],
["Thunder Sojourn","2021-07-22",150],
["Thunder Sojourn","2021-07-24",150],
["Thunder Sojourn","2021-07-27",150],
["Thunder Sojourn","2021-07-30",150],
["Mihoyo Web Login","2021-08-06",20],
["Lost Riches", "2021-08-06", 60],
["Lost Riches", "2021-08-07", 60],
["Lost Riches", "2021-08-08", 60],
["Lost Riches", "2021-08-09", 60],
["Lost Riches", "2021-08-10", 60],
["Yoimiya Trial","2021-08-10",20],
["Lost Riches", "2021-08-11", 60],
["Lost Riches", "2021-08-12", 60],
["Mihoyo Web Login","2021-08-13",20],
["Mihoyo Web Login","2021-08-20",20],
["2.1 Livestream Codes","2021-08-20",300],
["Theater Mechanicus","2021-08-31",420],
["Phantom Flow","2021-08-31",420],
["2.1 Patch Compensation","2021-08-31",600],];

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