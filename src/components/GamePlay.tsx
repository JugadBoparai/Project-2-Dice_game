import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import { TotalScore } from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState<number>(0); // Set a default value of type number
  const [currentDice, setCurrentDice] = useState(1); // Initialize with a default value
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  // Define a function to update the score
  const updateScore = (selectedNumber: number, currentDice: number) => {
    if (selectedNumber === 0) {
      setError("You have not selected any number");
      return;
    }
    if (selectedNumber === currentDice) {
      setScore((prevScore) => prevScore + currentDice);
    } else {
      setScore((prevScore) => prevScore - 2);
    }

    setSelectedNumber(0); // Or any other appropriate default value
  };

  const resetScore = () => {
    setScore(0);
  };

  // Render the component
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error} // Pass the error prop here
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice
        currentDice={currentDice}
        setCurrentDice={(newDice) => {
          setCurrentDice(newDice);
          updateScore(selectedNumber, newDice); // Update the score when the dice is rolled
        }}
      />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
