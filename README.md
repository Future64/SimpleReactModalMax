# SimpleReactModalMax

## Installation

With npm: `npm install simple-react-modal-max --save`

Or with yarn: `yarn add simple-react-modal-max`

## Documentation

| Props           |                             Options                              |  Default   |                    Explanation |
| :-------------- | :--------------------------------------------------------------: | :--------: | -----------------------------: |
| **isOpen**      |                      (_boolean_) true/false                      |   false    |                  display modal |
| **onClose**     |  (_string_) "rightTop", "rightBottom", "leftTop", "leftBottom"   | "rightTop" |       position to close button |
| **responsive**  |                      (_boolean_) true/false                      |    true    |                mode responsive |
| **openAnim**    |                      (_boolean_) true/false                      |    true    |       animation to start modal |
| **closeAnim**   |                      (_boolean_) true/false                      |    true    |       animation to close modal |
| **txtColor**    | (_string_) "black", "green", "red", "yellow", "orange", "violet" |  "black"   | change color to content string |
| **pageOpacity** |       (_string_) "none", soft", "standard", "very", "full"       |   "none"   |   option to opacity background |

## Exemple

```js
import { SimpleReactModalMax } from "simple-react-modal-max";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  show() {
    this.setState({ show: true });
  }

  close() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <a onClick={this.show.bind(this)}>Open Modal</a>
        <SimpleReactModalMax
          isOpen={true}
          onClose="rightTop"
          responsive={true}
          pageOpacity="soft"
          openAnim={true}
          closeAnim={true}
          txtColor="green"
        >
          <p>Employee Created!</p>
        </SimpleReactModalMax>
      </div>
    );
  }
}
```

## License

MIT © [future64](https://github.com/Future64/SimpleReactModalMax)
