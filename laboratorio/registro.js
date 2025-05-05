const renderRegisterPage = () => {
  document.body.appendChild(createHeader());

  const form = document.createElement('form');
  form.style = 'max-width: 400px; margin: 2rem auto; display: flex; flex-direction: column; gap: 1rem;';

  const inputUrl = document.createElement('input');
  inputUrl.type = 'url';
  inputUrl.placeholder = 'URL de la imagen';
  inputUrl.required = true;

  const inputDesc = document.createElement('input');
  inputDesc.type = 'text';
  inputDesc.placeholder = 'Descripción (mínimo 3 caracteres)';
  inputDesc.required = true;

  const btnSubmit = document.createElement('button');
  btnSubmit.textContent = 'Agregar Imagen';
  btnSubmit.type = 'submit';

  form.append(inputUrl, inputDesc, btnSubmit);
  document.body.appendChild(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = inputUrl.value.trim();
    const desc = inputDesc.value.trim();

    if (!url || desc.length < 3) {
      alert('Ingrese una URL válida y una descripción de al menos 3 caracteres.');
      return;
    }

    agregarImagen({ url, descripcion: desc });
    navigateTo('main');
  });
};
