export default class Localiz {
    constructor(json, lang = "en"){
        this.json = json;
        this.lang = lang;
    }

    setLang(lang = "en"){
        this.lang = lang;
    }
    
    get(key, text="" ){
        if(this.json[key])
            return this.json[key][this.lang];
        return text;
    }
}