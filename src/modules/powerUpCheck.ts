import { User } from "discord.js";
import { Fighter } from "../classes/Fighter";
import { Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8, Level9 } from "../classes/Player";
import { CombatStim, Disarm, Grenade, StunMine  } from "../classes/Skill";
import { Pistol, Rifle, RocketLauncher, Katana, LaserPistol, LaserRifle, PulseCannon, ThermalKatana } from "../classes/Weapon";
import { BattleArmor, BattleBoots, BattleGloves, BattleHelmet, PowerArmor, PowerBoots, PowerGloves, PowerHelmet } from "../classes/Armor";
import { AttackDrone, MedicalDrone, EMPDrone, SpyDrone } from "../classes/Pet";
import { UserInt } from "../database/models/UserModel";
import { getUserData } from "./getUserData";


export async function powerUpCheck(player: User, userint: string) {
    const user = await getUserData(userint);
    
    if (user.exp >= 35000) {
        const fighter = new Level9(player);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 9;
        fighter.exp = user.exp;
        fighter.mobcoin = user.mobcoin;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else if (user.exp >= 16000) {
        const fighter = new Level8(player);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 8;
        fighter.exp = user.exp;
        fighter.mobcoin = user.mobcoin;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else if (user.exp >= 7000) {
        const fighter = new Level7(player);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 7;
        fighter.exp = user.exp;
        fighter.mobcoin = user.mobcoin;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else if (user.exp >= 3000) {
        const fighter = new Level6(player);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 6;
        fighter.exp = user.exp;
        fighter.mobcoin = user.mobcoin;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else if (user.exp >= 1350) {
        const fighter = new Level5(player);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 5;
        fighter.exp = user.exp;
        fighter.mobcoin = user.mobcoin;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else if (user.exp >= 600) {
        const fighter = new Level4(player);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 4;
        fighter.exp = user.exp;
        fighter.mobcoin = user.mobcoin;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else if (user.exp >= 250) {
        const fighter = new Level3(player);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 3;
        fighter.exp = user.exp;
        fighter.mobcoin = user.mobcoin;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else if (user.exp >= 100) {
        const fighter = new Level2(player);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 2;
        fighter.exp = user.exp;
        fighter.mobcoin = user.mobcoin;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else {
        const fighter = new Level1(player);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 1;
        fighter.exp = user.exp;
        fighter.mobcoin = user.mobcoin;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter; 
    }
}

export async function skillsPetsArmsCheck(fighter: Fighter, user: UserInt) {

    //  Armor Check

    if (user.equippedArmors.includes("power_armor")) {
        const power_armor = new PowerArmor();
        fighter.equipArmor(power_armor);
    }
    else if (user.equippedArmors.includes("battle_armor")) {
        const battle_armor = new BattleArmor();
        fighter.equipArmor(battle_armor);
    }
    if (user.equippedArmors.includes("power_helmet")) {
        const power_helmet = new PowerHelmet();
        fighter.equipArmor(power_helmet);
    }
    else if (user.equippedArmors.includes("battle_helmet")) {
        const battle_helmet = new BattleHelmet();
        fighter.equipArmor(battle_helmet);
    }
    if (user.equippedArmors.includes("power_boots")) {
        const power_boots = new PowerBoots();
        fighter.equipArmor(power_boots);
    }
    else if (user.equippedArmors.includes("battle_boots")) {
        const battle_boots = new BattleBoots();
        fighter.equipArmor(battle_boots);
    }
    if (user.equippedArmors.includes("power_gloves")) {
        const power_gloves = new PowerGloves();
        fighter.equipArmor(power_gloves);
    }
    else if (user.equippedArmors.includes("battle_gloves")) {
        const battle_gloves = new BattleGloves();
        fighter.equipArmor(battle_gloves);
    }

    // Weapons check

    if (user.equippedWeapons.includes("laser_pistol")) {
        const laser_pistol = new LaserPistol();
        fighter.equipWeapon(laser_pistol);
    }
    else if (user.equippedWeapons.includes("pistol")) {
        const pistol = new Pistol();
        fighter.equipWeapon(pistol);
    }
    if (user.equippedWeapons.includes("laser_rifle")) {
        const laser_rifle = new LaserRifle();
        fighter.equipWeapon(laser_rifle);
    }
    else if (user.equippedWeapons.includes("rifle")) {
        const rifle = new Rifle();
        fighter.equipWeapon(rifle);
    }
    if (user.equippedWeapons.includes("pulse_cannon")) {
        const pulse_cannon = new PulseCannon();
        fighter.equipWeapon(pulse_cannon);
    }
    else if (user.equippedWeapons.includes("rocket_launcher")) {
        const rocket_launcher = new RocketLauncher();
        fighter.equipWeapon(rocket_launcher);
    }
    if (user.equippedWeapons.includes("thermal_katana")) {
        const thermal_katana = new ThermalKatana();
        fighter.equipWeapon(thermal_katana);
    }
    else if (user.equippedWeapons.includes("katana")) {
        const katana = new Katana();
        fighter.equipWeapon(katana);
    }

    // Pet check

    if (user.pet == "attack_drone") {
        const attack_drone = new AttackDrone();
        attack_drone.setOwner(fighter);
    }
    if (user.pet == "medical_drone") {
        const medical_drone = new MedicalDrone();
        medical_drone.setOwner(fighter);
    }
    if (user.pet == "emp_drone") {
        const emp_drone = new EMPDrone();
        emp_drone.setOwner(fighter);
    }
    if (user.pet == "spy_drone") {
        const spy_drone = new SpyDrone();
        spy_drone.setOwner(fighter);
    }

    // Skill Check

    if (user.skill == "combat_stim") {
        fighter.skill = new CombatStim();
    }
    if (user.skill == "stun_mine") {
        fighter.skill = new StunMine();
    }
    if (user.skill == "grenade") {
        fighter.skill = new Grenade();
    }
    if (user.skill == "disarm") {
        fighter.skill = new Disarm();
    }

}