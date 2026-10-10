---
lesson_id: nash-05
pane: math
paired_file: explanation.md
summary: Move the fixed-point theorem from a simplex to a product of simplexes.
---

# 05 · Brouwer on mixed-strategy spaces

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
