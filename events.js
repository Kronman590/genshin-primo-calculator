var events = [
["3.5 Patch Compensation","2023-02-28",600],
["Dehya/Cyno Trial","2023-02-28",40],
["Dehya Story Quest","2023-03-01",60],
["Archon Quest Chapter III: Act VI - Caribert","2023-03-02",245],
["Faruzan Hangout","2023-03-03",60],
["Mihoyo Web Login","2023-03-03",20],
["Windblume's Breath","2023-03-03",250],
["Windblume's Breath","2023-03-04",100],
["Windblume's Breath","2023-03-05",250],
["Windblume's Breath","2023-03-06",100],
["Windblume's Breath","2023-03-07",250],
["Mihoyo Web Login","2023-03-10",20],
["Vibro-Crystal Verification","2023-03-14",70],
["Vibro-Crystal Verification","2023-03-15",70],
["Vibro-Crystal Verification","2023-03-16",70],
["Vibro-Crystal Verification","2023-03-17",70],
["Mihoyo Web Login","2023-03-17",20],
["Vibro-Crystal Verification","2023-03-18",70],
["Vibro-Crystal Verification","2023-03-19",70],
["Ayaka/Shenhe Trial","2023-03-21",40],
["Fungus Mechanicus","2023-03-21",70],
["Fungus Mechanicus","2023-03-22",50],
["Fungus Mechanicus","2023-03-23",50],
["Fungus Mechanicus","2023-03-24",50],
["Fungus Mechanicus","2023-03-25",50],
["Fungus Mechanicus","2023-03-26",50],
["Fungus Mechanicus","2023-03-27",50],
["Fungus Mechanicus","2023-03-27",70],
["3.6 Livestream Codes","2023-03-31",300],
["Spices from the West: Northerly Search","2023-03-31",60],
["Spices from the West: Northerly Search","2023-04-01",60],
["Spices from the West: Northerly Search","2023-04-02",60],
["Spices from the West: Northerly Search","2023-04-03",60],
["Mihoyo Web Login","2023-04-03",20],
["Spices from the West: Northerly Search","2023-04-04",60],
["Spices from the West: Northerly Search","2023-04-05",60],
["Mihoyo Web Login","2023-04-10",20],
["3.6 Patch Compensation","2023-04-11",600],
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
