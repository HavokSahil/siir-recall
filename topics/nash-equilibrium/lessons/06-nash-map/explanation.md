---
lesson_id: nash-06
pane: explanation
paired_file: math.md
summary: Use positive deviation gains to build a continuous self-map of the strategy space.
---

# 06 · Nash's continuous map

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
