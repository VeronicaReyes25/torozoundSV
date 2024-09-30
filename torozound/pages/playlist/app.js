const artistas =[
  {
    "nombre": "Álvaro Germán Ibarra Torres",
    "img": "artistas-torozound/Alvaro-torres.jpg",
    "url": "https://www.youtube.com/playlist?list=PLemcpx2BmrJmQIlbTqnwq3wytJvRTnMx1",
    "canciones": 20
  },
  {
    "nombre": "Ale Martore",
    "img": "artistas-torozound/Ale_martore.jpg",
    "url": "https://www.youtube.com/playlist?list=PLydU6IoZc9Xyv66dD3rF4ZKE7UEPEltSb",
    "canciones": 20
  },
  {
    "nombre": "Ale Medina GTM",
    "img": "artistas-torozound/Ale_medinGTM.jpeg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Alfredo José",
    "img": "artistas-torozound/ALfredo_jose.jpeg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },

  {
    "nombre": "Fredd Moz",
    "img": "artistas-torozound/Fred.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },

  {
    "nombre": "Fredy Zelada",
    "img": "artistas-torozound/fredy_z.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Fiebre Amarilla",
    "img": "artistas-torozound/fiebre amarilla.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Frigüey",
    "img": "artistas-torozound/friguey.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "jhosselora",
    "img": "artistas-torozound/jhosse.jpeg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Eskina Opuesta",
    "img": "artistas-torozound/esquina_opuesta.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  }, 
  {
    "nombre": "Espíritu Libre",
    "img": "artistas-torozound/espiritu libre.png",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Los tachos",
    "img": "artistas-torozound/lostachos.jpg",
    "url": "https://www.youtube.com/watch?v=BbV0Q8PqdaI",
    "canciones": 49
  },
  {
    "nombre": "Rucks Parker",
    "img": "artistas-torozound/rucks parker.jpg",
    "url": "https://www.youtube.com/watch?v=7XPmRUp_Yf4",
    "canciones": 10
  },
   {
    "nombre": "René Alonso y su Banda Lasser",
    "img": "artistas-torozound/rene.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },

  {
    "nombre": "Rafa Guillén",
    "img": "artistas-torozound/rafa.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Ricardo Solé",
    "img": "artistas-torozound/ricardo.jpeg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Roberto Salamanca",
    "img": "artistas-torozound/robert.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Steven Rodríguez",
    "img": "artistas-torozound/steven.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Suzu Lunar",
    "img": "artistas-torozound/suzu.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Salsalvador All Stars",
    "img": "artistas-torozound/salsa.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Tito flores",
    "img": "artistas-torozound/tito.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Tito mira",
    "img": "artistas-torozound/titomira.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Tito quinteros",
    "img": "artistas-torozound/titoquin.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "TH MUSICA",
    "img": "artistas-torozound/th.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Orquesta San Vicente",
    "img": "artistas-torozound/osanvicent.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Orquesta Premier",
    "img": "artistas-torozound/opremier.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Oro solido",
    "img": "artistas-torozound/oro.jpg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
  },
  {
    "nombre": "Vanessa Garcia",
    "img": "artistas-torozound/vane.jpeg",
    "url": "https://album.link/xs87h95w2fdh9",
    "canciones": 20
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
    <a href=${artist.url} target="_blank">
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