import sendSectionHoverEvent from '../analytics/sendSectionHoverEvent'
import type { HoverableScreenLayoutProps } from '../App'
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

export default function AppLargeScreen({ hoveredSection, handleMouseEnter, setHoveredSection }: HoverableScreenLayoutProps) {
  return (
    <>
      <div className='summary-grid-container'>
        <div className='grid-row'>
          <div className='grid-column' style={{ width: '25%' }}>
            <div className='grid-section' style={{ height: '80%' }} onMouseEnter={() => sendSectionHoverEvent('about')}>
              <About />
            </div>
            <div className='grid-section' style={{ height: '60px' }} onMouseEnter={() => handleMouseEnter('socials')} onMouseLeave={() => setHoveredSection(null)}>
              <Socials isHovered={hoveredSection === 'socials'}/>
            </div>
          </div>
          
          <div className='grid-section experience-section' style={{ width: '50%' }} onMouseEnter={() => handleMouseEnter('experience')} onMouseLeave={() => setHoveredSection(null)}>
            <Experience isHovered={hoveredSection === 'experience'} />
          </div>
          
          <div className='grid-column' style={{ width: '25%' }}>
            <div className='grid-section' style={{ height: '60%' }} onMouseEnter={() => handleMouseEnter('education')} onMouseLeave={() => setHoveredSection(null)}>
              <Education isHovered={hoveredSection === 'education'} />
            </div>
            <div className='grid-section contact-section' style={{ height: '40%' }} onMouseEnter={() => sendSectionHoverEvent('contact')}>
              <Contact />
            </div>
          </div>
        </div>
        
        <div className='grid-row'>
          <div className='grid-section' style={{ width: '15%' }} onMouseEnter={() => handleMouseEnter('skills')} onMouseLeave={() => setHoveredSection(null)}>
            <Skills isHovered={hoveredSection === 'skills'} />
          </div>
          <div className='grid-section' style={{ width: '15%' }} onMouseEnter={() => handleMouseEnter('build')} onMouseLeave={() => setHoveredSection(null)}>
            <Build isHovered={hoveredSection === 'build'} />
          </div>
          <div className='grid-section' style={{ width: '70%' }} onMouseEnter={() => handleMouseEnter('testimonials')} onMouseLeave={() => setHoveredSection(null)}>
            <Testimonials />
          </div>
        </div>
      </div>
    </>
  )
}