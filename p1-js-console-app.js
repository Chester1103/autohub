/* 
Title: Manage a small computer hardware inventory via a console application

As a store employee,
I want to manage inventory items from the console,
So that I can add, view, update, remove, and search items efficiently without a graphical interface.

Features:
1. View Inventory
  - I can list all items currently in the inventory.
  - Each item shows ID, Name, and Price.
  - Filter item by status

2. Add Item
  - I can add a new item with a unique ID, Name, and Price.
  - If I enter an invalid ID or price (non-numeric), the app asks me to try again.
  - If I enter an ID that already exists, the app asks me to try again.

3. Update Item
  - I can update an existing item by providing its ID.
  - I can modify the Name and Price.
  - If I enter an invalid ID, the app asks me to try again.

4. Remove Item
  - I can remove an item by providing its ID.
  - If I enter an invalid ID, the app asks me to try again.

5. Search Item
  - I can search for items by Name (partial or full match).
  - If no matching item is found, the app informs me and allows me to try again.

6. Exit Application
  - I can exit the app from the main menu.

Notes / Constraints:
  - All inputs are validated: numbers for IDs and Prices, strings for Names.
  - The app continuously loops back to the main menu after completing an action.
  - The console interface uses plain text and simple prompts.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ==========================
// INVENTORY DATA
// ==========================
let inventoryItems = [
  { id: 1, name: "CPU", price: 25000, status: "IN STOCK" },
  { id: 2, name: "CPU", price: 25000, status: "IN STOCK" },
  { id: 3, name: "CPU", price: 25000, status: "IN USE" },
  { id: 4, name: "CPU", price: 25000, status: "IN USE" },
  { id: 5, name: "CPU", price: 25000, status: "IN USE" },
  { id: 6, name: "MONITOR", price: 8000, status: "IN STOCK" },
  { id: 7, name: "MONITOR", price: 8000, status: "IN STOCK" },
  { id: 8, name: "MONITOR", price: 8000, status: "IN USE" },
  { id: 9, name: "MONITOR", price: 8000, status: "IN USE" },
  { id: 10, name: "MONITOR", price: 8000, status: "IN USE" },
  { id: 11, name: "MOUSE", price: 1250, status: "IN USE" },
  { id: 12, name: "MOUSE", price: 1250, status: "IN USE" },
  { id: 13, name: "MOUSE", price: 1250, status: "IN USE" },
  { id: 14, name: "MOUSE", price: 1250, status: "IN STOCK" },
  { id: 15, name: "MOUSE", price: 1250, status: "IN STOCK" },
];

// ==========================
// VALIDATION HELPERS
// ==========================
function validateNumberInput(input) {
  const numberValue = Number(input.trim());
  return isNaN(numberValue) ? null : numberValue;
}

function validateYesNoInput(input) {
  if (/^[A-Za-z]$/.test(input)) {
    const upperInput = input.toUpperCase();
    if (upperInput === "Y" || upperInput === "N") return upperInput;
  }
  return null;
}

function validateNameInput(input) {
  const trimmed = input.trim();
  return trimmed === "" ? null : trimmed.toUpperCase();
}

function validateStatusInput(input) {
  const trimmed = input.trim().toUpperCase();
  if (trimmed === "" || trimmed === "IN STOCK" || trimmed === "IN USE") {
    return trimmed === "" ? "IN STOCK" : trimmed;
  }
  return null;
}

// ==========================
// INPUT HANDLER
// ==========================
function promptUser(question, validator, callback) {
  rl.question(question, (userInput) => {
    const validatedValue = validator(userInput);
    if (validatedValue === null) {
      console.log("\n❌ Invalid input. Try again.\n");
      return promptUser(question, validator, callback);
    }
    callback(validatedValue);
  });
}

// ==========================
// RETURN TO MENU HELPER
// ==========================
function returnToMenu() {
  rl.question("\nPress Enter to return to the main menu...", () => {
    console.clear();
    showMainMenu();
  });
}

// ==========================
// INVENTORY OPERATIONS
// ==========================
function displayInventory() {
  console.log("╔══════════════════════════════════════╗");
  console.log("           CURRENT INVENTORY            ");
  console.log("╚══════════════════════════════════════╝\n");
  console.table(inventoryItems);

  promptUser(
    'Type "Y" to hide items IN USE\nType "N" to hide items IN STOCK: ',
    validateYesNoInput,
    (hideChoice) => {
      const filteredInventory = inventoryItems.filter((item) => {
        if (hideChoice === "Y") return item.status !== "IN USE";
        if (hideChoice === "N") return item.status !== "IN STOCK";
      });

      console.log("\n╔══════════════════════════════════════╗");
      console.log("             FILTERED INVENTORY        ");
      console.log("╚══════════════════════════════════════╝\n");
      console.table(filteredInventory);
      returnToMenu();
    }
  );
}

function addInventoryItem() {
  console.log("╔══════════════════════════════════════╗");
  console.log("             ADD NEW ITEM               ");
  console.log("╚══════════════════════════════════════╝\n");

  promptUser("Enter new Item ID: ", validateNumberInput, (newItemId) => {
    if (inventoryItems.some((item) => item.id === newItemId)) {
      console.log("\n❌ Item ID already exists. Try again.\n");
      return addInventoryItem();
    }

    promptUser("Enter Item Name: ", validateNameInput, (newItemName) => {
      promptUser("Enter Item Price: ", validateNumberInput, (newItemPrice) => {
        promptUser(
          'Enter Item Status ("IN STOCK" or "IN USE", default is IN STOCK): ',
          validateStatusInput,
          (newItemStatus) => {
            inventoryItems.push({
              id: newItemId,
              name: newItemName,
              price: newItemPrice,
              status: newItemStatus,
            });
            console.log("\n✅ Item successfully added!\n");
            console.table(inventoryItems);
            returnToMenu();
          }
        );
      });
    });
  });
}

function updateInventoryItem() {
  console.log("╔══════════════════════════════════════╗");
  console.log("             UPDATE ITEM                ");
  console.log("╚══════════════════════════════════════╝\n");

  promptUser("Enter the Item ID to update: ", validateNumberInput, (updateItemId) => {
    const itemToUpdate = inventoryItems.find((item) => item.id === updateItemId);
    if (!itemToUpdate) {
      console.log("\n❌ Item not found. Try again.\n");
      return updateInventoryItem();
    }

    promptUser(
      `New name (current: ${itemToUpdate.name}): `,
      validateNameInput,
      (updatedNameInput) => {
        const updatedName = updatedNameInput === "" ? itemToUpdate.name : updatedNameInput;

        promptUser(
          `New price (current: ${itemToUpdate.price}): `,
          validateNumberInput,
          (updatedPrice) => {
            promptUser(
              `New status (current: ${itemToUpdate.status}) ["IN STOCK" or "IN USE", default current]: `,
              validateStatusInput,
              (updatedStatus) => {
                itemToUpdate.name = updatedName;
                itemToUpdate.price = updatedPrice;
                itemToUpdate.status = updatedStatus;

                console.log("\n✅ Item successfully updated!\n");
                console.table(inventoryItems);
                returnToMenu();
              }
            );
          }
        );
      }
    );
  });
}

function removeInventoryItem() {
  console.log("╔══════════════════════════════════════╗");
  console.log("             REMOVE ITEM                ");
  console.log("╚══════════════════════════════════════╝\n");

  promptUser("Enter the Item ID to remove: ", validateNumberInput, (removeItemId) => {
    const itemIndex = inventoryItems.findIndex((item) => item.id === removeItemId);
    if (itemIndex === -1) {
      console.log("\n❌ Item not found. Try again.\n");
      return removeInventoryItem();
    }

    inventoryItems.splice(itemIndex, 1);
    console.log("\n✅ Item successfully removed!\n");
    console.table(inventoryItems);
    returnToMenu();
  });
}

function searchInventoryItem() {
  console.log("╔══════════════════════════════════════╗");
  console.log("              SEARCH ITEM               ");
  console.log("╚══════════════════════════════════════╝\n");

  rl.question("Enter Item Name to search: ", (searchQuery) => {
    const results = inventoryItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (results.length === 0) {
      console.log("\n❌ No items found.");
    } else {
      console.log("\n🔍 Search Results:");
      console.table(results);
    }

    returnToMenu();
  });
}

// ==========================
// MENU FUNCTIONS
// ==========================
function printMenuOptions() {
  console.log(
    "╔══════════════════════════╗\n" +
    "          Main Menu         \n" +
    "╚══════════════════════════╝"
  );
  console.log(
    "1. List all items\n" +
    "2. Add an item\n" +
    "3. Update an item\n" +
    "4. Remove an item\n" +
    "5. Search for an item\n" +
    "6. Exit\n" +
    "======================================="
  );
}

function showMainMenu() {
  console.clear();
  console.log("╔══════════════════════════════════════╗");
  console.log("          Inventory Management      ");
  console.log("╚══════════════════════════════════════╝\n");
  printMenuOptions();

  rl.question("Select an option: ", (menuChoice) => {
    switch (menuChoice.trim()) {
      case "1":
        displayInventory();
        break;
      case "2":
        addInventoryItem();
        break;
      case "3":
        updateInventoryItem();
        break;
      case "4":
        removeInventoryItem();
        break;
      case "5":
        searchInventoryItem();
        break;
      case "6":
        console.log("\nExiting program... Goodbye! 👋");
        rl.close();
        break;
      default:
        console.log("\n❌ Invalid option. Try again.\n");
        returnToMenu();
    }
  });
}

// ==========================
// START APPLICATION
// ==========================
console.clear();
showMainMenu();
