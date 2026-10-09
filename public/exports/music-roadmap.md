# Music Observatory: implementation & validation roadmap

*Computational Musicology · sIIr recall*

A staged build that keeps the mathematical spine coherent and the claims testable.

## Phase 1 — Acoustic microscope
Deliver local audio import and playback, waveform, STFT spectrogram, RMS, centroid, spread, entropy, rolloff and flux. Add shared cursor, selectable intervals, frame inspection and parameter recording.

**Acceptance:** sine, noise, silence and impulse fixtures give expected descriptors; plots align with audio; undefined values remain explicit; changing resolution visibly alters the time-frequency tradeoff.

## Phase 2 — Musical and statistical structure
Add mel/MFCC and chroma representations, onset strength, tempo candidates, scaling, covariance, PCA and self-similarity. Provide a novelty baseline and editable section annotations.

**Acceptance:** expose loadings and variance; preserve recurring passages in similarity views; avoid calling latent clusters choruses; compare boundary detections against hand annotations with declared tolerance.

This completes the first serious descriptive release: **STFT → spectral statistics → descriptor relationships → latent trajectories → recurrence and boundary candidates.**

## Phase 3 — Perception with evidence
Add an annotation protocol and an interpretable energy or brightness regression. Start with a loudness-only baseline, then ridge and carefully chosen feature families. Use grouped validation and evaluated prediction intervals or bootstrap uncertainty.

**Acceptance:** all preprocessing is fitted inside training folds; evaluation uses unseen songs; labels are independently obtained; model explanations and uncertainty have stated limitations. Without suitable labels, keep this phase as an experiment design rather than inventing estimates.

## Phase 4 — Population experiments
Add a multi-recording workspace, saved hypotheses, song-level paired contrasts, clustered uncertainty estimates, multiple-testing control and mixed-effects models where warranted.

**Acceptance:** complete provenance and reproducible splits; exploratory versus confirmatory results distinguished; artist-held-out evaluation where relevant; failure cases recorded.

## Phase 5 — Advanced extensions
Evaluate CQT/wavelets, GMMs, HMMs, Bayesian segmentation, nonlinear embeddings, learned representations, instrument or melody estimation and richer perceptual models. Add an extension only when it answers a defined question or fixes a demonstrated limitation.

## Mathematical dependencies
| Domain | Core use | Later extension |
| --- | --- | --- |
| DSP | Sampling, filtering, windows, DFT/STFT | CQT, wavelets, perceptual loudness |
| Probability/statistics | Moments, estimation, covariance | Hierarchical models and calibrated uncertainty |
| Linear algebra | Feature matrices, SVD, PCA | Kernel embeddings and representation learning |
| Information theory | Spectral entropy; explicit distributions | MI estimation, conditional information, divergence |
| Geometry | Cosine/Euclidean similarity and recurrence | Regularized Mahalanobis distance and DTW |
| Time series | Autocorrelation, novelty, segmentation | AR, state-space, HMM/HSMM |
| Statistical learning | Baselines, ridge, held-out validation | Boosting, nonlinear models, ablation |
| Experimental design | Controlled perturbations and grouped splits | Confirmatory population studies |

## Software architecture and data contracts
Separate decoding, transforms, descriptors, statistical analysis and visualization. Each feature carries its name, definition/version, units, time grid, parameters, valid mask and dependencies. Keep raw audio, analysis artifacts and annotations distinct.

Compute and cache deterministic transforms keyed by recording and parameters. Recompute downstream stages when dependencies change. Use chunking and asynchronous jobs for long recordings; computing a full $T\times T$ similarity matrix is quadratic, so aggregate or tile it when necessary.

A natural prototype is a Python analysis core with numerical/audio libraries and a web visualization interface. The final stack is an implementation choice; this notebook specifies the intended behavior, not an already-built music application.

## Essential screens
- **Recording workspace:** synchronized playback, spectrogram and selected curves.
- **Frame inspector:** samples, transform, feature formula and computed value.
- **Structure workspace:** similarity matrix, PCA trajectory, recurrence and boundary annotations.
- **Experiment workspace:** hypothesis, dataset/split, comparison, effect size and uncertainty.

## Research outputs and open questions
Produce a reproducible analysis report, a descriptor-definition catalog, annotated examples and a small benchmark of invariant/unstable features. Ask which visualizations improve musical understanding and whether listener-rated energy is the best first target.

The project succeeds when the user can **measure, discover, explain and test** while retaining a clear account of what is observed, inferred or uncertain.

[Return to project goal](#music-overview)
