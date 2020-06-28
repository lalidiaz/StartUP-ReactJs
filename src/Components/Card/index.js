import React from 'react'
import './style.css'


class Card extends React.Component {
    render() {
        const {img, title, description} = this.props.startUp
        
        return (

            <div className='Card'>
                <img src={img} />
                <div class='textWrap'>
                <p className='titleText'>{title}</p>
                <p className='descrip'>{description}</p>
                </div>
            </div>

        )
    }
}
export default Card