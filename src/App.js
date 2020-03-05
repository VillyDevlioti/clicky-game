//Start with dependencies
import React, {Component} from 'react';
import Card from './Components/Card/Card';
import Wrapper from './Components/Wrapper/Wrapper';
import Score from './Components/Score/Score';
import Header from './Components/Header/Header';
import dresses from './pics.json'
import './App.css';


class App extends Component {

/*   How does this work?
  We have an array of images. We show the images.
  The images are distinguished by a unique ID
  1. We need to record the image the player clicks on
  2. the choice (ID) will be stored in a separate table
  3. If the choice has not been recorded before then add one point
  4. If the choice already exists in the array, then score =0
  5. if score equals the number of images, then it's a win
  
  At every step SHUFFLE!!! */

  //These are the variables that we're using
  state = {
    dresses,
    clickedImages: [],
    score: 0,
    status: "",
  };

  //Shuffling Cards
  shuffleCards = dresses => {
    for (let i = dresses.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      //swap swap swap swap swap
      [dresses[i], dresses[j]] = [dresses[j], dresses[i]];
    }
  }


  //Checking if a card has been clicked
  checkForClicks = id => {
    //control variable, takes the current state of clickedImages array
    let clickedImages = this.state.clickedImages;
    
    //if the clickedImages array includes the id of the image we have already clicked
    if(clickedImages.includes(id)){
      //zero the score and start over
      this.setState({ clickedImages: [], score: 0, status:  "You clicked on that image before. Starting over..." });
      return;
    } else {
      //add the id to the images
      clickedImages.push(id);
      
      //if the length of the array equals the number of images
      if(clickedImages.length === 15){
        this.setState({score: 15, status: "Your memory rocks!", clickedImages: []});
        return;
      };
      //otherwise add the score up and shuffle
      this.setState({ dresses, clickedImages, score: clickedImages.length, status: " " });
  }
  this.shuffleCards(dresses)
}
  
  render() {
    return (
      <div id="app">
        <Score total ={this.state.score}
        status = {this.state.status}
        />
        <Header />
        <Wrapper>
          {this.state.dresses.map(image => (
            <Card
            checkForClicks={this.checkForClicks}
              id={image.id}
              key={image.id}
              image={image.image} />
          ))}
        </Wrapper>
        <footer id="footer"><small>by Villy Devlioti</small></footer>
        
      </div>
    )
  }

}


export default App;
