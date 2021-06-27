var events = [["1.6 Patch Compensation","2021-06-08",600],
["Klee Trial","2021-06-08",20],
["Echoing Tales","2021-06-08",60],
["Midsummer Island Act 1","2021-06-08",150],
["Midsummer Island Act 2","2021-06-11",150],
["Echoing Tales","2021-06-11",300],
["Mihoyo Web Login","2021-06-13",20],
["Midsummer Island Act 3","2021-06-14",150],
["Midsummer Island Act 4","2021-06-17",150],
["Mihoyo Web Login","2021-06-20",20],
["Legend of the Vagabond Sword", "2021-06-25",60],
["Legend of the Vagabond Sword", "2021-06-26",60],
["Legend of the Vagabond Sword", "2021-06-27",60],
["Legend of the Vagabond Sword", "2021-06-28",60],
["Legend of the Vagabond Sword", "2021-06-29",60],
["Kazuha Trial","2021-06-29",20],
["Archon Quest Chapter 2 Pt 1","2021-06-29",60],
["Legend of the Vagabond Sword", "2021-06-30",60],
["Legend of the Vagabond Sword", "2021-07-01",60],
["Kaboomball Kombat", "2021-07-02", 300],
["Mihoyo Web Login","2021-07-06",20],
["2.0 Livestream Codes","2021-07-09",300],
["Never-Ending Battle", "2021-07-09", 300],
["Mihoyo Web Login","2021-07-13",20],
["Mihoyo Web Login","2021-07-20",20],
["2.0 Patch Compensation","2021-07-20",600]];

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