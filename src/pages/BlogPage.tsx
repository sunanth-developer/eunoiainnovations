import { useEffect, useState } from 'react'
import { blogCategories, bodyToParagraphs, formatPostDate, type BlogPost } from '../data/blog'
import { pageSeo } from '../data/site'
import { isAdminAuthed } from '../lib/adminAuth'
import { loadPostBySlug, loadPublishedPosts, subscribeBlog } from '../lib/blogStore'
import { handleAppLink, withBase } from '../lib/router'
import { LinkButton } from '../components/Button'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { SectionLabel } from '../components/SectionLabel'
import styles from './BlogPage.module.css'
import site from './site.module.css'

function usePublishedPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    let alive = true
    const read = () => {
      void loadPublishedPosts().then((next) => {
        if (alive) setPosts(next)
      })
    }
    read()
    const unsubscribe = subscribeBlog(read)
    return () => {
      alive = false
      unsubscribe()
    }
  }, [])

  return posts
}

export function BlogPage() {
  const posts = usePublishedPosts()
  const [category, setCategory] = useState('All')
  const visible = category === 'All' ? posts : posts.filter((post) => post.category === category)

  return (
    <div className={styles.page}>
      <Seo
        title={pageSeo.insights.title}
        description={pageSeo.insights.description}
        path="/insights"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
        ])}
      />
      <header className={`wrap ${styles.hero}`}>
        <SectionLabel>Field notes</SectionLabel>
        <h1 className={`display ${styles.title}`}>Notes from the water.</h1>
        <p className="lede">
          Field notes on marine robotics, water management, autonomy, deployments,
          survey technology and sustainability.
        </p>
        <div className={site.chips}>
          {['All', ...blogCategories].map((item) => (
            <button
              key={item}
              type="button"
              className={category === item ? site.chipOn : ''}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </header>

      {visible.length ? (
        <div className={`wrap ${styles.grid}`}>
          {visible.map((post) => (
            <a
              key={post.id}
              className={styles.card}
              href={withBase(`/insights/${post.slug}`)}
              onClick={(event) => handleAppLink(event, `/insights/${post.slug}`)}
            >
              {post.image ? (
                <img src={post.image} alt={post.imageAlt || post.title} className={styles.cardImg} />
              ) : null}
              <p className={styles.meta}>
                {post.category}
                <span>{formatPostDate(post.date)}</span>
              </p>
              <h2 className={`display ${styles.headline}`}>{post.title}</h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <span className={styles.more}>Read</span>
            </a>
          ))}
        </div>
      ) : (
        <p className={`wrap ${styles.empty}`}>
          {posts.length ? 'No notes in this category yet.' : 'No published notes yet.'}
        </p>
      )}

      <div className={`wrap ${styles.cta}`}>
        <LinkButton href="/contact" onClick={(event) => handleAppLink(event, '/contact')}>
          Start a conversation
        </LinkButton>
      </div>
    </div>
  )
}

type BlogPostPageProps = {
  slug: string
}

export function BlogPostPage({ slug }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined)

  useEffect(() => {
    let alive = true
    const read = () => {
      void loadPostBySlug(slug).then((found) => {
        if (!alive) return
        if (!found || (!found.published && !isAdminAuthed())) {
          setPost(null)
          return
        }
        setPost(found)
      })
    }
    read()
    const unsubscribe = subscribeBlog(read)
    return () => {
      alive = false
      unsubscribe()
    }
  }, [slug])

  const title = post?.title ? `${post.title} | Eunoia Innovations` : pageSeo.insights.title

  if (post === undefined) {
    return (
      <div className={styles.page}>
        <p className={`wrap ${styles.empty}`}>Loading…</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className={styles.page}>
        <header className={`wrap ${styles.hero}`}>
          <SectionLabel>Field notes</SectionLabel>
          <h1 className={`display ${styles.title}`}>Post not found.</h1>
          <p className="lede">That article is unpublished or does not exist.</p>
        </header>
        <div className={`wrap ${styles.cta}`}>
          <LinkButton href="/insights">
            Back to field notes
          </LinkButton>
        </div>
      </div>
    )
  }

  return (
    <article className={styles.page}>
      <Seo
        title={title}
        description={post.excerpt}
        path={`/insights/${post.slug}`}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          datePublished: post.date,
          description: post.excerpt,
        }}
      />
      <header className={`wrap ${styles.hero}`}>
        <p className={styles.meta}>
          {post.category}
          <span>{formatPostDate(post.date)}</span>
        </p>
        <h1 className={`display ${styles.title}`}>{post.title}</h1>
        <p className="lede">{post.excerpt}</p>
        {post.image ? (
          <img src={post.image} alt={post.imageAlt || post.title} className={styles.heroImg} />
        ) : null}
      </header>
      <div className={`wrap ${styles.body}`}>
        {bodyToParagraphs(post.body).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className={`wrap ${styles.cta}`}>
        <LinkButton href="/insights" variant="ghost">
          All notes
        </LinkButton>
        {isAdminAuthed() ? (
          <LinkButton
            href={`/admin?edit=${post.slug}`}
            variant="line"
            onClick={(event) => handleAppLink(event, `/admin?edit=${post.slug}`)}
          >
            Edit post
          </LinkButton>
        ) : null}
        <LinkButton href="/contact" onClick={(event) => handleAppLink(event, '/contact')}>
          Start a conversation
        </LinkButton>
      </div>
    </article>
  )
}
