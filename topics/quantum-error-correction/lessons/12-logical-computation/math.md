---
lesson_id: qec-12
pane: math
paired_file: explanation.md
---

# 12 · Computing while remaining protected

## 12.01 · Logical implementation

Encodings $V_{\rm in},V_{\rm out}$ and ideal logical unitary $U_L$:
$$
U_{\rm phys}V_{\rm in}=V_{\rm out}U_L.
$$
For the same input and output code:
$$
U_{\rm phys}P U_{\rm phys}^\dagger=P,\qquad
V^\dagger U_{\rm phys}V=U_L.
$$
Measurement-based implementation, corrected branch $m$:
$$
F_mK_mV_{\rm in}=a_mV_{\rm out}U_L,\qquad
\sum_m|a_m|^2=1.
$$

## 12.02 · Fault tolerance is an additional condition

Example of a sufficient, explicitly scoped gadget criterion: let $\mathcal E_s$ be allowed input errors and $K_{F,m}$ a branch with a specified fault pattern $F$.
$$
\forall E\in\mathcal E_s,\ \forall F:\ |F|\le r,\quad s+r\le t,
$$
$$
\mathcal D_{\rm out}\circ\mathcal F_m\circ\mathcal K_{F,m}
\circ\mathcal E\circ\mathcal V_{\rm in}
=q_{E,F,m}\mathcal U_L,
$$
$$
\mathcal K_{F,m}(\rho)=K_{F,m}\rho K_{F,m}^\dagger,\quad
\mathcal F_m(\rho)=F_m\rho F_m^\dagger,
\quad q_{E,F,m}\ge0.
$$
Here $\mathcal D_{\rm out}$ is ideal output recovery followed by decoding; admissible fault branches and normalization are part of the specified fault model.

## 12.03 · Logical Paulis and frame updates

$$
\bar XV=VX,\qquad\bar ZV=VZ,\qquad
\bar X\bar Z=-\bar Z\bar X.
$$
$$
V|\psi\rangle=\alpha|0_L\rangle+\beta|1_L\rangle,
$$
$$
\bar XV|\psi\rangle=\alpha|1_L\rangle+\beta|0_L\rangle,
\qquad
\bar ZV|\psi\rangle=\alpha|0_L\rangle-\beta|1_L\rangle.
$$
Intended Pauli $P_L$, frame convention $\rho_{\rm ref}=F\rho_{\rm phys}F^\dagger$:
$$
F_{\rm new}=\bar P_LF
\implies \rho_{\rm ref,new}=\bar P_L\rho_{\rm ref}\bar P_L^\dagger.
$$

## 12.04 · Hadamard and changed geometry

$$
H=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\quad
HXH=Z,\quad HZH=X.
$$
$$
H^{\otimes n}X^{\mathbf a}H^{\otimes n}=Z^{\mathbf a},\quad
H^{\otimes n}Z^{\mathbf b}H^{\otimes n}=X^{\mathbf b}.
$$
$$
(H_X,H_Z)\longmapsto(H_Z,H_X),\qquad
\mathcal C\longmapsto\mathcal C'.
$$
If a specified geometry-restoring operation $G$ exists with the required logical action:
$$
GH^{\otimes n}V=VH_L.
$$
Frame conjugation:
$$
H_LZ_LH_L=X_L,\qquad H_LX_LH_L=Z_L.
$$

## 12.05 · Joint parity and entanglement

$$
M_{ZZ}=\bar Z_A\bar Z_B,\qquad
\Pi_m^{ZZ}=\frac{I+(-1)^mM_{ZZ}}2,\quad m\in\{0,1\}.
$$
$$
p_m=\operatorname{Tr}(\Pi_m^{ZZ}\rho),\qquad
\rho_m=\Pi_m^{ZZ}\rho\Pi_m^{ZZ}/p_m.
$$
For $|+_L\rangle_A|+_L\rangle_B$:
$$
\Pi_0^{ZZ}|+_L,+_L\rangle=(|0_L0_L\rangle+|1_L1_L\rangle)/2,
$$
$$
\Pi_1^{ZZ}|+_L,+_L\rangle=(|0_L1_L\rangle+|1_L0_L\rangle)/2,
\quad p_0=p_1=1/2.
$$
$$
\Pi_m^{XX}=\frac{I+(-1)^m\bar X_A\bar X_B}{2}.
$$

## 12.06 · Entangling gates and Clifford structure

Logical CNOT:
$$
\operatorname{CNOT}_L|a_L,b_L\rangle=|a_L,(a\oplus b)_L\rangle.
$$
$$
\bar X_A\mapsto\bar X_A\bar X_B,\quad\bar Z_A\mapsto\bar Z_A,
\qquad\bar X_B\mapsto\bar X_B,\quad\bar Z_B\mapsto\bar Z_A\bar Z_B.
$$
$$
\mathrm{Cliff}_k=\{U:U\mathcal P_kU^\dagger=\mathcal P_k\},
\qquad H,S,\operatorname{CNOT}\text{ generate Clifford operations (up to phase)}.
$$
$$
S=\operatorname{diag}(1,i),\quad
T=\operatorname{diag}(1,e^{i\pi/4}),\quad
TXT^\dagger=(X+Y)/\sqrt2\notin\mathcal P_1.
$$

## 12.07 · Ideal magic-state injection

All qubits and gates below may be interpreted at the ideal logical level.
$$
|A\rangle=T|+\rangle=(|0\rangle+e^{i\pi/4}|1\rangle)/\sqrt2.
$$
Input $|\psi\rangle_d|A\rangle_a$; apply $\operatorname{CNOT}_{d\to a}$; measure ancilla $Z$ with bit $m$:
$$
K_m={}_a\langle m|\operatorname{CNOT}_{d\to a}|A\rangle_a.
$$
$$
K_0=\frac{T}{\sqrt2},\qquad
K_1=\frac{e^{i\pi/4}T^\dagger}{\sqrt2},\qquad
SK_1=\frac{e^{i\pi/4}T}{\sqrt2}.
$$
$$
F_0=I,\quad F_1=S,\qquad
F_mK_m|\psi\rangle\sim\frac{T|\psi\rangle}{\sqrt2}.
$$

## 12.08 · Exercise and result

$$
\begin{aligned}
\text{Code preservation: }&U_{\rm phys}PU_{\rm phys}^\dagger=P.\\
\text{Specified logical action: }&U_{\rm phys}V=VU_L.\\
\text{Fault tolerance: }&\text{specified allowed faults remain correctable through the gadget.}
\end{aligned}
$$
$$
\bar ZP\bar Z^\dagger=P,
\qquad\bar ZV=VZ\ne VI_L.
$$
