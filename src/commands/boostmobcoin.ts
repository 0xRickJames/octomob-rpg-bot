import { SlashCommandBuilder, GuildMember, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { getUserData } from "../modules/getUserData";
import { updateMOBcoin, updateXP } from "../modules/updateUserData";

export const boostmobcoin: Command = {
  data: new SlashCommandBuilder()
    .setName("boostmobcoin")
    .setDescription("MOBcoin Booster")
    .addNumberOption((option) =>
      option
      .setName("amount")
      .setDescription("The amount of mobcoin you want to add")
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
      const mobcoin = interaction.options.get("amount");
      if (interaction.options.getUser("boostie")) {
        if (mobcoin != null) { 
          const user = interaction.options.getUser("boostie") as User;
          const  targetUser = await getUserData(user.id);
          await updateMOBcoin(targetUser, mobcoin.value as number);
          await interaction.reply(`Boosted MOBcoin ${mobcoin.value} for ${user.username}!`);
          }
  
      }
      else {
        const member = interaction.member as GuildMember;
        const  targetUser = await getUserData(member.id);
        if (mobcoin != null) { 
        await updateMOBcoin(targetUser, mobcoin.value as number);
        await interaction.reply("Boosted MOBcoin " + mobcoin.value + "!");
        }
      }

   }
   else {
    interaction.reply({content: "This command is restricted", ephemeral: true})
   }

  },
};