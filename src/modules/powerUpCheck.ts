import { User, GuildMember } from "discord.js";
import { Fighter } from "../classes/Fighter";
import {
  Level1,
  Level2,
  Level3,
  Level4,
  Level5,
  Level6,
  Level7,
  Level8,
  Level9,
} from "../classes/Player";
import {
  CombatTactics,
  Demoralize,
  Disarm,
  Grenade,
  Wrath,
  StunAttack,
  Vaporize,
} from "../classes/Skill";
import {
  TidalSpear,
  MoltenAxe,
  GaiaMace,
  GaleShortsword,
  TidalTrident,
  MoltenGreataxe,
  GaiaBattlehammer,
  GaleLongsword,
} from "../classes/Weapon";
import {
  RareArmor,
  RareBoots,
  RareGloves,
  RareHelmet,
  EpicArmor,
  EpicBoots,
  EpicGloves,
  EpicHelmet,
} from "../classes/Armor";
import {
  Fireball,
  Heal,
  Feeblemind,
  DivineIntervention,
  Doom,
  Smite,
} from "../classes/Spell";
import { UserInt } from "../database/models/UserModel";
import { getUserData } from "./getUserData";

export async function powerUpCheckBoss(boss_name: string) {
  switch (boss_name as string) {
    case "warrior": {
      const boss = new Fighter("Warrior");
      boss.hp = 300;
      boss.attack = 20;
      boss.critChance = 0.4;
      boss.imageUrl =
        "https://metadata.lootheroes.io/common/hero/warriorSoldier-square.png";
      const tidal_spear = new TidalSpear();
      const gale_shortsword = new GaleShortsword();
      const rare_helmet = new RareHelmet();
      const rare_boots = new RareBoots();
      boss.equipWeapon(tidal_spear);
      boss.equipWeapon(gale_shortsword);
      boss.equipArmor(rare_helmet);
      boss.equipArmor(rare_boots);
      boss.exp = 100;
      boss.gold = 35;
      return boss;
    }
    case "battlemage": {
      const boss = new Fighter("Battlemage");
      boss.hp = 700;
      boss.attack = 30;
      boss.armor = 0.3;
      boss.critChance = 0.4;
      boss.imageUrl =
        "https://metadata.lootheroes.io/common/hero/battlemageSoldier-square.png";
      const tidal_spear = new TidalSpear();
      const gale_shortsword = new GaleShortsword();
      boss.equipWeapon(tidal_spear);
      boss.equipWeapon(gale_shortsword);
      const rare_helmet = new RareHelmet();
      const rare_boots = new RareBoots();
      const rare_gloves = new RareGloves();
      const rare_armor = new RareArmor();
      boss.equipArmor(rare_helmet);
      boss.equipArmor(rare_boots);
      boss.equipArmor(rare_armor);
      boss.equipArmor(rare_gloves);
      const heal = new Heal();
      heal.setOwner(boss);
      boss.skill = new CombatTactics();

      boss.exp = 250;
      boss.gold = 105;
      return boss;
    }
    case "shaman": {
      const boss = new Fighter("Shaman");
      boss.hp = 1200;
      boss.attack = 50;
      boss.armor = 0.3;
      boss.critChance = 0.4;
      boss.imageUrl =
        "https://metadata.lootheroes.io/common/hero/shamanKnight-square.png";
      const tidal_spear = new TidalSpear();
      const gale_shortsword = new GaleShortsword();
      const molten_axe = new MoltenAxe();
      const gaia_mace = new GaiaMace();
      boss.equipWeapon(tidal_spear);
      boss.equipWeapon(gale_shortsword);
      boss.equipWeapon(molten_axe);
      boss.equipWeapon(gaia_mace);
      const rare_helmet = new RareHelmet();
      const rare_boots = new RareBoots();
      const rare_gloves = new RareGloves();
      const rare_armor = new RareArmor();
      boss.equipArmor(rare_helmet);
      boss.equipArmor(rare_boots);
      boss.equipArmor(rare_armor);
      boss.equipArmor(rare_gloves);
      const fireball = new Fireball();
      fireball.setOwner(boss);
      boss.skill = new StunAttack();
      boss.exp = 600;
      boss.gold = 200;

      return boss;
    }
    case "house_laristar": {
      const boss = new Fighter("House Laristar");
      boss.hp = 3000;
      boss.attack = 100;
      boss.armor = 0.37;
      boss.critChance = 0.4;
      boss.imageUrl =
        "https://metadata.lootheroes.io/common/hero/archangelLord-square.png";
      const tidal_trident = new TidalTrident();
      const molten_greataxe = new MoltenGreataxe();
      const gaia_mace = new GaiaMace();
      const gaia_battlehammer = new GaiaBattlehammer();
      boss.equipWeapon(tidal_trident);
      boss.equipWeapon(molten_greataxe);
      boss.equipWeapon(gaia_mace);
      boss.equipWeapon(gaia_battlehammer);
      const epic_helmet = new EpicHelmet();
      const epic_boots = new EpicBoots();
      const epic_gloves = new EpicGloves();
      const epic_armor = new EpicArmor();
      boss.equipArmor(epic_helmet);
      boss.equipArmor(epic_boots);
      boss.equipArmor(epic_armor);
      boss.equipArmor(epic_gloves);
      const smite = new Smite();
      smite.setOwner(boss);
      boss.skill = new Wrath();
      boss.exp = 1500;
      boss.gold = 350;

      return boss;
    }
    case "full_meta_alchemist": {
      const boss = new Fighter("Full Meta Alchemist");
      boss.hp = 6000;
      boss.attack = 200;
      boss.armor = 0.5;
      boss.critChance = 0.4;
      boss.imageUrl =
        "https://metadata.lootheroes.io/common/hero/necromancerLord-square.png";
      const tidal_trident = new TidalTrident();
      const gale_longsword = new GaleLongsword();
      const molten_greataxe = new MoltenGreataxe();
      const gaia_battlehammer = new GaiaBattlehammer();
      boss.equipWeapon(tidal_trident);
      boss.equipWeapon(gale_longsword);
      boss.equipWeapon(molten_greataxe);
      boss.equipWeapon(gaia_battlehammer);
      const tidal_spear = new TidalSpear();
      const gale_shortsword = new GaleShortsword();
      const molten_axe = new MoltenAxe();
      const gaia_mace = new GaiaMace();
      boss.equipWeapon(tidal_spear);
      boss.equipWeapon(gale_shortsword);
      boss.equipWeapon(molten_axe);
      boss.equipWeapon(gaia_mace);
      const epic_helmet = new EpicHelmet();
      const epic_boots = new EpicBoots();
      const epic_gloves = new EpicGloves();
      const epic_armor = new EpicArmor();
      boss.equipArmor(epic_helmet);
      boss.equipArmor(epic_boots);
      boss.equipArmor(epic_armor);
      boss.equipArmor(epic_gloves);
      const doom = new Doom();
      doom.setOwner(boss);
      boss.skill = new Vaporize();
      boss.exp = 3000;
      boss.gold = 600;

      return boss;
    }
  }
}

