import { eventList } from "./eventList";

export const calcGems = (gemInput, bpInput, welkinCheck, bpChecked, shopChecked, abyssStars, endDate, selectedEvents) => {

    var result = "Gems you will be able to save is: ";
    const abyss = Object.values(abyssStars).reduce((partialSum, a) => partialSum + a, 0) * 50 / 3;
    var bplvl = Number(bpInput);

    const includeEvents = JSON.parse(JSON.stringify(selectedEvents));
    console.log(includeEvents)

    const today = new Date();
    today.setHours(0,0,0,0);
    today.setDate(today.getDate() + 1);
    const enddate = new Date(endDate);
    enddate.setHours(0,0,0,0);

    if  (today > enddate) {
        return "Please enter a date after today.";
    }

    var gems = Number(gemInput);
    
    while(today <= enddate) {
        gems += 60;
        if(welkinCheck) {
            gems += 90;
        }
        if(shopChecked && today.getDate() == 1) {
            gems += 160*5;
        }
        if(abyss > 0 && (today.getDate() == 1 || today.getDate() == 16)) {
            gems += abyss;
        }
        if(bpChecked && bplvl < 50) {
            bplvl += 1.5;
            if([10, 20].includes(Math.floor(bplvl)) || [11, 21].includes(bplvl))
                gems += 160;
            else if(Math.floor(bplvl) == 30 || bplvl == 31)
                gems += 320;
            else if(Math.floor(bplvl) == 50 || bplvl == 51)
                gems += 680;
        }
        gems += eventGems(today, includeEvents);
        today.setDate(today.getDate() + 1);
    }
    result += (gems + "\n");
    result += ("That's " + Math.trunc(gems / 160) + " pulls!");

    return result;
};

const eventGems = (day, includeEvents) => {
    const dayString = (day.getYear()+1900) + "-" + padDate(day.getMonth()+1) + "-" + padDate(day.getDate());
    var gems = 0;
    const eventsToday = eventList.filter((e) => (e[1] == dayString && !includeEvents.includes(e)));
    eventsToday.forEach((e) => gems += e[2])
    const acc = {};
    includeEvents.forEach((e) => {
        if (!(Object.keys(acc)).includes(e[0])) {
            gems += e[2];
            acc[e[0]] = includeEvents.indexOf(e);
        }
    })
    Object.values(acc).reverse().forEach(v => includeEvents.splice(v, 1));
    return gems;
}

const padDate = (date) => {
    return date <= 9 ? "0"+date : date
}