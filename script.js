const password = document.getElementById('password_output');
const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn".split('');
const dataUpperCase = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');
const dataNumber = "0123456789".split('');
const dataSymbol = "&~#,?;.:/!§*%µ@\|><".split('');

function generatePassword(){
    const data = [].concat(
        lowercase.checked ? dataLowerCase : [],
        uppercase.checked ? dataUpperCase : [],
        number.checked ? dataNumber : [],
        symbol.checked ? dataSymbol : []
    );

    let password_length = parseInt(document.getElementById('display_password_length').value);
    let new_password = '';
    
    if(data.length === 0){
        password_output.value = "KDJLA";
        alert('Veuillez séléctionnez au moins un critère');
        return;
    }

    for(let i=0;i<password_length;i++){
        new_password += data[Math.floor(Math.random() * data.length)];
    }
    password_output.value = new_password;

    password_output.select();
    document.execCommand('copy');
    generatebutton.innerHTML = "copié!";
    setTimeout(() => {generatebutton.innerHTML = "Générez mot de passe"},2000)

}