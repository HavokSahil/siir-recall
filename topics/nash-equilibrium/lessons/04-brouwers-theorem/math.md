---
lesson_id: nash-04
pane: math
paired_file: explanation.md
summary: Fine completely labeled cells converge to a fixed point of a continuous map.
---

# 04 · From Sperner to Brouwer

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
