/**
 * Created by Seth Serafini on 11/2/2016.
 */

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