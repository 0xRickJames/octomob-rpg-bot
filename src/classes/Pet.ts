import { oneLine } from "common-tags";
import { EmbedBuilder } from "discord.js";
import { Base } from "./Base";
import { Fighter } from "./Fighter";
import { bold, BROWN, formatPercent, getRandomArmorIndex, inlineCode, random } from "./utils";


/** 
 * Pet is a companion for Player which can be used in a battle. Pet will attack
 * during battle based on it's own attribute. To add your own pet, extend Pet
 * class and change the attributes to your liking.
 *
 * ```typescript
 *
 * export class Dragon extends Pet {
 *   name = "dragon";
 *   id = "dragon";
 *   attack = 20;
 *   interceptRate = 0.4;
 * }
 * ```
 * */
export abstract class Pet extends Base {
  /** Pet's owner name */
  ownerName: string = "";
  /** Image to represent this Pet */
  imageUrl?: string;
  /** Frequency to intercept and attack in battle in the form of percentage */
  interceptRate = 0.05;
  /** Damage dealt when attack */
  attack = 5;
  /** Can pet eat other pets */
  canEat: boolean = false;
  /** Amount of healing the pet provides */
  healing = 0;
  /** Can steal ARMOR */
  stealsArmor: boolean = false;

  /** Returns true if intercept */
  isIntercept() {
    return random.bool(this.interceptRate);
  }

  /** Sets the pet ownership */
  setOwner(player: Fighter) {
    player.pet = this;
    this.ownerName = player.name;
    player.hasPet = true;
  }

  /** EmbedBuilder that represents having no Pet */
  no() {
    const embed = new EmbedBuilder()
      .setTitle("Drone")
      .setColor(BROWN)
      .addFields( 
        { name: "Sorry", value: "you do not have a drone.....yet.", inline: true }
        );

    return embed;
  }
  /** EmbedBuilder that represents Pet */
  show() {

    if (this.canEat) {

      const interceptRate = formatPercent(this.interceptRate);
      const embed = new EmbedBuilder()
        .setTitle("Drone")
        .setColor(BROWN)
        .addFields(
          { name: "Name", value: this.name, inline: true },
          { name: "Intercept Rate", value: inlineCode(interceptRate), inline: true },
          { name: "Attack", value: inlineCode(this.attack), inline: true },
          { name: "Special", value: "Destroys other drones!", inline: true },
        );
  
      if (this.imageUrl)
        embed.setThumbnail(this.imageUrl);
  
      return embed;
    }
    else if (this.stealsArmor) {

      const interceptRate = formatPercent(this.interceptRate);
      const embed = new EmbedBuilder()
        .setTitle("Drone")
        .setColor(BROWN)
        .addFields(
            { name: "Name", value: this.name, inline: true },
            { name: "Intercept Rate", value: inlineCode(interceptRate), inline: true },
            { name: "Healing", value: inlineCode(this.healing), inline: true },
            { name: "Special", value: "Steals armor pieces from other players!", inline: true },
        );
  
      if (this.imageUrl)
        embed.setThumbnail(this.imageUrl);
  
      return embed;
    }
    else if (this.healing > 0){

      const interceptRate = formatPercent(this.interceptRate);
      const embed = new EmbedBuilder()
        .setTitle("Drone")
        .setColor(BROWN)
        .addFields(
          { name: "Name", value: this.name, inline: true },
          { name: "Intercept Rate", value: inlineCode(interceptRate), inline: true },
          { name: "Healing", value: inlineCode(this.healing), inline: true },
        );
  
      if (this.imageUrl)
        embed.setThumbnail(this.imageUrl);
  
      return embed;

    }
    else {
      const interceptRate = formatPercent(this.interceptRate);
      const embed = new EmbedBuilder()
        .setTitle("Drone")
        .setColor(BROWN)
        .addFields(
          { name: "Name", value: this.name, inline: true },
          { name: "Intercept Rate", value: inlineCode(interceptRate), inline: true },
          { name: "Attack", value: inlineCode(this.attack), inline: true },
        );
  
      if (this.imageUrl)
        embed.setThumbnail(this.imageUrl);
  
      return embed;
    }



  }
/** Action to take by Pet when in Battle */
intercept(opponent: Fighter, player: Fighter) {

  //const armorProtection = opponent.armor * this.attack;
  //const damageDealt = this.attack - armorProtection;

  opponent.hp -= this.attack;

  if (this.stealsArmor == true && opponent.equippedArmors.length > 0){
    
    var randomArmorIndex = getRandomArmorIndex(opponent.equippedArmors);
    var randomArmor = opponent.equippedArmors[randomArmorIndex];
    opponent.armor -= randomArmor.armor;
    opponent.equippedArmors.splice(randomArmorIndex, 1);
    const embed = new EmbedBuilder()
    .setTitle("Sneaky Pet Attack")
    .setColor(BROWN)
    .setDescription(
      oneLine`${this.ownerName}'s ${this.name} HEALS them for 
      ${this.healing} and steals ${opponent.name}'s ${randomArmor.name}!`
    );
  if (this.imageUrl) 
    embed.setThumbnail(this.imageUrl);

  return embed;
  }

  else if (this.canEat == true && opponent.pet != undefined) {
    opponent.pet = undefined;
    const embed = new EmbedBuilder()
    .setTitle("Drone EMP Blast")
    .setColor(BROWN)
    .setDescription(
      oneLine`${this.ownerName}'s ${this.name} ATTACKS ${opponent.name} for
      ${bold(Math.round(this.attack))} damage and destroys their poor drone!`
    );

  if (this.imageUrl) 
    embed.setThumbnail(this.imageUrl);

  return embed;

  }
  else if (this.healing > 0) {

    player.hp += this.healing;
    const embed = new EmbedBuilder()
    .setTitle("Drone Heal")
    .setColor(BROWN)
    .setDescription(
      oneLine`${this.ownerName}'s ${this.name} HEALS ${this.ownerName} for
      ${bold(Math.round(this.healing))} Hit Points!`
    );

  if (this.imageUrl) 
    embed.setThumbnail(this.imageUrl);

  return embed;
  }
  else {
    //const armorProtection = opponent.armor * this.attack;
    //const damageDealt = this.attack - armorProtection;

    opponent.hp -= this.attack;
    const embed = new EmbedBuilder()
    .setTitle("Drone Attack")
    .setColor(BROWN)
    .setDescription(
      oneLine`${this.ownerName}'s ${this.name} ATTACKS ${opponent.name} for
      ${bold(Math.round(this.attack))} damage!`
    );

  if (this.imageUrl) 
    embed.setThumbnail(this.imageUrl);

  return embed;
  }    
}
}

