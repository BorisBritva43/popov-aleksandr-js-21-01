// eslint-desable 
import React, { SyntheticEvent } from 'react';
import './WithHelper.css';

interface State {
   hovered: boolean;
}

interface Props {
   children: any;
   comment: string;
}

export default class ComponentWithHelper extends React.Component<Props, State> {
   constructor(props: Props) {
      super(props);
      this.state = { hovered: false }
      this.mouseOut = this.mouseOut.bind(this);
      this.mouseOver = this.mouseOver.bind(this);
   }

   mouseOver(e: SyntheticEvent) {
      this.setState({ hovered: true });
      e.stopPropagation();
   }

   mouseOut(e: SyntheticEvent) {
      this.setState({ hovered: false });
      e.stopPropagation();
   }

   render() {
      return (

         <div className="component-with-helper"
            onMouseOut={this.mouseOut}
            onMouseOver={this.mouseOver}
         >
            {this.state.hovered && <div className="component-with-helper__helper">{this.props.comment}</div>}
            {this.props.children}
         </div>
      );
   }
}
