import React, { useEffect } from 'react'
// import { Container, Paper, Chip } from '@mui/material';
import Button from '@mui/material/Button';


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
           <Button onClick={() => {
               console.log('click')
           }} variant ="contained" > Makes </Button>
       </div>
    )
}

export default Makes