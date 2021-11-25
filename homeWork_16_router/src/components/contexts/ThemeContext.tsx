import React, { ReactNode } from 'react';

interface Props {
   children: ReactNode;
}

export interface ThemeContextState {
   darkTheme: boolean;
   toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextState>({});

class ThemeContextProvider extends React.Component<Props, ThemeContextState> {
   constructor(props: Props) {
      super(props);
      this.state = {
         darkTheme: false,
         toggleTheme: this.toggleTheme.bind(this),
      };
   }

   toggleTheme() {
      this.setState({ darkTheme: !this.state.darkTheme });
   }

   render(): React.ReactNode {
      return (
         <ThemeContext.Provider value={{
            darkTheme: this.state.darkTheme,
            toggleTheme: this.state.toggleTheme,
         }}
         >
            {this.props.children}
         </ThemeContext.Provider>
      );
   }
}

export { ThemeContextProvider, ThemeContext };