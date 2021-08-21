let output = document.querySelector('.output');
output.innerHTML = '';



for (i = 10; i > 0; --i)
{
    const para = document.createElement('p');
    if (i === 10)
    {
        para.textContent = 'Countdown 10';
        output.appendChild(para);
    }
    else if (1 === 0)
    {
        para.textContent = 'Blast off';
        output.appendChild(para);
    }
    else
    {
        para.textContent = i;
        output.appendChild(para);
    }
}

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);





const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

for (i = 0; i < people.length; ++i)
{
    if (people[i] === 'Phil' || people[i] === 'Lola')
    {
        refused.textContent += people[i] + ', ';
    }
    else
    {
        admitted.textContent += people[i] + ', ';
    }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';







while(true)
{
    input = prompt('enter a number greater than 100');

    if (input > 100)
    {
        break;
    }
    else if (input === null)
    {
        break;
    }
}