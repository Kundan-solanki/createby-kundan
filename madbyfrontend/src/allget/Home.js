import React from 'react'
import './homestyle.css'
import { Link } from 'react-router-dom';

// import Box from '@mui/material/Box';
// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';
// // import { FloatingWhatsApp } from 'react-floating-whatsapp';


// import { FaSquareWhatsapp } from "react-icons/fa6";
export default function Home() {
  // const actions = [
  //   { icon: <FaSquareWhatsapp />, name: 'Copy' },
  //   { icon: <SaveIcon />, name: 'Save' },
  //   { icon: <PrintIcon />, name: 'Print' },
  //   { icon: <ShareIcon />, name: 'Share' },
  // ];
  return (
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner h-70">
          <div class="carousel-item active">
            <img src="https://www.naukri.com/campus/career-guidance/wp-content/uploads/2024/12/IT-Project-Manager-Roles-and-Responsibilities-1024x576.jpg" class="d-block w-100 h-90" alt="..." />

          </div>
          <div>
          
    </div>
        </div> 


        <div className='d-flex m-2 p-3'>

        <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">Featured post</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img class="bd-placeholder-img" width="200" height="250" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09ImkbA35PAeU7bCMsvtvcaimxoUwxxBq1BGVNlAWcMrlhjahXynTmpSG6ATk1xpf_Ig&usqp=CAU" role="img" 
          ></img>

        </div>
      </div>
    </div>

    {/* //  second box */}

    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">Featured post</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img class="bd-placeholder-img" width="200" height="250" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnLSrpwPrKY_k86NxD6GJThjGtCOCjYgfOhyP102VkWGgvQ9RIkAqFXIWlLeK7TdZ8_P8&usqp=CAU" role="img" 
          ></img>

        </div>
      </div>
    </div>
    </div>


    {/* third box */}
    <div className='p-3 m-3 d-flex'>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">Featured post</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img class="bd-placeholder-img" width="200" height="250" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwC5voq5Ib5P5pd74zrqgmyIx5a7gfKq47oMTfe1zobQ-qQdgYg7GF5BwCKVsGvvZsd1U&usqp=CAU" role="img" 
          ></img>

        </div>
      </div>
    </div>


    {/* // four box hs */}
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">Featured post</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img class="bd-placeholder-img" width="200" height="250" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy5TqDqBJ253y0Pqb-xFGBFvcY115VTaLvqDmdyVfX0sa5_aEn17xf7EO-coHhx6-y10g&usqp=CAU" role="img" 
          ></img>

        </div>
      </div>
    </div>
    </div>

        <footer className="footer">
 Made with ❤️ by Kundan
</footer>

        {/* <div className="mobile-menu">
  <a href="#" className="active">Home</a>
  <a href="#">Our Home Models</a>
  <a href="#">Who We Are</a>
  <a href="#">What We Do & Why</a>
  <a href="#">FAQs</a>
  <button className="contact-btn">Contact us</button>
</div>

<main className="hero">
  <div className="hero-content">
    <h1>✨ We Build Very Modern and Stylish Building
      <span className="thumbnail">
        <img src="https://housely.com/wp-content/uploads/2016/09/Luxurious-yellow-themed-bedroom.jpg" alt="Modern interior thumbnail"/>
      </span>
    </h1>
    <div className="cta-container">
      <button className="booking-btn">
        Booking a consultant
      </button>
    </div>
  </div>

  <div className="hero-image">
    <div className="circular-image">
      <img src="https://housely.com/wp-content/uploads/2016/09/Luxurious-yellow-themed-bedroom.jpg" alt="Modern interior"/>
    </div>
  </div>
</main>
<section className="difference-section">
  <div className="features-header">
    <span className="features-label">WHAT IS DIFFERENT</span>
    <h2 className="features-title">
      <span className="decorative-dash">~</span>
      What makes us different
      <span className="decorative-dash">~</span>
    </h2>
  </div>

  {/* <div className="carousel">
    <div className="carousel-track">
      <div className="carousel-item">
        <div className="circle orange">
          <div className="icon wavy"></div>
        </div>
        <div className="description">
          <h2>Similar visual appearance across all print?</h2>
          <p>The other hand we denounce with righteous indignation and dislike beguiled pleasure...</p>
        </div>
        <div className="circle yellow">
          <svg viewBox="0 0 24 24" className="icon">
            <path d="M12 3l4 7h-8l4-7z"></path>
            <path d="M12 21l-4-7h8l-4 7z"></path>
          </svg>
        </div>
      </div>
      <div className="carousel-item">
        <div className="circle yellow">
          <div className="icon star"></div>
        </div>
        <div className="description">
          <h2>Does our design make a difference?</h2>
          <p>The joys of our design simplify your life with a touch of beauty...</p>
        </div>
        <div className="circle pink">
          <div className="feature-icon pink">
            <svg viewBox="0 0 24 24" className="icon">
              <path d="M3 6c2 0 4 2 6 2s4-2 6-2 4 2 6 2"></path>
              <path d="M3 12c2 0 4 2 6 2s4-2 6-2 4 2 6 2"></path>
              <path d="M3 18c2 0 4 2 6 2s4-2 6-2 4 2 6 2"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="circle orange">
          <div className="icon wavy"></div>
        </div>
        <div className="description">
          <h2>Innovation at its peak!</h2>
          <p>We combine creativity with practicality to deliver unique results...</p>
        </div>
        <div className="circle yellow">
          <svg viewBox="0 0 24 24" className="icon">
            <path d="M12 3l4 7h-8l4-7z"></path>
            <path d="M12 21l-4-7h8l-4 7z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div> */}
      
        {/* </section>
<section className="constr-services">
  <div className="features-header">
    <span className="features-label">NEED TO KNOW</span>
    <h2 className="features-title">
      <span className="decorative-dash">~</span>
      Our Services
      <span className="decorative-dash">~</span>
    </h2>
  </div>

  <div className="constr-grid">
    <div className="constr-card">
      <div className="constr-blob constr-blob-1"></div>
      <div className="constr-content">
        <h3>General Contracting</h3>
        <p>General contracting refers to a construction a single contractor.</p>
      </div>
    </div>

    <div className="constr-card">
      <div className="constr-blob constr-blob-2"></div>
      <div className="constr-content">
        <h3>Special Projects</h3>
        <p>broad term that can refer to unique or non-routine</p>
      </div>
    </div>

    <div className="constr-card">
      <div className="constr-blob constr-blob-3"></div>
      <div className="constr-content">
        <h3>House Renovation</h3>
        <p>House renovation, alsoas home renovation or remodeling</p>
      </div>
    </div>
  </div>
</section>
<section>
  <div className="features-header">
    <span className="features-label">SEE</span>
    <h2 className="features-title">
      <span className="decorative-dash">~</span>
      Our Projects
      <span className="decorative-dash">~</span>
    </h2>
  </div>
  <div className="hero-section">
    <div className="hero-container">
      <div className="hero-slide active">
        <div className="one">
          <div className="oneImg">

          </div>
          <div className="oneTxt">
            <h2>1304<br /> Carolyn Way</h2>
            <div>
              <div>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 8V3H3V9L5 12V21M7 3V5M11 3V5M10 16L14.4237 11.9784C14.8038 11.6329 14.9938 11.4601 15.2091 11.3947C15.3988 11.337 15.6012 11.337 15.7909 11.3947C16.0062 11.4601 16.1962 11.6329 16.5763 11.9784L21 16M12 14.1818V19.4C12 19.9601 12 20.2401 12.109 20.454C12.2049 20.6422 12.3578 20.7951 12.546 20.891C12.7599 21 13.0399 21 13.6 21H17.4C17.9601 21 18.2401 21 18.454 20.891C18.6422 20.7951 18.7951 20.6422 18.891 20.454C19 20.2401 19 19.9601 19 19.4V14.1818M11 9H7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                House Type<br/>
              </div>
              <div>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9928 6.6967L17.1747 3.51472L20.3567 6.6967L19.2961 7.75736L17.9247 6.38604L17.9247 17.614L19.2961 16.2426L20.3567 17.3033L17.1747 20.4853L13.9928 17.3033L15.0534 16.2426L16.4247 17.614V6.38604L15.0534 7.75736L13.9928 6.6967Z" fill="#080341" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 4.5L4.5 3.75H12L12.75 4.5V19.5L12 20.25H4.5L3.75 19.5V4.5ZM5.25 5.25V18.75H11.25V17.25H8.25V15.75H11.25V14.25H8.25V12.75H11.25V11.25H7.5V9.75H11.25V8.25H8.25V6.75H11.25V5.25H5.25Z" fill="#080341" />
                </svg>
                2890 sqft
              </div>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="oneImg twoImg">

          </div>
          <div className="twoTxt">
            <h2>2376<br />
              Kimridge Rd</h2>
            <div className="ab">
              <div>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 8V3H3V9L5 12V21M7 3V5M11 3V5M10 16L14.4237 11.9784C14.8038 11.6329 14.9938 11.4601 15.2091 11.3947C15.3988 11.337 15.6012 11.337 15.7909 11.3947C16.0062 11.4601 16.1962 11.6329 16.5763 11.9784L21 16M12 14.1818V19.4C12 19.9601 12 20.2401 12.109 20.454C12.2049 20.6422 12.3578 20.7951 12.546 20.891C12.7599 21 13.0399 21 13.6 21H17.4C17.9601 21 18.2401 21 18.454 20.891C18.6422 20.7951 18.7951 20.6422 18.891 20.454C19 20.2401 19 19.9601 19 19.4V14.1818M11 9H7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                House Type<br/>
              </div>
              <div>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9928 6.6967L17.1747 3.51472L20.3567 6.6967L19.2961 7.75736L17.9247 6.38604L17.9247 17.614L19.2961 16.2426L20.3567 17.3033L17.1747 20.4853L13.9928 17.3033L15.0534 16.2426L16.4247 17.614V6.38604L15.0534 7.75736L13.9928 6.6967Z" fill="#080341" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 4.5L4.5 3.75H12L12.75 4.5V19.5L12 20.25H4.5L3.75 19.5V4.5ZM5.25 5.25V18.75H11.25V17.25H8.25V15.75H11.25V14.25H8.25V12.75H11.25V11.25H7.5V9.75H11.25V8.25H8.25V6.75H11.25V5.25H5.25Z" fill="#080341" />
                </svg>
                2890 sqft
              </div>
            </div>
          </div>
        </div>
        <div className="three">
          <div className="threeTxt">
            <h2>9376<br />
              Kimridge</h2>
            <div className="ab">
              <div>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 8V3H3V9L5 12V21M7 3V5M11 3V5M10 16L14.4237 11.9784C14.8038 11.6329 14.9938 11.4601 15.2091 11.3947C15.3988 11.337 15.6012 11.337 15.7909 11.3947C16.0062 11.4601 16.1962 11.6329 16.5763 11.9784L21 16M12 14.1818V19.4C12 19.9601 12 20.2401 12.109 20.454C12.2049 20.6422 12.3578 20.7951 12.546 20.891C12.7599 21 13.0399 21 13.6 21H17.4C17.9601 21 18.2401 21 18.454 20.891C18.6422 20.7951 18.7951 20.6422 18.891 20.454C19 20.2401 19 19.9601 19 19.4V14.1818M11 9H7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                House Type<br/>
              </div>
              <div>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9928 6.6967L17.1747 3.51472L20.3567 6.6967L19.2961 7.75736L17.9247 6.38604L17.9247 17.614L19.2961 16.2426L20.3567 17.3033L17.1747 20.4853L13.9928 17.3033L15.0534 16.2426L16.4247 17.614V6.38604L15.0534 7.75736L13.9928 6.6967Z" fill="#080341" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 4.5L4.5 3.75H12L12.75 4.5V19.5L12 20.25H4.5L3.75 19.5V4.5ZM5.25 5.25V18.75H11.25V17.25H8.25V15.75H11.25V14.25H8.25V12.75H11.25V11.25H7.5V9.75H11.25V8.25H8.25V6.75H11.25V5.25H5.25Z" fill="#080341" />
                </svg>
                2890 sqft
              </div>
            </div>
          </div>
          <div className="oneImg twoImg threeImg">
          </div>
        </div>
      </div>
      <div className="hero-slide">
        <h1>Explore the Second Slide</h1>
        <p>This is the second division.</p>
      </div>
      <div className="hero-slide">
        <h1>Discover the Third Slide</h1>
        <p>This is the third division.</p>
      </div>
    </div>
    <button id="next-btn"></button>
  </div>
</section>
<section className="info-section">
  <div className="info-header">
    <div className="background-shape"></div>
    <h2>Information About Us</h2>
    <p>Join our team and work with us</p>
  </div>
  <div className="info-stats">
    <div className="stat">
      <h3 className="stat-number" data-target="230">0</h3>
      <p>Complete projects</p>
    </div>
    <div className="stat">
      <h3 className="stat-number" data-target="24">0</h3>
      <p>Locations</p>
    </div>
    <div className="stat">
      <h3 className="stat-number" data-target="500">0</h3>
      <p>Satisfied clients</p>
    </div>
  </div>
</section>
<footer className="footer">
  // Made with ❤️ by Nitish
</footer>  */}
      </div>
      </div>
      )
}
