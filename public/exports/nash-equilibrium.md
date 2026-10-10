# Proof of Nash equilibrium

*sIIr recall · 7 notes*

# Games, randomization, and equilibrium

*Proof of Nash equilibrium · sIIr recall*

The objects in the theorem and why checking pure deviations is enough.

## Explanation

## 01.01 · A finite game

A normal-form game lists the players, the actions available to each player, and each player's payoff for every combination of actions. Actions are chosen simultaneously in the sense that a player does not condition their choice on observing the others' current choices.

Outcomes can be modeled separately, as in the tutorial, but composing the outcome rule with utility gives a payoff directly on action profiles. Nothing in the existence proof requires a zero-sum game or identical interests.

## 01.02 · Mixed strategies and support

A mixed strategy is a probability distribution over a player's actions. A pure strategy is a distribution concentrated on one action. The support consists only of actions with positive probability.

Each player chooses a distribution independently. Thus a profile of mixed strategies determines a product distribution over action profiles. This independence will matter when writing expected payoffs.

## 01.03 · Expected payoffs

Multiply the payoff of each pure profile by its probability and add. If a player commits to one action, average only over the opponents' random choices.

Holding the opponents fixed makes a player's expected payoff linear in that player's own probabilities. The payoff from a mixture is therefore a weighted average of the payoffs from its pure actions. This averaging identity is the key algebraic fact in the final proof.

## 01.04 · Best responses and Nash equilibrium

A best response maximizes one player's payoff against fixed opponents. A mixture is a best response exactly when every action in its support attains the largest pure-action payoff.

At a Nash equilibrium, every player is already playing a best response. To check this, it suffices to check pure deviations: if none beats the current payoff, no weighted average of them can beat it either. Unsupported actions may tie with the best payoff; they do not have to be strictly worse.

## 01.05 · Example and result

In matching pennies, the row player wants the two actions to match; the column player wants them to differ. Every pure profile gives one player a profitable switch, so no pure equilibrium exists.

If both players choose heads and tails with equal probabilities, each pure action has expected payoff zero against the opponent. Both players are best responding. The existence theorem allows this kind of mixed equilibrium; it does not promise a pure equilibrium.

## Maths

## 01.01 · A finite game

Assume $1\le n<\infty$, $1\le |A_i|<\infty$, and
$$
N=\{1,\ldots,n\},\qquad A=\prod_{i=1}^n A_i,\qquad u_i:A\to\mathbb R.
$$
With an outcome rule $\mu:A\to O$ and outcome utility $\widetilde u_i:O\to\mathbb R$, set $u_i=\widetilde u_i\circ\mu$.

## 01.02 · Mixed strategies and support

Write $r_i=|A_i|$. Then
$$
S_i=\left\{s_i\in\mathbb R^{r_i}:s_i(a_i)\ge0,\ \sum_{a_i\in A_i}s_i(a_i)=1\right\},\qquad S=\prod_i S_i.
$$
$$
\operatorname{supp}(s_i)=\{a_i:s_i(a_i)>0\},\qquad
\Pr_s(a)=\prod_i s_i(a_i).
$$
Every support is nonempty because its probabilities sum to one.

## 01.03 · Expected payoffs

$$
u_i(s)=\sum_{a\in A}u_i(a)\prod_{j=1}^n s_j(a_j).
$$
$$
u_i(a_i,s_{-i})=\sum_{a_{-i}\in\prod_{j\ne i}A_j}
 u_i(a_i,a_{-i})\prod_{j\ne i}s_j(a_j).
$$
Grouping the first sum by $a_i$ gives
$$
u_i(s)=\sum_{a_i\in A_i}s_i(a_i)u_i(a_i,s_{-i}).
$$
These are finite polynomials in the strategy coordinates, hence continuous.

## 01.04 · Best responses and Nash equilibrium

Let $M_i(s_{-i})=\max_{a_i\in A_i}u_i(a_i,s_{-i})$. For any $t_i\in S_i$,
$$
u_i(t_i,s_{-i})=\sum_{a_i}t_i(a_i)u_i(a_i,s_{-i})\le M_i(s_{-i}).
$$
Equality holds iff $\operatorname{supp}(t_i)\subseteq\arg\max_{a_i}u_i(a_i,s_{-i})$.
$$
s\text{ is Nash}\iff
\forall i,\ \forall t_i\in S_i:\ u_i(s)\ge u_i(t_i,s_{-i})
$$
$$
\iff\forall i,\ \forall a_i\in A_i:\ u_i(s)\ge u_i(a_i,s_{-i}).
$$

