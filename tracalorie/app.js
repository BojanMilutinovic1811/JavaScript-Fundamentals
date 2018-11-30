// Storage controller





//Item controller

const ItemCtrl = (()=> {
    function Item(id, name, calories) {
        this.id = id; 
        this.name = name;
        this.calories = calories;
    }


    const data = {
        items: [
            // {id: 0, name: 'Steak Dinner', calories: 1200},
            // {id: 0, name: 'Cake', calories: 1200},
            // {id: 0, name: 'Steak Dinner', calories: 1200}
        ], 
        currentItem: null,
        totalCalories: 0
    }

    return {
        dataItems: ()=> data.items,
        addItem: (name, calories) => { 
            let ID;

            if(data.items.length > 0) {
                ID = data.items[data.items.length -1].id + 1;
            } else {
                ID = 0;
            }

            //callories to num

            calories = parseInt(calories);

            newItem = new Item(ID,name, calories)
            data.items.push(newItem)

            return newItem;
        },
        getTotalCalories: () => {
            let calories = 0;

            data.items.forEach(item => calories += item.calories)

            return calories; 
        },

        getItemById: (id) => {
            let found = null;

            data.items.forEach(item=> {
                if(item.id === id) found = item
            })

            return found; 
        },

        setCurrentItem: (itemToEdit) => {
            data.currentItem = itemToEdit; 
        },

        getCurrentItem: () => {
            return data.currentItem; 
        },

        updateItem: (name, calories) => {
            calories = parseInt(calories);
            let found = null;
            data.items.forEach(item => {
                if(item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            })
            return found;   
        },

        logData: ()=> data 
    }
    
})()

// UI controller

const UICtrl = (()=> {

    const UISelectors = {
        totalCalories: '.total-calories',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        itemList: 'item-list',
        addBtn: '.add-btn',
        deleteBtn: '.delete-btn',
        editBtn: '.edit-btn',
        backBtn: '.back-btn',
        listItems: '#item-list li'
    }


    return {
        populateItemList: items => {
            let html = '';
            items.forEach((item)=> {
                html += `<li class="collection-item" id=${item.id}>
                            <strong>${item.name}: </strong> <em>1200 calories</em>
                                <a href="#" class="secondary-content">
                                <i class="edit-item material-icons left">edit</i>
                                </a>
                        </li>`
            })
            // insert list-items 
            document.getElementById(UISelectors.itemList).innerHTML = html; 
        },

        getItemInput: ()=> {
           return {
             name: document.querySelector(UISelectors.itemNameInput).value,
             calories: document.querySelector(UISelectors.itemCaloriesInput).value
           }
        },

        addListItem: (item) => {
            document.getElementById('item-list').style.display = 'block';
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.id = `item-${item.id}`;
            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} calories</em>
                                <a href="#" class="secondary-content">
                                    <i class="edit-item material-icons left">edit</i>
                                </a>`;

            document.getElementById(UISelectors.itemList).insertAdjacentElement('beforeend', li)
        },

        clearInput: () => {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },

        addItemToForm: () => {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },

        hideList: () => {
            document.getElementById(UISelectors.itemList).style.display = 'none'
        },

        setCalories: (totalCalories) => {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories; 
        },

        clearEditState: () => {
            UICtrl.clearInput();
            document.querySelector(UISelectors.editBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';

        },

        showEditState: () => {
            document.querySelector(UISelectors.editBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';

        },

        updateListItem: function(item) {
           let listItems = Array.from(document.querySelectorAll(UISelectors.listItems));
           
           listItems.forEach(listItem => {
                const itemID = listItem.getAttribute('id');

                if(itemID === `item-${item.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} calories</em>
                    <a href="#" class="secondary-content">
                        <i class="edit-item material-icons left">edit</i>
                    </a>`;
                }
           })
        },

        getSelectors: () => UISelectors
    }


})()


//App controller

const App = ((UICtrl, ItemCtrl) =>  {

    const loadEventListeners = () => {
        const UISelectors = UICtrl.getSelectors();

        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        document.addEventListener('keypress', (e)=>{
            if(e.keyCode === 13) e.preventDefault()
            return false
        })

        document.getElementById(UISelectors.itemList).addEventListener('click', itemEditClick);
        
        document.querySelector(UISelectors.editBtn).addEventListener('click', itemUpdateSubmit)
    }

    const itemAddSubmit = (e) => {
        //get form input from uictrl
        
        const input = UICtrl.getItemInput()

        if(input.name !== '' && input.calories !== '') {
            
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            UICtrl.addListItem(newItem);

            const totalCalories = ItemCtrl.getTotalCalories();

            UICtrl.setCalories(totalCalories);

            UICtrl.clearInput()
        } 
        e.preventDefault();
    } 

    const itemEditClick = (e) => {

        if(e.target.classList.contains('edit-item')) {
            const listId = e.target.parentNode.parentNode.id

            const arrId = listId.split('-');
            const id = parseInt(arrId[1]);

            const itemToEdit = ItemCtrl.getItemById(id);

            ItemCtrl.setCurrentItem(itemToEdit);

            UICtrl.addItemToForm();
        }

        e.preventDefault()
    }

    const itemUpdateSubmit = (e) => {
        const input = UICtrl.getItemInput();
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
        
        UICtrl.updateListItem(updatedItem);

        const totalCalories = ItemCtrl.getTotalCalories();

        UICtrl.setCalories(totalCalories);
        UICtrl.clearEditState();

        e.preventDefault();
    }



    return {

        //fetch items from data structure
        init: () => {
            //clear initial state

            UICtrl.clearEditState();

            const items = ItemCtrl.dataItems()

            if(items.length === 0) {
                UICtrl.hideList()
            } else {
                UICtrl.populateItemList(items)
            }

            const totalCalories = ItemCtrl.getTotalCalories();

            UICtrl.setCalories(totalCalories);

            
            loadEventListeners()
    }
}
    
})(UICtrl, ItemCtrl)


//initialize app...

App.init()