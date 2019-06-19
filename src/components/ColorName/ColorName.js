// Dependencies
import React from 'react';

// Components
// import ColBox from 'src/components/Box/ColBox';
// import RowBox from 'src/components/Box/RowBox';

// Local
//import styles from './ColorName.module.scss';

export default function ColorName(props) {

  function colorName(h,s,l) {
    if (s === 0) {
      return "Gray";
    }

    let colorName = "Unknown color";
    let hueIndex = Math.floor((h + 15) % 360 / 30);

    switch (hueIndex) {
      case 0:
        colorName = "Red";
        break;
      case 1:
        colorName = "Orange";
        break;
      case 2:
        colorName = "Yellow";
        break;
      case 3:
        colorName = "Lime";
        break;
      case 4:
        colorName = "Green";
        break;
      case 5:
        colorName = "Turquoise";
        break;
      case 6:
        colorName = "Cyan";
        break;
      case 7:
        colorName = "Azure";
        break;
      case 8:
        colorName = "Blue";
        break;
      case 9:
        colorName = "Purple";
        break;
      case 10:
        colorName = "Violet";
        break;
      case 11:
        colorName = "Pink";
        break;
      default:
        colorName = "Weirdly unknown color";
    }

    if (s < 20) {
      switch (hueIndex) {
        case 0:
          colorName = "Warmgray";
          break;
        case 1:
          colorName = "Warmgray";
          break;
        case 2:
          colorName = "Warmgray";
          break;
        case 5:
          colorName = "Coolgray";
          break;
        case 6:
          colorName = "Coolgray";
          break;
        case 7:
          colorName = "Coolgray";
          break;
        default:
          colorName += "gray";
      }
    }


    return colorName;
  }

  return (
    <h2>{ colorName(props.h, props.s, props.l) }</h2>
  );
};
