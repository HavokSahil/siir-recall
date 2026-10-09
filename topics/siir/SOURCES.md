# Source notes

This collection was written from the local `../siir/` Flutter project on 9 October 2026 (HEAD `b12b1c6`, including the files present in the working tree). It describes the implementation inspected at that time rather than promising that future versions use identical settings.

| Lesson | Implementation inspected |
| --- | --- |
| From recordings to a frequency map | `README.md`, `lib/workbench/analysis.dart`, `lib/workbench/tools.dart` |
| What the sound descriptors measure | `lib/workbench/analysis.dart`, `lib/workbench/tools.dart` |
| Pitch classes and timbre coordinates | `lib/workbench/analysis.dart`, `lib/workbench/native_cqt.dart`, `native/ecqt/shirr_ecqt.c`, `native/ecqt/ORIGIN.md`, `lib/workbench/tools.dart` |
| Statistics and recurring structure | `lib/workbench/analysis.dart`, `lib/workbench/tools.dart` |
| From spectral change to a beat pulse | `lib/music/beat_tracker.dart`, `lib/workbench/tools.dart` |
| How sound moves the ink | `lib/music/fluid.dart`, `lib/screens/audio_visualizer/audio_visualizer_screen.dart` |
| Growing music from simple rules | `lib/music/cellular_music.dart` |

The project attributes ECQT and PFFFT in its native source, causal PLP in the beat tracker, and Stable Fluids in the visualizer. The recall lessons explain the project's code and do not reproduce the external papers or claim their experimental performance.

Implementation details are provided in each maths pane. In particular, FFT chroma and CQT pitch-class power use different weightings; offline frame-center timestamps differ from live trailing-window timestamps; silence values and logarithmic floors are conventions; and visual-fluid equations are a model for a finite-grid artistic approximation.
