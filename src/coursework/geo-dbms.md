---
title: Geo-DBMS
icon: file-twotone
# order: 4

breadcrumb: false
prev: false
next: false
# pageInfo: false
editLink: false
lastUpdated: false
---

## GEO1006: Geo Database Management Systems
[This course](https://www.studiegids.tudelft.nl/a101_displayCourse.do?course_id=64108) is about managing geo-information in a database management system (DBMS). The geo-DBMS is the central component of the geo-information chain. All information observed and interpreted should be managed in a manner that supports further use, so the Geo-DBMS is the end-point of data collected. Analysis, visualizing and (web-) dissemination of the geo-information start from the geo-DBMS. It is crucial that the content of the geo-DBMS is clear (the information model and its associated semantics) to the users, but also that it is high performant, as the geo-data volumes are often very high and especially in a web-based environment there may be many uses. The course consists of three parts; the first two concern introductions. The main part is devoted to spatial modelling and geo-DBMS. More specifically the three parts cover:
1. Introduction object-oriented information modelling: UML and more specifically class diagram to create conceptual models. 
2. Introduction relational database management systems: the relational model, SQL DDL (schema definition) and DML (queries).  
3. Spatial databases: theoretical aspects of spatial modelling (object and field models), DBMS-GIS architectures (dual, layered, integrated), spatial-temporal data model, Abstract Data Types (ADTs) for geometric primitives, topology model, temporal aspects, spatial indexing (quad tree, r-tree, field-tree), spatial data clustering (Hilbert, Morton, Cantor, row, row prime, etc.), geo-DBMSs (data modelling, structures, queries, visualisation), (non-)commercial systems (Oracle Spatial, PostGIS, etc.). One or more advanced topics: 3D, Raster, Point cloud data, Simplicial complexes, Geo-OCL, Big data, NoSQL (spatial), Vario-scale, 5D modelling (deeply integrated 3D space, time and scale).


## Coursework Overview
This course covered comprehensive aspects of spatial database management systems through 7 laboratory sessions, building from fundamental database concepts to advanced spatial data handling techniques.

### Lab 1: Data Modeling with UML
Created Entity-Relationship diagrams using UML notation to model spatial data relationships and object hierarchies. Translated conceptual geographic data models into structured database schemas, establishing the foundation for spatial database design.
[View report](/files/gdbms/geo_1006_lab_1.pdf)

### Lab 2: Fundamental SQL Operations
Practiced essential SQL query techniques including SELECT statements, WHERE conditions, table JOINs, and basic geometric functions (ST_Intersects, ST_Distance). Developed core skills for retrieving and filtering spatial data in PostgreSQL/PostGIS.
[View report](/files/gdbms/geo_1006_lab_2.pdf)

### Lab 3: Advanced SQL Techniques
Implemented complex query operations including nested subqueries, aggregate functions with GROUP BY clauses, and HAVING filters. Created multi-step spatial analyses using temporary tables and views to perform sophisticated data aggregation within the database.
[View report](/files/gdbms/geo_1006_lab_3.pdf)

### Lab 4: Polygon Validity Analysis
Applied PostGIS functions (ST_IsValid, ST_MakeValid) to identify and correct topological issues in polygon geometries according to OGC specifications. Learned techniques for resolving self-intersections, duplicate vertices, and other common validity problems.
[View report](/files/gdbms/geo_1006_lab_4.pdf)

### Lab 5: Spatial Indexing Optimization
Analyzed query performance with and without R-tree spatial indices. Used EXPLAIN ANALYZE to evaluate execution plans and optimize index parameters for different spatial data distributions, significantly improving database efficiency.
[View report](/files/gdbms/geo_1006_lab_5.pdf)

### Lab 6: Network Routing Applications
Implemented graph-based routing solutions using pgRouting extension with Dijkstra and A* algorithms. For both outdoor transportation networks and indoor navigation, handling turn restrictions and impedance factors.
[View report](/files/gdbms/geo_1006_lab_6.pdf)

### Lab 7: Raster Data Management
Explored techniques for storing and analyzing gridded data in PostGIS. Imported raster datasets, performed map algebra operations, and integrated raster-vector analysis workflows for managing terrain models and other continuous spatial phenomena.
[View report](/files/gdbms/geo_1006_lab_7.pdf)