---
lesson_id: qec-05
pane: math
paired_file: explanation.md
---

# 05 · Equivalent errors and ambiguous evidence

## 05.01 · Stabilizers and the normalizer

$$
N_{\mathcal P_n}(\mathcal S)=\{E\in\mathcal P_n:E\mathcal SE^\dagger=\mathcal S\},
$$
$$
C_{\mathcal P_n}(\mathcal S)=\{E\in\mathcal P_n:[E,g]=0\ \forall g\in\mathcal S\}.
$$
For a stabilizer group with $-I\notin\mathcal S$:
$$
N_{\mathcal P_n}(\mathcal S)=C_{\mathcal P_n}(\mathcal S)=:N(\mathcal S).
$$
$$
E\in N(\mathcal S)\iff s(E)=0\iff E\mathcal C=\mathcal C.
$$
Phase closure: $\widetilde{\mathcal S}=\{i^qg:q\in\mathbb Z_4,g\in\mathcal S\}$.

## 05.02 · Two equivalence relations

For $E,F\in\mathcal P_n$:
$$
E\equiv_{\mathcal C}F
\iff \exists\theta:\ FV=e^{i\theta}EV
\iff E^\dagger F\in\widetilde{\mathcal S}.
$$
$$
s(E)=s(F)\iff E^\dagger F\in N(\mathcal S).
$$
$$
E\equiv_{\mathcal C}F\implies s(E)=s(F),
\qquad s(E)=s(F)\centernot\implies E\equiv_{\mathcal C}F.
$$
Binary form, with $W\subseteq\mathbb F_2^{2n}$ the stabilizer subspace:
$$
W^\perp=\{e:e^TJw=0\ \forall w\in W\},\qquad W\subseteq W^\perp,
$$
$$
E(e)\equiv_{\mathcal C}E(f)\iff e+f\in W,\qquad
s(e)=s(f)\iff e+f\in W^\perp.
$$

## 05.03 · Logical Pauli classes

$$
\dim W=n-k,\quad\dim W^\perp=n+k,
\quad\dim(W^\perp/W)=2k.
$$
$$
\text{Logical Paulis modulo phase}\ \cong\ W^\perp/W,
\qquad |W^\perp/W|=2^{2k}=4^k.
$$
Representatives $\bar x_i,\bar z_i\in W^\perp$:
$$
\bar x_i^TJ\bar x_j=0,\quad
\bar z_i^TJ\bar z_j=0,\quad
\bar x_i^TJ\bar z_j=\delta_{ij}.
$$
$$
\bar X_i\bar Z_j=(-1)^{\delta_{ij}}\bar Z_j\bar X_i.
$$

## 05.04 · Correction and the residual

$$
R:=CE,\qquad r=c+e\in\mathbb F_2^{2n},\qquad s(R)=s(C)+s(E).
$$
$$
\begin{array}{c|c|c}
\text{Condition}&\text{Binary condition}&\text{Outcome}\\\hline
R\in\widetilde{\mathcal S}&r\in W&\text{success for all code states}\\
R\in N(\mathcal S)\setminus\widetilde{\mathcal S}&r\in W^\perp\setminus W&\text{logical Pauli remains}\\
R\notin N(\mathcal S)&r\notin W^\perp&\text{nonzero syndrome remains}
\end{array}
$$
For $k=1$, $r\in W^\perp$:
$$
\lambda_X=r^TJ\bar z,\quad\lambda_Z=r^TJ\bar x,
\qquad [r]=\lambda_X[\bar x]+\lambda_Z[\bar z].
$$

## 05.05 · Knill–Laflamme condition

Let $\mathcal N(\rho)=\sum_aE_a\rho E_a^\dagger$ be CPTP.
$$
\mathcal N\text{ exactly correctable on }\mathcal C
\iff \exists(c_{ab}):\ PE_a^\dagger E_bP=c_{ab}P\quad\forall a,b.
$$
$$
c=c^\dagger\succeq0,\qquad \sum_a c_{aa}=1.
$$
Stinespring isometry:
$$
W_{\mathcal N}|\psi_L\rangle=\sum_aE_a|\psi_L\rangle\otimes|a\rangle_E,
$$
$$
\rho_E=\sum_{a,b}\langle\psi_L|E_b^\dagger E_a|\psi_L\rangle|a\rangle\langle b|
=\sum_{a,b}c_{ba}|a\rangle\langle b|.
$$

## 05.06 · Exercise and result

Repetition code:
$$
E=X_1X_2,\quad C=X_3,\quad s(E)=s(C)=01,
$$
$$
CE=X_1X_2X_3=\bar X,\qquad
CE(\alpha|0_L\rangle+\beta|1_L\rangle)
=\alpha|1_L\rangle+\beta|0_L\rangle.
$$
$$
s(CE)=00,\qquad CE\notin\widetilde{\mathcal S}.
$$
