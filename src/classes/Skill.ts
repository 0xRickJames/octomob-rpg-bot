import { oneLine } from "common-tags";
import { EmbedBuilder } from "discord.js";
import { Base } from "./Base";
import { Fighter } from "./Fighter";
import { formatPercent, getRandomArmorIndex, getRandomWeaponIndex, GREEN, inlineCode, random, RED } from "./utils";


/** 
 * Skill is used in the battle which the player will experience boost or any
 * kind of advantage during battle. 
 *
 * ```typescript
 * // example Skill which does double damage when intercept.
 * export class Rage extends Skill {
 *   name = "Rage";
 *   id = "rage";
 *   description = "Does double damage";
 *
 *   use(p1: Fighter, p2: Fighter) {
 *     p1.attack *= 2;
 *
 *     const embed = new EmbedBuilder()
 *       .setTitle("Skill interception")
 *       .setColor(GREEN)
 *       .setDescription(
 *         oneLine`${p1.name} uses **${this.name} Skill** and increases their
 *         strength to ${inlineCode(p1.attack)}!`
 *       )
 *
 *     if (this.imageUrl)
 *       embed.setThumbnail(this.imageUrl);
 *
 *     return embed;
 *   }
 *  
 *   // this has to be overriden to prevent from skill's side effect leak to the
 *   // next round
 *   close(p1: Fighter, p2: Fighter) {
 *     p1.attack /= 2;
 *   }
 * }
 * ```
 * */
export abstract class Skill extends Base {
  /** Skill description */
  abstract description: string; 
  /** Frequency of Skill being activated during battle in percentage */
  interceptRate = 0.2;
  /** Image to represent this skill */
  imageUrl?: string;

  /** 
   * Mutates fighter's attributes during battle
   * @returns {EmbedBuilder} The embed will be shown during battle.
   * */
  abstract use(player: Fighter, opponent: Fighter): EmbedBuilder;

  /** Clean up or remove any attribute changes before next round */
  abstract close(player: Fighter, opponent: Fighter): void;

  /** Returns true if skill is activated */
  intercept() {
    return random.bool(this.interceptRate);
  }

  /** Sets the skill to player */
  setOwner(player: Fighter) {
    player.skill = this;
  }

  /** EmbedBuilder that represents Skill */
  show() {
    const interceptRate = formatPercent(this.interceptRate);
    const embed = new EmbedBuilder()
      .setTitle("Skill")
      .setColor(GREEN)
      .addFields(
        { name: "Name", value: this.name },
        { name: "Intercept Rate", value: inlineCode(interceptRate), inline: true },
        { name: "Description", value: this.description },
      );

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;
  }
}

export class Disarm extends Skill {
  name = "Disarm";
  id = "disarm";
  description = "Removes a weapon from opponent";
  imageURL = "https://cdn.discordapp.com/attachments/983738763668770878/999004005365710968/2A30B39E-6E7B-4F5F-93DC-71A548E0064E.png";
  fighters: any;
  playerDiedText: any;
  onFighterDead: any;
  msg: any;

  use(p1: Fighter, p2: Fighter) {

    if (p2.equippedWeapons.length > 0){

      var randomWeaponIndex = getRandomWeaponIndex(p2.equippedWeapons);
      var randomWeapon = p2.equippedWeapons[randomWeaponIndex]
      p2.attack -= p2.equippedWeapons[randomWeaponIndex].attack;
      p2.equippedWeapons.splice(randomWeaponIndex, 1);

      const embed = new EmbedBuilder()
        .setTitle("Disarm Activated!")
        .setColor(RED)
        .setDescription(
          oneLine`${p1.name} uses **${this.name}** and disarms ${p2.name} of their ${randomWeapon.name}!`
        )
  
      if (this.imageUrl)
        embed.setThumbnail(this.imageUrl);
  
      return embed;

    }
    else {

      const embed = new EmbedBuilder()
      .setTitle("Disarm Activated!")
      .setColor(RED)
      .setDescription(
        oneLine`${p1.name} uses **${this.name}** and tries to disarm ${p2.name}, but ${p2.name} already has no weapons!`
      )

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;


    }
  }

  close() {
    //pass
  }
}

export class Vaporize extends Skill {
  name = "Vaporize";
  id = "vaporize";
  description = "Removes any armor/weapons, and deals massive damage";
  imageURL = "https://cdn.discordapp.com/attachments/984110043014258788/999052496494411777/nuke.png";
  interceptRate = 0.5;
  fighters: any;
  playerDiedText: any;
  onFighterDead: any;
  msg: any;

