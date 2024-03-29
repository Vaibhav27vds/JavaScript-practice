const languages = ["js", "ruby", "java", "python", "ts"]

languages.forEach((item, index, languages) => {
    console.log(`This language is ${item} and the index is ${index} and the array is ${languages}`);
})


const myTechStack = [
    {
        language: "javascript",
        languageFile: "js",
    },
    {
        language: "java",
        languageFile: "java",
    },
    {
        language: "python",
        languageFile: "py",
    },
]

myTechStack.forEach((item)=> {
    console.log(item.languageFile); 
})