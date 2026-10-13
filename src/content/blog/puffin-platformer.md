---
title: 'Puffin Platformer: an SNES-style game built by a team of AI bots'
description: 'A 16-bit style platformer starring a puffin, made in Godot 4 by a group of AI assistants working together, and playable in your browser.'
pubDate: '2026-10-12T20:25:00-05:00'
heroImage: '../../assets/puffin-platformer.png'
heroImageAlt: 'Puffin mid-jump over a water gap with a crab nearby in World 1-1'
---

My last few games ([Shark Hunter](/blog/shark-hunter/), [Shark Hunter 2.5D](/blog/shark-hunter-2-5d/) and [Shark Hunger](/blog/shark-hunger/)) were all Unity projects. For this one I wanted to try two new things: a different engine, and a team of AI assistants instead of just one. I asked for an SNES-style Mario-like platformer starring a puffin, built in Godot for the web, where colored fish give the puffin new powers. The result is **Puffin Platformer**.

**[Play Puffin Platformer](https://mikenev.github.io/puffin-platformer/)** · [Source on GitHub](https://github.com/mikenev/puffin-platformer)

## The game

You guide a puffin through the four courses of World 1, collecting fish, stomping enemies and reaching the goal flag at the end of each course.

- **Move:** arrow keys or A/D
- **Jump:** Z, Space, Up or W
- **Run:** X or Shift
- **Dive:** Down or S in the air (with the dive power)
- **Pause:** Esc or P

A gamepad works too. Every 100 fish earns an extra life, and finishing a course is worth 1,000 points.

## Fish power-ups

| Fish | Power | What it does |
| :-- | :-- | :-- |
| Blue | Dive | Press Down in the air to drop straight down and stomp whatever you land on |
| Green | Glide | Hold jump while falling to drift down slowly |

The puffin changes color to show which power it has. If an enemy hits you while you're powered up, you lose the power instead of a life.

## World 1

| Course | Theme | What's in it |
| :-- | :-- | :-- |
| 1-1 | Grass | A gentle tutorial with small gaps, steps and staircases |
| 1-2 | Grass | Wider gaps, taller walls and platform climbs |
| 1-3 | Beach | Sand, sea gaps you need a running jump for, and floating islands |
| 1-4 | Cliffs | Platform chains over the water and a tall staircase to finish |

Along the way you'll meet snapper crabs, green shore beetles and gulls that swoop back and forth. Land on them from above to squash them.

## How it was built

Instead of one assistant doing everything, I had a small team of AI bots. A lead developer bot split the project into pieces and handed them out: one bot built the movement and gameplay, another designed the World 1 courses, an art bot drew the puffin and the coastal tiles, an audio bot made the music and sound effects, and a QA bot tested each piece before it was merged. Each bot opened its own pull request on GitHub, so you can see how the game came together in the repo's history.

- **Engine:** Godot 4.7 with GDScript, at the SNES resolution of 256x224 with crisp pixel scaling.
- **Original art and sound:** the sprites and tiles were generated pixel by pixel in code, so there are no borrowed assets.
- **Web build:** a GitHub Actions workflow exports the game and publishes it to GitHub Pages every time the main branch changes.

This started as a proof of concept, so there's still plenty to polish, but World 1 is playable from start to finish. Give it a try and see if you can clear 1-4.
