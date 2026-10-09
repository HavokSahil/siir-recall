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
