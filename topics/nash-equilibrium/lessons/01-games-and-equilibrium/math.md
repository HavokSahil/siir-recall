---
lesson_id: nash-01
pane: math
paired_file: explanation.md
summary: The objects in the theorem and why checking pure deviations is enough.
---

# 01 · Games, randomization, and equilibrium

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
