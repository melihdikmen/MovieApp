import {observable,action,makeObservable,computed,configure} from 'mobx'; // Gerekli importları yaptık
configure({
    enforceActions: "never",
})

class HomeViewModel{
    constructor(){
        makeObservable(this)
    }

    @observable searchText = ""

    @observable resultData = []
  
   

    @action onChangeSearchText(text){
        
        this.searchText = text
        console.log(this.searchText)
        this.getMovies()

    }


    @action getMovies(){
        
        fetch("https://imdb8.p.rapidapi.com/title/auto-complete?q="+this.searchText, {
	        "method": "GET",
	        "headers": {
		    "x-rapidapi-key": "66f2f37a55msh5240b21821a460ap13698bjsn3597d3a77c68",
		    "x-rapidapi-host": "imdb8.p.rapidapi.com"
	    }
        })
        .then(response =>response.json())
        .then(responseJson => {
            this.resultData =responseJson.d
            console.log(this.resultData[0].id)
            
        })
        .catch(error => {
           
        })
    }

    @computed get getData(){

        return this.resultData;
    }



}

export default new HomeViewModel()
