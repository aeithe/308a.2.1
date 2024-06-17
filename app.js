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
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
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
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            }
    };


      const robin = new Character("Robin");
      robin.roll()
      robin.inventory = ["sword", "potion", "artifact"];
      robin.companion = new Character("Leo");
      robin.companion.type = "Cat";
      robin.companion.companion = new Character("Frank");
      robin.companion.companion.type = "Flea";
      robin.companion.companion.inventory = ["small hat", "sunglasses"];
 
    
class Adventurer extends Character {
        constructor (name, attack, companion,role1, role2, role3) {
          super(name,companion);
          this.inventory.push("bedroll", "50 gold coins");
          this.attack = attack;
          this.role1 = role1;
          this.role2 = role2;
          this.role3 = role3;
        }
        scout () {
          console.log(`${this.name} is scouting ahead...`);
          super.roll();
        }
        static Max_Health(name){
            return `${name} has a max health of 100.`;
        }
        static ROLES(fighter, healer, wizard){
            
        }

    }
    const alisa = new Adventurer("Alisa");
    alisa.scout();
    alisa.attack = "Fireball";

    

