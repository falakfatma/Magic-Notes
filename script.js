const add_Btn = document.getElementById('addBtn')
add_Btn.addEventListener('click',()=>{
  // <!--       <div class="note">
        // <div class="navigator"></div>
        // <textarea></textarea>
      // </div> -->
  let ele = document.createElement('div')
   ele.classList.add('note')
  let NewEle = document.createElement('div')
  NewEle.classList.add('navigator')
  ele.appendChild(NewEle);
  let  textarea = document.createElement('textarea')
  ele.appendChild(textarea);
  document.querySelector('.container').appendChild(ele)
  console.log(ele.classList)
})