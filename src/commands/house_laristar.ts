import { CommandInteraction, SlashCommandBuilder, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { Battle } from "../classes/Battle";
import { powerUpCheck } from "../modules/powerUpCheck";
import { Fighter } from "../classes/Fighter";
import { updateGold, updateXP } from "../modules/updateUserData";
import { getUserData } from "../modules/getUserData";
import {
  TidalTrident,
  MoltenGreataxe,
  GaiaBattlehammer,
  GaiaMace,
} from "../classes/Weapon";
import { EpicArmor, EpicBoots, EpicGloves, EpicHelmet } from "../classes/Armor";
import { Smite } from "../classes/Spell";
import { Wrath } from "../classes/Skill";

export const house_laristar: Command = {
  data: new SlashCommandBuilder()
    .setName("house_laristar")
    .setDescription("Fight against House Laristar!")
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
    await updateGold(player1_data, 1);
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
      await updateGold(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally2") != null) {
      const player = interaction.options.getUser("ally2") as User;
      const member = interaction.guild!.members.cache.get(player.id);
      const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateGold(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally3") != null) {
      const player = interaction.options.getUser("ally3") as User;
      const member = interaction.guild!.members.cache.get(player.id);
      const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateGold(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally4") != null) {
      const player = interaction.options.getUser("ally4") as User;
      const member = interaction.guild!.members.cache.get(player.id);
      const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateGold(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally5") != null) {
      const player = interaction.options.getUser("ally5") as User;
      const member = interaction.guild!.members.cache.get(player.id);
      const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateGold(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally6") != null) {
      const player = interaction.options.getUser("ally6") as User;
      const member = interaction.guild!.members.cache.get(player.id);
      const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateGold(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally7") != null) {
      const player = interaction.options.getUser("ally7") as User;
      const member = interaction.guild!.members.cache.get(player.id);
      const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateGold(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally8") != null) {
      const player = interaction.options.getUser("ally8") as User;
      const member = interaction.guild!.members.cache.get(player.id);
      const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateGold(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    if (interaction.options.getUser("ally9") != null) {
      const player = interaction.options.getUser("ally9") as User;
      const member = interaction.guild!.members.cache.get(player.id);
      const ally = await powerUpCheck(player, player.id, member!);
      const player_data = await getUserData(player.id);
      await updateXP(player_data, 5);
      await updateGold(player_data, 1);
      allies.push(ally);
      oppMultiplier += 1;
    }
    const boss = new Fighter("House Laristar");
    boss.hp = 3000;
    boss.attack = 100;
    boss.armor = 0.37;
    boss.critChance = 0.4;
    boss.imageUrl =
      "https://metadata.lootheroes.io/common/hero/archangelLord-square.png";
    const tidal_trident = new TidalTrident();
    const molten_greataxe = new MoltenGreataxe();
    const gaia_mace = new GaiaMace();
    const gaia_battlehammer = new GaiaBattlehammer();
    boss.equipWeapon(tidal_trident);
    boss.equipWeapon(molten_greataxe);
    boss.equipWeapon(gaia_mace);
    boss.equipWeapon(gaia_battlehammer);
    const epic_helmet = new EpicHelmet();
    const epic_boots = new EpicBoots();
    const epic_gloves = new EpicGloves();
    const epic_armor = new EpicArmor();
    boss.equipArmor(epic_helmet);
    boss.equipArmor(epic_boots);
    boss.equipArmor(epic_armor);
    boss.equipArmor(epic_gloves);
    const smite = new Smite();
    smite.setOwner(boss);
    boss.skill = new Wrath();

    const exp = 1500 / oppMultiplier;
    const fixed_exp = exp.toFixed(0) as unknown as number;
    const gold = 350 / oppMultiplier;
    const fixed_gold = gold.toFixed(0) as unknown as number;

    const battle = new Battle(
      interaction,
      [boss, author, ...allies],
      fixed_exp,
      fixed_gold,
      player1_data,
      author
    );
    battle.setBoss(boss);
    await battle.run();
  },
};
