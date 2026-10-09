# Quantum error correction

*sIIr recall · 12 notes*

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

---

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

---

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

---

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

---

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

---

# Distance and the limits of recovery

*Quantum error correction · sIIr recall*

## Explanation

## 06.01 · Weight and distance

Weight counts physical qubits on which the error acts nontrivially. A Y has weight one, even though it has both binary components.

Distance is the smallest weight of a syndrome-invisible operator with a nontrivial logical action. A low-weight stabilizer does not reduce distance, since it leaves every codeword unchanged. The three code parameters count physical data qubits, logical qubits, and this minimum logical weight.

## 06.02 · Detection below the distance

Every Pauli error below the distance is either harmless on the code or detectable by a syndrome. “Detectable” does not mean that a harmless stabilizer must set off an alarm.

The zero sandwich in the math pane means the error moves the entire code space into an orthogonal sector. The scalar sandwich means it cannot distinguish or change the logical state, except for an irrelevant overall phase.

## 06.03 · Guaranteed correction and its proof

Correction must distinguish between pairs of possible errors. Two errors each affecting at most a given number of qubits can differ on twice as many qubits. If that combined weight is still below distance, any same-syndrome ambiguity is harmless.

This argument proves existence of a recovery that corrects the whole allowed set, including its linear span. It does not guarantee that an arbitrary implementation or decoder achieves the bound.

To see why the worst-case guarantee ends there, divide a minimum logical operator into two pieces. Those pieces have the same syndrome but differ logically, so one syndrome-only decision cannot repair both.

## 06.04 · Restricted noise and asymmetric distance

A code can protect one error component much better than the other. For CSS codes, the separate X and Z distances state those strengths explicitly.

The repetition code has a length-three logical X but a weight-one logical Z. Its ability to correct a single bit flip is therefore consistent with having quantum distance one. The general quantum-distance guarantee covers arbitrary qubit errors, not only the noise type the repetition code handles well.

## 06.05 · Known errors and erasures

A known Pauli error can always be inverted, even if its weight is large. The difficulty in decoding is uncertainty about which error occurred.

For erasures, the affected positions are known. Comparing two candidate errors then stays within the same erased set instead of combining two unknown supports. This is why every set of fewer than distance-many erased qubits is correctable. Some larger patterns are also correctable when they contain no complete logical support.

## 06.06 · Exercise and result

Explain the repetition-code exception using its unequal X and Z distances. Then distinguish three claims: a decoder chose the wrong logical class, syndrome information cannot distinguish two possibilities, and information has become inaccessible to the available recovery operation.

These are different meanings sometimes compressed into “unrecoverable.” Weight above the guaranteed correction radius means failure becomes possible. It does not make every such error fail; a stabilizer of that weight is already harmless.

## Maths

## 06.01 · Weight and distance

$$
\operatorname{supp}(E)=\{j:P_j\ne I\},\quad
E\sim\bigotimes_{j=1}^nP_j,\quad
\operatorname{wt}(E)=|\operatorname{supp}(E)|.
$$
$$
\operatorname{wt}(e)=\sum_{j=1}^n\mathbf1[(x_j,z_j)\ne(0,0)],
\qquad \operatorname{wt}(EF)\le\operatorname{wt}(E)+\operatorname{wt}(F).
$$
For $k\ge1$:
$$
d=\min_{L\in N(\mathcal S)\setminus\widetilde{\mathcal S}}\operatorname{wt}(L)
=\min_{\ell\in W^\perp\setminus W}\operatorname{wt}(\ell),\qquad [[n,k,d]].
$$

## 06.02 · Detection below the distance

For Pauli $E$ with $\operatorname{wt}(E)<d$:
$$
PEP=\begin{cases}
e^{i\theta}P,&E\in\widetilde{\mathcal S},\\
0,&E\notin N(\mathcal S).
\end{cases}
$$
For an anticommuting $g\in\mathcal S$:
$$
PEP=PgEgP=-PEP\implies PEP=0.
$$

## 06.03 · Guaranteed correction and its proof

$$
\mathcal E_t=\{E\in\{I,X,Y,Z\}^{\otimes n}:\operatorname{wt}(E)\le t\},
\qquad 2t<d.
$$
$$
E,F\in\mathcal E_t\implies\operatorname{wt}(E^\dagger F)\le2t<d
\implies PE^\dagger FP=c_{EF}P.
$$
$$
t_{\max}=\left\lfloor\frac{d-1}{2}\right\rfloor.
$$
$$
\begin{array}{c|cccc}d&3&5&7&9\\\hline t_{\max}&1&2&3&4\end{array}
$$
Tightness: partition a weight-$d$ logical support into disjoint sets $A,B$,
$$
L=E_AF_B,\quad |A|=\lfloor d/2\rfloor,\quad |B|=\lceil d/2\rceil,
\quad s(E_A)=s(F_B),\quad E_A\not\equiv_{\mathcal C}F_B.
$$

## 06.04 · Restricted noise and asymmetric distance

For a CSS code:
$$
d_X=\min_{\mathbf x\in\ker H_Z\setminus\operatorname{im}H_X^T}|\mathbf x|,
\qquad
d_Z=\min_{\mathbf z\in\ker H_X\setminus\operatorname{im}H_Z^T}|\mathbf z|,
\qquad d=\min(d_X,d_Z).
$$
Repetition code:
$$
H_X\text{ has no rows},\quad
H_Z=\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix},
\quad d_X=3,\quad d_Z=1,\quad d=1.
$$
$$
\{I,X_1,X_2,X_3\}\text{ correctable},\qquad
\{I,X_1,Y_1,Z_1,\ldots,X_3,Y_3,Z_3\}\text{ not correctable}.
$$

## 06.05 · Known errors and erasures

Known unitary Pauli $E$:
$$
C=E^\dagger\implies CE=I\qquad\text{for any weight}.
$$
Known erased set $A\subseteq\{1,\ldots,n\}$:
$$
\mathcal E_A=\{E:\operatorname{supp}(E)\subseteq A\},\quad
\operatorname{supp}(E^\dagger F)\subseteq A\quad(E,F\in\mathcal E_A).
$$
$$
|A|<d\implies PE^\dagger FP=c_{EF}P\quad\forall E,F\in\mathcal E_A.
$$
Exact erasure criterion for stabilizer codes:
$$
A\text{ correctable}\iff
\nexists L\in N(\mathcal S)\setminus\widetilde{\mathcal S}:
\operatorname{supp}(L)\subseteq A.
$$

