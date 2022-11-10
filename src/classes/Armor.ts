import { EmbedBuilder } from "discord.js";
import { Base } from "./Base";
import { Player } from "./Player";
import { formatPercent, inlineCode, SILVER } from "./utils";


/** 
 * Abstract armor class to be used to increase Fighter's armor attribute. To add
 * your own armor, extend Armor class and change the attributes to your liking.
 *
 * ```typescript
 * class Chest extends Armor {
 *    name = "chest";
 *    id = "chest";
 *    armor = 0.08; // 8%
 * }
 * ```
 * */
export abstract class Armor extends Base {
  /** References Player who owns this armor */
  owner?: Player;
  /** Armor image */
  imageUrl?: string;
  /** 
   * Armor's effectiveness in the form of percentage. 
   * The percentage represents how much of damage will be blocked when opponent
   * attacks you.
   * */
  armor = 0.05;

  /** EmbedBuilder that represents Armor */
  show() {
    const armorRate = formatPercent(this.armor);

    const embed = new EmbedBuilder()
      .setTitle("Armor")
      .setColor(SILVER)
      .addFields(
        { name: 'Name', value: this.name, inline: true },
		    { name: 'Armor', value: inlineCode(armorRate), inline: true },
    );

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;
  }
}

export class BattleArmor extends Armor {
  name = "Battle Armor";
  id = "battle_armor";
  armor = 0.2;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548255013896282/barmor.png";
}
export class BattleHelmet extends Armor {
  name = "Battle Helmet";
  id = "battle_helmet";
  armor = 0.1;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548256263798804/bhelmet.png";
}
export class BattleBoots extends Armor {
  name = "Battle Boots";
  id = "battle_boots";
  armor = 0.07;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548255374610533/bboots.png";
}
export class BattleGloves extends Armor {
  name = "Battle Gloves";
  id = "battle_gloves";
  armor = 0.05;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548255903105104/bgloves.png";
}
export class PowerArmor extends Armor {
  name = "Power Armor";
  id = "power_armor";
  armor = 0.3;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548142858207425/parmor.png";
}
export class PowerHelmet extends Armor {
  name = "Power Helmet";
  id = "power_helmet";
  armor = 0.15;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548145014091776/phelmet.png";
}
export class PowerBoots extends Armor {
  name = "Power Boots";
  id = "power_boots";
  armor = 0.1;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548143231516682/pboots.png";
}
export class PowerGloves extends Armor {
  name = "Power Gloves";
  id = "power_gloves";
  armor = 0.08;
  imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1001548144603058316/pgloves.png";
}

