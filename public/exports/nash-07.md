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
