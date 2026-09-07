const MAX_EDGE = 1600
const MAX_BYTES = 8 * 1024 * 1024

export function readBlogImage(file: File) {
  if (!file.type.startsWith('image/')) {
    return Promise.reject(new Error('Choose an image file.'))
  }
  if (file.size > MAX_BYTES) {
    return Promise.reject(new Error('Image must be under 8 MB.'))
  }

  return new Promise<string>((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const image = new Image()
    image.onload = () => {
      URL.revokeObjectURL(url)
      const scale = Math.min(1, MAX_EDGE / Math.max(image.width, image.height))
      const canvas = document.createElement('canvas')
      canvas.width = Math.max(1, Math.round(image.width * scale))
      canvas.height = Math.max(1, Math.round(image.height * scale))
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Could not process that image.'))
        return
      }
      ctx.fillStyle = '#030708'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
      resolve(canvas.toDataURL('image/jpeg', 0.82))
    }
    image.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Could not read that image.'))
    }
    image.src = url
  })
}
