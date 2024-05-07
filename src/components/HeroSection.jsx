import React from 'react'

const HeroSection = () => {
  return (
    <div className='galaxy container-fluid'>
        <h1 className='text-center text-light'>Science fiction Stories</h1>

        <span className='d-flex justify-content-around mt-3'>
        <button type="button" class="a btn btn-primary">New</button>
        <button type="button" class="b btn"  >In progress</button>
        <button type="button" class="c btn">Completed</button>
        <button type="button" class="d btn">Clear All</button>




        </span>
      
    </div>
  )
}

export default HeroSection
