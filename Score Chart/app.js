const warriorsGames = [{
            awayTeam: {
                team: 'Goldan', point: 110,isWinner:true
            },
            hometeam: {
                team:'Hoston',point:104,isWinner:false
            }
        },
        {
            awayTeam: {
                team: 'Goldan',point: 100,isWinner:false
            },
            hometeam: {
                team:'Hoston',point:103,isWinner:true
            }
    },
    {
        hometeam: {
            team: 'Goldan',point: 120,isWinner:true
        },
        awayTeam: {
            team:'Hoston',point:106,isWinner:false
        }
    },
    {
        hometeam: {
            team: 'Goldan',point: 101,isWinner:false
        },
        awayTeam: {
            team:'Hoston',point:104,isWinner:true
        }
    },
        {
            awayTeam: {
               team: 'Goldan',point: 118,isWinner: true
            },
            hometeam: {
                team: 'Hoston', point: 105, isWinner: false
            }
        }    
]

const ulparent = document.createElement('ul');
for (let game of warriorsGames)
{
    const { hometeam, awayTeam } = game;
    const gameli = document.createElement('li');
    const { team:hteam, point:hpoint } = hometeam;
    const { team:aTeam, point:apoint} = awayTeam;
    const teamNames = `${aTeam} @ ${hteam}`;
    let scroeline;
    if (apoint > hpoint)
    {
         scroeline = `<b>${apoint}</b>- ${hpoint}`;
    }
    else
    {
        scroeline = `${apoint}-<b>${hpoint}</b>`;
    }
    const warriors = hteam === 'Goldan' ? hometeam : awayTeam;  
    gameli.classList.add(warriors.isWinner ? 'win' : 'loss')
    
    gameli.innerHTML = `${teamNames} ${scroeline}`
    ulparent.appendChild(gameli);
}

document.body.prepend(ulparent);
