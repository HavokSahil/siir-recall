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
