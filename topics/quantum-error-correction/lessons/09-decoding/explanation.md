---
lesson_id: qec-09
pane: explanation
paired_file: math.md
---

# 09 · Decoding from imperfect evidence

## 09.01 · Inference from a syndrome

The decoder sees a syndrome and combines it with a noise model. Maximum a posteriori error inference chooses the most probable compatible physical error.

The correction is the inverse of that estimate. It can succeed even when the estimate is not the actual error, provided their difference is a stabilizer. All probability formulas in this lesson assume a stochastic Pauli model; they do not directly describe coherent superpositions of physical errors.

## 09.02 · Logical-class inference

All errors compatible with a syndrome split into logical classes. Errors within a class differ by stabilizers and admit the same successful recovery action.

To optimize the probability of preserving arbitrary logical information, sum the probabilities of every physical error in each class and choose the largest total. This can differ from choosing the single most probable error: many moderately likely errors may together outweigh one especially likely representative.

The choice of reference error changes the labels assigned to the classes, not the physical recovery problem.

## 09.03 · Independent faults become additive weights

Independent binary faults turn likelihood into a sum of edge costs. A rare fault gets a large positive cost; a more likely fault gets a smaller one. Uniform probabilities below one half reduce the objective to counting faults.

This derivation explains minimum weight. It also states its assumptions. Correlated faults generally do not factor into these independent costs, and optimizing a most likely fault configuration need not optimize the summed probability of a logical class.

## 09.04 · Graphlike models and matching

For a graphlike model, a fault has two measured endpoints, one endpoint and a permitted boundary, or no measured endpoints. The decoding task asks for an edge set with the observed odd-degree vertices.

A boundary-aware matching construction pairs defects with other defects or with legal boundaries. Shortest-path distances provide the pairing costs. Expanding the chosen pairings and adding paths modulo two produces a candidate fault chain.

Boundary nodes need the proper matching construction, such as virtual copies; one ordinary boundary vertex cannot simply be forced to accept only one defect. Fault labels must also track effects on logical observables. A zero-endpoint fault can still be logically harmful even though the detector record cannot locate it.

## 09.05 · Model limitations and correlated components

Decoding the two CSS components independently is convenient, but Y errors correlate them. A decoder using those correlations can make a different inference.

Some circuit faults create more than two detector events. Representing such a fault as unrelated graph edges can change its probability structure. Correlation-aware matching methods or other decoding approaches are needed when the simple independent graph model is inadequate.

Even under the correct model, an optimal decoder can fail on a particular sample. It chooses from incomplete evidence rather than observing the hidden fault directly.

## 09.06 · Pauli frame

A Pauli frame records the correction in classical software instead of applying it immediately to the hardware. To remain equivalent, later gates and measurement outcomes must be interpreted using the frame.

Clifford gates map Paulis to Paulis, so their frame update is especially simple. For a Pauli measurement, an anticommuting frame flips the interpretation of its sign. A deferred correction remains part of the computation.

## 09.07 · Exercise and result

The third-qubit flip is more likely than the first-two-qubit flip when the physical bit-flip probability is below one half. It is therefore the sensible correction for this syndrome.

Nevertheless, the two-flip event sometimes happens. The decoder then applies the wrong logical class. The final formula counts all two- and three-flip patterns, which are precisely the failures of this restricted repetition-code decoder.
