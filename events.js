var events = [["2.2 Patch Compensation","2021-10-12",600],
["Childe Trial","2021-10-12",20],
["2.2 Hangouts (Permanent)","2021-10-12",240],
["Tuned to the World's Sounds","2021-10-15",60],
["Tuned to the World's Sounds","2021-10-16",60],
["Tuned to the World's Sounds","2021-10-17",60],
["Mihoyo Web Login","2021-10-17",20],
["Tuned to the World's Sounds","2021-10-18",60],
["Tuned to the World's Sounds","2021-10-19",60],
["Tuned to the World's Sounds","2021-10-20",60],
["Tuned to the World's Sounds","2021-10-21",60],
["Labyrinth Warriors","2021-10-21",150],
["Labyrinth Warriors","2021-10-24",150],
["Labyrinth Warriors","2021-10-27",150],
["Labyrinth Warriors","2021-10-30",150],
["Hu Tao Trial","2021-11-02",20],
["Mihoyo Web Login","2021-11-03",20],
["Shadow of the Ancients","2021-11-05",120],
["Shadow of the Ancients","2021-11-07",120],
["Shadow of the Ancients","2021-11-09",180],
["Mihoyo Web Login","2021-11-10",20],
["2.3 Livestream Codes","2021-11-12",300],
["Dreams of Bloom","2021-11-20",420],
["2.3 Patch Compensation","2021-11-23",600],];

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