---
lesson_id: nash-04
pane: explanation
paired_file: math.md
summary: Fine completely labeled cells converge to a fixed point of a continuous map.
---

# 04 · From Sperner to Brouwer

## 04.01 · What must be proved

Brouwer's theorem on a simplex says that a continuous map from the simplex into itself has a fixed point. A fixed point is a point whose image equals itself.

For the zero-dimensional simplex this is immediate. In positive dimension, we label finer and finer triangulations using the direction in which the map moves each coordinate. Sperner supplies a small cell witnessing all coordinate labels at once.

## 04.02 · Choose a coordinate that does not increase

At a triangulation vertex, choose a label whose coordinate is positive and does not increase under the map. Such a coordinate must exist.

If every positive coordinate strictly increased, their images alone would sum to more than one. The remaining image coordinates are nonnegative, contradicting the fact that the image is also a probability vector. Requiring positivity makes the labeling proper on boundary faces.

## 04.03 · Select a completely labeled cell

Sperner now gives a completely labeled cell in each triangulation. Name each of its vertices by its label. At the vertex with a given label, that coordinate does not increase.

These inequalities initially hold at different points. They do not yet describe a fixed point. Shrinking the cells is what will bring all those points together.

## 04.04 · Compactness gives one common limit

The simplex is closed and bounded in finite-dimensional Euclidean space, hence compact. The centroids therefore have a convergent subsequence whose limit still lies in the simplex.

Every vertex of a chosen cell is at most one mesh length from its centroid. Along the same subsequence, all labeled vertices converge to the same limit. Continuity then lets us pass each coordinate inequality to that limit.

## 04.05 · Coordinate inequalities force equality

At the limit no coordinate increases. But the input and output both have total mass one. If any coordinate strictly decreased, the output total would be smaller unless another coordinate increased. None can increase, so every coordinate must be unchanged.

The proof uses continuity to pass to the limit, compactness to obtain a limit, and Sperner to enforce all coordinate inequalities in cells of arbitrarily small size.

## 04.06 · Exercise and result

Does the proof say that every chosen cell, or every centroid, converges? No. Choices can vary from one triangulation to the next. Compactness guarantees a convergent subsequence, and that is enough to prove existence.

Also, the centroid of a completely labeled cell need not itself be fixed. The inequalities belong to its labeled vertices; exact equality is obtained only in the limit.
