import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const postUrl = `https://www.rayatnajd.com/blog/${post.slug}`;

  // Schema.org structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": post.author || "رايات نجد"
    },
    "publisher": {
      "@type": "Organization",
      "name": "رايات نجد للتشجير والاستدامة البيئية",
      "url": "https://www.rayatnajd.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cdn.rayatnajd.com/01-brand/logo/rayatnajd-logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "description": post.metaDescription
  };

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.tags.join(', ')}
        canonicalUrl={postUrl}
        ogType="article"
        ogTitle={post.title}
        ogDescription={post.metaDescription}
        ogImage={post.image}
        publishedTime={post.date}
        author={post.author || "رايات نجد"}
        breadcrumbs={[
          { name: "الرئيسية", item: "/" },
          { name: "المدونة", item: "/blog" },
          { name: post.title, item: `/blog/${post.slug}` }
        ]}
        structuredData={structuredData}
      />
      
      <div className="pt-32 pb-20 bg-white dark:bg-bg-primary min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium mb-8 transition-colors">
            <ArrowRight className="w-5 h-5 rtl:rotate-0 ltr:rotate-180" />
            العودة للمدونة
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-text-main mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted border-y border-text-main/10 py-4 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{post.date}</span>
              </div>
            </div>
            
            <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div 
              className="prose prose-lg dark:prose-invert max-w-none text-text-main prose-headings:text-text-main prose-a:text-primary hover:prose-a:text-primary-light"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-12 pt-8 border-t border-text-main/10">
              <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-primary" /> الكلمات المفتاحية
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-bg-secondary text-text-muted px-3 py-1.5 rounded-lg text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
