import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about" className="py-20">
      <div className="py-10 pb-20" id="about-me">
        <h1 className="heading text-center">
          About 
          <span className="text-purple"> me</span>
        </h1>
      </div>

      <BentoGrid>
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName }) => (
          <BentoGridItem 
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
