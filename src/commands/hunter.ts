import { CommandInteraction, SlashCommandBuilder, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { Battle } from "../classes/Battle";
import { powerUpCheck } from "../modules/powerUpCheck";
import { Fighter } from "../classes/Fighter";
import { updateCredits, updateXP } from "../modules/updateUserData";
import { getUserData } from "../modules/getUserData";
import { Katana, Pistol } from "../classes/Weapon";
import { BattleHelmet, BattleBoots, BattleArmor, BattleGloves } from "../classes/Armor";
import { MedicalDrone } from "../classes/Pet";
import { CombatStim } from "../classes/Skill";

export const hunter: Command = {
  data: new SlashCommandBuilder()
    .setName("hunter")
    .setDescription("Fight against The Bounty Hunter!")
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

    const boss = new Fighter("Bounty Hunter");
    boss.hp = 700;
    boss.attack = 30;
    boss.armor = 0.3;
    boss.critChance = .40;
    boss.imageUrl = "https://cdn.discordapp.com/attachments/971857029587148830/999033271927177306/00C6D1FC-0AB8-415D-8011-90DD1916DD62.png";
    const pistol = new Pistol();
    const katana = new Katana();
    boss.equipWeapon(pistol);
    boss.equipWeapon(katana);
    const battle_helmet = new BattleHelmet();
    const battle_boots = new BattleBoots();
    const battle_gloves = new BattleGloves();
    const battle_armor = new BattleArmor();
    boss.equipArmor(battle_helmet);
    boss.equipArmor(battle_boots);
    boss.equipArmor(battle_armor);
    boss.equipArmor(battle_gloves);
    const medical_drone = new MedicalDrone();
    medical_drone.setOwner(boss);
    boss.skill = new CombatStim();
    
    const exp = 250 / oppMultiplier;
    const fixed_exp = exp.toFixed(0) as unknown as number;
    const credits = 105 / oppMultiplier;
    const fixed_credits = credits.toFixed(0) as unknown as number;

    const battle = new Battle(interaction, [boss, author, ...allies], fixed_exp, fixed_credits, player1_data, author);
    battle.setBoss(boss);     
    await battle.run();

    
  },
};