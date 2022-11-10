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
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548145353822309/pistol.png";
}
export class Rifle extends Weapon {
  name = "Rifle";
  id = "rifle";
  attack = 20;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548145647419443/rifle.png";
}
export class RocketLauncher extends Weapon {
  name = "Rocket launcher";
  id = "rocket_launcher";
  attack = 50;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548145957814282/rlauncher.png";
}
export class Katana extends Weapon {
  name = "Katana";
  id = "katana";
  attack = 5;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548198638276628/katana.png";
}
export class LaserPistol extends Weapon {
  name = "Laser Pistol";
  id = "laser_pistol";
  attack = 20;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548199238057984/lpistol.png";
}
export class LaserRifle extends Weapon {
  name = "Laser Rifle";
  id = "laser_rifle";
  attack = 40;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548199602950174/lrifle.png";
}
export class PulseCannon extends Weapon {
  name = "Pulse Cannon";
  id = "pulse_cannon";
  attack = 100;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548144271691826/pcannon.png";
}
export class ThermalKatana extends Weapon {
  name = "Thermal Katana";
  id = "thermal_katana";
  attack = 10;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548146645663754/tkatana.png";
}

