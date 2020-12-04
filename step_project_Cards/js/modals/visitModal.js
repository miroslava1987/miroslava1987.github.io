import { Element } from "../forms/components/index.js";
import { Input } from "../forms/components/index.js";
import { CardioForm, DentistForm, TherapistForm } from "../forms/indexForms.js";
import Modal from "./modal.js";
import renderCards from "../script.js";
import { saveVisitOnBase } from "../ajax/ajax.js";

class VisitModal extends Modal {
    select = {
        tag: "select",
        name: "doctor",
        class: "modal-window__doctors",
        label: "Выберите врача",
        options: {
            none: "Выберите врача",
            cardio: "Кардиолог",
            dentist: "Дантист",
            therapist: "Терапевт",
        },
        handler: {
            event: "change",
            func: function(e) {
                let value = this.value;
                const cardioForm = new CardioForm().render();
                const therapistForm = new TherapistForm().render();
                const dentistForm = new DentistForm().render();
                switch (value) {
                    case "Кардиолог":
                        if (this.nextElementSibling) this.nextElementSibling.remove();

                        this.after(cardioForm);

                        this.setAttribute("form", "cardio");
                        break;
                    case "Терапевт":
                        if (this.nextElementSibling) this.nextElementSibling.remove();
                        this.after(therapistForm);
                        this.setAttribute("form", "therapist");
                        break;
                    case "Дантист":
                        if (this.nextElementSibling) this.nextElementSibling.remove();
                        this.after(dentistForm);
                        this.setAttribute("form", "dentist");
                        break;
                    default:
                        if (this.nextElementSibling) this.nextElementSibling.remove();
                        const warning = new Element({
                            tag: "span",
                            class: "warning",

                            content: "выберите врача",
                        }).render();
                        this.after(warning);
                        break; //
                }
            },
        },
    };


    title = {
        tag: "h3",
        class: "modal-window__title",
        content: "Создание визита",
    };

