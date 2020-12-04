import Component from "./component.js";

class Input extends Component {
  render() {
    const { tag, label, handler, options = "", ...attr } = this.props;

    let input = this.createElement(tag, attr);
    if (options) {
      for (const [key, value] of Object.entries(options)) {
        input.append(this.createElement("option", { value: value }, value));
      }
    }
    this.input = input;
    if (label) {
      const lab = this.createElement("label", {}, label);
      lab.append(input)
      return lab
    }
   
    return input;
  }
  handler() {
    const { handler } = this.props;
    this.input.addEventListener(`${handler.event}`, handler.func);
  }
}

export default Input;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3Jtcy9jb21wb25lbnRzL2lucHV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50LmpzXCI7XHJcblxyXG5jbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB0YWcsIGxhYmVsLCBoYW5kbGVyLCBvcHRpb25zID0gXCJcIiwgLi4uYXR0ciB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBsZXQgaW5wdXQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQodGFnLCBhdHRyKTtcclxuICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpKSB7XHJcbiAgICAgICAgaW5wdXQuYXBwZW5kKHRoaXMuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IHZhbHVlOiB2YWx1ZSB9LCB2YWx1ZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgICBpZiAobGFiZWwpIHtcclxuICAgICAgY29uc3QgbGFiID0gdGhpcy5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwge30sIGxhYmVsKTtcclxuICAgICAgbGFiLmFwcGVuZChpbnB1dClcclxuICAgICAgcmV0dXJuIGxhYlxyXG4gICAgfVxyXG4gICBcclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcbiAgaGFuZGxlcigpIHtcclxuICAgIGNvbnN0IHsgaGFuZGxlciB9ID0gdGhpcy5wcm9wcztcclxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihgJHtoYW5kbGVyLmV2ZW50fWAsIGhhbmRsZXIuZnVuYyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcclxuIl0sImZpbGUiOiJmb3Jtcy9jb21wb25lbnRzL2lucHV0LmpzIn0=
