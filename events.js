var events = [
["3.2 Patch Compensation","2022-11-01",600],
["Nahida/Yoimiya Trial","2022-11-01",40],
["Chapter 3 Archon Quest 5","2022-11-02",90],
["Nahida Story Quest","2022-11-03",60],
["Mihoyo Web Login","2022-11-03",20],
["Adventurer's Trial","2022-11-04",60],
["Adventurer's Trial","2022-11-05",60],
["Adventurer's Trial","2022-11-06",60],
["Adventurer's Trial","2022-11-07",60],
["Adventurer's Trial","2022-11-08",180],
["Fabulous Fungus","2022-11-10",330],
["Mihoyo Web Login","2022-11-10",20],
["Fabulous Fungus","2022-11-11",180],
["Fabulous Fungus","2022-11-12",180],
["Fabulous Fungus","2022-11-13",180],
["Fabulous Fungus","2022-11-14",60],
["Mihoyo Web Login","2022-11-17",20],
["Hypostasis Symphony","2022-11-17",60],
["Hypostasis Symphony","2022-11-18",60],
["Yae/Tartaglia Trial","2022-11-18",40],
["Hypostasis Symphony","2022-11-19",60],
["Hypostasis Symphony","2022-11-20",60],
["Hypostasis Symphony","2022-11-21",60],
["Hypostasis Symphony","2022-11-22",60],
["Hypostasis Symphony","2022-11-23",60],
["Outside the Canvas, Inside the Lens: Greenery Chapter","2022-11-24",60],
["3.3 Livestream","2022-11-25",300],
["Outside the Canvas, Inside the Lens: Greenery Chapter","2022-11-25",60],
["Outside the Canvas, Inside the Lens: Greenery Chapter","2022-11-26",60],
["Outside the Canvas, Inside the Lens: Greenery Chapter","2022-11-27",60],
["Outside the Canvas, Inside the Lens: Greenery Chapter","2022-11-28",60],
["Outside the Canvas, Inside the Lens: Greenery Chapter","2022-11-29",60],
["Outside the Canvas, Inside the Lens: Greenery Chapter","2022-11-30",60],
["Marvelous Merchandise","2022-11-25",40],
["Marvelous Merchandise","2022-11-26",40],
["Marvelous Merchandise","2022-11-27",40],
["Marvelous Merchandise","2022-11-28",40],
["Marvelous Merchandise","2022-11-29",140],
["Marvelous Merchandise","2022-11-30",40],
["Marvelous Merchandise","2022-12-01",40],
["Mihoyo Web Login","2022-12-03",20],
["3.3 Patch Compensation","2022-12-06",600],
["Wanderer/Itto Trial","2022-12-06",40],
["Chapter 3 Archon Interlude Quest","2022-12-07",60],
["Akitsu Kimodameshi","2022-12-09",250],
["Akitsu Kimodameshi","2022-12-10",250],
["Mihoyo Web Login","2022-12-10",20],
["Akitsu Kimodameshi","2022-12-11",250],
["Akitsu Kimodameshi","2022-12-12",250],
["Mihoyo Web Login","2022-12-17",20],
["Across the Wilderness","2022-12-21",420],
["Raiden/Ayato Trial","2022-12-27",40],
["Windtrace","2022-12-28",120],
["Windtrace","2022-12-29",60],
["Windtrace","2022-12-30",60],
["Windtrace","2022-12-31",60],
["Windtrace","2023-01-01",60],
["Windtrace","2023-01-02",60],
["Mihoyo Web Login","2023-01-03",20],
["Misty Dungeon: Realm of Sand","2023-01-04",140],
["Misty Dungeon: Realm of Sand","2023-01-06",140],
["3.4 Livestream","2023-01-06",300],
["Misty Dungeon: Realm of Sand","2023-01-08",140],
["Mihoyo Web Login","2023-01-10",20],
["Mihoyo Web Login","2023-01-17",20],
["3.4 Patch Compensation","2023-01-17",600],
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
