import { useEffect, useState } from 'react'
import { bodyToParagraphs, formatPostDate, type BlogPost } from '../data/blog'
import { isAdminAuthed } from '../lib/adminAuth'
import { loadPostBySlug, loadPublishedPosts, subscribeBlog } from '../lib/blogStore'
import { handleAppLink, withBase } from '../lib/router'
import { LinkButton } from '../components/Button'
import { SectionLabel } from '../components/SectionLabel'
import { usePageTitle } from './pageHero'
import styles from './BlogPage.module.css'

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
  usePageTitle('Blog | Eunoia Innovations')
  const posts = usePublishedPosts()

  return (
    <div className={styles.page}>
      <header className={`wrap ${styles.hero}`}>
        <SectionLabel>Blog</SectionLabel>
        <h1 className={`display ${styles.title}`}>Notes from the water.</h1>
        <p className="lede">
          Field notes and writing from Eunoia — marine robotics, water management,
          autonomy, deployments and survey technology.
        </p>
      </header>

      {posts.length ? (
        <div className={`wrap ${styles.grid}`}>
          {posts.map((post) => (
            <a
              key={post.id}
              className={styles.card}
              href={withBase(`/blog/${post.slug}`)}
              onClick={(event) => handleAppLink(event, `/blog/${post.slug}`)}
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
        <p className={`wrap ${styles.empty}`}>No published posts yet.</p>
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

  usePageTitle(post?.title ? `${post.title} | Eunoia Innovations` : 'Blog | Eunoia Innovations')

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
          <SectionLabel>Blog</SectionLabel>
          <h1 className={`display ${styles.title}`}>Post not found.</h1>
          <p className="lede">That article is unpublished or does not exist.</p>
        </header>
        <div className={`wrap ${styles.cta}`}>
          <LinkButton href="/blog" onClick={(event) => handleAppLink(event, '/blog')}>
            Back to blog
          </LinkButton>
        </div>
      </div>
    )
  }

  return (
    <article className={styles.page}>
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
        <LinkButton href="/blog" variant="ghost" onClick={(event) => handleAppLink(event, '/blog')}>
          All posts
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
