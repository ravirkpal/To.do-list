
const newNotebtn = document.querySelector("#newnote");


const ShowNewnote=(text = " ")=>{
 
 const Notes = document.createElement('div');
 Notes.classList.add("note");

 const htmldata = ` 
            <button type="button" class="edit" id="edit">
            <i class="far fa-edit"></i>
         </button>
            
			<button type="button" class="delete" id="delete">
				<i class="far fa-trash-alt"></i>
			</button>


		  <div class="${text ? "" :"hidden"}" id="box"></div>
			<textarea class="${text ? "hidden":""}" id="textbox" ></textarea>
`;


Notes.insertAdjacentHTML('afterbegin',htmldata);
   

const localStorages=()=>{

  const oldnote = document.querySelectorAll('#textbox');
  const database = [];
  oldnote.forEach((Notes)=>{
  return database.push(Notes.value);

  })

    localStorage.setItem('database',JSON.stringify(database));

}

            // #reference

 
 const deletebtn = Notes.querySelector('#delete'); 
 const editbtn = Notes.querySelector('#edit');
 const newbox = Notes.querySelector('#box'); 
 const textbox = Notes.querySelector('#textbox');

               // #delete


 deletebtn.addEventListener('click',()=>{
 	Notes.remove();
   localStorages();
 }) ;




 textbox.value = text;
 newbox.innerHTML = text;



 textbox.addEventListener('change',(event)=>
 {
 	const value = event.target.value;
 	newbox.innerHTML=value;



localStorages();
 })
                // #edit toggle



editbtn.addEventListener("click",()=>{
 newbox.classList.toggle('hidden');
 textbox.classList.toggle('hidden');

})





document.body.appendChild(Notes);


}    

const database = JSON.parse(localStorage.getItem('database'));

if(database){ database.forEach((Notes) => ShowNewnote(Notes)) };


newNotebtn.addEventListener("click",() => ShowNewnote() ); 