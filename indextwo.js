let clear = document.getElementById('clear')
let search = document.getElementById('search')
let Word = document.getElementById('word')
let wClass = document.getElementById('word-class')
let syno = document.getElementById('synonym')
let define = document.getElementById('define')
let example = document.getElementById('example')
let disnone = document.getElementById('disnone')

let inputVal = search.value
let route = `https://api.dictionaryapi.dev/api/v2/entries/en/`

let dictionary = [
    {
        Word: "happy",
        meaning: "feeling or showing something about something",
        adj: "happy",
        example: "I was happy lol",
        syno: "lmao, lol, laughs, giggle"
    },
    {
        Word: "big",
        meaning: "when you're big you're big abeg",
        adj: "biggie",
        example: "bigge biggie bigge can't you see",
        syno: "omo, biggie, poppa"
    },
]

// search.setAttribute('type', 'password')

search.addEventListener('keyup', (e)=>{

    if(e.key === 'Enter'){
        
        if(search.value == ''){
            alert('Input cant be empty')
        }

        else{

            fetch(`${route}${search.value}`)
            .then(response => response.json())
            .then(data => {
            Word.textContent = data[0].word
              example.textContent = data[0].meanings[0].definitions[0].example
               define.textContent = data[0].meanings[1].definitions[0].definition
                synonym.textContent = data[0].meanings[0].synonyms


         })
            .catch(error => console.log(error))


//             let result = dictionary.find((item)=> item.Word.toLowerCase() == search.value.toLowerCase().trim())
        
// if(result){

//   
//     define.textContent = result.meaning
//     example.textContent = result.example
//     syno.textContent = result.syno

//     search.value = ''
//     box.style.display = 'block'
// }
// else{
//     Word.textContent = "Word not found"
//     box.style.display = 'none'
// }


        }
    }
})