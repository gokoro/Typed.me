import React, {useState} from 'react'
import queryString from 'query-string';

import './App.css';
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'

function App() {
  const [onHover, setHover] = useState(false)
  const query = queryString.parse(document.location.search)
  return (
    <a href={"https://typed.sh/author/" + query.username} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} target="_blank" rel="noopener noreferrer" className="box">
        <LeftSection />
        <RightSection data={query} hover={onHover}/>
    </a>
  );
}

export default App;
