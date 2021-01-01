import {observable,action,makeObservable,computed,configure} from 'mobx'; // Gerekli importları yaptık
configure({
    enforceActions: "never",
})

class CastViewModel{
    constructor(){
        makeObservable(this)
    }




    @observable resultData = []
  
   

   


    @action getAwards(movieId){
        fetch("https://imdb8.p.rapidapi.com/title/get-awards?tconst="+movieId, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "66f2f37a55msh5240b21821a460ap13698bjsn3597d3a77c68",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        })
        .then(response =>response.json())
        .then(responseJson => {
            this.resultData =responseJson.resource.awards
           console.log(this.resultData)
            
        })
        .catch(error => {
           
        })
    }

    @computed get getData(){

        return this.resultData;
    }



}

export default new CastViewModel()
