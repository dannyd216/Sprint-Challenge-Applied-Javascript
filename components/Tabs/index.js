// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics

// Once the data is resolved use console logs or breakpoints to review the structure.

// Iterate over the topics creating a new tab for each topic, and appending it to the DOM

// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// create tabs

// BUILD THE COMPONENT CREATOR FUNCT

function tabCreator(topic) {

    // create div with createEl
  const tabDiv = document.createElement("div");

    // add classlist to tab
  tabDiv.classList.add("tab");

    // set text to topic that will be incoming from the param
  tabDiv.textContent = topic;

    // return the entire div 
  return tabDiv;
}

// create the handshake bet the topics div and the topicsDiv 
const topicsDiv = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then((response) => {
    // console.log(response);

      // this is the response from above...
      // from response there will always be response.data
      // we wan the topics info so we need to grab response.data.topics
    response.data.topics.forEach((topic) => {
      topicsDiv.appendChild(tabCreator(topic));
    });

    // WHAT IS THE RESPONSE OBJECT
  })
  .catch((error) => {
    console.log(`THERE IS AN ERROR`);
  });

