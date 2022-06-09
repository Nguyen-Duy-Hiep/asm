const listContents = [
    {
        id: 1,
        title: "Designing Dashboards with usability in mind",
        year: 2020,
        type: "Dashboard, User Experience Design",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img: "https://res.cloudinary.com/duy-hiep/image/upload/v1654627082/asm-web-2022/Rectangle_4_oll87g.png",
        title2: "Heading 1",
        title3: "Heading 2",
        img2: "https://res.cloudinary.com/duy-hiep/image/upload/v1654627070/asm-web-2022/Rectangle_5_tc0jba.png",
        img3: "https://res.cloudinary.com/duy-hiep/image/upload/v1654628017/asm-web-2022/Rectangle_6_1_sibfrm.png",
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
        <div>
              <a href=""><h2 class="text-[#21243D] text-[34px] font-bold">${content.title}</h2></a>
              
              <div class="flex space-x-4 mt-4">
                <div class="mt-1">
                    <span class="bg-[#FF7C7C] text-white font-bold rounded-3xl px-2 text-[18px]">${content.year}</span>
                </div>
                  <p class="text-[20px] text-[#21243D]">${content.type}</p>
              </div>
              <div class="mt-2 text[#21243D] mb-4">
                <p>${content.text}</p>
              </div>
              
              <div calss="mt-4">
                  <img src="${content.img}" alt="">
              </div>

              <div>
                  <h2 class="text-[26px] text-[#21243D] font-bold mt-4">${content.title2}</h2>
                  <h3 class="text-[20px] text-[#21243D] font-bold mt-2">${content.title3}</h3>
                  <p class="text-[#000000] text-[16px] mt-4">${content.text}</p>

                  <div class="mt-6">
                      <img src="${content.img2}" alt="">
                  </div>

                  <div class="mt-6 flex justify-center">
                      <img src="${content.img3}" alt="">
                  </div>
              </div>
            </div>
        `;
    }
    return result;
}

document.getElementById("contents").innerHTML = showContents(listContents);