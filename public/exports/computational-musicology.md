# Computational Musicology

*sIIr recall · 7 notes*

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

---

# Signal processing & low-level descriptor mathematics

*Computational Musicology · sIIr recall*

From sampled audio to time-frequency distributions, moments and timbral measurements.

## Signal model and prerequisites
A mono recording is $x[n]$, $n=0,\ldots,L-1$, sampled at $f_s$ Hz; stereo is $(x_L[n],x_R[n])$. Physical time is $n/f_s$. Sampling requires attention to aliasing; resampling uses an anti-alias filter. Digital amplitude is not physical sound-pressure level without calibration.

Convolution gives linear filtering: $y[n]=\sum_m h[m]x[n-m]$. Windows reduce spectral leakage but alter effective resolution. Study sampling, quantization, convolution, filtering, frequency response and normalization before treating descriptors as comparable numbers.

Stereo downmixing can cancel out-of-phase material. Offer a documented channel policy and retain the original audio. Keep an unnormalized signal for amplitude descriptors and separately record any normalization used for other analyses.

## Fourier analysis and STFT
The $N$-point DFT is
$$X[k]=\sum_{n=0}^{N-1}x[n]e^{-i2\pi kn/N}.$$
For frame $m$, hop $H$, and window $w$:
$$X_{m,k}=\sum_{n=0}^{N-1}x[mH+n]w[n]e^{-i2\pi kn/N}.$$
Frequency bins are $f_k=kf_s/N$ and frame timestamps must specify whether they refer to window starts or centers. Nominal bin spacing is $f_s/N$; actual resolving power also depends on the window. Zero-padding interpolates the spectrum rather than adding resolving power.

Use a one-sided spectrum for real audio and document whether interior-bin power is doubled. Increasing window length improves frequency discrimination while smearing short events. Display this tradeoff with selectable settings.

Extensions: constant-Q transforms use approximately logarithmic frequency bins; wavelets vary temporal scale with frequency. Neither is required for the first version.

## Amplitude and time-domain statistics
For a frame of $N$ samples:
$$\operatorname{RMS}=\sqrt{\frac1N\sum_n x[n]^2},\qquad A_{\max}=\max_n|x[n]|.$$
RMS is amplitude, while RMS squared measures mean-square energy. Crest factor is $A_{\max}/(\operatorname{RMS}+\epsilon)$. Digital level can be expressed as $20\log_{10}(\operatorname{RMS}+\epsilon)$ with a stated reference.

Zero-crossing rate is
$$Z=\frac{1}{2(N-1)}\sum_{n=1}^{N-1}|\operatorname{sgn}x[n]-\operatorname{sgn}x[n-1]|.$$
Specify zero handling and optional noise thresholds. Dynamic range must state its definition—such as a difference of level quantiles—rather than mix peak-to-average, loudness range and amplitude range.

## A spectrum as a distribution
With power $P_{m,k}=|X_{m,k}|^2$, define
$$p_m(k)=\frac{P_{m,k}}{\sum_jP_{m,j}}.$$
This is a distribution over frequency bins, not a probability of a note being played. Below a silence threshold, mark descriptors undefined instead of generating arbitrary normalized values.

The centroid and variance are
$$\mu_m=\sum_k f_kp_m(k),\qquad \sigma_m^2=\sum_k(f_k-\mu_m)^2p_m(k).$$
Spread is $\sigma_m$. Standardized skewness and kurtosis are $\sum_kp_m(k)((f_k-\mu_m)/\sigma_m)^3$ and the corresponding fourth power, when $\sigma_m>0$. Distinguish kurtosis from excess kurtosis.

Many libraries define centroid using magnitude rather than power. Both are valid conventions; comparisons must use the same convention.

## Entropy, flatness, rolloff and flux
Spectral entropy is
$$H_m=-\sum_kp_m(k)\log p_m(k).$$
Normalized entropy is $H_m/\log K$ for $K$ included bins. Its value depends on binning and frequency range; it is not automatically musical complexity.

