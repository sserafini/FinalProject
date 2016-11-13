/**
 * Created by Seth Serafini on 11/2/2016.
 */

function Calculate(){
    var pi = 3.14159265358979323846264338327950288419716939937510;
    var density = parseFloat($("alloyDensity").innerHTML);
    var diameter = parseFloat($("Diameter").value);
    var machineSpeed = parseFloat($("MachineSpeed").value);
    var length = 12;
    var cutLength  = parseFloat($("CutLength").value);
    var weight = parseFloat($("Weight").value);

}


function $(element) {
    return document.getElementById(element);
}




function validateInputs(){

}

function ClearErrors(){
    $("diameterValidation").innerHTML = "";
    $("speedValidation").innerHTML = "";
    $("lengthValidation").innerHTML = "";
    $("timeValidation").innerHTML = "";
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