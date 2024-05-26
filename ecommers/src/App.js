import logo from './logo.svg';
import LatestProduct from './Component/LatestProduct';

 
function App() {
  return (
    <>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://titanworld.com/cdn/shop/files/Banner_1.png?v=1702048449&width=2000" class="d-block w-100" alt="..." style={{width: '800px'}} />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://www.kamalwatch.com/cdn/shop/files/402-2021_09_14-JohnsonWatch_8913c44b-f33d-462e-968a-606cc45e29b0.webp?v=1675420011&width=2000" class="d-block w-100" alt="..." style={{width: '800px'}} />
    </div>
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}

export default App;
