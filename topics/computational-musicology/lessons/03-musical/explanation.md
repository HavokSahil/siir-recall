---
lesson_id: music-musical
summary: "Musical coordinates and uncertain estimates layered onto the acoustic signal."
updated_at: 2026-10-02T12:30:00Z
---

# Psychoacoustics, pitch, harmony & rhythm

## Psychoacoustic coordinates and MFCCs
A common mel mapping is $m(f)=2595\log_{10}(1+f/700)$. Mel filters aggregate spectral power, producing $E_b=\sum_kM_{b,k}P_k$. MFCCs apply a discrete cosine transform to log filter energies:
$$c_r=\sum_b\log(E_b+\epsilon)\cos\left[\frac{\pi r}{B}\left(b+\frac12\right)\right].$$
DCT normalization, number of filters, frequency range and retained coefficients must be stated. MFCCs summarize spectral envelope; they are not direct measurements of instruments or emotions. Loudness, masking and pitch perception require more specific models; RMS is only an acoustic proxy for perceived loudness.

## Pitch and chroma
In twelve-tone equal temperament with A4 at 440 Hz,
$$f(m)=440\,2^{(m-69)/12},\qquad m(f)=69+12\log_2(f/440).$$
Pitch class is approximately $m\bmod12$. Accumulate pitch-weighted spectral evidence into $\mathbf c_t\in\mathbb R^{12}$, with a documented tuning and normalization policy. Harmonics and percussion can contaminate chroma; octave collapse discards register information.

Pitch candidates can come from autocorrelation, cepstral analysis or harmonic-product methods. Polyphonic melody and multiple fundamental-frequency estimation are harder extensions. State where a method assumes monophony.

## Harmony as probabilistic inference
A chord-template score is
$$s(C,t)=\frac{\mathbf c_t^\top\mathbf v_C}{\|\mathbf c_t\|\|\mathbf v_C\|}.$$
This is a similarity score, not a calibrated chord probability. Normalize and calibrate a probabilistic model before displaying $P(C\mid\mathbf c_t)$. Temporal transition matrices or HMMs can favor coherent progressions while retaining alternative chord candidates.

Key profiles, pitch-class entropy and harmonic change are additional descriptors. None uniquely determines harmonic tension. Compare explicit definitions such as distance from a tonic profile with listener annotations before interpreting them perceptually.

Circular statistics may describe pitch-class organization, but ordinary chromatic order differs from circle-of-fifths geometry. Choose the coordinate system according to the musical question.

## Onsets, tempo and beats
An onset-strength curve $o_t$ summarizes local increases in spectral energy. Its lagged autocorrelation is
$$R(\ell)=\sum_t o_to_{t+\ell}.$$
A peak at lag $\ell$ frames implies a tempo candidate $60f_s/(H\ell)$ BPM. Tempograms expose how periodicity varies over time.

Half-time and double-time ambiguity is central: strong evidence for 120 BPM may also support 60 or 240. Display ranked candidates; call them probabilities only after defining and validating a likelihood and prior. Beat tracking adds phase and continuity, while meter estimation adds grouping.

Inter-onset intervals, onset density and timing variability are measurable. Syncopation needs a meter-aware model; counting irregular intervals alone is insufficient. Rhythmic entropy requires a specified event representation and binning scheme.

## Multiscale synchronization
Sample-level, frame-level, beat-level and section-level features have different meanings. Map all timestamps to seconds and offer beat-synchronous aggregation for structural comparison. Show aggregation rules and uncertainty in detected beats. Never silently equate one analysis window with one musical event.

[Signal mathematics](#music-signal) · [Statistical structure](#music-structure)
