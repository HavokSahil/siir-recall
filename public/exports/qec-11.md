# Thresholds and scaling protection

*Quantum error correction · sIIr recall*

## Explanation

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

## Maths

## 11.01 · Specify the logical failure event

Fix family $\{\mathcal C_d\}$, noise $\mathcal N_p$, protocol with $T$ rounds, and decoder $\mathcal D$.
$$
(\lambda_X,\lambda_Z)\in\mathbb F_2^2,
$$
$$
P_{L,X}=\Pr(\lambda_X=1),\quad P_{L,Z}=\Pr(\lambda_Z=1),
$$
$$
P_{L,\rm any}=\Pr((\lambda_X,\lambda_Z)\ne(0,0))
=P_{L,X}+P_{L,Z}-\Pr(\lambda_X=\lambda_Z=1).
$$
Logical $\bar Z$ readout detects $\lambda_X$; logical $\bar X$ readout detects $\lambda_Z$.
$$
P_L=P_L(p,d,T;\mathcal N,\mathcal D,\text{protocol},\text{failure event}).
$$

## 11.02 · A threshold for a specified scaling experiment

Fix a time-scaling rule $T=T(d)$ and write $P_L^*(p,d)=P_L(p,d,T(d))$.
$$
p_{\rm th}:=\sup\left\{p_0\in[0,1]:\ \forall p\in[0,p_0),\
\lim_{d\to\infty}P_L^*(p,d)=0\right\}.
$$
A possible below-threshold bound:
$$
P_L^*(p,d)\le A(p)e^{-\alpha(p)d},\qquad \alpha(p)>0.
$$
If $P_L(p,d,T)\le T A(p)e^{-\alpha(p)d}$ and $T(d)=O(d^a)$:
$$
\lim_{d\to\infty}P_L(p,d,T(d))=0.
$$

## 11.03 · Finite-size crossings

Conditional finite-size scaling ansatz, fixed protocol aspect ratios:
$$
P_L^*(p,d)\approx F\bigl((p-p_{\rm th})d^{1/\nu}\bigr)
+d^{-\omega}G\bigl((p-p_{\rm th})d^{1/\nu}\bigr),\quad\nu,\omega>0.
$$
$$
P_L^*(p_{\rm th},d)\approx F(0)+d^{-\omega}G(0).
$$
$$
P_L^*(p,d_1)=P_L^*(p,d_2)
\quad\centernot\Longrightarrow\quad p=p_{\rm th}.
$$

## 11.04 · Low-noise behavior

For a fixed finite stochastic fault model with finitely many locations,
$$
P_L(p)=\sum_{u:\text{failure}}p^{|u|}(1-p)^{M-|u|}
\quad\text{(equal independent binary probabilities)}.
$$
If $w_{\min}$ is the minimum failing fault weight:
$$
P_L(p)=a_{w_{\min}}p^{w_{\min}}+O(p^{w_{\min}+1})\quad(p\to0).
$$
If all errors of weight $\le t$ are corrected and some weight-$t+1$ errors fail:
$$
w_{\min}=t+1,\qquad t=(d-1)/2\quad(d\text{ odd}).
$$
Common heuristic:
$$
P_L\approx A\left(\frac p{p_{\rm th}}\right)^{(d+1)/2}.
$$

## 11.05 · Sampling and uncertainty

Independent identical trials:
$$
F\sim\operatorname{Binomial}(N,P_L),\qquad\hat P_L=f/N,
\qquad\operatorname{Var}(\hat P_L)=P_L(1-P_L)/N.
$$
Wilson interval, normal quantile $z$:
$$
c=\frac{\hat P_L+z^2/(2N)}{1+z^2/N},\qquad
h=\frac{z\sqrt{\hat P_L(1-\hat P_L)/N+z^2/(4N^2)}}{1+z^2/N},
\quad[c-h,c+h].
$$
For $f=0$, exact one-sided confidence $1-\alpha$ upper bound:
$$
(1-P_U)^N=\alpha\implies
P_U=1-\alpha^{1/N}\approx-\log(\alpha)/N.
$$
$$
\alpha=0.05:\quad P_U\approx2.9957/N.
$$

## 11.06 · Per-round and per-experiment quantities

Independent flips of one logical parity, probability $q$ each round:
$$
\Pr(\text{odd number of flips in }T)
=\frac{1-(1-2q)^T}{2}.
$$
$$
\Pr(\text{at least one flip in }T)=1-(1-q)^T.
$$
$$
qT\ll1\implies
\frac{1-(1-2q)^T}{2}\approx Tq,
\qquad 1-(1-q)^T\approx Tq.
$$
Reproducibility record:
$$
(\text{code/circuit},d,T,\text{noise convention},p,\text{decoder/version},
\text{seeds},N,f,\text{failure event},\text{interval method}).
$$

## 11.07 · Exercise and result

$$
q_3=q_5=q,\qquad
P_3=\frac{1-(1-2q)^3}{2},\quad
P_5=\frac{1-(1-2q)^{100}}{2}.
$$
$$
q\ll1/100\implies P_3\approx3q,\quad P_5\approx100q,
\quad P_5/P_3\approx100/3.
$$
