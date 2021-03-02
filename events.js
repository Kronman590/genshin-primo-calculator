var events = [["Wish Upon a Lantern","2021-02-26",100],
["Night Sky's Grace","2021-02-26",160],
["Night Sky's Grace","2021-02-28",160],
["Mihoyo Web Login","2021-03-01",100],
["Night Sky's Grace","2021-03-02",160],
["Hu Tao Trial","2021-03-03",20],
["Vishaps and Where to Find Them","2021-03-05",20],
["Vishaps and Where to Find Them","2021-03-06",20],
["Vishaps and Where to Find Them","2021-03-07",20],
["Mihoyo Web Login","2021-03-07",20],
["Vishaps and Where to Find Them","2021-03-08",20],
["Vishaps and Where to Find Them","2021-03-09",20],
["Vishaps and Where to Find Them","2021-03-10",20],
["Vishaps and Where to Find Them","2021-03-11",20],
["Vishaps and Where to Find Them","2021-03-12",20],
["Mihoyo Web Login","2021-03-14",20],
["Venti Trial","2021-03-17",20],
["Mihoyo Web Login","2021-03-21",20]];

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