## 01.05 · Example and result

The entries are $(u_1,u_2)$:
$$
\begin{array}{c|cc}
 & H & T\\\hline
H&(1,-1)&(-1,1)\\
T&(-1,1)&(1,-1)
\end{array}
$$
Let $p=s_1(H)$ and $q=s_2(H)$. Then
$$
u_1(H,s_2)=2q-1,\qquad u_1(T,s_2)=1-2q,
$$
$$
u_2(s_1,H)=1-2p,\qquad u_2(s_1,T)=2p-1.
$$
At $p=q=1/2$, all four pure-deviation payoffs and both current payoffs are zero.

---

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

---

# Sperner's lemma and parity

*Proof of Nash equilibrium · sIIr recall*

Boundary constraints force an odd number of completely labeled cells.

## Explanation

## 03.01 · The statement and the base case

Sperner's lemma says that every properly labeled triangulation of a simplex contains an odd number of completely labeled top-dimensional cells. In particular, there is at least one.

We prove the stronger oddness statement by induction on dimension. The zero-dimensional simplex is a single point with its forced label, so the count starts at one. For a segment, the same phenomenon is visible as an odd number of changes between the two endpoint labels.

## 03.02 · Doors on the boundary

In dimension d, call a small face a door if it has all the labels except the last one. A boundary door can lie only on the original face opposite the last vertex. Any other boundary face forbids one of the labels a door needs.

The induced triangulation of that distinguished face is itself properly labeled. The induction hypothesis therefore says the number of boundary doors is odd.

## 03.03 · How many doors can a cell have?

A completely labeled cell has one door: delete the vertex with the last label. A cell that contains all the door labels but not the last label has exactly one repeated label and two doors: delete either copy.

Every remaining cell has no door. These three cases are exhaustive because a top-dimensional cell has exactly one more vertex than a door.

## 03.04 · Count incidences modulo two

Count pairs consisting of a cell and one of its doors. Counting by cells gives one contribution from each completely labeled cell and two from each cell with two doors.

Counting by doors gives two contributions from each interior door and one from each boundary door. Equating these counts and ignoring even terms proves the number of completely labeled cells is odd. This completes the induction.

## 03.05 · The walking interpretation

The tutorial explains the same count as walks through doors. Enter a cell from a boundary door. If it has two doors, leave through the other and cross into the adjacent cell. If it has one door, it is completely labeled and the walk ends.

Form a finite graph with one node per cell and one separate endpoint for each boundary door. Cell nodes have degree zero, one, or two. Its nontrivial components are paths or cycles. A path beginning at a boundary endpoint cannot get trapped in a cycle. Boundary-to-boundary paths pair endpoints; the odd boundary count leaves a path ending at a completely labeled cell. Other completely labeled endpoints pair with one another, preserving oddness.

## 03.06 · Exercise and result

For a small triangle, how many edges have labels zero and one? Labels zero, one, two give one door; zero, one, one give two; zero, zero, two give none. This enumeration drives the parity proof regardless of cell shape or size.

## Maths

## 03.01 · The statement and the base case

Let $C_d$ count completely labeled $d$-cells. Sperner's lemma asserts
$$
C_d\equiv1\pmod2.
$$
For $d=0$, $C_0=1$. For a segment with successive labels $\ell_0=0,\ell_1,\ldots,\ell_r=1$,
$$
\#\{k:\ell_k\ne\ell_{k+1}\}\equiv\ell_r-\ell_0\equiv1\pmod2.
$$

## 03.02 · Doors on the boundary

For $d\ge1$, a door is a $(d-1)$-cell labeled $\{0,\ldots,d-1\}$. Write
$$
B_d=\#\{\text{boundary doors}\}.
$$
The original face opposite $x^j$ forbids label $j$. Thus a boundary door can lie only on
$$
T_{d-1}=\operatorname{conv}\{x^0,\ldots,x^{d-1}\}.
$$
Induction on its induced triangulation gives $B_d\equiv1\pmod2$.

