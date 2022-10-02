import React from 'react'

function Main() {
  return (
    <main>
        <section >
            <div className=" main-section">
                <div className="main-data">
                    <h3 className='main-secondary-heading'>
                        SUMMER 2020
                    </h3>
                    <h1 className='main-heading'>
                        NEW COLLECTION
                    </h1>
                    <p className='main-para'>
                    We know how large objects will act, 
but things on a small scale.
                    </p>
                    <button className='main-cta'>SHOP NOW</button>
                </div>
                <div className="main-banner">
                    <img src= {require('../images/main-banner.png')} alt='main-banner' className='main-img'  />
                </div>
            </div>
        </section>
    </main>
  )
}

export default Main