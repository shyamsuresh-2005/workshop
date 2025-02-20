import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <Link class="navbar-brand" href="#">Boystoy</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="#">contact us</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          about us
        </Link>
        <div class="dropdown-menu">
          <Link class="dropdown-item" href="#">Action</Link>
          <Link class="dropdown-item" href="#">Another action</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" href="#">Something else here</Link>
        </div>
      </li>
      <li class="nav-item">
        <Link class="nav-link disabled">My orders</Link>
      </li>
    </ul>
  </div>
</nav>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/images/the-boys-season-4-homelander-da-3840x2160.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img
        src="../assets/images/830707-the-boys-season-2-poster-hd-tv-shows-4k-wallpaper-image-background-photo-and-picture.jpg"
        class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../assets/images/OIP (1).jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
<section class="about-section py-5">
  <div class="container"></div>
    <div class="row">
      <div class="col-lg-8 col-md-6 col-sm-6 col-6">
        <div class="about-details">
          <h3>welcome to the boys toy shop</h3>
          <p>The Boys is an American satirical superhero drama series developed by Eric Kripke for Amazon Prime Video.
            Based on the comic book of the same name by Garth Ennis and Darick Robertson, it follows the eponymous team
            of vigilantes as they combat superpowered individuals (referred to as "Supes") who abuse their powers for
            personal gain and work for a powerful company (Vought International) that ensures the general public views
            them as heroes. The series features an ensemble cast that includes Karl Urban, Jack Quaid, Antony Starr,
            Erin Moriarty, Dominique McElligott, Jessie T. Usher, Chace Crawford, Laz Alonso, Tomer Capone, Karen
            Fukuhara, Nathan Mitchell, Elisabeth Shue, Colby Minifie, Aya Cash, Claudia Doumit, Jensen Ackles, Cameron
            Crovetti, Susan Heyward, Valorie Curry, and Jeffrey Dean Morgan.</p>
          <button class="btn btn-success"/>
            Shop no
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-6">
          <div class="about-image-div">
            <img src="../assets/images/12684015.jpg" alt="" class="img-fluid about-img"/>
          </div>
        </div>
      </div>
    </div>
</section>
<section class="product-section py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="product-details px-2">
          <img src="../assets/images/R.jpg" alt="" srcset="" class="img-fluid product-img"/>
          <div class="product-details px-2">
            <h5>superhero 1</h5>
            <p>Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the
              Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.</p>
            <p><del>$ 200</del> $ 99</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="product-div">
          <img src="../assets/images/wp9152334.webp" alt="" srcset="" class="img-fluid product-img"/>
          <div class="product-details px-2">
            <h5>superhero 2</h5>
            <p>The film was announced in October 2014 as Avengers: Infinity War – Part 2, but Marvel Studios later
              removed this title. The Russo brothers joined as directors in April 2015,</p>
            <p><del>$ 200</del> $ 99</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="product-div">
          <img src="../assets/images/the-boys-season-4-homelander-da-3840x2160.jpg" alt="" srcset=""
            class="img-fluid product-img"/>
          <div class="product-details px-2">
            <h5>superhero 3</h5>
            <p>The film was announced in October 2014 as Avengers: Infinity War – Part 2, but Marvel Studios later
              removed this title. The Russo brothers joined as directors in April 2015,</p>
            <p><del>$ 200</del> $ 99</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default App;
