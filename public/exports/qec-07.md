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
