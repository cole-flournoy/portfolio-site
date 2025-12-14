import { useState } from 'react'
import './styles/App.scss'
import initializeAnalytics from './analytics/initializeAnalytics'
import sendSectionHoverEvent from './analytics/sendSectionHoverEvent'
import { useMediaQuery } from 'react-responsive'
import * as bp from './constants/breakpoints'
import AppSmallScreen from './appLayouts/AppSmallScreen'
import AppMediumCompactScreen from './appLayouts/AppMediumCompactScreen'
import AppMediumScreen from './appLayouts/AppMediumScreen'
import AppLargeScreen from './appLayouts/AppLargeScreen'

export type HoveredSection = 'socials' | 'education' | 'skills' | 'build' | 'testimonials' | 'experience' | null
export type GridSection = Exclude<HoveredSection, null> | 'about' | 'contact'
export interface HoverableScreenLayoutProps {
  hoveredSection: HoveredSection;
  handleMouseEnter: (section: HoveredSection) => void;
  setHoveredSection: (section: HoveredSection) => void;
}

initializeAnalytics()

export default function App() {
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
      {isLargeScreen && <AppLargeScreen hoveredSection={hoveredSection} handleMouseEnter={handleMouseEnter} setHoveredSection={setHoveredSection} />}
    </>
  )
}