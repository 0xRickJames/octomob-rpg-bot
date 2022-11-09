import { EmbedBuilder, SlashCommandBuilder, User } from "discord.js";
import { RED } from "../classes/utils";
import { Command } from "../interfaces/Command";
import { powerUpCheck } from "../modules/powerUpCheck";

export const skill: Command = {

  data: new SlashCommandBuilder()
    .setName("skill")
    .setDescription("Displays your skill, if you have one."),

  run: async (interaction) => {

    const player = interaction.user as User;

    const fighter = await powerUpCheck(player, player.id);
    
    if (fighter.skill){
        const skill = fighter.skill;
        const skillEmbed = skill.show();
  
        interaction.reply({ embeds: [skillEmbed] });
      }
      else {
        const embed = new EmbedBuilder()
          .setTitle("Skill")
          .setColor(RED)
          .addFields(
            { name: "Sorry", value: "you do not have a skill.....yet.", inline: true}
          )
    
        interaction.reply({ embeds: [embed] });
      }

  },
};