import { useState } from 'react'
import './App.css'
import useTranslate from './hooks/useTranslate';
function App() {
  const [text,setText] = useState('')
  const [translateLanguage,setTranslateLanguage] = useState('en');
  const [value,setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = useTranslate(text,translateLanguage);
    setValue(data);
  }
  
  return (
    <>
      <div className='main-container'>
        <form
        onSubmit={handleSubmit}
        >
        <input
        type="text"
        placeholder='Enter Text'
        onChange={(e)=>setText(e.target.value)}
        ></input>
        <br></br>
        <label>Choose Language</label><br></br>
        <select
        id="lang"
        name="lang"
        onChange={(e)=>{
          setTranslateLanguage(e.target.value)
        }}
        >
              <option value="aa">Afar</option>
              <option value="ab">Abkhazian</option>
              <option value="af">Afrikaans</option>
              <option value="ak">Akan</option>
              <option value="sl">Albanian</option>
              <option value="am">Amharic</option>
              <option value="an">Aragonese</option>
              <option value="hy">Armenian</option>
              <option value="as">Assamese	</option>
              <option value="av">Avaric</option>
              <option value="ae">Avestan</option>
              <option value="en">English</option>
              <option value="kn">Kannada</option>
        </select><br></br>
        <button type='submit'>Translate</button>
        </form>
        <div>
        <input type='text' disabled value={value}></input>
        <button onClick={()=>{
          navigator.clipboard.writeText('la');
          alert('Copied')
        }}>Copy</button>
        </div>
      </div>
    </>
  )
}

export default App
