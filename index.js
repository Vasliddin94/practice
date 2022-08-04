let form=document.getElementById('addForm');
let itemList=document.getElementById('items');
let filter=document.getElementById('filter');
let lenth=itemList.lenth;
console.log(lenth);

//submit event

form.addEventListener('submit', addItem);
//delete Liste

itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', check);
filter.addEventListener('keyup', filterItems);

//add Items

function addItem(e) {
  e.preventDefault();
  let newItem=document.getElementById('item').value;
  //new li
  if (newItem.length==0) {
    alert('List can not be empty, please enter your text')
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
    let checkBtn=document.createElement('button');
    checkBtn.classList='btn btn-success float-end';
    checkBtn.type='button';
    checkBtn.innerHTML='Done'
    li.appendChild(checkBtn);
    checkBtn.addEventListener('click', draw)
    let empty=document.getElementById('empty');
    empty.style.display='none';
    let submit=document.getElementById('item').value=''

  }

}

function draw(e) {
  if (e.target.parentElement.classList=='list-group-item') {
    e.target.parentElement.classList.add('draw1');
    e.target.style.backgroundColor='red';
    e.target.innerHTML='Undone'
  }else {
    e.target.parentElement.classList.remove('draw1');
    e.target.style.backgroundColor='#198754';
    e.target.innerHTML='Done'
  }
}







function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure ?')) {
      let li =e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}



function filterItems(e) {
  let text=e.target.value.toLowerCase();
  let items=itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    let itemName=item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !=-1) {
      item.style.display='block'
      document.getElementById('empty').style.display='none'
    }
    else {
      item.style.display='none'

    }
  })
}
