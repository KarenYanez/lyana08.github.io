// principal.js


const images = [
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
    descripcion: "Montañas"
  },
  {
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400",
    descripcion: "Playa"
  },
  {
    url: "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=400",
    descripcion: "Comida"
  }
];

// Navegación
const navigateTo = (page) => {
  document.body.innerHTML = '';
  if (page === 'main') renderMainPage();
  if (page === 'register') renderRegisterPage();
};

// Reutilizables
const createHeader = () => {
  const header = document.createElement('header');
  header.innerHTML = `<h1 style="margin: 0; padding: 1rem; background: #457; color: white;">LABORATORIO</h1>`;
  return header;
};

const createSidebar = () => {
  const sidebar = document.createElement('aside');
  sidebar.style = 'width: 200px; background: #235; padding: 1rem;';
  const btn = document.createElement('button');
  btn.textContent = 'Registrar nueva imagen';
  btn.onclick = () => navigateTo('register');
  sidebar.appendChild(btn);
  return sidebar;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `<p style="padding: 1rem; text-align: center;">Galería-Karen Yanez</p>`;
  footer.style = 'background: #457; color: white;';
  return footer;
};


const renderGallery = (imagenes) => {
  const gallery = document.createElement('div');
  gallery.style = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem;';
  imagenes.forEach(({ url, descripcion }) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.style = 'border: 1px solid #ccc; padding: 0.5rem; text-align: center;';
    item.innerHTML = `<img src="${url}" style="max-width: 100%;" /><p>${descripcion}</p>`;
    gallery.appendChild(item);
  });
  return gallery;
};

// Página principal
const renderMainPage = () => {
  document.body.appendChild(createHeader());

  const container = document.createElement('div');
  container.style = 'display: flex;';
  container.appendChild(createSidebar());

  const main = document.createElement('main');
  main.style = 'flex: 1; padding: 1rem;';
  main.appendChild(renderGallery(images));
  container.appendChild(main);

  document.body.appendChild(container);
  document.body.appendChild(createFooter());
};


const agregarImagen = (imagen) => {
  images.push(imagen);
};


navigateTo('main');