export async function powerUpCheck(
  player: User,
  userint: string,
  member: GuildMember
) {
  const user = await getUserData(userint);

  if (user.exp >= 35000) {
    const fighter = new Level9(player, member);
    await skillsSpellsArmsCheck(fighter, user);
    fighter.level = 9;
    fighter.exp = user.exp;
    fighter.gold = user.gold;
    fighter.battleWins = user.battleWins;
    fighter.raidWins = user.raidWins;
    return fighter;
  } else if (user.exp >= 16000) {
    const fighter = new Level8(player, member);
    await skillsSpellsArmsCheck(fighter, user);
    fighter.level = 8;
    fighter.exp = user.exp;
    fighter.gold = user.gold;
    fighter.battleWins = user.battleWins;
    fighter.raidWins = user.raidWins;
    return fighter;
  } else if (user.exp >= 7000) {
    const fighter = new Level7(player, member);
    await skillsSpellsArmsCheck(fighter, user);
    fighter.level = 7;
    fighter.exp = user.exp;
    fighter.gold = user.gold;
    fighter.battleWins = user.battleWins;
    fighter.raidWins = user.raidWins;
    return fighter;
  } else if (user.exp >= 3000) {
    const fighter = new Level6(player, member);
    await skillsSpellsArmsCheck(fighter, user);
    fighter.level = 6;
    fighter.exp = user.exp;
    fighter.gold = user.gold;
    fighter.battleWins = user.battleWins;
    fighter.raidWins = user.raidWins;
    return fighter;
  } else if (user.exp >= 1350) {
    const fighter = new Level5(player, member);
    await skillsSpellsArmsCheck(fighter, user);
    fighter.level = 5;
    fighter.exp = user.exp;
    fighter.gold = user.gold;
    fighter.battleWins = user.battleWins;
    fighter.raidWins = user.raidWins;
    return fighter;
  } else if (user.exp >= 600) {
    const fighter = new Level4(player, member);
    await skillsSpellsArmsCheck(fighter, user);
    fighter.level = 4;
    fighter.exp = user.exp;
    fighter.gold = user.gold;
    fighter.battleWins = user.battleWins;
    fighter.raidWins = user.raidWins;
    return fighter;
  } else if (user.exp >= 250) {
    const fighter = new Level3(player, member);
    await skillsSpellsArmsCheck(fighter, user);
    fighter.level = 3;
    fighter.exp = user.exp;
    fighter.gold = user.gold;
    fighter.battleWins = user.battleWins;
    fighter.raidWins = user.raidWins;
    return fighter;
  } else if (user.exp >= 100) {
    const fighter = new Level2(player, member);
    await skillsSpellsArmsCheck(fighter, user);
    fighter.level = 2;
    fighter.exp = user.exp;
    fighter.gold = user.gold;
    fighter.battleWins = user.battleWins;
    fighter.raidWins = user.raidWins;
    return fighter;
  } else {
    const fighter = new Level1(player, member);
    await skillsSpellsArmsCheck(fighter, user);
    fighter.level = 1;
    fighter.exp = user.exp;
    fighter.gold = user.gold;
    fighter.battleWins = user.battleWins;
    fighter.raidWins = user.raidWins;
    return fighter;
  }
}

