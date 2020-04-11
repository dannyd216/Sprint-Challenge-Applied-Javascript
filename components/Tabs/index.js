// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics



// Once the data is resolved use console logs or breakpoints to review the structure.


// Iterate over the topics creating a new tab for each topic, and appending it to the DOM


// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
    
        console.log(response)

        // let artTopic = 

        // WHAT IS THE RESPONSE OBJECT

        
        


    })
    .catch((error) => {
    
        console.log(`THERE IS AN ERROR`)
})



// create tabs


// BUILD THE COMPONENT CREATOR FUNCT

function tabCreator(tabData) {

    const tabDiv = document.createElement('div')

    tabDiv.classList.add('tab')

    tabDiv.textContent = `${tabData.topics}`

    
return tabDiv

}



// AFTER WE RECEIVE DATA WE CAN MAP/ITERATE OVER IT, 

//CREATE COMPOS AND ADD TO THE DOM






