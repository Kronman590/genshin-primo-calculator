var events = [["2.7 Patch Compensation","2022-05-30",600],
["Yelan/Xiao Trial","2022-05-30",40],
["Yelan Story Quest","2022-05-30",60],
["Perilous Trail","2022-05-30",240],
["Perilous Trail","2022-06-01",240],
["Perilous Trail","2022-06-02",240],
["Perilous Trail","2022-06-03",240],
["Mihoyo Web Login","2022-06-03",20],
["Mihoyo Web Login","2022-06-10",20],
["Glorious Drumalong Festival","2022-06-13",60],
["Glorious Drumalong Festival","2022-06-14",60],
["Glorious Drumalong Festival","2022-06-15",60],
["Glorious Drumalong Festival","2022-06-16",60],
["Glorious Drumalong Festival","2022-06-17",60],
["Mihoyo Web Login","2022-06-17",20],
["Glorious Drumalong Festival","2022-06-18",60],
["Glorious Drumalong Festival","2022-06-19",60],
["Itto Trial","2022-06-21",20],
["Kuki Hangout","2022-06-21",60],
["A Muddy Bizarre Adventure","2022-06-22",80],
["A Muddy Bizarre Adventure","2022-06-23",80],
["A Muddy Bizarre Adventure","2022-06-24",80],
["A Muddy Bizarre Adventure","2022-06-25",80],
["A Muddy Bizarre Adventure","2022-06-26",100],
["Core of the Apparatus","2022-06-29",70],
["Core of the Apparatus","2022-06-30",70],
["Core of the Apparatus","2022-07-01",70],
["2.8 Livestream Codes","2022-07-01",300],
["Core of the Apparatus","2022-07-02",70],
["Core of the Apparatus","2022-07-03",70],
["Mihoyo Web Login","2022-07-03",20],
["Core of the Apparatus","2022-07-04",70],
["Mihoyo Web Login","2022-07-10",20],
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
