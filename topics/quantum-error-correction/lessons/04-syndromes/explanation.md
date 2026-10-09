---
lesson_id: qec-04
pane: explanation
paired_file: math.md
---

# 04 · Errors become syndrome patterns

## 04.01 · Pauli expansion and correctable spans

Pauli operators form a basis for all operators, so they give us a finite language for describing continuous physical errors. The correction condition must hold for every pair of errors in the chosen set. When it does, it also holds for linear combinations of those errors.

This does not turn every channel into a classical random Pauli. A general channel contains cross terms between Pauli components. Such coherent terms disappear only under additional assumptions or an explicit approximation.

## 04.02 · Anticommutation produces the syndrome

A Pauli error flips exactly the checks it anticommutes with. The derivation simply moves the check past the error and then uses the fact that the original state was stabilized.

Composing two Pauli errors adds their syndrome bits modulo two. A check flipped twice returns to its original sign. This cancellation is the algebra behind the endpoints of error strings.

## 04.03 · Binary symplectic representation

Represent each qubit by two bits recording its X and Z components. A Y error has both bits set. We ignore overall Pauli phase in this representation because it does not affect a standalone error's syndrome or logical class.

The symplectic matrix swaps the two halves so that X components are compared against Z components. One matrix multiplication then computes the syndrome. The check-commutation condition uses the same pairing.

## 04.04 · CSS specialization

CSS codes separate the checks into pure X and pure Z products. X checks detect the Z component of an error, and Z checks detect its X component.

The subscripts on syndrome vectors here name the measured check type. Keeping that convention explicit prevents a common mix-up when building two decoding graphs. The equation relating the check matrices says every X check overlaps every Z check on an even number of qubits.

## 04.05 · Noise assumptions

A noise parameter needs a convention. Here depolarizing probability means the total probability of a nonidentity Pauli, divided equally among X, Y, and Z.

Even if different qubits are independent, the X and Z components on the same qubit generally are not: Y contributes to both. Independent decoding of those components can therefore discard useful information.

Readout noise flips a reported syndrome bit. Circuit noise acts at physical operation locations and can propagate through subsequent gates. These models describe different experiments.

## 04.06 · Exercise and result

Use the two-row parity-check matrix to reproduce the repetition-code syndrome table. Adding the first- and second-qubit syndromes leaves the same result as a flip on the third qubit.

This is the first explicit example of different physical errors with identical evidence. Also notice that a phase flip produces zero syndrome despite changing the logical state.
