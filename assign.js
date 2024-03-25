const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(data => showAllCardDetails(data.data.tools.slice(0,6)))
    .catch(err => {
        console.log(err);
    })
}


const showAllCardDetails = (dataAll) => {
    //console.log(dataAll);
    dataAll.forEach((singleData) => {
        const container = document.getElementById('cards-info');
        //console.log(singleData);
        const div = document.createElement('div');
        const {image,features,published_in,name,id} = singleData;

        div.innerHTML = `
        <div class="card w-75 h-98 mb-3 gap-2 mx-5 mt-5 shadow-xl">
                <img src="${image ? image : "https://picsum.photos/500/300?random=3"}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title font-bold">Features</h5>
                  <p class="card-text mb-3">${features}</p>
                  <hr>
                    <div class="mt-3 grid grid-cols-2">
                        <div>
                            <h5 class="font-bold">${name}</h5>
                            <h5 class="mt-3"><i class="p-1 fa fa-calendar"></i>${published_in}</h5>
                        </div>
                        <div class="text-right">
                            <button class="btn btn-light" id="my_modal_7" onclick="arrowBtnDetails('${id}')"
                           <i class="bi bi-arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-arrow-right" viewBox="0 0 16 16">
                           <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                           </svg></i></button>
                            
                        </div>
                    </div>
                </div>
         </div>
        `;

        container.appendChild(div);
     });
}



loadData();

const arrowBtnDetails = (id) => {
    //console.log(id);
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showArrowBtnDetailsModal(data))
    //.then(data => console.log(data));
 }

 const showArrowBtnDetailsModal = (data) => {
     //console.log(data);   
     data.forEach((data) => {
        const container = document.getElementById('modal-info');
        const div = document.createElement('div');
        div.classList.add('modal-box');
        const {image,features,published_in,name,id,description} = data;

        div.innerHTML = `
        <form method="dialog" class="text-center shadow-2xl">
            <button class="btn btn-danger btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <img src="${image ? image : "https://picsum.photos/500/300?random=3"}" class="card-img-top" alt="...">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click on ✕ button to close</p>
            `;

        container.appendChild(div);
    });


 }


 




const seeMoreBtn = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
   .then(res => res.json())        
   //.then(data => console.log(data))
    .then(data => showAllCardDetails(data.data.tools))
}