## 06.06 · Exercise and result

$$
\operatorname{wt}(E)>t_{\max}\ \centernot\Longrightarrow\ \text{decoder failure}.
$$
Example: any $g\in\mathcal S$ with $\operatorname{wt}(g)>t_{\max}$,
$$
E=g,\quad C=I\implies CE=g\sim I\text{ on }\mathcal C.
$$
$$
\text{Known }E\quad\ne\quad\text{known }s(E)\quad\ne\quad
\text{known }operatorname{supp}(E).
$$

---

# Building a surface-code patch

*Quantum error correction · sIIr recall*

## Explanation

## 07.01 · Cellulation and boundary convention

Use the source notes' unrotated convention: data qubits lie on edges, X checks sit at vertices, and Z checks sit on faces. The planar patch has two opposite rough boundaries and two opposite smooth boundaries.

At a rough boundary a Z string may end without a measured vertex defect. At a smooth boundary the corresponding statement holds for an X string on the dual lattice.

The relative-chain formulation makes this boundary rule precise. Cells belonging to the rough boundary are removed from the relevant relative chain groups. It specifies a compatible code construction; simply clipping arbitrary checks from a square drawing need not do so.

## 07.02 · Local checks commute

Each bulk check involves four nearby data qubits. A vertex and an adjacent face share two edges. Each shared edge contributes a minus sign when X and Z are exchanged, so the two signs cancel.

Boundary supports are modified consistently with the cellulation and boundary type. The matrix identity guarantees commutation throughout the patch. The rank formula counts the logical degrees of freedom left after all independent constraints.

## 07.03 · Primal and dual error strings

A Z chain follows edges of the primal lattice. Its measured defects occur at vertices with odd incidence. Interior vertices touched by two chain edges contribute twice and cancel.

X chains are drawn on dual edges crossing the data edges. Their defects appear at face checks. The primal and dual pictures describe the two components of the same physical Pauli error; Y contributes to both.

## 07.04 · Logical strings and distance

A Z string joining the two distinct rough boundaries can carry the logical Z action. A dual X string joining the two distinct smooth boundaries can carry logical X. Choose representatives that cross once; their physical supports overlap on one qubit, so they anticommute.

Distance is the shortest nontrivial representative, not the length of whichever string was drawn first. Rectangular patches can have unequal distances in the two error sectors.

## 07.05 · Rotated patches and measurement hardware

The rotated layout packs the same kind of topological protection into a different geometry. In the usual odd-distance square patch, there is one logical qubit, a square array of data qubits, four-body interior checks, and two-body boundary checks.

The code parameters count data qubits. Measurement ancillas are additional hardware. The total shown assumes one dedicated ancilla per check; it is a hardware convention rather than a universal total including routing or other support qubits.

Do not carry edge coordinates or boundary supports from an unrotated drawing straight into a rotated implementation. The algebraic check matrices must match the chosen geometry.

## 07.06 · Exercise and result

Track a Z chain as a second edge is added. The shared interior vertex loses its defect because the two anticommutations cancel.

If one endpoint lies on the rough boundary, only the other endpoint appears in the measured syndrome. A single visible defect is therefore a legitimate pattern. It is not evidence that a second defect was accidentally omitted.

## Maths

## 07.01 · Cellulation and boundary convention

Let $K$ be a cellulation of a disk and $R\subset\partial K$ the union of two disjoint rough boundary arcs. Remaining boundary arcs: smooth.
$$
C_j=C_j(K,R;\mathbb F_2),\qquad
C_2\xrightarrow{\partial_2}C_1\xrightarrow{\partial_1}C_0,
\qquad\partial_1\partial_2=0.
$$
$$
\text{Data qubits}\leftrightarrow\text{basis of }C_1,
\quad H_X=\partial_1,\quad H_Z=\partial_2^T,
\quad H_XH_Z^T=0.
$$
$$
\text{Rough: }Z\text{ endpoints unmeasured},\qquad
\text{smooth: dual }X\text{ endpoints unmeasured}.
$$

## 07.02 · Local checks commute

$$
A_v=\prod_{e:(\partial_1)_{v,e}=1}X_e,\qquad
B_f=\prod_{e:(\partial_2)_{e,f}=1}Z_e.
$$
$$
A_vB_f=(-1)^{\sum_e(\partial_1)_{v,e}(\partial_2)_{e,f}}B_fA_v
=B_fA_v.
$$
Square-lattice bulk:
$$
\operatorname{wt}(A_v)=\operatorname{wt}(B_f)=4,\qquad
|\operatorname{supp}(A_v)\cap\operatorname{supp}(B_f)|\in\{0,2\}.
$$
$$
n=\dim C_1,\quad
k=n-\operatorname{rank}\partial_1-\operatorname{rank}\partial_2.
$$

## 07.03 · Primal and dual error strings

$$
E=X^{\mathbf x}Z^{\mathbf z},\qquad
s_X=\partial_1\mathbf z,\quad s_Z=\partial_2^T\mathbf x.
$$
For a primal two-edge path $v_0\xrightarrow{e_1}v_1\xrightarrow{e_2}v_2$:
$$
\partial_1(e_1+e_2)=(v_0+v_1)+(v_1+v_2)=v_0+v_2.
$$
$$
Y_e\sim X_eZ_e\implies
s_X(Y_e)=s_X(Z_e),\quad s_Z(Y_e)=s_Z(X_e).
$$

## 07.04 · Logical strings and distance

