---
lesson_id: qec-08
pane: math
paired_file: explanation.md
---

# 08 · Drawing boundaries and understanding topology

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
