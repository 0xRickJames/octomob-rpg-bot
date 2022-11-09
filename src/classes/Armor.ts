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
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951239343669338/679D8631-3D6B-434B-ADE2-374A92E58C5E.png";
}
export class BattleHelmet extends Armor {
  name = "Battle Helmet";
  id = "battle_helmet";
  armor = 0.1;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951239129772102/0DBADA49-BFD8-4BF1-BC84-80F2603968BF.png";
}
export class BattleBoots extends Armor {
  name = "Battle Boots";
  id = "battle_boots";
  armor = 0.07;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951239574364190/1F15BE40-D174-4444-A631-FA65F18E46C1.png";
}
export class BattleGloves extends Armor {
  name = "Battle Gloves";
  id = "battle_gloves";
  armor = 0.05;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951238924259338/E1CABB3A-9C86-410D-8231-6E2CA55EB811.png";
}
export class PowerArmor extends Armor {
  name = "Power Armor";
  id = "power_armor";
  armor = 0.3;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951386152718406/482E2688-A271-4623-B10F-2BB8C4E3881F.png";
}
export class PowerHelmet extends Armor {
  name = "Power Helmet";
  id = "power_helmet";
  armor = 0.15;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951385750052954/D144D7C4-F077-485F-93E2-FFF606BA44C1.png";
}
export class PowerBoots extends Armor {
  name = "Power Boots";
  id = "power_boots";
  armor = 0.1;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951386735722606/8EFB3A40-8C77-41F7-8C9B-06B3B6CE182F.png";
}
export class PowerGloves extends Armor {
  name = "Power Gloves";
  id = "power_gloves";
  armor = 0.08;
  imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951385427103804/E49DD94B-2508-4A76-981A-0F4044BF4025.png";
}

