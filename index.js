export default Localiz {
    constructor(json, lang = "en"){
        this.json = json;
        this.lang = "en";
    }

    setLang(lang = "en"){
        this.lang = lang;
    }
    
    get(key, default="" ){
        if(this.json[key])
            return this.json[key][this.lang];
        return default;
    }
}