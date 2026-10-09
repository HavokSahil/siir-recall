---
lesson_id: siir-descriptors
summary: Level, spectral shape, and change—with the exact weighting and silence conventions.
---

# What the sound descriptors measure

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
