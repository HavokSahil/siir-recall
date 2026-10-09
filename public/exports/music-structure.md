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
