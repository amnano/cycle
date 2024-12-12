type YouTubeProps = {
  id: string
  title?: string
}

const YouTube = ({ id, title = 'YouTube Video' }: YouTubeProps) => {
  return (
    <div className="relative overflow-hidden w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        className="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default YouTube 