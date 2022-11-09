import UserModel, { UserInt } from "../database/models/UserModel";

export const getUserData = async (userId: string): Promise<UserInt> => {
  const userData =
    (await UserModel.findOne({ id: userId })) ||
    (await UserModel.create({
      id: userId,
      xp: 0,
      credits: 0,
      equippedArmors: [],
      equippedWeapons: [],
      skill: undefined,
      pet: undefined,
      battleWins: 0,
      raidWins: 0,
    }));
  return userData;
};