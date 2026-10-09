# Statistics and recurring structure

*sIIr Music Observatory · sIIr recall*

Correlation, PCA, self-similarity, and candidate boundaries.

## Explanation

## 04.01 · Measurements that move together

The statistics view compares eight descriptors: RMS, centroid, spread, entropy, flatness, roll-off, flux, and zero-crossing rate. Standardization prevents the larger numerical scale of frequency-valued measurements from dominating PCA.

Correlation asks which descriptors vary together. Constant columns become zeros, including their correlation-matrix diagonal. Overlapping frames are dependent observations, so a large correlation does not establish causation or statistical significance.

Interval summaries use frame centers within the selected range. Averages and standard deviations summarize measurements; they do not replace listening or the distribution shown by a histogram.

## 04.02 · A two-axis map of variation

PCA rotates the standardized descriptor cloud into directions of maximal variation. sIIr displays the leading two component scores together with their loadings and explained fractions.

An axis is a mixture of measurements, not an automatically discovered musical label. Inspect the loadings to see what drives a direction. Eigenvector signs are arbitrary: a mirrored axis can represent the same PCA result.

This map is exploratory. It does not by itself classify tracks, identify causes, or validate clusters.

## 04.03 · Similarity and novelty across time

The structure view compares FFT chroma vectors with cosine similarity. Up to 160 uniformly sampled frames bound the matrix’s memory cost. Bright off-diagonal areas can indicate repeated pitch-class material.

A novelty curve compares neighboring blocks: internally similar regions that disagree across their border produce a positive value. Local peaks above the mean plus one standard deviation suggest boundaries, separated by at least one second.

These are candidates for inspection and manual annotation. Shared chroma need not mean the same musical section, and downsampling limits boundary precision.

## Maths

## 04.01 · Measurements that move together

For $M$ frames and descriptor $j$,

$$
\mu_j=\frac1M\sum_mx_{mj},\qquad \sigma_j=\sqrt{\frac{\sum_m(x_{mj}-\mu_j)^2}{M-1}}.
$$

When $M\ge2$ and $\sigma_j\ge10^{-12}$,

$$
Z_{mj}=\frac{x_{mj}-\mu_j}{\sigma_j},\qquad R=\frac{Z^TZ}{M-1}.
$$

Constant columns use $Z_{mj}=0$. With fewer than two frames, correlations are set to zero.

## 04.02 · A two-axis map of variation

The symmetric correlation matrix is diagonalized using a Jacobi eigensolver:

$$
Rv_c=\lambda_cv_c,\qquad \lambda_1\ge\lambda_2\ge\cdots.
$$

Component scores and explained fractions are

$$
s_{mc}=Z_m v_c,\qquad e_c=\frac{\max(0,\lambda_c)}{\sum_j\max(0,\lambda_j)}.
$$

The code uses zero fractions when the denominator is negligible. Only the first two components are displayed; their fractions need not sum to one.

## 04.03 · Similarity and novelty across time

For chroma vectors $C_i,C_j$,

$$
S_{ij}=\frac{C_i\cdot C_j}{\|C_i\|\|C_j\|}.
$$

Near-zero norm products return zero. For a four-frame neighborhood, let $B$ be the preceding indices and $A$ the following indices:

$$
\nu(t)=\max\left(0,\overline S_{BB}+\overline S_{AA}-2\overline S_{BA}\right).
$$

Each block mean averages sixteen entries. A candidate satisfies $\nu(t)>\mu_\nu+\sigma_\nu$, a strict rise from its predecessor, and a non-strict fall to its successor. Endpoint neighborhoods are incomplete and remain zero.
