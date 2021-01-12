import styled from 'styled-components';

const Area = styled.textarea`
    color: #666;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1px;
    text-align: justify;
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    background-color: transparent;
    resize: none;
    font-family: 'Mulish', sans-serif;
    &:focus{
        outline: none;
    }
`

const TextArea = (prop) => {
    return (
        <Area>
        {prop.textContent}
        </Area>
    );
}

export default TextArea