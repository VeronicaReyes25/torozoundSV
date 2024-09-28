const artistas =[
  {
    "nombre": "Álvaro Germán Ibarra Torres",
    "img": "gabytobar.webp",
    "url": "https://www.youtube.com/playlist?list=PLemcpx2BmrJmQIlbTqnwq3wytJvRTnMx1",
    "canciones": 20
  },
  {
    "nombre": "Ale Martore",
    "img": "gabytobar.webp",
    "url": "https://www.youtube.com/playlist?list=PLydU6IoZc9Xyv66dD3rF4ZKE7UEPEltSb",
    "canciones": 20
  },
  {
    "nombre": "Ale Medina GTM",
    "img": "gabytobar.webp",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Alfredo José",
    "img": "gabytobar.webp",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },

  {
    "nombre": "Fredd Moz",
    "img": "gabytobar.webp",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },

  {
    "nombre": "Fredy Zelada",
    "img": "gabytobar.webp",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Fiebre Amarilla",
    "img": "maritorivera.webp",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Frigüey",
    "img": "gabytobar.webp",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Frigüey",
    "img": "gabytobar.webp",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  }, 
  {
    "nombre": "Frigüey",
    "img": "gabytobar.webp",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Freddy Mercury",
    "img": "gabytobar.webp",
    "url": "https://www.youtube.com/watch?v=BbV0Q8PqdaI",
    "canciones": 49
  },
  {
    "nombre": "Melendy",
    "img": "patymendez.webp",
    "url": "https://www.youtube.com/watch?v=7XPmRUp_Yf4",
    "canciones": 10
  }

]
const sectionCards = document.querySelector('.artistas');
const inputFiltroArtista = document.querySelector('#filtro-artista');
const btnFiltroArtista = document.querySelector('#btn-buscar')
let buscarArtista = '';
let artistaFiltrado = [];

const create = (artistas) => {
artistas.forEach(artist => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <a href=${artist.url}>
      <article class="singer-card">
        <div  class="image-card">
          <img src="/public/singers/${artist.img}" alt="cantante-${artist.nombre}" class="object-cover h-[168px]"/>
        </div>
        <div  class="text-card">
          <p class="singer-name">${artist.nombre}</p>
          <p class="singer-song">${artist.canciones} canciones</p>
        </div>
      </article>
    </a>
  `;
  sectionCards.appendChild(card);
});
}

inputFiltroArtista.addEventListener('change', (event) => {
  buscarArtista = event.target.value;
}
);

btnFiltroArtista.addEventListener('click', () => {
  if(buscarArtista === ''){
    sectionCards.innerHTML = '';
    create(artistas); 
    return;
  }
  artistaFiltrado = artistas.filter(artist => artist.nombre.toLowerCase().includes(buscarArtista.toLowerCase()));
  sectionCards.innerHTML = '';
  create(artistaFiltrado);
});


create(artistas);