  use(p1: Fighter, p2: Fighter) {
    const attackRate = 2000;
    const armorProtection = p2.armor * attackRate;
    const damageDealt = attackRate - armorProtection;
    p2.hp -= damageDealt;

    if (p2.equippedWeapons.length > 0 || p2.equippedArmors.length > 0) {

      if (p2.equippedWeapons.length > 0) {
        p2.equippedWeapons.forEach(x => p2.attack -= x.attack);
        p2.equippedWeapons = [];
      }
      if (p2.equippedArmors.length > 0) {
        p2.equippedArmors.forEach(x => p2.armor - x.armor);
        p2.equippedArmors = [];
      }

      const embed = new EmbedBuilder()
        .setTitle("Vaporize Activated!")
        .setColor(RED)
        .setDescription(
          oneLine`${p1.name} uses **${this.name}**, it deals ${(damageDealt).toFixed(0)} damage  and leaves ${p2.name} with NO armor, weapons!`
        )
  
      if (this.imageUrl)
        embed.setThumbnail(this.imageUrl);
  
      return embed;

    }
    else {

      const embed = new EmbedBuilder()
      .setTitle("Vaporize Activated!")
      .setColor(RED)
      .setDescription(
        oneLine`${p1.name} uses **${this.name}**, it deals ${(damageDealt).toFixed(0)} damage, but ${p2.name} already has NO Armor and NO Weapons!`
      )

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;


    }
  }

  close() {
    //pass
  }
}
export class CombatStim extends Skill {
  name = "Combat Stim";
  id = "combat_stim";
  description = "Doubles Attack and Armor";
  imageURL = "https://cdn.discordapp.com/attachments/983738763668770878/999004006003265736/F36FE759-6F29-428D-BD60-A5946A6A8B75.png";

  use(p1: Fighter, p2: Fighter) {
    p1.attack *= 2;
    p1.armor *= 2;

    const embed = new EmbedBuilder()
      .setTitle("Combat Stim Activated")
      .setColor(GREEN)
      .setDescription(
        oneLine`${p1.name} uses **${this.name} Skill** and increases their
        Attack to ${inlineCode(p1.attack)} and Armor to ${inlineCode((p1.armor).toFixed(2))}!`
      )

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;
  }

  close(p1: Fighter, p2: Fighter) {
    p1.attack /= 2;
    p1.armor /= 2;
  }
}
export class StunMine extends Skill {
  name = "Stun Mine";
  id = "Stun Mine";
  description = "Debuffs opponents Attack and Armor 90%";
  iamgeURL = "https://cdn.discordapp.com/attachments/983738763668770878/998951604608831558/41A0A734-8DEE-4AA2-8AC5-59E44F0488FC.png";

  use(p1: Fighter, p2: Fighter) {
    p2.attack /= 10;
    p2.armor /= 10;

    const embed = new EmbedBuilder()
      .setTitle("Stun Mine Activated!")
      .setColor(GREEN)
      .setDescription(
        oneLine`${p1.name} uses **${this.name} Skill** and decreases ${p2.name}'s
        Attack to ${inlineCode(p2.attack)} and Armor to ${inlineCode((p2.armor).toFixed(2))}!`
      )

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;
  }

  close(p1: Fighter, p2: Fighter) {
    p2.attack *= 10;
    p2.armor *= 10;
  }
}
export class Grenade extends Skill {
  name = "Grenade";
  id = "grenade";
  description = "Removes a piece of armor from opponent";
  fighters: any;
  playerDiedText: any;
  onFighterDead: any;
  msg: any;
  imageURL = "https://cdn.discordapp.com/attachments/983738763668770878/999004005701271614/B3F5930F-4929-414F-98B0-EF7AD4A9BEA2.png";

  use(p1: Fighter, p2: Fighter) {

    if (p2.equippedArmors.length > 0){

      var randomArmorIndex = getRandomArmorIndex(p2.equippedArmors);
      var randomArmor = p2.equippedArmors[randomArmorIndex]
      p2.armor -= p2.equippedArmors[randomArmorIndex].armor;
      p2.equippedArmors.splice(randomArmorIndex, 1);

      const embed = new EmbedBuilder()
        .setTitle("Grenade Activated!")
        .setColor(RED)
        .setDescription(
          oneLine`${p1.name} uses **${this.name}** and destroys ${p2.name}'s ${randomArmor.name}!`
        )
  
      if (this.imageUrl)
        embed.setThumbnail(this.imageUrl);
  
      return embed;

    }
    else {

      const embed = new EmbedBuilder()
      .setTitle("Grenade Activated!")
      .setColor(RED)
      .setDescription(
        oneLine`${p1.name} uses **${this.name}**, but ${p2.name} already has no armor!`
      )

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;


    }
  }