$$
\bar{\mathbf z}\in\ker H_X\setminus\operatorname{im}H_Z^T,
\qquad
\bar{\mathbf x}\in\ker H_Z\setminus\operatorname{im}H_X^T.
$$
$$
\bar Z=Z^{\bar{\mathbf z}},\quad\bar X=X^{\bar{\mathbf x}},\quad
\bar{\mathbf x}^{T}\bar{\mathbf z}=1\implies\bar X\bar Z=-\bar Z\bar X.
$$
$$
d_Z=\min_{\mathbf z\in\ker H_X\setminus\operatorname{im}H_Z^T}|\mathbf z|,
\qquad
d_X=\min_{\mathbf x\in\ker H_Z\setminus\operatorname{im}H_X^T}|\mathbf x|.
$$
For a disk with exactly two rough arcs and two smooth arcs:
$$
k=1,\qquad d=\min(d_X,d_Z).
$$

## 07.05 · Rotated patches and measurement hardware

Standard odd-$d$ rotated square family, $d\ge3$:
$$
[[n,k,d]]=[[d^2,1,d]],\quad
r_X=r_Z=\frac{d^2-1}{2},\quad r_X+r_Z=d^2-1.
$$
$$
\operatorname{wt}(g)=\begin{cases}4,&\text{bulk check},\\2,&\text{boundary check}.
\end{cases}
$$
One dedicated ancilla per check:
$$
n_{\rm data}=d^2,\quad n_{\rm anc}=d^2-1,
\quad n_{\rm data}+n_{\rm anc}=2d^2-1.
$$
$$
d=3:\quad 9\text{ data}+8\text{ ancillas}=17\text{ qubits}.
$$

## 07.06 · Exercise and result

$$
Z_{e_1}:\ s_X=v_0+v_1,\qquad
Z_{e_1}Z_{e_2}:\ s_X=v_0+v_2.
$$
If $v_0\in R$:
$$
[v_0]=0\text{ in }C_0(K,R),\qquad
\partial_1(e_1+e_2)=[v_2].
$$

---

# Drawing boundaries and understanding topology

*Quantum error correction · sIIr recall*

## Explanation

## 08.01 · Relative chains

A chain is a set of edges with binary coefficients. Addition toggles membership: using an edge twice cancels it. Its boundary records vertices touched by an odd number of those edges.

Relative chains treat rough-boundary endpoints as zero in the boundary space. This allows an apparently open string to have zero measured boundary.

Drawing the boundary of an error means marking these checked endpoints. It does not mean outlining a region around the qubits. The three-edge example is an exact symbolic version of the original endpoint diagram.

## 08.02 · Stabilizer deformations

Multiplying an error by a face stabilizer toggles every edge around that face. A path using one edge can be replaced by the other three sides.

The syndrome is unchanged because a face boundary has no remaining boundary. More strongly, the new error has exactly the same action on the code. The visual path deformation is therefore a concrete stabilizer multiplication.

## 08.03 · Residual cycles and logical classes

A correction with matching endpoints makes the residual a cycle in the relative sense. The remaining question is whether that cycle is a sum of face boundaries.

If it is, the residual is a stabilizer and recovery succeeds in this error sector. If it is not, it represents a nontrivial homology class and changes the logical information.

This is the topology behind the normalizer-versus-stabilizer distinction. The chain language specializes the same algebra to a geometric code.

## 08.04 · Planar and closed surfaces

A disk has no ordinary noncontractible loops, yet a planar patch can encode a qubit. The missing ingredient is the relative boundary condition. A string connecting the two separate rough arcs is closed for the measured boundary operator and cannot be removed by face deformations.

The short homology calculation counts one independent such class. A torus instead has two independent ordinary loop directions and encodes two qubits.

For the disk with no holes considered here, a path whose endpoints lie on the same rough arc is relatively trivial. Boundary type and connectivity matter; arbitrary boundary-to-boundary paths are not all logical operators.

## 08.05 · Dual sector and intersection pairing

The X sector is naturally the cohomological partner of the Z-chain description. Geometrically it can be drawn as dual paths terminating at smooth boundaries.

Their intersection parity determines commutation. Changing either representative by a stabilizer leaves that parity unchanged, so the pairing depends on logical classes rather than drawing details.

For a general Pauli error, recovery must be trivial in both sectors. Fixing only the Z-chain homology is insufficient when an X component remains.

## 08.06 · Exercise and result

Draw a path and deform it around a face to make the first correction candidate. Then toggle a full rough-to-rough logical path to make a second candidate.

Both corrections match the measured endpoints. The first differs from the original by a stabilizer, while the second differs by that stabilizer plus a logical string. Matching endpoints is necessary for clearing the syndrome, but the residual class determines whether the repair succeeds.

## Maths

## 08.01 · Relative chains

$$
C_j(K,R;\mathbb F_2)=C_j(K;\mathbb F_2)/C_j(R;\mathbb F_2).
$$
$$
\partial_j^{\rm rel}[a]=[\partial_ja],\qquad
\partial_1^{\rm rel}\partial_2^{\rm rel}=0.
$$
Suppressing the superscript:
$$
e=\sum_qe_qq\in C_1,\quad e_q\in\mathbb F_2,
\quad s=\partial_1e,\quad e+e=0.
$$
Three-edge chain:
$$
\partial_1(e_{01}+e_{12}+e_{23})
=(v_0+v_1)+(v_1+v_2)+(v_2+v_3)=v_0+v_3.
$$

## 08.02 · Stabilizer deformations

