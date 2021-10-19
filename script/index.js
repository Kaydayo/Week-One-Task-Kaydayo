/*function main(){

}*/


let defSpec = document.getElementById("special");
let divEl = document.getElementById("layout1");

fetch ("https://swapi.dev/api/people")
.then(response => response.json())
.then(parseRes => {
    let resArray = parseRes["results"]
    resArray.forEach((el, i) => {
        divEl.innerHTML += 
        `
    <div class="col-md-4" id='change'><br>
    <div class="card"  id='card-box'>
    <div class='round'>
    <img src="./images/${i+1}.png" class="card-img-top" alt="...">
    <div class='set-white'>
    <div class="card-body" id="card-body">
    <h5 class="card-title">${el.name}</h5>
    <p class="card-text">Character ${i+1}</p>
    <p class="force"> May the force be with you <br> 🌟🌟🌟🌟 </p>
    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">Show Details</a>
    <div class='set-col'>
    </div>
    </div>
    </div>
    <div>
    </div>
    </div>
    <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Character Name: <span class="large">${el.name}</span></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <h5 class="modal-title" id="exampleModalLabel">Character Height: <span class="large">${el.height}cm</span></h5>
          <h5 class="modal-title" id="exampleModalLabel">Character Gender: <span class="large">${el.gender}</span></h5>
          <img src="./images/${i+1}.png" class="card-img-top show-img" alt="..." >
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>


        `
        

      
        
    });
    
}).catch(err => {

  defSpec.style.visibility = 'visible';
  defSpec.style.top = '280px';
  return console.log('no network')})
//module.exports = {main}