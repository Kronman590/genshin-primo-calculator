var events = [["2.5 Patch Compensation","2022-02-15",600],
["Yae Trial","2022-02-15",20],
["Mihoyo Web Login","2022-02-17",20],
["Three Realms Gateway Offering","2022-02-17",100],
["Three Realms Gateway Offering","2022-02-19",100],
["Three Realms Gateway Offering","2022-02-21",100],
["Mihoyo Web Login","2022-03-03",20],
["Raiden/Kokomi Trial","2022-03-08",40],
["Mihoyo Web Login","2022-03-10",20],
["Mihoyo Web Login","2022-03-17",20],
["2.6 Livestream Codes","2022-03-18",300],
["Divine Ingenuity","2022-03-21",420],
["Of Drink A-Dreaming","2022-03-21",420],
["Hyakunin Ikki","2022-03-21",420],
["2.6 Patch Compensation","2022-03-29",600],];

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
