// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.

//Tequila

// Class Tequila
// Brands
// Type: Blanco, Añejo, Reposado
class Tequila {
    constructor(brand, type){
        this.brand = brand
        this.type = type
    }
}

// class Menu tequila
class Menu {
    constructor() {
        this.tequila = [];
    }


    //Tequila Array

    //add item
    //prompt for brand
    //prompt for type
    //create and push tequila into array
 addTequila(){
    let tequilaBrand = prompt("Enter tequila brand:")
    let tequilaType = prompt("Enter the tequila type:");
    this.tequila.push(new Tequila(tequilaBrand, tequilaType))
 }   


    //delete item
    deleteTequila() {
        let tequilaIndex = prompt("Enter tequila index to delete:");
        this.tequila.splice(tequilaIndex, 1);
    }
    //view item
    viewTequila() {
        let displayTequilas = "";
        for (let i = 0; i < this.tequila.length; i++){

            displayTequilas += `
            ${i} ${this.tequila[i].brand} ${this.tequila[i].type}`
        }

        alert(`
            Tequila Inventory:
            ---------------------------
            ${displayTequilas}
            `);
    }

        //See menu
        showMainMenu(){
            return prompt(`
                Main Menu:
                ------------------
                0) Exit Menu
                1) Add tequila
                2) Delete tequila
                3) View all tequila
                `);
        }

    //Start the menu
    start() {
        let selection = this.showMainMenu();

        while(selection != 0) {
            switch(selection) {

                case "1": this.addTequila();
                break;

                case "2": this.deleteTequila();
                break;

                case "3": this.viewTequila();
                break;

                default: selection = 0;
            }
            selection = this.showMainMenu();
        }
        alert("Exiting Menu.... goodbye");
    }
}
//Initiate the menu and invoke the start method


let menu = new Menu();

menu.start();