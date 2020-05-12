import React, { Component } from 'react';
import { Spinner } from './index';

import '../css/LoadButton.css';

class LoadButton extends Component {
  render() {
    return (
      <>
        {/*<React.Fragment></React.Fragment> or <></>: used if we do not begin with
        html or if we use invalid DOM in JSX:
        Fragments let you group a list of children without adding extra nodes to the DOM. */}

        { /*conditional rendering: load or not*/}
        { this.props.Loading ?
          (
            <Spinner />
          ):
          (
            <div 
              onClick={this.props.onButtonClick} //inverted flow to parent Home
              className="loadButton"
            >
              <h3 className="loadButton--text">SEE MORE</h3>
            </div>
          )
        }
      </>
    )
  }
}

export {LoadButton};