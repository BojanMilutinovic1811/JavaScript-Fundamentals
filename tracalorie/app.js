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
        addBtn: '.add-btn'
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

        hideList: () => {
            document.getElementById(UISelectors.itemList).style.display = 'none'
            console.log(document.getElementById(UISelectors.itemList))
        },

        setCalories: (totalCalories) => {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories; 
        },

        getSelectors: () => UISelectors
    }


})()


//App controller

const App = ((UICtrl, ItemCtrl) =>  {

    const loadEventListeners = () => {
        const UISelectors = UICtrl.getSelectors();

        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit)
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



    return {

        //fetch items from data structure
        init: () => {
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