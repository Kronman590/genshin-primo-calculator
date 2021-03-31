var events = [["Contending Tides Day 1","2021-04-02",60],
["Contending Tides Day 2","2021-04-03",60],
["Contending Tides Day 3","2021-04-04",60],
["Contending Tides Day 4","2021-04-05",60],
["Contending Tides Day 5","2021-04-06",60],
["Mihoyo Web Login","2021-04-06",20],
["Mihoyo Web Login","2021-03-13",20],
["Mihoyo Web Login","2021-03-20",20]];

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