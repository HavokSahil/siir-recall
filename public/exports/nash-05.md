# Brouwer on mixed-strategy spaces

*Proof of Nash equilibrium · sIIr recall*

Move the fixed-point theorem from a simplex to a product of simplexes.

## Explanation

## 05.01 · A product is a different shape

Each individual mixed-strategy space is a simplex, but their product generally is not. Two players with two actions each have two probability parameters, so their joint strategy space is a square. A square has four vertices and is not a triangle.

We therefore need to transfer Brouwer's theorem to the product. The relevant dimension is the sum of the players' independent probability counts.

## 05.02 · Work in affine coordinates

Drop one probability coordinate for each player; recover it by subtracting the others from one. This identifies the strategy space with a full-dimensional compact convex polytope in its intrinsic Euclidean space.

A simplex of the same dimension is also a full-dimensional polytope there. Both have interior points. Translate an interior point of each to the origin. We can now compare their boundaries along rays from a common center.

## 05.03 · Match equal fractions of each ray

Along each direction from the origin, a compact convex body with the origin inside has exactly one boundary point. The distance to that point is its radial radius in that direction.

Map a point in the product to the same fraction of the distance to the simplex boundary along the same ray. The center maps to the center, boundary maps to boundary, and each radial segment is scaled by a positive factor. Reversing the ratio gives the inverse.

## 05.04 · Why the radial map is continuous

The boundary radii vary continuously for these polytopes. To see this explicitly, describe a polytope by finitely many linear inequalities whose right sides are positive because the origin is interior. The reciprocal radial radius is the maximum of finitely many continuous expressions.

The ratio of the two radii is consequently continuous and bounded on the unit sphere. This proves continuity away from the center and at the center. The inverse has the same properties, so the map is a homeomorphism.

## 05.05 · Transfer a fixed point

Combining the affine coordinate changes with the radial map gives a homeomorphism between a standard simplex and the mixed-strategy space. Conjugate a continuous self-map of the strategy space by this homeomorphism to obtain a continuous simplex self-map.

Brouwer gives a fixed point in simplex coordinates. Mapping it back gives a fixed point in the strategy space. This is the exact form needed for Nash's map.

## 05.06 · Exercise and result

Three players with two, three, and one available actions have three independent probability parameters in total. Their strategy space is a segment times a triangle times a point. It has six vertices, so it is not a tetrahedron, although both have dimension three.

The homeomorphism preserves continuity and fixed-point existence. It need not preserve straight lines or the number of vertices.

## Maths

## 05.01 · A product is a different shape

$$
S=\prod_{i=1}^n\Delta_{r_i-1},\qquad m=\sum_{i=1}^n(r_i-1).
$$
The ambient coordinate count is $\sum_i r_i=m+n$, but the $n$ normalization equations give $\dim S=m$.
$$
\Delta_1\times\Delta_1\cong[0,1]^2.
$$
The product is nonempty, convex, and compact. If $m=0$, it is a singleton and every self-map fixes its only point.

## 05.02 · Work in affine coordinates

For player $i$, use $r_i-1$ coordinates satisfying
$$
x_{i,a}\ge0,\qquad\sum_{a=1}^{r_i-1}x_{i,a}\le1,
\qquad s_i(r_i)=1-\sum_{a=1}^{r_i-1}x_{i,a}.
$$
For $r_i=1$, there are no free coordinates. For $m>0$, the resulting product has nonempty interior in $\mathbb R^m$.

Let $P$ be the translated product and $Q$ a translated $m$-simplex, both containing $0$ in their interiors.

## 05.03 · Match equal fractions of each ray

For a unit vector $v$, define
$$
\rho_P(v)=\max\{t\ge0:tv\in P\},\qquad
\rho_Q(v)=\max\{t\ge0:tv\in Q\}.
$$
Convexity and compactness give $P\cap\{tv:t\ge0\}=[0,\rho_P(v)]v$, with $0<\rho_P(v)<\infty$, and likewise for $Q$.
$$
h(0)=0,\qquad h(tv)=t\frac{\rho_Q(v)}{\rho_P(v)}v,
\quad0<t\le\rho_P(v).
$$
$$
h^{-1}(0)=0,\qquad h^{-1}(rv)=r\frac{\rho_P(v)}{\rho_Q(v)}v.
$$

## 05.04 · Why the radial map is continuous

Write $P=\{x:a_\ell\cdot x\le b_\ell,\ 1\le\ell\le L\}$ with $b_\ell>0$. For unit $v$,
$$
g_P(v)=\max\left(0,\max_{1\le\ell\le L}\frac{a_\ell\cdot v}{b_\ell}\right),\qquad
\rho_P(v)=\frac1{g_P(v)}.
$$
Boundedness of $P$ ensures $g_P(v)>0$ in every direction. Thus $\rho_P$ is positive and continuous; the same holds for $Q$. On the compact unit sphere there is $C<\infty$ with
$$
\frac{\rho_Q(v)}{\rho_P(v)}\le C,\qquad\|h(x)\|\le C\|x\|.
$$
This proves continuity at $0$; the formula proves it elsewhere. Apply the same argument to $h^{-1}$.

## 05.05 · Transfer a fixed point

Let $H:\Delta_m\to S$ be the resulting homeomorphism and let $F:S\to S$ be continuous. Define
$$
g=H^{-1}\circ F\circ H:\Delta_m\to\Delta_m.
$$
Brouwer gives $z$ with $g(z)=z$. Set $s=H(z)$; then
$$
F(s)=F(H(z))=H(g(z))=H(z)=s.
$$
Thus every continuous $F:S\to S$ has a fixed point.

## 05.06 · Exercise and result

$$
m=(2-1)+(3-1)+(1-1)=3.
$$
$$
S=\Delta_1\times\Delta_2\times\Delta_0,\qquad
\#\operatorname{vertices}(S)=2\cdot3\cdot1=6.
$$
A $3$-simplex has four vertices. Nevertheless $S$ and $\Delta_3$ are homeomorphic by the radial construction.
