---
lesson_id: music-temporal
summary: "Music as an ordered process: autocorrelation, hidden states and statistical change."
updated_at: 2026-10-02T12:30:00Z
---

# Temporal models, novelty & section boundaries

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
