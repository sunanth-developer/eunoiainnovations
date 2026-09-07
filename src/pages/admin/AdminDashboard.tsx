import { useEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { Button, LinkButton } from '../../components/Button'
import { SectionLabel } from '../../components/SectionLabel'
import { blogCategories, emptyPost, formatPostDate, slugify, type BlogPost } from '../../data/blog'
import { logoutAdmin } from '../../lib/adminAuth'
import { deletePost, exportStore, loadPosts, savePost, subscribeBlog } from '../../lib/blogStore'
import { readBlogImage } from '../../lib/readBlogImage'
import { handleAppLink, navigate } from '../../lib/router'
import { usePageTitle } from '../pageHero'
import styles from './AdminDashboard.module.css'

function editSlugFromUrl() {
  return new URLSearchParams(window.location.search).get('edit')?.trim() || ''
}

export function AdminDashboard() {
  usePageTitle('Admin | Eunoia Innovations')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [draft, setDraft] = useState<BlogPost>(emptyPost())
  const [status, setStatus] = useState('')
  const [imageError, setImageError] = useState('')
  const opened = useRef(false)

  useEffect(() => {
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'robots')
    meta.setAttribute('content', 'noindex, nofollow')
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  useEffect(() => {
    let alive = true
    const read = () => {
      void loadPosts().then((next) => {
        if (!alive) return
        setPosts(next)
        if (opened.current) return
        opened.current = true
        const wanted = editSlugFromUrl()
        const match = wanted
          ? next.find((post) => post.slug === wanted || post.id === wanted)
          : next[0]
        if (match) setDraft({ ...match })
      })
    }
    read()
    const unsubscribe = subscribeBlog(read)
    return () => {
      alive = false
      unsubscribe()
    }
  }, [])

  const selected = useMemo(
    () => posts.find((post) => post.id === draft.id),
    [posts, draft.id],
  )
  const editing = Boolean(selected)

  const edit = (post: BlogPost) => {
    setDraft({ ...post })
    setStatus(`Editing “${post.title}”.`)
    setImageError('')
  }

  const create = () => {
    setDraft(emptyPost())
    setStatus('New post.')
    setImageError('')
  }

  const onTitle = (title: string) => {
    setDraft((current) => ({
      ...current,
      title,
      slug: editing ? current.slug : slugify(title),
    }))
  }

  const onImageFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    try {
      const image = await readBlogImage(file)
      setDraft((current) => ({
        ...current,
        image,
        imageAlt: current.imageAlt || current.title,
      }))
      setImageError('')
    } catch (error) {
      setImageError(error instanceof Error ? error.message : 'Could not add that image.')
    }
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const slug = slugify(draft.slug || draft.title)
    if (!draft.title.trim() || !slug || !draft.body.trim()) {
      setStatus('Title, slug and body are required.')
      return
    }
    const taken = posts.some((post) => post.slug === slug && post.id !== draft.id)
    if (taken) {
      setStatus('That slug is already used.')
      return
    }
    const saved = await savePost({ ...draft, slug })
    setDraft(saved)
    setStatus(
      editing
        ? 'Existing post updated.'
        : saved.published
          ? 'New post saved and published on this browser.'
          : 'New post saved as a draft on this browser.',
    )
  }

  const onDelete = async () => {
    if (!window.confirm(`Delete “${draft.title || 'this post'}”?`)) return
    await deletePost(draft.id)
    const remaining = posts.filter((post) => post.id !== draft.id)
    setDraft(remaining[0] ? { ...remaining[0] } : emptyPost())
    setStatus('Deleted on this browser.')
  }

  const onExport = async () => {
    const store = await exportStore()
    const blob = new Blob([JSON.stringify(store, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'blog.json'
    link.click()
    URL.revokeObjectURL(url)
    setStatus('Downloaded blog.json. Commit it to public/blog.json and deploy to publish for everyone.')
  }

  const onLogout = () => {
    logoutAdmin()
    navigate('/')
  }

  return (
    <div className={styles.page}>
      <header className={`wrap ${styles.head}`}>
        <div>
          <SectionLabel>Dashboard</SectionLabel>
          <h1 className={`display ${styles.title}`}>Write the blog.</h1>
        </div>
        <div className={styles.tools}>
          <Button type="button" variant="ghost" onClick={create}>
            New post
          </Button>
          <Button type="button" variant="ghost" onClick={() => void onExport()}>
            Export JSON
          </Button>
          <Button type="button" variant="ghost" onClick={onLogout}>
            Log out
          </Button>
        </div>
      </header>

      <div className={`wrap ${styles.layout}`}>
        <aside className={styles.list}>
          <p className={styles.count}>{posts.length} posts — click one to edit</p>
          {posts.map((post) => (
            <button
              key={post.id}
              type="button"
              className={`${styles.item} ${post.id === draft.id ? styles.on : ''}`}
              onClick={() => edit(post)}
            >
              {post.image ? (
                <img src={post.image} alt="" className={styles.thumb} />
              ) : (
                <span className={styles.thumbEmpty} aria-hidden="true" />
              )}
              <span className={styles.itemCopy}>
                <span>{post.published ? 'Published' : 'Draft'} · Edit</span>
                <strong>{post.title || 'Untitled'}</strong>
                <em>
                  {formatPostDate(post.date)} / {post.category}
                </em>
              </span>
            </button>
          ))}
        </aside>

        <form className={styles.form} onSubmit={(event) => void onSubmit(event)}>
          <p className={styles.mode}>{editing ? `Editing existing post` : 'Creating a new post'}</p>
          <label>
            Title
            <input value={draft.title} onChange={(event) => onTitle(event.target.value)} required />
          </label>
          <div className={styles.row}>
            <label>
              Slug
              <input
                value={draft.slug}
                onChange={(event) => setDraft((current) => ({ ...current, slug: slugify(event.target.value) }))}
              />
            </label>
            <label>
              Date
              <input
                type="date"
                value={draft.date}
                onChange={(event) => setDraft((current) => ({ ...current, date: event.target.value }))}
              />
            </label>
          </div>
          <label>
            Category
            <select
              value={draft.category}
              onChange={(event) => setDraft((current) => ({ ...current, category: event.target.value }))}
            >
              {blogCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <div className={styles.imageBlock}>
            <p>Image</p>
            {draft.image ? (
              <img src={draft.image} alt={draft.imageAlt || draft.title} className={styles.preview} />
            ) : (
              <div className={styles.previewEmpty}>No image yet</div>
            )}
            <div className={styles.imageActions}>
              <label className={styles.file}>
                {draft.image ? 'Replace image' : 'Upload image'}
                <input type="file" accept="image/*" onChange={(event) => void onImageFile(event)} />
              </label>
              {draft.image ? (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setDraft((current) => ({ ...current, image: '', imageAlt: current.imageAlt }))}
                >
                  Remove image
                </Button>
              ) : null}
            </div>
            {imageError ? <p className={styles.error}>{imageError}</p> : null}
            <label>
              Image URL
              <input
                value={draft.image?.startsWith('data:') ? '' : draft.image || ''}
                placeholder="https://…"
                onChange={(event) =>
                  setDraft((current) => ({ ...current, image: event.target.value.trim() }))
                }
              />
            </label>
            <label>
              Image alt text
              <input
                value={draft.imageAlt || ''}
                onChange={(event) => setDraft((current) => ({ ...current, imageAlt: event.target.value }))}
              />
            </label>
          </div>
          <label>
            Excerpt
            <textarea
              rows={3}
              value={draft.excerpt}
              onChange={(event) => setDraft((current) => ({ ...current, excerpt: event.target.value }))}
            />
          </label>
          <label>
            Body
            <textarea
              rows={12}
              value={draft.body}
              onChange={(event) => setDraft((current) => ({ ...current, body: event.target.value }))}
              required
            />
          </label>
          <label className={styles.check}>
            <input
              type="checkbox"
              checked={draft.published}
              onChange={(event) => setDraft((current) => ({ ...current, published: event.target.checked }))}
            />
            Published on the blog
          </label>
          <div className={styles.actions}>
            <Button type="submit">{editing ? 'Update post' : 'Save post'}</Button>
            {editing ? (
              <Button type="button" variant="ghost" onClick={() => void onDelete()}>
                Delete
              </Button>
            ) : null}
            {draft.slug && draft.published ? (
              <LinkButton
                href={`/blog/${draft.slug}`}
                variant="line"
                onClick={(event) => handleAppLink(event, `/blog/${draft.slug}`)}
              >
                View post
              </LinkButton>
            ) : null}
          </div>
          {status ? <p className={styles.status}>{status}</p> : null}
          <p className={styles.note}>
            Click a post on the left to edit it, including the original field notes. Saves live in
            this browser. Export JSON into <code>public/blog.json</code> and deploy to publish for
            everyone.
          </p>
        </form>
      </div>
    </div>
  )
}
