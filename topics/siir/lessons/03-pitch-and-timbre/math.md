---
lesson_id: siir-pitch
summary: FFT chroma, native ECQT, and the five MFCC coefficients.
---

# Pitch classes and timbre coordinates

## 03.01 · Folding octaves into chroma

For eligible positive-frequency bins,

$$
q_k=\operatorname{round}\!\left(69+12\log_2\frac{f_k}{440}\right).
$$

The FFT chroma accumulator and normalization are

$$
\widetilde C[c]=\sum_{k:q_k\bmod12=c}A[k],\qquad C[c]=\frac{\widetilde C[c]}{\sum_d\widetilde C[d]}.
$$

A4 is 440 Hz and class zero is C. If the accumulator has negligible total magnitude, the code leaves a zero vector.

## 03.02 · Native constant-Q analysis

At twelve bins per octave, the nominal constant-Q parameters are

$$
Q=\frac1{2^{1/12}-1},\qquad f_k=65.406391\,2^{k/12},
$$

$$
N_k=\left\lceil\frac{Qf_s}{f_k}\right\rceil,\qquad f_s=22050.
$$

A conceptual pitch kernel measures a windowed complex sinusoidal projection at $f_k$; ECQT evaluates sparse FFT-domain kernels. The native configuration uses Hamming windows and sparsification threshold 0.001. Folding magnitudes $|C_k|$ into pitch-class power gives

$$
P[c]=\frac{\sum_{k\bmod12=c}|C_k|^2}{\sum_k|C_k|^2}.
$$

Silence yields zero instead of division by zero.

## 03.03 · MFCCs summarize the spectral envelope

Frequency is mapped to mel by

$$
\operatorname{mel}(f)=2595\log_{10}(1+f/700).
$$

For filter $B_b[k]$, define

$$
E_b=\sum_kP[k]B_b[k],\qquad \ell_b=\ln\max(E_b,10^{-24}).
$$

The retained coefficients are

$$
c_j=\sum_{b=0}^{25}\ell_b\cos\!\left(\frac{\pi j(b+1/2)}{26}\right),\qquad j=0,\ldots,4.
$$

They are spectral-envelope coordinates rather than physical units or genre labels.
