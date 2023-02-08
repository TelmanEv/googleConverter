// const btn1 = document.getElementById('btn-1');
// btn1.addEventListener('click',calcTemp);
//get the converter elements
// alert('hello from unit js');

const selector1 = document.getElementById('selector-1');
// let Dist = document.getElementById('dist');
const inputLeft = document.getElementById('input-left');
const inputRight = document.getElementById('input-right');
const LabelLeft =document.getElementById('label-left');
const LabelRight =document.getElementById('label-right');

const formula = document.getElementById('formula')

selector1.addEventListener('change', changeUnit);
inputLeft.addEventListener('change', updateUnit);
inputRight.addEventListener('change', updateUnit);
let unitChoice = "temperature";

function updateUnit(event){
    console.log(this.value, this.id);
    let inputID = this.id;
    let inputValue = this.value;
    let conversion = 0;

    if(unitChoice == "temperature"){//convert temp
        if(inputID == "input-left"){//convert fahr to cels
            conversion = (inputValue - 32) * 5/9;
            inputRight.value = conversion;
        }else {//convert Cels to fahr
            conversion = inputValue * 9/5 +32;
            inputLeft.value = conversion;
        }
    }else if(unitChoice == "distance"){
        if(inputID == "input-left"){
            conversion = inputValue * 5280;
            inputRight.value = conversion.toFixed(3);
        }else {
            conversion = inputValue / 5280;
            inputLeft.value = conversion.toFixed(3);
        }
    }else if(unitChoice == "length"){
        if(inputID == "input-left"){
            conversion = inputValue * 2.54;
            inputRight.value = conversion.toFixed(3);
        }else {
            conversion = inputValue / 2.54;
            inputLeft.value = conversion.toFixed(3);
        }
    }else if(unitChoice == "weight"){
        if(inputID == "input-left"){
            conversion = inputValue * 2.205;
            inputRight.value = conversion.toFixed(3);
        }else {
            conversion = inputValue / 2.205;
            inputLeft.value = conversion.toFixed(3);
        }
    }else if(unitChoice == "time"){
        if(inputID == "input-left"){//convert fahr to cels
            conversion = inputValue * 3600;
            inputRight.value = conversion.toFixed(3);
        }else {
            conversion = inputValue / 3600;
            inputLeft.value = conversion.toFixed(3);
        }
    }  
} 

function changeUnit(){
    unitChoice = this.value
    let choice = this.value;
    if(choice == 'temperature'){
        inputLeft.value = 212;
        inputRight.value = 100;
        LabelLeft.textContent = "Farenheight";
        LabelRight.textContent="Celcius";
        formula.textContent = "(32°F − 32) × 5/9 = 0°C"

    }else if(choice =='distance'){
        inputLeft.value = 1;
        inputRight.value = 5280;
        LabelLeft.textContent = "Miles";
        LabelRight.textContent="Feet";
        formula.textContent = "1 mile = 5280 ft"
}else if(choice == 'length'){
    inputLeft.value = 1;
    inputRight.value = 2.54;
    LabelLeft.textContent = "Inches";
    LabelRight.textContent="Centimeters";
    formula.textContent = "1 inch = 2.54 cm"
}else if(choice == 'weight'){
    inputLeft.value = 1;
    inputRight.value = 2.205;
    LabelLeft.textContent = "Kilograms";
    LabelRight.textContent="Pounds";
    formula.textContent = "1 kg = 2.05 pounds"
}else if(choice == 'time'){
    inputLeft.value = 1;
    inputRight.value = 3600;
    LabelLeft.textContent = "Hours";
    LabelRight.textContent="Seconds";
    formula.textContent = "1 Hour = 3,600 Seconds";
}
}