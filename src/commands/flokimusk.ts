import { CommandInteraction, SlashCommandBuilder, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { Battle } from "../classes/Battle";
import { powerUpCheck } from "../modules/powerUpCheck";
import { Fighter } from "../classes/Fighter";
import { updateMobCoin, updateXP } from "../modules/updateUserData";
import { getUserData } from "../modules/getUserData";
import { Katana, Pistol, Rifle, RocketLauncher } from "../classes/Weapon";
import { BattleHelmet, BattleBoots, BattleArmor, BattleGloves } from "../classes/Armor";
import { AttackDrone, MedicalDrone } from "../classes/Pet";
import { CombatStim } from "../classes/Skill";

export const flokimusk: Command = {
  data: new SlashCommandBuilder()
    .setName("flokimusk")
    .setDescription("Fight against flokimusk!")
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
    await updateMobCoin(player1_data, 1);
    const author = await powerUpCheck(player1, player1.id);
    const allies: Fighter[] = [];
    let oppMultiplier = 1;

    if (interaction.options.getUser("ally1") != null) {
        const player = interaction.options.getUser("ally1") as User;
        const ally = await powerUpCheck(player, player.id);
        const player_data = await getUserData(player.id);
        await updateXP(player_data, 5);
        await updateMobCoin(player_data, 1);
        allies.push(ally);
        oppMultiplier += 1;
      } 
    if (interaction.options.getUser("ally2") != null) {
      const player = interaction.options.getUser("ally2") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("ally3") != null) {
      const player = interaction.options.getUser("ally3") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally4") != null) {
      const player = interaction.options.getUser("ally4") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("ally5") != null) {
      const player = interaction.options.getUser("ally5") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally6") != null) {
      const player = interaction.options.getUser("ally6") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("ally7") != null) {
      const player = interaction.options.getUser("ally7") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally8") != null) {
      const player = interaction.options.getUser("ally8") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("ally9") != null) {
      const player = interaction.options.getUser("ally9") as User;
      const ally = await powerUpCheck(player, player.id);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }

    const boss = new Fighter("flokimusk");
    boss.hp = 1200;
    boss.attack = 50;
    boss.armor = 0.3;
    boss.critChance = .40;
    boss.imageUrl = "https://cryptobullsociety.com/wp-content/uploads/2022/06/Flokimusk-uai-516x516.jpg";
    const pistol = new Pistol();
    const katana = new Katana();
    const rifle = new Rifle();
    const rocket_launcher = new RocketLauncher();
    boss.equipWeapon(pistol);
    boss.equipWeapon(katana);
    boss.equipWeapon(rifle);
    boss.equipWeapon(rocket_launcher);
    const battle_helmet = new BattleHelmet();
    const battle_boots = new BattleBoots();
    const battle_gloves = new BattleGloves();
    const battle_armor = new BattleArmor();
    boss.equipArmor(battle_helmet);
    boss.equipArmor(battle_boots);
    boss.equipArmor(battle_armor);
    boss.equipArmor(battle_gloves);
    const attack_drone = new AttackDrone();
    attack_drone.setOwner(boss);
    boss.skill = new CombatStim();
    
    const exp = 600 / oppMultiplier;
    const fixed_exp = exp.toFixed(0) as unknown as number;
    const mobcoin = 200 / oppMultiplier;
    const fixed_mobcoin = mobcoin.toFixed(0) as unknown as number;

    const battle = new Battle(interaction, [boss, author, ...allies], fixed_exp, fixed_mobcoin, player1_data, author);
    battle.setBoss(boss);     
    await battle.run();

    
  },
};