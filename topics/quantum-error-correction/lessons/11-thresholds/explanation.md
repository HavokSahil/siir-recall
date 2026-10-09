---
lesson_id: qec-11
pane: explanation
paired_file: math.md
---

# 11 · Thresholds and scaling protection

## 11.01 · Specify the logical failure event

Choose what counts as failure before collecting data. You might count residual logical X, residual logical Z, either component, or disagreement of one final observable.

These quantities are related but different. A logical Y contributes to both component events and only once to the either-component event. Reading logical Z detects the X component of a residual, while a pure Z residual can remain invisible to that readout.

For a full quantum-memory claim, preserving one prepared logical eigenstate is insufficient. The experiment must test the relevant complementary information or use a simulation criterion that tracks the full logical class.

## 11.02 · A threshold for a specified scaling experiment

A threshold belongs to a code family, noise model, decoder, and protocol. The definition here asks whether the logical failure probability tends to zero as distance grows under a specified rule for experiment duration.

The time rule is essential. Increasing distance while allowing arbitrarily long storage can change the conclusion. Exponential suppression with distance can overcome polynomial growth in storage duration, as the displayed bound illustrates.

This definition states an asymptotic property. It is not a universal numerical constant attached to the words “surface code.”

## 11.03 · Finite-size crossings

Curves for several distances often cross near a threshold because the leading scaling variable vanishes there. Finite-size corrections shift those crossings.

The scaling equation is an ansatz to justify and fit for a particular model, not a theorem for every decoder or noise process. Consistent protocol aspect ratios matter, especially the relationship between time and spatial distance.

A crossing between two small patches is useful evidence, but it does not by itself give a precise asymptotic threshold. Check sensitivity to the distances included, model assumptions, and statistical uncertainty.

## 11.04 · Low-noise behavior

At low noise, the smallest failing fault patterns dominate. If a decoder corrects every pattern up to the guaranteed radius and fails on some patterns one fault larger, that next weight sets the leading power of the error probability.

The familiar distance-based power law expresses this intuition, but its prefactor, duration dependence, and useful range depend on the experiment. Circuit fault weight can differ from data-error weight, and correlations can alter the expansion.

Use the heuristic to interpret measured behavior, not to manufacture a threshold estimate without simulations or a justified model.

## 11.05 · Sampling and uncertainty

Count failures over independent repetitions of the same experiment. The estimate is the observed fraction, and the uncertainty is binomial.

A Wilson interval gives a practical approximate two-sided interval. For zero observed failures, the separate exact one-sided formula gives an upper confidence bound. These are different interval conventions and should be labeled accordingly.

Zero observed failures means the experiment has not resolved a nonzero rate, not that the true rate is zero. Rare-event estimates need enough samples to make their uncertainty meaningful; reusing correlated trials would invalidate the simple binomial model.

## 11.06 · Per-round and per-experiment quantities

A final parity error counts an odd number of logical flips. The event “at least one logical flip occurred” also counts even numbers of flips, so these probabilities differ.

Dividing a per-experiment failure fraction by the number of rounds is only a low-error approximation under suitable assumptions. Actual decoder outputs can be temporally correlated and need not follow either independent-round model exactly.

Record the circuit, duration, noise convention, decoder, random seeds, shot counts, failure definition, and uncertainty method. Those details determine what a plotted number means and whether another experiment can reproduce it.

## 11.07 · Exercise and result

Comparing distance three for three rounds with distance five for one hundred rounds confounds spatial protection with exposure time. Even equal per-round logical error probabilities would give very different per-experiment failure fractions.

Use a common duration, a justified common rate model, or a declared scaling rule such as a fixed time-to-distance ratio. If the goal is threshold scaling, state that rule and interpret the curves within it.
