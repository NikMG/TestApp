document.addEventListener("DOMContentLoaded", () => {
    "use strict";


let ValidForm = document.querySelector('.validForm');
let Title = ValidForm.querySelector('.title');
let Logo = ValidForm.querySelector('.logo');
let Categ = ValidForm.querySelector('.cat');
let num = ValidForm.querySelector('.num');
let fields = ValidForm.querySelectorAll('.field');
let error = document.querySelectorAll('.error');
let isValid = false;
const pound = {style: 'currency', currency: 'GBP'};
const regNum = /^[0-9.\u00A3]{1,50}$/;
const regNum1 = /^[0-9.]{1,50}$/;
const validExt = [".jpg", ".png"];

const Error = (from, i, elem) => {
        console.log("error");
        from.style.borderColor = 'red';
        error[i].innerHTML = elem;
        return false;
    };

function ValidTitle(){
    if (!Title.value) {
        Error(Title, 0, "Please provide a name for your quiz");
        isValid = false;
    } else {
        Error(Title, 0, "");
        Title.style.borderColor = '#d0d2eb';
        isValid = true;
    }
}

function ValidNum(){
    if(!regNum.test(num.value) | !num.value | num.value < 5){
        num.value = "\u00A3"+"0.00";
        isValid = false;
    }else if(regNum1.test(num.value) && num.value >= 5){
        num.value = new Intl.NumberFormat('en-IN', pound).format(num.value);
    }else{
        isValid = true;
    }
}

function ValidCat(){
    if(!Categ.value){
        Error(Categ, 2, "Please select a category");
        isValid = false;
    }else{
        Error(Categ, 2, "");
        Categ.style.borderColor = '#d0d2eb';
        isValid = true;
    }
}

function ValidFile(){
    let FileName = Logo.value;
    if (FileName.length > 0){
        let blnValid = false;
        for(let j = 0; j < validExt.length; j++){
            let CurExt = validExt[j];
            if (FileName.substr(FileName.length - CurExt.length, CurExt.length).toLowerCase() == CurExt.toLowerCase()){
                blnValid = true;
                break;
            }
        }
        if(!blnValid | !Logo.value){
            Logo.value = "";

        }
    }else{
        isValid = false;
    }
}


for(let j = 0; j < fields.length; j++){
    fields[j].addEventListener("blur", (event) => {
        event.preventDefault();
        if(j == 0){
            ValidTitle();
        }
        if(j == 1){
            ValidFile();
        }
        if(j == 2){
            ValidCat();
        }
        if(j == 3){
            ValidNum();
        }
    });
}

    ValidForm.addEventListener("submit", (event) => {
        event.preventDefault();
        ValidTitle();
        ValidNum();
        ValidCat();
        ValidFile();
        console.log(isValid);
        if(isValid){
            ValidForm.submit();
        }
    });
});


