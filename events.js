var events = [
["3.8 Patch Compensation","2023-07-04",600],
["Klee/Eula Trial","2023-07-04",40],
["Kaeya Hangout","2023-07-05",60],
["Secret Summer Paradise","2023-07-04",90],
["Secret Summer Paradise","2023-07-05",30],
["Secret Summer Paradise","2023-07-06",30],
["Secret Summer Paradise","2023-07-07",220],
["Secret Summer Paradise","2023-07-08",30],
["Secret Summer Paradise","2023-07-09",220],
["Mihoyo Web Login","2023-07-10",20],
["Secret Summer Paradise","2023-07-11",260],
["Mihoyo Web Login","2023-07-17",20],
["Adventurer's Trials: Advanced","2023-07-20",90],
["Adventurer's Trials: Advanced","2023-07-21",90],
["Adventurer's Trials: Advanced","2023-07-22",90],
["Adventurer's Trials: Advanced","2023-07-23",90],
["Adventurer's Trials: Advanced","2023-07-24",60],
["Kokomi/Wanderer Trial","2023-07-25",40],
["Perilous Expedition","2023-07-26",100],
["Perilous Expedition","2023-07-27",80],
["Perilous Expedition","2023-07-28",80],
["Perilous Expedition","2023-07-29",80],
["Perilous Expedition","2023-07-30",80],
["Shared Sight","2023-08-02",70],
["Shared Sight","2023-08-03",70],
["Mihoyo Web Login","2023-08-03",20],
["Shared Sight","2023-08-04",70],
["4.0 Livestream Codes","2023-08-04",300],
["Shared Sight","2023-08-05",70],
["Shared Sight","2023-08-06",70],
["Shared Sight","2023-08-07",70],
["Mihoyo Web Login","2023-08-10",20],
["4.0 Patch Compensation","2023-08-15",600],
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
