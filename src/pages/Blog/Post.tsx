import { useEffect, Suspense, lazy, type ComponentType } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, Globe } from 'lucide-react'
import PluriHubMark from '../../components/PluriHubMark'
import { getPost } from './posts'

type MDXComponent = ComponentType<{ components?: Record<string, ComponentType> }>

const POST_COMPONENTS: Record<string, MDXComponent> = {
  'best-chrome-extension-chatgpt': lazy(() => import('./posts/best-chrome-extension-chatgpt.mdx')),
  'how-to-organize-ai-conversations': lazy(() => import('./posts/how-to-organize-ai-conversations.mdx')),
  'chatgpt-claude-gemini-together': lazy(() => import('./posts/chatgpt-claude-gemini-together.mdx')),
  'stop-losing-ai-conversations': lazy(() => import('./posts/stop-losing-ai-conversations.mdx')),
  'ai-prompt-library-chrome-extension': lazy(() => import('./posts/ai-prompt-library-chrome-extension.mdx')),
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold text-white mt-0 mb-6 leading-tight" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-xl font-semibold text-white mt-10 mb-4 leading-snug" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-base font-semibold text-white mt-7 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[#a1a1aa] leading-relaxed mb-5 text-[15px]" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-[#0EA5E9] hover:text-[#38bdf8] underline underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-white font-semibold" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 mb-5 space-y-2 text-[#a1a1aa]" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2 text-[#a1a1aa]" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed text-[15px]" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-[#0EA5E9] pl-5 my-6 text-[#71717a] italic" {...props} />
  ),
  hr: () => <hr className="border-[#1e1e1e] my-10" />,
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-[#1a1a1a] text-[#0EA5E9] text-[13px] font-mono px-1.5 py-0.5 rounded" {...props} />
  ),
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (el) {
    el.href = href
  } else {
    el = document.createElement('link')
    el.rel = 'canonical'
    el.href = href
    document.head.appendChild(el)
  }
}

function setMetaDescription(content: string) {
  let el = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.name = 'description'
    document.head.appendChild(el)
  }
  el.content = content
}

function setOGMeta(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.content = content
}

function setNameMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.content = content
}

export default function BlogPost() {
  const { slug = '' } = useParams<{ slug: string }>()
  const post = getPost(slug)
  const PostContent = POST_COMPONENTS[slug]

  useEffect(() => {
    if (!post) return

    const prev = {
      title: document.title,
      desc: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? 'https://plurihub.com/',
      ogType: document.querySelector('meta[property="og:type"]')?.getAttribute('content') ?? '',
      ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') ?? '',
      ogDesc: document.querySelector('meta[property="og:description"]')?.getAttribute('content') ?? '',
      ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute('content') ?? '',
      twTitle: document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') ?? '',
      twDesc: document.querySelector('meta[name="twitter:description"]')?.getAttribute('content') ?? '',
    }

    const postUrl = `https://plurihub.com/blog/${post.slug}`

    document.title = `${post.title} — PluriHub Blog`
    setMetaDescription(post.description)
    setCanonical(postUrl)
    setOGMeta('og:type', 'article')
    setOGMeta('og:title', post.title)
    setOGMeta('og:description', post.description)
    setOGMeta('og:url', postUrl)
    setNameMeta('twitter:title', post.title)
    setNameMeta('twitter:description', post.description)

    // BlogPosting structured data
    const schema = document.createElement('script')
    schema.type = 'application/ld+json'
    schema.id = 'blog-post-schema'
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: 'https://plurihub.com/og-image.png',
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      url: postUrl,
      author: {
        '@type': 'Organization',
        name: 'PluriHub',
        url: 'https://plurihub.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PluriHub',
        url: 'https://plurihub.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://plurihub.com/og-image.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': postUrl,
      },
    })
    document.head.appendChild(schema)

    return () => {
      document.title = prev.title
      setMetaDescription(prev.desc)
      setCanonical(prev.canonical)
      setOGMeta('og:type', prev.ogType)
      setOGMeta('og:title', prev.ogTitle)
      setOGMeta('og:description', prev.ogDesc)
      setOGMeta('og:url', prev.ogUrl)
      setNameMeta('twitter:title', prev.twTitle)
      setNameMeta('twitter:description', prev.twDesc)
      document.getElementById('blog-post-schema')?.remove()
    }
  }, [post])

  if (!post || !PostContent) return <Navigate to="/blog" replace />

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-[#1e1e1e] sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-md z-10">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <PluriHubMark height={18} className="text-white" />
            <span className="font-semibold text-white text-sm">PluriHub</span>
          </Link>
          <Link
            to="/blog"
            className="flex items-center gap-1.5 text-xs text-[#52525b] hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            All posts
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-14">
        <div className="mb-8">
          <time className="text-[#3f3f46] text-xs font-mono block mb-4">
            {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </div>

        <article>
          <Suspense fallback={
            <div className="flex items-center gap-2 text-[#3f3f46] text-sm py-20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-pulse" />
              Loading...
            </div>
          }>
            <PostContent components={mdxComponents as Record<string, ComponentType>} />
          </Suspense>
        </article>

        <div className="mt-14 pt-8 border-t border-[#1e1e1e]">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[#52525b] hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            Back to all posts
          </Link>
        </div>
      </main>

      <footer className="border-t border-[#1e1e1e] py-10 px-6 mt-10">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <PluriHubMark height={14} className="text-[#52525b]" />
            <span className="text-[#52525b] text-sm">PluriHub © 2026</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-[#52525b]">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <a href="mailto:info@plurihub.com" className="hover:text-white transition-colors">Support</a>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#52525b]">
            <Globe size={11} />
            Chrome desktop only
          </div>
        </div>
      </footer>
    </div>
  )
}
