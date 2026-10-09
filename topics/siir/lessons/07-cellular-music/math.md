---
lesson_id: siir-cellular
summary: Elementary cellular automata, scale mapping, and WAV synthesis.
---

# Growing music from simple rules

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
