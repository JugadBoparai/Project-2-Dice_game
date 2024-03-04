import styled from "styled-components";

interface RoleDiceProps {
  setCurrentDice: (number: number) => void; // Function that accepts a number and returns void
  currentDice: number; // Number representing the current dice value
}

const RoleDice = ({ setCurrentDice, currentDice }: RoleDiceProps) => {
  const generateRandomNumber = () => {
    const min = 1;
    const max = 7;
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    setCurrentDice(randomNumber); // Update the state with the random number
  };

  return (
    <DiceContainer>
      <div className="dice" onClick={generateRandomNumber}>
        <img
          src={`/images/dice_${currentDice}.png`}
          alt={`Dice ${currentDice}`}
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
