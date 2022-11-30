import { UserInt } from "../database/models/UserModel";

export async function checkArmor(user: UserInt, armor: string) {

    if (user.equippedArmors.includes("power_armor") && armor == "battle_armor" || user.equippedArmors.includes("power_helmet") && armor == "battle_helmet" || user.equippedArmors.includes("power_boots") && armor == "battle_boots" || user.equippedArmors.includes("power_gloves") && armor == "battle_gloves" ) {
        return true;
    }
    else {
        return false;
    }

}

export async function checkWeapons(user: UserInt, armor: string) {

    if (user.equippedWeapons.includes("thermal_katana") && armor == "katana" || user.equippedArmors.includes("laser_pistol") && armor == "pistol" || user.equippedArmors.includes("laser_rifle") && armor == "rifle" || user.equippedArmors.includes("pulse_cannon") && armor == "rocket_launcher" ) {
        return true;
    }
    else {
        return false;
    }

}