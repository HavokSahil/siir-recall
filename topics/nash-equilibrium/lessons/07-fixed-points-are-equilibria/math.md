---
lesson_id: nash-07
pane: math
paired_file: explanation.md
summary: Finish the existence proof and separate existence from uniqueness and convergence.
---

# 07 · Fixed points are Nash equilibria

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
