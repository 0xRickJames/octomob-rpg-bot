import { SlashCommandBuilder, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { powerUpCheck } from "../modules/powerUpCheck";

export const profile: Command = {

  data: new SlashCommandBuilder()
    .setName("profile")
    .setDescription("Check your character's stats"),

  run: async (interaction) => {

    const player = interaction.user as User;

    const fighter = powerUpCheck(player, player.id);
    
    await interaction.reply({ embeds: [(await fighter).show()] });

  },
};

