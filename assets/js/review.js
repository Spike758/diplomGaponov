let modalWindow = document.getElementById('modal')
function noDigits(event) {
  if ("1234567890".indexOf(event.key) != -1)
    event.preventDefault();
}
const send_rw = () => {
  let textArea = document.querySelector('textarea')
  let textEmail = document.getElementById('textEmail')
  let textName = document.getElementById('textName')
  let warning = document.getElementById('warningMessage2')
  if(textArea.value != '' && textEmail.value !='' && textName.value !=''){
    send_review();
    textArea.value = ''
    textEmail.value = ''
    textName.value = ''
    warning.classList.remove('active')
  } else {
   
    warning.classList.add('active')
  }
  
}


const send_review = () => {

    modalWindow.classList.add('active')
    modalWindow.innerHTML = `
        <input type="button" value="X" class="btn" id="modal-btn-close" onclick="modalClose()">
        <h4>Спасибо!</h4>
        <p>Ваш отзыв отправлен!</p>
      `;
      let modalCloseButton = document.getElementById('modal-btn-close');
      modalCloseButton.style = 'bottom: 89%; left: 89%;';
      shadow.classList.add('active')
}