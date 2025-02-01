import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="home">
        <BentoGrid>
            {gridItems.map((item) => (
                <BentoGridItem
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                header={null}
                icon={null}
                className={item.className}
                />
            ))}
        </BentoGrid>

    </section>
  )
}

export default Grid