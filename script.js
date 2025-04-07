//your JS code here. If required.


document.getElementById("btn").addEventListener("click",()=>{
    let inputT=document.getElementById("title").value;
    let inputA=document.getElementById("author").value;
    let inputI=document.getElementById("isbn").value;
	

	let tablerow=document.createElement("tr");
	[inputT,inputA,inputI].forEach((val)=>{
		let td=document.createElement("td");
		td.textContent=val;
		tablerow.appendChild(td);
        // console.log(td.textContent);
	});

    let del= document.createElement("td");
    let delBtn= document.createElement("button");
    delBtn.textContent="X";
    // del.textContent=delBtn;
    del.appendChild(delBtn);
    tablerow.appendChild(del);

    delBtn.addEventListener("click",()=>{
        tablerow.remove();
    })


    // console.log(document.querySelector("tbody"))
    document.querySelector("tbody").appendChild(tablerow);
	
});



