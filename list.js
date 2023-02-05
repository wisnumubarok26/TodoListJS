daftarList = []
daftarJenis = []

document.querySelector("form[name=formTodo]").onsubmit= function(event){
    event.preventDefault()
    const todoText = document.getElementById("todoText").value 
    const todoJenis = document.getElementById("jenis-waktu").value 
    daftarList.push(todoText)
    daftarJenis.push(todoJenis)
    tampilList()
    alert("data ditambahkan ke list")
    document.querySelector("form[name=formTodo]").reset() 
}
function tambahTampilan(list,jenis,i){
        const listTampilan = document.getElementById("tampilan")
        const tr = document.createElement("tr")
        const tdDaftar = document.createElement("td")
        const tdDaftar2 = document.createElement("td")
        const inputDaftar = document.createElement("input")
        inputDaftar.type="button"
        inputDaftar.value="selesai"
        inputDaftar.onclick=function(){
            removeTodoList(i)
            alert("Apakah anda yakin ingin menghapus?")
            
        }


        listTampilan.appendChild(tr)
        tr.appendChild(tdDaftar)
        tr.appendChild(tdDaftar2) 
        tr.appendChild(inputDaftar) 

        tdDaftar.textContent=list
        tdDaftar2.textContent=jenis 
}
function tampilList(){
    clearTodoList()
    for (let i = 0; i < daftarJenis.length; i++) {
        const list  = daftarList[i];
        const jenis = daftarJenis[i];
        const searchText = document.getElementById("search").value.toLowerCase()
        if(list.toLowerCase().includes(searchText)){
            tambahTampilan(list,jenis,i)
        }
        
    }
}
function clearTodoList(){
    const hapus = document.getElementById("tampilan")
    while (hapus.firstChild) {
        hapus.removeChild(hapus.firstChild)
    }
}
function removeTodoList(i){
    console.info(`remove ${daftarJenis[i]}`)
    daftarJenis.splice(i,1)
    daftarList.splice(i,1)
    tampilList()
    
}

const searchText = document.getElementById("search")
searchText.onkeyup=function(){
    tampilList()
}
searchText.onkeydown=function(){
    tampilList()
}