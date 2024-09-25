
console.log(data);

const cardContainer = document.querySelector('.cards');

function renderPokemonCard() {
    cardContainer.innerHTML = '';

    data.forEach((item) => {

      const li = document.createElement('li');
      li.className = 'card';
  
      const h2 = document.createElement('h2');
      h2.className = 'card--title';
      h2.textContent = item.name.charAt(0).toUpperCase() + item.name.slice(1);
  
      const img = document.createElement('img');
      img.width = '256';
      img.height = '256';
      img.className = 'card--img';
      img.src = item.sprites.other.dream_world.front_default;
  
  
      const dataStats = document.createElement('ul');
      dataStats.className = 'card--text';
     
      item.stats.forEach((currentStat) => {
        const oneStat = document.createElement('li');
        oneStat.className = 'card--text';
        oneStat.textContent = currentStat.stat.name.toUpperCase() + ': ' + currentStat.base_stat;
        dataStats.appendChild(oneStat);
      });
     
      
      
      li.appendChild(h2);
      li.appendChild(img);
      li.appendChild(dataStats);
      
      cardContainer.appendChild(li);
    });

}

renderPokemonCard();

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);