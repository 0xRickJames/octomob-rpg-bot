import { CommandInteraction, SlashCommandBuilder, User } from "discord.js";
import { Command } from "../interfaces/Command";
import { getUserData } from "../modules/getUserData";
import { getPrice } from "../modules/getPrice";
import { checkArmor, checkWeapons } from "../modules/checkItems";
import { updateArmor, updateMobCoin, updatePet, updateSkill, updateWeapons } from "../modules/updateUserData";
import { powerUpCheck } from "../modules/powerUpCheck";
import { checkItemLevel, checkName, checkPlayerLevel } from "../modules/checkLevel";
import { alreadyOwned, goodBuyArmorWeaponPet, goodBuySkill, hasBetter, lessMobCoin, lessLevels } from "../modules/shopEmbeds";

export const buy: Command = {

  data: new SlashCommandBuilder()
    .setName("buy")
    .setDescription("Buy items from thxforplayin's Black Market!")
    .addSubcommand(subcommand => 
        subcommand
          .setName('armor')
          .setDescription('Buy a piece of armor')
          .addStringOption(option => 
              option.setName('piece')
                .setDescription('piece of armor')
                .setRequired(true)
                .addChoices(
                    { name: 'Battle Armor', value: 'battle_armor' },
                    { name: 'Battle Helmet', value: 'battle_helmet' },
                    { name: 'Battle Boots', value: 'battle_boots' },
                    { name: 'Battle Gloves', value: 'battle_gloves' },
                    { name: 'Power Armor', value: 'power_armor' },
                    { name: 'Power Helmet', value: 'power_helmet' },
                    { name: 'Power Boots', value: 'power_boots' },
                    { name: 'Power Gloves', value: 'power_gloves' },
                )
            )
          )
          .addSubcommand(subcommand => 
            subcommand
              .setName('weapon')
              .setDescription('Buy a weapon')
              .addStringOption(option => 
                option.setName('type')
                  .setDescription('type of weapon')
                  .setRequired(true)
                  .addChoices(
                    { name: 'Katana', value: 'katana' },
                      { name: 'Pistol', value: 'pistol' },
                      { name: 'Rifle', value: 'rifle' },
                      { name: 'Rockegt Launcher', value: 'rocket_launcher' },
                      { name: 'Thermal Katana', value: 'thermal_katana' },
                      { name: 'Laser Pistol', value: 'laser_pistol' },
                      { name: 'Laser Rifle', value: 'laser_rifle' },
                      { name: 'Pulse Cannon', value: 'pulse_cannon' },
                   )
              )
              
          )
          .addSubcommand(subcommand => 
            subcommand
              .setName('skill')
              .setDescription('Buy a skill')
              .addStringOption(option => 
                option.setName('training')
                  .setDescription('type of training')
                  .setRequired(true)
                  .addChoices(
                    { name: 'Combat Stim', value: 'combat_stim' },
                      { name: 'Stun Mine', value: 'stun_mine' },
                      { name: 'Disarm', value: 'disarm' },
                      { name: 'Demoralize', value: 'demoralize' },
                  )
               )
      
          )
          .addSubcommand(subcommand =>
            subcommand
              .setName('pet')
              .setDescription('Buy a pet')
              .addStringOption(option => 
                option.setName('drone')
                  .setDescription('type of drone')
                  .setRequired(true)
                  .addChoices(
                    { name: 'Attack Drone', value: 'attack_drone' },
                    { name: 'Medical Drone', value: 'medical_drone' },
                    { name: 'EMP Drone', value: 'emp_drone' },
                    { name: 'Spy Drone', value: 'spy_drone' },
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

          else if (user.mobcoin < price) {
            const embed = await lessMobCoin();
            await interaction.reply({ embeds: [embed] });
          }

          // Successful purchase

          else {            
            await updateArmor(user, armor_piece);
            await updateMobCoin(user, cost);
            const embed = await goodBuyArmorWeaponPet(price, armor_name as string);
            await interaction.reply({ embeds: [embed] });
          }
        }
    }
    else if (interaction.options.get("type")) {
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

          else if (user.mobcoin < price) {
            const embed = await lessMobCoin();
            await interaction.reply({ embeds: [embed] });
          }

          // Successful purchase

          else {            
            await updateWeapons(user, weapon_type);
            await updateMobCoin(user, cost);
            const embed = await goodBuyArmorWeaponPet(price, weapon_name as string);
            await interaction.reply({ embeds: [embed] });
          }
        } 
    }
    else if (interaction.options.get("training")) {
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

          else if (user.mobcoin < price) {
            const embed = await lessMobCoin();
            await interaction.reply({ embeds: [embed] });
          }

          // Successful purchase

          else {            
            await updateSkill(user, skill_type);
            await updateMobCoin(user, cost);
            const embed = await goodBuySkill(price, skill_name as string);
            await interaction.reply({ embeds: [embed] });
          }
        } 
    }
    else if (interaction.options.get("drone")) {
        const pet = interaction.options.get("drone");
        if (pet != null) {
          const pet_type = pet.value as string;
          const player_above3 = await checkPlayerLevel(level, pet_type);
          const item_above3 = await checkItemLevel(pet_type);
          const price = await getPrice(pet_type);                      
          const pet_name = await checkName(pet_type);
          const cost = 0 - price;

          // Check Level Restrictions
         
          if (player_above3 == false && item_above3 == true) {
            const embed = await lessLevels();
            await interaction.reply({ embeds: [embed] });
          }

          // Check Price Restrictions

          else if (user.mobcoin < price) {
            const embed = await lessMobCoin();
            await interaction.reply({ embeds: [embed] });
          }

          // Successful purchase

          else {            
            await updatePet(user, pet_type);
            await updateMobCoin(user, cost);
            const embed = await goodBuyArmorWeaponPet(price, pet_name as string);
            await interaction.reply({ embeds: [embed] });
          }
        }
    }
    else {
        interaction.reply("failed") 
    }

  },
};