---
lesson_id: qec-07
pane: explanation
paired_file: math.md
---

# 07 · Building a surface-code patch

## 07.01 · Cellulation and boundary convention

Use the source notes' unrotated convention: data qubits lie on edges, X checks sit at vertices, and Z checks sit on faces. The planar patch has two opposite rough boundaries and two opposite smooth boundaries.

At a rough boundary a Z string may end without a measured vertex defect. At a smooth boundary the corresponding statement holds for an X string on the dual lattice.

The relative-chain formulation makes this boundary rule precise. Cells belonging to the rough boundary are removed from the relevant relative chain groups. It specifies a compatible code construction; simply clipping arbitrary checks from a square drawing need not do so.

## 07.02 · Local checks commute

Each bulk check involves four nearby data qubits. A vertex and an adjacent face share two edges. Each shared edge contributes a minus sign when X and Z are exchanged, so the two signs cancel.

Boundary supports are modified consistently with the cellulation and boundary type. The matrix identity guarantees commutation throughout the patch. The rank formula counts the logical degrees of freedom left after all independent constraints.

## 07.03 · Primal and dual error strings

A Z chain follows edges of the primal lattice. Its measured defects occur at vertices with odd incidence. Interior vertices touched by two chain edges contribute twice and cancel.

X chains are drawn on dual edges crossing the data edges. Their defects appear at face checks. The primal and dual pictures describe the two components of the same physical Pauli error; Y contributes to both.

## 07.04 · Logical strings and distance

A Z string joining the two distinct rough boundaries can carry the logical Z action. A dual X string joining the two distinct smooth boundaries can carry logical X. Choose representatives that cross once; their physical supports overlap on one qubit, so they anticommute.

Distance is the shortest nontrivial representative, not the length of whichever string was drawn first. Rectangular patches can have unequal distances in the two error sectors.

## 07.05 · Rotated patches and measurement hardware

The rotated layout packs the same kind of topological protection into a different geometry. In the usual odd-distance square patch, there is one logical qubit, a square array of data qubits, four-body interior checks, and two-body boundary checks.

The code parameters count data qubits. Measurement ancillas are additional hardware. The total shown assumes one dedicated ancilla per check; it is a hardware convention rather than a universal total including routing or other support qubits.

Do not carry edge coordinates or boundary supports from an unrotated drawing straight into a rotated implementation. The algebraic check matrices must match the chosen geometry.

## 07.06 · Exercise and result

Track a Z chain as a second edge is added. The shared interior vertex loses its defect because the two anticommutations cancel.

If one endpoint lies on the rough boundary, only the other endpoint appears in the measured syndrome. A single visible defect is therefore a legitimate pattern. It is not evidence that a second defect was accidentally omitted.
