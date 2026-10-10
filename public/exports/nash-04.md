# From Sperner to Brouwer

*Proof of Nash equilibrium · sIIr recall*

Fine completely labeled cells converge to a fixed point of a continuous map.

## Explanation

## 04.01 · What must be proved

Brouwer's theorem on a simplex says that a continuous map from the simplex into itself has a fixed point. A fixed point is a point whose image equals itself.

For the zero-dimensional simplex this is immediate. In positive dimension, we label finer and finer triangulations using the direction in which the map moves each coordinate. Sperner supplies a small cell witnessing all coordinate labels at once.

## 04.02 · Choose a coordinate that does not increase

At a triangulation vertex, choose a label whose coordinate is positive and does not increase under the map. Such a coordinate must exist.

If every positive coordinate strictly increased, their images alone would sum to more than one. The remaining image coordinates are nonnegative, contradicting the fact that the image is also a probability vector. Requiring positivity makes the labeling proper on boundary faces.

## 04.03 · Select a completely labeled cell

Sperner now gives a completely labeled cell in each triangulation. Name each of its vertices by its label. At the vertex with a given label, that coordinate does not increase.

These inequalities initially hold at different points. They do not yet describe a fixed point. Shrinking the cells is what will bring all those points together.

## 04.04 · Compactness gives one common limit

The simplex is closed and bounded in finite-dimensional Euclidean space, hence compact. The centroids therefore have a convergent subsequence whose limit still lies in the simplex.

Every vertex of a chosen cell is at most one mesh length from its centroid. Along the same subsequence, all labeled vertices converge to the same limit. Continuity then lets us pass each coordinate inequality to that limit.

## 04.05 · Coordinate inequalities force equality

At the limit no coordinate increases. But the input and output both have total mass one. If any coordinate strictly decreased, the output total would be smaller unless another coordinate increased. None can increase, so every coordinate must be unchanged.

The proof uses continuity to pass to the limit, compactness to obtain a limit, and Sperner to enforce all coordinate inequalities in cells of arbitrarily small size.

## 04.06 · Exercise and result

Does the proof say that every chosen cell, or every centroid, converges? No. Choices can vary from one triangulation to the next. Compactness guarantees a convergent subsequence, and that is enough to prove existence.

Also, the centroid of a completely labeled cell need not itself be fixed. The inequalities belong to its labeled vertices; exact equality is obtained only in the limit.

## Maths

## 04.01 · What must be proved

Let $f:\Delta_d\to\Delta_d$ be continuous. We seek $z\in\Delta_d$ with
$$
f(z)=z.
$$
For $d=0$, the only point is fixed. For $d\ge1$, choose triangulations $\mathcal T_k$ with
$$
\delta_k=\operatorname{mesh}(\mathcal T_k)\longrightarrow0.
$$

## 04.02 · Choose a coordinate that does not increase

Choose
$$
L(v)\in\{j:v_j>0,\ f_j(v)\le v_j\}.
$$
To prove this set nonempty, let $J=\{j:v_j>0\}$. If $f_j(v)>v_j$ for every $j\in J$, then
$$
1=\sum_{j=0}^d f_j(v)\ge\sum_{j\in J}f_j(v)
>\sum_{j\in J}v_j=1,
$$
a contradiction. Since $L(v)\in J=\chi(v)$, the labeling is proper.

## 04.03 · Select a completely labeled cell

For each $k$, choose a completely labeled cell
$$
\sigma_k=\operatorname{conv}\{p^{k,0},\ldots,p^{k,d}\},\qquad L(p^{k,j})=j.
$$
Then, for each $j$,
$$
f_j(p^{k,j})\le(p^{k,j})_j.
$$
Set its centroid to be
$$
c_k=\frac1{d+1}\sum_{j=0}^d p^{k,j}\in\sigma_k.
$$

## 04.04 · Compactness gives one common limit

There are indices $k_\ell$ and $z\in\Delta_d$ with $c_{k_\ell}\to z$. For every $j$,
$$
\|p^{k_\ell,j}-z\|\le
\|p^{k_\ell,j}-c_{k_\ell}\|+\|c_{k_\ell}-z\|
\le\delta_{k_\ell}+\|c_{k_\ell}-z\|\to0.
$$
Continuity yields
$$
f_j(z)=\lim_{\ell\to\infty}f_j(p^{k_\ell,j})
\le\lim_{\ell\to\infty}(p^{k_\ell,j})_j=z_j.
$$

## 04.05 · Coordinate inequalities force equality

For all $j$, $z_j-f_j(z)\ge0$, while
$$
\sum_{j=0}^d\bigl(z_j-f_j(z)\bigr)=1-1=0.
$$
A finite sum of nonnegative terms is zero only if each term is zero. Thus
$$
f_j(z)=z_j\quad\text{for every }j,\qquad f(z)=z.
$$

## 04.06 · Exercise and result

For any convergent subsequence of chosen centroids, the mesh estimate and continuity imply that its limit is fixed. The proof establishes
$$
\exists(k_\ell),\ \exists z:\ c_{k_\ell}\to z,\quad f(z)=z.
$$
It does not assert $f(c_k)=c_k$ or that the entire sequence $(c_k)$ converges.
