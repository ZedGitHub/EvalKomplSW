var qualitaet = 0;
var zeit = 0;
var zeitMax = 10;
var geld = 10000;
var teamgroesse = 3;
var gesundheit = 5;
var skill = 5;
var motivation = 5;
var gehalt = 400;
var entwicklungsQualiMultiplier = 0.1;
var entwicklungsMotivationsReducer = 1;
var entwicklungsGesundheitsReducer = 1;
var urlaubMotivationsSchub = 1;
var urlaubGesundheitsSchub = 1;
var trainingMotivationsSchub = 1;
var trainingSkillSchub = 0.5;
var sinkendesGehaltMotivationsReducer = 0.5;
var steigendesGehaltMotivationsErhoeher = 0.5;


function entwickeln() {
    if (checkGesundheit()) {
        if (checkGeld()) {
            geld = geld - teamgroesse * gehalt;
            qualitaet = qualitaet + motivation * skill * entwicklungsQualiMultiplier;
            motivation = motivation - entwicklungsMotivationsReducer;
            gesundheit = gesundheit - entwicklungsGesundheitsReducer;
            zeit = zeit + 1;
        }
    } else {
        alert("Fast tote Leute entwickeln nicht, DU DÖDEL!");
        zeit = zeit + 1;
        geld = geld - teamgroesse * gehalt;
        motivation = motivation - entwicklungsMotivationsReducer;
    }
    update();
    checkGeld();
    checkQualitaet();
}

function urlaub() {
    geld = geld - teamgroesse * gehalt;
    zeit = zeit + 1;
    motivation = motivation + urlaubMotivationsSchub;
    gesundheit = gesundheit + urlaubGesundheitsSchub;

    update();
    checkGeld();
    checkQualitaet();
}

function training() {
    if (checkGesundheit()) {
        geld = geld - teamgroesse * gehalt;
        zeit = zeit + 1;
        motivation = motivation + trainingMotivationsSchub;
        skill = skill + trainingSkillSchub;
        gesundheit = gesundheit - entwicklungsGesundheitsReducer;
    } else {
        alert('Deine Leute verweigern die Arbeit, weil sie fast Tot sind, DU DÖDEL!!!')
    }
    update();
    checkGeld();
    checkQualitaet();
}

function gehaltAendern(aenderung) {
    if (aenderung < 0) {
        motivation = motivation - sinkendesGehaltMotivationsReducer;
    } else {
        motivation = motivation + steigendesGehaltMotivationsErhoeher;
    }
    gehalt = gehalt + aenderung;
    if (gehalt < 0) {
        motivation = 0;
    }
    geld = geld - teamgroesse * gehalt;
    zeit = zeit + 1;
    gesundheit = gesundheit - entwicklungsGesundheitsReducer;
    update();
    checkGeld();
    checkQualitaet();
}

function checkGesundheit() {
    if (gesundheit <= 0) {
        return false;
    } else {
        return true
    }
}
function checkGeld() {
    if (geld <= 0) {
        alert("Kein Geld mehr du Dödel! VERLOREN");
        location.reload();
        return false;
    } else {
        return true
    }
}
function checkQualitaet() {
    if (qualitaet >= 10) {
        alert("Qualitaet erreicht du Dödel! GEWONNEN!");
        location.reload();
        return false;
    } else {
        return true
    }
}

function changeCostForTeam(){
  gehaltAendern( parseInt(document.getElementById("value-to-show").value));
}

function setTimeAndMoney(){
  zeitMax = parseInt(document.getElementById('input-time').value);
  geld = parseInt(document.getElementById('input-money').value);
}



function update() {
    // Fill default values inside the start editables
    document.getElementById('input-time').value = (zeitMax - zeit);
    document.getElementById('input-money').value = geld;
    document.getElementById('team-quality').value = qualitaet;

    // Fill values inside the team info
    document.getElementById('team-number').value = teamgroesse;
    document.getElementById('team-skill').value = skill;
    document.getElementById('team-health').value = gesundheit;
    document.getElementById('team-movitation').value = motivation;
    document.getElementById('team-cost').value = gehalt;

    initializeChart();

    if(zeit === zeitMax){
      alert('Zeit ist abgelaufen du Dödel!');
      location.reload();
    }
}
