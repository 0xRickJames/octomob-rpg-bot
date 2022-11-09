import { CommandInteraction, SlashCommandBuilder, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { Battle } from "../classes/Battle";
import { powerUpCheck } from "../modules/powerUpCheck";
import { Fighter } from "../classes/Fighter";
import { updateCredits, updateXP } from "../modules/updateUserData";
import { getUserData } from "../modules/getUserData";
import { Katana, LaserPistol, LaserRifle, Pistol, PulseCannon, Rifle, RocketLauncher, ThermalKatana } from "../classes/Weapon";
import { PowerArmor, PowerBoots, PowerGloves, PowerHelmet } from "../classes/Armor";
import { ED209 } from "../classes/Pet";
import { Vaporize } from "../classes/Skill";

export const samurai: Command = {
  data: new SlashCommandBuilder()
    .setName("samurai")
    .setDescription("Fight against The ED-209!")
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
    const boss = new Fighter("Cybernetic Samurai");
    boss.hp = 6000;
    boss.attack = 200;
    boss.armor = 0.5;
    boss.critChance = .40;
    boss.imageUrl = "https://cdn.discordapp.com/attachments/983738763668770878/998951794652762132/C1170791-4226-47BE-A860-0E7F28B543C6.png";
    const laser_pistol = new LaserPistol();
    const thermal_katana = new ThermalKatana();
    const laser_rifle = new LaserRifle();
    const pulse_cannon = new PulseCannon();
    boss.equipWeapon(laser_pistol);
    boss.equipWeapon(thermal_katana);
    boss.equipWeapon(laser_rifle);
    boss.equipWeapon(pulse_cannon);
    const pistol = new Pistol();
    const katana = new Katana();
    const rifle = new Rifle();
    const rocket_launcher = new RocketLauncher();
    boss.equipWeapon(pistol);
    boss.equipWeapon(katana);
    boss.equipWeapon(rifle);
    boss.equipWeapon(rocket_launcher);
    const power_helmet = new PowerHelmet();
    const power_boots = new PowerBoots();
    const power_gloves = new PowerGloves();
    const power_armor = new PowerArmor();
    boss.equipArmor(power_helmet);
    boss.equipArmor(power_boots);
    boss.equipArmor(power_armor);
    boss.equipArmor(power_gloves);
    const ed_209 = new ED209();
    ed_209.setOwner(boss);
    boss.skill = new Vaporize();
    
    const exp = 3000 / oppMultiplier;
    const fixed_exp = exp.toFixed(0) as unknown as number;
    const credits = 600 / oppMultiplier;
    const fixed_credits = credits.toFixed(0) as unknown as number;

    const battle = new Battle(interaction, [boss, author, ...allies], fixed_exp, fixed_credits, player1_data, author);
    battle.setBoss(boss);     
    await battle.run();

    
  },
};