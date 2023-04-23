import { User, GuildMember } from "discord.js";
import { Fighter } from "../classes/Fighter";
import { Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8, Level9 } from "../classes/Player";
import { CombatStim, Demoralize, Disarm, Grenade, Nuke, StunMine, Vaporize  } from "../classes/Skill";
import { Pistol, Rifle, RocketLauncher, Katana, LaserPistol, LaserRifle, PulseCannon, ThermalKatana } from "../classes/Weapon";
import { BattleArmor, BattleBoots, BattleGloves, BattleHelmet, PowerArmor, PowerBoots, PowerGloves, PowerHelmet } from "../classes/Armor";
import { AttackDrone, MedicalDrone, EMPDrone, SpyDrone, ED209, Nuker } from "../classes/Pet";
import { UserInt } from "../database/models/UserModel";
import { getUserData } from "./getUserData";

export async function powerUpCheckBoss(boss_name: string) {
    switch (boss_name as string) {
        case "hitman": {
          const boss = new Fighter("Octomob Hitman");
          boss.hp = 300;
          boss.attack = 20;
          boss.critChance = 0.4;
          boss.imageUrl =
            "https://cdn.discordapp.com/attachments/939309405227339776/1039730214177095760/image.png";
          const pistol = new Pistol();
          const katana = new Katana();
          const battle_helmet = new BattleHelmet();
          const battle_boots = new BattleBoots();
          boss.equipWeapon(pistol);
          boss.equipWeapon(katana);
          boss.equipArmor(battle_helmet);
          boss.equipArmor(battle_boots);
          boss.exp = 100;
          boss.credits = 35;
          return boss;
        }
        case "mademan": {
          const boss = new Fighter("Octomob Made Man");
          boss.hp = 700;
          boss.attack = 30;
          boss.armor = 0.3;
          boss.critChance = 0.4;
          boss.imageUrl =
            "https://cdn.discordapp.com/attachments/939309405227339776/1039733529942184076/image.png";
          const pistol = new Pistol();
          const katana = new Katana();
          boss.equipWeapon(pistol);
          boss.equipWeapon(katana);
          const battle_helmet = new BattleHelmet();
          const battle_boots = new BattleBoots();
          const battle_gloves = new BattleGloves();
          const battle_armor = new BattleArmor();
          boss.equipArmor(battle_helmet);
          boss.equipArmor(battle_boots);
          boss.equipArmor(battle_armor);
          boss.equipArmor(battle_gloves);
          const medical_drone = new MedicalDrone();
          medical_drone.setOwner(boss);
          boss.skill = new CombatStim();

          boss.exp = 250;
          boss.credits = 105;
          return boss;
        }
        case "flokimusk": {
          const boss = new Fighter("flokimusk");
          boss.hp = 1200;
          boss.attack = 50;
          boss.armor = 0.3;
          boss.critChance = 0.4;
          boss.imageUrl =
            "https://cryptobullsociety.com/wp-content/uploads/2022/06/Flokimusk-uai-516x516.jpg";
          const pistol = new Pistol();
          const katana = new Katana();
          const rifle = new Rifle();
          const rocket_launcher = new RocketLauncher();
          boss.equipWeapon(pistol);
          boss.equipWeapon(katana);
          boss.equipWeapon(rifle);
          boss.equipWeapon(rocket_launcher);
          const battle_helmet = new BattleHelmet();
          const battle_boots = new BattleBoots();
          const battle_gloves = new BattleGloves();
          const battle_armor = new BattleArmor();
          boss.equipArmor(battle_helmet);
          boss.equipArmor(battle_boots);
          boss.equipArmor(battle_armor);
          boss.equipArmor(battle_gloves);
          const attack_drone = new AttackDrone();
          attack_drone.setOwner(boss);
          boss.skill = new CombatStim();
          boss.exp = 600;
          boss.credits = 200;

          return boss;
        }
        case "bullduck": {
          const boss = new Fighter("BullDuck");
          boss.hp = 3000;
          boss.attack = 100;
          boss.armor = 0.37;
          boss.critChance = 0.4;
          boss.imageUrl =
            "https://cdn.discordapp.com/attachments/939309405227339776/1040079614321639535/image.png";
          const laser_pistol = new LaserPistol();
          const laser_rifle = new LaserRifle();
          const rocket_launcher = new RocketLauncher();
          const pulse_cannon = new PulseCannon();
          boss.equipWeapon(laser_pistol);
          boss.equipWeapon(laser_rifle);
          boss.equipWeapon(rocket_launcher);
          boss.equipWeapon(pulse_cannon);
          const power_helmet = new PowerHelmet();
          const power_boots = new PowerBoots();
          const power_gloves = new PowerGloves();
          const power_armor = new PowerArmor();
          boss.equipArmor(power_helmet);
          boss.equipArmor(power_boots);
          boss.equipArmor(power_armor);
          boss.equipArmor(power_gloves);
          const nuker = new Nuker();
          nuker.setOwner(boss);
          boss.skill = new Nuke();
          boss.exp = 1500;
          boss.credits = 350;

          return boss;
        }
        case "donfather": {
          const boss = new Fighter("The DonFather");
          boss.hp = 6000;
          boss.attack = 200;
          boss.armor = 0.5;
          boss.critChance = 0.4;
          boss.imageUrl =
            "https://cdn.discordapp.com/attachments/939309405227339776/1039729672725991444/image.png";
          const laser_pistol = new LaserPistol();
          const thermal_katana = new ThermalKatana();
          const laser_rifle = new LaserRifle();
          const pulse_cannon = new PulseCannon();
          boss.equipWeapon(laser_pistol);
          boss.equipWeapon(thermal_katana);
          boss.equipWeapon(laser_rifle);
          boss.equipWeapon(pulse_cannon);
          const pistol = new Pistol();
          const katana = new Katana();
          const rifle = new Rifle();
          const rocket_launcher = new RocketLauncher();
          boss.equipWeapon(pistol);
          boss.equipWeapon(katana);
          boss.equipWeapon(rifle);
          boss.equipWeapon(rocket_launcher);
          const power_helmet = new PowerHelmet();
          const power_boots = new PowerBoots();
          const power_gloves = new PowerGloves();
          const power_armor = new PowerArmor();
          boss.equipArmor(power_helmet);
          boss.equipArmor(power_boots);
          boss.equipArmor(power_armor);
          boss.equipArmor(power_gloves);
          const ed_209 = new ED209();
          ed_209.setOwner(boss);
          boss.skill = new Vaporize();
          boss.exp = 3000;
          boss.credits = 600;

          return boss;
        }
        
      }
}

