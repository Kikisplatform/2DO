let id="no";
//localStorage.clear();
selectData();
function manageData(){
	document.getElementById('msg').textContent="";
	let name=document.getElementById('name').value;
	if(name==''){
		
	}else{
		console.log(id);
		if(id=='no'){
			let arr=getCrudData();
			if(arr==null){
				let data=[name];
				setCrudData(data);
			}else{
				arr.push(name);
				setCrudData(arr);
			}
			
		}else{
			let arr=getCrudData();
			arr[id]=name;
			setCrudData(arr);
			
		}
		document.getElementById('name').value='';
		selectData();
	}
}
document.getElementById('newTaskSubmit').onclick = manageData;


function selectData(){
	let arr=getCrudData();
	if(arr!=null){
		let html='';
		let sno=1;
		for(let k in arr){
			html=html+`<tr><td>${sno}</td><td style="
			width: 1000px;
			
		">${arr[k]}</td><td><a href="javascript:void(0)" onclick="editData(${k})"style="
		text-align: left;
			background-image: linear-gradient(to right, var(--green), var(--darkgreen));
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;font-family: "Fira sans", sans-serif;
			margin: 0 -0.5rem;">Edit</a>&nbsp;<a href="javascript:void(0)" onclick="deleteData(${k})"style="
			color: crimson;text-decoration: none;
		">Delete</a></td></tr>`;
			sno++;

		}
		document.getElementById('root').innerHTML=html;
		
	}
}

function editData(rid){
	id=rid;
	let arr=getCrudData();
	document.getElementById('name').value=arr[rid];
}

function deleteData(rid){
	let arr=getCrudData();
	arr.splice(rid,1);
	setCrudData(arr);
	selectData();
}

function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('crud'));
	return arr;
}

function setCrudData(arr){
	localStorage.setItem('crud',JSON.stringify(arr));
}
