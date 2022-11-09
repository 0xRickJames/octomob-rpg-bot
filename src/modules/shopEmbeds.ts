import { EmbedBuilder } from "discord.js";
import { BROWN } from "../classes/utils";

export async function goodBuyArmorWeaponPet(price: number, item: string) {

    const embed = new EmbedBuilder()
    .setTitle("Cybernetic Typhoeus' Black Market")
    .setDescription(`That will cost ${price} credits! Thank you for your patronage! You are now the proud owner of our finest ${item}!`)
    .setColor(BROWN)
    .setThumbnail("https://imgur.com/4OoBVaN.jpg")

    return embed;
}

export async function goodBuySkill(price: number, item: string) {

    const embed = new EmbedBuilder()
    .setTitle("Cybernetic Typhoeus' Black Market")
    .setDescription(`That will cost ${price} credits! Thank you for your patronage! You can now use the ${item} Skill!`)
    .setColor(BROWN)
    .setThumbnail("https://imgur.com/4OoBVaN.jpg")

    return embed;
}

export async function lessCredits() {

    const embed = new EmbedBuilder()
    .setTitle("Cybernetic Typhoeus' Black Market")
    .setDescription(`You cannot afford that right now, come back when you've earned some more credits!`)
    .setColor(BROWN)
    .setThumbnail("https://imgur.com/4OoBVaN.jpg")

    return embed;
}

export async function lessLevels() {

    const embed = new EmbedBuilder()
    .setTitle("Cybernetic Typhoeus' Black Market")
    .setDescription("You are too low in level! Go get some experience and come back when you are at least Level 4!")
    .setColor(BROWN)
    .setThumbnail("https://imgur.com/4OoBVaN.jpg")

    return embed;
}

export async function hasBetter() {

    const embed = new EmbedBuilder()
    .setTitle("Cybernetic Typhoeus' Black Market")
    .setDescription(`Heh, your equipment is already better than that! Save you credits!`)
    .setColor(BROWN) 
    .setThumbnail("https://imgur.com/4OoBVaN.jpg")

    return embed;
}

export async function alreadyOwned() {

    const embed = new EmbedBuilder()
    .setTitle("Cybernetic Typhoeus' Black Market")
    .setDescription(`You've already got that! Leave some for the others!`)
    .setColor(BROWN) 
    .setThumbnail("https://imgur.com/4OoBVaN.jpg")

    return embed;
}