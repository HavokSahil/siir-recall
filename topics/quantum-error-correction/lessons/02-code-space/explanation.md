---
lesson_id: qec-02
pane: explanation
paired_file: math.md
---

# 02 · Encoding into a code space

## 02.01 · Encoding isometry

An encoding selects a small subspace inside a larger physical Hilbert space. The isometry preserves inner products, so it preserves all distinctions among logical states.

The code space contains every allowed logical superposition. Its dimension is determined by the number of logical qubits. Adding physical qubits enlarges the surrounding space without increasing the amount of logical information being stored.

## 02.02 · Code projector

The projector describes membership in the code space without choosing a logical value. Applied to a valid codeword, it leaves the state unchanged.

An ideal yes-or-no measurement of this projector asks whether the system lies in the code space. It does not reveal which superposition within that space is present. Later, several commuting checks refine this question into a full syndrome.

## 02.03 · Repetition-code sectors

A bit flip moves the encoded state into another two-dimensional subspace. The original amplitudes remain attached to the two basis vectors in that new sector.

These four sectors are mutually orthogonal and fill the physical space. A measurement can identify the sector while leaving the unknown amplitudes intact. Applying the corresponding inverse bit flip then returns the state to the code space.

## 02.04 · Three kinds of error ambiguity

Two physical errors can act identically on every codeword. They can also reach the same subspace while acting differently on the logical state. Those are different forms of ambiguity.

The two-qubit Z stabilizer of the repetition code is harmless, whereas a single Z acts as a logical phase flip. Both leave the state inside the original code space.

A general coherent error can put the state into a superposition of syndrome sectors. The tidy picture of one error moving the state into one sector applies directly to Pauli errors; it is not a catalogue of every possible physical noise process.

## 02.05 · Exercise and result

Apply the middle-qubit bit flip to an arbitrary encoded state, then take its inner product with an arbitrary original codeword. Every computational basis overlap vanishes.

This proves orthogonality of the whole displaced subspace to the code space. It does not depend on choosing special amplitudes. The projector onto the displaced sector is obtained by conjugating the original projector by the bit flip.
