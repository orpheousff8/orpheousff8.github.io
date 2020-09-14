import React from 'react';
import './App.css';
import Navbar from './components/MyNavbar';
import PictureCard from './components/pictureCardDeck';
import Footer from './components/MyFooter';

function App() {
  const myObj = [
    {image: require('../src/img/1.PNG'), date: '4 April 1868', likeCount: 10, commentCount: 5},
    {image: require('../src/img/2.PNG'), date: 'around 1868', likeCount: 20, commentCount: 8},
    {image: require('../src/img/3.PNG'), date: '27 September 1920', likeCount: 15, commentCount: 8},
    {image: require('../src/img/4.PNG'), date: 'around 1970', likeCount: 30, commentCount: 10},
    {image: require('../src/img/5.PNG'), date: 'around 1983', likeCount: 12, commentCount: 5},
    {image: require('../src/img/6.PNG'), date: '16 April 1985', likeCount: 18, commentCount: 8}
  ];
  return (
    <>
      <div className="App">
        <ul>เขียน UI Pikkanode หน้า Home โดยมี requirement ดังนี้
          <li>Navbar (Logo, create pikka, signup, signin, signout)</li>
          <li>Picture card (row ละ 4 ภาพ, วันที่, จำนวน like, จำนวน comment)</li>
          <li>Footer</li>
        </ul>
        <ul>
          lab optional
        <li>ใช้ style component เพิ่มใน โจทย์ข้อที่แล้ว</li>
          <li>ใช้ CSS module เพิ่มใน โจทย์ข้อที่แล้ว</li>
        </ul>
      </div>
      <hr />
      <div>
        <Navbar/>
        <PictureCard {...myObj}/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
