import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ChromePicker } from "react-color";
import { useState } from 'react';
import Footer from "../components/Footer";

export default function Home() {

  const [color, setColor] = useState("#000");
  const [text, setText] = useState("");
  const [submitedText, setSubmitedText] = useState("");
  const [hexCode, setHexCode] = useState("#000");

  const handleColor = (event) => {
    const newColor = event.hex;
    setColor(newColor);
    setHexCode(newColor);
  }

  const handleText = () => {
    
    const newText = text;
    setSubmitedText(newText);
  }

  const handleTextChange = (e) => {
    
    setText(e.target.value);
  }
  
  const handleClear = () => {
    setText("");
    setSubmitedText("");
  }

  return (
    <div>
      <Head>
        <title>Text Color Changer</title>
      </Head>

      <main className={styles.container}>

        <h1 className={styles.title}>Text Color Changer</h1>

        
        <div className={styles.body}>
          <div className={styles.typeArea}>
            <input type="text" placeholder="Your Text" className={styles.fontInput} value={text} onChange={handleTextChange} />
            <div className={styles.buttons}>

              <button className={styles.submit} onClick={handleText} >Submit</button>
              <button className={styles.submit} onClick={handleClear} >Clear</button>
              
            </div>
            <p className={styles.submitedText} style={{color: color}} >{submitedText}</p>
          </div>
          <div className={styles.picker}>

            <ChromePicker className={styles.colorPicker} color={color} onChange={handleColor} />
            <p className={styles.hex}>Hex Code: {hexCode} </p>
          </div>
        </div>

      </main>
        <Footer />

        
    </div>
  )
}
