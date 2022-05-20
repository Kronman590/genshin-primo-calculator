var events = [["Spices from the West","2022-05-14",60],
["Spices from the West","2022-05-15",60],
["Spices from the West","2022-05-16",60],
["Mihoyo Web Login","2022-04-17",20],
["Spices from the West","2022-05-17",60],
["Spices from the West","2022-05-18",60],
["Delay Compensation","2022-05-18",400],
["Spices from the West","2022-05-19",60],
["Spices from the West","2022-05-20",60],
["2.7 Livestream Codes","2022-05-20",300],
["Delay Compensation","2022-05-25",400],
["2.7 Patch Compensation","2022-05-31",600],
["Yelan/Xiao Trial","2022-05-31",40],
["Perilous Trail","2022-06-10",600],
["A Muddy Bizarre Adventure","2022-06-17",420],
["Itto Trial","2022-06-21",40],
["Glorious Drumalong Festival","2022-07-12",420],
["Core of the Apparatus","2022-07-12",420],
["2.8 Livestream Codes","2022-07-01",300],
["2.8 Patch Compensation","2022-07-12",600],];

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
