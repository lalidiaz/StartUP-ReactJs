import React from 'react'
import './style.css'


class Card extends React.Component {
    render() {
        const {img, name, description} = this.props
        
        return (

            <div className='Card'>
                <img src={img} />
                <div class='textWrap'>
                <p className='titleText'>{name}</p>
                <p className='descrip'>{description}</p>
                </div>
            </div>

        )
    }
}
export default Card