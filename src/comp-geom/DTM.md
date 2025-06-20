---
title: Digital Terrain Modelling 🏔️
icon: heat-map-outlined
# order: 4

breadcrumb: false
prev: false
next: false
# pageInfo: false
editLink: false
lastUpdated: false
contributors: false
---

### A1
[Full task description](https://3d.bk.tudelft.nl/courses/backup/geo1015/2024/hw/01/)

The aim of the assignment is to extract the isolines from a triangulated TIN, and structure them so that we can easily create Tanaka contours with QGIS.

The Tanaka contours method, named after the cartographer Kitiro Tanaka who formalised it in 1950, is a visualisation method to shade isolines to give a better impression of the relief of a terrain (more information on Wikipedia). The lines are illuminated/white when facing the source of light, and shaded/black when not. As is usually the case with the visualisation of terrains, we use the North-West direction as the source of light (why that is).

Namely, to develop a Python program that:
1. reads a gridded DTM (in GeoTIFF format);
2. randomly samples some of its cells;
3. creates the Delaunay triangulation (DT) of the samples;
4. outputs a GeoJSON of the contours and the DT (in PLY format).

### A2
[Full task description](https://3d.bk.tudelft.nl/courses/backup/geo1015/2024/hw/02/)

### A3
[Full task description](https://3d.bk.tudelft.nl/courses/backup/geo1015/2024/hw/03/)

