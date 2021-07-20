import React from 'react'
import styled from 'styled-components'

const CurrentDateStyled = styled.div`
  display: flex;
  width: 14.68rem;
  height: 5.62rem;
  margin: auto;
  position: absolute;
  bottom: 1.25rem;
  background: linear-gradient(90deg, #536976 0%, #292E49 100%);
  color: var(--white);
  padding: 1.5rem;
  box-sizing: border-box;
  gap: 1rem;
  border-radius: .5rem;
  left: calc(50% - (14.68rem/2) );
  * {
    margin: 0;
  }

  .date {
    font: 400 normal 56px/43px 'Nunito', sans-serif;
  }
  .day{
    font: var(--caption-caption);
    margin-block-end: 0.75rem;
  }
  .country {
    font: var(--caption-caption);
    display: flex;
    gap: .25rem;
  }

`

function CurrentDate({country,degrees}) {
  return (
    <CurrentDateStyled>
      <div className="date">{degrees}</div>
      <div className="current-date-right">
        <p className="day">jueves,15 de julio</p>
        <div className="country">
          <img src="./icons/lugar.png" alt="point"/>
          <p>{country}</p>
        </div>
      </div>
    </CurrentDateStyled>
  )
}

export default CurrentDate
