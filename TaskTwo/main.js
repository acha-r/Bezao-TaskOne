let menuStore = [];

function application () {
    adminLogIn();

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