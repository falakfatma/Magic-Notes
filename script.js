const add_Btn = document.getElementById('addBtn')
add_Btn.addEventListener('click', () => {
  // <!--       <div class="note">
  // <div class="navigator"></div>
  // <textarea></textarea>
  // </div> -->
  let ele = document.createElement('div')
  ele.classList.add('note')
  ele.innerHTML =
` 
      <div class="navigator"></div>
      <textarea></textarea>
`
  document.querySelector('.container').appendChild(ele)
  // console.log(ele.classList)
})