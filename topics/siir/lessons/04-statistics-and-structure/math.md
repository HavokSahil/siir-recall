---
lesson_id: siir-structure
summary: Correlation, PCA, self-similarity, and candidate boundaries.
---

# Statistics and recurring structure

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
