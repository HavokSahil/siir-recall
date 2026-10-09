---
lesson_id: siir-signal
summary: The local analysis pipeline, sampling, and the time–frequency trade-off.
---

# From recordings to a frequency map

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
