import Element from "../forms/components/element.js";



class ModalWindow extends Element {
    modal = {
        class: "modal-window",
    };
    closeBtn = {
        tag: "span",
        class: "",
        content: "&#10006",
        handler: {
            event: "click",
            func: function(e) {
                this.closest(".modal").style.display = "none";
                this.parentElement.remove()
                document.body.classList.remove('scroll-hidden');
            },
        },
    };


    render() {
        const { modal, closeBtn } = this;
        const modalWindow = this.createElement("div", modal);
        const close = new Element(closeBtn);

        modalWindow.append(
            close.render(),

        );
        close.handler();

        return modalWindow;
    }
}
export default ModalWindow;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RhbHMvbW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2Zvcm1zL2NvbXBvbmVudHMvZWxlbWVudC5qc1wiO1xyXG5cclxuXHJcblxyXG5jbGFzcyBNb2RhbFdpbmRvdyBleHRlbmRzIEVsZW1lbnQge1xyXG4gICAgbW9kYWwgPSB7XHJcbiAgICAgICAgY2xhc3M6IFwibW9kYWwtd2luZG93XCIsXHJcbiAgICB9O1xyXG4gICAgY2xvc2VCdG4gPSB7XHJcbiAgICAgICAgdGFnOiBcInNwYW5cIixcclxuICAgICAgICBjbGFzczogXCJcIixcclxuICAgICAgICBjb250ZW50OiBcIiYjMTAwMDZcIixcclxuICAgICAgICBoYW5kbGVyOiB7XHJcbiAgICAgICAgICAgIGV2ZW50OiBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIGZ1bmM6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VzdChcIi5tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBtb2RhbCwgY2xvc2VCdG4gfSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgbW9kYWxXaW5kb3cgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbW9kYWwpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gbmV3IEVsZW1lbnQoY2xvc2VCdG4pO1xyXG5cclxuICAgICAgICBtb2RhbFdpbmRvdy5hcHBlbmQoXHJcbiAgICAgICAgICAgIGNsb3NlLnJlbmRlcigpLFxyXG5cclxuICAgICAgICApO1xyXG4gICAgICAgIGNsb3NlLmhhbmRsZXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1vZGFsV2luZG93O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsV2luZG93OyJdLCJmaWxlIjoibW9kYWxzL21vZGFsLmpzIn0=
