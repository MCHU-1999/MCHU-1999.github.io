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

## [Course Content](https://3d.bk.tudelft.nl/courses/backup/geo1015/2024/)
Digital terrain models (terrains) are computer representations of the elevation of a given area, and they play an important role in understanding and analysing our built environment. They are the necessary input for several applications (eg flood modelling, visibility, effects of climate change on the north poles, etc.), and they are also relevant for studying for seabed and other planets.

The course provides an overview of the fundamentals of digital terrain modelling (DTM):

- different representations of terrains: TINs, rasters, point clouds, contour lines
- reconstruction of terrains from different sources (LiDAR, photogrammetry, InSAR)
- spatial interpolation methods
- conversion between different DTM representations
- processing of DTM: outlier detection, filtering, segmentation, and identification and classification of objects
- applications, eg runoff modelling, watersheds computations, visibility
- techniques to handle and process massive datasets
- The course has both a theoretical part and a practical part where students reconstruct, manipulate, process, and extract information from terrains.

All the labs are programming tasks (to be done with the Python or C++ programming languages), and other open-source libraries and software are used. 

### [Checkout my lab repository](https://github.com/MCHU-1999/geo-1015-assignments)
### A1: [Tanaka contours](https://3d.bk.tudelft.nl/courses/backup/geo1015/2024/hw/01/)

The aim of the assignment is to extract the isolines from a triangulated TIN, and structure them so that we can easily create Tanaka contours with QGIS.

The Tanaka contours method, named after the cartographer Kitiro Tanaka who formalised it in 1950, is a visualisation method to shade isolines to give a better impression of the relief of a terrain (more information on Wikipedia). The lines are illuminated/white when facing the source of light, and shaded/black when not. As is usually the case with the visualisation of terrains, we use the North-West direction as the source of light.

Namely, to develop a Python program that:
1. reads a gridded DTM (in GeoTIFF format);
2. randomly samples some of its cells;
3. creates the Delaunay triangulation (DT) of the samples;
4. outputs a GeoJSON of the contours and the DT (in PLY format).


### A2: [Constructing DTMs from AHN4](https://3d.bk.tudelft.nl/courses/backup/geo1015/2024/hw/02/)
The aim of the assignment is to create three DTMs from an input AHN(4) lidar dataset (using different methods). I have developed a Python program that:

1. reads a AHN4 LAZ file;
2. output a gridded DTM by interpolating, with linear in TIN interpolation, the points classified as ground
3. output a gridded DTM by interpolating, with Laplace interpolation, the points classified as ground
4. output a gridded DTM by first extracting the ground with the GFTIN algorithm and then interpolate with the linear in TIN method


### A3: [The best shape detection algorithm is...](https://3d.bk.tudelft.nl/courses/backup/geo1015/2024/hw/03/)
The aim of this assignment is to implement and compare the three algorithms for shape detection described in the book (Section 11.4:
1. RANSAC,
2. region growing, and 
3. Hough transform). 

We made a pretty-nice report to document our implementations and compare them. [View report](https://MCHU-1999.github.io/files/geo-1015-hw3.pdf)

