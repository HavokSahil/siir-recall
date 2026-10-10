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
