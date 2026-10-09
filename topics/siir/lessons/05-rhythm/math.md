---
lesson_id: siir-rhythm
summary: Tempo candidates and the causal PLP tracker implemented in sIIr.
---

# From spectral change to a beat pulse

## 05.01 · Periodicity suggests tempo

For nonnegative flux $\Delta_m$ and lag $\ell$,

$$
R[\ell]=\frac{\sum_{m=0}^{M-\ell-1}\Delta_m\Delta_{m+\ell}}{\sum_{m=0}^{M-1}\Delta_m^2}.
$$

The conversion from lag to tempo is

$$
\operatorname{BPM}(\ell)=\frac{60f_s}{H\ell}.
$$

The denominator uses total activation energy rather than a lag-dependent normalization. Negligible energy yields no tempo candidates.

## 05.02 · Past onsets vote for a pulse

Let $\delta$ be the activation-frame period and $h=\max(2,\operatorname{round}(T_k/(2\delta)))$. For lag $j=0,\ldots,h$,

$$
w_j=\frac12+\frac12\cos(\pi j/h).
$$

For tempo $b$ on the grid, the implementation computes

$$
z_b=\sum_{j=0}^h\Delta_{n-j}w_j e^{i2\pi(b/60)\delta j}.
$$

It chooses $b_*=\arg\max_b|z_b|^2$ and $\phi=\arg z_{b_*}$, then adds the centered kernel

$$
\kappa_n[j]=\frac{w_{|j|}}{h}\cos\!\left(2\pi\frac{b_*}{60}\delta j+\phi\right),\quad -h\le j\le h.
$$

The pulse buffer shifts one step before each new contribution.

## 05.03 · Beat decisions and timing limits

For lookahead $L_a$, the decision index is

$$
d=\operatorname{clamp}\!\left(\operatorname{round}(h+L_a/\delta),1,2h-1\right).
$$

If $\Gamma$ is the overlap-added pulse, stability is $s=\operatorname{clamp}(\Gamma[d],0,1)$. A local maximum must satisfy

$$
\Gamma[d]>\Gamma[d-1],\qquad \Gamma[d]\ge\Gamma[d+1].
$$

The elapsed-time conditions are

$$
t\ge\min(T_k/2,2),\qquad t-t_{\mathrm{last}}>\frac{24}{\max(1,b_*)}.
$$

The refractory duration is 40% of the selected beat period. These conditions describe the current code, not a universal beat-tracking definition.
