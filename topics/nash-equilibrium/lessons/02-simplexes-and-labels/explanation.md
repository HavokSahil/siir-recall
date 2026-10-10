---
lesson_id: nash-02
pane: explanation
paired_file: math.md
summary: Turn probability distributions into geometry and define the labels used by Sperner.
---

# 02 · Simplexes and boundary labels

## 02.01 · Convex combinations and affine independence

A convex combination averages points with nonnegative weights summing to one. A set is convex when it contains every line segment between its points.

Affine independence says the vertices have no redundant affine relation. Equivalently, subtract one vertex and the remaining difference vectors are linearly independent. This gives each point of their simplex unique barycentric coordinates.

## 02.02 · The probability simplex

A simplex is the convex hull of affinely independent vertices: a point, a segment, a triangle, a tetrahedron, and their higher-dimensional counterparts.

The standard simplex is precisely the space of distributions on a fixed set of actions. Its dimension is one less than its number of coordinates because the coordinates must sum to one.

## 02.03 · Triangulations and mesh

A triangulation cuts the simplex into finitely many smaller simplexes. Cells fit face to face: two cells can meet only in a common face, so a vertex of one cannot sit partway along an unsubdivided edge of another.

The mesh is the largest diameter of a top-dimensional cell. We need triangulations whose mesh tends to zero. Repeated barycentric subdivision supplies them by replacing cells with smaller cells whose vertices are centroids of nested faces.

## 02.04 · Proper and complete labeling

Label each triangulation vertex with one of the original vertex indices. On a boundary face, only labels belonging to that face are allowed. In standard coordinates, a label can be used only where its coordinate is positive.

Original vertices are therefore forced to keep their own labels. Interior subdivision vertices may use any label. A small top-dimensional cell is completely labeled when its vertices carry every label exactly once.

## 02.05 · Exercise and result

Which labels are allowed at the midpoint of an edge of a triangle, and at its center? The midpoint may use either endpoint's label, but never the opposite vertex's label. The center may use any label.

This is a restriction on every triangulation vertex on the edge, not only on the original endpoints. Without it, Sperner's conclusion can fail.
