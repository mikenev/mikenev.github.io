---
title: 'Shark Hunter: a tiny game built with Claude'
description: 'A small retro-style Unity game, made in pair-programming style with Claude and playable in your browser.'
pubDate: 'Oct 03 2026'
---

I recently built a small game called **Shark Hunter**, working together with Claude. It's a retro, NES-flavored vertical slice made in Unity, and you can play it right in your browser.

**[Play Shark Hunter](https://mikenev.github.io/shark-hunter/)** · [Source on GitHub](https://github.com/mikenev/shark-hunter)

## The game

You sail a boat across a sea map, dive down to collect conches, and eventually face off against a shark boss with a harpoon.

- **Move:** WASD, arrow keys, or a gamepad stick
- **Fire harpoon:** Space, Z, or the A button
- **Mute:** M

The shark fight is a classic telegraph-and-punish pattern. The boss patrols, flashes red while it lines up with you, charges, and then recovers. That recovery window is when you hit it. It has 10 health.

## How it's put together

The whole thing is about a thousand lines of C#, split into a few small pieces:

- **Scenes:** a title screen, the sea map, the dive, and the shark fight, connected by a small scene loader.
- **Persistent state:** a `GameState` object remembers which conches you've collected, so they don't respawn on your next dive.
- **Harpoons:** simple straight-flying projectiles that use an overlap check each frame instead of physics, which keeps them simple and works against trigger colliders.
- **Audio:** there are no audio files. A tiny NES-style synthesizer (square, pulse, triangle and noise waves) generates the sound effects and chiptune music in code.
- **Art:** the sprites were generated rather than hand-drawn.

## Building it with Claude

Most of the fun was the back-and-forth. I described what I wanted, Claude wrote and wired up the code, and I played it and steered. The whole thing, from an empty Unity project to a playable game with a title screen and procedural audio, came together in just a couple of days.

It's a vertical slice, not a finished game, but it's complete enough to be fun for a few minutes. Give it a try, and if you want to see how it works, the code is all on GitHub.
