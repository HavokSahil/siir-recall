---
lesson_id: siir-fluid
summary: Advection, pressure projection, and audio-driven dye injection.
---

# How sound moves the ink

## 06.01 · Dye is a tracer of motion

The visualizer pours colored dye into a moving velocity field. Audio energy drives injection; low and high frequency-band energy influence the forces. Touch supplies additional motion and dye.

The equations motivate an artistic incompressible-flow approximation. The simulation is not a water-surface model, and the visual patterns do not classify beats or genres.

Velocity and dye are separate fields. The visualizer uses a worker for motion and GPU-assisted dye rendering; the CPU fluid implementation makes the essential numerical operations explicit.

## 06.02 · Trace backward, then project

Semi-Lagrangian advection asks where a grid cell’s contents came from. It traces backward through velocity and interpolates the previous field. This stays usable at interactive step sizes, although interpolation introduces numerical smoothing.

Pressure projection removes part of the velocity divergence. The CPU solver uses twelve pressure iterations and enforces zero normal velocity at the outer boundaries.

Finite iteration count, grid resolution, and boundary treatment all affect the result. A smooth-looking animation is not proof of an accurately resolved physical flow.

## 06.03 · Energy, persistence, and presentation

Sensitivity controls how strongly the audio injects motion and color; persistence controls how long the dye remains visible. Audio controls are eased rather than applied as abrupt jumps.

The CPU solver multiplies dye by a decay factor per simulation step. Its default decay is therefore sensitive to step frequency. Brightness controls presentation and does not change the audio measurement.

Distinguish a change in the sound from a change in the rendering settings before interpreting a more intense visual pattern.
