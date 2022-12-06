import React, { useEffect } from 'react'
// import { Container, Paper, Chip } from '@mui/material';
// import cars from '../cars.json' // remove this

const Makes = (props) => {
    console.log('Props:', props);
    // const id = props.match.params.id
    // {/* Change cars to props.cars and remove the cars.json import above */}
    // const car = props.cars.find(c => c.id == id)
    useEffect(() => {
        props.fetchMakes()

    }, [props])

    return (
       <div>
           Hello World
       </div>
    )
}

export default Makes