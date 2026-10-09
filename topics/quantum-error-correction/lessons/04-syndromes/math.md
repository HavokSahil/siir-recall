---
lesson_id: qec-04
pane: math
paired_file: explanation.md
---

# 04 · Errors become syndrome patterns

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
