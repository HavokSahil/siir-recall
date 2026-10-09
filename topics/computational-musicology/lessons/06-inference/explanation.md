---
lesson_id: music-inference
summary: "From listener annotations to interpretable models and defensible experimental conclusions."
updated_at: 2026-10-02T12:30:00Z
---

# Perception, statistical inference & cross-song research

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
