// Grilled meats menu

const grilledMeats = [
    {
        name: "Brochette Boeuf",
        price: "KSh 1,500"
    },
    {
        name: "Brochette Chèvre",
        price: "KSh 1,700"
    },
    {
        name: "Porc Choma",
        price: "KSh 2,000"
    },
    {
        name: "Ntaba Choma",
        price: "KSh 2,200"
    },
    {
        name: "Chicken Choma",
        price: "KSh 1,800"
    }
];

const grilledMenu = document.getElementById("grilledMenu");

grilledMeats.forEach(function(item) {

    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    const foodName = document.createElement("span");
    foodName.textContent = item.name;

    const foodPrice = document.createElement("span");
    foodPrice.textContent = item.price;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodPrice);

    grilledMenu.appendChild(menuItem);

});
// Favorite Meals

const mealInput = document.getElementById("mealInput");
const addMealBtn = document.getElementById("addMealBtn");
const mealList = document.getElementById("mealList");

addMealBtn.addEventListener("click", function () {

    const mealName = mealInput.value.trim();

    if (mealName === "") {
        alert("Please enter a meal name.");
        return;
    }

    const li = document.createElement("li");

    li.textContent = mealName + " ";

    const removeButton = document.createElement("button");

    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(removeButton);

    mealList.appendChild(li);

    mealInput.value = "";

});