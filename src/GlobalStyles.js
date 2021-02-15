import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialising;
}

*, input, button{
  border: 0;
  outline: 0;
  font-family: 'roboto', sans-serif; 
}

html, body, #root {
  height: 100%;
  background-color: #f4f4f4;
  color: #333;
}



`;
