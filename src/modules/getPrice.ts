export async function getPrice(Item: string) {
    let price: number;
    switch (Item) {
        case "power_armor": {
            price = 60;
            return price;
        }
        case "power_helmet": {
            price = 30;
            return price;
        }
        case "power_boots": {
            price = 20;
            return price;
        }
        case "power_gloves": {
            price = 16;
            return price;
        }
        case "battle_armor": {
            price = 40;
            return price;
        }
        case "battle_helmet": {
            price = 20;
            return price;
        }
        case "battle_boots": {
            price = 14;
            return price;
        }
        case "battle_gloves": {
            price = 10;
            return price;
        }
        case "katana": {
            price = 12;
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
            price = 125;
            return price;
        }
        case "thermal_katana": {
            price = 25;
            return price;
        }
        case "laser_pistol": {
            price = 50;
            return price;
        }
        case "laser_rifle": {
            price = 100;
            return price;
        }
        case "pulse_cannon": {
            price = 225;
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