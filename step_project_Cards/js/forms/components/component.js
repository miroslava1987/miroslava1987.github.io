class Component {
  constructor(props) {
    this.props = { ...props };
  }
  
  createElement(tag, attr, content ='') {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attr)) {
      if (value) {
        element.setAttribute(key, value);
      }      
    }  
    if (content) {
      element.innerHTML = content;
  }
    return element;
  }
}
export default Component;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3Jtcy9jb21wb25lbnRzL2NvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0geyAuLi5wcm9wcyB9O1xyXG4gIH1cclxuICBcclxuICBjcmVhdGVFbGVtZW50KHRhZywgYXR0ciwgY29udGVudCA9JycpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyKSkge1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcclxuICAgICAgfSAgICAgIFxyXG4gICAgfSAgXHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcclxuIl0sImZpbGUiOiJmb3Jtcy9jb21wb25lbnRzL2NvbXBvbmVudC5qcyJ9
