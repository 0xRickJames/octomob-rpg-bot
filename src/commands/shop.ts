import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { BROWN } from "../classes/utils";
import { Command } from "../interfaces/Command";

export const shop: Command = {
  data: new SlashCommandBuilder()
    .setName("shop")
    .setDescription("Displays what House Laristar has to offer!"),

  run: async (interaction) => {
    const embed = new EmbedBuilder()
      .setTitle("House Laristar's Marketplace")
      .setDescription(
        "No more than one of each Weapon or Armor piece. No more than one Skill or Spell at a time!"
      )
      .setColor(BROWN)
      .setThumbnail("https://www.loot-heroes-dev.lol/img/models/angel.png")
      .addFields(
        {
          name: "🛡Armor🛡",
          value:
            "-**Rare Armor:** +20% damage reduction - **40 Gold**\n-**Rare Boots:** +7% damage reduction - **14 Gold**\n-**Rare Helmet:** +10% damage reduction - **20 Gold**\n-**Rare Gloves:** +5% damage reduction - **10 Gold**\n-**Epic Armor:** +30% damage reduction - **60 Gold** - level > 3\n-**Epic Boots:** +10% damage reduction - **20 Gold** - level > 3\n-**Epic Helmet:** +15% damage reduction - **30 Gold** - level > 3\n-**Epic Gloves:** +8% damage reduction - **16 Gold** - level > 3",
          inline: false,
        },
        {
          name: "🗡Weapons🗡",
          value:
            "-**Gale Shortsword:** +5 to damage - **12 Gold**\n-**Tidal Spear:** +10 to damage - **25 Gold**\n-**Molten Axe:** +20 to damage - **50 Gold**\n-**Gaia Mace:** +50 to damage - **125 Gold**\n-**Gale Longsword:** +10 to damage - **25 Gold** - level > 3\n-**Tidal Trident:** +20 to damage - **50 Gold** - level > 3\n-**Molten Greataxe:** +40 to damage - **100 Gold** - level > 3\n-**Gaia Battlehammer:** +100 to damage - **225 Gold** - level > 3",
          inline: false,
        },
        {
          name: "📖Spells📖",
          value:
            "-**Fireball:** deals 25 damage - **20 Gold**\n-**Heal:** heals 25 hitpoints - **20 Gold**\n-**Feeblemind:** deals 10 dmg and removes spells - **50 Gold** - level > 3\n-**Divine Intervention:** heals 10 hp and steals armor - **50 Gold** - level > 3",
          inline: false,
        },
        {
          name: "🧠Skills🧠",
          value:
            "-**Combat Tactics:** doubles attack and armor - **20 Gold**\n-**Stun Attack:** debuffs attack and armor 90% - **20 Gold**\n-**Disarm:** removes a weapon - **50 Gold** - level > 3\n-**Demoralize:** removes a skill - **50 Gold** - level > 3",
          inline: false,
        },
        {
          name: "⚠WARNING!⚠",
          value:
            "**NO REFUNDS!!**\nONE OF EACH **WEAPON** AND **ARMOR** PIECE AT A TIME!!.\nONE **SKILL** AND **SPELL** AT A TIME!!",
          inline: false,
        }
      );

    interaction.reply({ embeds: [embed] });
  },
};