$$
b=\partial_2f,\qquad Z^b\in\mathcal S,
\qquad e'=e+\partial_2f.
$$
$$
\partial_1e'=\partial_1e+\partial_1\partial_2f=\partial_1e.
$$
Square face with $\partial_2f=a+b+c+d$:
$$
e=a\implies e'=a+(a+b+c+d)=b+c+d.
$$
$$
Z^{e'}V=Z^eZ^{\partial_2f}V=Z^eV.
$$

## 08.03 · Residual cycles and logical classes

$$
\partial_1c=\partial_1e=s
\implies r=e+c\in Z_1:=\ker\partial_1.
$$
$$
B_1:=\operatorname{im}\partial_2\subseteq Z_1,\qquad
H_1(K,R;\mathbb F_2)=Z_1/B_1.
$$
$$
\text{Z-sector success}\iff[r]=0\iff r\in B_1,
\qquad
\text{Z logical failure}\iff[r]\ne0.
$$
$$
\dim H_1=\dim C_1-\operatorname{rank}\partial_1-\operatorname{rank}\partial_2=k.
$$

## 08.04 · Planar and closed surfaces

Disk $K$, $R=R_1\sqcup R_2$ two contractible disjoint boundary arcs:
$$
H_1(K;\mathbb F_2)=0,\qquad
H_1(K,R;\mathbb F_2)\cong
\ker\bigl(H_0(R)\to H_0(K)\bigr).
$$
$$
\mathbb F_2^2\to\mathbb F_2:\ (a,b)\mapsto a+b,
\qquad H_1(K,R;\mathbb F_2)\cong\mathbb F_2.
$$
For a chain $\gamma$ joining $R_1$ to $R_2$:
$$
\partial_1^{\rm rel}\gamma=0,\qquad[\gamma]\ne0.
$$
Torus:
$$
H_1(T^2;\mathbb F_2)\cong\mathbb F_2^2,\qquad k=2.
$$

## 08.05 · Dual sector and intersection pairing

Using cell bases to identify cochains with binary column vectors:
$$
H^1(K,R;\mathbb F_2)=\ker\partial_2^T/\operatorname{im}\partial_1^T.
$$
$$
r_Z\in\ker\partial_1,\quad r_X\in\ker\partial_2^T,
\qquad \langle[r_X],[r_Z]\rangle=r_X^Tr_Z\pmod2.
$$
Representative invariance:
$$
(r_X+\partial_1^Ta)^Tr_Z=r_X^Tr_Z,
\qquad r_X^T(r_Z+\partial_2b)=r_X^Tr_Z.
$$
$$
X^{r_X}Z^{r_Z}=(-1)^{r_X^Tr_Z}Z^{r_Z}X^{r_X}.
$$

## 08.06 · Exercise and result

Choose $e,c\in C_1$ and a nontrivial relative cycle $\ell$:
$$
c=e+\partial_2f,\qquad c'=c+\ell,\qquad
\partial_1\ell=0,\quad[\ell]\ne0.
$$
$$
\partial_1c=\partial_1c'=\partial_1e,
$$
$$
[e+c]=[\partial_2f]=0,\qquad
[e+c']=[\partial_2f+\ell]=[\ell]\ne0.
$$

---

# Decoding from imperfect evidence

*Quantum error correction · sIIr recall*

## Explanation

## 09.01 · Inference from a syndrome

The decoder sees a syndrome and combines it with a noise model. Maximum a posteriori error inference chooses the most probable compatible physical error.

The correction is the inverse of that estimate. It can succeed even when the estimate is not the actual error, provided their difference is a stabilizer. All probability formulas in this lesson assume a stochastic Pauli model; they do not directly describe coherent superpositions of physical errors.

## 09.02 · Logical-class inference

All errors compatible with a syndrome split into logical classes. Errors within a class differ by stabilizers and admit the same successful recovery action.

To optimize the probability of preserving arbitrary logical information, sum the probabilities of every physical error in each class and choose the largest total. This can differ from choosing the single most probable error: many moderately likely errors may together outweigh one especially likely representative.

The choice of reference error changes the labels assigned to the classes, not the physical recovery problem.

## 09.03 · Independent faults become additive weights

Independent binary faults turn likelihood into a sum of edge costs. A rare fault gets a large positive cost; a more likely fault gets a smaller one. Uniform probabilities below one half reduce the objective to counting faults.

This derivation explains minimum weight. It also states its assumptions. Correlated faults generally do not factor into these independent costs, and optimizing a most likely fault configuration need not optimize the summed probability of a logical class.

## 09.04 · Graphlike models and matching

For a graphlike model, a fault has two measured endpoints, one endpoint and a permitted boundary, or no measured endpoints. The decoding task asks for an edge set with the observed odd-degree vertices.

A boundary-aware matching construction pairs defects with other defects or with legal boundaries. Shortest-path distances provide the pairing costs. Expanding the chosen pairings and adding paths modulo two produces a candidate fault chain.

Boundary nodes need the proper matching construction, such as virtual copies; one ordinary boundary vertex cannot simply be forced to accept only one defect. Fault labels must also track effects on logical observables. A zero-endpoint fault can still be logically harmful even though the detector record cannot locate it.

## 09.05 · Model limitations and correlated components

Decoding the two CSS components independently is convenient, but Y errors correlate them. A decoder using those correlations can make a different inference.

Some circuit faults create more than two detector events. Representing such a fault as unrelated graph edges can change its probability structure. Correlation-aware matching methods or other decoding approaches are needed when the simple independent graph model is inadequate.

Even under the correct model, an optimal decoder can fail on a particular sample. It chooses from incomplete evidence rather than observing the hidden fault directly.

## 09.06 · Pauli frame

A Pauli frame records the correction in classical software instead of applying it immediately to the hardware. To remain equivalent, later gates and measurement outcomes must be interpreted using the frame.

Clifford gates map Paulis to Paulis, so their frame update is especially simple. For a Pauli measurement, an anticommuting frame flips the interpretation of its sign. A deferred correction remains part of the computation.

## 09.07 · Exercise and result

The third-qubit flip is more likely than the first-two-qubit flip when the physical bit-flip probability is below one half. It is therefore the sensible correction for this syndrome.

Nevertheless, the two-flip event sometimes happens. The decoder then applies the wrong logical class. The final formula counts all two- and three-flip patterns, which are precisely the failures of this restricted repetition-code decoder.

## Maths

## 09.01 · Inference from a syndrome

Assume a stochastic Pauli distribution $\pi(e)$ and ideal syndrome $s=HJe$.
$$
\Pr(e\mid s)=\frac{\pi(e)\mathbf1[HJe=s]}{\sum_{f:H Jf=s}\pi(f)}.
$$
$$
\hat e_{\rm MAP}\in\underset{e:HJe=s}{\arg\max}\ \pi(e),
\qquad C=E(\hat e_{\rm MAP})^\dagger.
$$
$$
\hat e_{\rm MAP}\ne e\ \centernot\Longrightarrow\ \text{logical failure}.
$$

## 09.02 · Logical-class inference

Fix $e_s$ with $HJe_s=s$. Choose representatives $\ell$ of $W^\perp/W$.
$$
\{e:HJe=s\}=\bigsqcup_{[\ell]\in W^\perp/W}(e_s+\ell+W).
$$
$$
Z_{[\ell]}(s)=\sum_{w\in W}\pi(e_s+\ell+w),\qquad
\Pr([\ell]\mid s)=\frac{Z_{[\ell]}(s)}{\sum_{[\ell']}Z_{[\ell']}(s)}.
$$
$$
[\hat\ell]\in\arg\max_{[\ell]}Z_{[\ell]}(s),\qquad
C=E(e_s+\hat\ell)^\dagger.
$$
$$
P_{\rm succ}^{\rm opt}(s)=\max_{[\ell]}\Pr([\ell]\mid s).
$$

## 09.03 · Independent faults become additive weights

For binary fault variables $u_j\in\{0,1\}$, independently sampled with $0<p_j<1$:
$$
\Pr(u)=\prod_jp_j^{u_j}(1-p_j)^{1-u_j},
$$
$$
-\log\Pr(u)=-\sum_j\log(1-p_j)+\sum_ju_jw_j,
\qquad w_j=\log\frac{1-p_j}{p_j}.
$$
For detector-incidence matrix $B$:
$$
\hat u\in\arg\min_{u:Bu=s}\sum_jw_ju_j.
$$
$$
p_j=p<1/2\implies w_j=w>0
\implies \hat u\in\arg\min_{u:Bu=s}|u|.
$$

## 09.04 · Graphlike models and matching

Assume $0<p_j<1/2$ and each modeled fault has at most two measured endpoints:
$$
|B_{:,j}|\in\{0,1,2\},\qquad T=\{v:s_v=1\}.
$$
For measured vertices $V_m$ and permitted boundary vertices $V_b$:
$$
\operatorname{odd}_{V_m}(F)=T,\qquad
F_*\in\arg\min_{F:\operatorname{odd}_{V_m}(F)=T}\sum_{e\in F}w_e.
$$
Shortest-path metric:
$$
d_w(a,b)=\min_{\gamma:a\leadsto b}\sum_{e\in\gamma}w_e,\qquad
 d_w(a,V_b)=\min_{b\in V_b}d_w(a,b).
$$
Boundary-aware matching reduction:
$$
M_*\in\arg\min_{M\text{ feasible}}\sum_{(a,b)\in M}d_w(a,b),
\qquad \hat u=\bigoplus_{(a,b)\in M_*}\mathbf1_{\gamma_{ab}}.
$$
Fault-label map $L$:
$$
\hat\lambda=L\hat u,\qquad\lambda_{\rm residual}=L(u+\hat u).
$$

## 09.05 · Model limitations and correlated components

Depolarizing convention:
$$
\Pr(x_j,z_j)=
\begin{cases}1-p,&(x_j,z_j)=(0,0),\\p/3,&(x_j,z_j)\in\{(1,0),(0,1),(1,1)\}.
\end{cases}
$$
$$
\Pr(\mathbf x,\mathbf z)\ne\Pr(\mathbf x)\Pr(\mathbf z)\quad\text{in general}.
$$
$$
\left(\arg\max_{\mathbf x}\Pr(\mathbf x\mid s_Z),
\arg\max_{\mathbf z}\Pr(\mathbf z\mid s_X)\right)
\ne\arg\max_{\mathbf x,\mathbf z}\Pr(\mathbf x,\mathbf z\mid s_X,s_Z)
\quad\text{in general}.
$$
$$
|B_{:,j}|>2\implies\text{fault }j\text{ is not a single ordinary graph edge}.
$$

## 09.06 · Pauli frame

Convention: stored frame $F$ maps the tracked physical state to the corrected reference,
$$
\rho_{\rm corr}=F\rho_{\rm phys}F^\dagger.
$$
Clifford $U$:
$$
F'=UFU^\dagger\implies
F'(U\rho_{\rm phys}U^\dagger)F'^\dagger=U\rho_{\rm corr}U^\dagger.
$$
Pauli measurement $M$, outcome $m_{\rm phys}\in\{\pm1\}$:
$$
FM=(-1)^\omega MF\implies
m_{\rm corr}=(-1)^\omega m_{\rm phys}.
$$

## 09.07 · Exercise and result

Repetition code, independent bit flips, $0<p<1/2$, syndrome $01$:
$$
\Pr(X_3)=p(1-p)^2,\qquad
\Pr(X_1X_2)=p^2(1-p),
$$
$$
\frac{\Pr(X_3)}{\Pr(X_1X_2)}=\frac{1-p}{p}>1.
$$
$$
\Pr(X_3\mid01)=1-p,\qquad
\Pr(X_1X_2\mid01)=p.
$$
For the minimum-weight bit-flip decoder:
$$
P_{L,X}=\binom32p^2(1-p)+p^3=3p^2-2p^3.
$$

---

# When the checks themselves are noisy

*Quantum error correction · sIIr recall*

## Explanation

## 10.01 · Stationary repeated measurements

With faulty readout, a single negative check result could come from the data or from the measurement. Repeating fixed checks lets us compare neighboring rounds.

The detector record measures changes, not the current error itself. The equation separates new data faults from measurement errors in the current and previous rounds. A pre-existing data error does not keep producing fresh events forever.

The first round needs a known reference or a specified initialization rule. Arbitrarily setting it to zero would invent evidence if the initial syndrome were unknown.

## 10.02 · Spatial and temporal signatures

A persistent data error changes the true syndrome when it arrives. Adjacent-round differences register its onset; later identical outcomes cancel.

One bad measurement creates a false change when it appears and another when the next correct readout returns. These neighboring-time events suggest a temporal edge. A data fault with two spatial endpoints suggests a spatial edge in the simplified graph.

A fault near the start or end may have only one visible endpoint, depending on the experiment's time boundary.

## 10.03 · General detectors and time boundaries

A general detector is a parity of recorded measurements that has a known result in the ideal experiment. Adjacent rounds of one fixed check are only one example.

Initialization, final data measurements, changed checks, and logical gate operations determine which parities are valid. Some final readouts reveal one logical observable while leaving its conjugate unmeasured.

In circuit decoding, the output can be a predicted logical-observable flip rather than an explicit physical correction path. Detector incidence and observable labels must come from the same circuit model.

## 10.04 · Three levels of noise

Code-capacity experiments isolate data-error decoding by assuming perfect checks. Phenomenological models add simplified readout errors without simulating every syndrome-extraction gate.

Circuit-level models place faults at the actual physical operations. Their detector patterns include propagation and timing effects. An error probability in one model generally does not describe the same physical quantity as the same numerical value in another, so their thresholds need separate labels.

## 10.05 · CNOT propagation and hook errors

CNOT spreads an X on its control to its target, and a Z on its target back to its control. The complementary Pauli directions do not spread in the same way.

A syndrome ancilla interacts with several data qubits, so one ancilla fault can produce a correlated data pattern. Such hook errors can make a logical direction easier to damage than a count of data-qubit distance alone suggests.

The order of check interactions determines the geometry of these correlated patterns. A fault-tolerant schedule must analyze them rather than assuming the ideal stabilizer weight tells the whole story.

## 10.06 · Space, time, and fault distance

Spatial code distance is not the entire protection of a noisy measurement experiment. A damaging fault pattern may exploit time boundaries or repeated faulty readout as well as a path across the patch.

The fault-distance definition counts the fewest modeled fault mechanisms that can change the tracked logical observable while producing no detectors. It depends on the circuit and the allowed faults.

Many surface-code protocols use a number of rounds proportional to spatial distance so temporal protection scales too. The required constant and boundary handling belong to the specific memory or gate protocol.

## 10.07 · Exercise and result

Insert one flipped readout into five ideal zero outcomes. The detector fires when that wrong value appears and again when it disappears.

The two displayed result lists differ only in whether the known initial reference is included. Stating that convention avoids an apparent off-by-one disagreement in a simulator.

## Maths

## 10.01 · Stationary repeated measurements

Assumptions: fixed checks, Pauli data faults, binary readout noise, discrete rounds.
$$
e_t=e_{t-1}+f_t,\qquad s_t=HJe_t,\qquad
m_t=s_t+\eta_t\quad(\mathbb F_2).
$$
$$
d_t:=m_t+m_{t-1}=HJf_t+\eta_t+\eta_{t-1}.
$$
For an initialized known syndrome:
$$
m_0=s_0\quad\text{if the initial reference is noiseless and known}.
$$

## 10.02 · Spatial and temporal signatures

Single data fault $f_\tau=f$, $f_t=0$ for $t\ne\tau$, $\eta_t=0$:
$$
d_\tau=HJf,\qquad d_t=0\quad(t\ne\tau).
$$
Single readout fault at check $a$, round $\tau$:
$$
\eta_\tau=\mathbf e_a,\quad\eta_t=0\ (t\ne\tau),\quad f_t=0,
$$
$$
d_\tau=\mathbf e_a,\quad d_{\tau+1}=\mathbf e_a,
\quad d_t=0\ (t\notin\{\tau,\tau+1\}).
$$

## 10.03 · General detectors and time boundaries

For measurement-record bits $m_j$ and a deterministic ideal parity $b_D$:
$$
d_D=b_D\oplus\bigoplus_{j\in D}m_j,
\qquad \bigoplus_{j\in D}m_j^{\rm ideal}=b_D.
$$
$$
d=B_{\rm det}u,\qquad \lambda=L_{\rm obs}u
\quad\text{for a specified binary fault model}.
$$
$$
\hat u=\mathcal D(d),\qquad
\lambda_{\rm residual}=L_{\rm obs}(u+\hat u).
$$

## 10.04 · Three levels of noise

$$
\begin{array}{c|c|c}
\text{Model}&\text{Fault variables}&\text{Syndrome information}\\\hline
\text{Code capacity}&\text{data Paulis}&\text{perfect}\\
\text{Phenomenological}&\text{data Paulis, readout bits}&\text{noisy repeated checks}\\
\text{Circuit level}&\text{gate, idle, reset, measurement faults}&\text{circuit-derived detectors}
\end{array}
$$
$$
\mathcal N_{\rm circuit}
=\mathcal N_L\circ\mathcal U_L\circ\cdots\circ\mathcal N_1\circ\mathcal U_1
\quad\text{(with instruments for measurements)}.
$$

## 10.05 · CNOT propagation and hook errors

Let $U=\operatorname{CNOT}_{c\to t}$:
$$
UX_cU^\dagger=X_cX_t,\quad UZ_cU^\dagger=Z_c,
$$
$$
UX_tU^\dagger=X_t,\quad UZ_tU^\dagger=Z_cZ_t.
$$
Ancilla-control $X_a$ fault before remaining targets $Q_{\rm rem}$:
$$
X_a\longmapsto X_a\prod_{j\in Q_{\rm rem}}X_j.
$$
Ancilla-target $Z_a$ fault before remaining controls $Q_{\rm rem}$:
$$
Z_a\longmapsto Z_a\prod_{j\in Q_{\rm rem}}Z_j.
$$

## 10.06 · Space, time, and fault distance

For a fixed binary circuit-fault model:
$$
d_{\rm fault}:=\min_{u:B_{\rm det}u=0,\ L_{\rm obs}u\ne0}|u|.
$$
$$
d_{\rm fault}=d_{\rm fault}(d,T,\text{schedule},\text{time boundaries},\text{fault model}).
$$
Common memory scaling choice:
$$
T(d)=\lceil\kappa d\rceil,\qquad\kappa>0.
$$

## 10.07 · Exercise and result

$$
(m_1,m_2,m_3,m_4,m_5)=(0,0,1,0,0),\qquad m_0=0.
$$
$$
(d_1,d_2,d_3,d_4,d_5)=(0,0,1,1,0).
$$
$$
(m_2\oplus m_1,m_3\oplus m_2,m_4\oplus m_3,m_5\oplus m_4)
=(0,1,1,0).
$$

---

# Thresholds and scaling protection

*Quantum error correction · sIIr recall*

## Explanation

## 11.01 · Specify the logical failure event

Choose what counts as failure before collecting data. You might count residual logical X, residual logical Z, either component, or disagreement of one final observable.

These quantities are related but different. A logical Y contributes to both component events and only once to the either-component event. Reading logical Z detects the X component of a residual, while a pure Z residual can remain invisible to that readout.

For a full quantum-memory claim, preserving one prepared logical eigenstate is insufficient. The experiment must test the relevant complementary information or use a simulation criterion that tracks the full logical class.

## 11.02 · A threshold for a specified scaling experiment

A threshold belongs to a code family, noise model, decoder, and protocol. The definition here asks whether the logical failure probability tends to zero as distance grows under a specified rule for experiment duration.

The time rule is essential. Increasing distance while allowing arbitrarily long storage can change the conclusion. Exponential suppression with distance can overcome polynomial growth in storage duration, as the displayed bound illustrates.

This definition states an asymptotic property. It is not a universal numerical constant attached to the words “surface code.”

## 11.03 · Finite-size crossings

Curves for several distances often cross near a threshold because the leading scaling variable vanishes there. Finite-size corrections shift those crossings.

The scaling equation is an ansatz to justify and fit for a particular model, not a theorem for every decoder or noise process. Consistent protocol aspect ratios matter, especially the relationship between time and spatial distance.

A crossing between two small patches is useful evidence, but it does not by itself give a precise asymptotic threshold. Check sensitivity to the distances included, model assumptions, and statistical uncertainty.

## 11.04 · Low-noise behavior

At low noise, the smallest failing fault patterns dominate. If a decoder corrects every pattern up to the guaranteed radius and fails on some patterns one fault larger, that next weight sets the leading power of the error probability.

The familiar distance-based power law expresses this intuition, but its prefactor, duration dependence, and useful range depend on the experiment. Circuit fault weight can differ from data-error weight, and correlations can alter the expansion.

Use the heuristic to interpret measured behavior, not to manufacture a threshold estimate without simulations or a justified model.

## 11.05 · Sampling and uncertainty

Count failures over independent repetitions of the same experiment. The estimate is the observed fraction, and the uncertainty is binomial.

A Wilson interval gives a practical approximate two-sided interval. For zero observed failures, the separate exact one-sided formula gives an upper confidence bound. These are different interval conventions and should be labeled accordingly.

Zero observed failures means the experiment has not resolved a nonzero rate, not that the true rate is zero. Rare-event estimates need enough samples to make their uncertainty meaningful; reusing correlated trials would invalidate the simple binomial model.

## 11.06 · Per-round and per-experiment quantities

A final parity error counts an odd number of logical flips. The event “at least one logical flip occurred” also counts even numbers of flips, so these probabilities differ.

Dividing a per-experiment failure fraction by the number of rounds is only a low-error approximation under suitable assumptions. Actual decoder outputs can be temporally correlated and need not follow either independent-round model exactly.

Record the circuit, duration, noise convention, decoder, random seeds, shot counts, failure definition, and uncertainty method. Those details determine what a plotted number means and whether another experiment can reproduce it.

## 11.07 · Exercise and result

Comparing distance three for three rounds with distance five for one hundred rounds confounds spatial protection with exposure time. Even equal per-round logical error probabilities would give very different per-experiment failure fractions.

Use a common duration, a justified common rate model, or a declared scaling rule such as a fixed time-to-distance ratio. If the goal is threshold scaling, state that rule and interpret the curves within it.

## Maths

## 11.01 · Specify the logical failure event

Fix family $\{\mathcal C_d\}$, noise $\mathcal N_p$, protocol with $T$ rounds, and decoder $\mathcal D$.
$$
(\lambda_X,\lambda_Z)\in\mathbb F_2^2,
$$
$$
P_{L,X}=\Pr(\lambda_X=1),\quad P_{L,Z}=\Pr(\lambda_Z=1),
$$
$$
P_{L,\rm any}=\Pr((\lambda_X,\lambda_Z)\ne(0,0))
=P_{L,X}+P_{L,Z}-\Pr(\lambda_X=\lambda_Z=1).
$$
Logical $\bar Z$ readout detects $\lambda_X$; logical $\bar X$ readout detects $\lambda_Z$.
$$
P_L=P_L(p,d,T;\mathcal N,\mathcal D,\text{protocol},\text{failure event}).
$$

## 11.02 · A threshold for a specified scaling experiment

Fix a time-scaling rule $T=T(d)$ and write $P_L^*(p,d)=P_L(p,d,T(d))$.
$$
p_{\rm th}:=\sup\left\{p_0\in[0,1]:\ \forall p\in[0,p_0),\
\lim_{d\to\infty}P_L^*(p,d)=0\right\}.
$$
A possible below-threshold bound:
$$
P_L^*(p,d)\le A(p)e^{-\alpha(p)d},\qquad \alpha(p)>0.
$$
If $P_L(p,d,T)\le T A(p)e^{-\alpha(p)d}$ and $T(d)=O(d^a)$:
$$
\lim_{d\to\infty}P_L(p,d,T(d))=0.
$$

## 11.03 · Finite-size crossings

Conditional finite-size scaling ansatz, fixed protocol aspect ratios:
$$
P_L^*(p,d)\approx F\bigl((p-p_{\rm th})d^{1/\nu}\bigr)
+d^{-\omega}G\bigl((p-p_{\rm th})d^{1/\nu}\bigr),\quad\nu,\omega>0.
$$
$$
P_L^*(p_{\rm th},d)\approx F(0)+d^{-\omega}G(0).
$$
$$
P_L^*(p,d_1)=P_L^*(p,d_2)
\quad\centernot\Longrightarrow\quad p=p_{\rm th}.
$$

## 11.04 · Low-noise behavior

For a fixed finite stochastic fault model with finitely many locations,
$$
P_L(p)=\sum_{u:\text{failure}}p^{|u|}(1-p)^{M-|u|}
\quad\text{(equal independent binary probabilities)}.
$$
If $w_{\min}$ is the minimum failing fault weight:
$$
P_L(p)=a_{w_{\min}}p^{w_{\min}}+O(p^{w_{\min}+1})\quad(p\to0).
$$
If all errors of weight $\le t$ are corrected and some weight-$t+1$ errors fail:
$$
w_{\min}=t+1,\qquad t=(d-1)/2\quad(d\text{ odd}).
$$
Common heuristic:
$$
P_L\approx A\left(\frac p{p_{\rm th}}\right)^{(d+1)/2}.
$$

## 11.05 · Sampling and uncertainty

Independent identical trials:
$$
F\sim\operatorname{Binomial}(N,P_L),\qquad\hat P_L=f/N,
\qquad\operatorname{Var}(\hat P_L)=P_L(1-P_L)/N.
$$
Wilson interval, normal quantile $z$:
$$
c=\frac{\hat P_L+z^2/(2N)}{1+z^2/N},\qquad
h=\frac{z\sqrt{\hat P_L(1-\hat P_L)/N+z^2/(4N^2)}}{1+z^2/N},
\quad[c-h,c+h].
$$
For $f=0$, exact one-sided confidence $1-\alpha$ upper bound:
$$
(1-P_U)^N=\alpha\implies
P_U=1-\alpha^{1/N}\approx-\log(\alpha)/N.
$$
$$
\alpha=0.05:\quad P_U\approx2.9957/N.
$$

## 11.06 · Per-round and per-experiment quantities

Independent flips of one logical parity, probability $q$ each round:
$$
\Pr(\text{odd number of flips in }T)
=\frac{1-(1-2q)^T}{2}.
$$
$$
\Pr(\text{at least one flip in }T)=1-(1-q)^T.
$$
$$
qT\ll1\implies
\frac{1-(1-2q)^T}{2}\approx Tq,
\qquad 1-(1-q)^T\approx Tq.
$$
Reproducibility record:
$$
(\text{code/circuit},d,T,\text{noise convention},p,\text{decoder/version},
\text{seeds},N,f,\text{failure event},\text{interval method}).
$$

## 11.07 · Exercise and result

$$
q_3=q_5=q,\qquad
P_3=\frac{1-(1-2q)^3}{2},\quad
P_5=\frac{1-(1-2q)^{100}}{2}.
$$
$$
q\ll1/100\implies P_3\approx3q,\quad P_5\approx100q,
\quad P_5/P_3\approx100/3.
$$

---

# Computing while remaining protected

*Quantum error correction · sIIr recall*

## Explanation

## 12.01 · Logical implementation

An ideal logical implementation must produce the intended operation on every encoded input. If the protocol changes the geometry, the output encoding may differ from the input encoding.

Preserving the code space alone is a weaker claim: many different logical gates preserve the same space. The equation specifying the logical action identifies which gate was implemented.

A measurement-based gate has several outcome branches. After their prescribed corrections, all branches must realize the same logical operation, with branch amplitudes independent of the unknown logical input.

## 12.02 · Fault tolerance is an additional condition

Fault tolerance concerns what happens when faults occur during the gate, possibly in addition to errors already present. A noiseless gate identity cannot answer that question.

The mathematical pane gives one sufficient test for a fully specified gadget: allowed input errors and allowed fault branches must still yield the intended logical operation after the prescribed frame update and ideal output recovery. The scalar allows an unnormalized measurement or fault branch.

Actual fault-tolerance definitions vary with the gadget and noise model. State which input errors, fault locations, correlated fault mechanisms, and output recovery are covered. A spatial string representing a gate does not supply this circuit-level analysis.

## 12.03 · Logical Paulis and frame updates

A representative logical string implements a logical Pauli. It has the same physical form as an undetected logical error; the difference is whether that transformation is intended and included in the computation's record.

A logical Pauli can often be implemented by updating the frame rather than pulsing every data qubit. That changes how subsequent operations and measurements are interpreted. The frame remains a mathematical description of the intended corrected state.

## 12.04 · Hadamard and changed geometry

Applying Hadamard to every data qubit exchanges X and Z checks on the same supports. The resulting state generally belongs to a code with exchanged check types and boundary roles.

To call the complete planar operation a logical Hadamard in the original architecture, specify how the new geometry is interpreted or restored. Depending on the protocol, that may involve relabeling, movement, or code deformation. It is not supplied by the symbol for transversal Hadamard alone.

A pre-existing Z frame becomes an X frame after logical Hadamard. Applying Hadamard to just one data qubit does not implement this logical transformation.

## 12.05 · Joint parity and entanglement

A joint parity measurement reveals whether two logical values agree. It preserves coherence between alternatives with the same parity, rather than resolving both individual values.

Starting with two logical plus states, either parity outcome produces an entangled Bell state after normalization. The outcome identifies which Bell state was obtained, so it must be retained for later interpretation.

Lattice surgery implements such logical parity measurements through temporary changes of local boundary checks. Repeated rounds protect the parity inference. The ideal projector states the target measurement; a concrete surgery needs its own merge, split, measurement, and decoding schedule.

## 12.06 · Entangling gates and Clifford structure

A logical CNOT has the same basis action and Pauli propagation rules as an ordinary CNOT, but acts on encoded qubits. Surgery protocols can realize it using joint parity measurements, an ancilla patch, and outcome-dependent corrections.

The conjugation rules provide a useful algebraic test of the intended Clifford action. They do not replace verification of the fault-tolerant measurement schedule.

Clifford operations preserve the Pauli group under conjugation, which makes frame tracking efficient. The T gate takes a Pauli outside that group, so a universal gate set requires additional resources beyond these Clifford operations.

## 12.07 · Ideal magic-state injection

An ideal magic state can be consumed to implement T using a CNOT, a measurement, and a conditional S correction. In the convention shown, the data qubit controls the CNOT and the magic-state ancilla is measured in Z.

One measurement branch applies T directly. The other applies its inverse up to phase, and the S correction converts it into T. This derivation states the circuit orientation so the feed-forward rule is unambiguous.

For protected surface-code computation, preparing the required encoded resource with sufficiently low error is a separate task. Injection and typically distillation address that task. The ideal circuit is not a proof that a noisy injected state produces a fault-tolerant T gate, and the conditional correction is Clifford rather than merely Pauli.

## 12.08 · Exercise and result

Explain the three requirements separately. Code preservation says valid inputs stay within a valid code space. Logical correctness says the transformation inside that space is the intended one. Fault tolerance says the implementation remains reliable under the declared physical faults.

A logical Z preserves the code space perfectly but would be wrong if the requested operation were identity. Conversely, an ideal circuit can implement the right gate while allowing one ancilla fault to spread into an uncorrectable error. These examples show why each requirement needs its own check.

## Maths

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
