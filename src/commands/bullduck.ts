import { CommandInteraction, SlashCommandBuilder, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { Battle } from "../classes/Battle";
import { powerUpCheck } from "../modules/powerUpCheck";
import { Fighter } from "../classes/Fighter";
import { updateMobCoin, updateXP } from "../modules/updateUserData";
import { getUserData } from "../modules/getUserData";
import { LaserPistol, LaserRifle, PulseCannon, RocketLauncher } from "../classes/Weapon";
import { PowerArmor, PowerBoots, PowerGloves, PowerHelmet } from "../classes/Armor";
import { Nuker } from "../classes/Pet";
import { Nuke } from "../classes/Skill";

export const bullduck: Command = {
  data: new SlashCommandBuilder()
    .setName("bullduck")
    .setDescription("Fight against BullDuck!")
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
    const member1 = interaction.guild!.members.cache.get(player1.id);
    const author = await powerUpCheck(player1, player1.id, member1!);
    const allies: Fighter[] = [];
    let oppMultiplier = 1;

    if (interaction.options.getUser("ally1") != null) {
        const player = interaction.options.getUser("ally1") as User;
          const member = interaction.guild!.members.cache.get(player.id);
        const ally = await powerUpCheck(player, player.id, member!);
        const player_data = await getUserData(player.id);
        await updateXP(player_data, 5);
        await updateMobCoin(player_data, 1);
        allies.push(ally);
        oppMultiplier += 1;
      } 
    if (interaction.options.getUser("ally2") != null) {
      const player = interaction.options.getUser("ally2") as User;
        const member = interaction.guild!.members.cache.get(player.id);
        const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("ally3") != null) {
      const player = interaction.options.getUser("ally3") as User;
        const member = interaction.guild!.members.cache.get(player.id);
        const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally4") != null) {
      const player = interaction.options.getUser("ally4") as User;
        const member = interaction.guild!.members.cache.get(player.id);
        const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("ally5") != null) {
      const player = interaction.options.getUser("ally5") as User;
        const member = interaction.guild!.members.cache.get(player.id);
        const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally6") != null) {
      const player = interaction.options.getUser("ally6") as User;
        const member = interaction.guild!.members.cache.get(player.id);
        const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("ally7") != null) {
      const player = interaction.options.getUser("ally7") as User;
        const member = interaction.guild!.members.cache.get(player.id);
        const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally8") != null) {
      const player = interaction.options.getUser("ally8") as User;
        const member = interaction.guild!.members.cache.get(player.id);
        const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }    
    if (interaction.options.getUser("ally9") != null) {
      const player = interaction.options.getUser("ally9") as User;
        const member = interaction.guild!.members.cache.get(player.id);
        const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateMobCoin(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    const boss = new Fighter("BullDuck");
    boss.hp = 3000;
    boss.attack = 100;
    boss.armor = 0.37;
    boss.critChance = .40;
    boss.imageUrl = "https://cdn.discordapp.com/attachments/939309405227339776/1040079614321639535/image.png";
    const laser_pistol = new LaserPistol();
    const laser_rifle = new LaserRifle();
    const rocket_launcher = new RocketLauncher();
    const pulse_cannon = new PulseCannon();
    boss.equipWeapon(laser_pistol);
    boss.equipWeapon(laser_rifle);
    boss.equipWeapon(rocket_launcher);
    boss.equipWeapon(pulse_cannon);
    const power_helmet = new PowerHelmet();
    const power_boots = new PowerBoots();
    const power_gloves = new PowerGloves();
    const power_armor = new PowerArmor();
    boss.equipArmor(power_helmet);
    boss.equipArmor(power_boots);
    boss.equipArmor(power_armor);
    boss.equipArmor(power_gloves);
    const nuker = new Nuker();
    nuker.setOwner(boss);
    boss.skill = new Nuke();
    
    const exp = 1500 / oppMultiplier;
    const fixed_exp = exp.toFixed(0) as unknown as number;
    const mobcoin = 350 / oppMultiplier;
    const fixed_mobcoin = mobcoin.toFixed(0) as unknown as number;

    const battle = new Battle(interaction, [boss, author, ...allies], fixed_exp, fixed_mobcoin, player1_data, author);
    battle.setBoss(boss);     
    await battle.run();

    
  },
};