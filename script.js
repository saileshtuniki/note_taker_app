// console.dir('#document');

console.log(document.querySelector('#submitBtn'))

let submitBtn = document.querySelector('#submitBtn');
 
submitBtn.addEventListener('click', e =>{
    e.preventDefault();
  const text = document.querySelector('#text-input').value
	console.log(text);

    const newTime = document.querySelector('#time-setting').value


   const checkBox = document.querySelector('#checkbox').checked
   
   
 
    const newLi = document.createElement('li')
    newLi.setAttribute('class', 'd-flex justify-content-between h1 list-group-item mb-2')
    

    const newGettime = document.createElement('span')
    newGettime.setAttribute('class','h3 color-grey')

    const delBtn = document.createElement('button')
    delBtn.setAttribute('class','ml-6 btn btn-close bg-danger')
    delBtn.setAttribute('id','delBtn1')
    
    newGettime.textContent = newTime
    newLi.textContent = text;
    
     newLi.appendChild(newGettime)

     delBtn.innerText = ('');

     newLi.appendChild(delBtn)
      
     // color will change to green if check else red(not checked)

     setTimeout(()=>{colorChange(newLi,checkBox)},0)
     document.querySelector('ul').appendChild(newLi)
 
     function deleteBtn(){
		 newLi.parentNode.removeChild(newLi)
	 }

	 delBtn.addEventListener('click', deleteBtn)
  
	 function colorChange(newLi, checkBox){
		 if(checkBox)
     {
			 newLi.classList.add('plus')
		 }
     
     else
     {
			 newLi.classList.add('minus')

		 }}
     
 })

//  resets the text input Section

const btn = document.getElementById('submitBtn');

btn.addEventListener('click', function OnClick(event) {
  
  event.preventDefault();

  const textInput = document.getElementById('text-input');

  console.log(textInput.value);

  textInput.value = '';

//  reset the time input Section

  const timeInput = document.getElementById('time-setting');

  console.log(timeInput.value);

  timeInput.value = '';

  //  reset the checkbox input Section

  const checkboxInput = document.getElementById('checkbox');

  console.log(checkboxInput.value);

  checkboxInput.checked = '';
});

