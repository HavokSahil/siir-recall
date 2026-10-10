---
lesson_id: nash-02
pane: math
paired_file: explanation.md
summary: Turn probability distributions into geometry and define the labels used by Sperner.
---

# 02 · Simplexes and boundary labels

## 02.01 · Convex combinations and affine independence

$$
\operatorname{conv}\{x^0,\ldots,x^d\}
=\left\{\sum_{j=0}^d\lambda_jx^j:\lambda_j\ge0,\ \sum_j\lambda_j=1\right\}.
$$
Affine independence means
$$
\sum_j\alpha_jx^j=0,\quad\sum_j\alpha_j=0
\quad\Longrightarrow\quad\alpha_0=\cdots=\alpha_d=0.
$$
Equivalently $x^1-x^0,\ldots,x^d-x^0$ are linearly independent. Subtracting two barycentric representations proves uniqueness.

## 02.02 · The probability simplex

$$
\Delta_d=\left\{x\in\mathbb R^{d+1}:x_j\ge0,\ \sum_{j=0}^d x_j=1\right\}
=\operatorname{conv}\{e_0,\ldots,e_d\}.
$$
$$
\dim\Delta_d=d,\qquad S_i\cong\Delta_{r_i-1}.
$$
For $J\subseteq\{0,\ldots,d\}$, $J\ne\varnothing$, its corresponding face is
$$
\operatorname{conv}\{e_j:j\in J\}=\{x\in\Delta_d:x_j=0\text{ for }j\notin J\}.
$$

## 02.03 · Triangulations and mesh

A triangulation $\mathcal T$ covers $T$ and satisfies
$$
\bigcup_{\sigma\in\mathcal T}\sigma=T,\qquad
\sigma\cap\tau\text{ is empty or a common face}.
$$
Include all faces of each top-dimensional cell. Set
$$
\operatorname{mesh}(\mathcal T)=\max_{\dim\sigma=d}\operatorname{diam}(\sigma).
$$
For $d\ge1$, barycentric subdivision obeys
$$
\operatorname{mesh}(\operatorname{sd}\mathcal T)
\le\frac{d}{d+1}\operatorname{mesh}(\mathcal T).
$$
Indeed, for nested nonempty vertex sets $E\subseteq G$, their centroids satisfy
$$
b_G=\frac{|E|}{|G|}b_E+\frac{|G|-|E|}{|G|}b_{G\setminus E},
$$
so their distance is at most $\frac{d}{d+1}$ times the original cell diameter. These centroids form the vertices of each new cell.

## 02.04 · Proper and complete labeling

For $v=\sum_{j=0}^d\lambda_jx^j$, define
$$
\chi(v)=\{j:\lambda_j>0\}.
$$
A proper labeling satisfies
$$
L(v)\in\chi(v),\qquad L(x^j)=j.
$$
On $\Delta_d$, this becomes $v_{L(v)}>0$. A cell with vertices $v^0,\ldots,v^d$ is completely labeled iff
$$
\{L(v^0),\ldots,L(v^d)\}=\{0,\ldots,d\}.
$$

## 02.05 · Exercise and result

In $\Delta_2$,
$$
v=(1/2,1/2,0)\implies\chi(v)=\{0,1\},\qquad L(v)\in\{0,1\}.
$$
$$
w=(1/3,1/3,1/3)\implies\chi(w)=\{0,1,2\}.
$$
Labeling every subdivision vertex $0$ would leave no completely labeled triangle, but violates properness at $e_1$ and $e_2$.
