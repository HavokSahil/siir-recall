# Simplexes and boundary labels

*Proof of Nash equilibrium · sIIr recall*

Turn probability distributions into geometry and define the labels used by Sperner.

## Explanation

## 02.01 · Convex combinations and affine independence

A convex combination averages points with nonnegative weights summing to one. A set is convex when it contains every line segment between its points.

Affine independence says the vertices have no redundant affine relation. Equivalently, subtract one vertex and the remaining difference vectors are linearly independent. This gives each point of their simplex unique barycentric coordinates.

## 02.02 · The probability simplex

A simplex is the convex hull of affinely independent vertices: a point, a segment, a triangle, a tetrahedron, and their higher-dimensional counterparts.

The standard simplex is precisely the space of distributions on a fixed set of actions. Its dimension is one less than its number of coordinates because the coordinates must sum to one.

## 02.03 · Triangulations and mesh

A triangulation cuts the simplex into finitely many smaller simplexes. Cells fit face to face: two cells can meet only in a common face, so a vertex of one cannot sit partway along an unsubdivided edge of another.

The mesh is the largest diameter of a top-dimensional cell. We need triangulations whose mesh tends to zero. Repeated barycentric subdivision supplies them by replacing cells with smaller cells whose vertices are centroids of nested faces.

## 02.04 · Proper and complete labeling

Label each triangulation vertex with one of the original vertex indices. On a boundary face, only labels belonging to that face are allowed. In standard coordinates, a label can be used only where its coordinate is positive.

Original vertices are therefore forced to keep their own labels. Interior subdivision vertices may use any label. A small top-dimensional cell is completely labeled when its vertices carry every label exactly once.

## 02.05 · Exercise and result

Which labels are allowed at the midpoint of an edge of a triangle, and at its center? The midpoint may use either endpoint's label, but never the opposite vertex's label. The center may use any label.

This is a restriction on every triangulation vertex on the edge, not only on the original endpoints. Without it, Sperner's conclusion can fail.

## Maths

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
