---
lesson_id: qec-03
pane: explanation
paired_file: math.md
---

# 03 · Stabilizers and safe questions

## 03.01 · Stabilizer group

Stabilizers are compatible questions whose answers are fixed for every valid logical state. Choose independent commuting Hermitian Pauli operators, each with required answer plus one.

Commutation makes the joint eigenvalue conditions compatible. Independence prevents counting the same constraint twice. Excluding minus identity prevents a condition that no nonzero state could satisfy. Anticommuting checks cannot both have a nonzero common plus-one eigenvector.

## 03.02 · Syndrome projectors and dimension

A syndrome is the list of check outcomes, with zero representing plus one and one representing minus one. Each projector selects one joint eigenspace.

Independent checks divide the physical space into equally sized orthogonal sectors. The all-zero sector is the code space. In the projector expansion, every nonidentity Pauli has zero trace, which gives the dimension directly.

If a measurement schedule includes redundant checks, their outcomes satisfy constraints; the count of independent generators is what determines the dimension.

## 03.03 · Ideal measurement preserves internal coherence

An ideal stabilizer measurement learns which sector contains the state. It does not distinguish logical amplitudes within that sector. A codeword therefore survives the measurement unchanged.

For a fixed Pauli error, the syndrome is determined by the error and is independent of the encoded amplitudes. This statement assumes an ideal check measurement. Faults in the ancilla circuit must be analyzed separately.

## 03.04 · Ancilla measurement of Z parity

Prepare the ancilla in zero. Each data qubit controls a CNOT into it. The ancilla flips once for each data one, so it stores only the parity.

Both components of an even-parity superposition leave the ancilla in the same state. Measuring that ancilla therefore does not reveal which even-parity component was present. Measuring the two data qubits individually would reveal more information and destroy their superposition.

## 03.05 · Ancilla measurement of X parity

For an X check, prepare the ancilla in plus and use it as the control of CNOTs into the data qubits. Measure the ancilla in the X basis.

The two possible results project the data onto the two eigenspaces of the X product. The ancilla direction matters: this circuit is the complementary construction to the Z-parity circuit. Its ideal action does not by itself establish fault tolerance.

## 03.06 · Exercise and result

Both repetition-code parity checks return plus one on both logical basis states. Their outcomes therefore cannot distinguish the logical basis values.

Measuring the first data qubit in Z does distinguish them. For a general encoded superposition it selects one logical branch. The difference is the information the question reveals, even though all three observables are built from Z operators.
