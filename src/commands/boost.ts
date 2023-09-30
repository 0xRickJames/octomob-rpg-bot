import { SlashCommandBuilder, GuildMember, User, Guild } from "discord.js";
import { Command } from "../interfaces/Command";
import { getUserData } from "../modules/getUserData";
import {
  updateArmor,
  updateSpell,
  updateSkill,
  updateWeapons,
} from "../modules/updateUserData";

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
    if (
      author.roles.cache.has("1039934064376938637") ||
      author.user.id === "267142718856101889"
    ) {
      if (interaction.options.getUser("boostie")) {
        const user = interaction.options.getUser("boostie") as User;
        const targetUser = await getUserData(user.id);
        await updateArmor(targetUser, "epic_armor");
        await updateArmor(targetUser, "epic_helmet");
        await updateArmor(targetUser, "epic_boots");
        await updateArmor(targetUser, "epic_gloves");
        await updateWeapons(targetUser, "gale_shortsword");
        await updateWeapons(targetUser, "tidal_trident");
        await updateWeapons(targetUser, "molten_greataxe");
        await updateWeapons(targetUser, "gaia_battlehammer");
        await updateSpell(targetUser, "feeblemind");
        await updateSkill(targetUser, "disarm");
        await interaction.reply(`${user.username} has been Boosted`);
      } else {
        const member = interaction.member as GuildMember;
        const targetUser = await getUserData(member.id);
        await updateArmor(targetUser, "epic_armor");
        await updateArmor(targetUser, "epic_helmet");
        await updateArmor(targetUser, "epic_boots");
        await updateArmor(targetUser, "epic_gloves");
        await updateWeapons(targetUser, "gale_shortsword");
        await updateWeapons(targetUser, "tidal_trident");
        await updateWeapons(targetUser, "molten_greataxe");
        await updateWeapons(targetUser, "gaia_battlehammer");
        await updateSpell(targetUser, "feeblemind");
        await updateSkill(targetUser, "disarm");
        await interaction.reply("Self Boosted");
      }
    } else {
      interaction.reply({
        content: "This command is restricted",
        ephemeral: true,
      });
    }
  },
};
