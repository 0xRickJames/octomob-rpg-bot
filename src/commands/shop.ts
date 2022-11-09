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
      .setDescription("No more than one of each Weapon or Armor piece. No more than one Skill or Pet at a time!")
      .setColor(BROWN)
      .setThumbnail("https://cdn.discordapp.com/attachments/939309405227339776/1039733241231442001/image.png")
      .addFields(
        { name: "🛡Armor", value: "-Battle Armor: +20% damage reduction - 200 MOBcoin\n-Battle Boots: +7% damage reduction - 70 MOBcoin\n-Battle Helmet: +10% damage reduction - 100 MOBcoin\n-Battle Gloves: +5% damage reduction - 50 MOBcoin\n-Power Armor: +30% damage reduction - 300 MOBcoin - level > 3\n-Power Boots: +10% damage reduction - 100 MOBcoin - level > 3\n-Power Helmet: +15% damage reduction - 150 MOBcoin - level > 3\n-Power Gloves: +8% damage reduction - 80 MOBcoin - level > 3", inline: false, },
        { name: "🗡Weapons", value: "-Katana: +5 to damage - 50 MOBcoin\n-Pistol: +10 to damage - 100 MOBcoin\n-Rifle: +20 to damage - 200 MOBcoin\n-Rocket Launcher: +50 to damage - 500 MOBcoin\n-Thermal Katana: +10 to damage - 100 MOBcoin - level > 3\n-Laser Pistol: +20 to damage - 200 MOBcoin - level > 3\n-Laser Rifle: +40 to damage - 400 MOBcoin - level > 3\n-Pulse Cannon: +100 to damage - 1000 MOBcoin - level > 3", inline: false, },
        { name: "🦉Pets", value: "-Attack Drones: heals 15 hitpoints - 25 MOBcoin\n-Medical Drone: deals 15 - 25 MOBcoin\n-EMP Drone: deals 10 damag and destroys drones - 50 MOBcoin - level > 3\n-Spy Drone: heals 10 hp and steals armor - 50 MOBcoin - level > 3", inline: false, },
        { name: "🧠Skills", value: "-Combat Stim: doubles attack and armor - 25 MOBcoin\n-Stun Mine: debuffs attack and armor 90% - 25 MOBcoin\n-Disarm: removes a weapon - 50 MOBcoin - level > 3\n-Demoralize: removes a skill - 50 MOBcoin - level > 3", inline: false, },
        { name: "⚠WARNING!", value: "NO REFUNDS!!", inline: false, }
      );

    interaction.reply({ embeds: [embed] });
  },
};
