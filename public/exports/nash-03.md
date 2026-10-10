# Sperner's lemma and parity

*Proof of Nash equilibrium · sIIr recall*

Boundary constraints force an odd number of completely labeled cells.

## Explanation

## 03.01 · The statement and the base case

Sperner's lemma says that every properly labeled triangulation of a simplex contains an odd number of completely labeled top-dimensional cells. In particular, there is at least one.

We prove the stronger oddness statement by induction on dimension. The zero-dimensional simplex is a single point with its forced label, so the count starts at one. For a segment, the same phenomenon is visible as an odd number of changes between the two endpoint labels.

## 03.02 · Doors on the boundary

In dimension d, call a small face a door if it has all the labels except the last one. A boundary door can lie only on the original face opposite the last vertex. Any other boundary face forbids one of the labels a door needs.

The induced triangulation of that distinguished face is itself properly labeled. The induction hypothesis therefore says the number of boundary doors is odd.

## 03.03 · How many doors can a cell have?

A completely labeled cell has one door: delete the vertex with the last label. A cell that contains all the door labels but not the last label has exactly one repeated label and two doors: delete either copy.

Every remaining cell has no door. These three cases are exhaustive because a top-dimensional cell has exactly one more vertex than a door.

## 03.04 · Count incidences modulo two

Count pairs consisting of a cell and one of its doors. Counting by cells gives one contribution from each completely labeled cell and two from each cell with two doors.

Counting by doors gives two contributions from each interior door and one from each boundary door. Equating these counts and ignoring even terms proves the number of completely labeled cells is odd. This completes the induction.

## 03.05 · The walking interpretation

The tutorial explains the same count as walks through doors. Enter a cell from a boundary door. If it has two doors, leave through the other and cross into the adjacent cell. If it has one door, it is completely labeled and the walk ends.

Form a finite graph with one node per cell and one separate endpoint for each boundary door. Cell nodes have degree zero, one, or two. Its nontrivial components are paths or cycles. A path beginning at a boundary endpoint cannot get trapped in a cycle. Boundary-to-boundary paths pair endpoints; the odd boundary count leaves a path ending at a completely labeled cell. Other completely labeled endpoints pair with one another, preserving oddness.

## 03.06 · Exercise and result

For a small triangle, how many edges have labels zero and one? Labels zero, one, two give one door; zero, one, one give two; zero, zero, two give none. This enumeration drives the parity proof regardless of cell shape or size.

## Maths

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
