import { Document, model, Schema } from "mongoose";

export interface UserInt extends Document {
  id: string;
  exp: number;
  credits: number;
  equippedArmors: String[];
  equippedWeapons: String[];
  equippedClothes: String[];
  skill: string;
  pet: string;
  battleWins: number;
  raidWins: number;

}
  
export const User = new Schema({
  id: String,
  exp: Number,
  credits: Number,
  equippedArmors: Array,
  equippedWeapons: Array,
  equippedClothes: Array,
  skill: String,
  pet: String,
  battleWins: Number,
  raidWins: Number,
});

export default model<UserInt>("user", User);