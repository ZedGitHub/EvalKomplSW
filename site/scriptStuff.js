var qualitaet = 0;
var zeit = 0;
var geld = 0;
var teamgroesse = 3;
var gesundheit = 10;
var skill = 10;
var motivation = 5;
var gehalt = 800;
var entwicklungsQualiMultiplier = 1;
var entwicklungsMotivationsReducer = 1;
var entwicklungsGesundheitsReducer = 1;
var urlaubMotivationsSchub = 1;
var urlaubGesundheitsSchub = 1;
var trainingMotivationsSchub = 1;
var trainingSkillSchub = 1;
var sinkendesGehaltMotivationsReducer = 1;
var steigendesGehaltMotivationsErhoeher = 1;


function entwickeln(){
    checkGesundheit();
    geld = geld - teamgroesse * gehalt;
    zeit = zeit -1;
    qualitaet = qualitaet + motivation * skill * entwicklungsQualiMultiplier;
    motivation = motivation - entwicklungsMotivationsReducer;
    gesundheit = gesundheit - entwicklungsGesundheitsReducer;

    update();
}

function urlaub(){
    geld = geld - teamgroesse * gehalt;
    zeit = zeit - 1;
    motivation = motivation + urlaubMotivationsSchub;
    gesundheit = gesundheit + urlaubGesundheitsSchub;

    update();
}

function training(){
    checkGesundheit();
    geld = geld - teamgroesse * gehalt;
    zeit = zeit - 1;
    motivation = motivation + trainingMotivationsSchub;
    skill = skill + trainingSkillSchub;
    gesundheit = gesundheit - entwicklungsGesundheitsReducer;
    update();
}

function gehaltAendern(aenderung){
    checkGesundheit();
    if(aenderung < 0){
	motivation = motivation - sinkendesGehaltMotivationsReducer;
    }else{
	motivation = motivation + steigendesGehaltMotivationsErhoeher;
    }
    gehalt = gehalt + aenderung;
    if(gehalt < 0){
	motivation = 0;
    }
    geld = geld - teamgroesse * gehalt;
    zeit = zeit - 1;
    gesundheit = gesundheit - entwicklungsGesundheitsReducer;
    update();
}

function checkGesundheit(){
    if (gesundheit == 0){
	alert("Deine Leute sind tot du Dödel!");
    }
    update();
}

function update(){
    // Fill values inside the team info
    document.getElementById('team-number').value = teamgroesse;
    document.getElementById('team-skill').value = skill;
    document.getElementById('team-health').value = gesundheit;
    document.getElementById('team-movitation').value = motivation;

    initializeChart();
}
