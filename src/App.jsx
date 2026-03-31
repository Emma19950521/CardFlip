import { useState, useEffect } from 'react'
import './App.css'

const cardImages = Array.from({ length: 14 }, (_, i) => ({
  src: `pic${i + 1}.jpg`,
  matched: false
}))

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    if (!disabled && !card.matched && card.id !== choiceOne?.id) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => 
          prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        )
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  const isWon = cards.length > 0 && cards.every(c => c.matched)

  return (
    <>
      <div className="game-wrapper">
        <div className="header">
          <h1>Memory Match</h1>
          <div className="stats">
            <div className="stats-text">嘗試次數: <span>{turns}</span></div>
            <button className="restart-btn" onClick={shuffleCards}>重新開始</button>
          </div>
        </div>
        
        <div className="card-grid">
          {cards.map(card => {
            const isFlipped = card === choiceOne || card === choiceTwo || card.matched
            const matchedClass = card.matched ? 'matched' : ''
            return (
              <div className={`card ${isFlipped ? 'flipped' : ''} ${matchedClass}`} key={card.id} onClick={() => handleChoice(card)}>
                <div className="card-inner">
                  <div className="card-front">
                    <img src={`/${card.src}`} alt="card" />
                  </div>
                  <div className="card-back"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {isWon && (
        <div className="win-overlay">
          <div className="win-modal">
            <h2>🎉 挑戰成功！ 🎉</h2>
            <p>你總共花了 <span>{turns}</span> 次嘗試完成遊戲！</p>
            <button className="restart-btn" onClick={shuffleCards}>再玩一次</button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
