---
lesson_id: qec-03
pane: math
paired_file: explanation.md
---

# 03 · Stabilizers and safe questions

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
