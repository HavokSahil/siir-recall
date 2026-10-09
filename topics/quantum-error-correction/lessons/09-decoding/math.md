---
lesson_id: qec-09
pane: math
paired_file: explanation.md
---

# 09 · Decoding from imperfect evidence

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
