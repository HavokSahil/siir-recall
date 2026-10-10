---
lesson_id: nash-03
pane: explanation
paired_file: math.md
summary: Boundary constraints force an odd number of completely labeled cells.
---

# 03 · Sperner's lemma and parity

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
