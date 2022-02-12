let count=0;

document.getElementById("add-btn").addEventListener("click",function(){
    let inputField=document.getElementById('input-field').value;
    count++;
 

    if(inputField==""){
        alert('please enter a valid value')
    }else{
        const mainContainer=document.getElementById('content-container')
        const tableContainer=document.createElement('tr')
        tableContainer.innerHTML=`
        <th scope="row">${count}</th>
        <td>${inputField}</td>
        <td> <button class="btn btn-danger me-2 delet-btn">Delet</button>
        <button class="btn btn-success done-btn">Done</button></td>
      `
      mainContainer.appendChild(tableContainer);
      document.getElementById('input-field').value=" ";


      const deletbutton=document.getElementsByClassName('delet-btn');
      const doneButton=document.getElementsByClassName('done-btn')

      for(const button of deletbutton){
          button.addEventListener("click",function(e){
              e.target.parentNode.parentNode.style.display="none";
          })
      }

      for(const button of doneButton){
          button.addEventListener("click",function(e){
              e.target.parentNode.parentNode.style.color="green";
          })
      }
      

    }
    
})