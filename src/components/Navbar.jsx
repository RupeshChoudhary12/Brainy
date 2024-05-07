import React from 'react'

const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg">
    <img src="" alt="" />
  <div class="container-fluid">
    <a class="navbar-brand ms-5" href="#">BranlyLingo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">LeaderBored</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Daliy Quitz</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Genere</a>
        </li>
     
    
      
      </ul>
    </div>
    <button type="button" class=" btn btn-primary me-5 rounded">Sign Out  </button>

  </div>

</nav>
  )
}

export default Navbar
