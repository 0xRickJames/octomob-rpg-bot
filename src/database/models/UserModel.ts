import { Document, model, Schema } from "mongoose";

export interface UserInt extends Document {
  id: string;
  exp: number;
  gold: number;
  equippedArmors: String[];
  equippedWeapons: String[];
  equippedClothes: String[];
  skill: string;
  spell: string;
  battleWins: number;
  raidWins: number;
}

export const User = new Schema({
  id: String,
  exp: Number,
  gold: Number,
  equippedArmors: Array,
  equippedWeapons: Array,
  equippedClothes: Array,
  skill: String,
  spell: String,
  battleWins: Number,
  raidWins: Number,
});

export default model<UserInt>("user", User);
