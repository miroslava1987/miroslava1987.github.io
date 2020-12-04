import Visit from './doctor.js'
import EditVisitModal from "../modals/editVisitModal.js";
import { TherapistForm } from "../forms/indexForms.js";
class VisitTherapist extends Visit {
    constructor(visit) {
        super(visit);
        this.content.age = visit.age;
    }
    showMore() {
        super.showMoreMain();
        const moreInfo = document.createElement('div');
        moreInfo.classList.add('visit__more-info')
        moreInfo.innerHTML = `<div class="visit-cards__patient-age">
            <span class="visit-cards__patient-age-label">Возраст пациента</span>
            <span class="visit-cards__patient-age-info">${this.content.age}</span>
      </div>`;
        this._visitCard.querySelector('.visit__btn-more').after(moreInfo);
    }
    editVisit() {
        const modalWindow = super.editVisit();
        const editModal = new EditVisitModal().render(this);
        editModal.append(new TherapistForm().render());
        modalWindow.append(editModal);
        modalWindow.querySelector('[type="submit"]').textContent = "Изменить визит";
        modalWindow.querySelector(
            '[name="name"]'
        ).value = this.content.patientFullName;
       

        modalWindow.querySelector('[name="time"]').value = this.priority
        modalWindow.querySelector('[name="description"]').value = this.description

        modalWindow.querySelector('[name="purpose"]').value = this.title

        modalWindow.querySelector('[name="date-visit"]').value = this.content.visitDate
        modalWindow.querySelector('[name="age"]').value = this.content.age




        modalWindow.append(
            editModal
        );

        return modalWindow;
    }
}

export default VisitTherapist
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkb2N0b3JzL1RoZXJhcGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlzaXQgZnJvbSAnLi9kb2N0b3IuanMnXHJcbmltcG9ydCBFZGl0VmlzaXRNb2RhbCBmcm9tIFwiLi4vbW9kYWxzL2VkaXRWaXNpdE1vZGFsLmpzXCI7XHJcbmltcG9ydCB7IFRoZXJhcGlzdEZvcm0gfSBmcm9tIFwiLi4vZm9ybXMvaW5kZXhGb3Jtcy5qc1wiO1xyXG5jbGFzcyBWaXNpdFRoZXJhcGlzdCBleHRlbmRzIFZpc2l0IHtcclxuICAgIGNvbnN0cnVjdG9yKHZpc2l0KSB7XHJcbiAgICAgICAgc3VwZXIodmlzaXQpO1xyXG4gICAgICAgIHRoaXMuY29udGVudC5hZ2UgPSB2aXNpdC5hZ2U7XHJcbiAgICB9XHJcbiAgICBzaG93TW9yZSgpIHtcclxuICAgICAgICBzdXBlci5zaG93TW9yZU1haW4oKTtcclxuICAgICAgICBjb25zdCBtb3JlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1vcmVJbmZvLmNsYXNzTGlzdC5hZGQoJ3Zpc2l0X19tb3JlLWluZm8nKVxyXG4gICAgICAgIG1vcmVJbmZvLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidmlzaXQtY2FyZHNfX3BhdGllbnQtYWdlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzaXQtY2FyZHNfX3BhdGllbnQtYWdlLWxhYmVsXCI+0JLQvtC30YDQsNGB0YIg0L/QsNGG0LjQtdC90YLQsDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXNpdC1jYXJkc19fcGF0aWVudC1hZ2UtaW5mb1wiPiR7dGhpcy5jb250ZW50LmFnZX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgdGhpcy5fdmlzaXRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy52aXNpdF9fYnRuLW1vcmUnKS5hZnRlcihtb3JlSW5mbyk7XHJcbiAgICB9XHJcbiAgICBlZGl0VmlzaXQoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxXaW5kb3cgPSBzdXBlci5lZGl0VmlzaXQoKTtcclxuICAgICAgICBjb25zdCBlZGl0TW9kYWwgPSBuZXcgRWRpdFZpc2l0TW9kYWwoKS5yZW5kZXIodGhpcyk7XHJcbiAgICAgICAgZWRpdE1vZGFsLmFwcGVuZChuZXcgVGhlcmFwaXN0Rm9ybSgpLnJlbmRlcigpKTtcclxuICAgICAgICBtb2RhbFdpbmRvdy5hcHBlbmQoZWRpdE1vZGFsKTtcclxuICAgICAgICBtb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpLnRleHRDb250ZW50ID0gXCLQmNC30LzQtdC90LjRgtGMINCy0LjQt9C40YJcIjtcclxuICAgICAgICBtb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAnW25hbWU9XCJuYW1lXCJdJ1xyXG4gICAgICAgICkudmFsdWUgPSB0aGlzLmNvbnRlbnQucGF0aWVudEZ1bGxOYW1lO1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIG1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGltZVwiXScpLnZhbHVlID0gdGhpcy5wcmlvcml0eVxyXG4gICAgICAgIG1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZSA9IHRoaXMuZGVzY3JpcHRpb25cclxuXHJcbiAgICAgICAgbW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignW25hbWU9XCJwdXJwb3NlXCJdJykudmFsdWUgPSB0aGlzLnRpdGxlXHJcblxyXG4gICAgICAgIG1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGF0ZS12aXNpdFwiXScpLnZhbHVlID0gdGhpcy5jb250ZW50LnZpc2l0RGF0ZVxyXG4gICAgICAgIG1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYWdlXCJdJykudmFsdWUgPSB0aGlzLmNvbnRlbnQuYWdlXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIG1vZGFsV2luZG93LmFwcGVuZChcclxuICAgICAgICAgICAgZWRpdE1vZGFsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1vZGFsV2luZG93O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaXNpdFRoZXJhcGlzdCJdLCJmaWxlIjoiZG9jdG9ycy9UaGVyYXBpc3QuanMifQ==
