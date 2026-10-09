---
lesson_id: qec-07
pane: math
paired_file: explanation.md
---

# 07 · Building a surface-code patch

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
