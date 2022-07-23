import React from 'react';
import './Header.css';
import People from "../../assets/people.png";
import AI from "../../assets/ai.png";
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
  <div className='gpt3__header-content'>
    <h1 className='gradient__text'>Let's build Something Amazing with GPT-3 OpenAI</h1>
    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
    <div className='gpt3__header-content__input'>
      <input type="email" placeholder="Your Email Address"/>
      <button type="button">Get Started</button>
    </div>
    <div className='gpt3__header-content__people'>
      <img src={People} alt="I am people"/>
      <p>More Than 16.8K people are being visiting on daily basis.</p>
    </div>
    </div>
    <div className='gpt3__header-image'>
      <img src={AI} alt="an ai image"/>
    </div>
  </div>
  )
}

export default Header