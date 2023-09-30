import { CommandInteraction, SlashCommandBuilder, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { getUserData } from "../modules/getUserData";
import { getPrice } from "../modules/getPrice";
import { checkArmor, checkWeapons } from "../modules/checkItems";
import {
  updateArmor,
  updateGold,
  updateSpell,
  updateSkill,
  updateWeapons,
} from "../modules/updateUserData";
import { powerUpCheck } from "../modules/powerUpCheck";
import {
  checkItemLevel,
  checkName,
  checkPlayerLevel,
} from "../modules/checkLevel";
import {
  alreadyOwned,
  goodBuyArmorWeaponSpell,
  goodBuySkill,
  hasBetter,
  lessGold,
  lessLevels,
} from "../modules/shopEmbeds";

export const buy: Command = {
  data: new SlashCommandBuilder()
    .setName("buy")
    .setDescription("Buy items from thxforplayin's Black Market!")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("armor")
        .setDescription("Buy a piece of armor")
        .addStringOption((option) =>
          option
            .setName("piece")
            .setDescription("piece of armor")
            .setRequired(true)
            .addChoices(
              { name: "Rare Armor", value: "rare_armor" },
              { name: "Rare Helmet", value: "rare_helmet" },
              { name: "Rare Boots", value: "rare_boots" },
              { name: "Rare Gloves", value: "rare_gloves" },
              { name: "Epic Armor", value: "epic_armor" },
              { name: "Epic Helmet", value: "epic_helmet" },
              { name: "Epic Boots", value: "epic_boots" },
              { name: "Epic Gloves", value: "epic_gloves" }
            )
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("weapon")
        .setDescription("Buy a weapon")
        .addStringOption((option) =>
          option
            .setName("type")
            .setDescription("type of weapon")
            .setRequired(true)
            .addChoices(
              { name: "Gale Shortsword", value: "gale_shortsword" },
              { name: "Tidal Spear", value: "tidal_spear" },
              { name: "Molten Axe", value: "molten_axe" },
              { name: "Gaia Mace", value: "gaia_mace" },
              { name: "Gale Longsword", value: "gale_longsword" },
              { name: "Tidal Trident", value: "tidal_trident" },
              { name: "Molten Greataxe", value: "molten_greataxe" },
              { name: "Gaia Battlehammer", value: "gaia_battlehammer" }
            )
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("skill")
        .setDescription("Buy a skill")
        .addStringOption((option) =>
          option
            .setName("training")
            .setDescription("type of training")
            .setRequired(true)
            .addChoices(
              { name: "Combat Tactics", value: "combat_tactics" },
              { name: "Stun Attack", value: "stun_attack" },
              { name: "Disarm", value: "disarm" },
              { name: "Demoralize", value: "demoralize" }
            )
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("spell")
        .setDescription("Learn a spell")
        .addStringOption((option) =>
          option
            .setName("spell")
            .setDescription("type of spell")
            .setRequired(true)
            .addChoices(
              { name: "Fireball", value: "fierball" },
              { name: "Heal", value: "heal" },
              { name: "Feeblemind", value: "feeblemind" },
              { name: "Divine Intervention", value: "divine_intervention" }
            )
        )
    ),

  run: async (interaction: CommandInteraction) => {
    const player = interaction.user as User;
    const user = await getUserData(player.id);
    const user_int = interaction.user as User;
    const member = interaction.guild!.members.cache.get(player.id);
    const fighter = await powerUpCheck(user_int, user_int.id, member!);
    const level = fighter.level;

    if (interaction.options.get("piece")) {
      const armor = interaction.options.get("piece");
      if (armor != null) {
        const armor_piece = armor.value as string;
        const player_above3 = await checkPlayerLevel(level, armor_piece);
        const item_above3 = await checkItemLevel(armor_piece as string);
        const price = await getPrice(armor_piece);
        const armor_name = await checkName(armor_piece);
        const cost = 0 - price;
        const has_better_armor = await checkArmor(user, armor_piece);

        // Check Level Restrictions

        if (player_above3 == false && item_above3 == true) {
          const embed = await lessLevels();
          await interaction.reply({ embeds: [embed] });
        }

        // Check if item is owned
        else if (user.equippedArmors.includes(armor_piece)) {
          const embed = await alreadyOwned();
          await interaction.reply({ embeds: [embed] });
        }

        // Check if a better item is already owned
        else if (has_better_armor == true) {
          const embed = await hasBetter();
          await interaction.reply({ embeds: [embed] });
        }

        // Check Price Restrictions
        else if (user.gold < price) {
          const embed = await lessGold();
          await interaction.reply({ embeds: [embed] });
        }

        // Successful purchase
        else {
          await updateArmor(user, armor_piece);
          await updateGold(user, cost);
          const embed = await goodBuyArmorWeaponSpell(
            price,
            armor_name as string
          );
          await interaction.reply({ embeds: [embed] });
        }
      }
    } else if (interaction.options.get("type")) {
      const weapon = interaction.options.get("type");
      if (weapon != null) {
        const weapon_type = weapon.value as string;
        const player_above3 = await checkPlayerLevel(level, weapon_type);
        const item_above3 = await checkItemLevel(weapon_type);
        const price = await getPrice(weapon_type);
        const weapon_name = await checkName(weapon_type);
        const cost = 0 - price;
        const has_better_weapon = await checkWeapons(user, weapon_type);

        // Check Level Restrictions

        if (player_above3 == false && item_above3 == true) {
          const embed = await lessLevels();
          await interaction.reply({ embeds: [embed] });
        }

        // Check if a better item is already owned
        else if (has_better_weapon == true) {
          const embed = await hasBetter();
          await interaction.reply({ embeds: [embed] });
        }

        // Check if item is owned
        else if (user.equippedWeapons.includes(weapon_type)) {
          const embed = await alreadyOwned();
          await interaction.reply({ embeds: [embed] });
        }

        // Check Price Restrictions
        else if (user.gold < price) {
          const embed = await lessGold();
          await interaction.reply({ embeds: [embed] });
        }

        // Successful purchase
        else {
          await updateWeapons(user, weapon_type);
          await updateGold(user, cost);
          const embed = await goodBuyArmorWeaponSpell(
            price,
            weapon_name as string
          );
          await interaction.reply({ embeds: [embed] });
        }
      }
    } else if (interaction.options.get("training")) {
      const skill = interaction.options.get("training");
      if (skill != null) {
        const skill_type = skill.value as string;
        const player_above3 = await checkPlayerLevel(level, skill_type);
        const item_above3 = await checkItemLevel(skill_type);
        const price = await getPrice(skill_type);
        const skill_name = await checkName(skill_type);
        const cost = 0 - price;

        // Check Level Restrictions

        if (player_above3 == false && item_above3 == true) {
          const embed = await lessLevels();
          await interaction.reply({ embeds: [embed] });
        }

        // Check Price Restrictions
        else if (user.gold < price) {
          const embed = await lessGold();
          await interaction.reply({ embeds: [embed] });
        }

        // Successful purchase
        else {
          await updateSkill(user, skill_type);
          await updateGold(user, cost);
          const embed = await goodBuySkill(price, skill_name as string);
          await interaction.reply({ embeds: [embed] });
        }
      }
    } else if (interaction.options.get("spell")) {
      const spell = interaction.options.get("spell");
      if (spell != null) {
        const spell_type = spell.value as string;
        const player_above3 = await checkPlayerLevel(level, spell_type);
        const item_above3 = await checkItemLevel(spell_type);
        const price = await getPrice(spell_type);
        const spell_name = await checkName(spell_type);
        const cost = 0 - price;

        // Check Level Restrictions

        if (player_above3 == false && item_above3 == true) {
          const embed = await lessLevels();
          await interaction.reply({ embeds: [embed] });
        }

        // Check Price Restrictions
        else if (user.gold < price) {
          const embed = await lessGold();
          await interaction.reply({ embeds: [embed] });
        }

        // Successful purchase
        else {
          await updateSpell(user, spell_type);
          await updateGold(user, cost);
          const embed = await goodBuyArmorWeaponSpell(
            price,
            spell_name as string
          );
          await interaction.reply({ embeds: [embed] });
        }
      }
    } else {
      interaction.reply("failed");
    }
  },
};
