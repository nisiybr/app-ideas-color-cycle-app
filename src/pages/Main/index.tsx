import React, { useState, useEffect, useCallback } from 'react';
import { parseToRgb } from 'polished';
import { RgbColor } from 'polished/lib/types/color';
import {
  Container,
  Header,
  Body,
  Aside,
  Section,
  Row,
  LastRow,
  Box,
} from './styles';

const Main: React.FC = () => {
  const [red, setRed] = useState('00');
  const [redIncrement, setRedIncrement] = useState('1');
  const [green, setGreen] = useState('00');
  const [greenIncrement, setGreenIncrement] = useState('1');
  const [blue, setBlue] = useState('00');
  const [blueIncrement, setBlueIncrement] = useState('1');
  const [rgbColor, setRgbColor] = useState<RgbColor>(parseToRgb(`rgb(0,0,0)`));
  const [updateTime, setUpdateTime] = useState('0.25');
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const regExp = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i);

    const newColor = `#${red}${green}${blue}`;

    if (!regExp.test(newColor)) {
      if (newColor.length < 7) {
        return;
      }
      alert('Type only hexadecimal digits');
      return;
    }
    const newRgbColor = parseToRgb(newColor);
    setRgbColor(newRgbColor);
  }, [red, green, blue]);

  const switchOnOff = useCallback(() => {
    setIsOn(state => !state);
  }, []);

  const incrementColor = useCallback(() => {
    if (rgbColor) {
      const newRed =
        rgbColor.red >= 255 ? 0 : rgbColor.red + parseInt(redIncrement);
      const newGreen =
        rgbColor.green >= 255 ? 0 : rgbColor.green + parseInt(greenIncrement);
      const newBlue =
        rgbColor.blue >= 255 ? 0 : rgbColor.blue + parseInt(blueIncrement);

      const newRgbColor = parseToRgb(`rgb(${newRed},${newGreen},${newBlue})`);
      setRgbColor(newRgbColor);
      console.log(newRgbColor);
    }
  }, [rgbColor, redIncrement, greenIncrement, blueIncrement]);

  useEffect(() => {
    if (isOn) {
      clearInterval();
      const interval = setInterval(() => {
        incrementColor();
      }, parseFloat(updateTime) * 1000);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [incrementColor, updateTime, isOn]);

  return (
    <Container>
      <Header>
        <h1>Color Cycle</h1>
      </Header>
      <Body>
        <Aside>
          <Row>
            <div>
              <strong>Red</strong>
              <input
                type="text"
                value={red}
                maxLength={2}
                disabled={isOn}
                onChange={e => setRed(e.target.value)}
              />
            </div>
            <div>
              <strong>Increment </strong>
              <input
                type="text"
                disabled={isOn}
                value={redIncrement}
                onChange={e => setRedIncrement(e.target.value)}
              />
            </div>
          </Row>
          <Row>
            <div>
              <strong>Green</strong>
              <input
                type="text"
                disabled={isOn}
                value={green}
                maxLength={2}
                onChange={e => setGreen(e.target.value)}
              />
            </div>
            <div>
              <strong>Increment </strong>
              <input
                type="text"
                disabled={isOn}
                value={greenIncrement}
                onChange={e => setGreenIncrement(e.target.value)}
              />
            </div>
          </Row>
          <Row>
            <div>
              <strong>Blue</strong>
              <input
                type="text"
                disabled={isOn}
                value={blue}
                maxLength={2}
                onChange={e => setBlue(e.target.value)}
              />
            </div>
            <div>
              <strong>Increment </strong>
              <input
                type="text"
                disabled={isOn}
                value={blueIncrement}
                onChange={e => setBlueIncrement(e.target.value)}
              />
            </div>
          </Row>
          <LastRow>
            <strong>Update Time</strong>
            <input
              type="text"
              disabled={isOn}
              value={updateTime}
              onChange={e => setUpdateTime(e.target.value)}
            />
          </LastRow>
          <button type="button" onClick={switchOnOff}>
            {isOn ? 'STOP' : 'START'}
          </button>
        </Aside>
        <Section>
          <Box
            color={`rgb(${rgbColor?.red},${rgbColor.green},${rgbColor?.blue})`}
          />
        </Section>
      </Body>
    </Container>
  );
};

export default Main;
