import Input from "./input.js";
import { Element } from "../components/index.js";
import { login } from "../../ajax/ajax.js";
import { CreateBtn, EnterBtn } from "../components/buttons.js";

class LoginForm extends Input {
    loginProps = {
        tag: "input",
        type: "email",
        placeholder: "Введите логин",
        required: true,
    };
    passwordProps = {
        tag: "input",
        type: "password",
        placeholder: "Введите пароль",
        required: true,
    };
    submitProps = {
        tag: "button",
        type: "submit",
        content: "Войти",
        class: "enter-window__form-btn",
    };
    render(atr = {}) {
        const form = this.createElement("form", atr);
        const { loginProps, passwordProps, submitProps } = this;

        form.append(
            new Input(loginProps).render(),
            new Input(passwordProps).render(),
            new Element(submitProps).render()
        );

        form.addEventListener("submit", hadlerLoginForm);
        async function hadlerLoginForm(ev) {
            ev.preventDefault();
            await login();

            if (sessionStorage.getItem("token")) {
                const modalWindow = this.closest(".modal");
                modalWindow.style.display = "none";
                modalWindow.querySelector(".modal-window").remove();
                EnterBtn.replaceWith(CreateBtn);
                window.location.reload();
            }
            document.body.classList.remove('scroll-hidden');
        }
        return form
    }

}

export default LoginForm;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3Jtcy9jb21wb25lbnRzL2xvZ2luRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcIi4vaW5wdXQuanNcIjtcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSBcIi4uLy4uL2FqYXgvYWpheC5qc1wiO1xyXG5pbXBvcnQgeyBDcmVhdGVCdG4sIEVudGVyQnRuIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy5qc1wiO1xyXG5cclxuY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgSW5wdXQge1xyXG4gICAgbG9naW5Qcm9wcyA9IHtcclxuICAgICAgICB0YWc6IFwiaW5wdXRcIixcclxuICAgICAgICB0eXBlOiBcImVtYWlsXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwi0JLQstC10LTQuNGC0LUg0LvQvtCz0LjQvVwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIHBhc3N3b3JkUHJvcHMgPSB7XHJcbiAgICAgICAgdGFnOiBcImlucHV0XCIsXHJcbiAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcItCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjFwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIHN1Ym1pdFByb3BzID0ge1xyXG4gICAgICAgIHRhZzogXCJidXR0b25cIixcclxuICAgICAgICB0eXBlOiBcInN1Ym1pdFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwi0JLQvtC50YLQuFwiLFxyXG4gICAgICAgIGNsYXNzOiBcImVudGVyLXdpbmRvd19fZm9ybS1idG5cIixcclxuICAgIH07XHJcbiAgICByZW5kZXIoYXRyID0ge30pIHtcclxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBhdHIpO1xyXG4gICAgICAgIGNvbnN0IHsgbG9naW5Qcm9wcywgcGFzc3dvcmRQcm9wcywgc3VibWl0UHJvcHMgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGZvcm0uYXBwZW5kKFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQobG9naW5Qcm9wcykucmVuZGVyKCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dChwYXNzd29yZFByb3BzKS5yZW5kZXIoKSxcclxuICAgICAgICAgICAgbmV3IEVsZW1lbnQoc3VibWl0UHJvcHMpLnJlbmRlcigpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhZGxlckxvZ2luRm9ybSk7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gaGFkbGVyTG9naW5Gb3JtKGV2KSB7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGxvZ2luKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbFdpbmRvdyA9IHRoaXMuY2xvc2VzdChcIi5tb2RhbFwiKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIG1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtd2luZG93XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgRW50ZXJCdG4ucmVwbGFjZVdpdGgoQ3JlYXRlQnRuKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvcm1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTsiXSwiZmlsZSI6ImZvcm1zL2NvbXBvbmVudHMvbG9naW5Gb3JtLmpzIn0=
