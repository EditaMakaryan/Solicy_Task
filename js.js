class Task{
    constructor(){
        this.addBtn=document.querySelector('#add');
        this.boxSide=document.querySelector('.box-side');
        this.getInfoFromStorage()
        this.createCards()
        this.addBtn.addEventListener('click',(evt)=>{
            this.addCardsToStorage()
            this.delete()
        })
        this.sortBtn=document.querySelector('#sort');
        this.sortBtn.addEventListener('click',(evt)=>{
            this.sort
            ()
        })
    this.delete()
        
    }
    delete(){
        this.delBtn=document.querySelectorAll('.del');
        this.delBtn.forEach((item)=>{
            item.addEventListener('click',(evt)=>{
                localStorage.removeItem(`${item.parentElement.textContent}`);
                this.boxSide.innerHTML='';
                this.getInfoFromStorage();
                this.createCards();
                this.delete();
            })
        })
    }
    sort(){
        this.localInfo=this.localInfo.sort((a,b)=>{
            return a-b
        })
        this.createCards()
        this.delete()
    }

    createCards(){
        this.boxSide.innerHTML=''
        this.localInfo.forEach((item)=>{
        const card=document.createElement('div');
        card.classList.add('mini-boxes');
        card.innerHTML=`<img src="./delete_512.png" alt="del" class="del">${item}`;
        this.boxSide.appendChild(card);
    })
       
    }
    getInfoFromStorage(){
        function allStorage() {
            let values = [],
                keys = Object.keys(localStorage),
                i = keys.length;
            while ( i-- ) {
                values.push( localStorage.getItem(keys[i]));  
            }
            return values;
        }
        this.localInfo= allStorage()
    }
    addCardsToStorage(){
        const number=Math.floor(Math.random()*100)
        localStorage.setItem(number,number);
        this.getInfoFromStorage();
        this.createCards()
    }
}
const task=new Task()