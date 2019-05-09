import React from 'react'
import { Rating as SemanticRating } from 'semantic-ui-react'

const Rating = (props) => (
    <SemanticRating defaultRating={props.rating} maxRating={5} disabled size={props.size}/>
)

export default Rating;