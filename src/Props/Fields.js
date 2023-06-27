import React from 'react'
import style from './field.module.css'

const Fields = props => {
  return (
    <div className={style.filter_fields}>
      <div className={style.filter_fields_container}>
        <div className={style.pro_types}>
          <div className={style.property_section}>
            <input type='checkbox' name='' id='' className={style.check_buttons} />
            <label htmlFor='property' className={style.propery_label}>
              <span className={style.my_property}>{props.place}</span>
            </label>
            <p className={style.filter_field_img}>{props.image}</p>
          </div>
          <div className={style.property_section}>
            <p className={` ${style.quantity} ${style.my_property}`}>{props.value}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fields
