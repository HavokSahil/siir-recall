---
lesson_id: qec-01
pane: math
paired_file: explanation.md
---

# 01 · The information we want to preserve

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
