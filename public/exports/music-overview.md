# Music Observatory: project goal & complete flow

*Computational Musicology · sIIr recall*

An explorable mathematical account of how acoustic signals relate to musical structure and human perception.

## Project goal
Build an interactive mathematical and statistical observatory for music. Represent a recording at several scales, visualize low-level acoustic measurements alongside mid-level musical organization, and investigate their relationships with high-level perceptual descriptors.

The central question is: **How much of the structure people perceive in music can be recovered, explained, and predicted from the statistical structure of its acoustic signal?**

The project serves your interest in music, mathematics, and creative explanation. Its research value comes from feature engineering, inference, experimental design, and interpretable analysis. Financial prediction is outside its scope.

## Complete analytical flow
| Stage | Input and operation | Output | User question |
| --- | --- | --- | --- |
| 1. Ingest | Decode audio; record sample rate, channels, duration and provenance | Waveform and metadata | What exactly am I analyzing? |
| 2. Prepare | Channel policy, optional resampling, frames, windows and silence masks | Aligned analysis frames | What do preprocessing choices change? |
| 3. Transform | STFT, mel filterbanks; later CQT or wavelets | Time-frequency representations | Where do frequencies and transients occur? |
| 4. Measure | Amplitude, spectrum, timbre, onset and pitch features | Descriptor matrix $D\in\mathbb R^{T\times d}$ | What changes acoustically? |
| 5. Organize | Beat synchronization, scaling, covariance, PCA and similarity | Trajectories and recurrent patterns | Which properties move together? |
| 6. Infer structure | Novelty, change points, clustering; later HMMs | Boundary candidates and latent states | Which moments repeat or mark transitions? |
| 7. Relate to perception | Human annotations, regression and probabilistic models | Predictions with evaluated uncertainty | What measurements explain listener judgments? |
| 8. Experiment | Controlled transformations, held-out evaluation and population statistics | Effect sizes, intervals and limitations | Is the apparent relationship robust? |

These stages form a dependency graph, not a proof of causation. Rhythm and harmony branch from the transforms and rejoin multivariate analysis; perceptual labels come from listeners or a documented external model, rather than automatically from unsupervised clusters.

## Descriptor hierarchy
**Low level:** RMS, peak amplitude, crest factor, zero-crossing rate, centroid, spread, rolloff, flatness, entropy, flux, MFCCs and onset strength. Chroma is a pitch-oriented representation often placed near the low/mid-level boundary.

**Mid level:** tempo hypotheses, beats, rhythmic patterns, pitch contours, chord candidates, harmonic movement, repetition and section boundaries. Instrumentation and melody extraction require additional estimation methods; they are extensions, not consequences of spectral moments alone.

**High level:** listener-rated energy, brightness, tension, danceability and mood; semantic labels such as verse, chorus and drop. These concepts depend on listener, culture, context and annotation protocol. Rhythm complexity and harmonic stability need explicit operational definitions before they become measurable targets.

## Exploration flow
1. Load a recording and choose an analysis resolution.
2. Play it with a shared time cursor across waveform, spectrogram, feature curves, chroma, novelty and detected events.
3. Select an interval to inspect its distributions, covariance and nearest recurring moments.
4. Follow a descriptor down to its formula, transform, window and samples; follow it upward to associated structure and annotated perception.
5. Compare alternative settings or transformed audio, then save an observation with its parameters.
6. Run a declared experiment across recordings and inspect uncertainty and held-out performance.

A high-energy label might be associated with loudness, onset density and spectral brightness. The interface should expose those associations and their uncertainty; it must not present them as a universal or causal explanation.

## Knowledge map
- [Signal processing and low-level statistics](#music-signal)
- [Pitch, harmony, rhythm and psychoacoustics](#music-musical)
- [Multivariate structure, information and similarity](#music-structure)
- [Temporal models and musical segmentation](#music-temporal)
- [Inference, perception and cross-song experiments](#music-inference)
- [Implementation roadmap and validation](#music-roadmap)

## Intended outcome
A working analysis laboratory with synchronized audio, transparent feature definitions, reproducible analysis settings, and an experimental workflow. Success means a user can inspect a musical event, understand its measurements, and distinguish a measured quantity from an inferred or listener-dependent interpretation.
