import { useEffect, useRef, useState } from 'react'

type Props = {
  title: string
  images: string[]
  onClose: () => void
}

export default function Gallery({ title, images, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState(0)
  const multiple = images.length > 1

  const step = (delta: number) => setIndex((i) => (i + delta + images.length) % images.length)

  useEffect(() => {
    dialogRef.current?.showModal()
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className="gallery"
      aria-label={`Images of ${title}`}
      onClose={onClose}
      // Clicking the backdrop (the dialog itself, outside the content) closes it
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') step(1)
        if (e.key === 'ArrowLeft') step(-1)
      }}
    >
      <div className="gallery-content">
        <div className="gallery-top">
          <span>
            {title}
            {multiple && ` · ${index + 1} / ${images.length}`}
          </span>
          <button className="gallery-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <img src={images[index]} alt={`${title}, image ${index + 1}`} />
        {multiple && (
          <div className="gallery-nav">
            <button onClick={() => step(-1)} aria-label="Previous image">
              ←
            </button>
            <button onClick={() => step(1)} aria-label="Next image">
              →
            </button>
          </div>
        )}
      </div>
    </dialog>
  )
}
