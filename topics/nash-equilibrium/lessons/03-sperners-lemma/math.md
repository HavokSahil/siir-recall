---
lesson_id: nash-03
pane: math
paired_file: explanation.md
summary: Boundary constraints force an odd number of completely labeled cells.
---

# 03 · Sperner's lemma and parity

## 03.01 · The statement and the base case

Let $C_d$ count completely labeled $d$-cells. Sperner's lemma asserts
$$
C_d\equiv1\pmod2.
$$
For $d=0$, $C_0=1$. For a segment with successive labels $\ell_0=0,\ell_1,\ldots,\ell_r=1$,
$$
\#\{k:\ell_k\ne\ell_{k+1}\}\equiv\ell_r-\ell_0\equiv1\pmod2.
$$

## 03.02 · Doors on the boundary

For $d\ge1$, a door is a $(d-1)$-cell labeled $\{0,\ldots,d-1\}$. Write
$$
B_d=\#\{\text{boundary doors}\}.
$$
The original face opposite $x^j$ forbids label $j$. Thus a boundary door can lie only on
$$
T_{d-1}=\operatorname{conv}\{x^0,\ldots,x^{d-1}\}.
$$
Induction on its induced triangulation gives $B_d\equiv1\pmod2$.

## 03.03 · How many doors can a cell have?

Let $D(\sigma)$ be the number of doors of a $d$-cell $\sigma$. Then
$$
D(\sigma)=\begin{cases}
1,&\sigma\text{ has all labels }0,\ldots,d,\\
2,&\sigma\text{ has labels }0,\ldots,d-1\text{ with one repeated},\\
0,&\text{otherwise}.
\end{cases}
$$
In the second case a door must omit one of the two vertices with the repeated label. There are exactly two such choices.

## 03.04 · Count incidences modulo two

Let $I_d$ be the number of interior doors and $R_d$ the number of cells with two doors. A triangulation has one incident top cell at a boundary door and two at an interior door. Hence
$$
\sum_{\dim\sigma=d}D(\sigma)=C_d+2R_d=B_d+2I_d.
$$
Reducing modulo two,
$$
C_d\equiv B_d\equiv1\pmod2.
$$
Therefore $C_d\ge1$.

## 03.05 · The walking interpretation

Connect adjacent cell nodes across interior doors. Connect each boundary door's endpoint to its incident cell. Then
$$
\deg(\sigma)=D(\sigma)\in\{0,1,2\},\qquad
\deg(\text{boundary endpoint})=1.
$$
A finite graph of maximum degree two decomposes into isolated vertices, paths, and cycles. Degree-one endpoints occur in pairs along paths. The endpoints are exactly the $B_d$ boundary endpoints and the $C_d$ completely labeled cells, so
$$
B_d+C_d\equiv0\pmod2.
$$

## 03.06 · Exercise and result

For $d=2$, doors are edges with labels $\{0,1\}$:
$$
D(0,1,2)=1,\qquad D(0,1,1)=2,\qquad D(0,0,2)=0.
$$
