---
lesson_id: music-signal
summary: "From sampled audio to time-frequency distributions, moments and timbral measurements."
updated_at: 2026-10-02T12:30:00Z
---

# Signal processing & low-level descriptor mathematics

## Signal model and prerequisites
A mono recording is $x[n]$, $n=0,\ldots,L-1$, sampled at $f_s$ Hz; stereo is $(x_L[n],x_R[n])$. Physical time is $n/f_s$. Sampling requires attention to aliasing; resampling uses an anti-alias filter. Digital amplitude is not physical sound-pressure level without calibration.

Convolution gives linear filtering: $y[n]=\sum_m h[m]x[n-m]$. Windows reduce spectral leakage but alter effective resolution. Study sampling, quantization, convolution, filtering, frequency response and normalization before treating descriptors as comparable numbers.

Stereo downmixing can cancel out-of-phase material. Offer a documented channel policy and retain the original audio. Keep an unnormalized signal for amplitude descriptors and separately record any normalization used for other analyses.

## Fourier analysis and STFT
The $N$-point DFT is
$$X[k]=\sum_{n=0}^{N-1}x[n]e^{-i2\pi kn/N}.$$
For frame $m$, hop $H$, and window $w$:
$$X_{m,k}=\sum_{n=0}^{N-1}x[mH+n]w[n]e^{-i2\pi kn/N}.$$
Frequency bins are $f_k=kf_s/N$ and frame timestamps must specify whether they refer to window starts or centers. Nominal bin spacing is $f_s/N$; actual resolving power also depends on the window. Zero-padding interpolates the spectrum rather than adding resolving power.

Use a one-sided spectrum for real audio and document whether interior-bin power is doubled. Increasing window length improves frequency discrimination while smearing short events. Display this tradeoff with selectable settings.

Extensions: constant-Q transforms use approximately logarithmic frequency bins; wavelets vary temporal scale with frequency. Neither is required for the first version.

## Amplitude and time-domain statistics
For a frame of $N$ samples:
$$\operatorname{RMS}=\sqrt{\frac1N\sum_n x[n]^2},\qquad A_{\max}=\max_n|x[n]|.$$
RMS is amplitude, while RMS squared measures mean-square energy. Crest factor is $A_{\max}/(\operatorname{RMS}+\epsilon)$. Digital level can be expressed as $20\log_{10}(\operatorname{RMS}+\epsilon)$ with a stated reference.

Zero-crossing rate is
$$Z=\frac{1}{2(N-1)}\sum_{n=1}^{N-1}|\operatorname{sgn}x[n]-\operatorname{sgn}x[n-1]|.$$
Specify zero handling and optional noise thresholds. Dynamic range must state its definition—such as a difference of level quantiles—rather than mix peak-to-average, loudness range and amplitude range.

## A spectrum as a distribution
With power $P_{m,k}=|X_{m,k}|^2$, define
$$p_m(k)=\frac{P_{m,k}}{\sum_jP_{m,j}}.$$
This is a distribution over frequency bins, not a probability of a note being played. Below a silence threshold, mark descriptors undefined instead of generating arbitrary normalized values.

The centroid and variance are
$$\mu_m=\sum_k f_kp_m(k),\qquad \sigma_m^2=\sum_k(f_k-\mu_m)^2p_m(k).$$
Spread is $\sigma_m$. Standardized skewness and kurtosis are $\sum_kp_m(k)((f_k-\mu_m)/\sigma_m)^3$ and the corresponding fourth power, when $\sigma_m>0$. Distinguish kurtosis from excess kurtosis.

Many libraries define centroid using magnitude rather than power. Both are valid conventions; comparisons must use the same convention.

## Entropy, flatness, rolloff and flux
Spectral entropy is
$$H_m=-\sum_kp_m(k)\log p_m(k).$$
Normalized entropy is $H_m/\log K$ for $K$ included bins. Its value depends on binning and frequency range; it is not automatically musical complexity.

Flatness compares geometric and arithmetic means:
$$\mathrm{SF}_m=\frac{\exp(K^{-1}\sum_k\log(P_{m,k}+\epsilon))}{K^{-1}\sum_k(P_{m,k}+\epsilon)}.$$
Rolloff is the smallest frequency below which a chosen fraction $q$ of total power lies. State $q$ explicitly.

One spectral-flux convention is
$$F_m=\sum_k(A_{m,k}-A_{m-1,k})^2,\quad A_{m,k}=|X_{m,k}|.$$
For onset detection, positive differences $\max(0,A_{m,k}-A_{m-1,k})$ are often more useful. Normalized spectra improve gain invariance but remove amplitude information. Store the chosen variant and hop size.

## Visualization and verification
Provide waveform, spectrogram, selected feature curves, and an inspectable frame showing its spectrum and formula. Use synthetic sine waves, mixtures, noise, silence and isolated impulses to verify units, expected changes, undefined cases and timestamp alignment.

[Project flow](#music-overview) · [Musical representations](#music-musical)