## 03.03 · How many doors can a cell have?

Let $D(\sigma)$ be the number of doors of a $d$-cell $\sigma$. Then
$$
D(\sigma)=\begin{cases}
1,&\sigma\text{ has all labels }0,\ldots,d,\\
2,&\sigma\text{ has labels }0,\ldots,d-1\text{ with one repeated},\\
0,&\text{otherwise}.
\end{cases}
$$
In the second case a door must omit one of the two vertices with the repeated label. There are exactly two such choices.

## 03.04 · Count incidences modulo two

Let $I_d$ be the number of interior doors and $R_d$ the number of cells with two doors. A triangulation has one incident top cell at a boundary door and two at an interior door. Hence
$$
\sum_{\dim\sigma=d}D(\sigma)=C_d+2R_d=B_d+2I_d.
$$
Reducing modulo two,
$$
C_d\equiv B_d\equiv1\pmod2.
$$
Therefore $C_d\ge1$.

## 03.05 · The walking interpretation

Connect adjacent cell nodes across interior doors. Connect each boundary door's endpoint to its incident cell. Then
$$
\deg(\sigma)=D(\sigma)\in\{0,1,2\},\qquad
\deg(\text{boundary endpoint})=1.
$$
A finite graph of maximum degree two decomposes into isolated vertices, paths, and cycles. Degree-one endpoints occur in pairs along paths. The endpoints are exactly the $B_d$ boundary endpoints and the $C_d$ completely labeled cells, so
$$
B_d+C_d\equiv0\pmod2.
$$

## 03.06 · Exercise and result

For $d=2$, doors are edges with labels $\{0,1\}$:
$$
D(0,1,2)=1,\qquad D(0,1,1)=2,\qquad D(0,0,2)=0.
$$

---

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

---

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

---

# Nash's continuous map

*Proof of Nash equilibrium · sIIr recall*

Use positive deviation gains to build a continuous self-map of the strategy space.

## Explanation

## 06.01 · Why a direct best-response map is awkward

A tempting plan is to send each profile to a best response. Best responses can tie, however, and selecting a single best action can cause jumps when the opponent's mixture changes. Brouwer requires a continuous, single-valued self-map.

Nash instead builds a map from the sizes of profitable deviations. It does not need to select a best action or break ties.

## 06.02 · Positive deviation gains

For each action, compare the payoff from switching to it with the player's current expected payoff. Keep only the positive part. This number is zero for actions that tie or do worse.

At an equilibrium all these positive gains vanish. The goal is to make a continuous map whose fixed points force the converse as well.

## 06.03 · Add gains and normalize

Add each positive gain to the corresponding action's current probability, then divide by the total new mass. Do this for every player, evaluating all gains against the original profile.

An unplayed action with positive gain receives positive probability. An action with zero gain receives no added mass and loses probability when the normalization factor exceeds one. A positive gain alone does not guarantee that an action's normalized probability increases: the gain must also exceed its share of the total added mass.

## 06.04 · Check the hypotheses of Brouwer

Every numerator is nonnegative and every denominator is at least one. Summing a player's output coordinates gives one. Thus the output is always a valid mixed profile, including at boundary points with unplayed actions.

Continuity follows from the finite payoff sums, the continuous positive-part operation, and division by a denominator that never vanishes. The product-space form of Brouwer therefore supplies a fixed point.

## 06.05 · A numerical update

Start matching pennies with the row player always choosing heads and the column player choosing heads with probability three quarters. Row's current payoff is one half, so neither row action has a positive gain. Row's distribution stays unchanged.

Column's current payoff is minus one half. Switching to tails gives payoff one, a gain of three halves. Adding that gain to column's tails mass and normalizing changes column's heads probability to three tenths. This illustrates one map evaluation, not a convergence guarantee.

## Maths

## 06.01 · Why a direct best-response map is awkward

In matching pennies, player 1's best response to $q=s_2(H)$ is
$$
\operatorname{BR}_1(q)=\begin{cases}
\{T\},&q<1/2,\\
S_1,&q=1/2,\\
\{H\},&q>1/2.
\end{cases}
$$
Any single-valued exact best-response selection must jump at $q=1/2$. Instead use the continuous function $x\mapsto\max(0,x)$.

## 06.02 · Positive deviation gains

