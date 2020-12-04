let ValidForm = document.querySelector('.validForm');
let Title = ValidForm.querySelector('.title');
let Logo = ValidForm.querySelector('.logo');
let Categ = ValidForm.querySelector('.cat');
let num = ValidForm.querySelector('.num');
let fields = ValidForm.querySelectorAll('.field');
let error = document.querySelectorAll('.error');
let i;
let dot = num.value.indexOf(',');
const regTitle = /^[a-zA-Z0-9_-]{5,50}|'&#8734;'$/;


    const Error = (from, i, elem) => {
        console.log("error");
        from.style.borderColor = 'red';
        error[i].innerHTML = elem;
    }


    Title.addEventListener('blur', (event) => {
        event.preventDefault();
        if (!regTitle.test(Title.value) && Title.value) {
            Error(Title, 0, "Can't be less than 5 characters!");
            return false;
        } else if (!Title.value) {
            Error(Title, 0, "Please provide elem");
            return false;
        } else {
            Error(Title, 0, "");
            Title.style.borderColor = '#d0d2eb';
        }
    });

    num.addEventListener('blur', (event) => {
        event.preventDefault();

        if (!num.value) {
            Error(num, 3, "Please enter fee");
            return false;
        } else if(dot < 1) {
            Error(num, 3, "");
            num.style.borderColor = '#d0d2eb';
            num.value = '&#8734;'+parseInt(num.value)+"."+"00";
        }else {
            Error(num, 3, "");
            num.style.borderColor = '#d0d2eb';
        }
    });



