import { EmbedBuilder } from "@discordjs/builders";
import { GuildMember, SlashCommandBuilder, User } from "discord.js";
import { BLUE, RED } from "../classes/utils";
import { Command } from "../interfaces/Command";
import { powerUpCheck } from "../modules/powerUpCheck";

export const info: Command = {

  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Post info about Octomob RPG Bot"),

  run: async (interaction) => {

    let member = interaction.member as GuildMember;

    if (member.roles.cache.has("1039934064376938637")) {

    const embed = new EmbedBuilder()
      .setTitle("Octomob RPG Bot")
      .setColor([0/255.0, 0/255.0, 255/255.0])
      .setDescription(
        "Battle your friends, Defeat powerful bosses, Buy and upgrade equipment!\n📖 Game Manual here --> https://octomob-rpg-bot-docs.vercel.app/"
      )
      .setThumbnail("https://cdn.discordapp.com/attachments/939309405227339776/1039749222486003762/logo-octomob.png")
      .setImage("https://cdn.discordapp.com/attachments/939309405227339776/1039749222867669022/octomob-home-hero.png")
      .addFields(
        { name: "Profile", value: "In <#1039751020428939335>, use `/profile` to check your stats and equipment", inline: false },
        { name: "Battle", value: "In <#1039751065001799710>, use `/battle` and choose 1-9 others to start a free for all battle", inline: false },
        { name: "Bossfights", value: "In <#1039751111743119451>, use `/hitman`, `/mademan`, `/flokimusk`, `/bullduck`, or `/donfather` and choose 1-9 others to start a group fight against a boss", inline: false },
        { name: "Shop", value: "In <#1039751170593407056>, use `/shop` to see what equipment you can buy with the `/buy` command", inline: false },
      )

    interaction.reply({ embeds: [embed] });
    }
    else {
      await interaction.reply({ content: 'Access to this command is limited!', ephemeral: true });
    }

  },
};