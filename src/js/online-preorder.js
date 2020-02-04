function sendInfo(){
    let firstName = document.querySelector('.person-name');
    let secondName = document.querySelector('.person-second-name');
    let number = document.querySelector('.number');

    alert('We will call you back for further action.')

    firstName.value = '';
    secondName.value = '';
    number.value = '';
}