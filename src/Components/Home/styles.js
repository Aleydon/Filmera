import styled from 'styled-components';






export const List = styled.li`
    display: flex;
    text-decoration: none;
    flex-direction: column;
    height: 450px;

    h3{
       font-weight: bold;
       display: flex;
       justify-content: center;
       align-items: center;
       padding-top: 20px;
    }
`;



export const ListContainer = styled.div`
    display: flex;
    flex: 1;
    background-color: #EEE;
    flex-direction: column;
    margin-top: 60px;
    border-radius: 10px; 
    border: 1px solid #888;
`;



export const AcessButton = styled.button`
    height: 60px;
    background-color: darkblue;
    color: white;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
    margin-top: 20px; 
`;