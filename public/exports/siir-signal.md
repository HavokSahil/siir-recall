# From recordings to a frequency map

*sIIr Music Observatory · sIIr recall*

The local analysis pipeline, sampling, and the time–frequency trade-off.

## Explanation

## 01.01 · Three ways to explore sound

sIIr is a Flutter music observatory with three activities: analyze recordings or microphone input, visualize sound as moving ink, and generate music with cellular automata. Audio and analysis stay on the device.

The analyzer follows **Signal → Descriptors → Statistics → Structure → Inspector → Experiments**. A shared playback cursor connects the waveform, spectral view, and measurements. The inspector explains the selected frame and its units; the gain experiment checks how measurements respond to a controlled change.

These lessons describe the current Flutter project. They complement the broader Computational Musicology collection with the actual conventions in sIIr.

## 01.02 · Frames and the Hann window

The offline analyzer resamples to 22,050 Hz and processes overlapping frames. The default window contains 1,024 samples and the requested hop is 512 samples. Supported window sizes are 512, 1,024, and 2,048.

A Hann window reduces abrupt frame-edge discontinuities before the Fourier transform. Larger windows separate nearby frequencies more clearly but smear fast changes over a longer interval.

To cap long recordings at about 6,000 descriptor frames, the analyzer can increase the hop. Use the effective settings recorded with an analysis rather than assuming every run has the default time resolution.

## 01.03 · Reading a spectrogram honestly

The spectrogram displays one-sided FFT magnitudes, including DC and Nyquist. Its colors show the logarithm of the frame-transform magnitude, not a calibrated power spectral density.

The offline frame timestamp refers to its center. Short inputs are zero-padded for a first frame, and timestamps are bounded by the recording duration. The spectrum is the frame nearest the cursor; it does not directly identify a fundamental pitch.

Live beat tracking uses trailing frames with timestamps at the end of the audio window instead. Do not confuse these timing conventions when comparing live beats with offline descriptor plots.

## Maths

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
