let quotes= ['“No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.”― Jaymin Shah',
'“Things may come to those who wait, but only the things left by those who hustle.”― Abraham Lincoln',
'“Everything comes to him who hustles while he waits.”― Thomas Edison',
'“Every sucessful person in the world is a hustler one way or another. We all hustle to get where we need to be. Only a fool would sit around and wait on another man to feed him.” ― K’wan',
'“Invest in your dreams. Grind now. Shine later.” – Unknown'
];

const messages = (qute)=>{
 return qute[Math.round(Math.random()* qute.length)]
};

const add = (ad) => {
    return quotes.unshift(ad)
};
add('trust no one')

console.log(messages(quotes)) 