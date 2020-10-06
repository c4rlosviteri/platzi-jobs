import React, { useState, useRef } from 'react'
import { formatDate, stripHtml } from '../utils'

function Card({
  company,
  companyUrl,
  datePosted,
  description,
  howToApply,
  id,
  location,
  title,
  ...props
}) {
  const cardRef = useRef(null)
  const [showFullText, setShowFullText] = useState(false)
  const strippedDescription = stripHtml(description)

  const handleToggleText = () => {
    if (showFullText) {
      window.scrollTo({
        top: cardRef.current.offsetTop - 20,
        behavior: 'smooth',
      })
    }

    setShowFullText((prev) => !prev)
  }

  return (
    <article aria-labelledby={id} className="card" ref={cardRef} {...props}>
      <h3 className="card__heading" id={id}>
        {title}
      </h3>
      <address className="card__info">
        <i className="icon icon--location" />
        <span>
          <b>Location:</b> {location}
        </span>
      </address>
      <p className="card__info">
        <i className="icon icon--company" />
        <span>
          <b>Company:</b> <a href={companyUrl}>{company}</a>
        </span>
      </p>
      <p className="card__info">
        <i className="icon icon--date" />
        <span>
          <b>Date posted:</b> {formatDate(datePosted)}
        </span>
      </p>
      <p data-testid="description">
        {showFullText
          ? strippedDescription
          : `${strippedDescription.substr(0, 240)}…`}
        <span
          role="button"
          tabIndex={0}
          className="card__show-more"
          onClick={handleToggleText}
        >
          {showFullText ? 'See less' : 'See more'}
        </span>
      </p>
      <div className="card__apply">
        <h4>How to apply:</h4>
        <div dangerouslySetInnerHTML={{ __html: howToApply }} />
      </div>
    </article>
  )
}

export default Card
