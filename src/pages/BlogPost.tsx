import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS } from '../data/blogData';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Schema.org structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "رايات نجد",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rayatnajd.com/logo.png" // Placeholder
      }
    },
    "datePublished": post.date,
    "description": post.metaDescription
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
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
