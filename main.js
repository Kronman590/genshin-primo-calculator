function calcGems() {
    result = "Gems you will be able to save is: ";
    today = processDate(new Date().toISOString().slice(0, 10));
    day = convertDay(new Date().toString().split(" ").slice(0,1)[0]);
    if(today[2] == Number(new Date().toString().split(" ").slice(2,3)[0])) {
        today = incrementDate(today);
    }
    day = ((day == 6) ? 0 : day + 1); 
    enddate = incrementDate(processDate(document.getElementById('enddate').value));
    if  (compareDates(today, enddate) > 0) {
        document.getElementById("output").innerHTML = "Please enter a date after today.";
        return;
    }
    welkinCheck = document.getElementById('welkin').checked;
    bpChecked = document.getElementById('battlepass').checked;
    shopChecked = document.getElementById('stardust').checked;
    abyss = calcAbyssGems([document.getElementById('floor9').value, document.getElementById('floor10').value, 
        document.getElementById('floor11').value, document.getElementById('floor12').value]);
    bplvl = parseFloat(document.getElementById('lvl').value);
    if(isNaN(bplvl)) bplvl = 0;

    gems = 0;
    eventDates = [];
    for (var e in events) {
        eventDates.push(processDate(events[e][1]));
    }
    while(compareDates(today, enddate) != 0) {
        gems += 60;
        if(welkinCheck) {
            gems += 90;
        }
        if(shopChecked && today[2] == 1) {
            gems += 160*5;
        }
        if(abyss > 0 && (today[2] == 1 || today[2] == 16)) {
            gems += abyss;
        }
        if(day == 1 && bpChecked) {
            if(bplvl < 40)
                gems += 160;
            else if(bplvl < 50)
                gems += 680;
            bplvl += 10;
        }
        gems += eventGems(today);
        today = incrementDate(today);
        day = ((day == 6) ? 0 : day + 1); 
    }
    primo_c = document.getElementById('primo_c').value;
    if (primo_c == "") {
        primo_c = 0;
    } else {
        primo_c = parseInt(primo_c);
    }
    gems += primo_c;
    result += (gems + "<br>");
    result += ("That's " + Math.trunc(gems / 160) + " pulls!");

    document.getElementById("output").innerHTML = result;
}

function processDate(d) {
    d = d.split("-");
    return d.map(Number);
}

function incrementDate(d) {
    ret_d = [0, 0, 0];
    OddDays = [1, 3, 5, 7, 8, 10, 12];
    EvenDays = [4, 6, 9, 11];
    max = 0;
    if(OddDays.indexOf(d[1]) > -1) {
        max = 31;
    } else if(EvenDays.indexOf(d[1]) > -1) {
        max = 30;
    } else {
        if((d[0] % 4) == 0) {
            max = 29;
        } else {
            max = 28;
        }
    }
    if(d[2] < max) {
        ret_d[2] = d[2]+1;
        ret_d[1] = d[1];
        ret_d[0] = d[0];
    } else {
        ret_d[2] = 1;
        if(d[1] < 12) {
            ret_d[1] = d[1]+1;
            ret_d[0] = d[0];
        } else {
            ret_d[1] = 1;
            ret_d[0] = d[0]+1;
        }
    }
    return ret_d;
}

function compareDates(d1, d2) {
    if (d1[0] > d2[0] || 
        (d1[0] == d2[0] && d1[1] > d2[1]) || 
        (d1[0] == d2[0] && d1[1] == d2[1] && d1[2] > d2[2])) 
        return 1;
    else if (d1[0] < d2[0] || 
        (d1[0] == d2[0] && d1[1] < d2[1]) || 
        (d1[0] == d2[0] && d1[1] == d2[1] && d1[2] < d2[2])) 
        return -1;
    else if (d1[0] == d2[0] && d1[1] == d2[1] && d1[2] == d2[2])
        return 0;
    else 
        return NaN;
}

function askBPLevel() {
    var checkBox = document.getElementById("battlepass");
    var text = document.getElementById("bplvl");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function calcAbyssGems(arr) {
    ret = 0;
    for(var f in arr) {
        f = arr[f].split(" ");
        if(!isNaN(f[0])) {
            ret += (+f[0] * 50 / 3);
        }
    }
    return ret;
}

function convertDay(day) {
    if(day == "Sun") return 0;
    if(day == "Mon") return 1;
    if(day == "Tue") return 2;
    if(day == "Wed") return 3;
    if(day == "Thu") return 4;
    if(day == "Fri") return 5;
    if(day == "Sat") return 6;
}

function eventGems(d) {
    gems = 0;
    for(var e in eventDates) {
        if(compareDates(eventDates[e], d) < 0) {
            continue;
        }
        else if(compareDates(eventDates[e], d) > 0) {
            return gems;
        }
        else if(compareDates(eventDates[e], d) == 0) {
            gems += events[e][2];
        }
    }
    return gems;
}