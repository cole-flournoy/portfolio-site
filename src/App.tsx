import { useState } from 'react'
import './styles/App.scss'
import {
  About,
  Socials,
  Education,
  Contact,
  Skills,
  Build,
  Testimonials,
  Experience
} from './sections'
import initializeAnalytics from './analytics/initializeAnalytics'
import sendSectionHoverEvent from './analytics/sendSectionHoverEvent'
import { useMediaQuery } from 'react-responsive'
import * as bp from './constants/breakpoints'
import AppSmallScreen from './appLayouts/AppSmallScreen'
import AppMediumCompactScreen from './appLayouts/AppMediumCompactScreen'
import AppMediumScreen from './appLayouts/AppMediumScreen'

export type HoveredSection = 'socials' | 'education' | 'skills' | 'build' | 'testimonials' | 'experience' | null
export type GridSection = Exclude<HoveredSection, null> | 'about' | 'contact'
export interface HoverableScreenLayoutProps {
  hoveredSection: HoveredSection;
  handleMouseEnter: (section: HoveredSection) => void;
  setHoveredSection: (section: HoveredSection) => void;
}

initializeAnalytics()

function App() {
  const [hoveredSection, setHoveredSection] = useState<HoveredSection>(null)

  const handleMouseEnter = (sectionName: HoveredSection) => {
    setHoveredSection(sectionName)
    sendSectionHoverEvent(sectionName!)
  }

  const isSmallScreen = useMediaQuery({ query: `(max-width: ${bp.SMALL}px)` })
  const isMediumCompactScreen = useMediaQuery({ query: `(min-width: ${bp.SMALL + 1}px) and (max-width: ${bp.MEDIUM_1}px)` })
  const isRegularMediumScreen = useMediaQuery({ query: `(min-width: ${bp.MEDIUM_1 + 1}px) and (max-width: ${bp.MEDIUM_2}px)` })
  const isLargeScreen = useMediaQuery({ query: `(min-width: ${bp.MEDIUM_2 + 1}px)` })


  return (
    <>
      {isSmallScreen && <AppSmallScreen />}

      {isMediumCompactScreen && <AppMediumCompactScreen hoveredSection={hoveredSection} handleMouseEnter={handleMouseEnter} setHoveredSection={setHoveredSection} />}

      {isRegularMediumScreen && <AppMediumScreen hoveredSection={hoveredSection} handleMouseEnter={handleMouseEnter} setHoveredSection={setHoveredSection} />}

      {isLargeScreen &&
      // LARGE SCREEN VIEW 
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
      </div> }
    </>
  )
}

export default App
