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
