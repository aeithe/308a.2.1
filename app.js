const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion:{
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
    // roll (mod = 0) {
    //     const result = Math.floor(Math.random() * 20) + 1 + mod;
    //     console.log(`${this.name} rolled a ${result}.`)
    //     }
    }

    for(i = 0; i< adventurer.inventory.length; i++){
        console.log(adventurer.inventory[i]);
      }

      adventurer.roll()
      

      class Character {
        constructor (name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
          this.companion = {};
        }
        rollDice() {
            if(this.name = ""){
             return   roll (mod = 0){
                    let result = Math.floor(Math.random() * 20) + 1 + mod;
                    console.log(`${this.name} rolled a ${result}.`)};
                    }
        };     }

      const robin = new Character("Robin");
      robin.inventory = ["sword", "potion", "artifact"];
      robin.companion = new Character("Leo");
      robin.companion.type = "Cat";
      robin.companion.companion = new Character("Frank");
      robin.companion.companion.type = "Flea";
      robin.companion.companion.inventory = ["small hat", "sunglasses"];