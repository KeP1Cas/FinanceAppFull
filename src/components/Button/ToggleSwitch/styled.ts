import styled from "styled-components";

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 16px;
`;

const SliderSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  :before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const CustomInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + ${SliderSpan} {
    background-color: #19a2c1;
  }

  :checked + ${SliderSpan} {
    box-shadow: 0 0 1px #2196f3;
  }

  :checked + ${SliderSpan}:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }
`;

const SwitchCheckbox = styled.div`
  padding: 10px;
`;

export { SliderSpan, CustomInput, SwitchLabel, SwitchCheckbox };
