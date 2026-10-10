# Shared notation and assumptions

Every game has finitely many players, each with a finite, nonempty action set and real-valued payoffs. Players randomize independently. Utilities of random outcomes are expected utilities.

| Symbol | Meaning |
|---|---|
| $N=\{1,\ldots,n\}$ | Players |
| $A_i$, $A=\prod_i A_i$ | Player $i$'s actions and the pure-profile set |
| $a$, $a_i$ | Pure profile and an individual action |
| $S_i=\Delta_{|A_i|-1}$ | Player $i$'s probability simplex |
| $S=\prod_i S_i$ | Mixed-strategy profiles |
| $s_i(a_i)$ | Probability of action $a_i$ |
| $s_{-i}$ | Strategies of all players other than $i$ |
| $u_i(a)$, $u_i(s)$ | Pure-profile payoff and its expected extension |
| $u_i(a_i,s_{-i})$ | Payoff from choosing $a_i$ against $s_{-i}$ |
| $\operatorname{supp}(s_i)$ | Actions assigned strictly positive probability |
| $\Delta_d$ | Standard $d$-simplex in $\mathbb R^{d+1}$ |
| $\lambda_j$, $e_j$ | Barycentric coordinates and simplex vertices |
| $\chi(v)$ | Indices of positive barycentric coordinates of $v$ |
| $L(v)$ | Label of a triangulation vertex |
| $\delta_k$ | Largest diameter of a cell in triangulation $k$ |
| $p^{k,j}$, $c_k$ | Vertex labeled $j$ and centroid of a selected cell |
| $h$ | Homeomorphism between equal-dimensional polytopes |
| $\varphi_{i,a_i}(s)$ | Positive part of the gain from a pure deviation |
| $\Phi_i(s)$ | Sum of player $i$'s positive deviation gains |
| $F:S\to S$ | Nash's continuous probability-update map |

Simplex coordinates use $j=0,\ldots,d$; player indices use $i=1,\ldots,n$. Superscripts in $p^{k,j}$ identify vertices, not powers. All norms are Euclidean. Interior means relative interior until a set has been identified with its full-dimensional affine coordinates.

A mixed profile is a product of individual distributions. An arbitrary joint distribution on $A$ can encode correlation and is a different object. Nash equilibrium tests unilateral deviations while opponents' strategies remain fixed.
