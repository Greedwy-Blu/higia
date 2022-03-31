import Script from 'next/script'
import React from 'react'
import sidebar from '../../sidebar.module.scss'
import { NextPage, GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
const TePage: NextPage = ()=>{

   
    
    
    
    
    
    
      return (
      
      
      <>
      
      <div className="sidebar.sidebar sidebar.close">
    <div className="sidebar.logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">CodingLab</span>
    </div>
    <ul className="sidebar.nav-links">
      <li>
        <a href="#">
          <i className='bx bx-grid-alt' ></i>
          <span className="sidebar.link_name">Dashboard</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="sidebar.link_name" href="#">Category</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bx-collection' ></i>
            <span className="sidebar.link_name">Category</span>
          </a>
          <i className='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul className="sidebar.sub-menu">
          <li><a className="sidebar.link_name" href="#">Category</a></li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">PHP & MySQL</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bx-book-alt' ></i>
            <span className="sidebar.link_name">Posts</span>
          </a>
          <i className='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul className="sidebar.sub-menu">
          <li><a className="sidebar.link_name" href="#">Posts</a></li>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Login Form</a></li>
          <li><a href="#">Card Design</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-pie-chart-alt-2' ></i>
          <span className="sidebar.link_name">Analytics</span>
        </a>
        <ul className="sidebar.sub-menu blank">
          <li><a className="sidebar.link_name" href="#">Analytics</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-line-chart' ></i>
          <span className="sidebar.link_name">Chart</span>
        </a>
        <ul className="sidebar.sub-menu blank">
          <li><a className="sidebar.link_name" href="#">Chart</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bx-plug' ></i>
            <span className="sidebar.link_name">Plugins</span>
          </a>
          <i className='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul className="sidebar.sub-menu">
          <li><a className="sidebar.link_name" href="#">Plugins</a></li>
          <li><a href="#">UI Face</a></li>
          <li><a href="#">Pigments</a></li>
          <li><a href="#">Box Icons</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-compass' ></i>
          <span className="sidebar.link_name">Explore</span>
        </a>
        <ul className="sidebar.sub-menu blank">
          <li><a className="sidebar.link_name" href="#">Explore</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-history'></i>
          <span className="sidebar.link_name">History</span>
        </a>
        <ul className="sidebar.sub-menu blank">
          <li><a className="sidebar.link_name" href="#">History</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-cog' ></i>
          <span className="sidebar.link_name">Setting</span>
        </a>
        <ul className="sidebar.sub-menu blank">
          <li><a className="sidebar.link_name" href="#">Setting</a></li>
        </ul>
      </li>
      <li>
    <div className="sidebar.profile-details">
      <div className="sidebar.profile-content">
       
      </div>
      <div className="sidebar.name-job">
        <div className="sidebar.profile_name">Prem Shahi</div>
        <div className="sidebar.job">Web Desginer</div>
      </div>
      <i className='bx bx-log-out' ></i>
    </div>
  </li>
</ul>
  </div>
  <section className="sidebar.home-section">
    <div className="sidebar.home-content">
      <i className='bx bx-menu' ></i>
      <span className="sidebar.text">Drop Down Sidebar</span>
    </div>
  </section>





      
      <Script id="show-banner" strategy="lazyOnload">
 {` let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
}); ` }
</Script>
      
      </>);
    
    
    }