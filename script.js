const add_Btn = document.getElementById('addBtn');
const textarea = document.querySelector('textarea');
const note = document.querySelector('.note');
const save_Btn = document.querySelector('.save');

add_Btn.addEventListener('click', () => {

  addNode()
});
const saveNotes = () => {
  let notes = document.querySelectorAll('.note textarea')
  let data = []
  notes.forEach((datas) => {
    data.push(datas.value)
  })
  localStorage.setItem("notes", JSON.stringify(data))
};

// add Notes


const addNode = (text = "") => {
  let note = document.createElement('div')
  note.classList.add('note')
  note.innerHTML =
    `
      <div class="navigator">
        <i class="save fa-solid fa-floppy-disk"></i>
        <i class="trash fa-sharp fa-solid fa-trash"></i>
      </div>
      <textarea>${text}</textarea>
`
  note.querySelector('.trash').addEventListener('click', () => {
    note.remove()
    localStorage.removeItem(note.querySelector('textarea').value, note.querySelector('textarea').value)
    saveNotes()
  })
  note.querySelector('.save').addEventListener('click', (e) => {
    saveNotes()
  })
  document.querySelector('.container').appendChild(note)
  saveNotes()
}
// function randomColour (){
//   document.querySelector(`.navigator`).style.background = `red`

// }
// randomColour ()
//Save Note 
// save_Btn.addEventListener('click', () => {
//   console.log(textarea.value)
//     localStorage.setItem(textarea.value,`${textarea.value}`)
// })


// // delete Notes
// function myFun(e){
//     let tasks = localStorage.key(e);
//   let deletedListItem = document.getElementById(tasks);
//   deletedListItem.remove();
//   localStorage.removeItem(objectKey);
// }
//   // note.classList.add('note')
//   console.log(delete_Btn)
//   console.log(ele)
//   ele.remove()
//   document.querySelector('.container').appendChild(ele)

(
  function() {
    const listNotes = JSON.parse(localStorage.getItem('notes'))
    console.log(`note ${listNotes}`)
    listNotes.forEach((listNote)=>{
      addNode(listNote)
    })
  }
)();