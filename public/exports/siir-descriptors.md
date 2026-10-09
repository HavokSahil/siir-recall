# What the sound descriptors measure

*sIIr Music Observatory · sIIr recall*

Level, spectral shape, and change—with the exact weighting and silence conventions.

## Explanation

## 02.01 · Level and spectral balance

RMS measures amplitude without cancellation between positive and negative samples. sIIr computes it on the unwindowed frame. It is neither sound-pressure level nor a complete model of perceived loudness.

Centroid measures the spectrum’s balance point and spread measures its width around that point. Both use magnitude weights, including the DC bin. A bright sound often has a high centroid, but the interpretation depends on the recording and listening context.

A useful experiment is to multiply the same floating-point recording by a nonzero gain: RMS should scale while centroid and spread should stay constant, away from silence thresholds and numerical floors.

## 02.02 · Distribution of spectral power

Entropy describes how evenly power is distributed across bins. Flatness compares the geometric and arithmetic means of power. Roll-off finds the first frequency bin containing 85% of cumulative power.

These descriptors answer different questions. Entropy is not a musical-complexity score, flatness is not a categorical noise detector, and roll-off is a chosen descriptive threshold.

The implementation returns zero for silence-derived spectral descriptors. Those zeros are placeholders, not evidence that silence has a meaningful brightness or spectral distribution.

## 02.03 · Changes and crossings

Spectral flux compares successive normalized magnitude spectra and keeps only positive changes. It often responds to attacks, but silence-to-sound transitions also create peaks. The first frame has zero flux because it has no predecessor.

Zero-crossing rate counts changes between the nonnegative and negative sides of the waveform. It is sensitive to DC offset and noise; it is not a reliable pitch detector by itself.

Flux is normalized spectral change, so its units differ from RMS. Always read the units before comparing descriptor plots.

## Maths

## 02.01 · Level and spectral balance

With raw frame samples $x_m[n]$ and magnitude weights $a_m[k]=A_m[k]/\sum_j A_m[j]$,

$$
\operatorname{RMS}_m=\sqrt{\frac1N\sum_n x_m[n]^2},
$$

$$
c_m=\sum_k f_k a_m[k],\qquad s_m=\sqrt{\sum_k(f_k-c_m)^2a_m[k]}.
$$

For $y[n]=g x[n]$ with $g\ne0$,

$$
\operatorname{RMS}(y)=|g|\operatorname{RMS}(x),\qquad c(y)=c(x).
$$

This prediction assumes no clipping. The in-app experiment operates in floating point without playback clipping.

## 02.02 · Distribution of spectral power

Let $K=N/2+1$ and $p_k=P[k]/\sum_jP[j]$. Normalized entropy is

$$
E=-\frac{\sum_k p_k\ln p_k}{\ln K},\qquad 0\ln0=0.
$$

With $\epsilon=10^{-24}$, flatness is

$$
F=\frac{\exp\!\left(K^{-1}\sum_k\ln\max(P[k],\epsilon)\right)}{K^{-1}\sum_k P[k]}.
$$

The result is clamped to $[0,1]$. Roll-off is

$$
r=f_{k_*},\qquad k_*=\min\left\{k:\sum_{j=0}^kP[j]\ge0.85\sum_jP[j]\right\}.
$$

The code treats $\sum_kP[k]<10^{-24}$ as silent. Floors matter for very quiet signals.

## 02.03 · Changes and crossings

For normalized magnitudes $a_m[k]$,

$$
\operatorname{Flux}_m=\sqrt{\sum_k\max(0,a_m[k]-a_{m-1}[k])^2}.
$$

A spectrum whose magnitude sum is below the normalization threshold uses zero weights. Zero-crossing rate on the raw frame is

$$
Z_m=\frac{1}{N-1}\sum_{n=1}^{N-1}|b_n-b_{n-1}|,
$$

Here $b_n=\mathbf1[x_m[n]\ge0]$. Zero belongs to the nonnegative side. The result is crossings per sample rather than crossings per second.
