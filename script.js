// Función para agregar un elemento a localStorage
function addItem() {
    const itemName = document.getElementById('itemName').value;

    if (itemName.trim() !== '') {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(itemName);
        localStorage.setItem('items', JSON.stringify(items));
        showItems()
    }
}


let flag = false;



// Función para mostrar todos los elementos almacenados
function showItems() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const itemList = document.getElementById('itemList');
    if (flag) itemList.style.display = 'block';
    itemList.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            const hr = document.createElement('hr');
            deleteButton.onclick = function() {
                deleteItem(item);
            };
    
            li.appendChild(deleteButton);
            itemList.appendChild(li);
            itemList.appendChild(hr);
            flag = true;
        }); 
}

//Función para ocultar todos los elementos almacenados
function hideItems(){
    const itemList = document.getElementById('itemList');
    itemList.style.display = 'none';
    flag = true;
   
}

// Función para eliminar un elemento específico
function deleteItem(itemToDelete) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items = items.filter(item => item !== itemToDelete);
    localStorage.setItem('items', JSON.stringify(items));
    showItems();
}

// Función para limpiar todos los elementos de localStorage
function clearItems() {
    localStorage.removeItem('items');
    showItems();
}

// Mostrar los elementos al cargar la página
// showItems();
