# Stabilizers and safe questions

*Quantum error correction · sIIr recall*

## Explanation

## 03.01 · Stabilizer group

Stabilizers are compatible questions whose answers are fixed for every valid logical state. Choose independent commuting Hermitian Pauli operators, each with required answer plus one.

Commutation makes the joint eigenvalue conditions compatible. Independence prevents counting the same constraint twice. Excluding minus identity prevents a condition that no nonzero state could satisfy. Anticommuting checks cannot both have a nonzero common plus-one eigenvector.

## 03.02 · Syndrome projectors and dimension

A syndrome is the list of check outcomes, with zero representing plus one and one representing minus one. Each projector selects one joint eigenspace.

Independent checks divide the physical space into equally sized orthogonal sectors. The all-zero sector is the code space. In the projector expansion, every nonidentity Pauli has zero trace, which gives the dimension directly.

If a measurement schedule includes redundant checks, their outcomes satisfy constraints; the count of independent generators is what determines the dimension.

## 03.03 · Ideal measurement preserves internal coherence

An ideal stabilizer measurement learns which sector contains the state. It does not distinguish logical amplitudes within that sector. A codeword therefore survives the measurement unchanged.

For a fixed Pauli error, the syndrome is determined by the error and is independent of the encoded amplitudes. This statement assumes an ideal check measurement. Faults in the ancilla circuit must be analyzed separately.

## 03.04 · Ancilla measurement of Z parity

Prepare the ancilla in zero. Each data qubit controls a CNOT into it. The ancilla flips once for each data one, so it stores only the parity.

Both components of an even-parity superposition leave the ancilla in the same state. Measuring that ancilla therefore does not reveal which even-parity component was present. Measuring the two data qubits individually would reveal more information and destroy their superposition.

## 03.05 · Ancilla measurement of X parity

For an X check, prepare the ancilla in plus and use it as the control of CNOTs into the data qubits. Measure the ancilla in the X basis.

The two possible results project the data onto the two eigenspaces of the X product. The ancilla direction matters: this circuit is the complementary construction to the Z-parity circuit. Its ideal action does not by itself establish fault tolerance.

## 03.06 · Exercise and result

Both repetition-code parity checks return plus one on both logical basis states. Their outcomes therefore cannot distinguish the logical basis values.

Measuring the first data qubit in Z does distinguish them. For a general encoded superposition it selects one logical branch. The difference is the information the question reveals, even though all three observables are built from Z operators.

## Maths

## 03.01 · Stabilizer group

$$
\mathcal P_n=\{i^q P_1\otimes\cdots\otimes P_n:
q\in\mathbb Z_4,\ P_j\in\{I,X,Y,Z\}\}.
$$
$$
\mathcal S=\langle g_1,\ldots,g_r\rangle\subset\mathcal P_n,
\quad g_i^\dagger=g_i,\quad g_i^2=I,\quad[g_i,g_j]=0,\quad -I\notin\mathcal S.
$$
Independence:
$$
\prod_{i=1}^r g_i^{u_i}=I\iff u=0,\qquad u\in\mathbb F_2^r.
$$
$$
|\mathcal S|=2^r,\quad
\mathcal C=\bigcap_{i=1}^r\ker(g_i-I),\quad k=n-r.
$$
If $AB=-BA$ and $A|\phi\rangle=B|\phi\rangle=|\phi\rangle$:
$$
|\phi\rangle=AB|\phi\rangle=-BA|\phi\rangle=-|\phi\rangle
\implies |\phi\rangle=0.
$$

## 03.02 · Syndrome projectors and dimension

$$
s\in\mathbb F_2^r,\qquad
P_s=\prod_{i=1}^r\frac{I+(-1)^{s_i}g_i}{2}.
$$
$$
P_s^\dagger=P_s,\quad P_sP_t=\delta_{st}P_s,\quad
\sum_{s\in\mathbb F_2^r}P_s=I.
$$
$$
P_0=2^{-r}\sum_{g\in\mathcal S}g,
\qquad \operatorname{Tr}P_s=2^{-r}\operatorname{Tr}I=2^{n-r}=2^k.
$$
$$
\mathcal H_P=\bigoplus_{s\in\mathbb F_2^r}\operatorname{im}P_s.
$$

## 03.03 · Ideal measurement preserves internal coherence

$$
\mathcal M_s(\rho)=P_s\rho P_s,\quad
p_s=\operatorname{Tr}(P_s\rho),\quad
\rho_s=P_s\rho P_s/p_s\quad(p_s>0).
$$
$$
P_0\rho_LP_0=\rho_L\implies p_0=1,\quad\rho_0=\rho_L.
$$
For Pauli $E$ with syndrome $s(E)$:
$$
P_sEV=\delta_{s,s(E)}EV.
$$

## 03.04 · Ancilla measurement of Z parity

$$
U_Z=\operatorname{CNOT}_{2\to a}\operatorname{CNOT}_{1\to a},
\qquad U_Z|b_1b_2\rangle|0\rangle_a
=|b_1b_2\rangle|b_1\oplus b_2\rangle_a.
$$
$$
K_m:={}_a\langle m|U_Z|0\rangle_a
=\frac{I+(-1)^mZ_1Z_2}{2},\qquad m\in\{0,1\}.
$$
$$
U_Z(\alpha|00\rangle+\beta|11\rangle)|0\rangle_a
=(\alpha|00\rangle+\beta|11\rangle)|0\rangle_a.
$$

## 03.05 · Ancilla measurement of X parity

$$
A=\prod_{j\in Q}X_j,\qquad
U_X=|0\rangle\langle0|_a\otimes I
+|1\rangle\langle1|_a\otimes A.
$$
$$
|\pm_m\rangle=\frac{|0\rangle+(-1)^m|1\rangle}{\sqrt2},\qquad
K_m={}_a\langle\pm_m|U_X|+\rangle_a
=\frac{I+(-1)^mA}{2}.
$$
$$
U_X=\prod_{j\in Q}\operatorname{CNOT}_{a\to j}.
$$

## 03.06 · Exercise and result

$$
g_1=Z_1Z_2,\quad g_2=Z_2Z_3,\qquad
g_i|b_L\rangle=|b_L\rangle\quad(i=1,2;\ b=0,1).
$$
$$
Z_1|0_L\rangle=|0_L\rangle,\qquad Z_1|1_L\rangle=-|1_L\rangle.
$$
$$
\Pi_\pm=(I\pm Z_1)/2,
\quad \Pi_+|\psi_L\rangle=\alpha|0_L\rangle,
\quad\Pi_-|\psi_L\rangle=\beta|1_L\rangle.
$$
