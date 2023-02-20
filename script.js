const endpoint = `https://api.airtable.com/v0/${config.baseId}/${config.tableName}`;

const cardContainer = document.querySelector('.card-container');

async function getData() {
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${config.apiKey}`
    }
  });
  const data = await response.json();
  return data.records;
}

function displayData(records) {
  records.forEach(record => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h2>${record.fields['Nombre del video']}</h2>
      
    `;
    card.addEventListener('click', () => {
      window.location.href = `details.html?id=${record.id}`;
    });
    cardContainer.appendChild(card);
  });
}

getData().then(records => {
  displayData(records);
});

