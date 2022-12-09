var events = [
["3.3 Patch Compensation","2022-12-06",600],
["Wanderer/Itto Trial","2022-12-06",40],
["Chapter 3 Archon Interlude Quest","2022-12-07",60],
["Misty Dungeon: Realm of Sand","2022-12-09",120],
["Mihoyo Web Login","2022-12-10",20],
["The Game Awards Award","2022-12-10",200],
["Misty Dungeon: Realm of Sand","2022-12-11",120],
["The Game Awards Award","2022-12-11",200],
["The Game Awards Award","2022-12-12",200],
["The Game Awards Award","2022-12-13",200],
["Misty Dungeon: Realm of Sand","2022-12-13",180],
["Akitsu Kimodameshi","2022-12-16",250],
["Akitsu Kimodameshi","2022-12-17",250],
["Akitsu Kimodameshi","2022-12-18",250],
["Akitsu Kimodameshi","2022-12-19",250],
["Mihoyo Web Login","2022-12-17",20],
["Across the Wilderness","2022-12-21",420],
["Raiden/Ayato Trial","2022-12-27",40],
["Windtrace","2022-12-28",120],
["Windtrace","2022-12-29",60],
["Windtrace","2022-12-30",60],
["Windtrace","2022-12-31",60],
["Windtrace","2023-01-01",60],
["Windtrace","2023-01-02",60],
["Mihoyo Web Login","2023-01-03",20],
["3.4 Livestream","2023-01-06",300],
["Mihoyo Web Login","2023-01-10",20],
["Mihoyo Web Login","2023-01-17",20],
["3.4 Patch Compensation","2023-01-17",600],
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
