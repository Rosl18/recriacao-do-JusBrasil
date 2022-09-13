        var menuopen = false;
        var subMenu = document.querySelector('.submenu3')
        var button = document.querySelector('.button-todos')
        var subTodos = document.querySelector('.sub-todos')
        var artNot = document.querySelector('.sub-artNot')
        var subJurispru = document.querySelector('.sub-jurispru')
        var subDiarOfici = document.querySelector('.sub-diarOfici')
        var subModelo = document.querySelector('.sub-modelo')
        var subPeca = document.querySelector('.sub-peca')
        var subLegisla = document.querySelector('.sub-legisla')
        var subPerfis = document.querySelector('.sub-perfis')
        var subConsuPro = document.querySelector('.sub-consuPro')
        var subDoutri = document.querySelector('.sub-doutri')
        var setaB = document.querySelector('.seta-B')
        var inputTXT = document.querySelector('.input-txt')
        var separador1 = document.querySelector('.separador1')
        var lupaButton = document.querySelector('.lupa-button')
        var separador = document.querySelector('.separador')


        button.addEventListener('click',() => {

        if(!menuopen){
            subMenu.style.display = 'flex';
            button.setAttribute('style','border-bottom-left-radius:0px;')
            menuopen = true;
        } else{
            subMenu.style.display = 'none';
            button.setAttribute('style','border-bottom-left-radius:10px;')
            menuopen = false;
        }
        }  )

       subTodos.addEventListener('click', () =>{
            button.innerHTML = 'Todos';
            setaB.setAttribute('style', 'position: absolute; top: 32%; left: 17%;')
            button.setAttribute('style','position:absolute; top:27%; left: 10%; width:125px;')
            button.setAttribute('style','border-bottom-left-radius:0px;')
            inputTXT.setAttribute('style','position: absolute; top: 27%; left: 22%;')
            separador1.setAttribute('style', 'position: top: 27%; left: 19%;')
            separador.setAttribute('style', 'position: top: 29.5%; left: 21%;')
            lupaButton.setAttribute('style','position: absolute; top: 30%; left: 80%')
        })
        
        artNot.addEventListener('click', () =>{
            button.innerHTML = 'Artigo e Noticia'
            setaB.setAttribute('style', 'position: absolute; top: 32%; left: 19%;')
            button.setAttribute('style','position:absolute; top:27%; left: 10%; width:125px;')
            button.setAttribute('style','border-bottom-left-radius:0px;')
            inputTXT.setAttribute('style','position: absolute; top: 27%; left: 22%;')
            separador1.setAttribute('style', 'position: top: 27%; left: 19%;')
            separador.setAttribute('style', 'position: top: 29.5%; left: 21%;')
            lupaButton.setAttribute('style','position: absolute; top: 30%; left: 80%')
        })

        subJurispru.addEventListener('click', () =>{
            button.innerHTML = 'Jurisprudência'
            setaB.setAttribute('style', 'position: absolute; top: 32%; left: 19%;')
            button.setAttribute('style','position:absolute; top:27%; left: 10%; width:125px;')
            button.setAttribute('style','border-bottom-left-radius:0px;')
            inputTXT.setAttribute('style','position: absolute; top: 27%; left: 22%;')
            separador1.setAttribute('style', 'position: top: 27%; left: 19%;')
            separador.setAttribute('style', 'position: top: 29.5%; left: 21%;')
            lupaButton.setAttribute('style','position: absolute; top: 30%; left: 80%')
        })

        subDiarOfici.addEventListener('click', () =>{
            button.innerHTML = 'Diários Oficiais'
            setaB.setAttribute('style', 'position: absolute; top: 32%; left: 19%;')
            button.setAttribute('style','position:absolute; top:27%; left: 10%; width:125px;')
            button.setAttribute('style','border-bottom-left-radius:0px;')
            inputTXT.setAttribute('style','position: absolute; top: 27%; left: 22%;')
            separador1.setAttribute('style', 'position: top: 27%; left: 19%;')
            separador.setAttribute('style', 'position: top: 29.5%; left: 21%;')
            lupaButton.setAttribute('style','position: absolute; top: 30%; left: 80%')
        })

        subModelo.addEventListener('click', () =>{
            button.innerHTML = 'Modelos'
            setaB.setAttribute('style', 'position: absolute; top: 32%; left: 17.5%;')
            button.setAttribute('style','position:absolute; top:27%; left: 10%; width:125px;')
            button.setAttribute('style','border-bottom-left-radius:0px;')
            inputTXT.setAttribute('style','position: absolute; top: 27%; left: 22%;')
            separador1.setAttribute('style', 'position: top: 27%; left: 19%;')
            separador.setAttribute('style', 'position: top: 29.5%; left: 21%;')
            lupaButton.setAttribute('style','position: absolute; top: 30%; left: 80%')
        })

        subPeca.addEventListener('click', () =>{
            button.innerHTML = 'Peças'
            setaB.setAttribute('style', 'position: absolute; top: 32%; left: 17%;')
            button.setAttribute('style','position:absolute; top:27%; left: 10%; width:125px;')
            button.setAttribute('style','border-bottom-left-radius:0px;')
            inputTXT.setAttribute('style','position: absolute; top: 27%; left: 22%;')
            separador1.setAttribute('style', 'position: top: 27%; left: 19%;')
            separador.setAttribute('style', 'position: top: 29.5%; left: 21%;')
            lupaButton.setAttribute('style','position: absolute; top: 30%; left: 80%')
        })

        subLegisla.addEventListener('click', () =>{
            button.innerHTML = 'Legislação'
            setaB.setAttribute('style', 'position: absolute; top: 32%; left: 18%;')
            button.setAttribute('style','position:absolute; top:27%; left: 10%; width:125px;')
            button.setAttribute('style','border-bottom-left-radius:0px;')
            inputTXT.setAttribute('style','position: absolute; top: 27%; left: 22%;')
            separador1.setAttribute('style', 'position: top: 27%; left: 19%;')
            separador.setAttribute('style', 'position: top: 29.5%; left: 21%;')
            lupaButton.setAttribute('style','position: absolute; top: 30%; left: 80%')
        })

        subPerfis.addEventListener('click', () =>{
            button.innerHTML = 'Perfis'
            setaB.setAttribute('style', 'position: absolute; top: 32%; left: 17%;')
            button.setAttribute('style','position:absolute; top:27%; left: 10%; width:125px;')
            button.setAttribute('style','border-bottom-left-radius:0px;')
            inputTXT.setAttribute('style','position: absolute; top: 27%; left: 22%;')
            separador1.setAttribute('style', 'position: top: 27%; left: 19%;')
            separador.setAttribute('style', 'position: top: 29.5%; left: 21%;')
            lupaButton.setAttribute('style','position: absolute; top: 30%; left: 80%')
        })
      
        subConsuPro.addEventListener('click', () =>{
            button.innerHTML = 'Consulta Processual'
            setaB.setAttribute('style', 'position: absolute; top: 32%; left: 21.5%;')
            button.setAttribute('style','position:absolute; top:27%; left: 10%; width:147px; border-bottom-left-radius:0px;')
            inputTXT.setAttribute('style','position: absolute; top: 27%; left: 24%;')
            separador1.setAttribute('style', 'position: top: 27%; left: 21%;')
            separador.setAttribute('style', 'position: top: 29.5%; left: 23.5%;')
            lupaButton.setAttribute('style','position: absolute; top: 30%; left: 82%')
        })
      
        subDoutri.addEventListener('click', () =>{
            button.innerHTML = 'Doutrina'
            setaB.setAttribute('style', 'position: absolute; top: 32%; left: 18%;')
            button.setAttribute('style','position:absolute; top:27%; left: 10%; width:125px;')
            button.setAttribute('style','border-bottom-left-radius:0px;')
            inputTXT.setAttribute('style','position: absolute; top: 27%; left: 22%;')
            separador1.setAttribute('style', 'position: top: 27%; left: 19%;')
            separador.setAttribute('style', 'position: top: 29.5%; left: 21%;')
            lupaButton.setAttribute('style','position: absolute; top: 30%; left: 80%')
        })

      