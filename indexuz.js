let form=document.getElementById('addForm');
let itemList=document.getElementById('items');
let filter=document.getElementById('filter');


//submit event

form.addEventListener('submit', addItem);
//delete Liste

itemList.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItems)

//add Items

function addItem(e) {
  e.preventDefault();
  let newItem=document.getElementById('item').value;
  //new li
  if (newItem.length==0) {
    alert("Ro'yhat bo'sh bo'lishi mumkin emas, iltimos matn kiriting")
  }
  else {
    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
    let deleteBtn=document.createElement('button');
    deleteBtn.classList='btn btn-danger btn-sm float-end delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    let checkBtn=document.createElement('checkbox');
    checkBtn.classList='form-check-input float-end drawover';
    li.appendChild(checkBtn);
    let empty=document.getElementById('empty');
    empty.style.display='none'
  }

}





function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Ishonchingiz komilmi ?')) {
      let li =e.target.parentElement;
      itemList.removeChild(li);
    }
  };
}

function filterItems(e) {
  let text=e.target.value.toLowerCase();
  let items=itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    let itemName=item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !=-1) {
      item.style.display='block';
      document.getElementById('empty').style.display='none'
    }
    else {
      item.style.display='none'
    }
  })
}
