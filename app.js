const jokeButton = document.querySelector('#jokeButton');
const history = document.querySelector('#history');
const clearHistory = document.querySelector('#clearHistory');

const getJoke = async () =>{
    try {
        const config = {headers: {Accept: 'application/json'}};
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    }
    catch (e)
    {
        return "Unfortunately I can't get any jokes right now. All the dad's are asleep :("
    }
}

const changeDisplay = async () => {
    const text = await getJoke();
    document.getElementById('display').innerHTML = text;
    const newLI = document.createElement('li');
    newLI.append(text);
    if (document.querySelectorAll('li').length < 20){
        history.append(newLI);
    }
}

jokeButton.addEventListener('click', changeDisplay);
