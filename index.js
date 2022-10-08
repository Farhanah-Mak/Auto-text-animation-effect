
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
 