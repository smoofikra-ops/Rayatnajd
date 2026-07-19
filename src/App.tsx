/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import CatalogViewer from "./pages/CatalogViewer";
import ToolsCenter from "./pages/ToolsCenter";
import AiDesignerTool from "./pages/tools/AiDesignerTool";
import TreeSelectionTool from "./pages/tools/TreeSelectionTool";
import PlantSuggestionTool from "./pages/tools/PlantSuggestionTool";
import CostCalculatorTool from "./pages/tools/CostCalculatorTool";
import ProjectUploadTool from "./pages/tools/ProjectUploadTool";
import AiSiteAnalysisTool from "./pages/tools/AiSiteAnalysisTool";
import FloatingHomeButton from "./components/FloatingHomeButton";
import GoogleAnalytics from "./components/GoogleAnalytics";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GoogleAnalytics />
        <FloatingHomeButton />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="service/:id" element={<ServicePage />} />
            <Route path="tools" element={<ToolsCenter />} />
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/:slug" element={<BlogPost />} />
          </Route>
          
          <Route path="/tools/ai-designer" element={<AiDesignerTool />} />
          <Route path="/tools/tree-selection" element={<TreeSelectionTool />} />
          <Route path="/tools/plant-suggestion" element={<PlantSuggestionTool />} />
          <Route path="/tools/cost-calculator" element={<CostCalculatorTool />} />
          <Route path="/tools/project-upload" element={<ProjectUploadTool />} />
          <Route path="/tools/ai-site-analysis" element={<AiSiteAnalysisTool />} />
          
          <Route path="/catalog" element={<CatalogViewer />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
