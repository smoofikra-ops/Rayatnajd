/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import Layout from "./components/Layout";
import FloatingHomeButton from "./components/FloatingHomeButton";
import GoogleAnalytics from "./components/GoogleAnalytics";

const Home = lazy(() => import("./pages/Home"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const CatalogViewer = lazy(() => import("./pages/CatalogViewer"));
const ToolsCenter = lazy(() => import("./pages/ToolsCenter"));
const AiDesignerTool = lazy(() => import("./pages/tools/AiDesignerTool"));
const TreeSelectionTool = lazy(() => import("./pages/tools/TreeSelectionTool"));
const PlantSuggestionTool = lazy(() => import("./pages/tools/PlantSuggestionTool"));
const CostCalculatorTool = lazy(() => import("./pages/tools/CostCalculatorTool"));
const ProjectUploadTool = lazy(() => import("./pages/tools/ProjectUploadTool"));
const AiSiteAnalysisTool = lazy(() => import("./pages/tools/AiSiteAnalysisTool"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const KnowledgeHub = lazy(() => import("./pages/knowledge/KnowledgeHub"));
const PillarPage = lazy(() => import("./pages/knowledge/PillarPage"));
const ClusterPage = lazy(() => import("./pages/knowledge/ClusterPage"));
const CategoryPage = lazy(() => import("./pages/knowledge/CategoryPage"));
const ArticlePage = lazy(() => import("./pages/knowledge/ArticlePage"));
const Terms = lazy(() => import("./pages/policies/Terms"));
const Privacy = lazy(() => import("./pages/policies/Privacy"));
const Warranty = lazy(() => import("./pages/policies/Warranty"));
const ReturnPolicy = lazy(() => import("./pages/policies/ReturnPolicy"));

// A simple loading fallback
const PageLoader = () => (
  <div className="flex justify-center items-center h-screen bg-bg-secondary">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GoogleAnalytics />
        <FloatingHomeButton />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="service/:id" element={<ServicePage />} />
              <Route path="tools" element={<ToolsCenter />} />
              <Route path="knowledge" element={<KnowledgeHub />} />
              <Route path="knowledge/pillar/:slug" element={<PillarPage />} />
              <Route path="knowledge/cluster/:slug" element={<ClusterPage />} />
              <Route path="knowledge/category/:slug" element={<CategoryPage />} />
              <Route path="knowledge/article/:slug" element={<ArticlePage />} />
              <Route path="blog" element={<BlogList />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="terms" element={<Terms />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="warranty" element={<Warranty />} />
              <Route path="return-policy" element={<ReturnPolicy />} />
            </Route>
            
            <Route path="/tools/ai-designer" element={<AiDesignerTool />} />
            <Route path="/tools/tree-selection" element={<TreeSelectionTool />} />
            <Route path="/tools/plant-suggestion" element={<PlantSuggestionTool />} />
            <Route path="/tools/cost-calculator" element={<CostCalculatorTool />} />
            <Route path="/tools/project-upload" element={<ProjectUploadTool />} />
            <Route path="/tools/ai-site-analysis" element={<AiSiteAnalysisTool />} />
            
            <Route path="/catalog" element={<CatalogViewer />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
