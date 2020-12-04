import RegisterForm from './components/registerForm.js'
import Input from "./components/input.js"
import { Element } from "../forms/components/index.js";


class DentistForm extends RegisterForm {
    dateProps = {
        tag: "input",
        type: "date",
        name: "date-visit",
        label: "Дата визита",
    }
    lastDateProps = {
        tag: "input",
        type: "date",
        name: "last-visit",
        label: "Дата последнего визита"
    }
    submitProps = {
        tag: "button",
        type: "submit",
        content: "Создать визит",
        class: "modal-window__btn",
    };
    render() {
        const form = super.render()
        const { submitProps, dateProps, lastDateProps } = this
        form.append(
            new Input(dateProps).render(),
            new Input(lastDateProps).render(),
            new Element(submitProps).render())
        form.setAttribute('id', 'dentist')
        return form
    }


}
export default DentistForm
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3Jtcy9kZW5pc3RGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSAnLi9jb21wb25lbnRzL3JlZ2lzdGVyRm9ybS5qcydcclxuaW1wb3J0IElucHV0IGZyb20gXCIuL2NvbXBvbmVudHMvaW5wdXQuanNcIlxyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL2Zvcm1zL2NvbXBvbmVudHMvaW5kZXguanNcIjtcclxuXHJcblxyXG5jbGFzcyBEZW50aXN0Rm9ybSBleHRlbmRzIFJlZ2lzdGVyRm9ybSB7XHJcbiAgICBkYXRlUHJvcHMgPSB7XHJcbiAgICAgICAgdGFnOiBcImlucHV0XCIsXHJcbiAgICAgICAgdHlwZTogXCJkYXRlXCIsXHJcbiAgICAgICAgbmFtZTogXCJkYXRlLXZpc2l0XCIsXHJcbiAgICAgICAgbGFiZWw6IFwi0JTQsNGC0LAg0LLQuNC30LjRgtCwXCIsXHJcbiAgICB9XHJcbiAgICBsYXN0RGF0ZVByb3BzID0ge1xyXG4gICAgICAgIHRhZzogXCJpbnB1dFwiLFxyXG4gICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxyXG4gICAgICAgIG5hbWU6IFwibGFzdC12aXNpdFwiLFxyXG4gICAgICAgIGxhYmVsOiBcItCU0LDRgtCwINC/0L7RgdC70LXQtNC90LXQs9C+INCy0LjQt9C40YLQsFwiXHJcbiAgICB9XHJcbiAgICBzdWJtaXRQcm9wcyA9IHtcclxuICAgICAgICB0YWc6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgdHlwZTogXCJzdWJtaXRcIixcclxuICAgICAgICBjb250ZW50OiBcItCh0L7Qt9C00LDRgtGMINCy0LjQt9C40YJcIixcclxuICAgICAgICBjbGFzczogXCJtb2RhbC13aW5kb3dfX2J0blwiLFxyXG4gICAgfTtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBmb3JtID0gc3VwZXIucmVuZGVyKClcclxuICAgICAgICBjb25zdCB7IHN1Ym1pdFByb3BzLCBkYXRlUHJvcHMsIGxhc3REYXRlUHJvcHMgfSA9IHRoaXNcclxuICAgICAgICBmb3JtLmFwcGVuZChcclxuICAgICAgICAgICAgbmV3IElucHV0KGRhdGVQcm9wcykucmVuZGVyKCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dChsYXN0RGF0ZVByb3BzKS5yZW5kZXIoKSxcclxuICAgICAgICAgICAgbmV3IEVsZW1lbnQoc3VibWl0UHJvcHMpLnJlbmRlcigpKVxyXG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdkZW50aXN0JylcclxuICAgICAgICByZXR1cm4gZm9ybVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGVudGlzdEZvcm0iXSwiZmlsZSI6ImZvcm1zL2RlbmlzdEZvcm0uanMifQ==
