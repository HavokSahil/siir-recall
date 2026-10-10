---
lesson_id: nash-07
pane: explanation
paired_file: math.md
summary: Finish the existence proof and separate existence from uniqueness and convergence.
---

# 07 · Fixed points are Nash equilibria

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
