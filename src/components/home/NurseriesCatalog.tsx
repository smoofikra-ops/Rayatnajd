import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Plus, Info, X, CheckCircle2, Trees, Leaf, TreePine } from "lucide-react";
import { useSettings } from "../../contexts/SettingsContext";
import { useInterestList } from "../../contexts/InterestListContext";
import { CloudinaryImage } from "../cloudinary/CloudinaryImage";
import { mediaData } from "../../data/media";

const categories = [
  {
    id: "palms",
    nameAr: "النخيل",
    nameEn: "Palms",
    descAr: "تشكيلة واسعة من النخيل العربي، واشنطونيا، الملوكي، ونخيل جوز الهند لتزيين الشوارع والقصور والمشاريع.",
    descEn: "A wide variety of Arabian Palms, Washingtonia, Royal Palms, and Coconut Palms to decorate streets, palaces, and projects.",
    examplesAr: ["النخيل العربي", "نخيل واشنطونيا", "النخل الملوكي", "نخيل جوز الهند"],
    examplesEn: ["Arabian Palm", "Washingtonia Palm", "Royal Palm", "Coconut Palm"],
    img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534247/WhatsApp_Image_2026-07-08_at_9.08.09_PM_2_wb9sjz.jpg",
    gallery: [
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374914/WhatsApp_Image_2026-07-04_at_11.52.09_PM_ofjyqg.jpg", nameAr: "نبتة 1", nameEn: "Plant 1" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374915/WhatsApp_Image_2026-07-04_at_11.52.11_PM_kztvxg.jpg", nameAr: "نبتة 2", nameEn: "Plant 2" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374916/WhatsApp_Image_2026-07-04_at_11.52.12_PM_1_adrfjq.jpg", nameAr: "نبتة 3", nameEn: "Plant 3" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374917/WhatsApp_Image_2026-07-04_at_11.52.12_PM_kybu8a.jpg", nameAr: "نبتة 4", nameEn: "Plant 4" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374918/WhatsApp_Image_2026-07-04_at_11.52.13_PM_1_lndnzr.jpg", nameAr: "نبتة 5", nameEn: "Plant 5" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374919/WhatsApp_Image_2026-07-04_at_11.52.13_PM_2_pph4tz.jpg", nameAr: "نبتة 6", nameEn: "Plant 6" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374920/WhatsApp_Image_2026-07-04_at_11.52.13_PM_3_fegq27.jpg", nameAr: "نبتة 7", nameEn: "Plant 7" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374920/WhatsApp_Image_2026-07-04_at_11.52.13_PM_zfehyw.jpg", nameAr: "نبتة 8", nameEn: "Plant 8" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374921/WhatsApp_Image_2026-07-04_at_11.56.59_PM_2_bqpfbo.jpg", nameAr: "نبتة 9", nameEn: "Plant 9" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374922/WhatsApp_Image_2026-07-04_at_11.56.59_PM_3_j0mlag.jpg", nameAr: "نبتة 10", nameEn: "Plant 10" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374923/WhatsApp_Image_2026-07-04_at_11.56.59_PM_4_rmlfci.jpg", nameAr: "نبتة 11", nameEn: "Plant 11" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374924/WhatsApp_Image_2026-07-04_at_11.56.59_PM_5_hckj1e.jpg", nameAr: "نبتة 12", nameEn: "Plant 12" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374924/WhatsApp_Image_2026-07-04_at_11.56.59_PM_6_xn2mb8.jpg", nameAr: "نبتة 13", nameEn: "Plant 13" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374925/WhatsApp_Image_2026-07-04_at_11.56.59_PM_7_dizmsn.jpg", nameAr: "نبتة 14", nameEn: "Plant 14" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374926/WhatsApp_Image_2026-07-04_at_11.56.59_PM_nivos5.jpg", nameAr: "نبتة 15", nameEn: "Plant 15" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374927/WhatsApp_Image_2026-07-04_at_11.57.00_PM_1_bujl3k.jpg", nameAr: "نبتة 16", nameEn: "Plant 16" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374927/WhatsApp_Image_2026-07-04_at_11.57.00_PM_2_vx3db9.jpg", nameAr: "نبتة 17", nameEn: "Plant 17" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374930/WhatsApp_Image_2026-07-04_at_11.57.00_PM_4_gs3sjz.jpg", nameAr: "نبتة 18", nameEn: "Plant 18" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374931/WhatsApp_Image_2026-07-04_at_11.57.00_PM_5_peku52.jpg", nameAr: "نبتة 19", nameEn: "Plant 19" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374931/WhatsApp_Image_2026-07-04_at_11.57.00_PM_6_o0n7q5.jpg", nameAr: "نبتة 20", nameEn: "Plant 20" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374932/WhatsApp_Image_2026-07-04_at_11.57.00_PM_l4wx3h.jpg", nameAr: "نبتة 21", nameEn: "Plant 21" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374934/WhatsApp_Image_2026-07-04_at_11.57.01_PM_2_h7hdml.jpg", nameAr: "نبتة 22", nameEn: "Plant 22" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374934/WhatsApp_Image_2026-07-04_at_11.57.01_PM_3_by0u4z.jpg", nameAr: "نبتة 23", nameEn: "Plant 23" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374935/WhatsApp_Image_2026-07-04_at_11.57.01_PM_4_zeepcf.jpg", nameAr: "نبتة 24", nameEn: "Plant 24" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374936/WhatsApp_Image_2026-07-04_at_11.57.01_PM_5_d0f0fu.jpg", nameAr: "نبتة 25", nameEn: "Plant 25" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374937/WhatsApp_Image_2026-07-04_at_11.57.01_PM_6_wszj3w.jpg", nameAr: "نبتة 26", nameEn: "Plant 26" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374937/WhatsApp_Image_2026-07-04_at_11.57.01_PM_ch4gj6.jpg", nameAr: "نبتة 27", nameEn: "Plant 27" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374938/WhatsApp_Image_2026-07-04_at_11.57.02_PM_1_ujwsk9.jpg", nameAr: "نبتة 28", nameEn: "Plant 28" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374939/WhatsApp_Image_2026-07-04_at_11.57.02_PM_2_tup7lj.jpg", nameAr: "نبتة 29", nameEn: "Plant 29" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374940/WhatsApp_Image_2026-07-04_at_11.57.02_PM_3_iib3k8.jpg", nameAr: "نبتة 30", nameEn: "Plant 30" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374941/WhatsApp_Image_2026-07-04_at_11.57.02_PM_4_ndu9uk.jpg", nameAr: "نبتة 31", nameEn: "Plant 31" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374942/WhatsApp_Image_2026-07-04_at_11.57.02_PM_5_p994ga.jpg", nameAr: "نبتة 32", nameEn: "Plant 32" }
    ]
  },
  {
    id: "local_wild",
    nameAr: "الأشجار المحلية والبرية",
    nameEn: "Local and Wild Trees",
    descAr: "أشجار سعودية ومحلية مناسبة للبيئة الصحراوية ودعم الاستدامة ومكافحة التصحر.",
    descEn: "Saudi and local trees suitable for the desert environment, supporting sustainability and combating desertification.",
    examplesAr: ["السدر", "السمر", "الطلح النجدي", "الأكاسيا", "الأشجار البرية المناسبة للمناخ السعودي"],
    examplesEn: ["Ziziphus", "Samar", "Najdi Talh", "Acacia", "Wild trees suitable for Saudi climate"],
    img: mediaData.products[1].url,
    gallery: [
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783640436/3f94c320-a8ad-4f6e-bfe1-a3a86b792d3c.jpg", nameAr: "شجرة محلية 1", nameEn: "Local Tree 1" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534248/WhatsApp_Image_2026-07-08_at_9.08.09_PM_1_t2y2w6.jpg", nameAr: "شجرة محلية 2", nameEn: "Local Tree 2" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534247/WhatsApp_Image_2026-07-08_at_9.08.09_PM_2_wb9sjz.jpg", nameAr: "شجرة محلية 3", nameEn: "Local Tree 3" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534250/WhatsApp_Image_2026-07-08_at_9.08.09_PM_peu7lv.jpg", nameAr: "شجرة محلية 4", nameEn: "Local Tree 4" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534249/WhatsApp_Image_2026-07-08_at_9.08.10_PM_iofosz.jpg", nameAr: "شجرة محلية 5", nameEn: "Local Tree 5" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534249/WhatsApp_Image_2026-07-08_at_9.08.11_PM_1_yjcawb.jpg", nameAr: "شجرة محلية 6", nameEn: "Local Tree 6" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534250/WhatsApp_Image_2026-07-08_at_9.08.11_PM_iskjeh.jpg", nameAr: "شجرة محلية 7", nameEn: "Local Tree 7" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534251/WhatsApp_Image_2026-07-08_at_9.08.12_PM_1_rsag6k.jpg", nameAr: "شجرة محلية 8", nameEn: "Local Tree 8" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534251/WhatsApp_Image_2026-07-08_at_9.08.12_PM_xtzfpb.jpg", nameAr: "شجرة محلية 9", nameEn: "Local Tree 9" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534253/WhatsApp_Image_2026-07-08_at_9.08.13_PM_1_mx4cpz.jpg", nameAr: "شجرة محلية 10", nameEn: "Local Tree 10" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534253/WhatsApp_Image_2026-07-08_at_9.08.13_PM_2_rcqrex.jpg", nameAr: "شجرة محلية 11", nameEn: "Local Tree 11" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534254/WhatsApp_Image_2026-07-08_at_9.08.13_PM_3_sqmlei.jpg", nameAr: "شجرة محلية 12", nameEn: "Local Tree 12" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534254/WhatsApp_Image_2026-07-08_at_9.08.13_PM_spn9c1.jpg", nameAr: "شجرة محلية 13", nameEn: "Local Tree 13" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534255/WhatsApp_Image_2026-07-08_at_9.08.16_PM_1_lwvarl.jpg", nameAr: "شجرة محلية 14", nameEn: "Local Tree 14" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534256/WhatsApp_Image_2026-07-08_at_9.08.16_PM_2_xua9eg.jpg", nameAr: "شجرة محلية 15", nameEn: "Local Tree 15" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534257/WhatsApp_Image_2026-07-08_at_9.08.16_PM_3_tvpdpz.jpg", nameAr: "شجرة محلية 16", nameEn: "Local Tree 16" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534258/WhatsApp_Image_2026-07-08_at_9.08.16_PM_4_mhrojf.jpg", nameAr: "شجرة محلية 17", nameEn: "Local Tree 17" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534258/WhatsApp_Image_2026-07-08_at_9.08.16_PM_te0jmi.jpg", nameAr: "شجرة محلية 18", nameEn: "Local Tree 18" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534257/WhatsApp_Image_2026-07-08_at_9.08.17_PM_1_yrr6lb.jpg", nameAr: "شجرة محلية 19", nameEn: "Local Tree 19" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534258/WhatsApp_Image_2026-07-08_at_9.08.17_PM_2_z3zlff.jpg", nameAr: "شجرة محلية 20", nameEn: "Local Tree 20" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534267/WhatsApp_Image_2026-07-08_at_9.08.17_PM_rqvxg2.jpg", nameAr: "شجرة محلية 21", nameEn: "Local Tree 21" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534259/WhatsApp_Image_2026-07-08_at_9.08.18_PM_1_v3ngtu.jpg", nameAr: "شجرة محلية 22", nameEn: "Local Tree 22" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534267/WhatsApp_Image_2026-07-08_at_9.08.18_PM_2_rsh2ju.jpg", nameAr: "شجرة محلية 23", nameEn: "Local Tree 23" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534262/WhatsApp_Image_2026-07-08_at_9.08.18_PM_3_al0jwd.jpg", nameAr: "شجرة محلية 24", nameEn: "Local Tree 24" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534268/WhatsApp_Image_2026-07-08_at_9.08.18_PM_spzxli.jpg", nameAr: "شجرة محلية 25", nameEn: "Local Tree 25" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534268/WhatsApp_Image_2026-07-08_at_9.08.19_PM_tfv11o.jpg", nameAr: "شجرة محلية 26", nameEn: "Local Tree 26" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534267/WhatsApp_Image_2026-07-08_at_9.08.20_PM_cdsqkq.jpg", nameAr: "شجرة محلية 27", nameEn: "Local Tree 27" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534267/WhatsApp_Image_2026-07-08_at_9.08.21_PM_1_fes2m1.jpg", nameAr: "شجرة محلية 28", nameEn: "Local Tree 28" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534269/WhatsApp_Image_2026-07-08_at_9.08.21_PM_2_ewevqs.jpg", nameAr: "شجرة محلية 29", nameEn: "Local Tree 29" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534274/WhatsApp_Image_2026-07-08_at_9.08.21_PM_3_jr67q7.jpg", nameAr: "شجرة محلية 30", nameEn: "Local Tree 30" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534272/WhatsApp_Image_2026-07-08_at_9.08.21_PM_yuw6vf.jpg", nameAr: "شجرة محلية 31", nameEn: "Local Tree 31" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534272/WhatsApp_Image_2026-07-08_at_9.08.22_PM_w2ev0w.jpg", nameAr: "شجرة محلية 32", nameEn: "Local Tree 32" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534272/WhatsApp_Image_2026-07-08_at_9.08.23_PM_1_ni3tc7.jpg", nameAr: "شجرة محلية 33", nameEn: "Local Tree 33" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534272/WhatsApp_Image_2026-07-08_at_9.08.23_PM_2_sttyfd.jpg", nameAr: "شجرة محلية 34", nameEn: "Local Tree 34" }
    ]
  },
  {
    id: "shade_trees",
    nameAr: "أشجار الظل",
    nameEn: "Shade Trees",
    descAr: "أشجار مناسبة لتوفير الظل وتحسين جودة المساحات الخارجية في الفلل، القصور، الطرق، والمشاريع التجارية.",
    descEn: "Trees suitable for providing shade and improving the quality of outdoor spaces in villas, palaces, roads, and commercial projects.",
    examplesAr: ["اللبخ", "النيم", "الفيكس", "اللوز الهندي", "أشجار ظل كبيرة"],
    examplesEn: ["Albizia", "Neem", "Ficus", "Indian Almond", "Large shade trees"],
    img: mediaData.products[2].url,
  },
  {
    id: "ornamental",
    nameAr: "أشجار الزينة",
    nameEn: "Ornamental Trees",
    descAr: "أشجار ونباتات جمالية تضيف قيمة بصرية للمداخل، الحدائق، المنتجعات، والواجهات التجارية.",
    descEn: "Aesthetic trees and plants that add visual value to entrances, gardens, resorts, and commercial facades.",
    examplesAr: ["التابوبيا", "البونسيانا", "الفلفل الرفيع", "أشجار مزهرة", "أشجار موسمية"],
    examplesEn: ["Tabebuia", "Poinciana", "Schinus", "Flowering trees", "Seasonal trees"],
    img: mediaData.products[3].url,
  },
  {
    id: "drought_resistant",
    nameAr: "الأشجار المقاومة للجفاف",
    nameEn: "Drought Resistant Trees",
    descAr: "أشجار تتحمل الحرارة وقلة المياه وتناسب مشاريع الاستدامة والبيئات الجافة.",
    descEn: "Trees that tolerate heat and water scarcity, suitable for sustainability projects and dry environments.",
    examplesAr: ["الأكاسيا", "السدر", "السمر", "أشجار تتحمل حرارة الرياض", "أشجار قليلة الاحتياج للمياه"],
    examplesEn: ["Acacia", "Ziziphus", "Samar", "Heat tolerant trees", "Low water trees"],
    img: mediaData.products[4].url,
  },
  {
    id: "shrubs",
    nameAr: "الشجيرات والنباتات التجميلية",
    nameEn: "Shrubs and Cosmetic Plants",
    descAr: "نباتات وشجيرات مناسبة لتنسيق الحدائق والممرات والمداخل والمسطحات الخارجية.",
    descEn: "Plants and shrubs suitable for landscaping, pathways, entrances, and outdoor areas.",
    examplesAr: ["الشجيرات التجميلية", "النباتات المزهرة", "النباتات العطرية", "مغطيات التربة"],
    examplesEn: ["Cosmetic shrubs", "Flowering plants", "Aromatic plants", "Ground covers"],
    img: mediaData.products[0].url,
    gallery: [
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374914/WhatsApp_Image_2026-07-04_at_11.52.09_PM_ofjyqg.jpg", nameAr: "نبتة 1", nameEn: "Plant 1" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374915/WhatsApp_Image_2026-07-04_at_11.52.11_PM_kztvxg.jpg", nameAr: "نبتة 2", nameEn: "Plant 2" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374916/WhatsApp_Image_2026-07-04_at_11.52.12_PM_1_adrfjq.jpg", nameAr: "نبتة 3", nameEn: "Plant 3" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374917/WhatsApp_Image_2026-07-04_at_11.52.12_PM_kybu8a.jpg", nameAr: "نبتة 4", nameEn: "Plant 4" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374918/WhatsApp_Image_2026-07-04_at_11.52.13_PM_1_lndnzr.jpg", nameAr: "نبتة 5", nameEn: "Plant 5" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374919/WhatsApp_Image_2026-07-04_at_11.52.13_PM_2_pph4tz.jpg", nameAr: "نبتة 6", nameEn: "Plant 6" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374920/WhatsApp_Image_2026-07-04_at_11.52.13_PM_3_fegq27.jpg", nameAr: "نبتة 7", nameEn: "Plant 7" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374920/WhatsApp_Image_2026-07-04_at_11.52.13_PM_zfehyw.jpg", nameAr: "نبتة 8", nameEn: "Plant 8" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374921/WhatsApp_Image_2026-07-04_at_11.56.59_PM_2_bqpfbo.jpg", nameAr: "نبتة 9", nameEn: "Plant 9" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374922/WhatsApp_Image_2026-07-04_at_11.56.59_PM_3_j0mlag.jpg", nameAr: "نبتة 10", nameEn: "Plant 10" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374923/WhatsApp_Image_2026-07-04_at_11.56.59_PM_4_rmlfci.jpg", nameAr: "نبتة 11", nameEn: "Plant 11" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374924/WhatsApp_Image_2026-07-04_at_11.56.59_PM_5_hckj1e.jpg", nameAr: "نبتة 12", nameEn: "Plant 12" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374924/WhatsApp_Image_2026-07-04_at_11.56.59_PM_6_xn2mb8.jpg", nameAr: "نبتة 13", nameEn: "Plant 13" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374925/WhatsApp_Image_2026-07-04_at_11.56.59_PM_7_dizmsn.jpg", nameAr: "نبتة 14", nameEn: "Plant 14" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374926/WhatsApp_Image_2026-07-04_at_11.56.59_PM_nivos5.jpg", nameAr: "نبتة 15", nameEn: "Plant 15" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374927/WhatsApp_Image_2026-07-04_at_11.57.00_PM_1_bujl3k.jpg", nameAr: "نبتة 16", nameEn: "Plant 16" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374927/WhatsApp_Image_2026-07-04_at_11.57.00_PM_2_vx3db9.jpg", nameAr: "نبتة 17", nameEn: "Plant 17" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374930/WhatsApp_Image_2026-07-04_at_11.57.00_PM_4_gs3sjz.jpg", nameAr: "نبتة 18", nameEn: "Plant 18" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374931/WhatsApp_Image_2026-07-04_at_11.57.00_PM_5_peku52.jpg", nameAr: "نبتة 19", nameEn: "Plant 19" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374931/WhatsApp_Image_2026-07-04_at_11.57.00_PM_6_o0n7q5.jpg", nameAr: "نبتة 20", nameEn: "Plant 20" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374932/WhatsApp_Image_2026-07-04_at_11.57.00_PM_l4wx3h.jpg", nameAr: "نبتة 21", nameEn: "Plant 21" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374934/WhatsApp_Image_2026-07-04_at_11.57.01_PM_2_h7hdml.jpg", nameAr: "نبتة 22", nameEn: "Plant 22" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374934/WhatsApp_Image_2026-07-04_at_11.57.01_PM_3_by0u4z.jpg", nameAr: "نبتة 23", nameEn: "Plant 23" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374935/WhatsApp_Image_2026-07-04_at_11.57.01_PM_4_zeepcf.jpg", nameAr: "نبتة 24", nameEn: "Plant 24" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374936/WhatsApp_Image_2026-07-04_at_11.57.01_PM_5_d0f0fu.jpg", nameAr: "نبتة 25", nameEn: "Plant 25" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374937/WhatsApp_Image_2026-07-04_at_11.57.01_PM_6_wszj3w.jpg", nameAr: "نبتة 26", nameEn: "Plant 26" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374937/WhatsApp_Image_2026-07-04_at_11.57.01_PM_ch4gj6.jpg", nameAr: "نبتة 27", nameEn: "Plant 27" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374938/WhatsApp_Image_2026-07-04_at_11.57.02_PM_1_ujwsk9.jpg", nameAr: "نبتة 28", nameEn: "Plant 28" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374939/WhatsApp_Image_2026-07-04_at_11.57.02_PM_2_tup7lj.jpg", nameAr: "نبتة 29", nameEn: "Plant 29" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374940/WhatsApp_Image_2026-07-04_at_11.57.02_PM_3_iib3k8.jpg", nameAr: "نبتة 30", nameEn: "Plant 30" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374941/WhatsApp_Image_2026-07-04_at_11.57.02_PM_4_ndu9uk.jpg", nameAr: "نبتة 31", nameEn: "Plant 31" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374942/WhatsApp_Image_2026-07-04_at_11.57.02_PM_5_p994ga.jpg", nameAr: "نبتة 32", nameEn: "Plant 32" }
    ]
  },
  {
    id: "climbers",
    nameAr: "النباتات المتسلقة ومغطيات التربة",
    nameEn: "Climbers and Ground Covers",
    descAr: "حلول نباتية لتغطية الأسوار، الجدران، الممرات، والمساحات المفتوحة.",
    descEn: "Plant solutions for covering fences, walls, pathways, and open spaces.",
    examplesAr: ["النباتات المتسلقة", "مغطيات التربة", "النباتات الزاحفة", "نباتات الحدائق الخارجية"],
    examplesEn: ["Climbing plants", "Ground covers", "Creeping plants", "Outdoor garden plants"],
    img: mediaData.products[1].url,
  },
  {
    id: "projects",
    nameAr: "أشجار ونباتات المشاريع",
    nameEn: "Project Trees and Plants",
    descAr: "مجموعة مناسبة للمشاريع الحكومية، المطورين العقاريين، الفنادق، المنتجعات، والمشاريع التجارية.",
    descEn: "A collection suitable for government projects, real estate developers, hotels, resorts, and commercial projects.",
    examplesAr: ["أشجار الطرق", "أشجار المنتزهات", "أشجار المداخل", "أشجار المجمعات السكنية", "أشجار المشاريع السياحية"],
    examplesEn: ["Road trees", "Park trees", "Entrance trees", "Residential complex trees", "Tourism project trees"],
    img: mediaData.products[2].url,
  },
  {
    id: "rare",
    nameAr: "الأشجار النادرة والمميزة",
    nameEn: "Rare and Special Trees",
    descAr: "مجموعة مختارة من الأشجار النادرة أو ذات القيمة الجمالية العالية للمشاريع الفاخرة والخاصة.",
    descEn: "A selected group of rare or highly aesthetic trees for luxurious and private projects.",
    examplesAr: ["أشجار نادرة", "أشجار مميزة للقصور", "أشجار فاخرة للمداخل", "أشجار ذات طابع خاص"],
    examplesEn: ["Rare trees", "Special trees for palaces", "Luxurious entrance trees", "Special character trees"],
    img: mediaData.products[3].url,
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
    window.open("https://wa.me/966553308786?text=" + encodeURIComponent(
      `مرحباً رايات نجد، أرغب في الاستفسار عن قسم: ${selectedCategory?.nameAr}`
    ), "_blank");
  };

  return (
    <section id="nurseries" className="py-16 md:py-20 bg-white dark:bg-bg-primary border-t border-text-main/5 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <motion.div
             initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="max-w-3xl"
           >
             <h2 className="text-3xl md:text-5xl font-bold text-gradient-identity mb-6 leading-relaxed py-2 md:leading-relaxed">
                {t("المشاتل", "Nurseries")} <span className="text-gradient-green">{t("والأشجار", "and Trees")}</span>
             </h2>
             <p className="text-lg text-text-muted leading-relaxed rtl:text-right ltr:text-left">
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
              className={`bg-bg-primary border border-text-main/5 rounded-xl md:rounded-2xl p-2 md:p-4 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col cursor-pointer ${index === categories.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              <div className="flex items-center gap-2 mb-2 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Trees className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h3 className="text-[11px] md:text-sm font-bold text-text-main leading-tight">{language === 'ar' ? category.nameAr : category.nameEn}</h3>
              </div>
              
              <p className="hidden md:block text-text-muted mb-4 leading-relaxed flex-grow text-xs line-clamp-3">
                {language === 'ar' ? category.descAr : category.descEn}
              </p>
              
              <div className="hidden md:block mb-4">
                <h4 className="text-xs font-bold text-text-main mb-2">{t("أمثلة:", "Examples:")}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {(language === 'ar' ? category.examplesAr : category.examplesEn).map((ex: string, i: number) => (
                    <span key={i} className="text-[10px] px-2 py-1 bg-bg-secondary rounded-full text-text-muted border border-text-main/5 line-clamp-1 max-w-[80px]">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-row items-center gap-1.5 md:gap-2 mt-auto pt-2 md:pt-3 border-t border-text-main/5">
                <button 
                  className="flex-grow py-1.5 md:py-2 px-1 bg-bg-secondary hover:bg-primary hover:text-white text-text-main rounded-md md:rounded-lg text-[9px] md:text-[11px] font-bold transition-colors flex items-center justify-center gap-1"
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
              className="bg-bg-primary border border-text-main/10 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
            >
              <div className="md:w-2/5 h-64 md:h-auto relative bg-bg-secondary">
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
                    <h3 className="text-3xl font-black text-text-main mb-2">
                      {language === 'ar' ? selectedCategory.nameAr : selectedCategory.nameEn}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="hidden md:flex bg-bg-secondary text-text-muted p-2 rounded-full hover:bg-text-main/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-text-main font-bold mb-2 flex items-center gap-2">
                      <Info className="w-4 h-4 text-primary" />
                      {t("الوصف", "Description")}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {language === 'ar' ? selectedCategory.descAr : selectedCategory.descEn}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-text-main font-bold mb-3 flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-primary" />
                      {t("أمثلة من الأنواع المتوفرة", "Examples of Available Types")}
                    </h4>
                    <ul className="space-y-2">
                      {(language === 'ar' ? selectedCategory.examplesAr : selectedCategory.examplesEn).map((ex: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-text-muted text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary/60" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedCategory.gallery && selectedCategory.gallery.length > 0 && (
                  <div>
                    <h4 className="text-text-main font-bold mb-3 flex items-center gap-2">
                      <Trees className="w-4 h-4 text-primary" />
                      {t("معرض الصور", "Photo Gallery")}
                    </h4>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {selectedCategory.gallery.map((img: any, idx: number) => (
                        <div key={idx} className="relative group rounded-xl overflow-hidden h-32 bg-bg-secondary border border-text-main/10 shadow-sm">
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
                     <h4 className="text-text-main font-bold mb-3 flex items-center gap-2">
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
                         <span key={idx} className="text-xs font-medium px-3 py-1.5 bg-bg-secondary border border-text-main/5 text-text-main rounded-lg">
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
                    className="flex-1 py-4 bg-bg-secondary hover:bg-text-main/5 text-text-main rounded-xl font-bold transition-colors border border-text-main/10 flex items-center justify-center gap-2"
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
