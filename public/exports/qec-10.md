# When the checks themselves are noisy

*Quantum error correction · sIIr recall*

## Explanation

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

## Maths

## 10.01 · Stationary repeated measurements

Assumptions: fixed checks, Pauli data faults, binary readout noise, discrete rounds.
$$
e_t=e_{t-1}+f_t,\qquad s_t=HJe_t,\qquad
m_t=s_t+\eta_t\quad(\mathbb F_2).
$$
$$
d_t:=m_t+m_{t-1}=HJf_t+\eta_t+\eta_{t-1}.
$$
For an initialized known syndrome:
$$
m_0=s_0\quad\text{if the initial reference is noiseless and known}.
$$

## 10.02 · Spatial and temporal signatures

Single data fault $f_\tau=f$, $f_t=0$ for $t\ne\tau$, $\eta_t=0$:
$$
d_\tau=HJf,\qquad d_t=0\quad(t\ne\tau).
$$
Single readout fault at check $a$, round $\tau$:
$$
\eta_\tau=\mathbf e_a,\quad\eta_t=0\ (t\ne\tau),\quad f_t=0,
$$
$$
d_\tau=\mathbf e_a,\quad d_{\tau+1}=\mathbf e_a,
\quad d_t=0\ (t\notin\{\tau,\tau+1\}).
$$

## 10.03 · General detectors and time boundaries

For measurement-record bits $m_j$ and a deterministic ideal parity $b_D$:
$$
d_D=b_D\oplus\bigoplus_{j\in D}m_j,
\qquad \bigoplus_{j\in D}m_j^{\rm ideal}=b_D.
$$
$$
d=B_{\rm det}u,\qquad \lambda=L_{\rm obs}u
\quad\text{for a specified binary fault model}.
$$
$$
\hat u=\mathcal D(d),\qquad
\lambda_{\rm residual}=L_{\rm obs}(u+\hat u).
$$

## 10.04 · Three levels of noise

$$
\begin{array}{c|c|c}
\text{Model}&\text{Fault variables}&\text{Syndrome information}\\\hline
\text{Code capacity}&\text{data Paulis}&\text{perfect}\\
\text{Phenomenological}&\text{data Paulis, readout bits}&\text{noisy repeated checks}\\
\text{Circuit level}&\text{gate, idle, reset, measurement faults}&\text{circuit-derived detectors}
\end{array}
$$
$$
\mathcal N_{\rm circuit}
=\mathcal N_L\circ\mathcal U_L\circ\cdots\circ\mathcal N_1\circ\mathcal U_1
\quad\text{(with instruments for measurements)}.
$$

## 10.05 · CNOT propagation and hook errors

Let $U=\operatorname{CNOT}_{c\to t}$:
$$
UX_cU^\dagger=X_cX_t,\quad UZ_cU^\dagger=Z_c,
$$
$$
UX_tU^\dagger=X_t,\quad UZ_tU^\dagger=Z_cZ_t.
$$
Ancilla-control $X_a$ fault before remaining targets $Q_{\rm rem}$:
$$
X_a\longmapsto X_a\prod_{j\in Q_{\rm rem}}X_j.
$$
Ancilla-target $Z_a$ fault before remaining controls $Q_{\rm rem}$:
$$
Z_a\longmapsto Z_a\prod_{j\in Q_{\rm rem}}Z_j.
$$

## 10.06 · Space, time, and fault distance

For a fixed binary circuit-fault model:
$$
d_{\rm fault}:=\min_{u:B_{\rm det}u=0,\ L_{\rm obs}u\ne0}|u|.
$$
$$
d_{\rm fault}=d_{\rm fault}(d,T,\text{schedule},\text{time boundaries},\text{fault model}).
$$
Common memory scaling choice:
$$
T(d)=\lceil\kappa d\rceil,\qquad\kappa>0.
$$

## 10.07 · Exercise and result

$$
(m_1,m_2,m_3,m_4,m_5)=(0,0,1,0,0),\qquad m_0=0.
$$
$$
(d_1,d_2,d_3,d_4,d_5)=(0,0,1,1,0).
$$
$$
(m_2\oplus m_1,m_3\oplus m_2,m_4\oplus m_3,m_5\oplus m_4)
=(0,1,1,0).
$$
