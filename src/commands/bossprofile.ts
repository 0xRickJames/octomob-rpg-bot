import { SlashCommandBuilder } from "discord.js";
import { Command } from "../interfaces/Command";
import { powerUpCheckBoss } from "../modules/powerUpCheck";

export const bossprofile: Command = {
  data: new SlashCommandBuilder()
    .setName("bossprofile")
    .setDescription("Check a boss's profile")
    .addStringOption((option) =>
      option
        .setName("boss")
        .setDescription("Boss whose profile will be shown")
        .setRequired(true)
        .addChoices(
          { name: "Hitman", value: "hitman" },
          { name: "Made Man", value: "mademan" },
          { name: "flokimusk", value: "flokimusk" },
          { name: "BullDuck", value: "bullduck" },
          { name: "The DonFather", value: "donfather" }
        )
    ),

  run: async (interaction) => {
    if (interaction.options.get("boss") != null) {
      const boss_name = interaction.options.get("boss");
      if (boss_name != null) {

        const boss = await powerUpCheckBoss(boss_name.value as string);
        if (boss != undefined) {

          await interaction.reply({ embeds: [boss.showBoss()] });
        }
        
      }
    }
  },
};
