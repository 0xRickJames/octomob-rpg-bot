import { UserInt } from "../database/models/UserModel";

export const updateXP = async (User: UserInt, Exp: number) => {
  User.xp += Exp;
  await User.save();
  return User;
};

export const updateCredits = async (User: UserInt, Credits: number) => {
  User.credits += Credits;
  await User.save();
  return User;
};

export const updateArmor = async (User: UserInt, armor: string) => {
  User.equippedArmors.push(armor);
  await User.save();
  return User;
};

export const updateWeapons = async (User: UserInt, weapon: string) => {
  User.equippedWeapons.push(weapon);
  await User.save();
  return User;
};

export const updateSkill = async (User: UserInt, skill: string) => {
  User.skill = skill;
  await User.save();
  return User;
};

export const updatePet = async (User: UserInt, pet: string) => {
  User.pet = pet;
  await User.save();
  return User;
};

export const updateBattleWins = async (User: UserInt) => {
  User.battleWins += 1;
  await User.save();
  return User;
};

export const updateRaidWins = async (User: UserInt) => {
  User.raidWins += 1;
  await User.save();
  return User;
};