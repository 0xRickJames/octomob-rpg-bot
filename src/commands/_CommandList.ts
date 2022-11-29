import { Command } from "../interfaces/Command";
import { boost } from "./boost";
import { profile } from "./profile";
import { battle } from "./battle";
import { raid } from "./raid";
import { boostxp } from "./boostxp";
import { boostmobcoin } from "./boostmobcoin";
import { armor } from "./armor";
import { weapon } from "./weapon";
import { pet } from "./pet";
import { skill } from "./skill";
import { shop } from "./shop";
import { buy } from "./buy";
import { hitman } from "./hitman";
import { mademan } from "./mademan";
import { flokimusk } from "./flokimusk";
import { bullduck } from "./bullduck";
import { donfather } from "./donfather";
import { info } from "./info";
import { bossprofile } from "./bossprofile";

export const CommandList: Command[] = [
  boost,
  profile,
  battle,
  raid,
  boostxp,
  boostmobcoin,
  armor,
  weapon,
  pet,
  skill,
  shop,
  buy,
  hitman,
  mademan,
  flokimusk,
  bullduck,
  donfather,
  info,
  bossprofile,
];