Flatness compares geometric and arithmetic means:
$$\mathrm{SF}_m=\frac{\exp(K^{-1}\sum_k\log(P_{m,k}+\epsilon))}{K^{-1}\sum_k(P_{m,k}+\epsilon)}.$$
Rolloff is the smallest frequency below which a chosen fraction $q$ of total power lies. State $q$ explicitly.

One spectral-flux convention is
$$F_m=\sum_k(A_{m,k}-A_{m-1,k})^2,\quad A_{m,k}=|X_{m,k}|.$$
For onset detection, positive differences $\max(0,A_{m,k}-A_{m-1,k})$ are often more useful. Normalized spectra improve gain invariance but remove amplitude information. Store the chosen variant and hop size.

## Visualization and verification
Provide waveform, spectrogram, selected feature curves, and an inspectable frame showing its spectrum and formula. Use synthetic sine waves, mixtures, noise, silence and isolated impulses to verify units, expected changes, undefined cases and timestamp alignment.

[Project flow](#music-overview) · [Musical representations](#music-musical)

---

# Psychoacoustics, pitch, harmony & rhythm

*Computational Musicology · sIIr recall*

Musical coordinates and uncertain estimates layered onto the acoustic signal.

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

---

# Multivariate structure, information & similarity geometry

*Computational Musicology · sIIr recall*

Covariance, PCA, clustering and recurrence as tools for discovering musical organization.

## Descriptor matrix and scaling
Let $D\in\mathbb R^{T\times d}$ contain one descriptor vector per aligned frame. Treat missing and silent frames explicitly. Scaling is a modeling choice:
$$Z_{t,j}=\frac{D_{t,j}-\mu_j}{s_j}.$$
Within-song scaling answers relative questions; dataset-level scaling preserves some cross-song comparisons. Fit imputers and scalers only on training data for prediction. Robust medians and interquartile ranges may help with outliers.

## Covariance and conditional relationships
$$\widehat\Sigma=\frac{1}{T-1}(D-\mathbf1\mu^\top)^\top(D-\mathbf1\mu^\top).$$
Pearson correlation rescales covariance; rank correlation measures monotonic associations. Partial correlation can control selected covariates but does not establish causation. Autocorrelated overlapping windows reduce effective sample size, so naive independent-observation significance tests are inappropriate.

Visualize a correlation heatmap with scatterplots and interval selection. Ask whether centroid and rolloff are redundant, and whether their relationship changes between sections.

## PCA and low-dimensional trajectories
For centered or standardized $Z$:
$$Z=USV^\top,\qquad \text{scores}=ZV_{[:,1:q]}.$$
Eigenvalues of sample covariance are $S_{jj}^2/(T-1)$. Display loadings, explained variance, and the trajectory through the first two or three components. PCA maximizes variance, which may reflect mastering differences or noise rather than musically important structure.

Kernel PCA, UMAP and autoencoders are later comparisons. An attractive plot does not validate clusters; test stability and preserve high-dimensional evidence.

## Information theory
For discrete variables:
$$I(A;B)=\sum_{a,b}p(a,b)\log\frac{p(a,b)}{p(a)p(b)}=H(A)-H(A\mid B).$$
Use this to ask how informative onset density is about listener-rated energy or whether two descriptors share nonlinear dependence. Continuous descriptors need discretization, density estimation or a suitable continuous MI estimator; sample size, bias and parameter choices matter.

Distribution comparison can use
$$D_{\mathrm{KL}}(P\|Q)=\sum_kP(k)\log\frac{P(k)}{Q(k)}.$$
KL is asymmetric and may be infinite when supports differ. Jensen–Shannon divergence provides a symmetric finite alternative for discrete distributions. Ensure matching bins and report smoothing. These compare chosen representations, not an absolute musical distance.

## Similarity geometry and repetition
Euclidean distance is sensitive to units; cosine similarity emphasizes direction. Mahalanobis distance uses covariance:
$$d_M(x,y)=\sqrt{(x-y)^\top\widehat\Sigma^{-1}(x-y)}.$$
Use shrinkage or regularization when covariance is ill-conditioned. Define a self-similarity matrix $S_{ij}=\operatorname{sim}(\mathbf d_i,\mathbf d_j)$. Repeated off-diagonal blocks can indicate recurring sections; diagonals can indicate aligned motifs. Repetition alone cannot assign verse or chorus semantics.

Dynamic time warping can compare passages at differing rates but needs path constraints. Separate timbral, harmonic and rhythmic similarities so a single number does not hide their tradeoffs.

## Clustering and latent states
$k$-means minimizes
$$\sum_i\min_j\|\mathbf z_i-\mu_j\|^2.$$
Gaussian mixtures model
$$p(\mathbf z)=\sum_j\pi_j\mathcal N(\mathbf z\mid\mu_j,\Sigma_j).$$
Mixtures supply model-based soft memberships. Fit model complexity carefully and evaluate stability. Frame clusters need not form contiguous sections; temporal models address this. Keep neutral labels such as state A until musical meaning is externally established.

[Musical descriptors](#music-musical) · [Temporal structure](#music-temporal)

---

# Temporal models, novelty & section boundaries

*Computational Musicology · sIIr recall*

Music as an ordered process: autocorrelation, hidden states and statistical change.

## Time-series dependence
Music is nonstationary and ordered. For centered processes, lagged covariance is
$$C_{ab}(\ell)=E[(a_t-\mu_a)(b_{t+\ell}-\mu_b)].$$
Autocorrelation identifies persistence or periodicity; cross-correlation identifies lagged association. Estimate locally when distributions change. A leading feature does not prove it causes the following event.

Autoregressive models provide simple baselines:
$$y_t=\sum_{j=1}^pa_jy_{t-j}+\epsilon_t.$$
Inspect residuals, lag selection and stability. State-space models introduce a latent trajectory:
$$z_{t+1}=Az_t+\eta_t,\qquad d_t=Cz_t+\epsilon_t.$$
Kalman filtering is a later option under suitable linear/Gaussian assumptions; it is not required merely because the data is a time series.

## Markov and hidden Markov models
An HMM represents discrete latent musical states $z_t$:
$$p(z_{1:T},d_{1:T})=p(z_1)\prod_{t=2}^Tp(z_t\mid z_{t-1})\prod_{t=1}^Tp(d_t\mid z_t).$$
Transition probabilities encode persistence and recurrence; emissions describe feature distributions. Forward–backward estimates state marginals; Viterbi estimates a most likely path. Hidden semi-Markov models can represent section durations more explicitly.

Learned states do not automatically equal verse, chorus or bridge. Interpret them with annotations and listening.

## Novelty and change-point detection
A simple boundary cue compares neighboring interval summaries, $\nu_t=\|\bar d_{t+}-\bar d_{t-}\|$. A checkerboard kernel over a self-similarity matrix can emphasize transitions from internally similar regions to dissimilar neighbors.

A statistical formulation asks whether distributions within adjacent regimes differ. It does not assume all samples before a boundary or after it share one global distribution.

A segmentation objective is
$$\min_{\tau_1,\ldots,\tau_K}\sum_{j=0}^K\mathcal C(d_{\tau_j:\tau_{j+1}})+\lambda K.$$
Here $\mathcal C$ is a within-segment cost, $\lambda$ penalizes extra boundaries, and endpoints cover the recording. Minimum duration and smoothing prevent every transient from becoming a section.

Extensions include CUSUM for sequential mean shifts, likelihood ratios, kernel costs and Bayesian online change-point detection. Compare assumptions and computational costs rather than enabling every method at once.

## Evaluation and interaction
Overlay candidate boundaries on playback and let the user adjust or annotate them. Compare detections against reference boundaries with declared timing tolerances and precision/recall, and inspect coarse versus fine segmentation. Hold out songs when tuning thresholds. Show uncertainty or sensitivity to settings; a novelty peak is evidence for a change, not a guaranteed musical section.

[Statistical structure](#music-structure) · [Inference and experiments](#music-inference)

---

# Perception, statistical inference & cross-song research

*Computational Musicology · sIIr recall*

From listener annotations to interpretable models and defensible experimental conclusions.

## Define the target before modeling
For energy, tension or brightness, specify the rating scale, excerpt duration, listener population and listening conditions. Obtain independent annotations, retain disagreement, and distinguish individual ratings from averaged judgments. Do not create energy labels from RMS and then claim that RMS predicts human energy perception.

A research question might be: **Which acoustic measurements predict listener-rated energy on previously unseen recordings, beyond a loudness-only baseline?**

## Regression and regularization
Linear regression models $y=D\beta+\epsilon$. Ridge estimates
$$\hat\beta=\arg\min_\beta\{\|y-D\beta\|_2^2+\lambda\|\beta\|_2^2\}.$$
LASSO replaces the penalty with $\lambda\|\beta\|_1$. State intercept treatment and scaling. Add interactions when motivated, compare trees or boosting later, and use appropriate likelihoods for bounded, ordinal or categorical labels.

Compare held-out error, calibration where applicable, residual patterns and simple baselines. Inspect coefficients, ablations and permutation importance; correlated predictors complicate attribution. Explanations describe a fitted model and do not establish acoustic causation.

## Bayesian models and uncertainty
$$p(\theta\mid\mathcal D)\propto p(\mathcal D\mid\theta)p(\theta).$$
Posterior predictive uncertainty is
$$p(y_*\mid d_*,\mathcal D)=\int p(y_*\mid d_*,\theta)p(\theta\mid\mathcal D)\,d\theta.$$
Distinguish measurement uncertainty, listener disagreement and parameter uncertainty. A confidence interval for mean energy differs from a prediction interval for a new listener or excerpt. Evaluate interval coverage and calibration; report model assumptions and sensitivity to priors. Bootstrap intervals are an alternative when their sampling scheme matches the dependence structure.

## Hypothesis testing and effect sizes
Example: are annotated choruses brighter than verses? Compute a within-song contrast $\Delta_s=\bar C_{s,\mathrm{chorus}}-\bar C_{s,\mathrm{verse}}$, then estimate the distribution of $\Delta_s$ across songs. Report effect size and an uncertainty interval, with a predeclared null and analysis protocol.

Overlapping windows are not independent replicates. Use paired song-level analysis, cluster bootstrapping by song, within-song block bootstrapping when appropriate, or hierarchical models. Permutations must respect exchangeability. Correct for multiple comparisons when exploring many descriptors; separate exploratory findings from confirmatory tests.

## Cross-song and listener hierarchy
For song $s$, listener $l$, and excerpt $t$, an illustrative mixed model is
$$y_{slt}=\beta_0+\beta^\top d_{st}+u_s+v_l+\epsilon_{slt}.$$
Random effects account for shared song or listener variation, but assumptions still need checking. ANOVA and variance decomposition may compare groups when the design supports them. Genre and artist labels are potential confounders and dataset-specific categories.

Split by song, and by artist when testing artist generalization. Never scatter adjacent windows from the same recording across training and test sets. Fit feature selection, PCA, normalization and hyperparameters within training folds. Use a locked test set for final claims.

## Controlled experiments
| Experiment | Mathematical question | Evaluation |
| --- | --- | --- |
| Gain change | Which features are amplitude invariant? | Predict RMS scaling; compare normalized spectral features |
| Time stretch | Which descriptors depend on tempo or window scale? | Track tempo changes and algorithmic artifacts |
| Pitch shift | Which harmonic representations are transposition sensitive? | Compare rotated chroma and affected spectra |
| Added noise | How robust are descriptors and boundaries? | Curves versus controlled SNR and paired contrasts |
| Feature ablation | Does a feature family add predictive information? | Grouped held-out improvement with uncertainty |
| Repeated sections | Can recurrence recover annotated structure? | Similarity patterns and boundary accuracy |

Time stretching and pitch shifting may introduce artifacts; they are controlled perturbations, not perfectly isolated causal interventions.

## Information and reproducibility
Record audio provenance and permissions, analysis settings, feature definitions, annotations, splits, seeds, model versions and exclusions. A saved result should reconstruct the full path from recording to estimate. Report domain shifts and failure cases alongside successful examples.

[Temporal models](#music-temporal) · [Implementation roadmap](#music-roadmap)

---

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
