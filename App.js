import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './App.css';
import { FaInstagram } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import img1 from "./img/classes-1.jpg";
import img2 from "./img/classes-2.jpg"
import img3 from "./img/classes-3.jpg"
import img4 from "./img/classes-4.jpg"
import img5 from "./img/classes-5.jpg"
import img6 from "./img/classes-6.jpg"
import img7 from "./img/trainer-1.jpg"
import img8 from "./img/trainer-2.jpg"
import img9 from "./img/trainer-3.jpg"
import img10 from "./img/trainer-4.jpg"
import img11 from "./img/trainer-5.jpg"
import img12 from "./img/trainer-6.jpg"
import img13 from "./img/gallery-1.jpg"
import img14 from "./img/gallery-2.jpg"
import img15 from "./img/gallery-3.jpg"
import img16 from "./img/gallery-4.jpg"
import img17 from "./img/gallery-5.jpg"
import img18 from "./img/gallery-6.jpg"
import img19 from "./img/package-1.jpg"
import img20 from "./img/package-2.jpg"
import img21 from "./img/package-3.jpg"
import img22 from "./img/client1.png"
import img23 from "./img/client2.png"
import img24 from "./img/client3.png"
import img25 from "./img/client4.png"
import img26 from "./img/client5.png"
import img27 from "./img/client6.png"
import img28 from "./img/news-img-1.jpg"
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";


