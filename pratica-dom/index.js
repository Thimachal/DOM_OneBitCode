function addContact(){
    const contatSection = document.getElementById('contacts-list');

    const h3 = document.createElement('h3');
    h3.innerText = "Contato";

    const ul = document.createElement('ul');

    const nameLi = document.createElement('li');
    nameLi.innerText = "Nome: ";
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'fullname';
    
    nameLi.appendChild(nameInput);
    ul.appendChild(nameLi);

    const phoneLi = document.createElement('li');
    phoneLi.innerText = "Tel: ";
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'phone';
    
    phoneLi.appendChild(phoneInput);
    ul.appendChild(phoneLi);

    contatSection.append(h3, ul);

}

function removContac(){

}