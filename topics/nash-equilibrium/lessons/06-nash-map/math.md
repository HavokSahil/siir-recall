---
lesson_id: nash-06
pane: math
paired_file: explanation.md
summary: Use positive deviation gains to build a continuous self-map of the strategy space.
---

# 06 · Nash's continuous map

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
