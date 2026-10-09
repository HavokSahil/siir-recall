# Errors become syndrome patterns

*Quantum error correction · sIIr recall*

## Explanation

## 04.01 · Pauli expansion and correctable spans

Pauli operators form a basis for all operators, so they give us a finite language for describing continuous physical errors. The correction condition must hold for every pair of errors in the chosen set. When it does, it also holds for linear combinations of those errors.

This does not turn every channel into a classical random Pauli. A general channel contains cross terms between Pauli components. Such coherent terms disappear only under additional assumptions or an explicit approximation.

## 04.02 · Anticommutation produces the syndrome

A Pauli error flips exactly the checks it anticommutes with. The derivation simply moves the check past the error and then uses the fact that the original state was stabilized.

Composing two Pauli errors adds their syndrome bits modulo two. A check flipped twice returns to its original sign. This cancellation is the algebra behind the endpoints of error strings.

## 04.03 · Binary symplectic representation

Represent each qubit by two bits recording its X and Z components. A Y error has both bits set. We ignore overall Pauli phase in this representation because it does not affect a standalone error's syndrome or logical class.

The symplectic matrix swaps the two halves so that X components are compared against Z components. One matrix multiplication then computes the syndrome. The check-commutation condition uses the same pairing.

## 04.04 · CSS specialization

CSS codes separate the checks into pure X and pure Z products. X checks detect the Z component of an error, and Z checks detect its X component.

The subscripts on syndrome vectors here name the measured check type. Keeping that convention explicit prevents a common mix-up when building two decoding graphs. The equation relating the check matrices says every X check overlaps every Z check on an even number of qubits.

## 04.05 · Noise assumptions

A noise parameter needs a convention. Here depolarizing probability means the total probability of a nonidentity Pauli, divided equally among X, Y, and Z.

Even if different qubits are independent, the X and Z components on the same qubit generally are not: Y contributes to both. Independent decoding of those components can therefore discard useful information.

Readout noise flips a reported syndrome bit. Circuit noise acts at physical operation locations and can propagate through subsequent gates. These models describe different experiments.

## 04.06 · Exercise and result

Use the two-row parity-check matrix to reproduce the repetition-code syndrome table. Adding the first- and second-qubit syndromes leaves the same result as a flip on the third qubit.

This is the first explicit example of different physical errors with identical evidence. Also notice that a phase flip produces zero syndrome despite changing the logical state.

## Maths

## 04.01 · Pauli expansion and correctable spans

$$
\mathcal B(\mathcal H_P)=\operatorname{span}_{\mathbb C}\{I,X,Y,Z\}^{\otimes n},
\quad A=2^{-n}\sum_Q\operatorname{Tr}(Q^\dagger A)Q.
$$
$$
PE_a^\dagger E_bP=c_{ab}P,\quad
F_\mu=\sum_a f_{\mu a}E_a
\implies
PF_\mu^\dagger F_\nu P
=\left(\sum_{a,b}f_{\mu a}^*c_{ab}f_{\nu b}\right)P.
$$
$$
\mathcal N(\rho)=\sum_\mu A_\mu\rho A_\mu^\dagger,
\quad A_\mu=\sum_Qa_{\mu Q}Q,
\quad\mathcal N(\rho)=\sum_{Q,Q'}\chi_{QQ'}Q\rho Q'^\dagger.
$$
Pauli mixture: $\chi_{QQ'}=0$ for $Q\ne Q'$.

## 04.02 · Anticommutation produces the syndrome

$$
g_iE=(-1)^{s_i(E)}Eg_i,\qquad s_i(E)\in\mathbb F_2.
$$
$$
g_i|\psi_L\rangle=|\psi_L\rangle
\implies
g_iE|\psi_L\rangle=(-1)^{s_i(E)}E|\psi_L\rangle.
$$
$$
s(EF)=s(E)+s(F)\pmod2.
$$

## 04.03 · Binary symplectic representation

$$
E\sim X^{\mathbf x}Z^{\mathbf z},\quad
\mathbf x,\mathbf z\in\mathbb F_2^n,\quad
e=\binom{\mathbf x}{\mathbf z},\quad
J=\begin{pmatrix}0&I_n\\I_n&0\end{pmatrix}.
$$
$$
E(e)E(f)=(-1)^{e^TJf}E(f)E(e).
$$
For $g_i\sim X^{\mathbf a_i}Z^{\mathbf b_i}$:
$$
H=\begin{pmatrix}\mathbf a_1^T&\mathbf b_1^T\\\vdots&\vdots\\\mathbf a_r^T&\mathbf b_r^T\end{pmatrix},
\quad s=HJe,\quad HJH^T=0.
$$
$$
(x_j,z_j):\ I\leftrightarrow(0,0),\ X\leftrightarrow(1,0),\
Z\leftrightarrow(0,1),\ Y\leftrightarrow(1,1).
$$

## 04.04 · CSS specialization

$$
g_a^X=X^{(H_X)_{a,:}},\qquad g_b^Z=Z^{(H_Z)_{b,:}},\qquad
H_XH_Z^T=0.
$$
$$
s_X=H_X\mathbf z,\qquad s_Z=H_Z\mathbf x,
\qquad k=n-\operatorname{rank}H_X-\operatorname{rank}H_Z.
$$

## 04.05 · Noise assumptions

Independent bit flips:
$$
\mathcal N_X=\bigotimes_{j=1}^n\mathcal N_{X,j},\quad
\mathcal N_{X,j}(\rho)=(1-p_j)\rho+p_jX\rho X.
$$
Single-qubit depolarizing convention:
$$
\mathcal D_p(\rho)=(1-p)\rho+\frac p3(X\rho X+Y\rho Y+Z\rho Z).
$$
$$
\Pr(x=1)=\Pr(z=1)=2p/3,\quad
\Pr(x=z=1)=p/3\ne(2p/3)^2\quad\text{in general}.
$$
Readout noise:
$$
m_{a,t}=s_{a,t}\oplus\eta_{a,t},\qquad
\eta_{a,t}\sim\operatorname{Bernoulli}(q).
$$
Circuit model: channels $\mathcal N_\ell$ at locations $\ell$ (gates, resets, idles, measurements).

## 04.06 · Exercise and result

$$
H_Z=\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix},\qquad s=H_Z\mathbf x.
$$
$$
\begin{array}{c|rrrrrr}
E&I&X_1&X_2&X_3&X_1X_2&Z_1\\\hline
s(E)&00&10&11&01&01&00
\end{array}
$$
$$
s(X_1X_2)=\binom10+\binom11=\binom01=s(X_3).
$$
