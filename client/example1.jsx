//JSX to be built by webpack. See React Functional Component demo.

const HelloWorld = () => {
  return (
      <div>
          Hello World!!
      </div>
  );
};

const init = () => {
  ReactDOM.render(<HelloWorld />, document.getElementById('app'));
};

window.onload = init;