import Element from "../forms/components/element.js";
import { LoginForm } from "../forms/components/index.js";
import Modal from "./modal.js"


class LoginModal extends Modal {

    render() {

        const modalWindow = super.render()
        modalWindow.append(
            new Element({
                tag: "h3",
                class: "modal-window__title",
                content: "Введите логин и пароль",
            }).render(),
            new LoginForm().render({ class: "enter-window__form" }),
        )

        return modalWindow;
    }
}
export default LoginModal;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RhbHMvbG9naW5Nb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZm9ybXMvY29tcG9uZW50cy9lbGVtZW50LmpzXCI7XHJcbmltcG9ydCB7IExvZ2luRm9ybSB9IGZyb20gXCIuLi9mb3Jtcy9jb21wb25lbnRzL2luZGV4LmpzXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9tb2RhbC5qc1wiXHJcblxyXG5cclxuY2xhc3MgTG9naW5Nb2RhbCBleHRlbmRzIE1vZGFsIHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vZGFsV2luZG93ID0gc3VwZXIucmVuZGVyKClcclxuICAgICAgICBtb2RhbFdpbmRvdy5hcHBlbmQoXHJcbiAgICAgICAgICAgIG5ldyBFbGVtZW50KHtcclxuICAgICAgICAgICAgICAgIHRhZzogXCJoM1wiLFxyXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwibW9kYWwtd2luZG93X190aXRsZVwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCLQktCy0LXQtNC40YLQtSDQu9C+0LPQuNC9INC4INC/0LDRgNC+0LvRjFwiLFxyXG4gICAgICAgICAgICB9KS5yZW5kZXIoKSxcclxuICAgICAgICAgICAgbmV3IExvZ2luRm9ybSgpLnJlbmRlcih7IGNsYXNzOiBcImVudGVyLXdpbmRvd19fZm9ybVwiIH0pLFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuIG1vZGFsV2luZG93O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luTW9kYWw7Il0sImZpbGUiOiJtb2RhbHMvbG9naW5Nb2RhbC5qcyJ9
