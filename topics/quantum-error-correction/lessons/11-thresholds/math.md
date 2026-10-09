---
lesson_id: qec-11
pane: math
paired_file: explanation.md
---

# 11 · Thresholds and scaling protection

## 11.01 · Specify the logical failure event

Fix family $\{\mathcal C_d\}$, noise $\mathcal N_p$, protocol with $T$ rounds, and decoder $\mathcal D$.
$$
(\lambda_X,\lambda_Z)\in\mathbb F_2^2,
$$
$$
P_{L,X}=\Pr(\lambda_X=1),\quad P_{L,Z}=\Pr(\lambda_Z=1),
$$
$$
P_{L,\rm any}=\Pr((\lambda_X,\lambda_Z)\ne(0,0))
=P_{L,X}+P_{L,Z}-\Pr(\lambda_X=\lambda_Z=1).
$$
Logical $\bar Z$ readout detects $\lambda_X$; logical $\bar X$ readout detects $\lambda_Z$.
$$
P_L=P_L(p,d,T;\mathcal N,\mathcal D,\text{protocol},\text{failure event}).
$$

## 11.02 · A threshold for a specified scaling experiment

Fix a time-scaling rule $T=T(d)$ and write $P_L^*(p,d)=P_L(p,d,T(d))$.
$$
p_{\rm th}:=\sup\left\{p_0\in[0,1]:\ \forall p\in[0,p_0),\
\lim_{d\to\infty}P_L^*(p,d)=0\right\}.
$$
A possible below-threshold bound:
$$
P_L^*(p,d)\le A(p)e^{-\alpha(p)d},\qquad \alpha(p)>0.
$$
If $P_L(p,d,T)\le T A(p)e^{-\alpha(p)d}$ and $T(d)=O(d^a)$:
$$
\lim_{d\to\infty}P_L(p,d,T(d))=0.
$$

## 11.03 · Finite-size crossings

Conditional finite-size scaling ansatz, fixed protocol aspect ratios:
$$
P_L^*(p,d)\approx F\bigl((p-p_{\rm th})d^{1/\nu}\bigr)
+d^{-\omega}G\bigl((p-p_{\rm th})d^{1/\nu}\bigr),\quad\nu,\omega>0.
$$
$$
P_L^*(p_{\rm th},d)\approx F(0)+d^{-\omega}G(0).
$$
$$
P_L^*(p,d_1)=P_L^*(p,d_2)
\quad\centernot\Longrightarrow\quad p=p_{\rm th}.
$$

## 11.04 · Low-noise behavior

For a fixed finite stochastic fault model with finitely many locations,
$$
P_L(p)=\sum_{u:\text{failure}}p^{|u|}(1-p)^{M-|u|}
\quad\text{(equal independent binary probabilities)}.
$$
If $w_{\min}$ is the minimum failing fault weight:
$$
P_L(p)=a_{w_{\min}}p^{w_{\min}}+O(p^{w_{\min}+1})\quad(p\to0).
$$
If all errors of weight $\le t$ are corrected and some weight-$t+1$ errors fail:
$$
w_{\min}=t+1,\qquad t=(d-1)/2\quad(d\text{ odd}).
$$
Common heuristic:
$$
P_L\approx A\left(\frac p{p_{\rm th}}\right)^{(d+1)/2}.
$$

## 11.05 · Sampling and uncertainty

Independent identical trials:
$$
F\sim\operatorname{Binomial}(N,P_L),\qquad\hat P_L=f/N,
\qquad\operatorname{Var}(\hat P_L)=P_L(1-P_L)/N.
$$
Wilson interval, normal quantile $z$:
$$
c=\frac{\hat P_L+z^2/(2N)}{1+z^2/N},\qquad
h=\frac{z\sqrt{\hat P_L(1-\hat P_L)/N+z^2/(4N^2)}}{1+z^2/N},
\quad[c-h,c+h].
$$
For $f=0$, exact one-sided confidence $1-\alpha$ upper bound:
$$
(1-P_U)^N=\alpha\implies
P_U=1-\alpha^{1/N}\approx-\log(\alpha)/N.
$$
$$
\alpha=0.05:\quad P_U\approx2.9957/N.
$$

## 11.06 · Per-round and per-experiment quantities

Independent flips of one logical parity, probability $q$ each round:
$$
\Pr(\text{odd number of flips in }T)
=\frac{1-(1-2q)^T}{2}.
$$
$$
\Pr(\text{at least one flip in }T)=1-(1-q)^T.
$$
$$
qT\ll1\implies
\frac{1-(1-2q)^T}{2}\approx Tq,
\qquad 1-(1-q)^T\approx Tq.
$$
Reproducibility record:
$$
(\text{code/circuit},d,T,\text{noise convention},p,\text{decoder/version},
\text{seeds},N,f,\text{failure event},\text{interval method}).
$$

## 11.07 · Exercise and result

$$
q_3=q_5=q,\qquad
P_3=\frac{1-(1-2q)^3}{2},\quad
P_5=\frac{1-(1-2q)^{100}}{2}.
$$
$$
q\ll1/100\implies P_3\approx3q,\quad P_5\approx100q,
\quad P_5/P_3\approx100/3.
$$
