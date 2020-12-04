import RegisterForm from './components/registerForm.js'
import Input from "./components/input.js"
import { Element } from "../forms/components/index.js";


class TherapistForm extends RegisterForm {
    dateProps = {
        tag: "input",
        type: "date",
        name: "date-visit",
        label: "Дата визита",
        required: true,
    }
    ageProps = {
        tag: "input",
        name: "age",
        placeholder: "Введите возраст",
        label: "Возраст пациента",
        required: true,
    };
    submitProps = {
        tag: "button",
        type: "submit",
        content: "Создать визит",
        class: "modal-window__btn",
    };
    render() {
        const form = super.render()
        const { submitProps, dateProps, ageProps } = this
        form.append(new Input(dateProps).render(),
            new Input(ageProps).render(),
            new Element(submitProps).render()
        )
        form.setAttribute('id', 'therapist')
        return form
    }


}
export default TherapistForm
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3Jtcy90aGVyYXBpc3RGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSAnLi9jb21wb25lbnRzL3JlZ2lzdGVyRm9ybS5qcydcclxuaW1wb3J0IElucHV0IGZyb20gXCIuL2NvbXBvbmVudHMvaW5wdXQuanNcIlxyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL2Zvcm1zL2NvbXBvbmVudHMvaW5kZXguanNcIjtcclxuXHJcblxyXG5jbGFzcyBUaGVyYXBpc3RGb3JtIGV4dGVuZHMgUmVnaXN0ZXJGb3JtIHtcclxuICAgIGRhdGVQcm9wcyA9IHtcclxuICAgICAgICB0YWc6IFwiaW5wdXRcIixcclxuICAgICAgICB0eXBlOiBcImRhdGVcIixcclxuICAgICAgICBuYW1lOiBcImRhdGUtdmlzaXRcIixcclxuICAgICAgICBsYWJlbDogXCLQlNCw0YLQsCDQstC40LfQuNGC0LBcIixcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH1cclxuICAgIGFnZVByb3BzID0ge1xyXG4gICAgICAgIHRhZzogXCJpbnB1dFwiLFxyXG4gICAgICAgIG5hbWU6IFwiYWdlXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwi0JLQstC10LTQuNGC0LUg0LLQvtC30YDQsNGB0YJcIixcclxuICAgICAgICBsYWJlbDogXCLQktC+0LfRgNCw0YHRgiDQv9Cw0YbQuNC10L3RgtCwXCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgc3VibWl0UHJvcHMgPSB7XHJcbiAgICAgICAgdGFnOiBcImJ1dHRvblwiLFxyXG4gICAgICAgIHR5cGU6IFwic3VibWl0XCIsXHJcbiAgICAgICAgY29udGVudDogXCLQodC+0LfQtNCw0YLRjCDQstC40LfQuNGCXCIsXHJcbiAgICAgICAgY2xhc3M6IFwibW9kYWwtd2luZG93X19idG5cIixcclxuICAgIH07XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IHN1cGVyLnJlbmRlcigpXHJcbiAgICAgICAgY29uc3QgeyBzdWJtaXRQcm9wcywgZGF0ZVByb3BzLCBhZ2VQcm9wcyB9ID0gdGhpc1xyXG4gICAgICAgIGZvcm0uYXBwZW5kKG5ldyBJbnB1dChkYXRlUHJvcHMpLnJlbmRlcigpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoYWdlUHJvcHMpLnJlbmRlcigpLFxyXG4gICAgICAgICAgICBuZXcgRWxlbWVudChzdWJtaXRQcm9wcykucmVuZGVyKClcclxuICAgICAgICApXHJcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RoZXJhcGlzdCcpXHJcbiAgICAgICAgcmV0dXJuIGZvcm1cclxuICAgIH1cclxuXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRoZXJhcGlzdEZvcm0iXSwiZmlsZSI6ImZvcm1zL3RoZXJhcGlzdEZvcm0uanMifQ==
