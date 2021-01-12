import styled from 'styled-components';
import { defaultTheme } from '../../style/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchArea = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    position: relative;
    .search_input{
        width: 100%;
        border: none;
        border-radius:20px;
        background-color: #FFE3E3;
        padding:8px 20px;
        color: ${defaultTheme.line_color};
        font-family: 'Mulish', sans-serif;
        font-size: 14px;
        letter-spacing: 1px;
        &::placeholder{
            color: #EBBEBF;
        }
        &:focus{
            outline: none;
        }
    }
    .icon{
        position: absolute;
        color: ${defaultTheme.line_color};
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
`


const searchBar = () => {
    return (
        <SearchArea>
            <input type="text" className="search_input" placeholder="Search"/>
            <FontAwesomeIcon icon={faSearch} className="icon"/>
        </SearchArea>
    );
}

export default searchBar;