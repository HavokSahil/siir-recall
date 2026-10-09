---
lesson_id: siir-structure
summary: Correlation, PCA, self-similarity, and candidate boundaries.
---

# Statistics and recurring structure

## 04.01 · Measurements that move together

The statistics view compares eight descriptors: RMS, centroid, spread, entropy, flatness, roll-off, flux, and zero-crossing rate. Standardization prevents the larger numerical scale of frequency-valued measurements from dominating PCA.

Correlation asks which descriptors vary together. Constant columns become zeros, including their correlation-matrix diagonal. Overlapping frames are dependent observations, so a large correlation does not establish causation or statistical significance.

Interval summaries use frame centers within the selected range. Averages and standard deviations summarize measurements; they do not replace listening or the distribution shown by a histogram.

## 04.02 · A two-axis map of variation

PCA rotates the standardized descriptor cloud into directions of maximal variation. sIIr displays the leading two component scores together with their loadings and explained fractions.

An axis is a mixture of measurements, not an automatically discovered musical label. Inspect the loadings to see what drives a direction. Eigenvector signs are arbitrary: a mirrored axis can represent the same PCA result.

This map is exploratory. It does not by itself classify tracks, identify causes, or validate clusters.

## 04.03 · Similarity and novelty across time

The structure view compares FFT chroma vectors with cosine similarity. Up to 160 uniformly sampled frames bound the matrix’s memory cost. Bright off-diagonal areas can indicate repeated pitch-class material.

A novelty curve compares neighboring blocks: internally similar regions that disagree across their border produce a positive value. Local peaks above the mean plus one standard deviation suggest boundaries, separated by at least one second.

These are candidates for inspection and manual annotation. Shared chroma need not mean the same musical section, and downsampling limits boundary precision.
