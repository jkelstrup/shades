// Dependencies
import React from 'react';
import styled from 'styled-components/macro';

const Swatch = styled.div.attrs(props => ({
  style: { backgroundColor: props.children }
}))`
  display: flex;
  flex: 3;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  color: transparent;
  transition: color 5000ms;
  border-radius: 18px 8px 8px 18px;
  margin: 2px 2px;
  height: 40px;
  cursor: default;

  :first-of-type {
    border-radius: 8px 0 0 8px;
    flex: 4;
  }

  :last-of-type {
    border-radius: 0 8px 8px 0;
  }

  :hover {
    transition: color 200ms;
    color: ${(props) => isDark(props.children) ? "white" : "black" };
  }
`;

const Row = styled.div`
  display: flex;
  overflow: hidden;
  margin-left: 20px;
  width: 200px;
`;

function hslToRgb(h, s, l) {

  h = h/360;
  s = s/100;
  l = l/100;

  var r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;

    r = Math.min(Math.max(hue2rgb(p, q, h + 1/3), 0), 255);
    g = Math.min(Math.max(hue2rgb(p, q, h), 0), 255);
    b = Math.min(Math.max(hue2rgb(p, q, h - 1/3), 0), 255);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function hslToRgbString(h, s, l) {
  let [r,g,b] = hslToRgb(h,s,l);
  return `rgb(${r},${g},${b})`;
}

function isDark(color) {
    let r, g, b, hsp;
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    r = color[1];
    g = color[2];
    b = color[3];
    hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );
    return hsp > 127.5 ? false : true;
}

function generateShades({h,s,l}) {
  let maxL = 96;
  let minL = 9;

  return {
    //                          |- - - H - -| |- - - - S - - - - | |- - - L - - - - |
    lightest:    hslToRgbString( (h+8) % 360,  Math.max(s,     0),  (l + ((maxL-l) / 3 ) * 3) * 1.00),
    lightestAlt: hslToRgbString( (h+8) % 360,  Math.max(s+8,   0),  (l + ((maxL-l) / 3 ) * 3) * 0.96),
    //                          |- - - H - -| |- - - - S - - - - | |- - - L - - - - |
    lighter:     hslToRgbString( (h+5) % 360,  Math.max(s,     0),  (l + ((maxL-l) / 3 ) * 2) * 1.00),
    lighterAlt:  hslToRgbString( (h+5) % 360,  Math.max(s+5,   0),  (l + ((maxL-l) / 3 ) * 2) * 0.96),
    //                          |- - - H - -| |- - - - S - - - - | |- - - L - - - - |
    light:       hslToRgbString( (h+3) % 360,  Math.max(s,     0),  (l + ((maxL-l) / 3 ) * 1) * 1.00),
    lightAlt:    hslToRgbString( (h+3) % 360,  Math.max(s+3,   0),  (l + ((maxL-l) / 3 ) * 1) * 0.96),

    base:        hslToRgbString(h,s,l), // NO CHANGE!

    //                          |- - - H - -| |- - - - S - - - - | |- - - L - - - - |
    dark:        hslToRgbString( (h-3) % 360,  Math.min(s,   100),  l-(l-minL)/3),
    darkAlt:     hslToRgbString( (h-3) % 360,  Math.min(s+3, 100),  l-(l-minL)/3*1.1),
    //                          |- - - H - -| |- - - - S - - - - | |- - - L - - - - |
    darker:      hslToRgbString( (h-5) % 360,  Math.min(s,   100),  l-(l-minL)/3*2),
    darkerAlt:   hslToRgbString( (h-5) % 360,  Math.min(s+5, 100),  l-(l-minL)/3*2*1.1),
    //                          |- - - H - -| |- - - - S - - - - | |- - - L - - - - |
    darkest:     hslToRgbString( (h-8) % 360,  Math.min(s,   100),  minL),
    darkestAlt:  hslToRgbString( (h-8) % 360,  Math.min(s+8, 100),  minL*1.1),
  }
}

export default function ShadesDisplay(props) {

  let shades = generateShades({h: props.baseHSL.h, s: props.baseHSL.s, l: props.baseHSL.l});

  return (
    <div className="ShadesCollection">
      <Row>
        <Swatch>{ shades.lightest }</Swatch>
        <Swatch>{ shades.lightestAlt }</Swatch>
      </Row>
      <Row>
        <Swatch>{ shades.lighter }</Swatch>
        <Swatch>{ shades.lighterAlt }</Swatch>
      </Row>
      <Row>
        <Swatch>{ shades.light }</Swatch>
        <Swatch>{ shades.lightAlt }</Swatch>
      </Row>
      <Swatch>{ shades.base }</Swatch>
      <Row>
        <Swatch>{ shades.dark }</Swatch>
        <Swatch>{ shades.darkAlt }</Swatch>
      </Row>
      <Row>
        <Swatch>{ shades.darker }</Swatch>
        <Swatch>{ shades.darkerAlt }</Swatch>
      </Row>
      <Row>
        <Swatch>{ shades.darkest }</Swatch>
        <Swatch>{ shades.darkestAlt }</Swatch>
      </Row>
    </div>
  );
};
