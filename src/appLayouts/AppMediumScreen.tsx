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
import type { HoverableScreenLayoutProps } from '../App.tsx'
import sendSectionHoverEvent from '../analytics/sendSectionHoverEvent.ts'

export default function AppMediumScreen({ hoveredSection, handleMouseEnter, setHoveredSection }: HoverableScreenLayoutProps) {
  return (
    <>
      <div className='grid-column'>
        <div className='grid-row'>
          <div className='grid-section' style={{ width: '50%' }} onMouseEnter={() => sendSectionHoverEvent('about')}>
            <About />
          </div>
          
          <div className='grid-column' style={{ width: '50%' }}>
            <div className='grid-section contact-section' style={{ height: '50%' }} onMouseEnter={() => sendSectionHoverEvent('contact')}>
              <Contact />
            </div>
            <div className='grid-section' style={{ minHeight: '60px', height: '50%' }} onMouseEnter={() => handleMouseEnter('socials')} onMouseLeave={() => setHoveredSection(null)}>
              <Socials isHovered={hoveredSection === 'socials'}/>
            </div>
          </div>
        </div>
        
        <div className='grid-row'>
          <div className='grid-column' style={{ width: '35%' }}>
            <div className='grid-section' style={{ height: '60%' }} onMouseEnter={() => handleMouseEnter('education')} onMouseLeave={() => setHoveredSection(null)}>
              <Education isHovered={hoveredSection === 'education'} />
            </div>     
            <div className='grid-section' style={{ height: '40%' }} onMouseEnter={() => handleMouseEnter('skills')} onMouseLeave={() => setHoveredSection(null)}>
              <Skills isHovered={hoveredSection === 'skills'} />
            </div>
          </div>

          <div className='grid-section experience-section' style={{ width: '65%' }} onMouseEnter={() => handleMouseEnter('experience')} onMouseLeave={() => setHoveredSection(null)}>
            <Experience isHovered={hoveredSection === 'experience'} />
          </div>
        </div>

        <div className='grid-row'>
          <div className='grid-section' style={{ width: '85%' }} onMouseEnter={() => handleMouseEnter('testimonials')} onMouseLeave={() => setHoveredSection(null)}>
            <Testimonials />
          </div>
          <div className='grid-section' style={{ width: '15%' }} onMouseEnter={() => handleMouseEnter('build')} onMouseLeave={() => setHoveredSection(null)}>
            <Build isHovered={hoveredSection === 'build'} />
          </div>
        </div>
      </div>
    </>
  )
}