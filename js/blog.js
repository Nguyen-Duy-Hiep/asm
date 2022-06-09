const listContents = [
    {
        id:1,
        title: "UI Interactions of the week",
        time: "12 Feb 2019",
        text: "|",
        type: "Express, Handlebars",
        text2: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id:2,
        title: "UI Interactions of the week",
        time: "12 Feb 2019",
        text: "|",
        type: "Express, Handlebars",
        text2: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id:3,
        title: "UI Interactions of the week",
        time: "12 Feb 2019",
        text: "|",
        type: "Express, Handlebars",
        text2: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id:4,
        title: "UI Interactions of the week",
        time: "12 Feb 2019",
        text: "|",
        type: "Express, Handlebars",
        text2: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
]   

function showContents(contents){
    if(!Array.isArray(contents) || contents.length == ""){
        return false;
    }
    let result = "";
    for(let i = 0; i < contents.length; i++){
        const content = contents[i];
        result += `
        <div class="mt-4">
                <a href=""><h3 class="text-[26px] font-bold text-[#21243D]">${content.title}</h3></a>
                <div class="flex mt-1">
                <p class="text-[#21243D] text-[16px]">${content.time}</p>
                <p class="px-4">${content.text}</p>
                <p class="text-[#8695A4]">${content.type}</p>
                </div>
                
                <p class="mt-2">${content.text2}</p>
                <hr class="my-4">
            </div>
        `;
    }
    return result;
}
document.getElementById("contents3").innerHTML = showContents(listContents);