import { 
  About,
  Socials,
  Education,
  Contact,
  Skills,
  Build,
  Testimonials,
  Experience
 } from '../sections'

export default function AppSmallScreen() {
  return (
    <>
      <div className='grid-column'>
        <div className='grid-row' style={{ width: '100%' }}>
          <div className='grid-section' style={{ width: '85%' }}>
            <About />
          </div>

          <div className='grid-section' style={{ width: '15%' }}>
            <Socials isHovered={true}/>
          </div>
        </div>
      
        <div className='grid-section experience-section'>
          <Experience isHovered={false} />
        </div>

        <div className='grid-section contact-section'>
          <Contact />
        </div>
        
        <div className='grid-row' style={{ width: '100%' }}>
          <div className='grid-section' style={{ width: '40%' }}>
            <Skills isHovered={true} />
          </div>
          
          <div className='grid-column' style={{ width: '60%' }}>
            <div className='grid-section'>
              <Education isHovered={true} />
            </div>

            <div className='grid-section' style={{ height: '100%' }}>
              <Build isHovered={true} />
            </div>
          </div>
        </div>
        
        <div className='grid-section' style={{ padding: '15px 10px'}}>
          <Testimonials />
        </div>
      </div>
    </>  
  )
}