import { useMemo, useState } from "react";
import { Search, X, ArrowUpLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useSettings } from "../contexts/SettingsContext";
import { servicesData } from "../data/servicesData";
import { projects } from "../data/projects";

export default function SiteSearch() {
  const [open,setOpen]=useState(false);
  const [query,setQuery]=useState("");
  const {language,t}=useSettings();
  const records=useMemo(()=>{
    const base=[
      {ar:"الرئيسية",en:"Home",url:"/"},
      {ar:"من نحن",en:"About",url:"/about"},
      {ar:"مشاريع رايات نجد",en:"Projects",url:"/projects"},
      {ar:"المدونة",en:"Blog",url:"/blog"},
      {ar:"المعرفة والذكاء",en:"Knowledge",url:"/knowledge"},
      {ar:"اتصل بنا",en:"Contact",url:"/contact"},
      {ar:"النخيل العربي",en:"Arabian Palm",url:"/service/palms"},
      {ar:"نخيل واشنطونيا",en:"Washingtonia Palm",url:"/service/palms"},
      {ar:"النخل الملوكي",en:"Royal Palm",url:"/service/palms"},
      {ar:"نخيل جوز الهند",en:"Coconut Palm",url:"/service/palms"}
    ];
    return [...base,...Object.values(servicesData).map((s:any)=>({ar:s.titleAr,en:s.titleEn,url:`/service/${s.id}`})),...projects.map((p:any)=>({ar:p.nameAr||p.titleAr||"",en:p.nameEn||p.titleEn||"",url:`/projects/${p.slug}`}))];
  },[]);
  const results=records.filter(r=>!query.trim()||(`${r.ar} ${r.en}`).toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())).slice(0,15);
  return <>
    <button type="button" onClick={()=>setOpen(true)} aria-label={t("البحث في الموقع","Search website")} title={t("البحث في الموقع","Search website") as string} className="p-2 text-text-muted hover:text-primary transition-colors"><Search className="w-5 h-5"/></button>
    {open&&<div className="fixed inset-0 z-[200] bg-black/65 flex items-start justify-center pt-[10vh] px-4" onMouseDown={e=>{if(e.target===e.currentTarget)setOpen(false)}}>
      <section role="dialog" aria-modal="true" aria-label={t("البحث في رايات نجد","Search Rayat Najd") as string} className="w-full max-w-2xl bg-bg-primary text-text-main border border-card-border rounded-2xl shadow-2xl overflow-hidden" dir={language==="ar"?"rtl":"ltr"}>
        <div className="flex items-center gap-3 p-4 border-b border-card-border">
          <Search className="w-5 h-5 text-primary shrink-0"/>
          <input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder={t("ابحث عن خدمة أو مشروع أو نوع نخيل...","Search services, projects or palms...") as string} className="w-full bg-transparent outline-none text-text-main placeholder:text-text-muted" />
          <button onClick={()=>{setOpen(false);setQuery("")}} aria-label={t("إغلاق","Close") as string}><X className="w-5 h-5"/></button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length===0?<p className="p-6 text-center text-text-muted">{t("لا توجد نتائج مطابقة","No matching results")}</p>:results.map((r,i)=><Link key={r.url+"-"+i} to={r.url} onClick={()=>{setOpen(false);setQuery("")}} className="flex justify-between items-center rounded-xl px-4 py-3 hover:bg-primary/10 transition-colors"><span>{language==="ar"?r.ar:r.en}</span><ArrowUpLeft className="w-4 h-4 text-primary"/></Link>)}
        </div>
      </section>
    </div>}
  </>;
}
