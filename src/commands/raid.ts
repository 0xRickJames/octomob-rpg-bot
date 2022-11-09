import { CommandInteraction, SlashCommandBuilder, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { Battle } from "../classes/Battle";
import { Fighter } from "../classes/Fighter";
import { powerUpCheck } from "../modules/powerUpCheck";
import { getUserData } from "../modules/getUserData";

export const raid: Command = {
  data: new SlashCommandBuilder()
    .setName("raid")
    .setDescription("Raid against a monster!"),
  run: async (interaction: CommandInteraction) => {

    const player = interaction.user as User;
    
    const player1_data = await getUserData(player.id);

    const author = await powerUpCheck(player, player.id);
    const bots = [
      new Fighter("Michael"),
      new Fighter("Mansion"),
      new Fighter("John"),
    ];

    const boss = new Fighter("Boogey Man");
    boss.hp = 1000;
    boss.attack = 50;
    boss.critChance = 0.4;

    const exp = 10;
    const mobcoin = 2;

    const battle = new Battle(interaction, [author, boss, ...bots], exp, mobcoin, player1_data, author);

    battle.setBoss(boss);

    await battle.run();
  },
};