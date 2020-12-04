import RegisterForm from "./components/registerForm.js";
import Input from "./components/input.js";
import { Element } from "../forms/components/index.js";

class CardioForm extends RegisterForm {
    dateProps = {
        tag: "input",
        type: "date",
        name: "date-visit",
        label: "Дата визита",
        required: true,
    };

    psessureProps = {
        tag: "input",
        type: "text",
        name: "pressure",
        label: "Обычное давление",
        required: true,
    };
    massindexProps = {
        tag: "input",
        type: "text",
        name: "mass-index",
        label: "Индекс массы тела",
        required: true,
    };
    diseasesProps = {
        tag: "textarea",
        name: "diseases",
        label: "Заболевания сердечно-сосудистой системы",
        required: true,
    };
    submitProps = {
        tag: "button",
        type: "submit",
        content: "Создать визит",
        class: "modal-window__btn",
    };
    ageProps = {
        tag: "input",
        name: "age",
        placeholder: "Введите возраст",
        label: "Возраст пациента",
        required: true,
    };

    render() {
        const form = super.render();
        const {
            ageProps,
            dateProps,
            submitProps,
            psessureProps,
            massindexProps,
            diseasesProps,
        } = this;
        form.append(
            new Input(ageProps).render(),
            new Input(psessureProps).render(),
            new Input(massindexProps).render(),
            new Input(diseasesProps).render(),
            new Input(dateProps).render(),

            new Element(submitProps).render()
        );

        form.setAttribute("id", "cardio");

        return form;
    }
}
export default CardioForm;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3Jtcy9jYXJkaW9Gb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSBcIi4vY29tcG9uZW50cy9yZWdpc3RlckZvcm0uanNcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuL2NvbXBvbmVudHMvaW5wdXQuanNcIjtcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9mb3Jtcy9jb21wb25lbnRzL2luZGV4LmpzXCI7XHJcblxyXG5jbGFzcyBDYXJkaW9Gb3JtIGV4dGVuZHMgUmVnaXN0ZXJGb3JtIHtcclxuICAgIGRhdGVQcm9wcyA9IHtcclxuICAgICAgICB0YWc6IFwiaW5wdXRcIixcclxuICAgICAgICB0eXBlOiBcImRhdGVcIixcclxuICAgICAgICBuYW1lOiBcImRhdGUtdmlzaXRcIixcclxuICAgICAgICBsYWJlbDogXCLQlNCw0YLQsCDQstC40LfQuNGC0LBcIixcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgcHNlc3N1cmVQcm9wcyA9IHtcclxuICAgICAgICB0YWc6IFwiaW5wdXRcIixcclxuICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICBuYW1lOiBcInByZXNzdXJlXCIsXHJcbiAgICAgICAgbGFiZWw6IFwi0J7QsdGL0YfQvdC+0LUg0LTQsNCy0LvQtdC90LjQtVwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIG1hc3NpbmRleFByb3BzID0ge1xyXG4gICAgICAgIHRhZzogXCJpbnB1dFwiLFxyXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgIG5hbWU6IFwibWFzcy1pbmRleFwiLFxyXG4gICAgICAgIGxhYmVsOiBcItCY0L3QtNC10LrRgSDQvNCw0YHRgdGLINGC0LXQu9CwXCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgZGlzZWFzZXNQcm9wcyA9IHtcclxuICAgICAgICB0YWc6IFwidGV4dGFyZWFcIixcclxuICAgICAgICBuYW1lOiBcImRpc2Vhc2VzXCIsXHJcbiAgICAgICAgbGFiZWw6IFwi0JfQsNCx0L7Qu9C10LLQsNC90LjRjyDRgdC10YDQtNC10YfQvdC+LdGB0L7RgdGD0LTQuNGB0YLQvtC5INGB0LjRgdGC0LXQvNGLXCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgc3VibWl0UHJvcHMgPSB7XHJcbiAgICAgICAgdGFnOiBcImJ1dHRvblwiLFxyXG4gICAgICAgIHR5cGU6IFwic3VibWl0XCIsXHJcbiAgICAgICAgY29udGVudDogXCLQodC+0LfQtNCw0YLRjCDQstC40LfQuNGCXCIsXHJcbiAgICAgICAgY2xhc3M6IFwibW9kYWwtd2luZG93X19idG5cIixcclxuICAgIH07XHJcbiAgICBhZ2VQcm9wcyA9IHtcclxuICAgICAgICB0YWc6IFwiaW5wdXRcIixcclxuICAgICAgICBuYW1lOiBcImFnZVwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcItCS0LLQtdC00LjRgtC1INCy0L7Qt9GA0LDRgdGCXCIsXHJcbiAgICAgICAgbGFiZWw6IFwi0JLQvtC30YDQsNGB0YIg0L/QsNGG0LjQtdC90YLQsFwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IHN1cGVyLnJlbmRlcigpO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgYWdlUHJvcHMsXHJcbiAgICAgICAgICAgIGRhdGVQcm9wcyxcclxuICAgICAgICAgICAgc3VibWl0UHJvcHMsXHJcbiAgICAgICAgICAgIHBzZXNzdXJlUHJvcHMsXHJcbiAgICAgICAgICAgIG1hc3NpbmRleFByb3BzLFxyXG4gICAgICAgICAgICBkaXNlYXNlc1Byb3BzLFxyXG4gICAgICAgIH0gPSB0aGlzO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kKFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoYWdlUHJvcHMpLnJlbmRlcigpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQocHNlc3N1cmVQcm9wcykucmVuZGVyKCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dChtYXNzaW5kZXhQcm9wcykucmVuZGVyKCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dChkaXNlYXNlc1Byb3BzKS5yZW5kZXIoKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KGRhdGVQcm9wcykucmVuZGVyKCksXHJcblxyXG4gICAgICAgICAgICBuZXcgRWxlbWVudChzdWJtaXRQcm9wcykucmVuZGVyKClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FyZGlvXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9ybTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYXJkaW9Gb3JtOyJdLCJmaWxlIjoiZm9ybXMvY2FyZGlvRm9ybS5qcyJ9
