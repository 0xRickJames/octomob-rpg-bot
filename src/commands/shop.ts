import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { BROWN } from "../classes/utils";
import { Command } from "../interfaces/Command";

export const shop: Command = {
  data: new SlashCommandBuilder()
    .setName("shop")
    .setDescription("Displays what thxforplayin has to offer!"),

  run: async (interaction) => {
    const embed = new EmbedBuilder()
      .setTitle("thxforplayin's Black Market")
      .setDescription(
        "No more than one of each Weapon or Armor piece. No more than one Skill or Pet at a time!"
      )
      .setColor(BROWN)
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/939309405227339776/1039733241231442001/image.png"
      )
      .addFields(
        {
          name: "🛡Armor",
          value:
            "-Battle Armor: +20% damage reduction - 50 MobCoin\n-Battle Boots: +7% damage reduction - 18 MobCoin\n-Battle Helmet: +10% damage reduction - 25 MobCoin\n-Battle Gloves: +5% damage reduction - 13 MobCoin\n-Power Armor: +30% damage reduction - 150 MobCoin - level > 3\n-Power Boots: +10% damage reduction - 50 MobCoin - level > 3\n-Power Helmet: +15% damage reduction - 75 MobCoin - level > 3\n-Power Gloves: +8% damage reduction - 40 MobCoin - level > 3",
          inline: false,
        },
        {
          name: "🗡Weapons",
          value:
            "-Katana: +5 to damage - 12 MobCoin\n-Pistol: +10 to damage - 25 MobCoin\n-Rifle: +20 to damage - 50 MobCoin\n-Rocket Launcher: +50 to damage - 175 MobCoin\n-Thermal Katana: +10 to damage - 50 MobCoin - level > 3\n-Laser Pistol: +20 to damage - 50 MobCoin - level > 3\n-Laser Rifle: +40 to damage - 200 MobCoin - level > 3\n-Pulse Cannon: +100 to damage - 500 MobCoin - level > 3",
          inline: false,
        },
        {
          name: "🦉Pets",
          value:
            "-Attack Drones: heals 15 hitpoints - 20 MobCoin\n-Medical Drone: deals 15 - 20 MobCoin\n-EMP Drone: deals 10 damag and destroys drones - 50 MobCoin - level > 3\n-Spy Drone: heals 10 hp and steals armor - 50 MobCoin - level > 3",
          inline: false,
        },
        {
          name: "🧠Skills",
          value:
            "-Combat Stim: doubles attack and armor - 20 MobCoin\n-Stun Mine: debuffs attack and armor 90% - 20 MobCoin\n-Disarm: removes a weapon - 50 MobCoin - level > 3\n-Demoralize: removes a skill - 50 MobCoin - level > 3",
          inline: false,
        },
        { name: "⚠WARNING!", value: "NO REFUNDS!!", inline: false }
      );

    interaction.reply({ embeds: [embed] });
  },
};
