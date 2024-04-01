import inquirer from "inquirer";
console.log("hello to the X.Y.Z restaurant!");
let menu = await inquirer.prompt([
    {
        name: "card",
        type: "list",
        message: "What would you like to order?",
        choices: [
            "starter",
            "fast food",
            "main course",
            "dessert",
            "drink"
        ]
    }
]);
if (menu.card === "starter") {
    let starterMenu = await inquirer.prompt([
        {
            name: "STARTER",
            type: "list",
            message: "What would you like to order in starter?",
            choices: ["Chapli kebab", "chicken tikka", "finger fries", "Garlic bread", "Shami Kebab"]
        }
    ]);
    console.log(starterMenu);
}
else if (menu.card === "main course") {
    let mainCourse = await inquirer.prompt([
        {
            name: "MAIN COURSE",
            type: "list",
            message: "What would you like to order in starter?",
            choices: ["chicken Karahi", "Nihari", "Koorma", "pulao", "Chcken biryani", "Beef biryani", "Dum ka keema", "Paya"]
        }
    ]);
    console.log(mainCourse);
}
else if (menu.card === "fast food") {
    let fastFood = await inquirer.prompt([
        {
            name: "FAST FOOD",
            type: "list",
            message: "What would you like to order in starter?",
            choices: ["burger", "pizza", "sandwiches", "sausage", "tacos", "chicken nuggets", "burritos"]
        }
    ]);
    console.log(fastFood);
}
else if (menu.card === "dessert") {
    let dessertMenu = await inquirer.prompt([
        {
            name: "DESSERT",
            type: "list",
            message: "What would you like to order in dessert?",
            choices: ["chocolate", "ice cream", "Gulab jamun", "Jalebi", "ras malai", "kheer", "barfi", "sohan halwa"]
        }
    ]);
}
else if (menu.card === "drink") {
    let drinkMenu = await inquirer.prompt([
        {
            name: "DRINK",
            type: "list",
            message: "What would you like to order in dessert?",
            choices: ["water", "milkshake", "coca cola", "pepsi", "fants", "moutain dew", "7 up", "sting"]
        }
    ]);
    console.log(drinkMenu);
}
