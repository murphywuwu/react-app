import React, { useState, useContext, useEffect } from 'react';
import Row from './Row';
const { ThemeContext, LocaleContext } from '../Context/';

function Greeting (props) {
  const [name] = useFormInput('Mary');
  const[surname] = useFormInput('Poppins');
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);
  const width = useWindowWidth();

  useDocumentTitle(name);
 
  return (
    <section>
      <Row label="name">
        <input { ...name }/>
      </Row> 
    </section>
  )
}

function useFormInput (initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  } 

  return {
    value,
    onChange: handleChange,
  }
}

// a custom hook
function useWindowWidth () {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  return width;
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;     
  })
 
}

export default Greeting;