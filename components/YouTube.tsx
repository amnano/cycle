import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const YouTube = ({ id, title }: { id: string; title: string }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <LiteYouTubeEmbed
          id={id}
          title={title}
          wrapperClass="relative left-0 top-0 h-full w-full"
          playerClass="absolute top-0 left-0"
        />
      </div>
    </div>
  )
}

export default YouTube
