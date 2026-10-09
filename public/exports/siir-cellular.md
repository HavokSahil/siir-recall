# Growing music from simple rules

*sIIr Music Observatory · sIIr recall*

Elementary cellular automata, scale mapping, and WAV synthesis.

## Explanation

## 07.01 · A row of cells becomes a score

The generator evolves a row of binary cells using an elementary cellular-automaton rule. Each next cell depends on its left neighbor, itself, and its right neighbor. The row wraps around, so its ends are neighbors.

A rule number selects an output for each of the eight possible neighborhoods. The same seed and settings produce the same score; complex-looking patterns do not require random choices.

Each generation is an eighth-note step. Changing BPM changes the time between generations rather than the cellular rule itself.

## 07.02 · Newly active cells trigger scale notes

Only newly activated cells trigger notes. A cell that stays active does not retrigger. On the first step, every active seed cell counts as newly activated.

Pairs of adjacent cell positions map to one scale degree. The available scales are minor pentatonic, major pentatonic, and Dorian; scale degrees continue upward through octaves from the chosen MIDI root.

Duplicate pitches are removed. At most four pitches play per step, with selection rotated through the candidates to avoid always favoring the low register. This mapping is a compositional choice rather than a unique musical interpretation of the automaton.

## 07.03 · Rendering a playable WAV

The renderer synthesizes each selected note with a fundamental and a weaker second harmonic. Short attack and release envelopes soften discontinuities. Notes last one generation step and decay within that step.

The result is mono, 22,050 Hz, 16-bit PCM in a WAV container. The four-voice limit and bounded per-voice gain constrain the mix before final sample encoding.

This is a transparent synthesized instrument. The cellular evolution determines the note events; the oscillator and envelope determine how those events sound.

## Maths

## 07.01 · A row of cells becomes a score

For binary cell $a_i^t$ in a row of length $W$, define the neighborhood code

$$
u_i^t=4a_{i-1}^t+2a_i^t+a_{i+1}^t,
$$

with indices taken modulo $W$. For rule $r\in\{0,\ldots,255\}$,

$$
a_i^{t+1}=\left(\left\lfloor\frac{r}{2^{u_i^t}}\right\rfloor\bmod2\right).
$$

At tempo $b>0$, the step duration is $\Delta t=30/b$ seconds. The default generator uses rule 30, 64 steps, and 110 BPM.

## 07.02 · Newly active cells trigger scale notes

A trigger occurs when $a_i^t=1$ and $a_i^{t-1}=0$. Let $d_i=\lfloor i/2\rfloor$, root $r_0$, and scale intervals $s_0,\ldots,s_{K-1}$. Then

$$
\operatorname{MIDI}(i)=r_0+s_{d_i\bmod K}+12\left\lfloor\frac{d_i}{K}\right\rfloor.
$$

Minor pentatonic uses $(0,3,5,7,10)$, major pentatonic $(0,2,4,7,9)$, and Dorian $(0,2,3,5,7,9,10)$.

For $J$ unique candidates at step $t$, the selection uses indices $(t+j)\bmod J$ for $j=0,\ldots,\min(4,J)-1$.

## 07.03 · Rendering a playable WAV

MIDI pitch $p$ maps to frequency

$$
f(p)=440\,2^{(p-69)/12}.
$$

For local note time $\tau$ and normalized progress $v$ within a step, the envelope is

$$
e(\tau,v)=\min(1,\tau/0.008)\,\min(1,(1-v)\Delta t/0.035)\,e^{-2.2v}.
$$

One voice contributes

$$
x_p(\tau)=\frac{0.13\,e(\tau,v)}{1.25}\left[\sin(2\pi f(p)\tau)+0.25\sin(4\pi f(p)\tau)\right].
$$

The renderer sums voices, clamps to $[-1,1]$, and encodes signed 16-bit samples. Rounding sample counts introduces small timing quantization.
