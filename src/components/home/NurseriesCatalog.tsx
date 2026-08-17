import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Plus, Info, X, CheckCircle2, Trees, Leaf, TreePine } from "lucide-react";
import { useSettings } from "../../contexts/SettingsContext";
import { useInterestList } from "../../contexts/InterestListContext";
import { CloudinaryImage } from "../cloudinary/CloudinaryImage";

const categories = [
  {
    id: "local_wild",
    nameAr: "الأشجار المحلية والبرية",
    nameEn: "Local and Wild Trees",
    descAr: "أشجار سعودية ومحلية مناسبة للبيئة الصحراوية ودعم الاستدامة ومكافحة التصحر.",
    descEn: "Saudi and local trees suitable for the desert environment, supporting sustainability and combating desertification.",
    examplesAr: ["السدر", "السمر", "الطلح النجدي", "الأكاسيا", "الأشجار البرية المناسبة للمناخ السعودي"],
    examplesEn: ["Ziziphus", "Samar", "Najdi Talh", "Acacia", "Wild trees suitable for Saudi climate"],
    img: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-37.webp",
    gallery: [
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-01.webp", nameAr: "شجرة محلية 1", nameEn: "Local tree 1" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-02.webp", nameAr: "شجرة محلية 2", nameEn: "Local tree 2" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-03.webp", nameAr: "شجرة محلية 3", nameEn: "Local tree 3" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-04.webp", nameAr: "شجرة محلية 4", nameEn: "Local tree 4" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-05.webp", nameAr: "شجرة محلية 5", nameEn: "Local tree 5" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-06.webp", nameAr: "شجرة محلية 6", nameEn: "Local tree 6" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-07.webp", nameAr: "شجرة محلية 7", nameEn: "Local tree 7" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-08.webp", nameAr: "شجرة محلية 8", nameEn: "Local tree 8" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-09.webp", nameAr: "شجرة محلية 9", nameEn: "Local tree 9" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-10.webp", nameAr: "شجرة محلية 10", nameEn: "Local tree 10" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-11.webp", nameAr: "شجرة محلية 11", nameEn: "Local tree 11" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-12.webp", nameAr: "شجرة محلية 12", nameEn: "Local tree 12" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-13.webp", nameAr: "شجرة محلية 13", nameEn: "Local tree 13" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-14.webp", nameAr: "شجرة محلية 14", nameEn: "Local tree 14" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-15.webp", nameAr: "شجرة محلية 15", nameEn: "Local tree 15" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-16.webp", nameAr: "شجرة محلية 16", nameEn: "Local tree 16" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-17.webp", nameAr: "شجرة محلية 17", nameEn: "Local tree 17" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-18.webp", nameAr: "شجرة محلية 18", nameEn: "Local tree 18" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-19.webp", nameAr: "شجرة محلية 1", nameEn: "Local tree 1" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-20.webp", nameAr: "شجرة محلية 2", nameEn: "Local tree 2" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-21.webp", nameAr: "شجرة محلية 3", nameEn: "Local tree 3" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-22.webp", nameAr: "شجرة محلية 4", nameEn: "Local tree 4" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-23.webp", nameAr: "شجرة محلية 5", nameEn: "Local tree 5" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-24.webp", nameAr: "شجرة محلية 6", nameEn: "Local tree 6" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-25.webp", nameAr: "شجرة محلية 7", nameEn: "Local tree 7" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-26.webp", nameAr: "شجرة محلية 8", nameEn: "Local tree 8" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-27.webp", nameAr: "شجرة محلية 9", nameEn: "Local tree 9" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-28.webp", nameAr: "شجرة محلية 10", nameEn: "Local tree 10" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-29.webp", nameAr: "شجرة محلية 11", nameEn: "Local tree 11" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-30.webp", nameAr: "شجرة محلية 12", nameEn: "Local tree 12" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-31.webp", nameAr: "شجرة محلية 13", nameEn: "Local tree 13" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-32.webp", nameAr: "شجرة محلية 14", nameEn: "Local tree 14" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-33.webp", nameAr: "شجرة محلية 15", nameEn: "Local tree 15" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-34.webp", nameAr: "شجرة محلية 16", nameEn: "Local tree 16" },
    ],
  },
  {
    id: "shade_trees",
    nameAr: "أشجار الظل",
    nameEn: "Shade Trees",
    descAr: "أشجار مناسبة لتوفير الظل وتحسين جودة المساحات الخارجية في الفلل، القصور، الطرق، والمشاريع التجارية.",
    descEn: "Trees suitable for providing shade and improving the quality of outdoor spaces in villas, palaces, roads, and commercial projects.",
    examplesAr: ["اللبخ", "النيم", "الفيكس", "اللوز الهندي", "أشجار ظل كبيرة"],
    examplesEn: ["Albizia", "Neem", "Ficus", "Indian Almond", "Large shade trees"],
    img: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-49.webp",
    gallery: [
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-50.webp", nameAr: "شتلة من مشتل رايات نجد 1", nameEn: "Sapling from the Rayat Najd nursery 1" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-51.webp", nameAr: "شتلة من مشتل رايات نجد 2", nameEn: "Sapling from the Rayat Najd nursery 2" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-52.webp", nameAr: "شتلة من مشتل رايات نجد 3", nameEn: "Sapling from the Rayat Najd nursery 3" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-53.webp", nameAr: "شتلة من مشتل رايات نجد 4", nameEn: "Sapling from the Rayat Najd nursery 4" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-54.webp", nameAr: "شتلة من مشتل رايات نجد 5", nameEn: "Sapling from the Rayat Najd nursery 5" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-55.webp", nameAr: "شتلة من مشتل رايات نجد 6", nameEn: "Sapling from the Rayat Najd nursery 6" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-56.webp", nameAr: "شتلة من مشتل رايات نجد 7", nameEn: "Sapling from the Rayat Najd nursery 7" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-57.webp", nameAr: "شتلة من مشتل رايات نجد 8", nameEn: "Sapling from the Rayat Najd nursery 8" },
    ],
  },
  {
    id: "ornamental",
    nameAr: "أشجار الزينة",
    nameEn: "Ornamental Trees",
    descAr: "أشجار ونباتات جمالية تضيف قيمة بصرية للمداخل، الحدائق، المنتجعات، والواجهات التجارية.",
    descEn: "Aesthetic trees and plants that add visual value to entrances, gardens, resorts, and commercial facades.",
    examplesAr: ["التابوبيا", "البونسيانا", "الفلفل الرفيع", "أشجار مزهرة", "أشجار موسمية"],
    examplesEn: ["Tabebuia", "Poinciana", "Schinus", "Flowering trees", "Seasonal trees"],
    img: "https://cdn.rayatnajd.com/02-website/backgrounds/rayat-najd-website-background-trees.webp",
    gallery: [
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-34.webp", nameAr: "نبتة زينة من مشتل رايات نجد 1", nameEn: "Ornamental plant from the Rayat Najd nursery 1" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-35.webp", nameAr: "نبتة زينة من مشتل رايات نجد 2", nameEn: "Ornamental plant from the Rayat Najd nursery 2" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-36.webp", nameAr: "نبتة زينة من مشتل رايات نجد 3", nameEn: "Ornamental plant from the Rayat Najd nursery 3" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-37.webp", nameAr: "نبتة زينة من مشتل رايات نجد 4", nameEn: "Ornamental plant from the Rayat Najd nursery 4" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-38.webp", nameAr: "نبتة زينة من مشتل رايات نجد 5", nameEn: "Ornamental plant from the Rayat Najd nursery 5" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-39.webp", nameAr: "نبتة زينة من مشتل رايات نجد 6", nameEn: "Ornamental plant from the Rayat Najd nursery 6" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-40.webp", nameAr: "نبتة زينة من مشتل رايات نجد 7", nameEn: "Ornamental plant from the Rayat Najd nursery 7" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-41.webp", nameAr: "نبتة زينة من مشتل رايات نجد 8", nameEn: "Ornamental plant from the Rayat Najd nursery 8" },
    ],
  },
  {
    id: "drought_resistant",
    nameAr: "الأشجار المقاومة للجفاف",
    nameEn: "Drought Resistant Trees",
    descAr: "أشجار تتحمل الحرارة وقلة المياه وتناسب مشاريع الاستدامة والبيئات الجافة.",
    descEn: "Trees that tolerate heat and water scarcity, suitable for sustainability projects and dry environments.",
    examplesAr: ["الأكاسيا", "السدر", "السمر", "أشجار تتحمل حرارة الرياض", "أشجار قليلة الاحتياج للمياه"],
    examplesEn: ["Acacia", "Ziziphus", "Samar", "Heat tolerant trees", "Low water trees"],
    img: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-38.webp",
    gallery: [
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-39.webp", nameAr: "شجرة مقاومة للجفاف 1", nameEn: "Drought-resistant tree 1" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-40.webp", nameAr: "شجرة مقاومة للجفاف 2", nameEn: "Drought-resistant tree 2" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-41.webp", nameAr: "شجرة مقاومة للجفاف 3", nameEn: "Drought-resistant tree 3" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-42.webp", nameAr: "شجرة مقاومة للجفاف 4", nameEn: "Drought-resistant tree 4" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-43.webp", nameAr: "شجرة مقاومة للجفاف 5", nameEn: "Drought-resistant tree 5" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-44.webp", nameAr: "شجرة مقاومة للجفاف 6", nameEn: "Drought-resistant tree 6" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-45.webp", nameAr: "شجرة مقاومة للجفاف 7", nameEn: "Drought-resistant tree 7" },
      { url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-46.webp", nameAr: "شجرة مقاومة للجفاف 8", nameEn: "Drought-resistant tree 8" },
    ],
  },
  {
    id: "shrubs",
    nameAr: "الشجيرات والنباتات التجميلية",
    nameEn: "Shrubs and Cosmetic Plants",
    descAr: "نباتات وشجيرات مناسبة لتنسيق الحدائق والممرات والمداخل والمسطحات الخارجية.",
    descEn: "Plants and shrubs suitable for landscaping, pathways, entrances, and outdoor areas.",
    examplesAr: ["الشجيرات التجميلية", "النباتات المزهرة", "النباتات العطرية", "مغطيات التربة"],
    examplesEn: ["Cosmetic shrubs", "Flowering plants", "Aromatic plants", "Ground covers"],
    img: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-18.webp",
    gallery: [
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-42.webp", nameAr: "شجيرة تجميلية 1", nameEn: "Cosmetic shrub 1" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-43.webp", nameAr: "شجيرة تجميلية 2", nameEn: "Cosmetic shrub 2" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-44.webp", nameAr: "شجيرة تجميلية 3", nameEn: "Cosmetic shrub 3" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-45.webp", nameAr: "شجيرة تجميلية 4", nameEn: "Cosmetic shrub 4" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-46.webp", nameAr: "شجيرة تجميلية 5", nameEn: "Cosmetic shrub 5" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-47.webp", nameAr: "شجيرة تجميلية 6", nameEn: "Cosmetic shrub 6" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-48.webp", nameAr: "شجيرة تجميلية 7", nameEn: "Cosmetic shrub 7" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-58.webp", nameAr: "شجيرة تجميلية 1", nameEn: "Cosmetic shrub 1" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-59.webp", nameAr: "شجيرة تجميلية 2", nameEn: "Cosmetic shrub 2" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-60.webp", nameAr: "شجيرة تجميلية 3", nameEn: "Cosmetic shrub 3" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-61.webp", nameAr: "شجيرة تجميلية 4", nameEn: "Cosmetic shrub 4" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-62.webp", nameAr: "شجيرة تجميلية 5", nameEn: "Cosmetic shrub 5" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-63.webp", nameAr: "شجيرة تجميلية 6", nameEn: "Cosmetic shrub 6" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-64.webp", nameAr: "شجيرة تجميلية 7", nameEn: "Cosmetic shrub 7" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-74.webp", nameAr: "شجيرة تجميلية 1", nameEn: "Cosmetic shrub 1" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-75.webp", nameAr: "شجيرة تجميلية 2", nameEn: "Cosmetic shrub 2" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-76.webp", nameAr: "شجيرة تجميلية 3", nameEn: "Cosmetic shrub 3" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-77.webp", nameAr: "شجيرة تجميلية 4", nameEn: "Cosmetic shrub 4" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-78.webp", nameAr: "شجيرة تجميلية 5", nameEn: "Cosmetic shrub 5" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-79.webp", nameAr: "شجيرة تجميلية 6", nameEn: "Cosmetic shrub 6" },
    ],
  },
  {
    id: "climbers",
    nameAr: "النباتات المتسلقة ومغطيات التربة",
    nameEn: "Climbers and Ground Covers",
    descAr: "حلول نباتية لتغطية الأسوار، الجدران، الممرات، والمساحات المفتوحة.",
    descEn: "Plant solutions for covering fences, walls, pathways, and open spaces.",
    examplesAr: ["النباتات المتسلقة", "مغطيات التربة", "النباتات الزاحفة", "نباتات الحدائق الخارجية"],
    examplesEn: ["Climbing plants", "Ground covers", "Creeping plants", "Outdoor garden plants"],
    img: "https://cdn.rayatnajd.com/02-website/backgrounds/rayat-najd-website-background-whatsapp-image-2026-07-03-at-6-59-16-pm-24-jwozvi.webp",
    gallery: [
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-20.webp", nameAr: "نبتة من مشتل رايات نجد 1", nameEn: "Plant from the Rayat Najd nursery 1" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-21.webp", nameAr: "نبتة من مشتل رايات نجد 2", nameEn: "Plant from the Rayat Najd nursery 2" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-22.webp", nameAr: "نبتة من مشتل رايات نجد 3", nameEn: "Plant from the Rayat Najd nursery 3" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-23.webp", nameAr: "نبتة من مشتل رايات نجد 4", nameEn: "Plant from the Rayat Najd nursery 4" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-24.webp", nameAr: "نبتة من مشتل رايات نجد 5", nameEn: "Plant from the Rayat Najd nursery 5" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-25.webp", nameAr: "نبتة من مشتل رايات نجد 6", nameEn: "Plant from the Rayat Najd nursery 6" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-26.webp", nameAr: "نبتة من مشتل رايات نجد 7", nameEn: "Plant from the Rayat Najd nursery 7" },
      { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-27.webp", nameAr: "نبتة من مشتل رايات نجد 8", nameEn: "Plant from the Rayat Najd nursery 8" },
    ],
  },
  {
    id: "projects",
    nameAr: "أشجار ونباتات المشاريع",
    nameEn: "Project Trees and Plants",
    descAr: "مجموعة مناسبة للمشاريع الحكومية، المطورين العقاريين، الفنادق، المنتجعات، والمشاريع التجارية.",
    descEn: "A collection suitable for government projects, real estate developers, hotels, resorts, and commercial projects.",
    examplesAr: ["أشجار الطرق", "أشجار المنتزهات", "أشجار المداخل", "أشجار المجمعات السكنية", "أشجار المشاريع السياحية"],
    examplesEn: ["Road trees", "Park trees", "Entrance trees", "Residential complex trees", "Tourism project trees"],
    img: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-22.webp",
    gallery: [
      { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-23.webp", nameAr: "غرسة ضمن مشروع تشجير 1", nameEn: "Sapling within an afforestation project 1" },
      { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-24.webp", nameAr: "غرسة ضمن مشروع تشجير 2", nameEn: "Sapling within an afforestation project 2" },
      { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-25.webp", nameAr: "غرسة ضمن مشروع تشجير 3", nameEn: "Sapling within an afforestation project 3" },
      { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-26.webp", nameAr: "غرسة ضمن مشروع تشجير 4", nameEn: "Sapling within an afforestation project 4" },
      { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-27.webp", nameAr: "غرسة ضمن مشروع تشجير 5", nameEn: "Sapling within an afforestation project 5" },
      { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-28.webp", nameAr: "غرسة ضمن مشروع تشجير 6", nameEn: "Sapling within an afforestation project 6" },
      { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-29.webp", nameAr: "غرسة ضمن مشروع تشجير 7", nameEn: "Sapling within an afforestation project 7" },
      { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-30.webp", nameAr: "غرسة ضمن مشروع تشجير 8", nameEn: "Sapling within an afforestation project 8" },
    ],
  },
  {
    id: "rare",
    nameAr: "الأشجار النادرة والمميزة",
    nameEn: "Rare and Special Trees",
    descAr: "مجموعة مختارة من الأشجار النادرة أو ذات القيمة الجمالية العالية للمشاريع الفاخرة والخاصة.",
    descEn: "A selected group of rare or highly aesthetic trees for luxurious and private projects.",
    examplesAr: ["أشجار نادرة", "أشجار مميزة للقصور", "أشجار فاخرة للمداخل", "أشجار ذات طابع خاص"],
    examplesEn: ["Rare trees", "Special trees for palaces", "Luxurious entrance trees", "Special character trees"],
    img: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-01.webp",
    gallery: [
      { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-02.webp", nameAr: "مختارات من مشتل الحائر 1", nameEn: "Selection from the Al-Hair nursery 1" },
      { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-03.webp", nameAr: "مختارات من مشتل الحائر 2", nameEn: "Selection from the Al-Hair nursery 2" },
      { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-04.webp", nameAr: "مختارات من مشتل الحائر 3", nameEn: "Selection from the Al-Hair nursery 3" },
      { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-05.webp", nameAr: "مختارات من مشتل الحائر 4", nameEn: "Selection from the Al-Hair nursery 4" },
      { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-06.webp", nameAr: "مختارات من مشتل الحائر 5", nameEn: "Selection from the Al-Hair nursery 5" },
      { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-07.webp", nameAr: "مختارات من مشتل الحائر 6", nameEn: "Selection from the Al-Hair nursery 6" },
      { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-09.webp", nameAr: "مختارات من مشتل الحائر 7", nameEn: "Selection from the Al-Hair nursery 7" },
      { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-10.webp", nameAr: "مختارات من مشتل الحائر 8", nameEn: "Selection from the Al-Hair nursery 8" },
    ],
  },
];

export default function NurseriesCatalog() {
  const { t, language } = useSettings();
  const { addItem } = useInterestList();
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const handleAddCategoryToInterest = (e: React.MouseEvent, category: any) => {
    e.stopPropagation();
    addItem({
      id: category.id,
      nameAr: category.nameAr,
      nameEn: category.nameEn,
      categoryAr: "تصنيف رئيسي",
      categoryEn: "Main Category",
      image: category.img,
    });
  };

  const handleInquire = () => {
    window.open("https://wa.me/966557555716?text=" + encodeURIComponent(
      `مرحباً رايات نجد، أرغب في الاستفسار عن قسم: ${selectedCategory?.nameAr}`
    ), "_blank");
  };

  return (
    <section id="nurseries" className="py-10 md:py-12  border-t border-text-main/5 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <motion.div
             initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="max-w-3xl"
           >
             <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md mb-6 leading-relaxed py-2 md:leading-relaxed">
                {t("المشاتل", "Nurseries")} <span className="text-gradient-green">{t("والأشجار", "and Trees")}</span>
             </h2>
             <p className="text-lg text-white drop-shadow-sm leading-relaxed rtl:text-right ltr:text-left">
                {t(
                  "نمتلك مخزوناً ضخماً من النخيل، الأشجار، الشجيرات، النباتات المحلية، أشجار الظل، أشجار الزينة، والأشجار المناسبة للمشاريع الحكومية والخاصة. اختر ما يناسب مشروعك وأضفه إلى قائمة اهتمامك.",
                  "We have a massive inventory of palms, trees, shrubs, local plants, shade trees, ornamental trees, and trees suitable for government and private projects. Choose what suits your project and add it to your interest list."
                )}
             </p>
           </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/10 backdrop-blur-md border-white/20 border border-text-main/5 rounded-xl md:rounded-2xl p-2 md:p-4 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col cursor-pointer ${index === categories.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              <div className="flex items-center gap-2 mb-2 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Trees className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h3 className="text-[11px] md:text-sm font-bold text-white drop-shadow-md leading-tight">{language === 'ar' ? category.nameAr : category.nameEn}</h3>
              </div>
              
              <p className="hidden md:block text-white drop-shadow-sm mb-4 leading-relaxed flex-grow text-xs line-clamp-3">
                {language === 'ar' ? category.descAr : category.descEn}
              </p>
              
              <div className="hidden md:block mb-4">
                <h4 className="text-xs font-bold text-white drop-shadow-md mb-2">{t("أمثلة:", "Examples:")}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {(language === 'ar' ? category.examplesAr : category.examplesEn).map((ex: string, i: number) => (
                    <span key={i} className="text-[10px] px-2 py-1 bg-black/30 rounded-full text-white drop-shadow-sm border border-text-main/5 line-clamp-1 max-w-[80px]">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-row items-center gap-1.5 md:gap-2 mt-auto pt-2 md:pt-3 border-t border-text-main/5">
                <button 
                  className="flex-grow py-1.5 md:py-2 px-1 bg-white hover:bg-primary text-primary hover:text-white drop-shadow-md rounded-md md:rounded-lg text-[9px] md:text-[11px] font-bold transition-colors flex items-center justify-center gap-1"
                >
                  <Info className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span>{t("استعرض", "Browse")}</span>
                </button>
                <button 
                  onClick={(e) => handleAddCategoryToInterest(e, category)}
                  className="w-8 md:w-10 h-7 md:h-8 shrink-0 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-md md:rounded-lg flex items-center justify-center transition-colors tooltip-trigger relative"
                  title={t("أضف التصنيف إلى قائمة الاهتمام", "Add Category to Interest List") as string}
                >
                  <Plus className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Details Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCategory(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/10 backdrop-blur-md border-white/20 border border-text-main/10 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
            >
              <div className="md:w-2/5 h-64 md:h-auto relative bg-white/10">
                <CloudinaryImage src={selectedCategory.img} alt={selectedCategory.nameAr} width={800} lazy={false} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-4 rtl:right-4 ltr:left-4 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors md:hidden"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="md:w-3/5 p-8 overflow-y-auto max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-black text-white drop-shadow-md mb-2">
                      {language === 'ar' ? selectedCategory.nameAr : selectedCategory.nameEn}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="hidden md:flex bg-white/10 text-white drop-shadow-sm p-2 rounded-full hover:bg-text-main/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-white drop-shadow-md font-bold mb-2 flex items-center gap-2">
                      <Info className="w-4 h-4 text-primary" />
                      {t("الوصف", "Description")}
                    </h4>
                    <p className="text-white drop-shadow-sm text-sm leading-relaxed">
                      {language === 'ar' ? selectedCategory.descAr : selectedCategory.descEn}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white drop-shadow-md font-bold mb-3 flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-primary" />
                      {t("أمثلة من الأنواع المتوفرة", "Examples of Available Types")}
                    </h4>
                    <ul className="space-y-2">
                      {(language === 'ar' ? selectedCategory.examplesAr : selectedCategory.examplesEn).map((ex: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-white drop-shadow-sm text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary/60" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedCategory.gallery && selectedCategory.gallery.length > 0 && (
                  <div>
                    <h4 className="text-white drop-shadow-md font-bold mb-3 flex items-center gap-2">
                      <Trees className="w-4 h-4 text-primary" />
                      {t("معرض الصور", "Photo Gallery")}
                    </h4>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {selectedCategory.gallery.map((img: any, idx: number) => (
                        <div key={idx} className="relative group rounded-xl overflow-hidden h-32 bg-white/10 border border-text-main/10 shadow-sm">
                          <CloudinaryImage src={img.url} alt={language === 'ar' ? img.nameAr : img.nameEn} width={400} lazy={true} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-2 text-center">
                            <span className="text-white text-xs font-bold w-full truncate px-1">
                              {language === 'ar' ? img.nameAr : img.nameEn}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div>
                     <h4 className="text-white drop-shadow-md font-bold mb-3 flex items-center gap-2">
                      <TreePine className="w-4 h-4 text-primary" />
                      

                  
                  {t("المشاريع المناسبة", "Suitable Projects")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                       {[
                         t("المشاريع الحكومية", "Government Projects"),
                         t("الطرق", "Roads"),
                         t("القصور", "Palaces"),
                         t("المنتجعات", "Resorts")
                       ].map((proj: any, idx: number) => (
                         <span key={idx} className="text-xs font-medium px-3 py-1.5 bg-black/40 border border-white/10 text-white drop-shadow-md rounded-lg">
                           {proj}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-text-main/10 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={(e) => {
                      handleAddCategoryToInterest(e, selectedCategory);
                      setSelectedCategory(null);
                    }}
                    className="flex-1 py-4 bg-primary hover:bg-primary-light text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                  >
                    <Plus className="w-5 h-5" />
                    {t("أضف إلى قائمة الاهتمام", "Add to Interest List")}
                  </button>
                  <button 
                    onClick={handleInquire}
                    className="flex-1 py-4 bg-white hover:bg-gray-100 text-primary rounded-xl font-bold transition-colors border border-text-main/10 flex items-center justify-center gap-2"
                  >
                    {t("استفسر عن هذا التصنيف", "Inquire about this category")}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
