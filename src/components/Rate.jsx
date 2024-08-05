import {useState} from "react";
import { Rating, ThinStar } from '@smastrom/react-rating'
import styled from "styled-components";

const StyledTitle= styled.h2`
    background-color: cadetblue;
    display: flex;
    margin: auto;
    padding: 2.5% 0;
`;


const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#47eddb',
    inactiveFillColor: '#cef5f1'
}

function getRating(rating) {
    switch (rating) {
        case 1:
            return 'Terrible :(';
        case 2:
            return 'Bad';
        case 3:
            return 'Average';
        case 4:
            return 'Good';
        case 5:
            return 'Excellent :)';
        default:
            return 'N/A';
    }
}

export default function Rate() {
    const [rating, setRating] = useState(0)
    return (
        <>
            <StyledTitle>Rate my Show and Tell</StyledTitle>
            <Rating style={{maxWidth: 300}}
                    value={rating}
                    onChange={setRating}
                    itemStyles={myStyles}/>
            <div>
                <div>{`Selected: ${getRating(rating)}`}</div>
            </div>
            <br/>
            <button onClick={() => setRating(0)}>
                Reset
            </button>
        </>
    );
}
