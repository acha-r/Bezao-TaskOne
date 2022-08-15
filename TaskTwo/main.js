let menuStore = [];

function application() {
    let authenticated = false;

    while (!authenticated) {
        authenticated = adminLogIn();
    }

    console.log()

    let option = prompt(`
    WELCOME
    \n
    ** 1: ADD FOOD ITEM\n
    ** 2: VIEW FOOD ITEMS\n
    ** 3: REMOVE FOOD ITEMS\n
    `);

    if (option == 1) {
        let foodName = prompt("Food name");
        let price = prompt("Food price");
        let description = prompt("username");
       
        addFoodItem(foodName, price, description);
        console.log("Added item successfully");
        console.log(getFoodItems());
    }
    else if (option == 2) {
        console.log(getFoodItems())
    } else if (option == 3) {
        let itemId = prompt("Food item Id");
        
        removeFoodItem(itemId)
    }
    else {
        alert("Invalid Input")
    }


}

function adminLogIn() {
    let username = prompt("username");
    let password = prompt("password");
    if (username == "admin" && password == "admini") {
        alert("Login successful");
        return true;
    } else {
        alert("Invalid detail(s)");
        return false;
    }
}

function addFoodItem(name, price, description) {
    let foodItem = {
        id: menuStore.length,
        name,
        price,
        description,
    };

    menuStore.push(foodItem);
}

function removeFoodItem(itemId) {
    menuStore.splice(itemId, 1);
}

function getFoodItems() {
    return menuStore;
}

function getFoodItem(itemId) {
    return menuStore.filter((x) => x.id == itemId);
}

application() 