import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';
import { Calendar, User, Tag } from 'lucide-react';

export default function BlogList() {
  return (
    <>
      <Helmet>
        <title>مدونة رايات نجد | أحدث المقالات عن التشجير والاستدامة</title>
        <meta name="description" content="اقرأ أحدث المقالات المتخصصة في الزراعة، التشجير الحضري، مشاريع الرياض الخضراء، ومبادرات رؤية 2030 للقطاعات الحكومية والمؤسسات الكبرى." />
        <meta name="keywords" content="الزراعة, التشجير, المشهد الحضري, الاستدامة, النمو, رؤية 2030, الرياض الخضراء, مشاريع التشجير" />
        <link rel="canonical" href="https://rayatnajd.com/blog" />
        <meta property="og:title" content="مدونة رايات نجد | أحدث المقالات عن التشجير والاستدامة" />
        <meta property="og:description" content="اقرأ أحدث المقالات المتخصصة في الزراعة، التشجير الحضري، مشاريع الرياض الخضراء، ومبادرات رؤية 2030 للقطاعات الحكومية والمؤسسات الكبرى." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rayatnajd.com/blog" />
      </Helmet>
      
      <div className="pt-32 pb-20 bg-bg-primary min-h-screen">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-text-main mb-6"
            >
              مدونة <span className="text-primary">رايات نجد</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-muted max-w-2xl mx-auto"
            >
              رؤى وأفكار حول التشجير الحضري، الاستدامة البيئية، وتطوير المشهد الحضري للمؤسسات والمشاريع الكبرى.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 transition-shadow border border-text-main/5 flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="block relative h-60 overflow-hidden group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 right-4 z-20 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-text-main mb-3 hover:text-primary transition-colors leading-relaxed">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-auto">
                    <Tag className="w-4 h-4 text-primary" />
                    <div className="flex gap-2 flex-wrap">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
