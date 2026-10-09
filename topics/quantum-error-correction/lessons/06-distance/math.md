---
lesson_id: qec-06
pane: math
paired_file: explanation.md
---

# 06 · Distance and the limits of recovery

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
