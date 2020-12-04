import Input from "./input.js";

class RegisterForm extends Input {
    nameProps = {
        tag: "input",
        name: "name",
        placeholder: "Введите имя, фамилию, отчество",
        label: "ФИО пациента",
        required: true,
    };

    timeProps = {
        tag: "select",
        class: "time-list",
        name: "time",
        placeholder: "Ds,",
        label: "Срочность визита",

        options: {
            normal: "Обычная",
            priority: "Приоритетная",
            high: "Неотложная",
        },
    };
    descriptionProps = {
        tag: "textarea",
        name: "description",
        placeholder: "Краткое описание",
        label: "Краткое описание",
        required: true,
    };
    purposeProps = {
        tag: "textarea",
        name: "purpose",
        placeholder: "Цель визита",
        label: "Цель визита",
        required: true,
    };

    render() {
        const form = this.createElement("form", {});
        const {
            nameProps,

            timeProps,
            descriptionProps,
            purposeProps,
        } = this;

        form.append(
            new Input(nameProps).render(),

            new Input(timeProps).render(),
            new Input(descriptionProps).render(),
            new Input(purposeProps).render()
        );

        return form;
    }
}

export default RegisterForm;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3Jtcy9jb21wb25lbnRzL3JlZ2lzdGVyRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcIi4vaW5wdXQuanNcIjtcclxuXHJcbmNsYXNzIFJlZ2lzdGVyRm9ybSBleHRlbmRzIElucHV0IHtcclxuICAgIG5hbWVQcm9wcyA9IHtcclxuICAgICAgICB0YWc6IFwiaW5wdXRcIixcclxuICAgICAgICBuYW1lOiBcIm5hbWVcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCLQktCy0LXQtNC40YLQtSDQuNC80Y8sINGE0LDQvNC40LvQuNGOLCDQvtGC0YfQtdGB0YLQstC+XCIsXHJcbiAgICAgICAgbGFiZWw6IFwi0KTQmNCeINC/0LDRhtC40LXQvdGC0LBcIixcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgdGltZVByb3BzID0ge1xyXG4gICAgICAgIHRhZzogXCJzZWxlY3RcIixcclxuICAgICAgICBjbGFzczogXCJ0aW1lLWxpc3RcIixcclxuICAgICAgICBuYW1lOiBcInRpbWVcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJEcyxcIixcclxuICAgICAgICBsYWJlbDogXCLQodGA0L7Rh9C90L7RgdGC0Ywg0LLQuNC30LjRgtCwXCIsXHJcblxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgbm9ybWFsOiBcItCe0LHRi9GH0L3QsNGPXCIsXHJcbiAgICAgICAgICAgIHByaW9yaXR5OiBcItCf0YDQuNC+0YDQuNGC0LXRgtC90LDRj1wiLFxyXG4gICAgICAgICAgICBoaWdoOiBcItCd0LXQvtGC0LvQvtC20L3QsNGPXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBkZXNjcmlwdGlvblByb3BzID0ge1xyXG4gICAgICAgIHRhZzogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCLQmtGA0LDRgtC60L7QtSDQvtC/0LjRgdCw0L3QuNC1XCIsXHJcbiAgICAgICAgbGFiZWw6IFwi0JrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtVwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIHB1cnBvc2VQcm9wcyA9IHtcclxuICAgICAgICB0YWc6IFwidGV4dGFyZWFcIixcclxuICAgICAgICBuYW1lOiBcInB1cnBvc2VcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCLQptC10LvRjCDQstC40LfQuNGC0LBcIixcclxuICAgICAgICBsYWJlbDogXCLQptC10LvRjCDQstC40LfQuNGC0LBcIixcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHt9KTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG5hbWVQcm9wcyxcclxuXHJcbiAgICAgICAgICAgIHRpbWVQcm9wcyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25Qcm9wcyxcclxuICAgICAgICAgICAgcHVycG9zZVByb3BzLFxyXG4gICAgICAgIH0gPSB0aGlzO1xyXG5cclxuICAgICAgICBmb3JtLmFwcGVuZChcclxuICAgICAgICAgICAgbmV3IElucHV0KG5hbWVQcm9wcykucmVuZGVyKCksXHJcblxyXG4gICAgICAgICAgICBuZXcgSW5wdXQodGltZVByb3BzKS5yZW5kZXIoKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KGRlc2NyaXB0aW9uUHJvcHMpLnJlbmRlcigpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQocHVycG9zZVByb3BzKS5yZW5kZXIoKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlckZvcm07Il0sImZpbGUiOiJmb3Jtcy9jb21wb25lbnRzL3JlZ2lzdGVyRm9ybS5qcyJ9
