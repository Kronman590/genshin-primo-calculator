var events = [
["Mihoyo Web Login","2023-01-17",20],
["3.4 Patch Compensation","2023-01-17",600],
["AlHaitham/Xiao Trial","2023-01-17",40],
["AlHaitham Story Quest","2023-01-17",60],
["May Fortune Find You","2023-01-19",160],
["The Exquisite Night Chimes","2023-01-19",200],
["Mihoyo Web Login","2023-01-19",20],
["May Fortune Find You","2023-01-21",320],
["The Exquisite Night Chimes","2023-01-21",200],
["Mihoyo Web Login","2023-01-21",20],
["May Fortune Find You","2023-01-23",320],
["The Exquisite Night Chimes","2023-01-23",200],
["Mihoyo Web Login","2023-01-23",20],
["May Fortune Find You","2023-01-25",800],
["The Exquisite Night Chimes","2023-01-25",200],
["Second Blooming","2023-01-31",80],
["Second Blooming","2023-02-01",80],
["Second Blooming","2023-02-02",80],
["Second Blooming","2023-02-03",80],
["Mihoyo Web Login","2023-02-03",20],
["Second Blooming","2023-02-04",100],
["Iridescent Splendor","2023-02-05",160],
["HuTao/Yelan Trial","2023-02-07",40],
["Iridescent Splendor","2023-02-07",160],
["Iridescent Splendor","2023-02-09",160],
["Warrior's Spirit","2023-02-09",70],
["Mihoyo Web Login","2023-02-10",20],
["Warrior's Spirit","2023-02-10",70],
["Warrior's Spirit","2023-02-11",70],
["Warrior's Spirit","2023-02-12",70],
["Warrior's Spirit","2023-02-13",70],
["Warrior's Spirit","2023-02-14",70],
["Beetle Brawl","2023-02-16",80],
["Beetle Brawl","2023-02-17",80],
["Mihoyo Web Login","2023-02-17",20],
["3.5 Livestream","2023-02-17",300],
["Beetle Brawl","2023-02-18",80],
["Beetle Brawl","2023-02-19",80],
["Beetle Brawl","2023-02-20",100],
["3.5 Patch Compensation","2023-02-28",600],
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
