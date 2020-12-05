let ValidForm = document.querySelector('.validForm');
let Title = ValidForm.querySelector('.title');
let Logo = ValidForm.querySelector('.logo');
let Categ = ValidForm.querySelector('.cat');
let num = ValidForm.querySelector('.num');
let fields = ValidForm.querySelectorAll('.field');
let error = document.querySelectorAll('.error');
const pound = {style: 'currency', currency: 'GBP'};
const regTitle = /^[a-zA-Z0-9_-]{5,50}$/;
const regNum = /^[0-9.\u00A3]{1,50}$/;
const validExt = [".jpg", ".png"];
const Error = (from, i, elem) => {
        console.log("error");
        from.style.borderColor = 'red';
        error[i].innerHTML = elem;
        return false;
    };

function ValidTitle(){
    if (!regTitle.test(Title.value) && Title.value) {
        Error(Title, 0, "Can't be less than 5 characters!");
    } else if (!Title.value) {
        Error(Title, 0, "Please provide a name for your quiz");
    } else {
        Error(Title, 0, "");
        Title.style.borderColor = '#d0d2eb';
    }
}

function ValidNum(){
    if(!regNum.test(num.value) | !num.value){
        num.value = "\u00A3"+"0.00";
        return false;
    }else{
        num.value = new Intl.NumberFormat('en-IN', pound).format(num.value);
    }
}

function ValidCat(){
    if(!Categ.value){
        Error(Categ, 2, "Please select a category");
    }else{
        Error(Categ, 2, "");
        Categ.style.borderColor = '#d0d2eb';
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
        if(!blnValid){
            alert("Wrong ex");
            Logo.value = "";
            return false;
        }
    }
}


    Title.addEventListener('blur', (event) => {
        event.preventDefault();
        ValidTitle();
    });

    num.addEventListener('blur', (event) => {
        event.preventDefault();
        ValidNum();
    });

    Categ.addEventListener('blur', (event) => {
        event.preventDefault();
        ValidCat();
    });

    Logo.addEventListener('blur', (event) => {
        event.preventDefault();
        ValidFile();
    });




