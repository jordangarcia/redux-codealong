import React from "react";
import store from "./store";
// const reduxState = {
//   search: 'hello'
// }
// <SomeComponent {...props} />
// write a function that takes in reduxState and returns an object props

// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)

// export default VisibleTodoList


// (dispatch) => props

export function connect(mapStateToProps, mapDispatchToProps = () => {}) {
  return function(Comp) {
    return class ConnectedComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          props: mapStateToProps(store.getState()),
          dispatchProps: mapDispatchToProps(store.dispatch)
        };
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState({
            props: mapStateToProps(store.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        const combinedProps = {
          ...this.state.props,
          ...this.state.dispatchProps,
        }
        return <Comp {...combinedProps} />;
      }
    }
  };
}
