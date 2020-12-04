import Visit from "./doctor.js";
import EditVisitModal from "../modals/editVisitModal.js";
import { DentistForm } from "../forms/indexForms.js";

class VisitDentist extends Visit {
    constructor(visit) {
        super(visit);
        this.content.lastVisit = visit["last-visit"];
    }
    showMore() {
        super.showMoreMain();
        const moreInfo = document.createElement("div");
        moreInfo.classList.add("visit__more-info");
        moreInfo.innerHTML = `<div class="visit-cards__patient-last-visit">
               <span class="visit-cards__patient-last-visit-label">Дата последнего посещения</span>
               <span class="visit-cards__patient-last-visit-info">${this.content.lastVisit
                 .split("-")
                 .reverse()
                 .join(".")}</span>
            </div>`;
        this._visitCard.querySelector(".visit__btn-more").after(moreInfo);
    }
    editVisit() {
        const modalWindow = super.editVisit();
        const editModal = new EditVisitModal().render(this);
        editModal.append(new DentistForm().render());
        modalWindow.append(editModal);
        modalWindow.querySelector('[type="submit"]').textContent = "Изменить визит";
        modalWindow.querySelector(
            '[name="name"]'
        ).value = this.content.patientFullName;
     

        modalWindow.querySelector('[name="time"]').value = this.priority
        modalWindow.querySelector('[name="description"]').value = this.description

        modalWindow.querySelector('[name="purpose"]').value = this.title

        modalWindow.querySelector('[name="date-visit"]').value = this.content.visitDate
        modalWindow.querySelector('[name="last-visit"]').value = this.content.lastVisit



        modalWindow.append(
            editModal
        );

        return modalWindow;
    }
}

export default VisitDentist;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkb2N0b3JzL0RlbnRpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpc2l0IGZyb20gXCIuL2RvY3Rvci5qc1wiO1xyXG5pbXBvcnQgRWRpdFZpc2l0TW9kYWwgZnJvbSBcIi4uL21vZGFscy9lZGl0VmlzaXRNb2RhbC5qc1wiO1xyXG5pbXBvcnQgeyBEZW50aXN0Rm9ybSB9IGZyb20gXCIuLi9mb3Jtcy9pbmRleEZvcm1zLmpzXCI7XHJcblxyXG5jbGFzcyBWaXNpdERlbnRpc3QgZXh0ZW5kcyBWaXNpdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aXNpdCkge1xyXG4gICAgICAgIHN1cGVyKHZpc2l0KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQubGFzdFZpc2l0ID0gdmlzaXRbXCJsYXN0LXZpc2l0XCJdO1xyXG4gICAgfVxyXG4gICAgc2hvd01vcmUoKSB7XHJcbiAgICAgICAgc3VwZXIuc2hvd01vcmVNYWluKCk7XHJcbiAgICAgICAgY29uc3QgbW9yZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG1vcmVJbmZvLmNsYXNzTGlzdC5hZGQoXCJ2aXNpdF9fbW9yZS1pbmZvXCIpO1xyXG4gICAgICAgIG1vcmVJbmZvLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidmlzaXQtY2FyZHNfX3BhdGllbnQtbGFzdC12aXNpdFwiPlxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc2l0LWNhcmRzX19wYXRpZW50LWxhc3QtdmlzaXQtbGFiZWxcIj7QlNCw0YLQsCDQv9C+0YHQu9C10LTQvdC10LPQviDQv9C+0YHQtdGJ0LXQvdC40Y88L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzaXQtY2FyZHNfX3BhdGllbnQtbGFzdC12aXNpdC1pbmZvXCI+JHt0aGlzLmNvbnRlbnQubGFzdFZpc2l0XHJcbiAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLVwiKVxyXG4gICAgICAgICAgICAgICAgIC5yZXZlcnNlKClcclxuICAgICAgICAgICAgICAgICAuam9pbihcIi5cIil9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIHRoaXMuX3Zpc2l0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLnZpc2l0X19idG4tbW9yZVwiKS5hZnRlcihtb3JlSW5mbyk7XHJcbiAgICB9XHJcbiAgICBlZGl0VmlzaXQoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxXaW5kb3cgPSBzdXBlci5lZGl0VmlzaXQoKTtcclxuICAgICAgICBjb25zdCBlZGl0TW9kYWwgPSBuZXcgRWRpdFZpc2l0TW9kYWwoKS5yZW5kZXIodGhpcyk7XHJcbiAgICAgICAgZWRpdE1vZGFsLmFwcGVuZChuZXcgRGVudGlzdEZvcm0oKS5yZW5kZXIoKSk7XHJcbiAgICAgICAgbW9kYWxXaW5kb3cuYXBwZW5kKGVkaXRNb2RhbCk7XHJcbiAgICAgICAgbW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignW3R5cGU9XCJzdWJtaXRcIl0nKS50ZXh0Q29udGVudCA9IFwi0JjQt9C80LXQvdC40YLRjCDQstC40LfQuNGCXCI7XHJcbiAgICAgICAgbW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJ1tuYW1lPVwibmFtZVwiXSdcclxuICAgICAgICApLnZhbHVlID0gdGhpcy5jb250ZW50LnBhdGllbnRGdWxsTmFtZTtcclxuICAgICBcclxuXHJcbiAgICAgICAgbW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0aW1lXCJdJykudmFsdWUgPSB0aGlzLnByaW9yaXR5XHJcbiAgICAgICAgbW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignW25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbHVlID0gdGhpcy5kZXNjcmlwdGlvblxyXG5cclxuICAgICAgICBtb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInB1cnBvc2VcIl0nKS52YWx1ZSA9IHRoaXMudGl0bGVcclxuXHJcbiAgICAgICAgbW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignW25hbWU9XCJkYXRlLXZpc2l0XCJdJykudmFsdWUgPSB0aGlzLmNvbnRlbnQudmlzaXREYXRlXHJcbiAgICAgICAgbW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignW25hbWU9XCJsYXN0LXZpc2l0XCJdJykudmFsdWUgPSB0aGlzLmNvbnRlbnQubGFzdFZpc2l0XHJcblxyXG5cclxuXHJcbiAgICAgICAgbW9kYWxXaW5kb3cuYXBwZW5kKFxyXG4gICAgICAgICAgICBlZGl0TW9kYWxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gbW9kYWxXaW5kb3c7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpc2l0RGVudGlzdDsiXSwiZmlsZSI6ImRvY3RvcnMvRGVudGlzdC5qcyJ9
