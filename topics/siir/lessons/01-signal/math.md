---
lesson_id: siir-signal
summary: The local analysis pipeline, sampling, and the time–frequency trade-off.
---

# From recordings to a frequency map

## 01.01 · Three ways to explore sound

A recording is a discrete sequence $x[n]$ sampled at $f_s$ samples per second:

$$
t_n=\frac{n}{f_s},\qquad T=\frac{L}{f_s}.
$$

Here $L$ is the number of samples. Imported channels are averaged into mono before analysis. For $C$ channels,

$$
x[n]=\frac{1}{C}\sum_{c=1}^{C}x_c[n].
$$

Amplitude is relative to digital full scale, not calibrated sound pressure. Opposite-phase stereo channels can cancel during averaging.

## 01.02 · Frames and the Hann window

For frame $m$, window size $N$, and hop $H$,

$$
w[n]=\frac12-\frac12\cos\!\left(\frac{2\pi n}{N-1}\right),
$$

$$
X_m[k]=\sum_{n=0}^{N-1}x[mH+n]w[n]e^{-2\pi i kn/N}.
$$

At $f_s=22050$, $N=1024$ gives a bin spacing $f_s/N\approx21.53$ Hz and a window duration $N/f_s\approx46.44$ ms. A hop of 512 gives about 23.22 ms between frame starts.

## 01.03 · Reading a spectrogram honestly

Write $A_m[k]=|X_m[k]|$ and $P_m[k]=A_m[k]^2$. Frequency and nominal offline frame time are

$$
f_k=\frac{k f_s}{N},\qquad t_m=\frac{mH+N/2}{f_s}.
$$

Spectrogram color uses

$$
D_m[k]=20\log_{10}\!\left(\max(A_m[k],10^{-12})\right).
$$

The floor keeps silence finite. Unnormalized FFT magnitude depends on the window and transform size, so numerical color values should not be compared as calibrated sound levels.
