import styled from 'styled-components';

const Area = styled.div`
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
    &.dark{
        color: #fff;
    }
`

const TextArea = (props) => {
    function setNoteContent(content){
        const reg = /(?![^<]*>)[^<]/g
        const wrapped = content.replace(reg, letter=>`<span>${letter}</span>\n`)
        props.setNoteContent(wrapped)
    }
    return (
        <Area 
        contentEditable="true"
        onInput={(e)=>{setNoteContent(e.target.innerHTML)}}
        className={props.theme==='dark-theme'?'dark':''}>
        </Area>
    );
}

export default TextArea