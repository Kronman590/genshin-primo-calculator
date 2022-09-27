var events = [
["3.1 Patch Compensation","2022-09-27",600],
["Cyno/Venti Trial","2022-09-27",40],
["Chapter 3 Archon Quest 3/4","2022-09-27",120],
["Anniversary Reward","2022-09-27",400],
["Anniversary Reward","2022-09-28",400],
["Cyno Story Quest","2022-09-28",60],
["Anniversary Reward","2022-09-29",400],
["Of Ballad and Brews","2022-09-29",300],
["Mihoyo Web Login","2022-09-29",20],
["Anniversary Reward","2022-09-30",400],
["Mihoyo Web Login","2022-10-01",20],
["Of Ballad and Brews","2022-10-02",300],
["Mihoyo Web Login","2022-10-03",20],
["Mihoyo Web Login","2022-10-03",20],
["Of Ballad and Brews","2022-10-05",400],
["Mihoyo Web Login","2022-10-10",20],
["Hyakunin Ikki","2022-10-10",70],
["Hyakunin Ikki","2022-10-11",70],
["Hyakunin Ikki","2022-10-12",70],
["Hyakunin Ikki","2022-10-13",70],
["Hyakunin Ikki","2022-10-14",70],
["Nilou/Albedo Trial","2022-10-14",40],
["Path of Gleaming Jade","2022-10-14",160],
["Nilou Story Quest","2022-10-14",60],
["Hyakunin Ikki","2022-10-15",70],
["Path of Gleaming Jade","2022-10-16",320],
["Mihoyo Web Login","2022-10-17",20],
["Wind Chaser","2022-10-17",420],
["Path of Gleaming Jade","2022-10-18",320],
["Path of Gleaming Jade","2022-10-20",800],
["3.2 Livestream","2022-10-21",300],
["Star-Seeker's Sojourn","2022-10-24",420],
["3.2 Patch Compensation","2022-11-01",600],
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