function App() {
  return (
    <>
    <div className='h-[13vh] w-[100%] bg-black flex items-center fixed z-40 justify-center'>
      <div className='h-[13vh] w-[25%] flex justify-center items-center'>
        <p className='text-[#ABC502] text-[2.5vw] font-[Roboto] font-bold'>FITX</p>
      </div>
      <div className='h-[13vh] w-[75%] text-[0.85vw] text-white font-bold flex justify-center items-center ml-[3.5vw]'>
        <div className='h-[13vh] w-[6vw] flex justify-center items-center ml-[6vw] hover:ddtext-[#ABC502] duration-300'><a href=".">HOME</a></div>
        <div className='h-[13vh] w-[6vw] flex justify-center items-center hover:text-[#ABC502] duration-300'><a href="#about">ABOUT US</a></div>
        <div className='h-[13vh] w-[6vw] flex justify-center items-center hover:text-[#ABC502] duration-300'><a href="#class">CLASSES</a></div>
        <div className='h-[13vh] w-[6.5vw] flex justify-center items-center hover:text-[#ABC502] duration-300'><a href="#trainer">TRAINERS</a></div>
        <div className='h-[13vh] w-[5vw] flex justify-center items-center hover:text-[#ABC502] duration-300'><a href="#gallery">GALLERY</a></div>
        <div className='h-[13vh] w-[5vw] flex justify-center items-center hover:text-[#ABC502] duration-300'><a href="#blog">BLOG</a></div>
        <div className='h-[13vh] w-[5vw] flex justify-center items-center hover:text-[#ABC502] duration-300'><a href="#contact">CONTACT</a></div>
        <div className="h-[13vh] w-[3vw] flex justify-center items-center ml-[1vw]"><FaFacebookF className="text-[#ABC502] text-[1.2vw] hover:text-white duration-300"/></div>
        <div className="h-[13vh] w-[3vw] flex justify-center items-center"><FaTwitter className="text-[#ABC502] text-[1.2vw]  hover:text-white duration-300"/></div>
        <div className="h-[13vh] w-[3vw] flex justify-center items-center"><FaInstagram className="text-[#ABC502] text-[1.3vw]  hover:text-white duration-300"/></div>
      </div>
    </div>
    <div className='h-[125vh] w-[100%] bg-[url("./img/img-1.jpg")] bg-cover bg-no-repeat'>
      <div className='pt-[47vh] pl-[9.5vw]'>
        <h1 className='text-white text-[4vw] font-bold'>WELCOME TO FITX</h1>
        <h2 className='text-[#ABC502] font-[Roboto] text-[2vw] font-normal pt-[1.8vh] pb-[1.5vh]'>GET FIT IN TWO WEEKS</h2>
        <hr className='h-[0.1vh] w-[10%] border-[#ABC502] border-solid'/>
        <p className='text-white w-[45vw] pt-[3vh] pb-[4vh]'>We provide high businesses dolor sit amet, consectetur adipiscing elit dolor sit amet consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
        <div className="h-[7.5vh] w-[13vw] bg-[#ABC502] cursor-pointer flex justify-center duration-500 items-center text-[1vw] font-bold hover:text-[#ABC502] hover:border-[#ABC502] hover:bg-transparent hover:border-solid hover:border-[0.2vh]">
          <a href=".">CONTACT NOW</a>
        </div>
      </div>
    </div>
    <div className="h-[52vh] w-[100%] bg-white flex justify-center items-center">
      <div className='h-[52vh] w-[40.5%] mt-[-30vh] bg-[url("./img/div-1.jpg")] bg-cover bg-no-repeat duration-300 hover:mt-[-31.5vh]'>
        <div className="h-[100%] w-[100%] bg-[#abc502c9] flex flex-col justify-center gap-[10%] pl-[2vw]">
        <h1 className='text-[2.2vw] font-[Roboto] font-bold w-[22vw] leading-[4.2vh]'>JOIN MEMBER NOW! GET 40% OFF</h1>
        <hr className="h-[0.1vh] w-[20%] border-[#ffff0091] border-solid mt-[-2vh]"/>
        <p className="text-[1.1vw] leading-[3vh]">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
        <div className="h-[7.5vh] w-[13vw] bg-[black] text-[white] cursor-pointer flex justify-center duration-500 ml-[22vw] items-center text-[1vw] font-bold hover:text-[#ABC502] hover:bg-[#1e1d1d]">
          <a href=".">CONTACT NOW</a>
        </div>
        </div>
      </div> 
      <div className='h-[52vh] w-[40.5%] mt-[-30vh] bg-[url("./img/div-2.jpg")] bg-cover bg-no-repeat duration-300 hover:mt-[-31.5vh]'>
      <div className="h-[100%] w-[100%] flex flex-col justify-center gap-[6%] pl-[2vw]">
        <h1 className='text-[2vw] text-[#ABC502] font-[Roboto] font-bold leading-[4.2vh] mt-[-0.5vh]'>OPENING HOURS! <br/> CHECK OUR CLASSES HERE</h1>
        <hr className="h-[0.1vh] w-[20%] border-[#ABC502] border-solid mb-[2vh]"/>
        <div className="flex flex-col text-[white] w-[100%]">
          <div className="flex">
            <h1>WEEKDAY</h1>
            <h2 className="ml-[3vw]">: 8:45 - 21:00</h2>
          </div>
          <div className="flex">
            <h1>SATURDAY</h1>
            <h2 className="ml-[2.6vw]">: 10:00 - 23:00</h2>
          </div>
          <div className="flex">
            <h1>FRIDAY</h1>
            <h2 className="ml-[4.45vw]">: CLOSE</h2>
          </div>
        </div>
        <div className="h-[7.5vh] w-[13vw] bg-[#ABC502] mt-[-3vh] cursor-pointer flex justify-center ml-[22vw]  items-center text-[1vw] font-bold hover:text-[#ABC502] duration-500 hover:bg-[#1e1d1d]">
          <a href=".">CLASSES HERE</a>
        </div>
        </div>
      </div>
    </div>
    <div className="h-[65vh] W-[100%] flex flex-col items-center gap-[2%]">
      <h1 className='text-[2.2vw] text-[#ABC502] font-[Roboto] font-bold'>WHY CHOOSE US?</h1>
      <hr className="h-[0.1vh] w-[8%] border-[#ABC502] border-solid"/>
      <p className="text-[gray] mt-[2vh]">We provide high standard clean website for your business solutions.</p>
      <div className="h-[35vh] w-[81%] mt-[3vh] flex gap-[2%]">
        <div className="h-[100%] w-[25%] flex flex-col items-center justify-center">
          <div className="h-[12vh] w-[29%] border-solid border-[0.4vh] border-[#80808060] duration-300 ease-in hover:bg-[black] hover:border-none bg-white rounded-[50%] flex justify-center items-center">
            <FaThumbsUp className="text-[#ABC502] text-[2.8vw]" />
          </div>
          <h1 className="font-[Lato] text-[1.5vw] mt-[2vh] mb-[2vh]">The Best in Tilottama</h1>
          <p className="tracking-[0.01vw] text-[1vw] leading-[3vh] text-center text-[gray]">Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur</p>
          <p className="text-[gray] text-[1vw] mt-[-0.5vh]">adipiscing elit, sed do eiusmod.</p>
        </div>
        <div className="h-[100%] w-[25%] flex flex-col items-center justify-center">
          <div className="h-[12vh] w-[29%] border-solid border-[0.4vh] border-[#80808060]  duration-300 ease-in hover:bg-[black] hover:border-none bg-white rounded-[50%] flex justify-center items-center">
            <FaTrophy className="text-[#ABC502] text-[2.8vw]" />
          </div>
          <h1 className="font-[Lato] text-[1.5vw] mt-[2vh] mb-[2vh]">Qualified Instructor</h1>
          <p className="tracking-[0.01vw] text-[1vw] leading-[3vh] text-center text-[gray]">Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur</p>
          <p className="text-[gray] text-[1vw] mt-[-0.5vh]">adipiscing elit, sed do eiusmod.</p>
        </div>
        <div className="h-[100%] w-[25%] flex flex-col items-center justify-center">
          <div className="h-[12vh] w-[29%] border-solid border-[0.4vh] border-[#80808060]  duration-300 ease-in hover:bg-[black] hover:border-none bg-white rounded-[50%] flex justify-center items-center">
            <FaBriefcase className="text-[#ABC502] text-[2.8vw]" />
          </div>
          <h1 className="font-[Lato] text-[1.5vw] mt-[2vh] mb-[2vh]">High Tech Gym</h1>
          <p className="tracking-[0.01vw] text-[1vw] leading-[3vh] text-center text-[gray]">Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur</p>
          <p className="text-[gray] text-[1vw] mt-[-0.5vh]">adipiscing elit, sed do eiusmod.</p>
        </div>
        <div className="h-[100%] w-[25%] flex flex-col items-center justify-center">
          <div className="h-[12vh] w-[29%] border-solid border-[0.4vh] border-[#80808060]  duration-300 ease-in hover:bg-[black] hover:border-none bg-white rounded-[50%] flex justify-center items-center">
            <FaUserGroup  className="text-[#ABC502] text-[2.8vw]" />
          </div>
          <h1 className="font-[Lato] text-[1.5vw] mt-[2vh] mb-[2vh]">Happy Members</h1>
          <p className="tracking-[0.01vw] text-[1vw] leading-[3vh] text-center text-[gray]">Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur</p>
          <p className="text-[gray] text-[1vw] mt-[-0.5vh]">adipiscing elit, sed do eiusmod.</p>
        </div>
      </div>
    </div>
    <div id="about" className="h-[80vh] w-[100%] bg-[#99999935] flex gap-[3%]">
      <div className="h-[100%] w-[50%] pl-[10%] flex flex-col justify-center gap-[7%]">
        <h1 className='text-[2.5vw] text-[#ABC502] tracking-[0.001vw] font-[Roboto] font-bold'>ABOUT OUR GYM</h1>
        <hr className="h-[0.1vh] w-[15%] border-[#ABC502] border-solid mt-[-4vh]"/>
        <p className="text-[gray] text-[1.1vw] mt-[1vh]">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis iste natus error sit .</p>
        <p className="text-[gray] text-[1.1vw] mt-[-2.5vh]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus. Teritatis et quasi architecto.</p>
        <div className="h-[7.5vh] w-[13vw] bg-[#ABC502] cursor-pointer flex justify-center items-center text-[1vw] font-bold hover:text-[#ABC502] duration-500 hover:bg-[#000000ea]">
          <a href=".">JOIN FORCE</a>
        </div>
      </div>
      <div className='h-[47vh] w-[37%] bg-[url("./img/about-img.jpg")] bg-cover bg-no-repeat mt-[13vh]'></div>
    </div>
    <div className='h-[70vh] w-[100%] bg-[url("./img/video.jpg")] bg-cover bg-no-repeat flex flex-col gap-[5%] justify-center items-center'>
      <div className="h-[12vh] w-[6%] duration-300 cursor-pointer ease-in bg-[#ABC502] mb-[5vh] rounded-[50%] flex justify-center items-center pl-[0.2vw] hover:text-[#ABC502] hover:border-[#ABC502] hover:bg-transparent hover:border-solid hover:border-[0.5vh]">
        <FaPlay  className="text-[2.8vw]" />
      </div>
      <h1 className='text-[2.2vw] text-[#ABC502] font-bold'>WATCH MOTIVATION VIDEO HERE</h1>
      <div className="flex flex-col justify-center items-center">
      <p className="text-[1.2vw] text-[darkgray]">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero</p>
      <p className="text-[1.2vw] text-[darkgray]">tempus, tempor posuere ligula varius impedit enim tempor sapien.</p>
      </div>
    </div>
    <div id="class" className="h-[40vh] w-[100%] gap-[4%] flex flex-col justify-center items-center">
      <h1 className='text-[2.5vw] text-[#ABC502] font-[Roboto] tracking-[0.001vw] font-bold'>OUR CLASSES</h1>
      <hr className="h-[0.1vh] w-[8%] border-[#ABC502] border-solid"/>
      <p className="text-[1.2vw] text-[darkgray] mt-[2vh]">We provide high standard clean website for your business solutions.</p>
    </div>
    <div className="h-[65.5vh] w-[100%] flex justify-center items-center gap-[3%]">
      <div className="h-[60vh] w-[25%] group overflow-hidden relative hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img1} alt="Classes" className="h-[45vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[45vh] w-[100%] top-0 left-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#abc50240]"></div>
        <div className="h-[8vh] w-[100%] bg-[#ABC502] flex pl-[2vw] items-center absolute">
          <h1 className="font-[Lato] font-normal text-[1.3vw]">BODY BUILDING CLASSES</h1>
        </div>
        <div className="h-[7vh] w-[100%] bg-black flex items-center text-[1.1vw] mt-[8vh] gap-[5vw] font-[Lato] font-normal">
          <div className="pl-[2vw] text-[white] flex justify-center items-center gap-[0.5vw]">
            <FaRegClock className="text-[#ABC502]"/> 15:00 PM
          </div>
          <div className="flex text-[white] justify-center items-center  gap-[0.5vw]">
            <FaRegCalendar className="text-[#ABC502]"/> Sun,Mon,Wed,Fri
          </div>
        </div>
      </div>
      <div className="h-[60vh] w-[25%] group overflow-hidden relative hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img2} alt="Classes" className="h-[45vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[45vh] w-[100%] top-0 left-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#abc50240]"></div>
        <div className="h-[8vh] w-[100%] bg-[#ABC502] flex pl-[2vw] items-center absolute">
          <h1 className="font-[Lato] font-normal text-[1.3vw]">GYM CLASSES</h1>
        </div>
        <div className="h-[7vh] w-[100%] bg-black flex items-center text-[1.1vw] mt-[8vh] gap-[5vw] font-[Lato] font-normal">
          <div className="pl-[2vw] text-[white] flex justify-center items-center gap-[0.5vw]">
            <FaRegClock className="text-[#ABC502]"/> 15:00 PM
          </div>
          <div className="flex text-[white] justify-center items-center  gap-[0.5vw]">
            <FaRegCalendar className="text-[#ABC502]"/> Sun,Mon,Wed,Fri
          </div>
        </div>
      </div>
      <div className="h-[60vh] w-[25%] group overflow-hidden relative hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img3} alt="Classes" className="h-[45vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[45vh] w-[100%] top-0 left-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#abc50240]"></div>
        <div className="h-[8vh] w-[100%] bg-[#ABC502] flex pl-[2vw] items-center absolute">
          <h1 className="font-[Lato] font-normal text-[1.3vw]">YOGA CLASSES</h1>
        </div>
        <div className="h-[7vh] w-[100%] bg-black flex items-center text-[1.1vw] mt-[8vh] gap-[5vw] font-[Lato] font-normal">
          <div className="pl-[2vw] text-[white] flex justify-center items-center gap-[0.5vw]">
            <FaRegClock className="text-[#ABC502]"/> 15:00 PM
          </div>
          <div className="flex text-[white] justify-center items-center  gap-[0.5vw]">
            <FaRegCalendar className="text-[#ABC502]"/> Sun,Mon,Wed,Fri
          </div>
        </div>
      </div>
    </div>
    <div className="h-[65vh] w-[100%] flex justify-center items-center gap-[3%]">
      <div className="h-[60vh] w-[25%] group overflow-hidden relative hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img4} alt="Classes" className="h-[45vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[45vh] w-[100%] top-0 left-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#abc50240]"></div>
        <div className="h-[8vh] w-[100%] bg-[#ABC502] flex pl-[2vw] items-center absolute">
          <h1 className="font-[Lato] font-normal text-[1.3vw]">BODY WEIGHT CLASSES</h1>
        </div>
        <div className="h-[7vh] w-[100%] bg-black flex items-center text-[1.1vw] mt-[8vh] gap-[5vw] font-[Lato] font-normal">
          <div className="pl-[2vw] text-[white] flex justify-center items-center gap-[0.5vw]">
            <FaRegClock className="text-[#ABC502]"/> 15:00 PM
          </div>
          <div className="flex text-[white] justify-center items-center  gap-[0.5vw]">
            <FaRegCalendar className="text-[#ABC502]"/> Sun,Mon,Wed,Fri
          </div>
        </div>
      </div>
      <div className="h-[60vh] w-[25%] group overflow-hidden relative hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img5} alt="Classes" className="h-[45vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[45vh] w-[100%] top-0 left-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#abc50240]"></div>
        <div className="h-[8vh] w-[100%] bg-[#ABC502] flex pl-[2vw] items-center absolute">
          <h1 className="font-[Lato] font-normal text-[1.3vw]">AEROBICS CLASSES</h1>
        </div>
        <div className="h-[7vh] w-[100%] bg-black flex items-center text-[1.1vw] mt-[8vh] gap-[5vw] font-[Lato] font-normal">
          <div className="pl-[2vw] text-[white] flex justify-center items-center gap-[0.5vw]">
            <FaRegClock className="text-[#ABC502]"/> 15:00 PM
          </div>
          <div className="flex text-[white] justify-center items-center  gap-[0.5vw]">
            <FaRegCalendar className="text-[#ABC502]"/> Sun,Mon,Wed,Fri
          </div>
        </div>
      </div>
      <div className="h-[60vh] w-[25%] group overflow-hidden relative hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img6} alt="Classes" className="h-[45vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[45vh] w-[100%] top-0 left-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#abc50240]"></div>
        <div className="h-[8vh] w-[100%] bg-[#ABC502] flex pl-[2vw] items-center absolute">
          <h1 className="font-[Lato] font-normal text-[1.3vw]">BOXING CLASSES</h1>
        </div>
        <div className="h-[7vh] w-[100%] bg-black flex items-center text-[1.1vw] mt-[8vh] gap-[5vw] font-[Lato] font-normal">
          <div className="pl-[2vw] text-[white] flex justify-center items-center gap-[0.5vw]">
            <FaRegClock className="text-[#ABC502]"/> 15:00 PM
          </div>
          <div className="flex text-[white] justify-center items-center  gap-[0.5vw]">
            <FaRegCalendar className="text-[#ABC502]"/> Sun,Mon,Wed,Fri
          </div>
        </div>
      </div>
    </div>
    <div className="h-[10vh] w-[100%]"></div>
    <div className="h-[80vh] w-[100%] bg-[url('./img/story.jpg')] flex flex-col justify-center items-center bg-cover bg-no-repeat">
      <h1 className='text-[2vw] text-[#ABC502] tracking-[0.001vw] font-[Roboto] font-bold'>SUCCESS STORIES</h1>
      <hr className="h-[0.1vh] w-[8%] border-[#ABC502] border-solid mt-[1vh]"/>
      <p className="font-[Lato] font-bold text-[1.25vw] tracking-[0.01vw] text-[#ffffffea] mt-[8vh]">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque</p>
      <p className="font-[Lato] font-bold text-[1.25vw] tracking-[0.01vw] text-[#ffffffea] mt-[0.5vh]">laudantium totam rem aperiam Duis aute irure dolor in reprehenderit. Excepteur sint occaecat cupidatat non proident, sunt in</p>
      <p className="font-[Lato] font-bold text-[1.25vw] tracking-[0.01vw] text-[#ffffffea] mt-[0.5vh]">culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2 className='text-[1.8vw] text-[#ABC502] mt-[6vh]'>Johnathan Deol</h2>
      <h3 className="font-[Lato] font-normal text-[1.3vw] text-white mt-[-1vh]">- Businessman -</h3>
      <div className="flex justify-center items-center mt-[3vh]">
        <GoDotFill className="text-[#ABC502]"/>
        <GoDotFill className="text-[gray] hover:text-[#ABC502]"/>
        <GoDotFill className="text-[gray] hover:text-[#ABC502]"/>
        <GoDotFill className="text-[gray] hover:text-[#ABC502]"/>
      </div>
    </div>
    <div id="trainer" className="h-[40vh] w-[100%] gap-[4%] flex flex-col justify-center items-center">
      <h1 className='text-[2.5vw] text-[#ABC502] tracking-[0.001vw] font-[Roboto] font-bold'>OUR TRAINERS</h1>
      <hr className="h-[0.1vh] w-[8%] border-[#ABC502] border-solid"/>
      <p className="text-[1.2vw] text-[darkgray] mt-[2vh]">We provide high standard clean website for your business solutions.</p>
    </div>
    <div className="h-[65vh] w-[100%] flex justify-center items-center gap-[3%]">
      <div className="h-[60vh] w-[25%] group overflow-hidden relative hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img7} alt="Classes" className="h-[45vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[45vh] w-[100%] top-0 left-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#abc50240]"></div>
        <div className="h-[8vh] w-[100%] bg-[#ABC502] flex pl-[2vw] items-center absolute">
          <h1 className="font-[Lato] font-normal text-[1.3vw]">ERNEST DEOL</h1>
        </div>
        <div className="h-[7vh] w-[100%] bg-black flex items-center mt-[8vh] gap-[5vw] font-[Lato] font-normal">
          <p className="pl-[2vw] text-[white] flex justify-center text-[1.05vw] items-center gap-[0.5vw]">Personal Trainers</p>
          <div className="flex gap-[1.7vw]">
            <div className="flex justify-center items-center"><FaFacebookF className="text-[#ABC502] text-[1vw] hover:text-white duration-300"/></div>
            <div className="flex justify-center items-center"><FaTwitter className="text-[#ABC502] text-[1vw]  hover:text-white duration-300"/></div>
            <div className="flex justify-center items-center"><FaInstagram className="text-[#ABC502] text-[1.1vw]  hover:text-white duration-300"/></div>
          </div>
        </div>
      </div>
      <div className="h-[60vh] w-[25%] group overflow-hidden relative hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img8} alt="Classes" className="h-[45vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[45vh] w-[100%] top-0 left-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#abc50240]"></div>
        <div className="h-[8vh] w-[100%] bg-[#ABC502] flex pl-[2vw] items-center absolute">
          <h1 className="font-[Lato] font-normal text-[1.3vw]">SASHA DEOL</h1>
        </div>
        <div className="h-[7vh] w-[100%] bg-black flex items-center mt-[8vh] gap-[5vw] font-[Lato] font-normal">
          <p className="pl-[2vw] text-[white] flex justify-center text-[1.05vw] items-center gap-[0.5vw]">Personal Trainers</p>
          <div className="flex gap-[1.7vw]">
            <div className="flex justify-center items-center"><FaFacebookF className="text-[#ABC502] text-[1vw] hover:text-white duration-300"/></div>
            <div className="flex justify-center items-center"><FaTwitter className="text-[#ABC502] text-[1vw]  hover:text-white duration-300"/></div>
            <div className="flex justify-center items-center"><FaInstagram className="text-[#ABC502] text-[1.1vw]  hover:text-white duration-300"/></div>
          </div>
        </div>
      </div>
      <div className="h-[60vh] w-[25%] group overflow-hidden relative hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img9} alt="Classes" className="h-[45vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[45vh] w-[100%] top-0 left-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#abc50240]"></div>
        <div className="h-[8vh] w-[100%] bg-[#ABC502] flex pl-[2vw] items-center absolute">
          <h1 className="font-[Lato] font-normal text-[1.3vw]">BRUTO DEOL</h1>
        </div>
        <div className="h-[7vh] w-[100%] bg-black flex items-center mt-[8vh] gap-[5vw] font-[Lato] font-normal">
          <p className="pl-[2vw] text-[white] flex justify-center text-[1.05vw] items-center gap-[0.5vw]">Personal Trainers</p>
          <div className="flex gap-[1.7vw]">
            <div className="flex justify-center items-center"><FaFacebookF className="text-[#ABC502] text-[1vw] hover:text-white duration-300"/></div>
            <div className="flex justify-center items-center"><FaTwitter className="text-[#ABC502] text-[1vw]  hover:text-white duration-300"/></div>
            <div className="flex justify-center items-center"><FaInstagram className="text-[#ABC502] text-[1.1vw]  hover:text-white duration-300"/></div>
          </div>
        </div>
      </div>
    </div>
    <div className="h-[2vh] w-[100%]"></div>
    <div className="h-[67vh] w-[100%] flex justify-center items-center gap-[3%]">
      <div className="h-[60vh] w-[25%] group overflow-hidden relative hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img10} alt="Classes" className="h-[45vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[45vh] w-[100%] top-0 left-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#abc50240]"></div>
        <div className="h-[8vh] w-[100%] bg-[#ABC502] flex pl-[2vw] items-center absolute">
          <h1 className="font-[Lato] font-normal text-[1.3vw]">ELLYSA DEOL</h1>
        </div>
        <div className="h-[7vh] w-[100%] bg-black flex items-center mt-[8vh] gap-[5vw] font-[Lato] font-normal">
          <p className="pl-[2vw] text-[white] flex justify-center text-[1.05vw] items-center gap-[0.5vw]">Personal Trainers</p>
          <div className="flex gap-[1.7vw]">
            <div className="flex justify-center items-center"><FaFacebookF className="text-[#ABC502] text-[1vw] hover:text-white duration-300"/></div>
            <div className="flex justify-center items-center"><FaTwitter className="text-[#ABC502] text-[1vw]  hover:text-white duration-300"/></div>
            <div className="flex justify-center items-center"><FaInstagram className="text-[#ABC502] text-[1.1vw]  hover:text-white duration-300"/></div>
          </div>
        </div>
      </div>
      <div className="h-[60vh] w-[25%] group overflow-hidden relative hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img11} alt="Classes" className="h-[45vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[45vh] w-[100%] top-0 left-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#abc50240]"></div>
        <div className="h-[8vh] w-[100%] bg-[#ABC502] flex pl-[2vw] items-center absolute">
          <h1 className="font-[Lato] font-normal text-[1.3vw]">JOHN DEOL</h1>
        </div>
        <div className="h-[7vh] w-[100%] bg-black flex items-center mt-[8vh] gap-[5vw] font-[Lato] font-normal">
          <p className="pl-[2vw] text-[white] flex justify-center text-[1.05vw] items-center gap-[0.5vw]">Personal Trainers</p>
          <div className="flex gap-[1.7vw]">
            <div className="flex justify-center items-center"><FaFacebookF className="text-[#ABC502] text-[1vw] hover:text-white duration-300"/></div>
            <div className="flex justify-center items-center"><FaTwitter className="text-[#ABC502] text-[1vw]  hover:text-white duration-300"/></div>
            <div className="flex justify-center items-center"><FaInstagram className="text-[#ABC502] text-[1.1vw]  hover:text-white duration-300"/></div>
          </div>
        </div>
      </div>
      <div className="h-[60vh] w-[25%] group overflow-hidden relative hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img12} alt="Classes" className="h-[45vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[45vh] w-[100%] top-0 left-0 opacity-0 duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#abc50240]"></div>
        <div className="h-[8vh] w-[100%] bg-[#ABC502] flex pl-[2vw] items-center absolute">
          <h1 className="font-[Lato] font-normal text-[1.3vw]">NETTA DEOL</h1>
        </div>
        <div className="h-[7vh] w-[100%] bg-black flex items-center mt-[8vh] gap-[5vw] font-[Lato] font-normal">
          <p className="pl-[2vw] text-[white] flex justify-center text-[1.05vw] items-center gap-[0.5vw]">Personal Trainers</p>
          <div className="flex gap-[1.7vw]">
            <div className="flex justify-center items-center"><FaFacebookF className="text-[#ABC502] text-[1vw] hover:text-white duration-300"/></div>
            <div className="flex justify-center items-center"><FaTwitter className="text-[#ABC502] text-[1vw]  hover:text-white duration-300"/></div>
            <div className="flex justify-center items-center"><FaInstagram className="text-[#ABC502] text-[1.1vw]  hover:text-white duration-300"/></div>
          </div>
        </div>
      </div>
    </div>
    <div className="h-[15vh] w-[100%]"></div>
    <div className="h-[65vh] w-[100%] bg-[url('./img/fit.jpg')] flex flex-col justify-center items-center bg-[100%] bg-cover bg-no-repeat">
      <h1 className='text-[3.3vw] text-[#ABC502] tracking-[0.001vw] font-[Roboto] font-bold'>GET FIT IN TWO WEEKS WITH FITX</h1>
      <p className="text-[#ffffff80] text-[1.1vw] mt-[2vh]">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, tempor posuere ligula</p>
      <p className="text-[#ffffff80] text-[1.1vw]">varius impedit enim tempor sapien</p>
      <div className="h-[7.5vh] w-[14vw] bg-[#ABC502] cursor-pointer flex justify-center mt-[7vh] duration-500 items-center text-[1.1vw] font-bold hover:text-[#ABC502] hover:bg-[#1e1d1d]">
          <a href=".">CONTACT NOW</a>
        </div>
    </div>
    <div id="gallery" className="h-[40vh] w-[100%] gap-[4%] flex flex-col justify-center items-center">
      <h1 className='text-[2.5vw] text-[#ABC502] tracking-[0.001vw] font-[Roboto] font-bold'>OUR GALLERY</h1>
      <hr className="h-[0.1vh] w-[8%] border-[#ABC502] border-solid"/>
      <p className="text-[1.2vw] text-[darkgray] mt-[2vh]">We provide high standard clean website for your business solutions.</p>
    </div>
    <div className="h-[40vh] w-[100%] flex justify-center items-center gap-[1%]">
      <div className="h-[40vh] w-[26%] group overflow-hidden relative">
        <img src={img13} alt="GALLERY" className="h-[40vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[40vh] w-[100%] top-0 left-0 flex justify-center items-center opacity-0 duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#00000080]"><FaSearch className="text-[#ABC502] text-[3.5vw]"/></div>
      </div>
      <div className="h-[40vh] w-[26%] group overflow-hidden relative">
        <img src={img14} alt="GALLERY" className="h-[40vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[40vh] w-[100%] top-0 left-0 opacity-0 flex justify-center items-center duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#00000080]"><FaSearch className="text-[#ABC502] text-[3.5vw]"/></div>
      </div>
      <div className="h-[40vh] w-[26%] group overflow-hidden relative">
        <img src={img15} alt="GALLERY" className="h-[40vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[40vh] w-[100%] top-0 left-0 opacity-0 flex justify-center items-center duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#00000080]"><FaSearch className="text-[#ABC502] text-[3.5vw]"/></div>
      </div>
    </div>
    <div className="h-[2vh] w-[100%]"></div>
    <div className="h-[40vh] w-[100%] flex justify-center items-center gap-[1%]">
      <div className="h-[40vh] w-[26%] group overflow-hidden relative">
        <img src={img16} alt="GALLERY" className="h-[40vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[40vh] w-[100%] top-0 left-0 opacity-0 flex justify-center items-center duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#00000080]"><FaSearch className="text-[#ABC502] text-[3.5vw]"/></div>
      </div>
      <div className="h-[40vh] w-[26%] group overflow-hidden relative">
        <img src={img17} alt="GALLERY" className="h-[40vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[40vh] w-[100%] top-0 left-0 opacity-0 flex justify-center items-center duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#00000080]"><FaSearch className="text-[#ABC502] text-[3.5vw]"/></div>
      </div>
      <div className="h-[40vh] w-[26%] group overflow-hidden relative">
        <img src={img18} alt="GALLERY" className="h-[40vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
        <div className="h-[40vh] w-[100%] top-0 left-0 opacity-0 flex justify-center items-center duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#00000080]"><FaSearch className="text-[#ABC502] text-[3.5vw]"/></div>
      </div>
    </div>
    <div className="h-[10vh] w-[100%]"></div>
    <div className="h-[40vh] w-[100%] gap-[4%] flex flex-col justify-center items-center">
      <h1 className='text-[2.5vw] text-[#ABC502] tracking-[0.001vw] font-[Roboto] font-bold'>OUR PACKAGES</h1>
      <hr className="h-[0.1vh] w-[8%] border-[#ABC502] border-solid"/>
      <p className="text-[1.2vw] text-[darkgray] mt-[2vh]">We provide high standard clean website for your business solutions.</p>
    </div>
    <div className="h-[100vh] w-[100%] gap-[1.5%] flex justify-center items-center">
      <div className="h-[100vh] w-[26%] hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img19} alt="PACKAGES" className="h-[38vh] w-[100%]"/>
        <div className="h-[48vh] w-[100%] bg-black flex flex-col items-center">
          <div className="flex justify-center gap-[7vw] mt-[3vh] items-center">
            <h1 className="text-[#ABC502] font-[Lato] font-normal text-[1.5vw]">BEGINNER</h1>
            <div className="flex text-[white] text-[1.5vw]">
              <p className="font-bold">$10</p>
              <p>/month</p>
            </div>
          </div>
          <hr className="h-[0.1vh] w-[87%] border-[#ABC502] border-solid mt-[1vh]"/>
          <div className="flex flex-col gap-[1vh] text-white ml-[-4vw] mt-[7vh]">
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> 5 Days a week</p>
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> GYM Access & Equipment</p>
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> Get Supplement</p>
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> Personal Trainers</p>
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> Diet Guides</p>
          </div>
        </div>
        <div className="h-[14vh] w-[100%] bg-[#ABC502] flex justify-center items-center">
          <div className="h-[7.5vh] w-[13vw] bg-[black] text-white cursor-pointer flex justify-center duration-500 items-center text-[1.1vw] font-bold hover:text-[#ABC502] hover:bg-[#1e1d1d]">JOIN FORCE</div>
        </div>
      </div>
      <div className="h-[100vh] w-[26%] hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img20} alt="PACKAGES" className="h-[38vh] w-[100%]"/>
        <div className="h-[48vh] w-[100%] bg-black flex flex-col items-center">
          <div className="flex justify-center gap-[6.5vw] mt-[3vh] items-center">
            <h1 className="text-[#ABC502] font-[Lato] font-normal text-[1.5vw]">ADVANCED</h1>
            <div className="flex text-[white] text-[1.5vw]">
              <p className="font-bold">$20</p>
              <p>/month</p>
            </div>
          </div>
          <hr className="h-[0.1vh] w-[87%] border-[#ABC502] border-solid mt-[1vh]"/>
          <div className="flex flex-col gap-[1vh] text-white ml-[-4vw] mt-[7vh]">
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> 5 Days a week</p>
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> GYM Access & Equipment</p>
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> Get Supplement</p>
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> Personal Trainers</p>
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> Diet Guides</p>
          </div>
        </div>
        <div className="h-[14vh] w-[100%] bg-[#ABC502] flex justify-center items-center">
          <div className="h-[7.5vh] w-[13vw] bg-[black] text-white cursor-pointer flex justify-center duration-500 items-center text-[1.1vw] font-bold hover:text-[#ABC502] hover:bg-[#1e1d1d]">JOIN FORCE</div>
        </div>
      </div>
      <div className="h-[100vh] w-[26%] hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img21} alt="PACKAGES" className="h-[38vh] w-[100%]"/>
        <div className="h-[48vh] w-[100%] bg-black flex flex-col items-center">
          <div className="flex justify-center gap-[5.5vw] mt-[3vh] items-center">
            <h1 className="text-[#ABC502] font-[Lato] font-normal text-[1.5vw]">PROFESSIONAL</h1>
            <div className="flex text-[white] text-[1.5vw]">
              <p className="font-bold">$25</p>
              <p>/month</p>
            </div>
          </div>
          <hr className="h-[0.1vh] w-[90%] border-[#ABC502] border-solid mt-[1vh]"/>
          <div className="flex flex-col gap-[1vh] text-white ml-[-4vw] mt-[7vh]">
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> 5 Days a week</p>
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> GYM Access & Equipment</p>
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> Get Supplement</p>
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> Personal Trainers</p>
            <p className="flex items-center gap-[0.5vw]"><GoDotFill className="text-[0.8vw]"/> Diet Guides</p>
          </div>
        </div>
        <div className="h-[14vh] w-[100%] bg-[#ABC502]  flex justify-center items-center">
          <div className="h-[7.5vh] w-[13vw] bg-[black] text-white cursor-pointer flex justify-center duration-500 items-center text-[1.1vw] font-bold hover:text-[#ABC502] hover:bg-[#1e1d1d]">JOIN FORCE</div>
        </div>
      </div>
    </div>
    <div className="h-[20vh] w-[100%]"></div>
    <div className="h-[25vh] w-[100%] bg-[#ABC502] flex justify-center gap-[2%] items-center">
      <div className="h-[18vh] w-[12%] bg-[#ABC502] hover:shadow-2xl shadow-black duration-500 ease-out">
        <img src={img22} alt="CLIENT" className="h-[100%] w-[100%]"/>
      </div>
      <div className="h-[18vh] w-[12%] bg-[#ABC502] hover:shadow-2xl duration-500 ease-out">
        <img src={img23} alt="CLIENT" className="h-[100%] w-[100%]"/>
      </div>
      <div className="h-[18vh] w-[12%] bg-[#ABC502]  hover:shadow-2xl duration-500 ease-out">
        <img src={img24} alt="CLIENT" className="h-[100%] w-[100%]"/>
      </div>
      <div className="h-[18vh] w-[12%] bg-[#ABC502]  hover:shadow-2xl duration-500 ease-out">
        <img src={img25} alt="CLIENT" className="h-[100%] w-[100%]"/>
      </div>
      <div className="h-[18vh] w-[12%] bg-[#ABC502]  hover:shadow-2xl duration-500 ease-out">
        <img src={img26} alt="CLIENT" className="h-[100%] w-[100%]"/>
      </div>
      <div className="h-[18vh] w-[12%] bg-[#ABC502]  hover:shadow-2xl duration-500 ease-out">
        <img src={img27} alt="CLIENT" className="h-[100%] w-[100%]"/>
      </div>
    </div>
    <div id="blog" className="h-[2vh] w-[100%]"></div>
    <div className="h-[140vh] w-[100%] flex justify-center gap-[3%] items-center">
      <div className="h-[120vh] w-[50%] flex flex-col">
        <h1 className='text-[2vw] text-[#ABC502] tracking-[0.001vw] font-[Roboto] font-bold'>RECENT BLOG</h1>
        <hr className="h-[0.1vh] w-[10%] border-[#ABC502] border-solid mt-[1vh]"/>
        <div className="h-[60vh] w-[100%] mt-[7vh] group overflow-hidden relative">
          <img src={img28} alt="GALLERY" className="h-[60vh] w-[100%] duration-500 ease-in-out group-hover:scale-[1.05]"/>
          <div className="h-[60vh] w-[100%] top-0 left-0 opacity-0 flex justify-center items-center duration-500 ease-in-out group-hover:opacity-100 absolute bg-[#abc50270]"><FaSearch className="text-[white] text-[3vw]"/></div>
        </div>
        <div className="h-[11vh] w-[5vw] flex flex-col justify-center items-center font-san bg-[#ABC502] mt-[-11vh] relative">
          <p className="text-[2vw] font-bold tracking-[-0.1vw]">30</p>
          <p className="text-[1.3vw] mt-[-1vh] mb-[1vh]">May</p>
        </div>
        <div className="h-[32vh] w-[100%] bg-[black] flex flex-col justify-center gap-[1.5vh] pl-[2vw]">
          <h1 className='text-[1.5vw] text-[#ABC502] tracking-[0.001vw] font-[Roboto] font-bold'>MORE POWER WITH OUR PROGRAMS</h1>
          <p className="text-[1vw] text-white w-[90%]">We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
          <div className="h-[7.5vh] w-[11.5vw] bg-[#ABC502] mt-[2.5vh] text-[black] cursor-pointer flex justify-center duration-500 items-center text-[1.1vw] font-bold hover:text-[#ABC502] hover:bg-[#1e1d1d]">
            READ MORE
          </div>
        </div>
      </div>
      <div className="h-[120vh] w-[28%] flex flex-col">
        <h1 className='text-[2vw] text-[#ABC502] tracking-[0.001vw] font-[Roboto] font-bold'>UPCOMING EVENTS</h1>
        <hr className="h-[0.1vh] w-[20%] border-[#ABC502] border-solid mt-[1vh]"/>
        <div className="h-[110vh] w-[100%] flex flex-col gap-[3vh] mt-[7vh]">
          <div className="h-[33vh] w-[100%] flex justify-center items-center gap-[5%] border-b-[0.2vh] border-gray">
            <div className="h-[100%] w-[20%]">
              <div className="h-[12vh] w-[5.5vw] flex flex-col justify-center items-center font-san bg-[#ABC502]">
                <p className="text-[2vw] font-bold tracking-[-0.1vw]">30</p>
                <p className="text-[1.3vw] mt-[-1vh] mb-[1vh]">May</p>
              </div>
            </div>
            <div className="h-[100%] w-[75%] flex flex-col">
              <h1 className='text-[1.6vw] w-[90%] tracking-[-0.06vw] font-[Roboto] font-bold'>WORKOUT 3 DAYS CHALLANGE IN TILOTTAMA</h1>
              <p className="text-[0.9vw] text-[#ABC502] font-[Lato] mt-[2vh]">07:00 PM - 11:00 PM</p>
              <p className=" text-[1.2vw] leading-[3vh] w-[90%] tracking-[-0.05vw] text-[gray] mt-[3vh]">We provide high quality design at vero eos et accusamus et iusto</p>
              <p className="text-[1.2vw] font-bold tracking-[-0.05vw] text-[#ABC502] cursor-pointer hover:text-black duration-500 ease-in-out mt-[2.5vh]">> JOIN NOW</p>
            </div>
          </div>
          <div className="h-[33vh] w-[100%] flex justify-center items-center gap-[5%] border-b-[0.2vh] border-gray">
            <div className="h-[100%] w-[20%]">
              <div className="h-[12vh] w-[5.5vw] flex flex-col justify-center items-center font-san bg-[#ABC502]">
                <p className="text-[2vw] font-bold tracking-[-0.1vw]">02</p>
                <p className="text-[1.3vw] mt-[-1vh] mb-[1vh]">Dec</p>
              </div>
            </div>
            <div className="h-[100%] w-[75%] flex flex-col">
              <h1 className='text-[1.6vw] w-[90%] tracking-[-0.07vw] font-[Roboto] font-bold'>EXCLUSIVE WORKOUT WITH J0HN RAMBO</h1>
              <p className="text-[0.9vw] text-[#ABC502] font-[Lato] mt-[2vh]">07:00 PM - 11:00 PM</p>
              <p className=" text-[1.2vw] leading-[3vh] w-[90%] tracking-[-0.05vw] text-[gray] mt-[3vh]">We provide high quality design at vero eos et accusamus et iusto</p>
              <p className="text-[1.2vw] font-bold tracking-[-0.05vw] text-[#ABC502] cursor-pointer hover:text-black duration-500 ease-in-out mt-[2.5vh]">> JOIN NOW</p>
            </div>
          </div>
          <div className="h-[33vh] w-[100%] flex justify-center items-center gap-[5%] border-b-[0.2vh] border-gray">
            <div className="h-[100%] w-[20%]">
              <div className="h-[12vh] w-[5.5vw] flex flex-col justify-center items-center font-san bg-[#ABC502]">
                <p className="text-[2vw] font-bold tracking-[-0.1vw]">14</p>
                <p className="text-[1.3vw] mt-[-1vh] mb-[1vh]">Feb</p>
              </div>
            </div>
            <div className="h-[100%] w-[75%] flex flex-col">
              <h1 className='text-[1.6vw] w-[90%] tracking-[-0.03vw] font-[Roboto] font-bold'>WE OFFER 20% CASHBACK FOR NEW MEMBER</h1>
              <p className="text-[0.9vw] text-[#ABC502] font-[Lato] mt-[2vh]">07:00 PM - 11:00 PM</p>
              <p className=" text-[1.2vw] leading-[3vh] w-[90%] tracking-[-0.05vw] text-[gray] mt-[3vh]">We provide high quality design at vero eos et accusamus et iusto</p>
              <p className="text-[1.2vw] font-bold tracking-[-0.05vw] text-[#ABC502] cursor-pointer hover:text-black duration-500 ease-in-out mt-[2.5vh]">> JOIN NOW</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="h-[110vh] w-[100%] bg-[#1e1d1d] flex flex-col justify-center items-center">
      <h1 className='text-[2.5vw] text-[#ABC502] tracking-[0.001vw] font-[Roboto] font-bold'>GET IN TOUCH</h1>
      <hr className="h-[0.1vh] w-[7%] border-[#ABC502] border-solid mt-[1vh]"/>
      <p className="text-[#ffffff80] text-[1.2vw] mt-[3vh]">Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.</p>
      <div className="h-[10vh] w-[81%] flex justify-center mt-[10vh] gap-[4%] items-center">
        <input type="text" placeholder="Enter Name" className="h-[7vh] w-[48%] text-[gray] outline-none bg-black placeholder:text-[gray] pl-[1vw]"></input>
        <input type="email" placeholder="Enter Email" className="h-[7vh] w-[48%] bg-black text-[gray] outline-none placeholder:text-[gray] pl-[1vw]"></input>
      </div>
      <div className="h-[10vh] w-[81%] flex justify-center gap-[4%] items-center">
        <input type="text" placeholder="Enter Subject" className="h-[7vh] w-[48%] text-[gray] outline-none bg-black placeholder:text-[gray] pl-[1vw]"></input>
        <input type="email" placeholder="Enter Phone Number" className="h-[7vh] w-[48%] bg-black text-[gray] outline-none placeholder:text-[gray] pl-[1vw]"></input>
      </div>
      <textarea placeholder="Enter Your Message" className="h-[25vh] w-[81%] mt-[2vh] text-[gray] outline-none bg-black resize-none placeholder:text-[gray] pl-[1vw] pr-[1vw] pt-[1vh]" rows="4" cols="50"/>
      <div className="h-[7.5vh] w-[11.5vw] bg-[#ABC502] mt-[3vh] text-[black] cursor-pointer flex justify-center duration-500 items-center text-[1.1vw] font-bold hover:text-[#ABC502] hover:bg-[black]">
        SEND MESSAGE
      </div>
    </div>
    <div id="contact" className="h-[25vh] w-[100%] bg-[#ABC502] flex justify-center items-center">
      <div className="h-[15vh] w-[27%] flex flex-col justify-center items-center border-r-[0.1vw] border-black">
        <h1 className='text-[2vw] tracking-[0.001vw] font-[Roboto] font-bold'>EMAIL</h1>
        <p className="mt-[1vh]">fitx@yoursite.com</p>
        <p>support@yoursite.com</p>
      </div>
      <div className="h-[15vh] w-[27%] flex flex-col justify-center items-center border-r-[0.1vw] border-black">
        <h1 className='text-[2vw] tracking-[0.001vw] font-[Roboto] font-bold'>CALL US NOW!</h1>
        <h2 className='text-[2.7vw] tracking-[0.001vw] font-bold'>+977 9876825341</h2>
      </div>
      <div className="h-[15vh] w-[27%] flex flex-col justify-center items-center">
        <h1 className='text-[2vw] tracking-[0.001vw] font-[Roboto] font-bold'>ADDRESS</h1>
        <p>99 St. Tilottama Park</p>
        <p>Tilottama City 28292. Nepal</p>
      </div>
    </div>
    <div className='h-[55vh] w-[100%] bg-[url("./img/last.jpg")] bg-cover bg-no-repeat flex flex-col gap-[3vh] justify-center items-center'>
      <h1 className="text-[3.5vw] text-[#ABC502] tracking-[0.001vw] font-[Roboto] font-bold">FITX</h1>
      <div className="h-[15vh] w-[30%] flex">
        <div className="w-[20%] flex justify-center items-center"><FaFacebookF className="text-[#ABC502] text-[2.5vw] hover:text-white duration-300"/></div>
        <div className="w-[20%] flex justify-center items-center"><FaTwitter className="text-[#ABC502] text-[2.5vw]  hover:text-white duration-300"/></div>
        <div className="w-[20%] flex justify-center items-center"><FaInstagram className="text-[#ABC502] text-[2.6vw]  hover:text-white duration-300"/></div>
        <div className="w-[20%] flex justify-center items-center"><FaPinterest className="text-[#ABC502] text-[2.5vw]  hover:text-white duration-300"/></div>
        <div className="w-[20%] flex justify-center items-center"><FaWhatsapp  className="text-[#ABC502] text-[2.6vw]  hover:text-white duration-300"/></div>
      </div>
    </div>
    <div className="h-[9vh] w-[100%] text-[#ffffff70] bg-black flex justify-center items-center">Copyright 2019 © FitX - Fitness & Gym HTML Template. Designed by Nerish.</div>
    </>
  );
}

export default App;