  close(p1: Fighter, p2: Fighter) {
    //pass
  }
}
export class Nuke extends Skill {
  name = "Nuke";
  id = "nuke";
  description = "Removes a piece of armor from opponent and deals massive damage";
  interceptRate = 0.5;
  fighters: any;
  playerDiedText: any;
  onFighterDead: any;
  msg: any;
  imageURL = "https://cdn.discordapp.com/attachments/984110043014258788/999052496494411777/nuke.png";

  use(p1: Fighter, p2: Fighter) {

    const attackRate = 1000;
    const armorProtection = p2.armor * attackRate;
    const damageDealt = attackRate - armorProtection;
    p2.hp -= damageDealt;

    if (p2.equippedArmors.length > 0){

      var randomArmorIndex = getRandomArmorIndex(p2.equippedArmors);
      var randomArmor = p2.equippedArmors[randomArmorIndex]
      p2.armor -= p2.equippedArmors[randomArmorIndex].armor;
      p2.equippedArmors.splice(randomArmorIndex, 1);

      const embed = new EmbedBuilder()
        .setTitle("Nuke Activated!")
        .setColor(RED)
        .setDescription(
          oneLine`${p1.name} uses **${this.name}**, deals ${(damageDealt).toFixed(0)} damage and destroys ${p2.name}'s ${randomArmor.name}!`
        )
  
      if (this.imageUrl)
        embed.setThumbnail(this.imageUrl);
  
      return embed;

    }
    else {

      const embed = new EmbedBuilder()
      .setTitle("Nuke Activated!")
      .setColor(RED)
      .setDescription(
        oneLine`${p1.name} uses **${this.name}** and deals ${damageDealt} damage, but ${p2.name} has no armor to destroy!`
      )

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;


    }
  }

  close(p1: Fighter, p2: Fighter) {
    //pass
  }
}
export class Demoralize extends Skill {
  name = "Demoralize";
  id = "demoralize";
  description = "Removes a skill  from opponent";
  //imageURL = "https://cdn.discordapp.com/attachments/983738763668770878/999004005365710968/2A30B39E-6E7B-4F5F-93DC-71A548E0064E.png";
  fighters: any;
  playerDiedText: any;
  onFighterDead: any;
  msg: any;

  use(p1: Fighter, p2: Fighter) {

    const no_skill = new NoSkill()

    if (p2.skill != null && p2.skill != no_skill){

      const old_skill = p2.skill;
      p2.skill = no_skill;

      const embed = new EmbedBuilder()
        .setTitle("Demoralize Activated!")
        .setColor(GREEN)
        .setDescription(
          oneLine`${p1.name} uses **${this.name}**! Now ${p2.name} cannot use ${old_skill}!`
        )
  
      if (this.imageUrl)
        embed.setThumbnail(this.imageUrl);
  
      return embed;

    }
    else if (p2.skill == no_skill) {

      const embed = new EmbedBuilder()
      .setTitle("Demoralize Activated!")
      .setColor(RED)
      .setDescription(
        oneLine`${p1.name} uses **${this.name}**, but ${p2.name} is already Demoralized! `
      )

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;

    }
    else {
      
      const embed = new EmbedBuilder()
      .setTitle("Demoralize Activated!")
      .setColor(RED)
      .setDescription(
        oneLine`${p1.name} uses **${this.name}**, but ${p2.name} has no skill! `
      )

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;
      
    }
  }

  close() {
    //pass
  }
}
export class NoSkill extends Skill {
  name = "No Skill";
  id = "no_skill";
  description = "Lack of a skill";
  //imageURL = "https://cdn.discordapp.com/attachments/983738763668770878/999004006003265736/F36FE759-6F29-428D-BD60-A5946A6A8B75.png";

  use(p1: Fighter) {

    const embed = new EmbedBuilder()
      .setTitle("Skill Fail!")
      .setColor(RED)
      .setDescription(
        oneLine`${p1.name} cannot use their skill!`
      )

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;
  }

  close() {
    //pass
  }
}

function stealArmor(opponent: Fighter){
  var randomArmorIndex = getRandomArmorIndex(opponent.equippedArmors);
  var randomArmor = opponent.equippedArmors[randomArmorIndex];
  opponent.armor -= randomArmor.armor;
  opponent.equippedArmors.splice(randomArmorIndex, 1);
}
