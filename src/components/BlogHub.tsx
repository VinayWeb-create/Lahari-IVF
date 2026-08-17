import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  User, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  Share2,
  X
} from 'lucide-react';
import { BLOGS_DATA } from '../data/blogsData';
import { BlogPost } from '../types';

export const BlogHub: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['All', 'IVF Science', 'PCOS & Genetics', 'Male Fertility'];

  const filteredBlogs = BLOGS_DATA.filter((b) => {
    if (selectedCategory === 'All') return true;
    return b.category === selectedCategory;
  });

  return (
    <section id="blog-section" className="py-16 sm:py-24 bg-white border-t border-slate-100" aria-label="Evidence-Based Fertility Education Hub">
      <div className="w-full max-w-[1920px] 2xl:px-8 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0057D9] text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              Evidence-Based Fertility Education
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Clinical Insights & Research
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Medically reviewed articles authored by senior reproductive endocrinologists and geneticists.
            </p>
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0057D9] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBlogs.map((post) => {
            return (
              <article
                key={post.id}
                onClick={() => setActiveArticle(post)}
                className="bg-[#F8FAFC] rounded-3xl overflow-hidden border border-slate-200/80 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveArticle(post);
                  }
                }}
                aria-label={`${post.title}, read time ${post.readTime}`}
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-800">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0057D9] text-[10px] font-bold">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-[#0057D9] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-[#0057D9] flex items-center justify-center font-bold text-[10px]">
                      {post.author[4] || 'D'}
                    </div>
                    <span className="text-slate-700 font-semibold truncate max-w-[120px]">{post.author}</span>
                  </div>
                  <span className="font-bold text-[#0057D9] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Full Article Reader Modal */}
        {activeArticle && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in"
            role="dialog"
            aria-modal="true"
            aria-label={activeArticle.title}
          >
            <div 
              className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                aria-label="Close article reader"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0057D9]">
                    {activeArticle.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
                    {activeArticle.title}
                  </h2>
                  <div className="text-xs text-slate-500 mt-2 flex items-center gap-3">
                    <span>By {activeArticle.author} ({activeArticle.authorRole})</span>
                    <span>•</span>
                    <span>{activeArticle.date}</span>
                    <span>•</span>
                    <span>{activeArticle.readTime}</span>
                  </div>
                </div>

                <img
                  src={activeArticle.coverImage}
                  alt={activeArticle.title}
                  className="w-full h-64 object-cover rounded-2xl"
                />

                <div className="p-3 bg-teal-50 border border-teal-100 rounded-xl text-xs text-teal-900 flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Medically Reviewed by: {activeArticle.medicallyReviewedBy}</span>
                </div>

                <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {activeArticle.content}
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      onOpenBooking();
                    }}
                    className="px-6 py-3 rounded-xl bg-[#0057D9] text-white text-xs font-bold shadow-lg cursor-pointer"
                  >
                    Discuss this Research in a Consultation
                  </button>

                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-4 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

