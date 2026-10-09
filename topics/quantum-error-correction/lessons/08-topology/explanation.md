---
lesson_id: qec-08
pane: explanation
paired_file: math.md
---

# 08 · Drawing boundaries and understanding topology

## 08.01 · Relative chains

A chain is a set of edges with binary coefficients. Addition toggles membership: using an edge twice cancels it. Its boundary records vertices touched by an odd number of those edges.

Relative chains treat rough-boundary endpoints as zero in the boundary space. This allows an apparently open string to have zero measured boundary.

Drawing the boundary of an error means marking these checked endpoints. It does not mean outlining a region around the qubits. The three-edge example is an exact symbolic version of the original endpoint diagram.

## 08.02 · Stabilizer deformations

Multiplying an error by a face stabilizer toggles every edge around that face. A path using one edge can be replaced by the other three sides.

The syndrome is unchanged because a face boundary has no remaining boundary. More strongly, the new error has exactly the same action on the code. The visual path deformation is therefore a concrete stabilizer multiplication.

## 08.03 · Residual cycles and logical classes

A correction with matching endpoints makes the residual a cycle in the relative sense. The remaining question is whether that cycle is a sum of face boundaries.

If it is, the residual is a stabilizer and recovery succeeds in this error sector. If it is not, it represents a nontrivial homology class and changes the logical information.

This is the topology behind the normalizer-versus-stabilizer distinction. The chain language specializes the same algebra to a geometric code.

## 08.04 · Planar and closed surfaces

A disk has no ordinary noncontractible loops, yet a planar patch can encode a qubit. The missing ingredient is the relative boundary condition. A string connecting the two separate rough arcs is closed for the measured boundary operator and cannot be removed by face deformations.

The short homology calculation counts one independent such class. A torus instead has two independent ordinary loop directions and encodes two qubits.

For the disk with no holes considered here, a path whose endpoints lie on the same rough arc is relatively trivial. Boundary type and connectivity matter; arbitrary boundary-to-boundary paths are not all logical operators.

## 08.05 · Dual sector and intersection pairing

The X sector is naturally the cohomological partner of the Z-chain description. Geometrically it can be drawn as dual paths terminating at smooth boundaries.

Their intersection parity determines commutation. Changing either representative by a stabilizer leaves that parity unchanged, so the pairing depends on logical classes rather than drawing details.

For a general Pauli error, recovery must be trivial in both sectors. Fixing only the Z-chain homology is insufficient when an X component remains.

## 08.06 · Exercise and result

Draw a path and deform it around a face to make the first correction candidate. Then toggle a full rough-to-rough logical path to make a second candidate.

Both corrections match the measured endpoints. The first differs from the original by a stabilizer, while the second differs by that stabilizer plus a logical string. Matching endpoints is necessary for clearing the syndrome, but the residual class determines whether the repair succeeds.
