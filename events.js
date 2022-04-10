var events = [["2.6 Patch Compensation","2022-03-29",600],
["Ayato/Venti Trial","2022-03-29",40],
["Outside the Canvas Inside the Lens","2022-04-01",60],
["Outside the Canvas Inside the Lens","2022-04-02",60],
["Outside the Canvas Inside the Lens","2022-04-03",60],
["Mihoyo Web Login","2022-04-03",20],
["Outside the Canvas Inside the Lens","2022-04-04",60],
["Outside the Canvas Inside the Lens","2022-04-05",60],
["Outside the Canvas Inside the Lens","2022-04-06",60],
["Outside the Canvas Inside the Lens","2022-04-07",60],
["True Tales of the Violet Garden","2022-04-07",120],
["True Tales of the Violet Garden","2022-04-08",40],
["True Tales of the Violet Garden","2022-04-09",180],
["Mihoyo Web Login","2022-04-10",20],
["True Tales of the Violet Garden","2022-04-10",60],
["True Tales of the Violet Garden","2022-04-11",140],
["True Tales of the Violet Garden","2022-04-12",60],
["True Tales of the Violet Garden","2022-04-13",160],
["True Tales of the Violet Garden","2022-04-14",40],
["True Tales of the Violet Garden","2022-04-15",40],
["Mihoyo Web Login","2022-04-17",20],
["Ayaka Trial","2022-04-19",20],
["2.7 Livestream Codes","2022-04-29",300],
["Mihoyo Web Login","2022-05-03",20],
["Mihoyo Web Login","2022-05-10",20],
["Spices from the West","2022-05-10",420],
["Vibro Crystal Research","2022-05-10",420],
["2.7 Patch Compensation","2022-05-10",600],];

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
