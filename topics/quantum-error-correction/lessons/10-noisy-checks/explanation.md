---
lesson_id: qec-10
pane: explanation
paired_file: math.md
---

# 10 · When the checks themselves are noisy

## 10.01 · Stationary repeated measurements

With faulty readout, a single negative check result could come from the data or from the measurement. Repeating fixed checks lets us compare neighboring rounds.

The detector record measures changes, not the current error itself. The equation separates new data faults from measurement errors in the current and previous rounds. A pre-existing data error does not keep producing fresh events forever.

The first round needs a known reference or a specified initialization rule. Arbitrarily setting it to zero would invent evidence if the initial syndrome were unknown.

## 10.02 · Spatial and temporal signatures

A persistent data error changes the true syndrome when it arrives. Adjacent-round differences register its onset; later identical outcomes cancel.

One bad measurement creates a false change when it appears and another when the next correct readout returns. These neighboring-time events suggest a temporal edge. A data fault with two spatial endpoints suggests a spatial edge in the simplified graph.

A fault near the start or end may have only one visible endpoint, depending on the experiment's time boundary.

## 10.03 · General detectors and time boundaries

A general detector is a parity of recorded measurements that has a known result in the ideal experiment. Adjacent rounds of one fixed check are only one example.

Initialization, final data measurements, changed checks, and logical gate operations determine which parities are valid. Some final readouts reveal one logical observable while leaving its conjugate unmeasured.

In circuit decoding, the output can be a predicted logical-observable flip rather than an explicit physical correction path. Detector incidence and observable labels must come from the same circuit model.

## 10.04 · Three levels of noise

Code-capacity experiments isolate data-error decoding by assuming perfect checks. Phenomenological models add simplified readout errors without simulating every syndrome-extraction gate.

Circuit-level models place faults at the actual physical operations. Their detector patterns include propagation and timing effects. An error probability in one model generally does not describe the same physical quantity as the same numerical value in another, so their thresholds need separate labels.

## 10.05 · CNOT propagation and hook errors

CNOT spreads an X on its control to its target, and a Z on its target back to its control. The complementary Pauli directions do not spread in the same way.

A syndrome ancilla interacts with several data qubits, so one ancilla fault can produce a correlated data pattern. Such hook errors can make a logical direction easier to damage than a count of data-qubit distance alone suggests.

The order of check interactions determines the geometry of these correlated patterns. A fault-tolerant schedule must analyze them rather than assuming the ideal stabilizer weight tells the whole story.

## 10.06 · Space, time, and fault distance

Spatial code distance is not the entire protection of a noisy measurement experiment. A damaging fault pattern may exploit time boundaries or repeated faulty readout as well as a path across the patch.

The fault-distance definition counts the fewest modeled fault mechanisms that can change the tracked logical observable while producing no detectors. It depends on the circuit and the allowed faults.

Many surface-code protocols use a number of rounds proportional to spatial distance so temporal protection scales too. The required constant and boundary handling belong to the specific memory or gate protocol.

## 10.07 · Exercise and result

Insert one flipped readout into five ideal zero outcomes. The detector fires when that wrong value appears and again when it disappears.

The two displayed result lists differ only in whether the known initial reference is included. Stating that convention avoids an apparent off-by-one disagreement in a simulator.
