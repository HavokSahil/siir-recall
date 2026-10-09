# The information we want to preserve

*Quantum error correction · sIIr recall*

## Explanation

## 01.01 · An unknown quantum state

Preserving a qubit means preserving its whole state. Its populations determine computational-basis measurement probabilities; its coherence carries the relative phase that affects other measurements. Measuring in the computational basis and keeping the answer preserves only part of this information.

The off-diagonal entries of the density matrix make the missing information explicit. Removing them can change the quantum state even when the probabilities of zero and one stay unchanged.

## 01.02 · Preservation includes external entanglement

The stored qubit may be entangled with another system. A successful memory must preserve those correlations as well. The reference system in the equation represents anything outside the device; recovery acts only on the encoded qubit.

For example, one half of a Bell pair looks individually maximally mixed both before and after dephasing. Yet the joint state has lost its entanglement. Checking only the local populations would miss this failure.

## 01.03 · No-cloning

A unitary preserves inner products. If it copied every state, the overlap between two possible inputs would have to equal the square of that overlap. Distinct nonorthogonal states violate that requirement.

A device can copy the labels of orthogonal basis states. Applied to a superposition, that same device creates correlations between its outputs. Linearity determines this behavior: it does not create two independent copies of the unknown input.

## 01.04 · Encoding through correlations

The repetition encoding places the amplitudes in two collective states of three qubits. Each individual physical qubit has lost access to the original relative phase; the full encoded system still carries it.

This is the redundancy quantum error correction can use. Correlations let us ask whether qubits agree without asking which logical value the state contains. Encoding a plus state gives a GHZ state.

## 01.05 · What this first code protects

The two parity checks distinguish no bit flip from a bit flip on each of the three positions. Under that restricted error model, the syndrome tells us how to repair the state.

A phase flip on one qubit is different: it changes the logical relative phase while leaving both parities unchanged. Thus this code corrects a single bit flip, but it does not correct arbitrary single-qubit noise. Its quantum distance is only one.

## 01.06 · Exercise and result

Ask why the plus-phase and minus-phase encoded states have identical computational-basis probabilities. Those probabilities depend on squared amplitude magnitudes, which ignore the sign.

The triple-X measurement can distinguish their coherence when the relevant real part is nonzero. For the encoded plus and minus states, its outcomes are opposite and deterministic. Measuring every data qubit in the computational basis destroys this distinction; measuring only the stabilizer parities preserves it.

## Maths

## 01.01 · An unknown quantum state

$$
\mathcal H_L=\mathbb C^2,\qquad
|\psi\rangle=\alpha|0\rangle+\beta|1\rangle,
\qquad |\alpha|^2+|\beta|^2=1.
$$
$$
\rho_\psi=|\psi\rangle\langle\psi|
=\begin{pmatrix}|\alpha|^2&\alpha\beta^*\\\alpha^*\beta&|\beta|^2\end{pmatrix}.
$$
$$
\Delta_Z(\rho)=\sum_{b=0}^1|b\rangle\langle b|\rho|b\rangle\langle b|,
\qquad
\Delta_Z(\rho_\psi)=\begin{pmatrix}|\alpha|^2&0\\0&|\beta|^2\end{pmatrix}.
$$

## 01.02 · Preservation includes external entanglement

$$
\mathcal V(\rho)=V\rho V^\dagger,\qquad
\mathcal N,\mathcal R:\mathcal B(\mathcal H_P)\to\mathcal B(\mathcal H_P)
\quad\text{CPTP}.
$$
Exact recovery:
$$
\forall\rho_{RL},\quad
(\operatorname{id}_R\otimes\mathcal R\circ\mathcal N\circ\mathcal V)(\rho_{RL})
=(\operatorname{id}_R\otimes\mathcal V)(\rho_{RL}).
$$
Witness state:
$$
|\Phi^+\rangle_{RL}=\frac{|00\rangle+|11\rangle}{\sqrt2},\qquad
(\operatorname{id}\otimes\Delta_Z)(|\Phi^+\rangle\langle\Phi^+|)
=\frac{|00\rangle\langle00|+|11\rangle\langle11|}{2}.
$$

## 01.03 · No-cloning

Suppose, for all normalized $|u\rangle,|v\rangle$,
$$
U|u\rangle|0\rangle=|u\rangle|u\rangle,\qquad
U|v\rangle|0\rangle=|v\rangle|v\rangle.
$$
Unitarity:
$$
a:=\langle u|v\rangle
=\langle u,u|v,v\rangle=a^2
\quad\Longrightarrow\quad a\in\{0,1\}.
$$
$$
0<|\langle u|v\rangle|<1\quad\Longrightarrow\quad\text{contradiction}.
$$
For $U|0,0\rangle=|00\rangle$ and $U|1,0\rangle=|11\rangle$:
$$
U|\psi,0\rangle=\alpha|00\rangle+\beta|11\rangle,
$$
$$
|\psi\rangle^{\otimes2}
=\alpha^2|00\rangle+\alpha\beta(|01\rangle+|10\rangle)+\beta^2|11\rangle.
$$

## 01.04 · Encoding through correlations

$$
V|0\rangle=|000\rangle=:|0_L\rangle,\qquad
V|1\rangle=|111\rangle=:|1_L\rangle.
$$
$$
V|\psi\rangle=
\operatorname{CNOT}_{1\to3}\operatorname{CNOT}_{1\to2}
\bigl(|\psi\rangle_1|00\rangle_{23}\bigr)
=\alpha|000\rangle+\beta|111\rangle.
$$
$$
\operatorname{Tr}_{\{1,2,3\}\setminus\{j\}}
\bigl(V\rho_\psi V^\dagger\bigr)
=|\alpha|^2|0\rangle\langle0|+|\beta|^2|1\rangle\langle1|,
\quad j=1,2,3.
$$
$$
V|+\rangle=(|000\rangle+|111\rangle)/\sqrt2.
$$

## 01.05 · What this first code protects

$$
\mathcal E_X=\{I,X_1,X_2,X_3\},\qquad
g_1=Z_1Z_2,\quad g_2=Z_2Z_3.
$$
$$
\begin{array}{c|cccc}
E&I&X_1&X_2&X_3\\\hline
(s_1,s_2)&00&10&11&01
\end{array}
$$
$$
\bar Z=Z_1,\qquad
Z_1V|\psi\rangle=\alpha|000\rangle-\beta|111\rangle,\qquad
s(Z_1)=00.
$$
$$
\bar X=X_1X_2X_3,\qquad [[n,k,d]]=[[3,1,1]].
$$

## 01.06 · Exercise and result

$$
|\psi_\pm\rangle=\alpha|000\rangle\pm\beta|111\rangle.
$$
$$
\Pr_\pm(000)=|\alpha|^2,\quad
\Pr_\pm(111)=|\beta|^2,\quad
\Pr_\pm(b)=0\ \ (b\notin\{000,111\}).
$$
$$
\langle\psi_\pm|X_1X_2X_3|\psi_\pm\rangle
=\pm2\operatorname{Re}(\alpha^*\beta).
$$
