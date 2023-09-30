import { CommandInteraction, SlashCommandBuilder, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { Battle } from "../classes/Battle";
import { powerUpCheck } from "../modules/powerUpCheck";
import { Fighter } from "../classes/Fighter";
import { updateGold, updateXP } from "../modules/updateUserData";
import { getUserData } from "../modules/getUserData";
import { id } from "common-tags";

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
    await updateGold(player1_data, 1);
    const member1 = interaction.guild!.members.cache.get(player1.id);
    const author = await powerUpCheck(player1, player1.id, member1!);
    let oppMultiplier = 0;
    const opponents: Fighter[] = [];

    const player2 = interaction.options.getUser("opponent1") as User;
    if (player2 == player1) {
      //pass
    } else {
      const player2_data = await getUserData(player2.id);
      await updateXP(player2_data, 5);
      await updateGold(player2_data, 1);
      const member2 = interaction.guild!.members.cache.get(player2.id);
      const opponent1 = await powerUpCheck(player2, player2.id, member2!);
      opponents.push(opponent1);
      oppMultiplier += 1;
    }

    if (interaction.options.getUser("opponent2") != null) {
      const player3 = interaction.options.getUser("opponent2") as User;
      if (player3 == player1 || player3 == player2) {
        //pass
      } else {
        const member = interaction.guild!.members.cache.get(player3.id);
        const opponent = await powerUpCheck(player3, player3.id, member!);
        const player_data = await getUserData(player3.id);
        await updateXP(player_data, 5);
        await updateGold(player_data, 1);
        opponents.push(opponent);
        oppMultiplier += 1;
      }
    }
    if (interaction.options.getUser("opponent3") != null) {
      const player4 = interaction.options.getUser("opponent3") as User;
      if (
        player4 == player1 ||
        player4 == player2 ||
        (interaction.options.getUser("opponent2") != null &&
          interaction.options.getUser("opponent3") ==
            interaction.options.getUser("opponent2"))
      ) {
        //pass
      } else {
        const member = interaction.guild!.members.cache.get(player4.id);
        const opponent = await powerUpCheck(player4, player4.id, member!);
        const player_data = await getUserData(player4.id);
        await updateXP(player_data, 5);
        await updateGold(player_data, 1);
        opponents.push(opponent);
        oppMultiplier += 1;
      }
    }
    if (interaction.options.getUser("opponent4") != null) {
      const player5 = interaction.options.getUser("opponent4") as User;
      if (
        player5 == player1 ||
        player5 == player2 ||
        (interaction.options.getUser("opponent2") != null &&
          interaction.options.getUser("opponent4") ==
            interaction.options.getUser("opponent2")) ||
        (interaction.options.getUser("opponent3") != null &&
          interaction.options.getUser("opponent4") ==
            interaction.options.getUser("opponent3"))
      ) {
        //pass
      } else {
        const member = interaction.guild!.members.cache.get(player5.id);
        const opponent = await powerUpCheck(player5, player5.id, member!);
        const player_data = await getUserData(player5.id);
        await updateXP(player_data, 5);
        await updateGold(player_data, 1);
        opponents.push(opponent);
        oppMultiplier += 1;
      }
    }
    if (interaction.options.getUser("opponent5") != null) {
      const player6 = interaction.options.getUser("opponent5") as User;
      if (
        player6 == player1 ||
        player6 == player2 ||
        (interaction.options.getUser("opponent2") != null &&
          interaction.options.getUser("opponent5") ==
            interaction.options.getUser("opponent2")) ||
        (interaction.options.getUser("opponent3") != null &&
          interaction.options.getUser("opponent5") ==
            interaction.options.getUser("opponent3")) ||
        (interaction.options.getUser("opponent4") != null &&
          interaction.options.getUser("opponent5") ==
            interaction.options.getUser("opponent4"))
      ) {
        //pass
      } else {
        const member = interaction.guild!.members.cache.get(player6.id);
        const opponent = await powerUpCheck(player6, player6.id, member!);
        const player_data = await getUserData(player6.id);
        await updateXP(player_data, 5);
        await updateGold(player_data, 1);
        opponents.push(opponent);
        oppMultiplier += 1;
      }
    }
    if (interaction.options.getUser("opponent6") != null) {
      const player7 = interaction.options.getUser("opponent6") as User;
      if (
        player7 == player1 ||
        player7 == player2 ||
        (interaction.options.getUser("opponent2") != null &&
          interaction.options.getUser("opponent6") ==
            interaction.options.getUser("opponent2")) ||
        (interaction.options.getUser("opponent3") != null &&
          interaction.options.getUser("opponent6") ==
            interaction.options.getUser("opponent3")) ||
        (interaction.options.getUser("opponent4") != null &&
          interaction.options.getUser("opponent6") ==
            interaction.options.getUser("opponent4")) ||
        (interaction.options.getUser("opponent5") != null &&
          interaction.options.getUser("opponent6") ==
            interaction.options.getUser("opponent5"))
      ) {
        //pass
      } else {
        const member = interaction.guild!.members.cache.get(player7.id);
        const opponent = await powerUpCheck(player7, player7.id, member!);
        const player_data = await getUserData(player7.id);
        await updateXP(player_data, 5);
        await updateGold(player_data, 1);
        opponents.push(opponent);
        oppMultiplier += 1;
      }
    }
    if (interaction.options.getUser("opponent7") != null) {
      const player8 = interaction.options.getUser("opponent7") as User;
      if (
        player8 == player1 ||
        player8 == player2 ||
        (interaction.options.getUser("opponent2") != null &&
          interaction.options.getUser("opponent7") ==
            interaction.options.getUser("opponent2")) ||
        (interaction.options.getUser("opponent3") != null &&
          interaction.options.getUser("opponent7") ==
            interaction.options.getUser("opponent3")) ||
        (interaction.options.getUser("opponent4") != null &&
          interaction.options.getUser("opponent7") ==
            interaction.options.getUser("opponent4")) ||
        (interaction.options.getUser("opponent5") != null &&
          interaction.options.getUser("opponent7") ==
            interaction.options.getUser("opponent5")) ||
        (interaction.options.getUser("opponent6") != null &&
          interaction.options.getUser("opponent7") ==
            interaction.options.getUser("opponent6"))
      ) {
        //pass
      } else {
        const member = interaction.guild!.members.cache.get(player8.id);
        const opponent = await powerUpCheck(player8, player8.id, member!);
        const player_data = await getUserData(player8.id);
        await updateXP(player_data, 5);
        await updateGold(player_data, 1);
        opponents.push(opponent);
        oppMultiplier += 1;
      }
    }
    if (interaction.options.getUser("opponent8") != null) {
      const player9 = interaction.options.getUser("opponent8") as User;
      if (
        player9 == player1 ||
        player9 == player2 ||
        (interaction.options.getUser("opponent2") != null &&
          interaction.options.getUser("opponent8") ==
            interaction.options.getUser("opponent2")) ||
        (interaction.options.getUser("opponent3") != null &&
          interaction.options.getUser("opponent8") ==
            interaction.options.getUser("opponent3")) ||
        (interaction.options.getUser("opponent4") != null &&
          interaction.options.getUser("opponent8") ==
            interaction.options.getUser("opponent4")) ||
        (interaction.options.getUser("opponent5") != null &&
          interaction.options.getUser("opponent8") ==
            interaction.options.getUser("opponent5")) ||
        (interaction.options.getUser("opponent6") != null &&
          interaction.options.getUser("opponent8") ==
            interaction.options.getUser("opponent6")) ||
        (interaction.options.getUser("opponent7") != null &&
          interaction.options.getUser("opponent8") ==
            interaction.options.getUser("opponent7"))
      ) {
        //pass
      } else {
        const member = interaction.guild!.members.cache.get(player9.id);
        const opponent = await powerUpCheck(player9, player9.id, member!);
        const player_data = await getUserData(player9.id);
        await updateXP(player_data, 5);
        await updateGold(player_data, 1);
        opponents.push(opponent);
        oppMultiplier += 1;
      }
    }
    if (interaction.options.getUser("opponent9") != null) {
      const player10 = interaction.options.getUser("opponent9") as User;
      if (
        player10 == player1 ||
        player10 == player2 ||
        (interaction.options.getUser("opponent2") != null &&
          interaction.options.getUser("opponent9") ==
            interaction.options.getUser("opponent2")) ||
        (interaction.options.getUser("opponent3") != null &&
          interaction.options.getUser("opponent9") ==
            interaction.options.getUser("opponent3")) ||
        (interaction.options.getUser("opponent4") != null &&
          interaction.options.getUser("opponent9") ==
            interaction.options.getUser("opponent4")) ||
        (interaction.options.getUser("opponent5") != null &&
          interaction.options.getUser("opponent9") ==
            interaction.options.getUser("opponent5")) ||
        (interaction.options.getUser("opponent6") != null &&
          interaction.options.getUser("opponent9") ==
            interaction.options.getUser("opponent6")) ||
        (interaction.options.getUser("opponent7") != null &&
          interaction.options.getUser("opponent9") ==
            interaction.options.getUser("opponent7")) ||
        (interaction.options.getUser("opponent8") != null &&
          interaction.options.getUser("opponent9") ==
            interaction.options.getUser("opponent8"))
      ) {
        //pass
      } else {
        const member = interaction.guild!.members.cache.get(player10.id);
        const opponent = await powerUpCheck(player10, player10.id, member!);
        const player_data = await getUserData(player10.id);
        await updateXP(player_data, 5);
        await updateGold(player_data, 1);
        opponents.push(opponent);
        oppMultiplier += 1;
      }
    }

    if (opponents != null) {
      if (opponents.length == 0) {
        interaction.reply({
          content: "Please choose an opponent OTHER than yourself",
          ephemeral: true,
        });
      } else {
        const exp = 15 * oppMultiplier;
        const gold = 3 * oppMultiplier;
        const battle = new Battle(
          interaction,
          [author, ...opponents],
          exp,
          gold,
          player1_data,
          author
        );
        await battle.run();
      }
    }
  },
};
