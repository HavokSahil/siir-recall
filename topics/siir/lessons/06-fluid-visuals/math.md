---
lesson_id: siir-fluid
summary: Advection, pressure projection, and audio-driven dye injection.
---

# How sound moves the ink

## 06.01 · Dye is a tracer of motion

Write velocity as $\mathbf u$, pressure as $p$, forcing as $\mathbf f$, and a dye channel as $d$. The model is

$$
\partial_t\mathbf u+(\mathbf u\cdot\nabla)\mathbf u=-\nabla p+\mathbf f,\qquad \nabla\cdot\mathbf u=0,
$$

$$
\partial_t d+\mathbf u\cdot\nabla d=-\lambda d+s.
$$

Here $s$ injects dye and $\lambda$ controls fading. These are model equations; the app uses bounded grids and approximate numerical steps rather than an exact solution.

## 06.02 · Trace backward, then project

For a field $q$, a backward trace gives

$$
q^{\mathrm{adv}}(\mathbf x)\approx q^n\!\left(\mathbf x-\Delta t\,\mathbf u^n(\mathbf x)\right).
$$

Bilinear interpolation samples off-grid locations. Projection is conceptually

$$
\nabla^2p=\nabla\cdot\mathbf u^*,\qquad \mathbf u^{n+1}=\mathbf u^*-\nabla p.
$$

The CPU code uses grid-scaled centered differences and a twelve-sweep pressure relaxation. It clamps $\Delta t$ to $[0,0.04]$ seconds and applies velocity drag $e^{-1.1\Delta t}$.

## 06.03 · Energy, persistence, and presentation

A simple energy-control mapping shown in the app’s maths panel is

$$
E=\operatorname{clamp}(g\operatorname{RMS},0,1).
$$

For per-step decay $\rho$, dye evolves approximately as

$$
d^{n+1}=\rho\,d^{\mathrm{adv}}.
$$

At fixed step duration, its equivalent continuous rate is $\lambda=-\ln(\rho)/\Delta t$. The CPU pixel mapping compresses nonnegative dye concentration with

$$
I=255(1-e^{-d}).
$$

This maps concentration to display intensity; it is not a loudness scale.
