import GanttExperience from '../assets/gantt_experience.svg?react'
import './styles/Experience.scss'

const Experience = ({isHovered}: { isHovered: boolean }) => {
  return (
    <span className={`experience ${isHovered ? 'hovered' : ''}`} style={{  }}>
      <span style={{ fontSize: 'var(--text-size-header)', letterSpacing: 'var(--letter-spacing-header)', position: 'relative', textAlign: 'center' }}>
        FULL STACK DEVELOPER
        <span style={{ position: 'absolute', bottom: '-8px', left: '50%', transform: 'translate(-50.5%, -50%)', height: '1px', width: '88%', backgroundColor: 'var(--color-slightly-faded-light-text)' }}>
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '7px', width: '7px', backgroundColor: 'var(--color-grid-background)', borderRadius: '50%', zIndex: 5 }}></span> 
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '3px', width: '3px', backgroundColor: 'inherit', borderRadius: '50%', zIndex: 10 }}></span> 
        </span> 
      </span>
      <GanttExperience className='gantt_experience' style={{ }} />
    </span>
  )
}

export default Experience