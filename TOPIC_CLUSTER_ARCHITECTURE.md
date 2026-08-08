# Topic Cluster Architecture: Visual Hierarchy

Below is the visual map of the scalable Topic Cluster System built for the **Rayat Najd Knowledge Center**. It establishes the complete foundational hierarchy for thousands of future entities (articles, subcategories, services).

```text
🌿 [Pillar Page] Afforestation in Saudi Arabia (التشجير في المملكة العربية السعودية)
│
├── 🌳 [Cluster 1] Landscaping (التشجير)
│   ├── Subcategories: Residential, Commercial, Public Parks
│   ├── Articles: Basics, Plant Selection, Soil Prep
│   ├── Services: Landscape Design, Execution
│   └── Projects: Riyadh Parks, Jeddah Corniche
│
├── 🌴 [Cluster 2] Palm Trees (النخيل)
│   ├── Subcategories: Washingtonia, Date Palms, Ornamental
│   ├── Articles: Disease Prevention, Planting Guide, Riyadh Best Palms
│   ├── Services: Palm Supply, Transportation
│   └── Projects: Diriyah Gate, Boulevard Riyadh
│
├── 🌲 [Cluster 3] Trees (الأشجار)
│   ├── Subcategories: Shade, Fruit, Drought-Resistant
│   ├── Articles: Native Saudi, Fast-Growing, Pruning Guide
│   ├── Services: Tree Supply, Planting
│   └── Projects: Green Riyadh
│
├── 🌱 [Cluster 4] Nurseries (المشاتل)
│   ├── Subcategories: Wholesale, Plant Production, Greenhouses
│   ├── Articles: Management Best Practices, Germination, Propagation
│   └── Services: Wholesale Supply
│
├── 💧 [Cluster 5] Irrigation (شبكات الري)
│   ├── Subcategories: Drip, Smart, Sprinklers
│   ├── Articles: Water Conservation, Smart Controllers, Drip vs Sprinkler
│   ├── Services: Irrigation Networks
│   └── Projects: Smart City Irrigation
│
├── ✂️ [Cluster 6] Agricultural Maintenance (الصيانة الزراعية)
│   ├── Subcategories: Pruning, Fertilization, Pest Control
│   ├── Articles: Seasonal Calendar, Organic Fertilizers, Pest Identification
│   ├── Services: Agricultural Maintenance
│   └── Projects: Park Maintenance Riyadh
│
├── ♻️ [Cluster 7] Environmental Sustainability (الاستدامة البيئية)
│   ├── Subcategories: Carbon Reduction, Water Management, Biodiversity
│   ├── Articles: Carbon Capture, Sustainable Materials, Combating Desertification
│   ├── Services: Landscape Design
│   └── Projects: Green Riyadh, Saudi Green Initiative
│
├── 🏙️ [Cluster 8] Urban Landscape Development (تطوير المشهد الحضري)
│   ├── Subcategories: Streetscapes, Plazas, Urban Parks
│   ├── Articles: Walkable Cities, Street Trees, Urban Heat Island
│   ├── Services: Landscape Design, Execution
│   └── Projects: Riyadh Art, Sports Boulevard
│
├── 🏢 [Cluster 9] Government Landscaping Projects (مشاريع التشجير الحكومية)
│   ├── Subcategories: Ministry Guidelines, Municipality, Mega Projects
│   ├── Articles: MOMRAH Guidelines, Green Bidding, Quality Control
│   ├── Services: Execution, Wholesale Supply
│   └── Projects: Misk City, King Salman Park
│
└── 🇸🇦 [Cluster 10] Green Riyadh & Vision 2030 (الرياض الخضراء ورؤية 2030)
    ├── Subcategories: Green Riyadh, SGI, Quality of Life
    ├── Articles: Env Goals, Impact, 10 Billion Trees
    ├── Services: Landscape Design, Tree Supply
    └── Projects: Green Riyadh, Sports Boulevard
```

## Scalability Map
- **Content Capacity:** 1000+ Articles across deep subcategory nesting.
- **Entity Linkage:** Bidirectional relationships built into the TypeScript interfaces (`relatedServicesIds`, `relatedProjectsIds`).
- **GEO Architecture:** Every cluster outputs semantic schema (`CollectionPage`), tags, entity mentions, and optimized canonical URLs to feed AI Search Engines (Generative Engine Optimization).
