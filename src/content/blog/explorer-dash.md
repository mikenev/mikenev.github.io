---
title: 'Explorer Dash: a 3D jungle runner built by a team of AI bots'
description: 'An original pulp jungle-adventure endless runner made in Unity 6 by a group of AI assistants working together, and playable in your browser.'
pubDate: '2026-10-15T20:59:00-05:00'
heroImage: '../../assets/explorer-dash.png'
heroImageAlt: 'Juniper running down a jungle temple path with a gnarled root ahead'
---

My earlier games ([Shark Hunter](/blog/shark-hunter/), [Shark Hunter 2.5D](/blog/shark-hunter-2-5d/) and [Shark Hunger](/blog/shark-hunger/)) were Unity projects, and then [Puffin Platformer](/blog/puffin-platformer/) was my first try with Godot. For this one I went back to Unity, this time in full 3D. The idea came from my daily digest of trending game ideas on X, where a "boulder-chase temple run" post caught my eye: grab the idol, then outrun a giant rolling boulder. It's one simple idea that's fun to watch, so I handed it to my team of AI bots. The result is **Explorer Dash**, an original pulp jungle-adventure runner with classic adventure-movie vibes.

**[Play Explorer Dash](https://mikenev.github.io/explorer-dash/)** · [Source on GitHub](https://github.com/mikenev/explorer-dash)

## The game

You play Juniper Vale, an explorer who has just lifted a golden idol from its pedestal deep in the jungle. Now a huge stone boulder is rolling right behind her. She runs on her own down a three-lane temple path, and your job is to keep her ahead of it.

| Action | Keyboard | Touch / mouse |
| :-- | :-- | :-- |
| Change lane | Left/Right arrows or A/D | Swipe left/right |
| Jump | Up arrow, W or Space | Swipe up |
| Slide / duck | Down arrow or S | Swipe down |
| Start / restart | Space, Enter or R | Click or tap |
| Mute | M | The button in the top right |

Each run opens with a short intro. Juniper lifts the golden idol, the temple starts to rumble, the camera shakes, and the boulder rolls in behind her. Then "RUN!" flashes up and the music kicks in.

It's an endless run. Your speed climbs as you go, and your score is how far you get. Every time you stumble, the boulder gains on you. The gap slowly comes back if you run clean, but if the boulder catches you, the run is over.

While you run, the screen shows your distance, your best and how far back the boulder is. The gap turns red once it's under 4 meters, and the camera shakes as the boulder gets close. When a run ends, the game over screen tells you what got you (crushed by the boulder or a fall into a pit), shows your distance and best, and flags a new best if you beat it. Your best distance is saved, so you always have something to beat. Press a key or tap to go again.

## Obstacles

| Obstacle | How to beat it | What happens if you don't |
| :-- | :-- | :-- |
| Pits | Jump over them | You fall in and the run ends |
| Side darts | Slide under them (jumping won't help) | You stumble |
| Vines | Jump over them | You stumble |
| Alligators | Switch lanes or jump | You stumble |
| Roots | Jump or change lanes | You stumble |

Most traps give you a warning. Dart holes in the temple walls puff and click right before they fire, and when a bush starts shaking and hissing, an alligator is about to lunge out into your lane. The further you run, the more obstacles show up: by 2 km there are almost three times as many as at the start. The game always keeps at least one lane open, so every run is beatable if you react in time.

## How it was built

Like Puffin Platformer, this one was made by a small team of AI bots instead of just one assistant:

- **Lead Developer Bot** planned the milestones, handed out the work and merged each piece once it passed testing.
- **Game Dev Bot** built the core runner: lanes, jumping, sliding, the follow camera and the boulder chase.
- **Game Dev Bot 2** built the obstacles, the difficulty ramp, the title screen, the HUD and the game over screen.
- **Art Dev** made all the original 3D art.
- **Audio Dev** made the original music and sound effects.
- **QA Bot** tested every milestone before it was merged, including a check that everything is original.

Each piece came in as its own pull request, so you can follow how the game came together in the repo's history.

- **Engine:** Unity 6 with the Universal Render Pipeline and the new Input System, built for WebGL so it runs in your browser.
- **Low-poly style:** the explorer, boulder, idol, temple path, jungle plants and alligator were all modeled in code with Blender, with flat colors and no textures. The whole set is only about 3,200 triangles, which keeps it light for the web.
- **Original hero:** Juniper Vale wears a pith helmet, a long teal scarf, a teal vest and a leather satchel. She's her own character, made for this game.
- **Original music:** the run theme, "Canopy Scramble," is a brassy, drum-heavy pulp-adventure loop, plus short stings and sound effects for footsteps, jumps, darts, hissing gators and the rumbling boulder. All of it was generated from scratch with no samples.

The music and sound effects follow the action. Footsteps speed up as you do, and the boulder's rumble gets louder as it closes in. In the browser, sound starts after your first key press, click or tap, and you can mute it any time with M or the on-screen button.


There's always room for more polish, but the chase is on. Give it a try and see how far you can get before the boulder catches you.
