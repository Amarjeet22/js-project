const collection =document.querySelector('#collection')
const link = 'https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/'
for(let i=1;i<151;i++){
    const newpok = document.createElement('img')
    newpok.src=`${link}${i}.png`;
    document.body.appendChild(newpok)

}
