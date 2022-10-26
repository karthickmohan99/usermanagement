/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const Lazyloader = (
  importComp: {
    (): Promise<typeof import('../../Pages/Register/Signup')>;
    (): Promise<typeof import('../../Pages/Login/Login')>;
    (): Promise<typeof import('../../Pages/Home/Home')>;
    (): Promise<typeof import('../../Pages/Modal/Modals')>;
    (): Promise<any>;
  },
  fallback: any
) => {
  return class lazy extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      console.log(importComp, 'import');
      this.state = {
        component: null
      };
    }
    //set the component in state when loading
    componentDidMount() {
      console.log('component mounted');
      importComp().then((comp) => {
        console.log('INSIDE COMP', comp.default.name);
        this.setState({ component: comp.default });
      });
    }

    render() {
      const C = this.state.component;
      if (C) {
        return <C {...this.props} />;
      } else if (fallback) {
        return fallback;
      } else {
        return <div> loading</div>;
      }
    }
  };
};

export default Lazyloader;
