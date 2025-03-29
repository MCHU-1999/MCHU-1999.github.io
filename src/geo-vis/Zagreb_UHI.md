---
title: Urban Heat Island Index Modeling of the City of Zagreb
icon: fire-twotone
# order: 4

breadcrumb: false
prev: false
next: false
# pageInfo: false
editLink: false
lastUpdated: false
---

## Full Paper: A Survey of Croatia’s NSDI Performance: A Task-Based Assessment (work in progress)

In this research project, we tackled the challenging question of "How many trees can be planted in Croatia to mitigate the urban heat island effect?" as part of Europe's ambitious [3 Billion Trees Initiative](https://forest.eea.europa.eu/policy-and-reporting/3-billion-trees). Our work required overcoming significant obstacles related to Croatia's underdeveloped National Spatial Data Infrastructure (NSDI). The available geospatial data suffered from inconsistencies, gaps, and quality issues, forcing us to develop several workarounds and custom solutions. Through extensive data cleaning, validation, and integration efforts, we not only addressed our primary research question but also generated several valuable byproducts. These included fraction of vegetation data, sky view factor, improved municipal boundaries, ...etc. Ultimately, our methodology provides actionable data for policymakers while contributing to climate change mitigation efforts.


### Sky View Factor
The Sky View Factor (SVF) was computed using the [Terrain Shading](https://landscapearchaeology.org/qgis-terrain-shading/) plugin (Landscape Archaeology, 2024). This analysis was conducted on the normalized Digital Surface Model (nDSM) obtained from [dgu.gov.hr](https://dgu.gov.hr/UserDocsImages/dokumenti/Pristup%20informacijama/Podnesi%20zahtjev/OSTALI%20ZAHTJEVI/ZAHTJEV%20-%20PODACI%20nDMP.pdf). Due to time constraints, the original nDSM was rescaled to a lower resolution to optimize processing performance. The resulting SVF values, ranging from 0 to 1, are presented below, illustrating the distribution of sky visibility within the study area.

![sky_view_factor](/indoc_img/UHI/SVF.png "Sky View Factor")

### Fraction of Vegetation
The Vegetation Fraction was computed using the land cover dataset obtained from [ESA WorldCover v200](https://developers.google.com/earth-engine/datasets/catalog/ESA_WorldCover_v200). The dataset was processed by reclassifying individual pixels based on their land use categories. A moving window averaging algorithm was applied with the
following vegetation fraction parameters:
- 1.00 – Tree cover (10), Shrubland (20), Grassland (30), Mangroves (95)
- 0.60 – Cropland (40)
- 0.50 – Herbaceous wetland (90), Moss and lichen (100)
- 0.10 – Bare/sparse vegetation (60)
- 0.05 – Built-up areas (50)
- 0.00 – Snow and ice (70), Permanent water bodies (80)

![ESA WorldCover](/indoc_img/UHI/ESA_worldcover.png "ESA WorldCover" =300x)

![Fraction of Vegetation](/indoc_img/UHI/FoV.png "Fraction of Vegetation") 


### Urban Heat Island Index (UHI_max)
::: info
The "UHI_max" index refers to the maximum Urban Heat Island intensity measured or modeled for a specific location. It represents the greatest temperature difference between an urban area and its surrounding rural reference area.
:::
![Suggested_Plantable_area](/indoc_img/UHI/UHI_max.png "Suggested Plant-able area")

### Urban Heat Island Index (UHI_max) with thresholds
::: tabs#UHI_threshold

@tab threshold=3
![UHI_max_threshold=3](/indoc_img/UHI/UHI_threshold_3.png "UHImax (threshold=3)")

@tab threshold=4
![UHI_max_threshold=4](/indoc_img/UHI/UHI_threshold_4.png "UHImax (threshold=4)")

@tab threshold=5
![UHI_max_threshold=5](/indoc_img/UHI/UHI_threshold_5.png "UHImax (threshold=5)")

:::

### Final Product: lantable area for trees according to UHI mitigation principles
Based on the results of the UHImax calculation and a set of predefined selection criteria, we created a map identifying potential intervention sites for tree planting.

::: info
This selection aligns with UHI mitigation strategies and the EU’s 3 Billion Trees by 2030 initiative. To maximize impact while avoiding disruption to existing infrastructure, the following criteria were applied when selecting suitable locations:
- Does not intersect existing trees,
- Does not intersect water bodies, swamps, or ice-covered areas,
- UHI Index greater than 4,
- Not classified as a building,
- Not located on roads or railway infrastructure.
:::

![Suggested_Plantable_area](/indoc_img/UHI/plantable_area.png "Suggested Plant-able area")
