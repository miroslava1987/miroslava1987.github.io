import Visit from './doctor.js'
import EditVisitModal from "../modals/editVisitModal.js";
import { CardioForm } from "../forms/indexForms.js";

class VisitCardiologist extends Visit {
    constructor(visit) {
        super(visit);
        this.content.bloodPressure = visit.pressure;

        this.content.weightIndex = visit['mass-index']
        this.content.prevDiseases = visit.diseases;
        this.content.age = visit.age;
    }
    showMore() {
        super.showMoreMain();
        const moreInfo = document.createElement('div');
        moreInfo.classList.add('visit__more-info');
        moreInfo.innerHTML = `<div class="visit-cards__patient-age">
            <span class="visit-cards__patient-age-label">Возраст пациента</span>
            <span class="visit-cards__patient-age-info">${this.content.age}</span>
      </div>
      <div class="visit-cards__patient-pressure">
            <span class="visit-cards__patient-pressure-label">Обычное давление</span>
            <span class="visit-cards__patient-pressure-info">${this.content.bloodPressure}</span>
      </div>
      <div class="visit-cards__patient-diseases">
            <span class="visit-cards__patient-diseases-label">Перенесенные заболевания сердечно-сосудистой системы</span>
            <span class="visit-cards__patient-diseases-info">${this.content.prevDiseases}</span>
      </div>
      
      <div class="visit-cards__patient-weight-index">
            <span class="visit-cards__patient-weight-index-label">Индекс массы тела</span>
            <span class="visit-cards__patient-weight-index-info">${this.content.weightIndex}</span>
      </div>`;
        this._visitCard.querySelector('.visit__btn-more').after(moreInfo);
    }
    editVisit() {
        const modalWindow = super.editVisit();
        const editModal = new EditVisitModal().render(this);
        editModal.append(new CardioForm().render());
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
        modalWindow.querySelector('[name="pressure"]').value = this.bloodPressure
        modalWindow.querySelector('[name="mass-index"]').value = this.content.weightIndex
        modalWindow.querySelector('[name="diseases"]').value = this.content.prevDiseases



        modalWindow.append(
            editModal
        );

        return modalWindow;
    }


}

