import styled from 'styled-components';
import { defaultTheme } from "../../style/color";
import { useEffect } from 'react';

const Text = styled.p`
    margin: 0;
    font-size: 13px;
    color: ${defaultTheme.line_color};
`

function TodayText(props) {
    const today = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = monthNames[today.getMonth()];
    const yyyy = today.getFullYear();
    const todayDateString = `${mm} ${dd}, ${yyyy}`

    useEffect(()=>{
        props.setNoteMadeDate(todayDateString);
    },[])

    return (<Text>{todayDateString}</Text>)
}

export default TodayText;