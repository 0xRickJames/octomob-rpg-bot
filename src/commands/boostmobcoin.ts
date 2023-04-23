import { SlashCommandBuilder, GuildMember, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { getUserData } from "../modules/getUserData";
import { updateCredits, updateXP } from "../modules/updateUserData";

export const boostcredits: Command = {
  data: new SlashCommandBuilder()
    .setName("boostcredits")
    .setDescription("Credits Booster")
    .addNumberOption((option) =>
      option
      .setName("amount")
      .setDescription("The amount of credits you want to add")
      .setRequired(true)
    ).addUserOption((option) =>
    option
      .setName("boostie")
      .setDescription("A person to boost")
      .setRequired(false)
  ),
  run: async (interaction) => {

    const author = interaction.member as GuildMember;
    if (author.roles.cache.has("1039934064376938637")) {
      const credits = interaction.options.get("amount");
      if (interaction.options.getUser("boostie")) {
        if (credits != null) { 
          const user = interaction.options.getUser("boostie") as User;
          const  targetUser = await getUserData(user.id);
          await updateCredits(targetUser, credits.value as number);
          await interaction.reply(`Boosted Credits ${credits.value} for ${user.username}!`);
          }
  
      }
      else {
        const member = interaction.member as GuildMember;
        const  targetUser = await getUserData(member.id);
        if (credits != null) { 
        await updateCredits(targetUser, credits.value as number);
        await interaction.reply("Boosted Credits " + credits.value + "!");
        }
      }

   }
   else {
    interaction.reply({content: "This command is restricted", ephemeral: true})
   }

  },
};