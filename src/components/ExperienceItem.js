import React from 'react';
import { Link } from 'react-router-dom'

function ExperienceItem(expos){
  return (
    <>
      <li className="experiences__item">
        <Link className='experiences__item__link' to={expos.path}>
          <figure className='experiences__item__pic-wrap' data-category={expos.label}>
            <img className='experiences__item__img' src={expos.src} alt='Images Experiences'/>
          </figure>
          <div className='experiences__item__info'>
            <h5 className='experiences__item__text'>{expos.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}
export default ExperienceItem;
