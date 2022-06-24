const formInputElem = document.getElementById('formInput');
const SubmitBtnElem = document.getElementById('SubmitBtn');
const groupListElem = document.getElementById('groupList');

SubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    adToUI();


});

function adToUI() {
   
    const inputvalue = formInputElem.value;
    const htmlElem = `
        <li class="item">
            <span> ${inputvalue} </span>
            <button class="deleteButton marginHorigontal" id="deleteBtn">
             Delete
            </button>
        </li>
    `
    groupListElem.insertAdjacentHTML('afterbegin', htmlElem);
    formInputElem.value = '';
}