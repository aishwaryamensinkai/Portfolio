import React from 'react'
import './index.scss'
import timelineElements from './timelineElements'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Placeholder from '../../../assets/assetsTimeline/placeholder.png'

function Timeline() {
  let iconStyles = { background: '#FFF' }
  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let iconImage
            if (element.image) {
              iconImage = require(`../../../assets/assetsTimeline/${element.image}`)
            } else {
              iconImage = Placeholder
            }

            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
                iconStyle={iconStyles}
                icon={<img src={iconImage} alt={element.company} />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.company}
                </h3>
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                {element.description && (
                  <p className="vertical-timeline-element-description desc">
                    {element.description}
                  </p>
                )}
              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Timeline