export async function powerUpCheck(player: User, userint: string, member: GuildMember) {
    const user = await getUserData(userint);
    
    if (user.exp >= 35000) {
        const fighter = new Level9(player, member!);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 9;
        fighter.exp = user.exp;
        fighter.credits = user.credits;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else if (user.exp >= 16000) {
        const fighter = new Level8(player, member!);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 8;
        fighter.exp = user.exp;
        fighter.credits = user.credits;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else if (user.exp >= 7000) {
        const fighter = new Level7(player, member!);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 7;
        fighter.exp = user.exp;
        fighter.credits = user.credits;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else if (user.exp >= 3000) {
        const fighter = new Level6(player, member!);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 6;
        fighter.exp = user.exp;
        fighter.credits = user.credits;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else if (user.exp >= 1350) {
        const fighter = new Level5(player, member!);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 5;
        fighter.exp = user.exp;
        fighter.credits = user.credits;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else if (user.exp >= 600) {
        const fighter = new Level4(player, member!);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 4;
        fighter.exp = user.exp;
        fighter.credits = user.credits;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else if (user.exp >= 250) {
        const fighter = new Level3(player, member!);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 3;
        fighter.exp = user.exp;
        fighter.credits = user.credits;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else if (user.exp >= 100) {
        const fighter = new Level2(player, member!);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 2;
        fighter.exp = user.exp;
        fighter.credits = user.credits;
        fighter.battleWins = user.battleWins;
        fighter.raidWins = user.raidWins;
        return fighter;
    }
    else {
        const fighter = new Level1(player, member!);
        await skillsPetsArmsCheck(fighter, user);
        fighter.level = 1;
        fighter.exp = user.exp;
        fighter.credits = user.credits;
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
    if (user.skill == "demoralize") {
        fighter.skill = new Demoralize();
    }
    if (user.skill == "disarm") {
        fighter.skill = new Disarm();
    }

}