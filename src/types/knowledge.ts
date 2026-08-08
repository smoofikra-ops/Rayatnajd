import React from 'react';

export interface GeoMetadata {
  schema: string;
  keywords: string[];
  entityMentions: string[];
  faqReady: boolean;
  knowledgeGraphReady: boolean;
}

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export interface Tag {
  id: string;
  nameAr: string;
  nameEn: string;
}

export interface KnowledgeCategory {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
  slug: string;
}

export interface ContentSection {
  id: string;
  titleAr: string;
  titleEn: string;
  contentAr?: string | React.ReactNode;
  contentEn?: string | React.ReactNode;
}

export interface PillarPage {
  id: string;
  slug: string;
  categoryId: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  heroImage: string;
  sections: ContentSection[];
  seo: SeoMetadata;
  geo: GeoMetadata;
  tags: Tag[];
  relatedServicesIds: string[];
  relatedProjectsIds: string[];
  relatedArticlesIds: string[];
  faqs: { questionAr: string; answerAr: string; questionEn: string; answerEn: string }[];
  downloadableResources: { titleAr: string; titleEn: string; url: string }[];
}

export interface ClusterPage {
  id: string;
  slug: string;
  pillarId: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  heroImage?: string;
  subcategories: string[];
  articleSlots: string[];
  relatedServicesIds: string[];
  relatedProjectsIds: string[];
  relatedCategoriesIds: string[];
  galleryStructure: string[];
  faqs: { questionAr: string; answerAr: string; questionEn: string; answerEn: string }[];
  seo: SeoMetadata;
  geo: GeoMetadata;
  tags: Tag[];
}

export interface Article {
  id: string;
  slug: string;
  clusterId: string;
  titleAr: string;
  titleEn: string;
  heroImage?: string;
  sections: ContentSection[];
  authorId: string;
  publishedAt: string;
  readingTimeMinutes: number;
  seo: SeoMetadata;
  geo: GeoMetadata;
  tags: Tag[];
  faqs: { questionAr: string; answerAr: string; questionEn: string; answerEn: string }[];
  relatedArticles: { title: string; slug: string; type: 'published' | 'slot' }[];
}
