import AiDesignerTeaser from "../../components/home/AiDesignerTeaser";
import SEO from "../../components/SEO";

export default function AiDesignerTool() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <SEO 
        title="المصمم الذكي بالذكاء الاصطناعي | رايات نجد"
        description="أداة المصمم الذكي المدعومة بالذكاء الاصطناعي لتصميم المساحات الخضراء والحدائق واختيار الأشجار والنباتات الملائمة للمناخ السعودي."
        canonicalUrl="https://www.rayatnajd.com/tools/ai-designer"
      />
      <AiDesignerTeaser />
    </div>
  );
}
