import styled from 'styled-components';


export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 16px;

@media(max-width: 500px){
  
grid-template-columns: 1fr  ;
}
`;

export const Postcard = styled.div`

border-radius: 4px;
background-color: #fff;
    padding: 10px;
`;

export const FullPost = styled.div`
    background-color: #7ebc0a;
    position: fixed;
    bottom: 12px;
    padding: 10px;
    border-radius: 4px;
    right: 12px;

    > input   {
      background: transparent;
      font-size: 1.5em; 
      width: -webkit-fill-available;
    }
    > textarea{
      background: transparent;
      font-size: 1em;
      resize: none
    }
    > button{
      padding: 6px 24px;
    margin-top: 8px;
    border-radius: 2px;
    font-weight: bold;
    }

    >hr {
    background: #e4ffd6;
    height: 1px;
    margin: 8px 0px;
    }
`;