var events = [["2.3 Patch Compensation","2021-11-23",600],
["Eula/Albedo Trial","2021-11-23",40],
["2.3 Hangouts (Permanent)","2021-11-23",240],
["Shadows Amidst Snowstorms", "2021-11-25", 240],
["Shadows Amidst Snowstorms", "2021-11-28", 180],
["Shadows Amidst Snowstorms", "2021-12-01", 240],
["Mihoyo Web Login","2021-12-03",20],
["Shadows Amidst Snowstorms", "2021-12-04", 180],
["Playstation Award Celebration","2021-12-04",200],
["Playstation Award Celebration","2021-12-05",200],
["Playstation Award Celebration","2021-12-06",200],
["Playstation Award Celebration","2021-12-07",200],
["Shadows Amidst Snowstorms", "2021-12-07", 200],
["Bantan Sango Case Files", "2021-12-07", 120],
["Bantan Sango Case Files", "2021-12-09", 120],
["Mihoyo Web Login","2021-12-10",20],
["Mobile GOTY Award","2021-12-11",400],
["Bantan Sango Case Files", "2021-12-11", 120],
["Mobile GOTY Award","2021-12-12",400],
["Bantan Sango Case Files", "2021-12-13", 120],
["Mobile GOTY Award","2021-12-13",400],
["Mobile GOTY Award","2021-12-14",400],
["Itto Trial","2021-12-14",20],
["Itto Story Quest (Permanent)","2021-12-14",60],
["Mihoyo Web Login","2021-12-17",20],
["Misty Dungeon","2021-12-17",60],
["Misty Dungeon","2021-12-18",60],
["Misty Dungeon","2021-12-19",60],
["Misty Dungeon","2021-12-20",60],
["Misty Dungeon","2021-12-21",60],
["Misty Dungeon","2021-12-22",60],
["Misty Dungeon","2021-12-23",60],
["2.4 Livestream Codes","2021-12-24",300],
["Energy Amplifier","2021-12-24",70],
["Energy Amplifier","2021-12-25",70],
["Energy Amplifier","2021-12-26",70],
["Energy Amplifier","2021-12-27",70],
["Energy Amplifier","2021-12-28",70],
["Energy Amplifier","2021-12-29",70],
["Marvelous Merchandise","2021-12-27",40],
["Marvelous Merchandise","2021-12-28",40],
["Marvelous Merchandise","2021-12-29",40],
["Marvelous Merchandise","2021-12-30",40],
["Marvelous Merchandise","2021-12-31",140],
["Marvelous Merchandise","2022-1-01",40],
["Marvelous Merchandise","2022-1-02",40],
["2.4 Patch Compensation","2022-01-04",600],];

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