export async function skillsSpellsArmsCheck(fighter: Fighter, user: UserInt) {
  //  Armor Check

  if (user.equippedArmors.includes("epic_armor")) {
    const epic_armor = new EpicArmor();
    fighter.equipArmor(epic_armor);
  } else if (user.equippedArmors.includes("rare_armor")) {
    const rare_armor = new RareArmor();
    fighter.equipArmor(rare_armor);
  }
  if (user.equippedArmors.includes("epic_helmet")) {
    const epic_helmet = new EpicHelmet();
    fighter.equipArmor(epic_helmet);
  } else if (user.equippedArmors.includes("rare_helmet")) {
    const rare_helmet = new RareHelmet();
    fighter.equipArmor(rare_helmet);
  }
  if (user.equippedArmors.includes("epic_boots")) {
    const epic_boots = new EpicBoots();
    fighter.equipArmor(epic_boots);
  } else if (user.equippedArmors.includes("rare_boots")) {
    const rare_boots = new RareBoots();
    fighter.equipArmor(rare_boots);
  }
  if (user.equippedArmors.includes("epic_gloves")) {
    const epic_gloves = new EpicGloves();
    fighter.equipArmor(epic_gloves);
  } else if (user.equippedArmors.includes("rare_gloves")) {
    const rare_gloves = new RareGloves();
    fighter.equipArmor(rare_gloves);
  }

  // Weapons check

  if (user.equippedWeapons.includes("tidal_trident")) {
    const tidal_trident = new TidalTrident();
    fighter.equipWeapon(tidal_trident);
  } else if (user.equippedWeapons.includes("tidal_spear")) {
    const tidal_spear = new TidalSpear();
    fighter.equipWeapon(tidal_spear);
  }
  if (user.equippedWeapons.includes("molten_greataxe")) {
    const molten_greataxe = new MoltenGreataxe();
    fighter.equipWeapon(molten_greataxe);
  } else if (user.equippedWeapons.includes("molten_axe")) {
    const molten_axe = new MoltenAxe();
    fighter.equipWeapon(molten_axe);
  }
  if (user.equippedWeapons.includes("gaia_battlehammer")) {
    const gaia_battlehammer = new GaiaBattlehammer();
    fighter.equipWeapon(gaia_battlehammer);
  } else if (user.equippedWeapons.includes("gaia_mace")) {
    const gaia_mace = new GaiaMace();
    fighter.equipWeapon(gaia_mace);
  }
  if (user.equippedWeapons.includes("gale_longsword")) {
    const gale_longsword = new GaleLongsword();
    fighter.equipWeapon(gale_longsword);
  } else if (user.equippedWeapons.includes("gale_shortsword")) {
    const gale_shortsword = new GaleShortsword();
    fighter.equipWeapon(gale_shortsword);
  }

  // Spell check

  if (user.spell == "fireball") {
    const fireball = new Fireball();
    fireball.setOwner(fighter);
  }
  if (user.spell == "heal") {
    const heal = new Heal();
    heal.setOwner(fighter);
  }
  if (user.spell == "feeblmind") {
    const feeblmind = new Feeblemind();
    feeblmind.setOwner(fighter);
  }
  if (user.spell == "divine_intervention") {
    const divine_intervention = new DivineIntervention();
    divine_intervention.setOwner(fighter);
  }

  // Skill Check

  if (user.skill == "combat_tactics") {
    fighter.skill = new CombatTactics();
  }
  if (user.skill == "stun_attack") {
    fighter.skill = new StunAttack();
  }
  if (user.skill == "demoralize") {
    fighter.skill = new Demoralize();
  }
  if (user.skill == "disarm") {
    fighter.skill = new Disarm();
  }
}
