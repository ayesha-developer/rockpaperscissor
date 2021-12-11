import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import ItemsView from '../ItemsView'

import {RuleImg, Score} from './StyledComponents'

import './index.css'

class Gameview extends Component {
  state = {score: 0, yourImg: '', opponentImg: '', text: '', isGameStart: false}

  renderActual = () => {
    const {choicesList} = this.props
    return (
      <div>
        {choicesList.map(each => (
          <ItemsView
            key={each.id}
            imgDetails={each}
            getResult={this.getResult}
          />
        ))}
      </div>
    )
  }

  getResult = (id, imageUrl) => {
    const {choicesList} = this.props
    const indexValue = Math.random() * 2
    const index = Math.floor(indexValue)

    if (id === choicesList[index].id) {
      this.setState(prevState => ({
        opponentImg: choicesList[index].imageUrl,
        yourImg: imageUrl,
        text: 'IT IS DRAW',
        isGameStart: true,
        score: prevState.score,
      }))
    } else if (choicesList[index].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        opponentImg: choicesList[index].imageUrl,
        yourImg: imageUrl,
        text: 'YOU WON',
        isGameStart: true,
        score: prevState.score + 1,
      }))
    } else if (choicesList[index].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        opponentImg: choicesList[index].imageUrl,
        yourImg: imageUrl,
        text: 'YOU LOSE',
        isGameStart: true,
        score: prevState.score - 1,
      }))
    } else if (choicesList[index].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        opponentImg: choicesList[index].imageUrl,
        yourImg: imageUrl,
        text: 'YOU LOSE',
        isGameStart: true,
        score: prevState.score - 1,
      }))
    } else if (choicesList[index].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        opponentImg: choicesList[index].imageUrl,
        yourImg: imageUrl,
        text: 'YOU WON',
        isGameStart: true,
        score: prevState.score + 1,
      }))
    } else if (choicesList[index].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        opponentImg: choicesList[index].imageUrl,
        yourImg: imageUrl,
        text: 'YOU WON',
        isGameStart: true,
        score: prevState.score + 1,
      }))
    } else if (choicesList[index].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        opponentImg: choicesList[index].imageUrl,
        yourImg: imageUrl,
        text: 'YOU LOSS',
        isGameStart: true,
        score: prevState.score - 1,
      }))
    }
    this.renderActual()
  }

  playAgain = () => {
    this.setState({isGameStart: false})
  }

  renderResult = () => {
    const {yourImg, opponentImg, text} = this.state
    return (
      <div>
        <p>You</p>
        <img src={yourImg} alt="your choice" />
        <p>Opponent</p>
        <img src={opponentImg} alt="opponent choice" />
        <p>{text}</p>
        <button type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {score, isGameStart} = this.state
    return (
      <div>
        <div>
          <div>
            <h1>Rock Paper Scissors</h1>
          </div>
          <Score>Score</Score>
          <Score>{score}</Score>
        </div>
        {isGameStart ? this.renderResult() : this.renderActual()}
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              RULES
            </button>
          }
        >
          {close => (
            <>
              <div>
                <RuleImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </button>
            </>
          )}
        </Popup>
      </div>
    )
  }
}

export default Gameview
