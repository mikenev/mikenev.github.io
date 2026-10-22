---
title: 'Tidewatch: a pirate tower defense game built by a team of AI bots'
description: 'Defend a walled port town from pirate ships across three islands, from a sunny tropical cay to a foggy, stormy isle at night. Built in Unity by a team of AI bots and playable in your browser.'
pubDate: '2026-10-21T20:21:00-05:00'
heroImage: '../../assets/tidewatch.png'
heroImageAlt: 'Top-down view of Coral Cay on wave 6 of 8: a convoy of pirate sloops and a dinghy sails a turquoise channel between sandy, palm-covered islands while cannon batteries on the islands fire at them, with a defensive ship moored in the channel and the walled port town on the left'
---

After two witch games for Halloween, I wanted something different: a tower defense game. Pirate ships sail in along sea lanes, and you build defenses on the islands and in the water to stop them before they reach your harbor. The team built it as **Tidewatch**. Like [Broomstick Bash](/blog/broomstick-bash/), it's made in Unity and runs in your browser, on a computer or a phone.

**[Play Tidewatch](https://mikenev.github.io/tidewatch/)** · [Source on GitHub](https://github.com/mikenev/tidewatch)

## The game

The whole map fits on one screen, seen from above. Ships follow the sea lanes toward the port town, and every ship that gets through costs the city hearts, more for bigger ships. You earn gold for every ship you sink, plus a bonus at the end of each wave, and you can call the next wave early for extra gold. Defenses go on fixed slots, so placing them is easy on a phone: tap a slot to build or upgrade.

| Defense | What it does |
| :-- | :-- |
| Cannon Battery | A steady tower that hits one ship at a time |
| Mortar Fort | A slow tower with splash damage |
| Chain-Shot Post | Damages ships and slows them down |
| Gunboat | A ship on a buoy that fires fast, short-range broadsides |
| Net Tender | A ship on a buoy that slows everything around it |

The two ships stay anchored, but between waves you can pay a small fee to move one to another free buoy. Each defense has 2 upgrade levels.

## The pirates

| Enemy | What to know |
| :-- | :-- |
| Raider Dinghy | Fast and weak, and comes in swarms |
| Sloop | The standard ship |
| Ironclad Brig | Slow and armored. Mortars and chain shot work best |
| Fire Raft | Explodes and knocks out the nearest defense for a few seconds if you don't sink it in time |
| Dread Galleon | The boss at the end of each island. It launches dinghies when it's damaged |

## Three islands

You defend three islands in order, and each one unlocks the next:

1. **Coral Cay:** tropical, with palms, turquoise water and white sand. 1 lane and 8 waves, with tutorial hints.
2. **Twin Reefs:** volcanic, with black rock and a lava glow. 2 lanes and 10 waves.
3. **Storm Isle:** rocky and stormy at night. 3 lanes and 12 waves, with a fog bank that hides ships until a defense is close, a fast current on the south lane, and rain and lightning.

![Storm Isle at night on wave 1 of 12: rain falls over dark water and gray rocky islands, a lightning bolt strikes into a fog bank, two small boats approach from the right, a cannon battery stands on one rock, and the semi-transparent top bar shows 20 hearts and 190 gold](../../assets/tidewatch-storm-isle.png)

You get a star rating for each island based on how many hearts you have left, and your progress is saved in your browser.

## How it was built

This one was made by a smaller team of AI bots:

- **Lead Developer Bot** planned the milestones, handed out the work and merged each piece once it passed testing.
- **Game Dev Bot** built the game in three milestones: the core loop on Coral Cay, then the rest of the defenses and enemies plus Twin Reefs, then Storm Isle.
- **Art Dev** made the original sprites and a separate look for each island. The ships, towers and town are shared and recolored for each island.
- **Audio Dev** made the original sea-shanty theme, the battle music and the sound effects.
- **QA Bot** tested every pull request and played through all 3 islands at the end.

The plan and each pull request also got an AI review before merging. After an early look, I asked for each island to have its own art, which is how Coral Cay ended up tropical, Twin Reefs volcanic and Storm Isle stormy. Late in testing, ships in Storm Isle's north lane were getting hidden under the top bar, so the team made the bar thinner and see-through.

Man the cannons and see if you can keep all three islands safe!
