---
lesson_id: qec-06
pane: explanation
paired_file: math.md
---

# 06 · Distance and the limits of recovery

## 06.01 · Weight and distance

Weight counts physical qubits on which the error acts nontrivially. A Y has weight one, even though it has both binary components.

Distance is the smallest weight of a syndrome-invisible operator with a nontrivial logical action. A low-weight stabilizer does not reduce distance, since it leaves every codeword unchanged. The three code parameters count physical data qubits, logical qubits, and this minimum logical weight.

## 06.02 · Detection below the distance

Every Pauli error below the distance is either harmless on the code or detectable by a syndrome. “Detectable” does not mean that a harmless stabilizer must set off an alarm.

The zero sandwich in the math pane means the error moves the entire code space into an orthogonal sector. The scalar sandwich means it cannot distinguish or change the logical state, except for an irrelevant overall phase.

## 06.03 · Guaranteed correction and its proof

Correction must distinguish between pairs of possible errors. Two errors each affecting at most a given number of qubits can differ on twice as many qubits. If that combined weight is still below distance, any same-syndrome ambiguity is harmless.

This argument proves existence of a recovery that corrects the whole allowed set, including its linear span. It does not guarantee that an arbitrary implementation or decoder achieves the bound.

To see why the worst-case guarantee ends there, divide a minimum logical operator into two pieces. Those pieces have the same syndrome but differ logically, so one syndrome-only decision cannot repair both.

## 06.04 · Restricted noise and asymmetric distance

A code can protect one error component much better than the other. For CSS codes, the separate X and Z distances state those strengths explicitly.

The repetition code has a length-three logical X but a weight-one logical Z. Its ability to correct a single bit flip is therefore consistent with having quantum distance one. The general quantum-distance guarantee covers arbitrary qubit errors, not only the noise type the repetition code handles well.

## 06.05 · Known errors and erasures

A known Pauli error can always be inverted, even if its weight is large. The difficulty in decoding is uncertainty about which error occurred.

For erasures, the affected positions are known. Comparing two candidate errors then stays within the same erased set instead of combining two unknown supports. This is why every set of fewer than distance-many erased qubits is correctable. Some larger patterns are also correctable when they contain no complete logical support.

## 06.06 · Exercise and result

Explain the repetition-code exception using its unequal X and Z distances. Then distinguish three claims: a decoder chose the wrong logical class, syndrome information cannot distinguish two possibilities, and information has become inaccessible to the available recovery operation.

These are different meanings sometimes compressed into “unrecoverable.” Weight above the guaranteed correction radius means failure becomes possible. It does not make every such error fail; a stabilizer of that weight is already harmless.
