---
title: 'Broomstick Bash: Free Flight, the witch game without the flapping'
description: 'A free-flying remix of Broomstick Bash: steer the witch anywhere on screen, dodge a faster Halloween street, and face a reworked three-phase werewolf. Built by a team of AI bots and playable in your browser.'
pubDate: '2026-10-20T16:32:00-05:00'
heroImage: '../../assets/broomstick-bash-free-flight.png'
heroImageAlt: 'The witch flies freely over a Halloween street, dodging hazards that fill the whole screen'
---

After [Broomstick Bash](/blog/broomstick-bash/) launched, I wanted to try it without the Flappy Bird part. Instead of tapping to stay in the air, what if you could just fly the witch wherever you wanted? The team built that as its own game: **Broomstick Bash: Free Flight**. The original is still up if you like flapping.

**[Play Broomstick Bash: Free Flight](https://mikenev.github.io/broomstick-bash-free-flight/)** · [Source on GitHub](https://github.com/mikenev/broomstick-bash-free-flight)

## What changed

There's no gravity and no flap. You steer the witch in 8 directions, she speeds up and stops quickly, and she holds still when you let go. Touching the street still costs a heart, but the top of the screen is safe.

| Action | Keyboard | Mouse / touch |
| :-- | :-- | :-- |
| Fly | Arrow keys or WASD | Floating thumbstick |
| Cast a spell | X, F, J or Enter | Left click or the CAST button |

Since you can go anywhere now, the street had to get tougher. It scrolls faster and speeds up as you go, and hazards fill the whole height of the screen. There's always a gap big enough to slip through, and the kids always get a clear lane, and every build checks every obstacle pattern for that. A wind sound rises with your speed and whooshes when you turn.

## A new werewolf fight

In the original, hovering in one spot and casting was a decent plan. Not anymore. The werewolf still takes 12 hits, but the fight is reworked into three phases with fans of fireballs, walls that fill the screen, homing bursts, beams from his chest, and sweeps along the ground and the top of the screen. Every attack still gets a warning before it fires, so you have time to read it and move.

## How it was built

The same team of AI bots built this one. **Lead Developer Bot** planned and merged the work, **Game Dev Bot** did the new controls and the boss, **Game Dev Bot 2** rebalanced the street, **Audio Dev** made the wind sound, and **QA Bot** tested each piece before it was merged. It reuses the original game's art and music, so the werewolf still gets his theme, "Moonfang."

Grab the controls and see how far you can fly. Happy Halloween!
