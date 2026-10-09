---
lesson_id: siir-cellular
summary: Elementary cellular automata, scale mapping, and WAV synthesis.
---

# Growing music from simple rules

## 07.01 · A row of cells becomes a score

The generator evolves a row of binary cells using an elementary cellular-automaton rule. Each next cell depends on its left neighbor, itself, and its right neighbor. The row wraps around, so its ends are neighbors.

A rule number selects an output for each of the eight possible neighborhoods. The same seed and settings produce the same score; complex-looking patterns do not require random choices.

Each generation is an eighth-note step. Changing BPM changes the time between generations rather than the cellular rule itself.

## 07.02 · Newly active cells trigger scale notes

Only newly activated cells trigger notes. A cell that stays active does not retrigger. On the first step, every active seed cell counts as newly activated.

Pairs of adjacent cell positions map to one scale degree. The available scales are minor pentatonic, major pentatonic, and Dorian; scale degrees continue upward through octaves from the chosen MIDI root.

Duplicate pitches are removed. At most four pitches play per step, with selection rotated through the candidates to avoid always favoring the low register. This mapping is a compositional choice rather than a unique musical interpretation of the automaton.

## 07.03 · Rendering a playable WAV

The renderer synthesizes each selected note with a fundamental and a weaker second harmonic. Short attack and release envelopes soften discontinuities. Notes last one generation step and decay within that step.

The result is mono, 22,050 Hz, 16-bit PCM in a WAV container. The four-voice limit and bounded per-voice gain constrain the mix before final sample encoding.

This is a transparent synthesized instrument. The cellular evolution determines the note events; the oscillator and envelope determine how those events sound.
