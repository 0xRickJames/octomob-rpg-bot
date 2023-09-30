import { Command } from "../interfaces/Command";
import { boost } from "./boost";
import { profile } from "./profile";
import { battle } from "./battle";
import { boostxp } from "./boostxp";
import { boostgold } from "./boostgold";
import { armor } from "./armor";
import { weapon } from "./weapon";
import { spell } from "./spell";
import { skill } from "./skill";
import { shop } from "./shop";
import { buy } from "./buy";
import { warrior } from "./warrior";
import { battlemage } from "./battlemage";
import { shaman } from "./shaman";
import { house_laristar } from "./house_laristar";
import { full_meta_alchemist } from "./full_meta_alchemist";
import { info } from "./info";
import { bossprofile } from "./bossprofile";

export const CommandList: Command[] = [
  boost,
  profile,
  battle,
  boostxp,
  boostgold,
  armor,
  weapon,
  spell,
  skill,
  shop,
  buy,
  warrior,
  battlemage,
  shaman,
  house_laristar,
  full_meta_alchemist,
  info,
  bossprofile,
];