    render() {
        const { select, title } = this;
        const modalWindow = super.render();
        const doctorsList = new Input(select);

        modalWindow.append(new Element(title).render(), doctorsList.render());
        doctorsList.handler();
        modalWindow.classList.add("visit-modal");

        modalWindow.addEventListener("submit", async function saveVisit(ev) {
            ev.preventDefault();
            let visit = {};

            this.querySelectorAll("input, textarea, select").forEach((elem) => {
                visit[elem.name] = elem.value;
            });
            this.closest("#create-modal-window").style.display = "none";

            this.querySelector('[name="doctor"]').value = "Выберите врача";
           
            this.querySelector('form').remove()
            const data = await saveVisitOnBase(visit);

            renderCards(data);
            document.body.classList.remove('scroll-hidden');
            modalWindow.remove()

        });
        return modalWindow;
    }
}
export default VisitModal;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RhbHMvdmlzaXRNb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL2Zvcm1zL2NvbXBvbmVudHMvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi4vZm9ybXMvY29tcG9uZW50cy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBDYXJkaW9Gb3JtLCBEZW50aXN0Rm9ybSwgVGhlcmFwaXN0Rm9ybSB9IGZyb20gXCIuLi9mb3Jtcy9pbmRleEZvcm1zLmpzXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9tb2RhbC5qc1wiO1xyXG5pbXBvcnQgcmVuZGVyQ2FyZHMgZnJvbSBcIi4uL3NjcmlwdC5qc1wiO1xyXG5pbXBvcnQgeyBzYXZlVmlzaXRPbkJhc2UgfSBmcm9tIFwiLi4vYWpheC9hamF4LmpzXCI7XHJcblxyXG5jbGFzcyBWaXNpdE1vZGFsIGV4dGVuZHMgTW9kYWwge1xyXG4gICAgc2VsZWN0ID0ge1xyXG4gICAgICAgIHRhZzogXCJzZWxlY3RcIixcclxuICAgICAgICBuYW1lOiBcImRvY3RvclwiLFxyXG4gICAgICAgIGNsYXNzOiBcIm1vZGFsLXdpbmRvd19fZG9jdG9yc1wiLFxyXG4gICAgICAgIGxhYmVsOiBcItCS0YvQsdC10YDQuNGC0LUg0LLRgNCw0YfQsFwiLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgbm9uZTogXCLQktGL0LHQtdGA0LjRgtC1INCy0YDQsNGH0LBcIixcclxuICAgICAgICAgICAgY2FyZGlvOiBcItCa0LDRgNC00LjQvtC70L7Qs1wiLFxyXG4gICAgICAgICAgICBkZW50aXN0OiBcItCU0LDQvdGC0LjRgdGCXCIsXHJcbiAgICAgICAgICAgIHRoZXJhcGlzdDogXCLQotC10YDQsNC/0LXQstGCXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVyOiB7XHJcbiAgICAgICAgICAgIGV2ZW50OiBcImNoYW5nZVwiLFxyXG4gICAgICAgICAgICBmdW5jOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZGlvRm9ybSA9IG5ldyBDYXJkaW9Gb3JtKCkucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aGVyYXBpc3RGb3JtID0gbmV3IFRoZXJhcGlzdEZvcm0oKS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbnRpc3RGb3JtID0gbmV3IERlbnRpc3RGb3JtKCkucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcItCa0LDRgNC00LjQvtC70L7Qs1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5uZXh0RWxlbWVudFNpYmxpbmcpIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZnRlcihjYXJkaW9Gb3JtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZm9ybVwiLCBcImNhcmRpb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcItCi0LXRgNCw0L/QtdCy0YJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nKSB0aGlzLm5leHRFbGVtZW50U2libGluZy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZnRlcih0aGVyYXBpc3RGb3JtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJmb3JtXCIsIFwidGhlcmFwaXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwi0JTQsNC90YLQuNGB0YJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nKSB0aGlzLm5leHRFbGVtZW50U2libGluZy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZnRlcihkZW50aXN0Rm9ybSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZm9ybVwiLCBcImRlbnRpc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5leHRFbGVtZW50U2libGluZykgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdhcm5pbmcgPSBuZXcgRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwic3BhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwid2FybmluZ1wiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi0LLRi9Cx0LXRgNC40YLQtSDQstGA0LDRh9CwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFmdGVyKHdhcm5pbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgLy9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGl0bGUgPSB7XHJcbiAgICAgICAgdGFnOiBcImgzXCIsXHJcbiAgICAgICAgY2xhc3M6IFwibW9kYWwtd2luZG93X190aXRsZVwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwi0KHQvtC30LTQsNC90LjQtSDQstC40LfQuNGC0LBcIixcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0LCB0aXRsZSB9ID0gdGhpcztcclxuICAgICAgICBjb25zdCBtb2RhbFdpbmRvdyA9IHN1cGVyLnJlbmRlcigpO1xyXG4gICAgICAgIGNvbnN0IGRvY3RvcnNMaXN0ID0gbmV3IElucHV0KHNlbGVjdCk7XHJcblxyXG4gICAgICAgIG1vZGFsV2luZG93LmFwcGVuZChuZXcgRWxlbWVudCh0aXRsZSkucmVuZGVyKCksIGRvY3RvcnNMaXN0LnJlbmRlcigpKTtcclxuICAgICAgICBkb2N0b3JzTGlzdC5oYW5kbGVyKCk7XHJcbiAgICAgICAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0LmFkZChcInZpc2l0LW1vZGFsXCIpO1xyXG5cclxuICAgICAgICBtb2RhbFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uIHNhdmVWaXNpdChldikge1xyXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgdmlzaXQgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHZpc2l0W2VsZW0ubmFtZV0gPSBlbGVtLnZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZXN0KFwiI2NyZWF0ZS1tb2RhbC13aW5kb3dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRvY3RvclwiXScpLnZhbHVlID0gXCLQktGL0LHQtdGA0LjRgtC1INCy0YDQsNGH0LBcIjtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVtb3ZlKClcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHNhdmVWaXNpdE9uQmFzZSh2aXNpdCk7XHJcblxyXG4gICAgICAgICAgICByZW5kZXJDYXJkcyhkYXRhKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIG1vZGFsV2luZG93LnJlbW92ZSgpXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBtb2RhbFdpbmRvdztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBWaXNpdE1vZGFsOyJdLCJmaWxlIjoibW9kYWxzL3Zpc2l0TW9kYWwuanMifQ==
