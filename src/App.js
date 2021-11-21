import "bootstrap/dist/css/bootstrap.min.css";
import GameOverModal from "./GameOverModal";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [countPlayer1, setcountPlayer1] = useState(0);
  const [countPlayer2, setcountPlayer2] = useState(0);
  const [gameOver, setGameOver] = useState(10);
  const [playerTurn, setPlayerTurn] = useState(false);
  const [player2Turn, setPlayer2Turn] = useState(false);
  const [gamePlay, setGamePlay] = useState(true);
  const [gameWineer, setGameWineer] = useState("None");
  const [p1Random, setP1Random] = useState(0);
  const [p2Random, setP2Random] = useState(0);

  const startAgain = () => {
    setcountPlayer1(0);
    setcountPlayer2(0);
    setGameOver(20);
    setPlayerTurn(false);
    setPlayer2Turn(false);
    setGamePlay(true);
    setGameWineer("None");
    setP1Random(0);
    setP2Random(0);
  };

  const gameOverCheck = () => {
    if (countPlayer1 >= gameOver) {
      setGameWineer("Player 1");
      setGamePlay(false);
    } else if (countPlayer2 >= gameOver) {
      setGameWineer("Player 2");
      setGamePlay(false);
    }
  };

  const countHandlerPlayer1 = () => {
    const random = Math.floor(Math.random() * 10);
    setcountPlayer1(countPlayer1 + random);
    gameOverCheck();
    setPlayerTurn(true);
    setPlayer2Turn(false);
    setP1Random(random);
  };
  const countHandlerPlayer2 = () => {
    const random = Math.floor(Math.random() * 10);
    setcountPlayer2(countPlayer2 + random);
    gameOverCheck();
    setPlayerTurn(false);
    setPlayer2Turn(true);
    setP2Random(random);
  };

  return (
    <>
      <h1 className="text-center">Player VS Player</h1>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h2">Player 1</Card.Header>
              <Card.Body>
                <Card.Title>Score : {countPlayer1}</Card.Title>
                <Card.Text>+ {p1Random}</Card.Text>
                <Button
                  onClick={countHandlerPlayer1}
                  variant="primary"
                  disabled={playerTurn}
                >
                  Click Here
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header as="h2">Player 2</Card.Header>
              <Card.Body>
                <Card.Title>Score : {countPlayer2}</Card.Title>
                <Card.Text>+ {p2Random}</Card.Text>
                <Button
                  onClick={countHandlerPlayer2}
                  variant="primary"
                  disabled={player2Turn}
                >
                  Click Here
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {gamePlay ? null : (
          <GameOverModal win={gameWineer} gameStart={startAgain} />
        )}
      </Container>
    </>
  );
}

export default App;
