---
title: 'Shark Hunger: a one-shot 2.5D survival game'
description: 'A Hungry Shark-style survival game in Unity 6, built by an AI assistant from a single prompt and playable in your browser.'
pubDate: 'Oct 11 2026'
heroImage: '../../assets/shark-hunger.jpg'
---

After [Shark Hunter](/blog/shark-hunter/) and [Shark Hunter 2.5D](/blog/shark-hunter-2-5d/), I wanted to see how far a single prompt could go. I asked an AI assistant for a 2.5D game along the lines of Hungry Shark: the shark doesn't need to grow, it just has to keep eating to survive. There should be a hunger countdown, the game ends when it hits zero, and there should be a variety of things to eat. The result is **Shark Hunger**, made in Unity 6 and playable in your browser.

**[Play Shark Hunger](https://mikenev.github.io/shark-hunger/)** · [Source on GitHub](https://github.com/mikenev/shark-hunger)

## The game

You swim a shark through a side-view 3D ocean and eat whatever you can catch before you starve.

- **Swim:** WASD or the arrow keys, or hold the mouse or touch the screen to steer
- **Boost:** Space or Shift

Your hunger bar starts at 100 and drains at 3.5 per second, speeding up to 10 per second the longer you survive. Boosting makes it drain 1.6 times faster, so you have to pick your moments. When it reaches zero, the shark goes belly-up and the game is over. Your score is the points from everything you've eaten plus 2 points for every second you survive, and your best score is saved.

## What's on the menu

| Creature | Hunger | Points | Notes |
| :-- | :-- | :-- | :-- |
| Sardine | +6 | 10 | Swims in schools that scatter when you get close |
| Clownfish | +10 | 20 | Slow and easy to catch |
| Tuna | +22 | 60 | Flees, so you'll need to boost |
| Sea Turtle | +30 | 100 | Slow and very filling |
| Jellyfish | -15 | 0 | Stings you. Avoid! |
| Pufferfish | +14 | 40 | Puffs up when you get near, and a spiky one is -10 |
| Crab | +15 | 40 | Scuttles along the seafloor and runs away |
| Golden Fish | +45 | 250 | Rare and fast |

## How it's built

- **2.5D:** the creatures are 3D, but the action stays on a flat side-scrolling plane, so it plays like a 2D game.
- **The ocean:** depth-tinted water, fog, a seafloor with seaweed and coral, light rays, and bubbles.
- **Everything is made in code.** All the visuals are simple primitives built in code, and the sound effects are generated in code too. There are no art or audio assets.
- **Web build:** it's a Unity WebGL build hosted right here on GitHub Pages.

## One prompt

Unlike the first two games, this wasn't a long back-and-forth. I described the game once and the AI assistant created the Unity project, wrote the scripts, built the WebGL version and tested it in a browser. I then asked it to write this post and publish the game to this site.

The art is placeholder shapes and there's plenty that could be improved, but the core loop of eat, avoid the jellyfish and don't starve works. Give it a try and see how long you can last.
