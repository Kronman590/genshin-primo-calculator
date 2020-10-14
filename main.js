var select = document.getElementById("character"); 

for(var i = 0; i < characters.length; i++) {
    var opt = characters[i];
    var el = document.createElement("option");
    el.textContent = opt.Name;
    el.value = opt.Name;
    select.appendChild(el);
}

function set_character() {
    var selected = document.getElementById("character").value; 
    document.getElementById("chara-pic").src = "img/"+selected+".png";
    // switch(selected) {
    //     case "Amber":
    //         document.getElementById("chara-pic").src = "img/Amber.png";
    //         break;
    //     case "Barbara":
    //         document.getElementById("chara-pic").src = "img/Barbara.png";
    //         break;
    //     case "Beidou":
    //         document.getElementById("chara-pic").src = "img/Beidou.png";
    //         break;
    // }
    console.log(document.getElementById("character").value);
}