function introduction(name) { 
    return `Hi, my name is ${name}.`; 

}
introduction("Qaz");

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;

}

introductionWithLanguage("Qaz", "Javascript"); 

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`; 

}
console.log(introductionWithLanguageOptional("Qaz"));

