import { Component } from "./index.js";

class Element extends Component {
    render() {
        const { tag, content, handler, ...attr } = this.props;

        const element = this.createElement(tag, attr, content);
        this.element = element
        return element;
    }
    handler() {
        const { handler } = this.props;
        this.element.addEventListener(`${handler.event}`, handler.func)

    }
}

export default Element;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3Jtcy9jb21wb25lbnRzL2VsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuXHJcbmNsYXNzIEVsZW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdGFnLCBjb250ZW50LCBoYW5kbGVyLCAuLi5hdHRyIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KHRhZywgYXR0ciwgY29udGVudCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgaGFuZGxlcigpIHtcclxuICAgICAgICBjb25zdCB7IGhhbmRsZXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYCR7aGFuZGxlci5ldmVudH1gLCBoYW5kbGVyLmZ1bmMpXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50OyJdLCJmaWxlIjoiZm9ybXMvY29tcG9uZW50cy9lbGVtZW50LmpzIn0=
