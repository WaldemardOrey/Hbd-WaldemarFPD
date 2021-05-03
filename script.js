
   


const ela = document.getElementById("el");

const container2 = document.getElementById("container");




ela.addEventListener("click",()=>{;

setTimeout(changetext(), 3000)

})
    
    
    function changetext(){
    
    container2.innerHTML = `
    <div class="texto">Parabéns Papa<i class="fad fa-fire-alt"></i>
    <div class="k">Feliz aniversário, pai! Eu te amo demais e agradeço por ter um pai tão incrível, amoroso e dedicado como você.
        <p> Espero que este dia traga muitas coisas boas e que seja tâl como voce deseja. Que Deus lhe conceda muitos anos cheios de saúde, felicidade e muito amor. Desejo que esta data se repita muitos e muitos anos. Parabéns! </p>
        <a style ="color: darkblue; text-decoration: none; cursor: pointer; margin-top: 5vh; transition: 0s;"  href="https://api.whatsapp.com/send?phone=244947214312&text=Eu%20visitei%20o%20site%2C%20que%20site%20íncrivel filho!">Agora Clica aqui!</a>
            
    </div>
    </div>
    
    `
    
    
    };
