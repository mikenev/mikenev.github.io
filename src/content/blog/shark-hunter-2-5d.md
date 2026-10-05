---
title: 'Shark Hunter 2.5D: the sequel, in 3D'
description: 'A follow-up to Shark Hunter: a low-poly 2.5D underwater game in Unity, built with Claude and playable in your browser.'
pubDate: 'Oct 04 2026'
heroImage: '../../assets/shark-hunter-2-5d.jpg'
---

After the [first Shark Hunter](/blog/shark-hunter/), I wanted to try something a little more ambitious: the same idea, but in 2.5D. This time you play the shark. Working with another Claude session, I built **Shark Hunter 2.5D**, a low-poly underwater game made in Unity 6 that you can play in your browser.

**[Play Shark Hunter 2.5D](https://mikenev.github.io/shark-hunter-2.5d/)** · [Source on GitHub](https://github.com/mikenev/shark-hunter-2.5d)

## The game

You swim around as a shark, hunting fish before you starve.

- **Swim:** WASD, arrow keys, or a gamepad stick
- **Bite:** Space, left click, or the A button
- **Restart after starving:** R, Enter, or Start

Bites are a short lunge plus a mouth hitbox. Prey fish wander, flee when you get close, and can be cornered at the edge of the play area. The big ones take two bites. Eating restores your hunger and scores points, and if hunger hits zero, you starve.

## What "2.5D" means here

The gameplay is locked to a flat plane (X and Y), like a 2D game. The camera is a perspective side view with a slight downward tilt, and props in the foreground and background sit at different depths so they slide past at different speeds. That parallax is what gives the scene depth without making the controls any harder.

## How it's built

- **Unity 6 with URP**, with a stylized low-poly look and a fog and tint pass to make the water feel like water.
- **Everything is generated.** The meshes, materials and prefabs are all built from code by an editor tool, so the whole placeholder slice can be rebuilt with one menu item, or from the command line in batch mode. There are no third-party assets in it.
- **Swappable art.** The gameplay code only talks to an `ISharkVisual` interface, so the placeholder shark can be replaced with a real model without touching the game logic.
- **Tunable feel.** Shark movement, bite strength and each type of prey are defined in data assets, so tweaking the game doesn't mean changing code.
- **One-command publishing.** A small script force-pushes the WebGL build to a `gh-pages` branch, which is how it ends up playable on GitHub Pages.

## Building it with Claude

As with the first game, this was a back-and-forth. Claude and I scaffolded the project and the placeholder slice, then added the prey, the bite attack and the hunger and score loop. I played, steered, and decided what felt right.

It's still a vertical slice with placeholder art, but the core loop of chase, bite, eat and don't starve works. Give it a try, and if you're curious how it fits together, the code is on GitHub.
