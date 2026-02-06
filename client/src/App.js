
import './App.css';

import { Box, styled} from '@mui/material';

//components
import Header from './components/header.jsx';
import InfoHeader from './components/InfoHeader.jsx';
import Articles from './components/Articles.jsx';


// const Container= styled(Box)`
// width:75%;
// margin:40px auto 0 auto;
// `

const Container = styled(Box)`
  max-width:1100px;
  margin:40px auto 0 auto;
`


function App() {
  return (
    <div className="App">
      <Box>
       <Header />
       <Container>
        <InfoHeader />
        <Articles />
      </Container>
      </Box>
    </div>
  );
}

export default App;


