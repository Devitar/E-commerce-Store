import React from 'react'
import { Rating as SemanticRating } from 'semantic-ui-react'

const Rating = () => (
    <SemanticRating defaultRating={3} maxRating={5} disabled />
)

export default Rating;