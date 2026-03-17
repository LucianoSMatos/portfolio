function toggleMode(){
  const body = document.body
  body.classList.toggle('Light')
  const img = document.querySelector('#profile img')
  if(body.classList.contains('Light')){
   img.setAttribute('src','/assets/luc.jpg')
  }else{
    
     img.setAttribute('src','/assets/lu.jpg')
  }



}