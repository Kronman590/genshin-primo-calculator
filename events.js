var events = [
["3.0 Patch Compensation","2022-08-23",600],
["Tighnari/Zhongli Trial","2022-08-23",40],
["Chapter 3 Archon Quest 1/2","2022-08-23",120],
["Tighnari Story Quest","2022-08-24",60],
["Graven Innocence","2022-08-24",360],
["Graven Innocence","2022-08-25",120],
["Graven Innocence","2022-08-26",40],
["Graven Innocence","2022-08-27",200],
["Graven Innocence","2022-08-28",40],
["Graven Innocence","2022-08-29",40],
["Graven Innocence","2022-08-30",220],
["Graven Innocence","2022-09-02",40],
["Mihoyo Web Login","2022-09-03",20],
["Fayze Trials","2022-09-03",420],
["Mihoyo Web Login","2022-09-10",20],
["Tablet Analytics","2022-09-10",420],
["Ganyu/Kokomi Trial","2022-09-13",40],
["3.1 Livestream Codes","2022-09-16",300],
["Mihoyo Web Login","2022-09-17",20],
["Lost Riches","2022-09-17",420],
["3.1 Patch Compensation","2022-09-27",600],
];

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
