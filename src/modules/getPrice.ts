export async function getPrice(Item: string) {
    let price: number;
    switch (Item) {
        case "power_armor": {
            price = 300;
            return price;
        }
        case "power_helmet": {
            price = 150;
            return price;
        }
        case "power_boots": {
            price = 100;
            return price;
        }
        case "power_gloves": {
            price = 80;
            return price;
        }
        case "battle_armor": {
            price = 200;
            return price;
        }
        case "battle_helmet": {
            price = 100;
            return price;
        }
        case "battle_boots": {
            price = 70;
            return price;
        }
        case "battle_gloves": {
            price = 50;
            return price;
        }
        case "katana": {
            price = 50;
            return price;
        }
        case "pistol": {
            price = 100;
            return price;
        }
        case "rifle": {
            price = 200;
            return price;
        }
        case "rocket_launcher": {
            price = 500;
            return price;
        }
        case "thermal_katana": {
            price = 100;
            return price;
        }
        case "laser_pistol": {
            price = 200;
            return price;
        }
        case "laser_rifle": {
            price = 400;
            return price;
        }
        case "pulse_cannon": {
            price = 1000;
            return price;
        }
        case "attack_drone": {
            price = 50;
            return price;
        }
        case "medical_drone": {
            price = 50;
            return price;
        }
        case "spy_drone": {
            price = 150;
            return price;
        }
        case "emp_drone": {
            price = 150;
            return price;
        }
        case "combat_stim": {
            price = 50;
            return price;
        }
        case "stun_mine": {
            price = 50;
            return price;
        }
        case "disarm": {
            price = 150;
            return price;
        }
        case "demoralize": {
            price = 150;
            return price;
        }
        default: {
            price = 0;
            return price;
        }
    
    }
}