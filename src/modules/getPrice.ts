export async function getPrice(Item: string) {
    let price: number;
    switch (Item) {
        case "power_armor": {
            price = 150;
            return price;
        }
        case "power_helmet": {
            price = 75;
            return price;
        }
        case "power_boots": {
            price = 50;
            return price;
        }
        case "power_gloves": {
            price = 40;
            return price;
        }
        case "battle_armor": {
            price = 50;
            return price;
        }
        case "battle_helmet": {
            price = 25;
            return price;
        }
        case "battle_boots": {
            price = 18;
            return price;
        }
        case "battle_gloves": {
            price = 13;
            return price;
        }
        case "katana": {
            price = 13;
            return price;
        }
        case "pistol": {
            price = 25;
            return price;
        }
        case "rifle": {
            price = 50;
            return price;
        }
        case "rocket_launcher": {
            price = 250;
            return price;
        }
        case "thermal_katana": {
            price = 50;
            return price;
        }
        case "laser_pistol": {
            price = 50;
            return price;
        }
        case "laser_rifle": {
            price = 200;
            return price;
        }
        case "pulse_cannon": {
            price = 500;
            return price;
        }
        case "attack_drone": {
            price = 20;
            return price;
        }
        case "medical_drone": {
            price = 20;
            return price;
        }
        case "spy_drone": {
            price = 75;
            return price;
        }
        case "emp_drone": {
            price = 75;
            return price;
        }
        case "combat_stim": {
            price = 20;
            return price;
        }
        case "stun_mine": {
            price = 20;
            return price;
        }
        case "disarm": {
            price = 75;
            return price;
        }
        case "demoralize": {
            price = 75;
            return price;
        }
        default: {
            price = 0;
            return price;
        }
    
    }
}