# Provenance and further reading

## Input and transformation

Source: the user-supplied `quantum-error-correction-markdown.zip`, containing `01-qec-01.md` through `12-qec-12.md`.

This edition retains all twelve lesson titles and their order, their core examples, their conceptual distinctions, and their check-your-understanding questions. Each lesson is rewritten as a mathematical pane and a verbal pane with identical section headings. Exercise results are supplied in the final aligned section; they are not hidden quiz answers.

This is a substantive mathematical rewrite, rather than an automatic extraction of formulas. Added detail includes the reference-system recovery criterion, projector identities, a phase-explicit stabilizer convention, binary logical-class tests, the distance proof, relative homology and its dual pairing, explicit logical-class likelihood sums, spacetime detector equations, statistical intervals, and an ideal magic-state injection derivation. These additions state their assumptions and are not full engineering specifications for fault-tolerant circuits.

The archive preserves the unrotated boundary convention of the supplied notes. It does not claim compatibility with an unseen rotated-code implementation or its coordinate conventions.

## Reading map

| Lessons | Further reading | Use |
|---|---|---|
| 1–6 | [Joschka Roffe, Quantum Error Correction: An Introductory Guide](https://arxiv.org/abs/1907.11157) | Introductory account of encoding, stabilizers, and recovery; retained from the source notes |
| 1–6, 12 | [Daniel Gottesman, Stabilizer Codes and Quantum Error Correction](https://arxiv.org/abs/quant-ph/9705052) | Stabilizer and logical-operator formalism; retained from the source notes |
| 7–12 | [Fowler et al., Surface codes: Towards practical large-scale quantum computation](https://arxiv.org/abs/1208.0928) | Surface-code checks, recovery, and architecture; retained from the source notes |
| 7–8, 12 | [Horsman et al., Surface code quantum computing by lattice surgery](https://arxiv.org/abs/1111.4022) | Planar layouts and surgery; retained from the source notes |
| 8–11 | [Dennis et al., Topological quantum memory](https://arxiv.org/abs/quant-ph/0110143) | Additional reading on homology, recovery, and asymptotic protection |

The equations and explanations in this edition are independently written pedagogical derivations. Notation and boundary labels are fixed by `NOTATION.md`; papers may use different conventions. The threshold scaling expressions are labeled conditional models or heuristics, not numerical threshold claims.
