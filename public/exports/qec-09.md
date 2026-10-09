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
