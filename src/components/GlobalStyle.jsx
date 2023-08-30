import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  color: #27374D;
    margin: 0;
    font-family: 
};

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}


ul,
ol,
a {
  margin: 0;
  padding: 0;
  list-style: none;
};

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
}

ul {
  display:flex;
justify-content: center;
max-width: 250px;
border: 3px dashed #526D82;
padding: 10px;
margin: 15px;
}
`