---
lesson_id: nash-01
pane: explanation
paired_file: math.md
summary: The objects in the theorem and why checking pure deviations is enough.
---

# 01 · Games, randomization, and equilibrium

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
