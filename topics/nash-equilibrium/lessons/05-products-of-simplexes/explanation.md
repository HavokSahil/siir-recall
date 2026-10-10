---
lesson_id: nash-05
pane: explanation
paired_file: math.md
summary: Move the fixed-point theorem from a simplex to a product of simplexes.
---

# 05 · Brouwer on mixed-strategy spaces

## 05.01 · A product is a different shape

Each individual mixed-strategy space is a simplex, but their product generally is not. Two players with two actions each have two probability parameters, so their joint strategy space is a square. A square has four vertices and is not a triangle.

We therefore need to transfer Brouwer's theorem to the product. The relevant dimension is the sum of the players' independent probability counts.

## 05.02 · Work in affine coordinates

Drop one probability coordinate for each player; recover it by subtracting the others from one. This identifies the strategy space with a full-dimensional compact convex polytope in its intrinsic Euclidean space.

A simplex of the same dimension is also a full-dimensional polytope there. Both have interior points. Translate an interior point of each to the origin. We can now compare their boundaries along rays from a common center.

## 05.03 · Match equal fractions of each ray

Along each direction from the origin, a compact convex body with the origin inside has exactly one boundary point. The distance to that point is its radial radius in that direction.

Map a point in the product to the same fraction of the distance to the simplex boundary along the same ray. The center maps to the center, boundary maps to boundary, and each radial segment is scaled by a positive factor. Reversing the ratio gives the inverse.

## 05.04 · Why the radial map is continuous

The boundary radii vary continuously for these polytopes. To see this explicitly, describe a polytope by finitely many linear inequalities whose right sides are positive because the origin is interior. The reciprocal radial radius is the maximum of finitely many continuous expressions.

The ratio of the two radii is consequently continuous and bounded on the unit sphere. This proves continuity away from the center and at the center. The inverse has the same properties, so the map is a homeomorphism.

## 05.05 · Transfer a fixed point

Combining the affine coordinate changes with the radial map gives a homeomorphism between a standard simplex and the mixed-strategy space. Conjugate a continuous self-map of the strategy space by this homeomorphism to obtain a continuous simplex self-map.

Brouwer gives a fixed point in simplex coordinates. Mapping it back gives a fixed point in the strategy space. This is the exact form needed for Nash's map.

## 05.06 · Exercise and result

Three players with two, three, and one available actions have three independent probability parameters in total. Their strategy space is a segment times a triangle times a point. It has six vertices, so it is not a tetrahedron, although both have dimension three.

The homeomorphism preserves continuity and fixed-point existence. It need not preserve straight lines or the number of vertices.
