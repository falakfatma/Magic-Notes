const add_Btn = document.getElementById('addBtn')
const textarea = document.querySelector('textarea')
const note = document.querySelector('.note')
const save_Btn = document.querySelector('.save')
// let ele = document.createElement('div')

// add Notes
add_Btn.addEventListener('click', () => {
  let note = document.createElement('div')
  note.classList.add('note')
  note.innerHTML =
    `
      <div class="navigator">
        <i class="save fa-solid fa-floppy-disk"></i>
        <i class="trash fa-sharp fa-solid fa-trash"></i>
      </div>
      <textarea></textarea>
`
    note.querySelector('.trash').addEventListener('click',()=>{
    note.remove()
  })
    note.querySelector('.save').addEventListener('click',()=>{
    let tasks = localStorage()
    // note.remove()
  })
  document.querySelector('.container').appendChild(note)
})

//Save Note 
// save_Btn.addEventListener('click', () => {
//   console.log(textarea.value)
//     localStorage.setItem(textarea.value,`${textarea.value}`)
// })


// // delete Notes
function myFun(e){
    let tasks = localStorage.key(e);
  let deletedListItem = document.getElementById(tasks);
  deletedListItem.remove();
  localStorage.removeItem(objectKey);
}
//   // note.classList.add('note')
//   console.log(delete_Btn)
//   console.log(ele)
//   ele.remove()
//   document.querySelector('.container').appendChild(ele)

