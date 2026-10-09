---
lesson_id: qec-01
pane: explanation
paired_file: math.md
---

# 01 · The information we want to preserve

## 01.01 · An unknown quantum state

Preserving a qubit means preserving its whole state. Its populations determine computational-basis measurement probabilities; its coherence carries the relative phase that affects other measurements. Measuring in the computational basis and keeping the answer preserves only part of this information.

The off-diagonal entries of the density matrix make the missing information explicit. Removing them can change the quantum state even when the probabilities of zero and one stay unchanged.

## 01.02 · Preservation includes external entanglement

The stored qubit may be entangled with another system. A successful memory must preserve those correlations as well. The reference system in the equation represents anything outside the device; recovery acts only on the encoded qubit.

For example, one half of a Bell pair looks individually maximally mixed both before and after dephasing. Yet the joint state has lost its entanglement. Checking only the local populations would miss this failure.

## 01.03 · No-cloning

A unitary preserves inner products. If it copied every state, the overlap between two possible inputs would have to equal the square of that overlap. Distinct nonorthogonal states violate that requirement.

A device can copy the labels of orthogonal basis states. Applied to a superposition, that same device creates correlations between its outputs. Linearity determines this behavior: it does not create two independent copies of the unknown input.

## 01.04 · Encoding through correlations

The repetition encoding places the amplitudes in two collective states of three qubits. Each individual physical qubit has lost access to the original relative phase; the full encoded system still carries it.

This is the redundancy quantum error correction can use. Correlations let us ask whether qubits agree without asking which logical value the state contains. Encoding a plus state gives a GHZ state.

## 01.05 · What this first code protects

The two parity checks distinguish no bit flip from a bit flip on each of the three positions. Under that restricted error model, the syndrome tells us how to repair the state.

A phase flip on one qubit is different: it changes the logical relative phase while leaving both parities unchanged. Thus this code corrects a single bit flip, but it does not correct arbitrary single-qubit noise. Its quantum distance is only one.

## 01.06 · Exercise and result

Ask why the plus-phase and minus-phase encoded states have identical computational-basis probabilities. Those probabilities depend on squared amplitude magnitudes, which ignore the sign.

The triple-X measurement can distinguish their coherence when the relevant real part is nonzero. For the encoded plus and minus states, its outcomes are opposite and deterministic. Measuring every data qubit in the computational basis destroys this distinction; measuring only the stabilizer parities preserves it.