export default VisitCardiologist
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkb2N0b3JzL0NhcmRpby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlzaXQgZnJvbSAnLi9kb2N0b3IuanMnXHJcbmltcG9ydCBFZGl0VmlzaXRNb2RhbCBmcm9tIFwiLi4vbW9kYWxzL2VkaXRWaXNpdE1vZGFsLmpzXCI7XHJcbmltcG9ydCB7IENhcmRpb0Zvcm0gfSBmcm9tIFwiLi4vZm9ybXMvaW5kZXhGb3Jtcy5qc1wiO1xyXG5cclxuY2xhc3MgVmlzaXRDYXJkaW9sb2dpc3QgZXh0ZW5kcyBWaXNpdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aXNpdCkge1xyXG4gICAgICAgIHN1cGVyKHZpc2l0KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuYmxvb2RQcmVzc3VyZSA9IHZpc2l0LnByZXNzdXJlO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnQud2VpZ2h0SW5kZXggPSB2aXNpdFsnbWFzcy1pbmRleCddXHJcbiAgICAgICAgdGhpcy5jb250ZW50LnByZXZEaXNlYXNlcyA9IHZpc2l0LmRpc2Vhc2VzO1xyXG4gICAgICAgIHRoaXMuY29udGVudC5hZ2UgPSB2aXNpdC5hZ2U7XHJcbiAgICB9XHJcbiAgICBzaG93TW9yZSgpIHtcclxuICAgICAgICBzdXBlci5zaG93TW9yZU1haW4oKTtcclxuICAgICAgICBjb25zdCBtb3JlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1vcmVJbmZvLmNsYXNzTGlzdC5hZGQoJ3Zpc2l0X19tb3JlLWluZm8nKTtcclxuICAgICAgICBtb3JlSW5mby5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInZpc2l0LWNhcmRzX19wYXRpZW50LWFnZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc2l0LWNhcmRzX19wYXRpZW50LWFnZS1sYWJlbFwiPtCS0L7Qt9GA0LDRgdGCINC/0LDRhtC40LXQvdGC0LA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzaXQtY2FyZHNfX3BhdGllbnQtYWdlLWluZm9cIj4ke3RoaXMuY29udGVudC5hZ2V9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInZpc2l0LWNhcmRzX19wYXRpZW50LXByZXNzdXJlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzaXQtY2FyZHNfX3BhdGllbnQtcHJlc3N1cmUtbGFiZWxcIj7QntCx0YvRh9C90L7QtSDQtNCw0LLQu9C10L3QuNC1PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc2l0LWNhcmRzX19wYXRpZW50LXByZXNzdXJlLWluZm9cIj4ke3RoaXMuY29udGVudC5ibG9vZFByZXNzdXJlfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ2aXNpdC1jYXJkc19fcGF0aWVudC1kaXNlYXNlc1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc2l0LWNhcmRzX19wYXRpZW50LWRpc2Vhc2VzLWxhYmVsXCI+0J/QtdGA0LXQvdC10YHQtdC90L3Ri9C1INC30LDQsdC+0LvQtdCy0LDQvdC40Y8g0YHQtdGA0LTQtdGH0L3Qvi3RgdC+0YHRg9C00LjRgdGC0L7QuSDRgdC40YHRgtC10LzRizwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXNpdC1jYXJkc19fcGF0aWVudC1kaXNlYXNlcy1pbmZvXCI+JHt0aGlzLmNvbnRlbnQucHJldkRpc2Vhc2VzfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidmlzaXQtY2FyZHNfX3BhdGllbnQtd2VpZ2h0LWluZGV4XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzaXQtY2FyZHNfX3BhdGllbnQtd2VpZ2h0LWluZGV4LWxhYmVsXCI+0JjQvdC00LXQutGBINC80LDRgdGB0Ysg0YLQtdC70LA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzaXQtY2FyZHNfX3BhdGllbnQtd2VpZ2h0LWluZGV4LWluZm9cIj4ke3RoaXMuY29udGVudC53ZWlnaHRJbmRleH08L3NwYW4+XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgdGhpcy5fdmlzaXRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy52aXNpdF9fYnRuLW1vcmUnKS5hZnRlcihtb3JlSW5mbyk7XHJcbiAgICB9XHJcbiAgICBlZGl0VmlzaXQoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxXaW5kb3cgPSBzdXBlci5lZGl0VmlzaXQoKTtcclxuICAgICAgICBjb25zdCBlZGl0TW9kYWwgPSBuZXcgRWRpdFZpc2l0TW9kYWwoKS5yZW5kZXIodGhpcyk7XHJcbiAgICAgICAgZWRpdE1vZGFsLmFwcGVuZChuZXcgQ2FyZGlvRm9ybSgpLnJlbmRlcigpKTtcclxuICAgICAgICBtb2RhbFdpbmRvdy5hcHBlbmQoZWRpdE1vZGFsKTtcclxuICAgICAgICBtb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpLnRleHRDb250ZW50ID0gXCLQmNC30LzQtdC90LjRgtGMINCy0LjQt9C40YJcIjtcclxuICAgICAgICBtb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAnW25hbWU9XCJuYW1lXCJdJ1xyXG4gICAgICAgICkudmFsdWUgPSB0aGlzLmNvbnRlbnQucGF0aWVudEZ1bGxOYW1lO1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIG1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGltZVwiXScpLnZhbHVlID0gdGhpcy5wcmlvcml0eVxyXG4gICAgICAgIG1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZSA9IHRoaXMuZGVzY3JpcHRpb25cclxuXHJcbiAgICAgICAgbW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignW25hbWU9XCJwdXJwb3NlXCJdJykudmFsdWUgPSB0aGlzLnRpdGxlXHJcblxyXG4gICAgICAgIG1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGF0ZS12aXNpdFwiXScpLnZhbHVlID0gdGhpcy5jb250ZW50LnZpc2l0RGF0ZVxyXG4gICAgICAgIG1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYWdlXCJdJykudmFsdWUgPSB0aGlzLmNvbnRlbnQuYWdlXHJcbiAgICAgICAgbW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmVzc3VyZVwiXScpLnZhbHVlID0gdGhpcy5ibG9vZFByZXNzdXJlXHJcbiAgICAgICAgbW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignW25hbWU9XCJtYXNzLWluZGV4XCJdJykudmFsdWUgPSB0aGlzLmNvbnRlbnQud2VpZ2h0SW5kZXhcclxuICAgICAgICBtb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRpc2Vhc2VzXCJdJykudmFsdWUgPSB0aGlzLmNvbnRlbnQucHJldkRpc2Vhc2VzXHJcblxyXG5cclxuXHJcbiAgICAgICAgbW9kYWxXaW5kb3cuYXBwZW5kKFxyXG4gICAgICAgICAgICBlZGl0TW9kYWxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gbW9kYWxXaW5kb3c7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlzaXRDYXJkaW9sb2dpc3QiXSwiZmlsZSI6ImRvY3RvcnMvQ2FyZGlvLmpzIn0=
