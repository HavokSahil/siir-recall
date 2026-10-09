---
lesson_id: qec-05
pane: explanation
paired_file: math.md
---

# 05 · Equivalent errors and ambiguous evidence

## 05.01 · Stabilizers and the normalizer

Within the Pauli group, preserving the stabilizer code space is equivalent to commuting with every stabilizer. The Pauli normalizer and centralizer agree here: conjugation by a Pauli only changes another Pauli's sign, and the stabilizer group cannot contain both signs of an element.

An operator in this normalizer can still change the encoded information. The normalizer describes all syndrome-invisible Pauli actions; the stabilizer describes the harmless ones. We explicitly include irrelevant global phases when comparing physical error actions.

## 05.02 · Two equivalence relations

Errors are equivalent on the code when their difference is a stabilizer, up to phase. A decoder may freely substitute one for the other.

Having the same syndrome is a weaker condition. The difference may be a logical operator rather than a stabilizer. Both errors then lead to the same measured sector while carrying different logical information inside it.

The binary version removes phase bookkeeping and makes the distinction two membership tests: one in the stabilizer subspace, the other in its symplectic orthogonal complement.

## 05.03 · Logical Pauli classes

Quotienting by stabilizers groups together physical operators that implement the same logical Pauli. There are four phase-free Pauli choices for each encoded qubit.

Although overall phases are omitted from the classes, their commutation relations still matter. The inherited symplectic pairing records which logical representatives anticommute. A logical X and Z for the same encoded qubit have an odd pairing.

## 05.04 · Correction and the residual

Recovery is judged by the combination of the actual error and the chosen correction. This combined operator is the residual.

A syndrome-matching correction guarantees that the residual is in the normalizer. Success requires the stronger result that it is a stabilizer. Logical X and Z indicators can be computed by testing the residual against representative logical operators.

A nontrivial logical Pauli can leave one special input eigenstate unchanged. That does not make it a successful quantum memory operation, because the requirement is to preserve every encoded state and its external entanglement.

## 05.05 · Knill–Laflamme condition

The general exact-correction criterion covers arbitrary channels, including coherent errors and degenerate codes. Every pairwise error overlap, restricted to the code space, must be a scalar times the identity there.

The environment formulation explains why. Under this condition, the environment's resulting state does not depend on the logical input. It has learned about the error process without acquiring the encoded information. Degeneracy is allowed: distinct error labels do not need distinct observable outcomes.

## 05.06 · Exercise and result

When the actual error flips the first two qubits, a decoder that flips the third qubit clears both checks. But it has completed the triple-X logical operator.

This is why passing all checks is weaker evidence than preserving the logical information. The syndrome tells us whether the state has returned to the code space; it does not certify that it returned to the same logical state.
