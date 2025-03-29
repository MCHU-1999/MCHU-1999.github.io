---
title: Positioning and Coordinate Reference System
icon: file-twotone
# order: 4

breadcrumb: false
prev: false
next: false
# pageInfo: false
editLink: false
lastUpdated: false
contributors: false
---

## GEO1003: Positioning and Location Awareness
[This course](https://www.studiegids.tudelft.nl/a101_displayCourse.do?course_id=64107) addresses Global Navigation Satellite Systems (GNSS) and (indoor) positioning technologies for sensing people, devices, and assets in the built environment with the focus on location-aware applications. The course covers the requirements and context for these location-aware applications: global, local, and linear reference systems, coordinate systems and map projections, positioning methods and techniques, and the social and technical push and legislative pull factors that empower the development of location-based services.

The course consists of three parts:
1. Analyses of location aware applications: concepts of location awareness, location sensitivity, and context awareness; use cases of location-based applications; technical and legislation factors, privacy issues, and standards.
2. Global, local (e.g. Dutch), and linear reference systems; coordinate systems and transformations; basic types of map projections.
3. Positioning methods, techniques, and performance: Global Navigation Satellite Systems; terrestrial radio-based positioning by using Bluetooth, UWB, RFID, Wi-Fi and other short range technologies; Inertial Navigation Systems (INS); presence-based locating; technologies with dead reckoning and map-matching methods; fingerprinting (templates) for indoor positioning.

## Coursework Overview
### GNSS Performance Measurement
Analyzed the relationship between Dilution of Precision (DOP) values and satellite visibility metrics using raw NMEA sentences from GPS/GNSS receivers. This project demonstrates understanding of how satellite geometry affects positioning accuracy.
#### Key Outcomes
- Quantified the relationship between satellite geometry and position uncertainty
- Demonstrated how urban canyons and obstructions affect GNSS performance
- Implemented algorithms for real-time DOP calculation and visualization

#### Documentation
<PDF url="/files/gnss/A1.pdf" height=500px /> 


### GPS/GNSS to Local CRS using RDNAPTRANS™
Developed a complete coordinate transformation workflow from raw GNSS measurements to the Dutch national reference system, demonstrating proficiency in geodetic reference frame transformations.
#### Key Outcomes
- Created reusable coordinate transformation functions following OGC and RDNAP standards
- Validated transformation accuracy against known control points
- Documented transformation parameters and their temporal validity

#### Documentation
<PDF url="/files/gnss/A2.pdf" height=500px />


### Wi-Fi Fingerprinting in Faculty Building
Implemented machine learning-based indoor positioning system using Wi-Fi signal strength measurements collected throughout the BK-City faculty building.
#### Key Outcomes
- Achieved sub-room level positioning accuracy
- Identified optimal fingerprint density for balancing collection effort and accuracy
- Developed methodology for handling temporal variations in Wi-Fi signal strength
- Created interactive visualization of positioning uncertainty throughout the building

#### Documentation
<PDF url="/files/gnss/A3.pdf" height=500px />