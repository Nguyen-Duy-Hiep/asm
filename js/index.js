const listContents = [
    {
        id: 1,
        img: "https://res.cloudinary.com/duy-hiep/image/upload/v1654508623/asm-web-2022/Rectangle_30_wj8asz.png",
        title: "Designing Dashboards",
        year: 2022,
        type: "Dashboard",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/duy-hiep/image/upload/v1654509376/asm-web-2022/Rectangle_32_whfceq.jpg",
        title: "Vibrant Portraits of 2020",
        year: 2018,
        type: "Illustration",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/duy-hiep/image/upload/v1654509372/asm-web-2022/Rectangle_34_fvfgk1.jpg",
        title: "36 Days of Malayalam type",
        year: 2018,
        type: "Typography",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
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
        <div class="md:grid md:grid-cols-[400px_auto]">
			<div class="mx-4 mt-6">
				<a href="./html/work.html"><img
						src="${content.img}"
						alt="" class="w-full"/></a>
			</div>
			<div>
				<div class="mt-3 mx-4">
					<a href="">
						<h3 class="font-bold text-[24px]">${content.title}</h3>
					</a>
					<div class="mt-4">
						<span class="bg-[#142850] text-white font-bold text-[16px] rounded-3xl px-2">${content.year}</span>
						<span class="text-[#8695A4] ml-4">${content.type}</span>
					</div>

					<div class="mt-2 text[#21243D] mb-4">
						<p>
                        ${content.text}
						</p>
					</div>
					<hr />
				</div>
			</div>
		</div>
        `;
    }
    return result;
}
document.getElementById("contents").innerHTML = showContents(listContents);