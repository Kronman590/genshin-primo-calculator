var events = [["2.1 Patch Compensation","2021-08-31",600],
["Raiden Trial","2021-08-31",20],
["Hyakunin Ikki","2021-09-02",70],
["Mihoyo Web Login","2021-09-03",20],
["Hyakunin Ikki","2021-09-03",70],
["Hyakunin Ikki","2021-09-04",70],
["Hyakunin Ikki","2021-09-05",70],
["Hyakunin Ikki","2021-09-06",70],
["Hyakunin Ikki","2021-09-07",70],
["Mihoyo Web Login","2021-09-10",20],
["Lunar Realm","2021-09-10",60],
["Lunar Realm","2021-09-11",60],
["Lunar Realm","2021-09-12",60],
["Lunar Realm","2021-09-13",60],
["Lunar Realm","2021-09-14",60],
["Lunar Realm","2021-09-15",60],
["Lunar Realm","2021-09-16",60],
["Mihoyo Web Login","2021-09-17",20],
["Kokomi Trial","2021-09-21",20],
["Spectral Secrets","2021-09-26",420],
["Anni Daily Login","2021-09-28",160],
["Anni Daily Login","2021-09-30",320],
["Anni Daily Login","2021-10-02",320],
["Anni Daily Login","2021-10-04",800],
["Moonchase","2021-10-11",600],
["2.2 Livestream Codes","2021-10-01",300],
["2.2 Patch Compensation","2021-10-12",600],];

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