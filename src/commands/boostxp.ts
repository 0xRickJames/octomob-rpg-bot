import { SlashCommandBuilder, GuildMember, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { getUserData } from "../modules/getUserData";
import { updateXP } from "../modules/updateUserData";

export const boostxp: Command = {
  data: new SlashCommandBuilder()
    .setName("boostxp")
    .setDescription("XP Booster")
    .addNumberOption((option) =>
      option
      .setName("amount")
      .setDescription("The amount of XP you want to add")
      .setRequired(true)
    )
    .addUserOption((option) =>
    option
      .setName("boostie")
      .setDescription("A person to boost")
      .setRequired(false)
  ),
  run: async (interaction) => {

    const xp = interaction.options.get("amount");

    if (interaction.options.getUser("boostie")) {
      if (xp != null) { 
        const user = interaction.options.getUser("boostie") as User;
        const  targetUser = await getUserData(user.id);
        await updateXP(targetUser, xp.value as number);
        await interaction.reply(`Boosted XP ${xp.value} points for ${user.username}!`);
        }

    }
    else {
      const member = interaction.member as GuildMember;
      const  targetUser = await getUserData(member.id);
      if (xp != null) { 
      await updateXP(targetUser, xp.value as number);
      await interaction.reply("Boosted XP " + xp.value + " points!");
      }
    }
  },
};