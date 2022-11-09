import { SlashCommandBuilder, GuildMember, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { getUserData } from "../modules/getUserData";
import { updateXP } from "../modules/updateUserData";

export const boostcredits: Command = {
  data: new SlashCommandBuilder()
    .setName("boostcredits")
    .setDescription("Credits Booster")
    .addNumberOption((option) =>
      option
      .setName("amount")
      .setDescription("The amount of credits you want to add to yourself")
      .setRequired(true)
    ),
  run: async (interaction) => {

    const credits = interaction.options.get("amount");
    if (interaction.options.getUser("boostie")) {
      if (credits != null) { 
        const user = interaction.options.getUser("boostie") as User;
        const  targetUser = await getUserData(user.id);
        await updateXP(targetUser, credits.value as number);
        await interaction.reply(`Boosted Credits ${credits.value} for ${user.username}!`);
        }

    }
    else {
      const member = interaction.member as GuildMember;
      const  targetUser = await getUserData(member.id);
      if (credits != null) { 
      await updateXP(targetUser, credits.value as number);
      await interaction.reply("Boosted Credits " + credits.value + "!");
      }
    }
  },
};