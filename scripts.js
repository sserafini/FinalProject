/**
 * Created by Seth Serafini on 11/2/2016.
 */




function Calculate() {
    //needed variables

    validateDiameter(); validateInputs(); validateLength(); validateSpeed(); validateTime();

    var pi = 3.14159265358979323846264338327950288419716939937510;
    var density = parseFloat($("divDensity").innerHTML);
    var diameter = $("Diameter").value;
    var machineSpeed = parseFloat($("MachineSpeed").value);
    var length = 12;
    var cutLength = parseFloat($("CutLength").value);
    var weight = parseFloat($("Weight").value);


//step 2
    var piediv4 = pi / 4;
    var diasquared = diameter * diameter;
    var lbsperft = density * length * piediv4 * diasquared;
//step 3
    var ftperlb = 1 / lbsperft;
    var lbperhr = machineSpeed * 60 / ftperlb;
    $("output1").innerHTML = ftperlb.toFixed(2);
    $("output2").innerHTML = lbperhr.toFixed(2);
//step 4 (piece cut)

    var pieceperlb = (ftperlb * 12) / cutLength;
    $("output3").innerHTML = pieceperlb.toFixed(2);

}


function $(element) {
    return document.getElementById(element);
}



function IsValid(value){
    var valid = true;

    if (isNaN(value) || value == ""){
        valid = false
    }

    return valid;
}


function validateInputs(){

}

function ClearErrors(){
    document.getElementById("speedValidation").innerHTML = "";
    document.getElementById("timeValidation").innerHTML = "";
    document.getElementById("lengthValidation").innerHTML = "";
    document.getElementById("validateDiameter").innerHTML = "";
}

function ClearOutputs()
{
    $("output1").innerHTML = "";
    $("output2").innerHTML = "";
    $("output3").innerHTML = "";
    $("output4").innerHTML = "";
}

function ClearInputs()
{
    $("alloyDensity").innerHTML = "";
    $("Diameter").value = "";
    $("MachineSpeed").value = "";
    $("CutLength").value = "";
    $("Weight").value = "";
}

function displayDensity(){
    var selectedAlloy = document.getElementById("alloyChoices").selectedIndex;
    var alloyChoice = "";

    if(selectedAlloy == 0){
        alloyChoice = ".286"
    } else if(selectedAlloy == 1){
        alloyChoice = ".304"
    } else if(selectedAlloy == 2){
        alloyChoice = ".300"
    } else if(selectedAlloy == 3){
        alloyChoice = ".300"
    } else if(selectedAlloy == 4){
        alloyChoice = ".280"
    } else if(selectedAlloy == 5){
        alloyChoice = ".287"
    } else if(selectedAlloy == 6){
        alloyChoice = ".285"
    }
document.getElementById("divDensity").innerHTML = alloyChoice;

}

function Variance(){
  if($("output2").innerHTML < .10){
$("divLbsperHrVariance").innerHTML = "Does Not Meet Standard Run Rates"
  }
}

function validateDiameter() {
    if (document.getElementById("Diameter").value == ""|| document.getElementById("Diameter").value >= .01 || document.getElementById("Diameter").value <= .001) {
        $("validateDiameter").innerHTML = "*Please Enter a Valid Diameter";}
}

function validateSpeed() {
    if (document.getElementById("MachineSpeed").value == "" || parseFloat(document.getElementById("MachineSpeed").value) >= 2000 || parseFloat(document.getElementById("MachineSpeed").value) <= 5) {
        $("speedValidation").innerHTML = "*Please Enter a Valid Speed";
    }
}


function validateLength(){
    if (document.getElementById("CutLength").value == "" || document.getElementById("CutLength").value >= 100 || document.getElementById("CutLength").value <=.0125) {
        $("lengthValidation").innerHTML = "*Please Enter a Valid Cut Length";
    }
}


function validateTime(){

    if (document.getElementById("Weight").value == "" || document.getElementById("Weight").value > 100000  || document.getElementById("Weight").value < 1) {
        $("timeValidation").innerHTML = "*Please Enter a Valid Weight"
    }


}