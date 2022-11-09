import { CommandInteraction, SlashCommandBuilder, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { Battle } from "../classes/Battle";
import { powerUpCheck } from "../modules/powerUpCheck";
import { Fighter } from "../classes/Fighter";
import { updateMOBcoin, updateXP } from "../modules/updateUserData";
import { getUserData } from "../modules/getUserData";

export const battle: Command = {
  data: new SlashCommandBuilder()
    .setName("battle")
    .setDescription("Battle other fighters!")
    .addUserOption((option) =>
      option
        .setName("opponent1")
        .setDescription("A player you wish to battle.")
        .setRequired(true)
    )
    .addUserOption((option) =>
    option
      .setName("opponent2")
      .setDescription("A player you wish to battle.")
      .setRequired(false)
    )
    .addUserOption((option) =>
      option
        .setName("opponent3")
        .setDescription("A player you wish to battle.")
        .setRequired(false)
    )
    .addUserOption((option) =>
    option
      .setName("opponent4")
      .setDescription("A player you wish to battle.")
      .setRequired(false)
    )
    .addUserOption((option) =>
      option
        .setName("opponent5")
        .setDescription("A player you wish to battle.")
        .setRequired(false)
    )
    .addUserOption((option) =>
    option
      .setName("opponent6")
      .setDescription("A player you wish to battle.")
      .setRequired(false)
    )
    .addUserOption((option) =>
      option
        .setName("opponent7")
        .setDescription("A player you wish to battle.")
        .setRequired(false)
    )
    .addUserOption((option) =>
    option
      .setName("opponent8")
      .setDescription("A player you wish to battle.")
      .setRequired(false)
    )
    .addUserOption((option) =>
      option
        .setName("opponent9")
        .setDescription("A player you wish to battle.")
        .setRequired(false)
    ),
  run: async (interaction: CommandInteraction) => {

    const player1 = interaction.user as User;
    const player1_data = await getUserData(player1.id);
    await updateXP(player1_data, 5);
    await updateMOBcoin(player1_data, 1);
    const author = await powerUpCheck(player1, player1.id);

    const player2 = interaction.options.getUser("opponent1") as User;
    const player2_data = await getUserData(player2.id);
    await updateXP(player2_data, 5);
    await updateMOBcoin(player2_data, 1);
    const opponent1 = await powerUpCheck(player2, player2.id);
    const opponents: Fighter[] = [ opponent1 ];
    let oppMultiplier = 1;

    if (interaction.options.getUser("opponent2") != null) {
      const player = interaction.options.getUser("opponent2") as User;
      const opponent = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMOBcoin(player_data, 1);
      opponents.push(opponent);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("opponent3") != null) {
      const player = interaction.options.getUser("opponent3") as User;
      const opponent = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMOBcoin(player_data, 1);
      opponents.push(opponent);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("opponent4") != null) {
      const player = interaction.options.getUser("opponent4") as User;
      const opponent = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMOBcoin(player_data, 1);
      opponents.push(opponent);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("opponent5") != null) {
      const player = interaction.options.getUser("opponent5") as User;
      const opponent = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMOBcoin(player_data, 1);
      opponents.push(opponent);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("opponent6") != null) {
      const player = interaction.options.getUser("opponent6") as User;
      const opponent = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMOBcoin(player_data, 1);
      opponents.push(opponent);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("opponent7") != null) {
      const player = interaction.options.getUser("opponent7") as User;
      const opponent = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMOBcoin(player_data, 1);
      opponents.push(opponent);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("opponent8") != null) {
      const player = interaction.options.getUser("opponent8") as User;
      const opponent = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMOBcoin(player_data, 1);
      opponents.push(opponent);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("opponent9") != null) {
      const player = interaction.options.getUser("opponent9") as User;
      const opponent = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMOBcoin(player_data, 1);
      opponents.push(opponent);
      oppMultiplier += 1;
    }

    if (opponents != null) {
  
      const exp = 15 * oppMultiplier;
      const mobcoin = 3 * oppMultiplier;
      const battle = new Battle(interaction, [author, ...opponents], exp, mobcoin, player1_data, author);    
      await battle.run();

    }

  },
};