
document.getElementById('time').value = new Date();

const openButtons = document.querySelectorAll('.open-button');

function createMemberInfo(openButtons) {
    openButtons.forEach(button => {

        button.addEventListener("click", () => {
            modalID = button.getAttribute("data-modal");
            modalElement = document.getElementById(modalID);
            modalElement.showModal();
        })
    });
}

const closeModal = document.querySelectorAll('.closemodal');
closeModal.forEach(button => {
button.addEventListener('click', () => {
   
        button.closest('dialog').close();}
    );
});


createMemberInfo(openButtons);