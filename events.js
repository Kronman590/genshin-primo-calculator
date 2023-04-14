var events = [
["3.6 Patch Compensation","2023-04-11",600],
["Nilou/Nahida Trial","2023-04-11",40],
["Nahida Story Quest 2","2023-04-12",60],
["Brewing Developments","2023-04-13",120],
["Brewing Developments","2023-04-15",90],
["Mihoyo Web Login","2023-04-17",20],
["Brewing Developments","2023-04-17",90],
["Brewing Developments","2023-04-19",120],
["Fulminating Sandstorm","2023-04-21",60],
["Fulminating Sandstorm","2023-04-22",60],
["Fulminating Sandstorm","2023-04-23",60],
["Fulminating Sandstorm","2023-04-24",60],
["Fulminating Sandstorm","2023-04-25",60],
["Fulminating Sandstorm","2023-04-26",60],
["Fulminating Sandstorm","2023-04-27",60],
["A Parade of Providence","2023-04-27",250],
["A Parade of Providence","2023-04-29",250],
["A Parade of Providence","2023-05-01",250],
["Baizhu/Ganyu Trial","2023-05-02",40],
["A Parade of Providence","2023-05-03",250],
["Mihoyo Web Login","2023-05-03",20],
["Mihoyo Web Login","2023-05-10",20],
["3.7 Livestream Codes","2023-05-12",300],
["Mihoyo Web Login","2023-05-17",20],
["3.7 Patch Compensation","2023-05-23",600],
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
