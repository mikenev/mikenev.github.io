---
title: 'Broomstick Bash: a 2.5D Halloween flyer built by a team of AI bots'
description: 'A witch on a broom dodges trick-or-treaters and spooks down a haunted street, then battles a werewolf. Made in Unity 6 by a group of AI assistants and playable in your browser.'
pubDate: '2026-10-18T11:42:00-05:00'
heroImage: '../../assets/broomstick-bash.png'
heroImageAlt: 'The witch on her broom fires a glowing spell bolt at a bat over a Halloween street of houses and jack-o-lanterns'
---

Halloween is coming up, so I pulled a spooky idea out of my game backlog: a witch on a broomstick flying down a street on Halloween night. After [Puffin Platformer](/blog/puffin-platformer/) went with SNES-style pixels, this time I asked for a modern, high-res look. The team chose 2.5D: low-poly 3D models and scenery viewed from the side, with the gameplay on a flat plane like a classic side-scroller. Like [Explorer Dash](/blog/explorer-dash/), it's built in Unity and runs in your browser. The result is **Broomstick Bash**.

**[Play Broomstick Bash](https://mikenev.github.io/broomstick-bash/)** · [Source on GitHub](https://github.com/mikenev/broomstick-bash)

## The game

You play a witch flying her broom down a haunted street. The street scrolls by on its own, and if you don't flap, gravity pulls you down, so the feel is a lot like Flappy Bird. Each flap gives you a little lift, and touching the street costs you a heart. You can also fire spells straight ahead.

| Action | Keyboard | Mouse / touch |
| :-- | :-- | :-- |
| Flap / start | Space, W or Up arrow | Left click or tap |
| Cast a spell | X or F | Right click or a second-finger tap |
| Restart | R, or flap after a run ends | Click or tap |

You have 3 hearts. After a hit, the witch flashes and can't be hurt again for a moment, so one mistake doesn't cost you everything. Lose all 3 and it's game over. Your score is the distance you fly plus points for spooks you zap, and your high score is saved.

The title screen shows the controls and a reminder that spells only work on bats and ghosts. While you fly, the top of the screen shows your hearts, your score (distance plus spooks), your best, and a spell meter that reads "RECHARGING..." while it refills. When a run ends, the game over screen shows your score and flags a new best, and a flap or R sends you right back out.

## What's on the street

| Hazard | What to do |
| :-- | :-- |
| Kids in costumes | Dodge them. They're just trick-or-treaters, so your spells pass right through with a sparkle |
| Cars | Dodge them. They drive toward you |
| Lamp posts | Fly over them |
| Tree branches | Fly under them |
| Swooping bats | Dodge or zap them (one spell) |
| Drifting ghosts | Dodge or zap them (two spells) |

The kids show up in pumpkin, bedsheet ghost and cardboard robot costumes, sometimes in groups. Things get faster and busier as you go, with a couple of breathers along the way. The game checks every pattern of obstacles to make sure there's always a gap you can flap through.

## The werewolf

It's one level, about 2 to 3 minutes long. Near the end the street clears out and a werewolf shows up to throw fireballs at you. It takes about 12 spell hits to beat, and it gets tougher in three phases: aimed shots, lobbed arcs, and walls of fire with a gap to slip through. Before every attack it crouches, changes color and shows a glowing orb where each fireball will come from, so you always get a warning. When the werewolf shows up, its own driving theme kicks in, and a health bar at the top counts down its hits. Beat it and it topples over in a poof, you get a 500-point bonus, and the win screen tells you the werewolf is vanquished.

## How it was built

Like my last two games, this one was made by a team of AI bots:

- **Lead Developer Bot** planned the milestones, handed out the work and merged each piece once it passed testing.
- **Game Dev Bot** built the core game (flapping, spells, hearts, scrolling) and the werewolf boss.
- **Game Dev Bot 2** built the street content, the difficulty curve and the UI.
- **Art Dev** made the original 3D art: the witch, the costumed kids, bats, ghosts, the werewolf, cars, and layers of houses, fences and jack-o'-lanterns under a big moon.
- **Audio Dev** made the original music and sound effects, including the boss theme, "Moonfang."
- **QA Bot** tested every pull request, and the team reports that included hands-on playtests.

The devs also ran a Claude Code review before handing their work to QA. To make sure the boss was beatable, the team reports that a scripted bot fought the werewolf 20 times and won all 20.

After an early look, I asked for the art to be easier to read. The team darkened the background houses, added outlines to the witch, the werewolf, the ghosts and the bats, made the ghosts less see-through, and made the kids bigger, so everything that matters pops against the street.

- **Engine:** Unity 6 with the Universal Render Pipeline and the new Input System, built for WebGL.
- **Art:** low-poly models made in code with Blender, using flat colors and glowing accents instead of textures. Even with the outlines, the whole set is only about 6,400 triangles.
- **Sound:** the music and sound effects were all generated from scratch, with no samples.
- **Background:** layers of houses, fences and jack-o'-lanterns scroll at different speeds under a big moon for a bit of depth.

Grab your broom, dodge the trick-or-treaters, and see if you can take down the werewolf. Happy Halloween!
