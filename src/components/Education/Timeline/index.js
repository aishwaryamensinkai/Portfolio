import './index.scss'
import timelineElements from './timelineElements'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

import SchoolIcon from '../../../assets/assetsTimeline/kle.png'
import WorkIcon from '../../../assets/assetsTimeline/kle.png'

function Timeline() {
  let workIconStyles = { background: '#06D6A0' }
  let schoolIconStyles = { background: '#f9c74f' }

  return (
    <div>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon =
            element.type === 'Full-Time' || element.type === 'Part-Time'

          return (
            <VerticalTimelineElement
              key={element.id} // Adding key prop
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={
                isWorkIcon ? (
                  <img src={WorkIcon} alt="Work Icon" />
                ) : (
                  <img src={SchoolIcon} alt="School Icon" />
                )
              }
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              {element.description && ( // Ensure description is present
                <p
                  className="vertical-timeline-element-description"
                  style={{ color: '#444444 !important' }}
                >
                  {element.description}
                </p>
              )}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline
