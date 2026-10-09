# Equivalent errors and ambiguous evidence

*Quantum error correction · sIIr recall*

## Explanation

## 05.01 · Stabilizers and the normalizer

Within the Pauli group, preserving the stabilizer code space is equivalent to commuting with every stabilizer. The Pauli normalizer and centralizer agree here: conjugation by a Pauli only changes another Pauli's sign, and the stabilizer group cannot contain both signs of an element.

An operator in this normalizer can still change the encoded information. The normalizer describes all syndrome-invisible Pauli actions; the stabilizer describes the harmless ones. We explicitly include irrelevant global phases when comparing physical error actions.

## 05.02 · Two equivalence relations

Errors are equivalent on the code when their difference is a stabilizer, up to phase. A decoder may freely substitute one for the other.

Having the same syndrome is a weaker condition. The difference may be a logical operator rather than a stabilizer. Both errors then lead to the same measured sector while carrying different logical information inside it.

The binary version removes phase bookkeeping and makes the distinction two membership tests: one in the stabilizer subspace, the other in its symplectic orthogonal complement.

## 05.03 · Logical Pauli classes

Quotienting by stabilizers groups together physical operators that implement the same logical Pauli. There are four phase-free Pauli choices for each encoded qubit.

Although overall phases are omitted from the classes, their commutation relations still matter. The inherited symplectic pairing records which logical representatives anticommute. A logical X and Z for the same encoded qubit have an odd pairing.

## 05.04 · Correction and the residual

Recovery is judged by the combination of the actual error and the chosen correction. This combined operator is the residual.

A syndrome-matching correction guarantees that the residual is in the normalizer. Success requires the stronger result that it is a stabilizer. Logical X and Z indicators can be computed by testing the residual against representative logical operators.

A nontrivial logical Pauli can leave one special input eigenstate unchanged. That does not make it a successful quantum memory operation, because the requirement is to preserve every encoded state and its external entanglement.

## 05.05 · Knill–Laflamme condition

The general exact-correction criterion covers arbitrary channels, including coherent errors and degenerate codes. Every pairwise error overlap, restricted to the code space, must be a scalar times the identity there.

The environment formulation explains why. Under this condition, the environment's resulting state does not depend on the logical input. It has learned about the error process without acquiring the encoded information. Degeneracy is allowed: distinct error labels do not need distinct observable outcomes.

## 05.06 · Exercise and result

When the actual error flips the first two qubits, a decoder that flips the third qubit clears both checks. But it has completed the triple-X logical operator.

This is why passing all checks is weaker evidence than preserving the logical information. The syndrome tells us whether the state has returned to the code space; it does not certify that it returned to the same logical state.

## Maths

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
