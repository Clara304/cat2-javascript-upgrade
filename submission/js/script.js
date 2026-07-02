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
// Review Form Validation

const reviewForm = document.getElementById("reviewForm");
const reviewMessage = document.getElementById("reviewMessage");

reviewForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        reviewMessage.textContent = "Please fill in all the required fields.";
        reviewMessage.style.color = "red";

    } else {

        reviewMessage.textContent = "Thank you! Your review has been submitted successfully.";
        reviewMessage.style.color = "green";

        reviewForm.reset();

    }

});
// Save the user's name

const nameInput = document.getElementById("name");

// Load the saved name when the page opens
if (localStorage.getItem("customerName")) {
    nameInput.value = localStorage.getItem("customerName");
}

// Save the name whenever the user types
nameInput.addEventListener("input", function () {
    localStorage.setItem("customerName", nameInput.value);
});

// Banner Click-to-Reveal

const bannerImage = document.getElementById("bannerImage");
const bannerCaption = document.getElementById("bannerCaption");

bannerImage.addEventListener("click", function () {
    bannerCaption.classList.toggle("show");
    bannerCaption.classList.toggle("hidden");
});