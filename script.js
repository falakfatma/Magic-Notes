const add_Btn = document.getElementById('addBtn')
const delete_Btn = document.querySelector('.trash')
const note = document.querySelector('.note')
let ele = document.createElement('div')

// add Notes
add_Btn.addEventListener('click', () => {
  let ele = document.createElement('div')
  ele.classList.add('note')
  ele.innerHTML =
    `
      <div class="navigator">
        <i class="save fa-solid fa-floppy-disk"></i>
        <i class="trash fa-sharp fa-solid fa-trash"></i>
      </div>
      <textarea></textarea>
`
  document.querySelector('.container').appendChild(ele)
})
// delete Notes
delete_Btn.addEventListener('click', (e) => {
  console.log(delete_Btn)
  console.log(ele)
  // ele.classList.add('note')
  ele.remove()
  document.querySelector('.container').appendChild(ele)

})