import { SlashCommandBuilder, GuildMember, User, Guild } from "discord.js";
import { Command } from "../interfaces/Command";
import { getUserData } from "../modules/getUserData";
import { updateArmor, updatePet, updateSkill, updateWeapons } from "../modules/updateUserData";

export const boost: Command = {
  data: new SlashCommandBuilder()
    .setName("boost")
    .setDescription("Booster")
    .addUserOption((option) =>
    option
      .setName("boostie")
      .setDescription("A person to boost")
      .setRequired(false)
  ),
  run: async (interaction) => {

    const author = interaction.member as GuildMember;
    if (author.roles.cache.has("1039934064376938637")) {
      if (interaction.options.getUser("boostie")) {
        const user = interaction.options.getUser("boostie") as User;
        const  targetUser = await getUserData(user.id);
        await updateArmor(targetUser, "power_armor");
        await updateArmor(targetUser, "power_helmet");
        await updateArmor(targetUser, "power_boots");
        await updateArmor(targetUser, "power_gloves");
        await updateWeapons(targetUser, "thermal_katana");    
        await updateWeapons(targetUser, "laser_pistol");
        await updateWeapons(targetUser, "laser_rifle");    
        await updateWeapons(targetUser, "pulse_cannon");
        await updatePet(targetUser, "spy_drone");
        await updateSkill(targetUser, "disarm");
        await interaction.reply(`${user.username} has been Boosted`)
  
      }
      else {
        const member = interaction.member as GuildMember;
        const  targetUser = await getUserData(member.id);
        await updateArmor(targetUser, "power_armor");
        await updateArmor(targetUser, "power_helmet");
        await updateArmor(targetUser, "power_boots");
        await updateArmor(targetUser, "power_gloves");
        await updateWeapons(targetUser, "thermal_katana");    
        await updateWeapons(targetUser, "laser_pistol");
        await updateWeapons(targetUser, "laser_rifle");    
        await updateWeapons(targetUser, "pulse_cannon");
        await updatePet(targetUser, "spy_drone");
        await updateSkill(targetUser, "disarm");
        await interaction.reply("Self Boosted")
      }

   }
   else {
    interaction.reply({content: "This command is restricted", ephemeral: true});
   }

  },
};