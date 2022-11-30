import { EmbedBuilder, SlashCommandBuilder, User } from "discord.js";
import { RED } from "../classes/utils";
import { Command } from "../interfaces/Command";
import { powerUpCheck } from "../modules/powerUpCheck";

export const pet: Command = {

  data: new SlashCommandBuilder()
    .setName("pet")
    .setDescription("Displays your pet, if you have one."),

  run: async (interaction) => {

    const player = interaction.user as User;

    const member = interaction.guild!.members.cache.get(player.id);
    const fighter = await powerUpCheck(player, player.id, member!);
    
    if (fighter.pet){
        const pet = fighter.pet;
        const petEmbed = pet.show();
  
        interaction.reply({ embeds: [petEmbed] });
      }
      else {
        const embed = new EmbedBuilder()
          .setTitle("Pet")
          .setColor(RED)
          .addFields(
            { name: "Sorry", value: "you do not have a pet.....yet.", inline: true}
          )
    
        interaction.reply({ embeds: [embed] });
      }

  },
};