export class AttackDrone extends Pet {
  name = "Attack Drone";
  id = "attack_drone";
  attack = 15;
  interceptRate = 0.2;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951739053060226/8554D55F-10CE-4308-887E-FD177E3FD68E.png";
  }
  export class MedicalDrone extends Pet {
  name = "Medical Drone";
  id = "medical_drone";
  healing = 15 ;
  attack = 0;
  interceptRate = 0.2;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951738654605373/3B0BAEF5-EC1A-441F-94EB-1B053F407299.png";
  }
  export class EMPDrone extends Pet {
  name = "EMP Drone";
  id = "emp_drone";
  attack = 10;
  interceptRate = 0.2;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998057770391699526/BD4ABD86-1DA7-4AE0-AEE6-B00DEFA22EC8.jpg";
  canEat = true;
  }
  export class SpyDrone extends Pet {
  name = "Spy Drone";
  id = "spy_drone";
  healing = 10;
  attack = 0;
  interceptRate = 0.2;
  //imageUrl = "https://imgur.com/G31Esu0.jpg";
  stealsArmor = true;
  }
  export class Doge extends Pet {
  name = "Doge";
  id = "doge";
  attack = 20;
  interceptRate = .5;
  canEat = true;
  imageUrl = "https://i1.kym-cdn.com/photos/images/facebook/000/581/273/6aa.png";
  }
  export class Kraken extends Pet {
    name = "Kraken";
    id = "kraken";
    attack = 1000;
    healing = 0;
    interceptRate = .25;
    imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/983738999157981264/island_assets_final_v4_seamonsters_kraken.png";
    canEat = false;
    }
  export class Dead extends Pet {
  name = "Dead";
  id = "dead";
  attack = 0;
  healing = 0;
  interceptRate = 0;
  canEat = false;
  }
  export class ED209 extends Pet {
    name = "ED-209";
    id = "ed_209";
    attack = 500;
    healing = 0;
    interceptRate = 0.5;
    imageURL = "https://cdn.discordapp.com/attachments/983738763668770878/998951794896011314/05ED0981-F9AE-4A1B-8E3F-B5E585406CDD.png";
    canEat = true;
  }
  export class Nuker extends Pet {
    name = "Nuker";
    id = "nuker";
    attack = 300;
    interceptRate = .5;
    canEat = true;
    imageUrl = "https://cdn.discordapp.com/attachments/984110043014258788/999052496494411777/nuke.png";
    }
