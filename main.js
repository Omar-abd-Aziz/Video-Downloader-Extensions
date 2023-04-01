

function showBtns(){
	document.querySelector(".ytp-left-controls").insertAdjacentHTML("beforeend",`<a class="download">download</a>`);
	document.querySelector(".html5-video-container").insertAdjacentHTML("afterend",`<div class="LinksDad"></div>`);
};

window.onload=()=>{
    showBtns();
};


window.onclick=(e)=>{
    if([...e.target.classList].includes("download")){
		console.log("omar");
        download();
        document.querySelector(".LinksDad").style.display="block";
    };

    if([...e.target.classList].includes("hide")){
        document.querySelector(".LinksDad").style.display="none";
    };

};


async function download(){
    const data = {
		"url": `${location.href}`
	};
		
	fetch('https://save-from.net/api/convert', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(data),
	})
	  .then((response) => response.json())
	  .then((data) => {
        const AllUrls = data.url;


        document.querySelector(".LinksDad").innerHTML=`
        <span class="hide">X</span>
	
		<iframe rel="nofollow" style="width:200px; height:35px; border:none; border-radius: 6px; display:block;" src="https://apiyt.com/iframe/?vid=${data.id}"></iframe>
		<br>
		
		`;

		AllUrls.forEach((e) => {

			if(e.attr.class==""&&e.type=="mp4"){
				let x = parseInt(e.filesize);
				
				document.querySelector(".LinksDad").innerHTML+=`
				<div class="linkDad">
	
					<a href="${e.url}" class="Link">${e.quality}p${!isNaN(x)?"_"+parseInt(x/1000000)+"MB":""}.${e.type} ${e.attr.class}</a>
				</div>
				`
			};
	
		});

        document.querySelector(".LinksDad").style.display="block";

	});
}



window.addEventListener("beforeunload", function (event) {
    this.alert("has change")
 })