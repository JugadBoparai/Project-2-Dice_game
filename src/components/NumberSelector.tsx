import styled from "styled-components";

interface NumberSelectorProps {
  selectedNumber: number;
  setSelectedNumber: (number: number) => void;
  error: string; // Ensure that error prop is defined here
  setError: (error: string) => void; // Add setError function to the interface
}

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError, // Destructure setError from props
}: NumberSelectorProps) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value: number) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value: number, i: number) => (
          <Box
            selected={value === selectedNumber}
            onClick={() => numberSelectorHandler(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Selected Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
`;

interface BoxProps {
  selected: boolean; // Define the isSelected prop as a boolean
}

const Box = styled.div<BoxProps>`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
`;
