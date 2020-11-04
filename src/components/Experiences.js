import React from 'react';
import ExperienceItem from './ExperienceItem';
import './Experiences.css';

function Experiences() {
  return (
    <div className='experiences'>
      <h1>Mes experiences</h1>
      <div className="experiences__container">
        <div className="experiences__wrapper">
          <ul className="experiences__items">
            <ExperienceItem
              src='images/img-2.jpg'
              text='Technicien en informatique chez ATOUT-SERVICE Madagascar'
              label='Technicien en Informatique | 04/07/2018 - 04/07/2019'
              path='/Experiences'
            />
            <ExperienceItem
              src='images/img-5.jpg'
              text='Technicien SAV chez SODIM'
              label='Technicien SAV | Fevrier 2020'
              path='/Experiences'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Experiences;
