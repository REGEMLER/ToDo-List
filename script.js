const button = document.getElementById(`button`);
const userInput = document.getElementById(`input`);
const listItem = document.querySelector(`.list_item`);
const list = document.querySelector(`.list`);
const innerList = [];
///////////////////////////////////////////////////////////////
const createItem = (innerText) => {
    const userItem = document.createElement(`div`);
    userItem.classList.add(`list_item`);
    userItem.insertAdjacentHTML(
        `afterbegin`,
        `
        <div class="list_buttons">
                        <i class="far fa-check-square"></i>
                        <i class="fas fa-times"></i>
                        <i class="fas fa-trash-alt"></i>
                    </div>
                    <p class="item_text">${innerText}</p>
                </div>`);
                return userItem;
    }
//////////////////////////////////////////////////////////////
const add = () => {
    if(userInput.value === ``){
        return;
    }
    const task = createItem(userInput.value);
    const id = String(Math.random());
    const model = {
        id,
        text : userInput.value,
        done : false,
        failed : false,
        anchor: task, 
    };
    innerList.push(model); 
    task.id = id; 
    userInput.value  = ``;
    userInput.focus();
    list.append(task);
}
/////////////////////////////////////////////////////////////
button.addEventListener(`click`, add);

userInput.addEventListener('keydown', ({keyCode}) => {
    if (keyCode === 13) {
        add();
    }
});
/////////////////////////////////////////////////////////
list.addEventListener(`click`, function ({target}){
    if(target.classList.contains(`fa-times`)){
        const clickedItem = innerList.find(i => i.id ===target.parentElement.id);
        //clickedItem.failed = true;
        target.parentElement.parentElement.classList.add('failed');
        target.previousElementSibling .remove();
        target.remove();
    }
    if(target.classList.contains(`fa-check-square`)){
        const clickedItem = innerList.find(listItem => listItem.id ===target.parentElement.id);
        console.log(clickedItem);
        //clickedItem.parentElement.parentElement.done = true;
        target.parentElement.parentElement.classList.add('done');
        target.nextElementSibling.remove();
        target.remove();
    }
    if(target.classList.contains(`fa-trash-alt`)){
        target.closest('.list_item').remove();
    }
    console.log(innerList);
})