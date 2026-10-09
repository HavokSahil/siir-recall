---
lesson_id: siir-rhythm
summary: Tempo candidates and the causal PLP tracker implemented in sIIr.
---

# From spectral change to a beat pulse

## 05.01 · Periodicity suggests tempo

The offline tempo plot autocorrelates the spectral-flux sequence. Repeated attacks reinforce one another at particular delays; converting those delays to beats per minute gives candidate tempos.

The search covers 40–240 BPM. Peaks can reflect subdivisions or every-other-beat patterns, so half- and double-tempo interpretations remain possible. A short or nonperiodic recording may have no useful tempo.

Autocorrelation scores describe repetition. They are not probabilities that a particular tempo is correct.

## 05.02 · Past onsets vote for a pulse

The causal PLP tracker evaluates rhythmic periodicities from recent activation history. It chooses a tempo and phase, constructs a signed rhythmic kernel, and overlap-adds successive kernels into a pulse buffer.

sIIr uses spectral-flux activation rather than a trained onset model. The default tempo grid is 60–180 BPM in increments of two; its kernel setting is six seconds. These are distinct from the offline autocorrelation search.

The live audio front end uses trailing windows. Future portions of a pulse kernel are predictions from past information, not measurements of future audio.

## 05.03 · Beat decisions and timing limits

A beat event requires a local pulse maximum, sufficient clipped pulse strength, non-negligible activation, a warm-up period, and enough time since the previous event. The default lookahead is zero and the threshold is 0.08.

The quantity named stability in the implementation is a clipped pulse sample, not a calibrated confidence probability. Increasing lookahead samples a predicted future pulse position.

Microphone capture, frame buffering, and display all add latency. The implementation does not establish zero device latency or the accuracy of a trained system. Weak onsets and tempo ambiguity remain practical limits.
