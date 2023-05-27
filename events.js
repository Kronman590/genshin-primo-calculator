var events = [
["3.7 Patch Compensation","2023-05-23",600],
["Yoimiya/Yae Trial","2023-05-23",40],
["Yoimiya Story Quest 2","2023-05-24",60],
["Kaveh Hangout","2023-05-24",60],
["Duel! The Summoners Summit","2023-05-25",250],
["Duel! The Summoners Summit","2023-05-27",250],
["Duel! The Summoners Summit","2023-05-29",250],
["Duel! The Summoners Summit","2023-05-31",250],
["Mihoyo Web Login","2023-06-03",20],
["Divine Ingenuity","2023-06-08",140],
["Divine Ingenuity","2023-06-09",70],
["Divine Ingenuity","2023-06-10",70],
["Mihoyo Web Login","2023-06-10",20],
["Divine Ingenuity","2023-06-11",70],
["Divine Ingenuity","2023-06-12",70],
["Alhaitham/Kazuha Trial","2023-06-13",40],
["Feast of the Departed Warriors","2023-06-15",60],
["Feast of the Departed Warriors","2023-06-16",60],
["Mihoyo Web Login","2023-06-17",20],
["Feast of the Departed Warriors","2023-06-17",60],
["Feast of the Departed Warriors","2023-06-18",60],
["Feast of the Departed Warriors","2023-06-19",60],
["Fayz Trials: Hypothesis","2023-06-19",70],
["Feast of the Departed Warriors","2023-06-20",60],
["Fayz Trials: Hypothesis","2023-06-20",70],
["Feast of the Departed Warriors","2023-06-21",60],
["Fayz Trials: Hypothesis","2023-06-21",70],
["Fayz Trials: Hypothesis","2023-06-22",70],
["3.8 Livestream Codes","2023-06-23",300],
["Fayz Trials: Hypothesis","2023-06-23",70],
["Fayz Trials: Hypothesis","2023-06-24",70],
["Mihoyo Web Login","2023-07-03",20],
["3.8 Patch Compensation","2023-07-04",600],
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
