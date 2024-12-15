/* eslint-disable react/prop-types */
//import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { Box } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyParts }) => {
    return (
            <div className='horizontal'>
                {data.map((item) => (
                    <Box
                        key={item.id || item}
                        itemId={item.id || item}
                        title={item.id || item}
                        m='0 40px'
                    >
                        {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item}/>}
                    </Box>
                ))}
            </div>
    );
}

export default HorizontalScrollbar;