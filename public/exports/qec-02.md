# Encoding into a code space

*Quantum error correction · sIIr recall*

## Explanation

## 02.01 · Encoding isometry

An encoding selects a small subspace inside a larger physical Hilbert space. The isometry preserves inner products, so it preserves all distinctions among logical states.

The code space contains every allowed logical superposition. Its dimension is determined by the number of logical qubits. Adding physical qubits enlarges the surrounding space without increasing the amount of logical information being stored.

## 02.02 · Code projector

The projector describes membership in the code space without choosing a logical value. Applied to a valid codeword, it leaves the state unchanged.

An ideal yes-or-no measurement of this projector asks whether the system lies in the code space. It does not reveal which superposition within that space is present. Later, several commuting checks refine this question into a full syndrome.

## 02.03 · Repetition-code sectors

A bit flip moves the encoded state into another two-dimensional subspace. The original amplitudes remain attached to the two basis vectors in that new sector.

These four sectors are mutually orthogonal and fill the physical space. A measurement can identify the sector while leaving the unknown amplitudes intact. Applying the corresponding inverse bit flip then returns the state to the code space.

## 02.04 · Three kinds of error ambiguity

Two physical errors can act identically on every codeword. They can also reach the same subspace while acting differently on the logical state. Those are different forms of ambiguity.

The two-qubit Z stabilizer of the repetition code is harmless, whereas a single Z acts as a logical phase flip. Both leave the state inside the original code space.

A general coherent error can put the state into a superposition of syndrome sectors. The tidy picture of one error moving the state into one sector applies directly to Pauli errors; it is not a catalogue of every possible physical noise process.

## 02.05 · Exercise and result

Apply the middle-qubit bit flip to an arbitrary encoded state, then take its inner product with an arbitrary original codeword. Every computational basis overlap vanishes.

This proves orthogonality of the whole displaced subspace to the code space. It does not depend on choosing special amplitudes. The projector onto the displaced sector is obtained by conjugating the original projector by the bit flip.

## Maths

## 02.01 · Encoding isometry

$$
\mathcal H_L=(\mathbb C^2)^{\otimes k},\quad
\mathcal H_P=(\mathbb C^2)^{\otimes n},\quad n\ge k,
$$
$$
V:\mathcal H_L\to\mathcal H_P,\quad V^\dagger V=I_L,
\quad\mathcal C=\operatorname{im}V,\quad\dim\mathcal C=2^k.
$$
$$
\langle V\phi|V\psi\rangle=\langle\phi|\psi\rangle,\qquad
V\sum_{j=0}^{2^k-1}\alpha_j|j\rangle
=\sum_{j=0}^{2^k-1}\alpha_j|j_L\rangle.
$$

## 02.02 · Code projector

$$
P:=VV^\dagger=\sum_{j=0}^{2^k-1}|j_L\rangle\langle j_L|,
$$
$$
P^\dagger=P,\quad P^2=V(V^\dagger V)V^\dagger=P,
\quad\operatorname{rank}P=\operatorname{Tr}P=2^k.
$$
$$
|\phi\rangle\in\mathcal C\iff P|\phi\rangle=|\phi\rangle,
\qquad
\rho\text{ supported on }\mathcal C\iff P\rho P=\rho.
$$
$$
\Pr(\mathcal C\mid\rho)=\operatorname{Tr}(P\rho).
$$

## 02.03 · Repetition-code sectors

$$
\mathcal C=\operatorname{span}\{|000\rangle,|111\rangle\},\qquad
P=|000\rangle\langle000|+|111\rangle\langle111|.
$$
$$
\begin{aligned}
X_1\mathcal C&=\operatorname{span}\{|100\rangle,|011\rangle\},\\
X_2\mathcal C&=\operatorname{span}\{|010\rangle,|101\rangle\},\\
X_3\mathcal C&=\operatorname{span}\{|001\rangle,|110\rangle\}.
\end{aligned}
$$
$$
\mathcal H_P=\mathcal C\oplus X_1\mathcal C\oplus X_2\mathcal C\oplus X_3\mathcal C.
$$
For $E_a,E_b\in\{I,X_1,X_2,X_3\}$:
$$
PE_a^\dagger E_bP=\delta_{ab}P.
$$

## 02.04 · Three kinds of error ambiguity

Same action on the entire code, up to a common phase:
$$
FV=e^{i\theta}EV
\iff E^\dagger FV=e^{i\theta}V\qquad(E,F\text{ unitary}).
$$
Same image subspace:
$$
E\mathcal C=F\mathcal C
\centernot\Longrightarrow FV=e^{i\theta}EV.
$$
Examples:
$$
(Z_1Z_2)V=V,\qquad Z_1V=VZ,\qquad Z_1\mathcal C=\mathcal C.
$$
Coherent error:
$$
e^{-i\theta X_1/2}V|\psi\rangle
=\cos(\theta/2)V|\psi\rangle-i\sin(\theta/2)X_1V|\psi\rangle.
$$

## 02.05 · Exercise and result

$$
X_2V|\psi\rangle=\alpha|010\rangle+\beta|101\rangle.
$$
$$
\forall|\phi_L\rangle=\gamma|000\rangle+\delta|111\rangle,\quad
\langle\phi_L|X_2V|\psi\rangle=0.
$$
$$
PX_2P=0,\qquad Q_2:=X_2PX_2,\quad PQ_2=0,\quad Q_2^2=Q_2.
$$