For $i\in N$ and $a_i\in A_i$, define
$$
\varphi_{i,a_i}(s)=\max\{0,u_i(a_i,s_{-i})-u_i(s)\},
\qquad\Phi_i(s)=\sum_{a_i\in A_i}\varphi_{i,a_i}(s).
$$
Each $\varphi_{i,a_i}$ is continuous and nonnegative. By lesson 1,
$$
s\text{ is Nash}\iff\forall i,a_i:\varphi_{i,a_i}(s)=0.
$$

## 06.03 · Add gains and normalize

Define $F(s)$ coordinatewise by
$$
F_i(s)(a_i)=\frac{s_i(a_i)+\varphi_{i,a_i}(s)}{1+\Phi_i(s)}.
$$
The exact change is
$$
F_i(s)(a_i)-s_i(a_i)
=\frac{\varphi_{i,a_i}(s)-s_i(a_i)\Phi_i(s)}{1+\Phi_i(s)}.
$$
Thus probability increases iff $\varphi_{i,a_i}(s)>s_i(a_i)\Phi_i(s)$. In particular, if $s_i(a_i)=0$ and $\varphi_{i,a_i}(s)>0$, then $F_i(s)(a_i)>0$.

## 06.04 · Check the hypotheses of Brouwer

For every $i,a_i$,
$$
F_i(s)(a_i)\ge0,\qquad1+\Phi_i(s)\ge1,
$$
$$
\sum_{a_i}F_i(s)(a_i)
=\frac{\sum_{a_i}s_i(a_i)+\sum_{a_i}\varphi_{i,a_i}(s)}{1+\Phi_i(s)}=1.
$$
Hence $F:S\to S$ is continuous. Lesson 5 implies
$$
\exists s^*\in S:\ F(s^*)=s^*.
$$
It remains to prove this $s^*$ is Nash.

## 06.05 · A numerical update

At $p=1$, $q=3/4$,
$$
u_1(s)=1/2,\quad u_1(H,s_2)=1/2,\quad u_1(T,s_2)=-1/2,
$$
so $\varphi_{1,H}=\varphi_{1,T}=0$ and $p'=1$.
$$
u_2(s)=-1/2,\quad u_2(s_1,H)=-1,\quad u_2(s_1,T)=1,
$$
$$
\varphi_{2,H}=0,\qquad\varphi_{2,T}=3/2,\qquad
q'=\frac{3/4}{1+3/2}=\frac3{10}.
$$
The tails probability is $(1/4+3/2)/(5/2)=7/10$.

---

# Fixed points are Nash equilibria

*Proof of Nash equilibrium · sIIr recall*

Finish the existence proof and separate existence from uniqueness and convergence.

## Explanation

## 07.01 · Every equilibrium is fixed

At a Nash equilibrium, no pure deviation improves any player's expected payoff. Every positive gain is therefore zero.

Nash's map then adds nothing and divides by one, so it leaves every coordinate unchanged. The harder direction is showing that normalization cannot hide profitable deviations at a fixed point.

## 07.02 · Find a supported action with no positive gain

Fix a player. Their current payoff is the weighted average of their pure-action payoffs, using their own probabilities as weights. At least one action with positive weight must do no better than this average. Otherwise every term receiving positive weight would exceed the average, which is impossible.

Choose such an action. It has positive probability but zero positive gain. This combination is what makes the fixed-point equation informative.

## 07.03 · A fixed point forces every gain to vanish

Now suppose the profile is fixed. For the chosen action, its output probability equals its positive input probability divided by the normalization factor, because its added gain is zero.

Equality of input and output forces the normalization factor to be one. The total positive gain is therefore zero. As every gain is nonnegative, each individual gain is zero, including gains from actions outside the support. Repeat for each player to obtain the Nash condition.

## 07.04 · The complete theorem

Every finite game with nonempty action sets has at least one mixed-strategy Nash equilibrium.

Sperner guarantees completely labeled cells. Refinement, compactness, and continuity turn them into a Brouwer fixed point on a simplex. A homeomorphism transfers that result to the product of probability simplexes. Nash's map is a continuous self-map of this product, and its fixed points are exactly the game's equilibria. Each link is now proved.

## 07.05 · What existence does and does not give

The theorem establishes that an equilibrium exists, possibly involving randomization. It does not say that it is unique, socially desirable, or reached by repeatedly applying Nash's map.

