import { CommandInteraction, SlashCommandBuilder, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { Battle } from "../classes/Battle";
import { powerUpCheck } from "../modules/powerUpCheck";
import { Fighter } from "../classes/Fighter";
import { updateCredits, updateXP } from "../modules/updateUserData";
import { getUserData } from "../modules/getUserData";
import { Katana, Pistol } from "../classes/Weapon";
import { BattleHelmet, BattleBoots } from "../classes/Armor";

export const agent: Command = {
  data: new SlashCommandBuilder()
    .setName("agent")
    .setDescription("Fight against The Government Agent!")
    .addUserOption((option) =>
      option
        .setName("ally1")
        .setDescription("An ally to join you.")
        .setRequired(false)
    )
    .addUserOption((option) =>
    option
      .setName("ally2")
      .setDescription("An ally to join you.")
      .setRequired(false)
    )
    .addUserOption((option) =>
      option
        .setName("ally3")
        .setDescription("An ally to join you.")
        .setRequired(false)
    )
    .addUserOption((option) =>
    option
      .setName("ally4")
      .setDescription("An ally to join you.")
      .setRequired(false)
    )
    .addUserOption((option) =>
      option
        .setName("ally5")
        .setDescription("An ally to join you.")
        .setRequired(false)
    )
    .addUserOption((option) =>
    option
      .setName("ally6")
      .setDescription("An ally to join you.")
      .setRequired(false)
    )
    .addUserOption((option) =>
      option
        .setName("ally7")
        .setDescription("An ally to join you.")
        .setRequired(false)
    )
    .addUserOption((option) =>
    option
      .setName("ally8")
      .setDescription("An ally to join you.")
      .setRequired(false)
    )
    .addUserOption((option) =>
      option
        .setName("ally9")
        .setDescription("An ally to join you.")
        .setRequired(false)
    ),
  run: async (interaction: CommandInteraction) => {

    const player1 = interaction.user as User;
    const player1_data = await getUserData(player1.id);
    await updateXP(player1_data, 5);
    await updateCredits(player1_data, 1);
    const author = await powerUpCheck(player1, player1.id);
    const allies: Fighter[] = [];
    let oppMultiplier = 1;

    if (interaction.options.getUser("ally1") != null) {
        const player = interaction.options.getUser("ally1") as User;
        const ally = await powerUpCheck(player, player.id);
        const player_data = await getUserData(player.id);
        await updateXP(player_data, 5);
        await updateCredits(player_data, 1);
        allies.push(ally);
        oppMultiplier += 1;
      } 
    if (interaction.options.getUser("ally2") != null) {
      const player = interaction.options.getUser("ally2") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateCredits(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("ally3") != null) {
      const player = interaction.options.getUser("ally3") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateCredits(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally4") != null) {
      const player = interaction.options.getUser("ally4") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateCredits(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("ally5") != null) {
      const player = interaction.options.getUser("ally5") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateCredits(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally6") != null) {
      const player = interaction.options.getUser("ally6") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateCredits(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("ally7") != null) {
      const player = interaction.options.getUser("ally7") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateCredits(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally8") != null) {
      const player = interaction.options.getUser("ally8") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateCredits(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("ally9") != null) {
      const player = interaction.options.getUser("ally9") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateCredits(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }

    const boss = new Fighter("Government Agent");
    boss.hp = 300;
    boss.attack = 20;
    boss.critChance = .40;
    boss.imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/999004014698045460/A0FEB5B6-D61D-4AB5-B8F7-14D2442F1954.png";
    const pistol = new Pistol();
    const katana = new Katana();
    const battle_helmet = new BattleHelmet();
    const battle_boots = new BattleBoots();
    boss.equipWeapon(pistol);
    boss.equipWeapon(katana);
    boss.equipArmor(battle_helmet);
    boss.equipArmor(battle_boots);
    
    const exp = 100 / oppMultiplier;
    const fixed_exp = exp.toFixed(0) as unknown as number;
    const credits = 35 / oppMultiplier;
    const fixed_credits = credits.toFixed(0) as unknown as number;

    const battle = new Battle(interaction, [boss, author, ...allies], fixed_exp, fixed_credits, player1_data, author);
    battle.setBoss(boss);     
    await battle.run();

    
  },
};