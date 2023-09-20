import React from 'react'

const UnDrag = ({filter}) => {

  return (
    <>
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
    </>
  )
}

export default UnDrag