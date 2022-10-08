//  const title= document.querySelector('h1')
//  const containerEl= document.querySelector('.container')
//  const careers= ['YouTuber', 'Web Developer', 'Freelancer','Instructor']
//  let careerIndex= 0
//  let characterIndex=0
//  function update(){
//     characterIndex++
//     containerEl.innerHTML=` <h1>I am ${careers[careerIndex].slice(0,1) ==='I'? 'an':'a'} ${careers[careerIndex].slice(0,characterIndex)}</h1>`
    
//     if(characterIndex=== careers[careerIndex].length){
//         careerIndex++
//         characterIndex=0
//     }
//     if(careerIndex===careers.length){
//         careerIndex=0
//      }
//     setTimeout(update, 400)
//  }
 
//  update()
 


const container= document.querySelector('.container')
const careers= ['web developer', 'you tuber', 'instructor','designer']
let careerIndex= 0
let characterIndex= 0



function updateText(){
    characterIndex++
    container.innerHTML=`I am ${careers[careerIndex].slice(0,1) === 'i' ? 'an' : 'a'} ${careers[careerIndex].slice(0,characterIndex)}`
    
    if(characterIndex=== careers[careerIndex].length){
        careerIndex++
        characterIndex=0
    }
    if(careerIndex===careers.length){
        careerIndex=0
    }
    setTimeout(updateText,300);
}
updateText()
 