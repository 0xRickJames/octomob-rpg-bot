import { EmbedBuilder } from "discord.js";
import { Base } from "./Base";
import { Player } from "./Player";
import { inlineCode, SILVER } from "./utils";


/** 
 * Abstract weapon class to be used to increase Fighter's attack attribute. To
 * add your own weapon, extend Weapon class and change the attributes to your
 * liking.
 *
 * ```typescript
 * class Sword extends Weapon {
 *    name = "sword";
 *    id = "sword";
 *    attack = 15;
 * }
 * ```
 * */
export abstract class Weapon extends Base {
  /** References Player who owns this weapon */
  owner?: Player;
  /** Weapon image */
  imageUrl?: string;

  /** Attack attribute to be added when player equip this weapon */
  attack = 10;

  /** EmbedBuilder that represents Weapon */
  show() {

    const embed = new EmbedBuilder()
      .setTitle("Weapon")
      .setColor(SILVER)
      .addFields(
        { name: "Name", value: this.name, inline: true },
        { name: "Attack", value: inlineCode(this.attack), inline: true });

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;
  }
}

export class Pistol extends Weapon {
  name = "Pistol";
  id = "pistol";
  attack = 10;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951498916581426/FAF96D3E-DBB0-425F-9C5C-785EDEFC34B4.png";
}
export class Rifle extends Weapon {
  name = "Rifle";
  id = "rifle";
  attack = 20;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951499138867370/CB1D96A9-77E8-4CCC-8C4F-CA39B2669021.png";
}
export class RocketLauncher extends Weapon {
  name = "Rocket launcher";
  id = "rocket_launcher";
  attack = 50;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951499747045477/8B6F57C5-93CC-4E2C-87F6-4C28F5851C1F.png";
}
export class Katana extends Weapon {
  name = "Katana";
  id = "katana";
  attack = 5;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951499365367848/9EBFE3F0-2B01-41A9-84E0-225676087397.png";
}
export class LaserPistol extends Weapon {
  name = "Laser Pistol";
  id = "laser_pistol";
  attack = 20;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951603577049159/089D107A-74B2-494D-B104-42B2E57AB348.png";
}
export class LaserRifle extends Weapon {
  name = "Laser Rifle";
  id = "laser_rifle";
  attack = 40;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951603816116284/16DF2473-42BA-4A6E-BBE2-4F3732C4AE13.png";
}
export class PulseCannon extends Weapon {
  name = "Pulse Cannon";
  id = "pulse_cannon";
  attack = 100;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998979570583732358/850D766D-A495-46B1-A64E-CF88A5908638.png";
}
export class ThermalKatana extends Weapon {
  name = "Thermal Katana";
  id = "thermal_katana";
  attack = 10;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951604109725846/3371ECB1-BCE1-479D-BBCD-FBA5523E0A5C.png";
}

