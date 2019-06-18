// Dependencies
import React from 'react';

// Components
// import ColBox from 'src/components/Box/ColBox';
// import RowBox from 'src/components/Box/RowBox';

// Local
//import styles from './ColorName.module.scss';

export default function ColorName(props) {

  function colorName(h,s,l) {
    let colorName = "Unknown color";
    let hueIndex = Math.floor((h + 15) % 360 / 30);

    if (s > 25) {
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
    } else if (s > 0) {
      if (hueIndex > 4 && hueIndex < 10) {
        colorName = "Coolgray";
      } else {
        colorName = "Warmgray";
      }
    } else {
      colorName = "Gray";
    }


    return colorName;
  }

  return (
    <h2>{ colorName(props.h, props.s, props.l) }</h2>
  );
};
