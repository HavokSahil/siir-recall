---
lesson_id: siir-pitch
summary: FFT chroma, native ECQT, and the five MFCC coefficients.
---

# Pitch classes and timbre coordinates

## 03.01 · Folding octaves into chroma

Chroma combines energy from octave-related notes into twelve pitch classes. In sIIr’s ordinary descriptor pipeline, FFT bins between 27.5 and 4,186 Hz are assigned to the nearest equal-tempered note, then their magnitudes are summed and normalized.

This is a compact harmonic fingerprint, not a chord transcription. Harmonics, detuning, and coarse FFT spacing at low frequencies can distribute energy among several classes.

The structure view uses this FFT-derived chroma. The separate native CQT view has different windows and uses power when folding its pitch bins.

## 03.02 · Native constant-Q analysis

ECQT uses geometrically spaced frequencies and pitch-dependent window lengths. Low notes receive longer windows; high notes receive shorter ones. sIIr’s native wrapper exposes 84 pitch-bin magnitudes starting at C2.

Kernels are centered on the playback cursor, and the input is zero-padded at recording edges. Pitch analysis updates at approximately 10 Hz and reuses results between updates.

Long bass windows improve frequency discrimination at the cost of temporal precision. CQT pitch-class energy can be activated by harmonics; it is not a monophonic fundamental-frequency estimate.

## 03.03 · MFCCs summarize the spectral envelope

MFCCs compress the broad shape of the spectrum through a mel-spaced filterbank, logarithms, and a cosine transform. sIIr uses 26 triangular filters and retains five coefficients, including coefficient zero.

These coefficients depend on the exact analysis conventions. The implementation has no pre-emphasis or liftering, and uses an unnormalized DCT-II. Coefficient zero includes level information.

Silence produces values determined by the logarithmic floor. Those values should not be interpreted as a measured timbre.
