export async function checkPlayerLevel(level: number, item: string) {

    if (item == "power_armor" || item == "power_helmet" || item == "power_gloves" || item == "power_boots" || item == "thermal_katana" || item == "laser_rifle" || item == "laser_pistol" || item == "pulse_cannon" || "spy_drone" || "emp_drone" || "disarm" || "demoralize") {

        if (level >=4) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }

}
export async function checkItemLevel(item: string) {

    switch (item) {
        case "power_armor": {
            return true;
        }
        case "power_helmet": {
            return true;
        }
        case "power_boots": {
            return true;
        }
        case "power_gloves": {
            return true;
        }
        case "battle_armor": {
            return false;
        }
        case "battle_helmet": {
            return false;
        }
        case "battle_boots": {
            return false;
        }
        case "battle_gloves": {
            return false;
        }
        case "katana": {
            return false;
        }
        case "pistol": {
            return false;
        }
        case "rifle": {
            return false;
        }
        case "rocket_launcher": {
            return false;
        }
        case "thermal_katana": {
            return true;
        }
        case "laser_pistol": {
            return true;
        }
        case "laser_rifle": {
            return true;
        }
        case "pulse_cannon": {
            return true;
        }
        case "attack_drone": {
            return false;
        }
        case "medical_drone": {
            return false;
        }
        case "spy_drone": {
            return true;
        }
        case "emp_drone": {
            return true;
        }
        case "combat_stim": {
            return false;
        }
        case "stun_mine": {
            return false;
        }
        case "disarm": {
            return true;
        }
        case "demoralize": {
            return true;
        }
        default: {
            return false;
        }
    }
}
export async function checkName(item: string) {

    switch (item) {
        case "power_armor": {
            return "Power Armor" as string;
        }
        case "power_helmet": {
            return "Power Helmet" as string;
        }
        case "power_boots": {
            return "Power Boots" as string;
        }
        case "power_gloves": {
            return "Power Gloves" as string;
        }
        case "battle_armor": {
            return "Battle Armor" as string;
        }
        case "battle_helmet": {
            return "Battler Helmet" as string;
        }
        case "battle_boots": {
            return "Battler Boots" as string;
        }
        case "battle_gloves": {
            return "Battler Gloves" as string;
        }
        case "katana": {
            return "Katana" as string;
        }
        case "pistol": {
            return "Pistol" as string;
        }
        case "rifle": {
            return "Rifle" as string;
        }
        case "rocket_launcher": {
            return "Rocket Launcher" as string;
        }
        case "thermal_katana": {
            return "Thermal Katana" as string;
        }
        case "laser_pistol": {
            return "Laser Pistol" as string;
        }
        case "laser_rifle": {
            return "Laser Rifle" as string;
        }
        case "pulse_cannon": {
            return "Pulse Cannon" as string;
        }
        case "attack_drone": {
            return "Attack Drone" as string;
        }
        case "medical_drone": {
            return "Medical Drone" as string;
        }
        case "spy_drone": {
            return "Spy Drone" as string;
        }
        case "emp_drone": {
            return "EMP Drone" as string;
        }
        case "combat_stim": {
            return "Combat Stim" as string;
        }
        case "stun_mine": {
            return "Stune Mine" as string;
        }
        case "disarm": {
            return "Disarm" as string;
        }
        case "demoralize": {
            return "Demoralize" as string;
        }
        default: {
            return false;
        }
    }
}
export async function checkExp(exp: number) {

    const level2 = 100;
    const level3 = 250;
    const level4 = 600;
    const level5 = 1350;
    const level6 = 3000;
    const level7 = 7000;
    const level8 = 16000;
    const level9 = 350000;

    if (exp >= level9) {
        return 9;
    } if (exp >= level9) {
        return 9;
    }

        
}