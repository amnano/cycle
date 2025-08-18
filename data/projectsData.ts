interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Cyclepil Media Hub',
    description: `Discover our comprehensive media library featuring epilator repair videos, tutorials, 
    and visual guides. Access high-quality images and videos to better understand epilator 
    maintenance and repair techniques.`,
    imgSrc: '/static/images/logo.png',
    href: 'https://media.cyclepil.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
