import { Command } from "../interfaces/Command";
import { boost } from "./boost";
import { profile } from "./profile";
import { battle } from "./battle";
import { raid } from "./raid";
import { boostxp } from "./boostxp";
import { boostcredits } from "./boostcredits";
import { armor } from "./armor";
import { weapon } from "./weapon";
import { pet } from "./pet";
import { skill } from "./skill";
import { shop } from "./shop";
import { buy } from "./buy";
import { agent } from "./agent";
import { hunter } from "./hunter";
import { thug } from "./thug";
import { ed209 } from "./ed209";

export const CommandList: Command[] = [boost, profile, battle, raid, boostxp, boostcredits, armor, weapon, pet, skill, shop, buy, agent, hunter, thug, ed209 ];