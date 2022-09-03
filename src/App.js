import './App.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsScreen from './components/newsscreen';
import Footer from './components/footer';
import Overlay from './components/overlay';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function App() {
  var storage = localStorage.getItem("select");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    var green = document.querySelector('#green')
    var violet = document.querySelector('#violet')
    green.addEventListener('click', function(){
      localStorage.setItem("select", 1);
      console.log('selected')
      console.log(localStorage.getItem("select"))
      closeModal();
    })
    violet.addEventListener('click', function(){
      localStorage.setItem("select", 1);
      console.log('selected')
      console.log(localStorage.getItem("select"))
      closeModal();
    })
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      openModal()
    }, 1000*10);
    return () => clearTimeout(timer);
  }, []);
  document.title = 'Press | Enterprise League';
  document.image = 'Press | Enterprise League';
  window.onload=function(){
    Modal.setAppElement('#logo-header');

    var news = document.querySelector("#in-the-news");
    var press = document.querySelector("#press");
    var pressTitle = document.querySelector("#press-title");
    var newsTitle = document.querySelector("#news-title");
    var presspage = document.querySelector('.press-page')
    var newspage = document.querySelector('.news-screen')
    press.addEventListener('click',function(){
        press.classList.add('underline');
        news.classList.remove('underline');
        pressTitle.classList.remove('none');
        newsTitle.classList.add('none');
        newspage.classList.add('none');
        presspage.classList.remove('none');
    })
    news.addEventListener('click',function(){
        news.classList.add('underline');
        press.classList.remove('underline');
        newsTitle.classList.remove('none');
        pressTitle.classList.add('none');
        presspage.classList.add('none');
        newspage.classList.remove('none');
    })
    var read1 = document.querySelector("#read-one");
    var read1less = document.querySelector("#read-one-less");
    read1.addEventListener('click', function(){
        var textmore=document.querySelector('#text-more-one')
        var presscard=document.querySelector('#press-page-item-one')
        textmore.classList.add('visibility');
        presscard.classList.add('expanded');
        read1.classList.add('none');
        read1less.classList.remove('none');
    })
    read1less.addEventListener('click', function(){
        var textmore=document.querySelector('#text-more-one')
        var presscard=document.querySelector('#press-page-item-one')
        textmore.classList.remove('visibility');
        presscard.classList.remove('expanded')
        read1less.classList.add('none');
        read1.classList.remove('none');
    })

    var read2 = document.querySelector("#read-two");
    var read2less = document.querySelector("#read-two-less");
    read2.addEventListener('click', function(){
        var textmore=document.querySelector('#text-more-two')
        var presscard=document.querySelector('#press-page-item-two')
        textmore.classList.add('visibility');
        presscard.classList.add('expanded');
        read2.classList.add('none');
        read2less.classList.remove('none');
    })
    read2less.addEventListener('click', function(){
        var textmore=document.querySelector('#text-more-two')
        var presscard=document.querySelector('#press-page-item-two')
        textmore.classList.remove('visibility');
        presscard.classList.remove('expanded')
        read2less.classList.add('none');
        read2.classList.remove('none');
    })

    var read3 = document.querySelector("#read-three");
    var read3less = document.querySelector("#read-three-less");
    read3.addEventListener('click', function(){
        var textmore=document.querySelector('#text-more-three')
        var presscard=document.querySelector('#press-page-item-three')
        textmore.classList.add('visibility');
        presscard.classList.add('expanded');
        read3.classList.add('none');
        read3less.classList.remove('none');
    })
    read3less.addEventListener('click', function(){
        var textmore=document.querySelector('#text-more-three')
        var presscard=document.querySelector('#press-page-item-three')
        textmore.classList.remove('visibility');
        presscard.classList.remove('expanded')
        read3less.classList.add('none');
        read3.classList.remove('none');
    })


    var bars = document.querySelector('.header-navigation-mobile')
    var navigation = document.querySelector('.side-navigation')
    bars.addEventListener('click', function(){
        if(navigation.classList.contains('none')){
            navigation.classList.remove('none')
            bars.classList.add('change')
        }else{
            navigation.classList.add('none')
            bars.classList.remove('change')
        }
    })

    
    
  }
  return (
    <div className="App">
      <NavBar/>
      <NewsScreen/>
      <Footer/>
      <Overlay/>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className='me-auto text-center Modal'>
            <h1>Do you need micro business loans?</h1>
            <h6>Quick loans for business, invoice financing and flexible loans</h6>
            <div className='d-flex flex-row justify-content-center modals'>
              <button id="violet" ><img src={require('./assests/violet.PNG')} alt="violet" /></button>  
              <button id="green" ><img src={require('./assests/green.PNG')} alt="green"/></button> 
            </div>
          </div>
          
        </Modal>
    </div>
    </div>
  );
}

export default App;
