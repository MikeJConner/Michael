let navStr =`<!-- Navbar with dropdown menu -->
<nav class="navbar navbar-inverse navbar-static-top">
<div class="container">
    <div class="navbar-header">
      <a class="navbar-brand">Michael Conner</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="index.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="index.html">Portfolio / Home Page</a></li>
            <li><a href="index.html#software-projects">Software Projects</a></li>
            <li><a href="index.html#other-projects">Other Projects</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="education.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Education <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="education.html">Education Overview</a></li>
            <li><a href="education.html#trips">Trips / Camps</a></li>
            <li><a href="education.html#self-taught">Self Taught Skills / Online Courses</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="extra.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Extracurriculars <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Sports</a></li>
            <li><a href="#">Clubs</a></li>
            <li><a href="#">Hobbies</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="personal.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Personal <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Favorite Books</a></li>
            <li><a href="#">Useful Items</a></li>
            <li><a href="#">Photo Gallery</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>`;

let jumboStr = `
<div class="fluid-container text-center">
  <h1>Future Software Engineer / Computer Scientist</h1>
  <p>Current senior in high school with a strong passion for programming.</p><br />
  <div class = "heart"></div>
</div>
`;

let contactStr =`
  <div class="fluid-container">
    <!-- Contact Heading -->
    <h1 class="text-center">Contact</h1>

    <!-- 1x3 Bootstrap grid for contact icons, with multiple column sizes for different breakpoints -->
    <div class="row">

      <!-- Instagram Column -->
      <a target="blank" href="https://www.instagram.com/mjconner642/?hl=en" >
        <div class="col-sm-6 col-lg-3">
          <div class="contact text-center">
            <span aria-hidden="true" class="fa fa-instagram fa-5x text-center"></span>
          </div>
        </div>
      </a>

      <!-- GitHub Column -->
      <a target="_blank" href="https://github.com/MikeJConner" >
        <div class="col-sm-6 col-lg-3">
          <div class="contact text-center">
            <span aria-hidden="true" class="fa fa-github fa-5x text-center"></span>
          </div>
        </div>
      </a>

      <!-- Email Column-->
      <a href="mailto: mikejconner6@gmail.com" >
        <div class="col-sm-6 col-lg-3">
          <div class="contact text-center">
            <span aria-hidden="true" class="fa fa-envelope fa-5x" ></span>
          </div>
        </div>
      </a>

      <!-- LinkedIn Column-->
      <a target="_blank" href="https://www.linkedin.com/in/mike-conner-477b9b132/" >
        <div class="col-lg-3">
          <div class="contact text-center">
            <span aria-hidden="true" class="fa fa-linkedin fa-5x" ></span>
          </div>
        </div>
      </a>
    </div>
  </div>
`;

function displayNavBar(){
  document.getElementById('nav').insertAdjacentHTML('afterbegin', navStr);
}

function displayJumbo(){
  document.getElementById('about').insertAdjacentHTML('afterbegin', jumboStr);
}

function displayContact(){
  document.getElementById('contact').insertAdjacentHTML('afterbegin', contactStr);
}
