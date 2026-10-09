# Shared notation and conventions

These conventions apply to both panes of all twelve lessons. Each lesson's math pane states its local assumptions; this guide resolves symbols reused across lessons.

| Symbol | Meaning |
|---|---|
| $\mathbb F_2$ | Binary field; addition and multiplication modulo two |
| $n,k,d$ | Data-qubit count, logical-qubit count, quantum code distance |
| $\mathcal H_L,\mathcal H_P$ | Logical and physical Hilbert spaces |
| $V$ | Encoding isometry; $V^\dagger V=I_L$ |
| $\mathcal C$ | Code subspace, $\operatorname{im}V$ |
| $P$ | Code projector $VV^\dagger$ |
| $P_s$ | Projector onto syndrome sector $s$ |
| $\rho$ | Density operator |
| $\mathcal N,\mathcal R$ | Noise channel and recovery channel |
| CPTP | Completely positive and trace preserving |
| $E,F$ | Physical error operators; $F$ also denotes a frame or a fault set where explicitly declared |
| $C$ | Pauli correction; distinct from the code space $\mathcal C$ |
| $CE$ | Residual, with the error acting first and correction second |
| $\mathcal P_n$ | Pauli group including phases $\{1,i,-1,-i\}$ |
| $\mathcal S$ | Actual stabilizer group, with $-I\notin\mathcal S$ |
| $\widetilde{\mathcal S}$ | Stabilizers times arbitrary Pauli global phases |
| $N(\mathcal S)$ | Normalizer within the Pauli group; equal to its Pauli centralizer here |
| $W$ | Binary subspace representing stabilizers after discarding phase |
| $W^\perp$ | Symplectic orthogonal complement, not the ordinary Euclidean complement |
| $e=(\mathbf x;\mathbf z)$ | Binary column representing $X^{\mathbf x}Z^{\mathbf z}$ up to phase |
| $J$ | Symplectic matrix $\begin{pmatrix}0&I\\I&0\end{pmatrix}$ |
| $H$ | General stabilizer check matrix with rows $(\mathbf a_i^T,\mathbf b_i^T)$; a Hadamard gate in lesson 12 |
| $H_X,H_Z$ | CSS check-support matrices |
| $s_X,s_Z$ | Outcomes of X checks and Z checks, respectively: $s_X=H_X\mathbf z$, $s_Z=H_Z\mathbf x$ |
| $\bar X,\bar Z$ | Physical representatives of logical Paulis |
| $\lambda_X,\lambda_Z$ | Logical Pauli components of a syndrome-free residual |
| $C_j(K,R)$ | Relative chain group over $\mathbb F_2$; unrelated to the correction operator $C$ |
| $\partial_1,\partial_2$ | Edge-to-vertex and face-to-edge boundary maps |
| $\operatorname{im}\partial_2$ | Z stabilizer boundaries in the surface-code chain model |
| $e,c,r$ in lesson 8 | Z-error chain, Z-correction chain, residual chain; not full two-component Pauli vectors |
| $u$ | Binary vector of modeled fault mechanisms |
| $B_{\rm det}$ | Fault-to-detector incidence matrix |
| $L_{\rm obs}$ | Fault-to-logical-observable-flip map |
| $m_{a,t},d_{a,t}$ | Recorded check bit and detection-event bit |
| $T$ | Number of rounds in memory experiments; the $\pi/8$ gate in lesson 12 |
| $P_L,p$ | Logical failure probability and declared physical noise parameter |

## Phase and operator conventions

- Operators act on kets from right to left.
- $E\sim F$ means equality up to a nonzero unit-modulus global phase where used for Paulis or normalized state rays. In the magic-state branch formula, the explicit norm factor is retained.
- The mathematical stabilizer group has meaningful signs. Do not discard its signs before constructing its code projector.
- Binary error addition ignores global phase. It remains valid for syndromes, commutation, and logical-class tests.
- $W^\perp/W$ denotes phase-free logical Pauli classes. Their commutation information is retained by the induced symplectic pairing.
- Syndrome bit zero means check eigenvalue $+1$; one means $-1$.
- A probability model over Pauli errors is explicitly assumed in the decoding lessons. A general coherent channel need not have such an interpretation.

## Geometry convention

The main surface-code construction is unrotated: data on edges, X checks at vertices, Z checks on faces. Rough boundaries absorb Z-chain endpoints. Smooth boundaries absorb dual X-chain endpoints. The relative chain complex is taken with respect to the rough boundary arcs. The rotated square family is separately identified in lesson 7; it is not obtained by reusing the unrotated coordinate supports without change.

## Noise and time conventions

Depolarizing parameter $p$ means total nonidentity Pauli probability, with each of X, Y, Z occurring with probability $p/3$. It does not mean the coefficient of replacing a qubit by the maximally mixed state. Measurements use bit outcomes unless signs are explicitly stated. Every experiment must specify initialization, final readout, and whether a failure probability is per round or per full experiment.
