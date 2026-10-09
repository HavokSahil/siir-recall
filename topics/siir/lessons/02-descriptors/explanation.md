---
lesson_id: siir-descriptors
summary: Level, spectral shape, and change—with the exact weighting and silence conventions.
---

# What the sound descriptors measure

## 02.01 · Level and spectral balance

RMS measures amplitude without cancellation between positive and negative samples. sIIr computes it on the unwindowed frame. It is neither sound-pressure level nor a complete model of perceived loudness.

Centroid measures the spectrum’s balance point and spread measures its width around that point. Both use magnitude weights, including the DC bin. A bright sound often has a high centroid, but the interpretation depends on the recording and listening context.

A useful experiment is to multiply the same floating-point recording by a nonzero gain: RMS should scale while centroid and spread should stay constant, away from silence thresholds and numerical floors.

## 02.02 · Distribution of spectral power

Entropy describes how evenly power is distributed across bins. Flatness compares the geometric and arithmetic means of power. Roll-off finds the first frequency bin containing 85% of cumulative power.

These descriptors answer different questions. Entropy is not a musical-complexity score, flatness is not a categorical noise detector, and roll-off is a chosen descriptive threshold.

The implementation returns zero for silence-derived spectral descriptors. Those zeros are placeholders, not evidence that silence has a meaningful brightness or spectral distribution.

## 02.03 · Changes and crossings

Spectral flux compares successive normalized magnitude spectra and keeps only positive changes. It often responds to attacks, but silence-to-sound transitions also create peaks. The first frame has zero flux because it has no predecessor.

Zero-crossing rate counts changes between the nonnegative and negative sides of the waveform. It is sensitive to DC offset and noise; it is not a reliable pitch detector by itself.

Flux is normalized spectral change, so its units differ from RMS. Always read the units before comparing descriptor plots.
