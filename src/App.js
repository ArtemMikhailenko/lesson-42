import React, { useState } from "react";
import Article from "./components/Article";
import LangContext from "./components/lang-context";

 function App () {

  const article = {
      description: 'Article description:',
      preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
      content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
  }
  const articleUA = {
    description: 'Опис статті:',
    preview:'NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.',
    content:'Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об\'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.'
  }
  const [isShow, setIsShow]  = useState(false);
  const [buttonText, setButtonText] = useState(true);
  const [active , setActive] = useState(true);


  function btnActive(){
    setActive(false)
  }
  function btnUnActive(){
    setActive(true)
  }
  const toggleArticle = () => {
    isShow ? setIsShow(false) : setIsShow(true);
    setButtonText(!buttonText)
  }

  return (
    <div className="wrapper">
      <h1 className="title">NVIDIA news</h1>
      <div className="article">
        
          <Article active = {active} show={isShow} text={article}>
          <div className="article__title">
            <h2>NVIDIA Accelerated AI on Azure</h2>
          </div>
          </Article>
        
        <div className="article__actions">
          <button className="article__btn" onClick={btnActive} >Mark as read</button>
          <button onClick={toggleArticle} className="article__btn">{buttonText ? "Read" : "Close"}</button>
          <button onClick={btnUnActive} className="article__btn">Mark as unread</button>
        </div>
      </div>
      <div className="lang">
        <button onClick={articleUA} className="lang-btn">UA</button>
        <button className="lang-btn">EN</button>
      </div>
    </div> 
    );
  }
export default App;