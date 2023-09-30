import { EmbedBuilder } from "@discordjs/builders";
import { GuildMember, SlashCommandBuilder, User } from "discord.js";
import { BLUE, RED } from "../classes/utils";
import { Command } from "../interfaces/Command";
import { powerUpCheck } from "../modules/powerUpCheck";

export const info: Command = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Post info about RPG Bot"),

  run: async (interaction) => {
    let member = interaction.member as GuildMember;

    if (
      member.roles.cache.has("1039934064376938637") ||
      member.user.id === "267142718856101889"
    ) {
      const embed = new EmbedBuilder()
        .setTitle("RPG Bot")
        .setColor([0 / 255.0, 0 / 255.0, 255 / 255.0])
        .setDescription(
          "Battle your friends, Defeat powerful bosses, Buy and upgrade equipment!\n📖 Game Manual here --> https://loa-rpg-bot-docs.vercel.app/"
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/939309405227339776/1157077674280353822/LoA_logo.png"
        )
        .setImage(
          "https://cdn.discordapp.com/attachments/1152274140141735936/1156667631227650198/The_Lands_inside_2.png"
        )
        .addFields(
          {
            name: "Profile",
            value:
              "In <#1157451267006791760>, use `/profile` to check your stats and equipment",
            inline: false,
          },
          {
            name: "Battle",
            value:
              "In <#1157452055431098430>, use `/battle` and choose 1-9 others to start a free for all battle",
            inline: false,
          },
          {
            name: "Bossfights",
            value:
              "In <#1157452218136547459>, use `/warrior`, `/battlemage`, `/shaman`, `/house_laristar`, or `/full_meta_alchemist` and choose 1-9 others to start a group fight against a boss",
            inline: false,
          },
          {
            name: "Shop",
            value:
              "In <#1157452301296996514>, use `/shop` to see what equipment you can buy with the `/buy` command",
            inline: false,
          }
        );

      interaction.reply({ embeds: [embed] });
    } else {
      await interaction.reply({
        content: "Access to this command is limited!",
        ephemeral: true,
      });
    }
  },
};
