export async function getPrice(Item: string) {
  let price: number;
  switch (Item) {
    case "epic_armor": {
      price = 60;
      return price;
    }
    case "epic_helmet": {
      price = 30;
      return price;
    }
    case "epic_boots": {
      price = 20;
      return price;
    }
    case "epic_gloves": {
      price = 16;
      return price;
    }
    case "rare_armor": {
      price = 40;
      return price;
    }
    case "rare_helmet": {
      price = 20;
      return price;
    }
    case "rare_boots": {
      price = 14;
      return price;
    }
    case "rare_gloves": {
      price = 10;
      return price;
    }
    case "gale_shortsword": {
      price = 12;
      return price;
    }
    case "tidal_spear": {
      price = 25;
      return price;
    }
    case "molten_axe": {
      price = 50;
      return price;
    }
    case "gaia_mace": {
      price = 125;
      return price;
    }
    case "gale_longsword": {
      price = 25;
      return price;
    }
    case "tidal_trident": {
      price = 50;
      return price;
    }
    case "molten_greataxe": {
      price = 100;
      return price;
    }
    case "gaia_battlehammer": {
      price = 225;
      return price;
    }
    case "fireball": {
      price = 20;
      return price;
    }
    case "heal": {
      price = 20;
      return price;
    }
    case "feeblemind": {
      price = 75;
      return price;
    }
    case "divine_intervention": {
      price = 75;
      return price;
    }
    case "combat_tactics": {
      price = 20;
      return price;
    }
    case "stun_attack": {
      price = 20;
      return price;
    }
    case "disarm": {
      price = 75;
      return price;
    }
    case "demoralize": {
      price = 75;
      return price;
    }
    default: {
      price = 0;
      return price;
    }
  }
}
