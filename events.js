var events = [["Mihoyo Web Login","2021-03-13",20],
["1.4 Patch Compentation","2021-03-16",300],
["Venti Trial","2021-03-16",20],
["Hangout Event 1","2021-03-16",60],
["Wanmin Web Event 1","2021-03-17",50],
["Hangout Event 2","2021-03-18",60],
["Login Event Day 3","2021-03-18",100],
["Wanmin Web Event 2","2021-03-19",50],
["Mihoyo Web Login","2021-03-20",20],
["Hangout Event 3","2021-03-20",60],
["Wanmin Web Event 3","2021-03-21",50],
["Hangout Event 4","2021-03-22",60],
["Login Event Day 7","2021-03-22",200]];

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