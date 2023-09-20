import React from 'react'
import { Draggable } from 'react-drag-reorder';

const Drag = ({filter}) => {

    const getChangedPos = (currentPos, newPos) => {
        return console.log(currentPos, newPos);
      };
    

  return (
    <Draggable onPosChange={getChangedPos}>
    {
      filter.map((item, id)=>(
        <div className='img_container' key={id}>
          <img className='d_image' src={item.url} alt="" />
          <div className="caption">
            <h3>
            {item.tag}
            </h3>
          </div>
        </div>
      ))
    }
  </Draggable>
  )
}

export default Drag