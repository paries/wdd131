const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const main = document.querySelector("main");


button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'
        deleteButton.setAttribute('aria-label', 'Clode')
        deleteButton.setAttribute('id', 'close-button')
        listItem.textContent = input.value;
        listItem.append(deleteButton);
        list.append(listItem)
        deleteButton.addEventListener('click', function () {
            list.removeChild(listItem)
            input.focus();
        })
        input.value = '';
    } else {
        const message = document.createElement('p');
        message.textContent = 'Please enter a book and chapter'
        main.append(message)    
        setTimeout(() => {
            main.removeChild(message);
        }, 2000);
    }
    input.focus();

})

