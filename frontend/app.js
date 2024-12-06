document.getElementById('fetchData').addEventListener('click', async () => {
  try {
    const response = await fetch('/api');
    const data = await response.json();
    document.getElementById('message').innerText = data.message;
  } catch (error) {
    document.getElementById('message').innerText = 'Error al obtener el mensaje';
  }
});