The proof works for arbitrary finite payoff tables, with no zero-sum assumption. Finiteness ensures finite-dimensional compact strategy spaces and continuous expected payoffs. Games with infinitely many actions require additional hypotheses and a separate theorem.

## 07.06 · Exercise and result

Why must the zero-gain action used in the proof belong to the support? If its probability were zero, the fixed-point equation would say only that zero equals zero. It would impose no restriction on the normalization factor.

Why must we rule out gains for unsupported actions too? A profitable pure deviation could select an action currently assigned zero probability. Showing only indifference within the support is insufficient. The zero-total-gain argument rules out every such deviation.

## Maths

## 07.01 · Every equilibrium is fixed

If $s$ is Nash, then
$$
\forall i,a_i:\ \varphi_{i,a_i}(s)=0,\qquad\Phi_i(s)=0.
$$
Consequently
$$
F_i(s)(a_i)=\frac{s_i(a_i)}1=s_i(a_i),\qquad F(s)=s.
$$

## 07.02 · Find a supported action with no positive gain

For each player $i$,
$$
u_i(s)=\sum_{a_i\in\operatorname{supp}(s_i)}s_i(a_i)u_i(a_i,s_{-i}).
$$
If every supported action had $u_i(a_i,s_{-i})>u_i(s)$, then
$$
u_i(s)>\sum_{a_i\in\operatorname{supp}(s_i)}s_i(a_i)u_i(s)=u_i(s),
$$
a contradiction. Hence there exists $a_i^\circ$ with
$$
s_i(a_i^\circ)>0,\quad u_i(a_i^\circ,s_{-i})\le u_i(s),\quad
\varphi_{i,a_i^\circ}(s)=0.
$$

## 07.03 · A fixed point forces every gain to vanish

At a fixed point, for the action from the preceding section,
$$
s_i(a_i^\circ)=F_i(s)(a_i^\circ)
=\frac{s_i(a_i^\circ)}{1+\Phi_i(s)}.
$$
Since $s_i(a_i^\circ)>0$, division gives
$$
1+\Phi_i(s)=1,\qquad\Phi_i(s)=0.
$$
Because $\varphi_{i,a_i}(s)\ge0$ and their sum is zero,
$$
\forall a_i:\varphi_{i,a_i}(s)=0
\implies u_i(a_i,s_{-i})\le u_i(s).
$$
This holds for every $i$, so $s$ is Nash. In particular,
$$
\operatorname{Fix}(F)=\{\text{Nash equilibria of the game}\}.
$$

## 07.04 · The complete theorem

$$
\text{Sperner}\ \Longrightarrow\
\text{Brouwer on }\Delta_m\ \Longrightarrow\
\text{Brouwer on }S.
$$
For the map from lesson 6,
$$
F:S\to S\text{ continuous}\quad\Longrightarrow\quad
\operatorname{Fix}(F)\ne\varnothing.
$$
Using the fixed-point equivalence,
$$
\exists s^*\in S\quad\forall i\quad\forall t_i\in S_i:\
u_i(s^*)\ge u_i(t_i,s^*_{-i}).
$$

## 07.05 · What existence does and does not give

Existence says
$$
\{s\in S:s\text{ is Nash}\}\ne\varnothing.
$$
It does not imply either
$$
\#\{s\in S:s\text{ is Nash}\}=1
$$
or convergence of $s^{k+1}=F(s^k)$ from an arbitrary initial profile. For example, if all payoffs are identically zero, then $\varphi\equiv0$, $F(s)=s$ for all $s$, and every mixed profile is an equilibrium.

## 07.06 · Exercise and result

For a zero-gain action $a_i$, the fixed-point equation is
$$
s_i(a_i)\Phi_i(s)=0.
$$
If $s_i(a_i)=0$, this holds for any $\Phi_i(s)$. If $s_i(a_i)>0$, it forces $\Phi_i(s)=0$.

For an explicit failed support-only test, consider a one-player game with
$$
u(H)=0,\quad u(T)=1,\quad s(H)=1.
$$
All supported actions tie, yet deviating to $T$ is profitable. Here $\varphi_H=0$, $\varphi_T=1$, and
$$
F(s)(H)=F(s)(T)=1/2\ne s.
$$
