---
lesson_id: qec-12
pane: explanation
paired_file: math.md
---

# 12 · Computing while remaining protected

## 12.01 · Logical implementation

An ideal logical implementation must produce the intended operation on every encoded input. If the protocol changes the geometry, the output encoding may differ from the input encoding.

Preserving the code space alone is a weaker claim: many different logical gates preserve the same space. The equation specifying the logical action identifies which gate was implemented.

A measurement-based gate has several outcome branches. After their prescribed corrections, all branches must realize the same logical operation, with branch amplitudes independent of the unknown logical input.

## 12.02 · Fault tolerance is an additional condition

Fault tolerance concerns what happens when faults occur during the gate, possibly in addition to errors already present. A noiseless gate identity cannot answer that question.

The mathematical pane gives one sufficient test for a fully specified gadget: allowed input errors and allowed fault branches must still yield the intended logical operation after the prescribed frame update and ideal output recovery. The scalar allows an unnormalized measurement or fault branch.

Actual fault-tolerance definitions vary with the gadget and noise model. State which input errors, fault locations, correlated fault mechanisms, and output recovery are covered. A spatial string representing a gate does not supply this circuit-level analysis.

## 12.03 · Logical Paulis and frame updates

A representative logical string implements a logical Pauli. It has the same physical form as an undetected logical error; the difference is whether that transformation is intended and included in the computation's record.

A logical Pauli can often be implemented by updating the frame rather than pulsing every data qubit. That changes how subsequent operations and measurements are interpreted. The frame remains a mathematical description of the intended corrected state.

## 12.04 · Hadamard and changed geometry

Applying Hadamard to every data qubit exchanges X and Z checks on the same supports. The resulting state generally belongs to a code with exchanged check types and boundary roles.

To call the complete planar operation a logical Hadamard in the original architecture, specify how the new geometry is interpreted or restored. Depending on the protocol, that may involve relabeling, movement, or code deformation. It is not supplied by the symbol for transversal Hadamard alone.

A pre-existing Z frame becomes an X frame after logical Hadamard. Applying Hadamard to just one data qubit does not implement this logical transformation.

## 12.05 · Joint parity and entanglement

A joint parity measurement reveals whether two logical values agree. It preserves coherence between alternatives with the same parity, rather than resolving both individual values.

Starting with two logical plus states, either parity outcome produces an entangled Bell state after normalization. The outcome identifies which Bell state was obtained, so it must be retained for later interpretation.

Lattice surgery implements such logical parity measurements through temporary changes of local boundary checks. Repeated rounds protect the parity inference. The ideal projector states the target measurement; a concrete surgery needs its own merge, split, measurement, and decoding schedule.

## 12.06 · Entangling gates and Clifford structure

A logical CNOT has the same basis action and Pauli propagation rules as an ordinary CNOT, but acts on encoded qubits. Surgery protocols can realize it using joint parity measurements, an ancilla patch, and outcome-dependent corrections.

The conjugation rules provide a useful algebraic test of the intended Clifford action. They do not replace verification of the fault-tolerant measurement schedule.

Clifford operations preserve the Pauli group under conjugation, which makes frame tracking efficient. The T gate takes a Pauli outside that group, so a universal gate set requires additional resources beyond these Clifford operations.

## 12.07 · Ideal magic-state injection

An ideal magic state can be consumed to implement T using a CNOT, a measurement, and a conditional S correction. In the convention shown, the data qubit controls the CNOT and the magic-state ancilla is measured in Z.

One measurement branch applies T directly. The other applies its inverse up to phase, and the S correction converts it into T. This derivation states the circuit orientation so the feed-forward rule is unambiguous.

For protected surface-code computation, preparing the required encoded resource with sufficiently low error is a separate task. Injection and typically distillation address that task. The ideal circuit is not a proof that a noisy injected state produces a fault-tolerant T gate, and the conditional correction is Clifford rather than merely Pauli.

## 12.08 · Exercise and result

Explain the three requirements separately. Code preservation says valid inputs stay within a valid code space. Logical correctness says the transformation inside that space is the intended one. Fault tolerance says the implementation remains reliable under the declared physical faults.

A logical Z preserves the code space perfectly but would be wrong if the requested operation were identity. Conversely, an ideal circuit can implement the right gate while allowing one ancilla fault to spread into an uncorrectable error. These examples show why each requirement needs its own check.
