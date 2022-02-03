var events = [["Marvelous Merchandise","2021-12-27",40],
["Marvelous Merchandise","2021-12-28",40],
["Marvelous Merchandise","2021-12-29",40],
["Marvelous Merchandise","2021-12-30",40],
["Marvelous Merchandise","2021-12-31",140],
["Marvelous Merchandise","2022-1-01",40],
["Marvelous Merchandise","2022-1-02",40],
["Mihoyo Web Login","2022-01-03",20],
["2.4 Patch Compensation","2022-01-04",600],
["Xiao/Shenhe Trial","2022-01-04",40],
["2.4 Hangouts (Permanent)","2022-01-04",120],
["A Study in Potions","2022-01-07",140],
["A Study in Potions","2022-01-10",140],
["Mihoyo Web Login","2022-01-10",20],
["A Study in Potions","2022-01-13",140],
["Windtrace","2022-01-13",70],
["Windtrace","2022-01-14",70],
["Windtrace","2022-01-16",70],
["Windtrace","2022-01-17",70],
["Windtrace","2022-01-18",70],
["Windtrace","2022-01-19",70],
["Mihoyo Web Login","2022-01-17",20],
["Ganyu/Zhongli Trial","2022-01-25",40],
["Fleeting Colors in Flight","2022-01-25",200],
["May Fortune Find You","2022-01-25",160],
["Fleeting Colors in Flight","2022-01-27",200],
["May Fortune Find You","2022-01-27",320],
["May Fortune Find You","2022-01-29",320],
["May Fortune Find You","2022-01-31",800],
["Fleeting Colors in Flight","2022-01-31",200],
["Mihoyo Web Login","2022-02-03",20],
["2.5 Livestream Codes","2022-02-04",300],
["Eight Locales Over Mountains and Seas","2022-02-04",60],
["Eight Locales Over Mountains and Seas","2022-02-05",60],
["Eight Locales Over Mountains and Seas","2022-02-06",60],
["Eight Locales Over Mountains and Seas","2022-02-07",60],
["Eight Locales Over Mountains and Seas","2022-02-08",60],
["Eight Locales Over Mountains and Seas","2022-02-09",60],
["Flowing Lights and Colors","2022-02-09",160],
["Eight Locales Over Mountains and Seas","2022-02-10",60],
["Mihoyo Web Login","2022-02-10",20],
["Flowing Lights and Colors","2022-02-11",160],
["Flowing Lights and Colors","2022-02-13",160],
["2.5 Patch Compensation","2022-02-15",600],];

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
