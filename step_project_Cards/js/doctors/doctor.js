import { deleteCard } from "../ajax/ajax.js"

class Visit {
    constructor(visit) {
        this.doctor = visit.doctor;
        this.title = visit.purpose;
        this.description = visit.description;
        this.priority = visit.time;
        this.id = visit.id;
        this.content = {};
        this.content.patientFullName = visit.name;
        this.content.visitDate = visit['date-visit'];
        this.status = new Date() < new Date(this.content.visitDate) ? 'Открыт' : 'Завершен';
        this._visitCard = null;
    }

    render(elem) {
        const container = document.querySelector('.visit');
        const noVisitsMsg = document.querySelector('.visit__title');
        noVisitsMsg ? noVisitsMsg.classList.add('hidden') : "";
        const visitCard = document.createElement('div');
        visitCard.classList.add('visit-cards');
        visitCard.id = this.id;
        this._visitCard = visitCard;

        visitCard.innerHTML = `
            <div class="visit-cards__doctor">
                <span class="visit-cards__doctor-title">${this.doctor}</span>
            </div>
            <div class="visit-cards__patient">
                <div class="visit-cards__patient-name">
                    <span class="visit-cards__patient-name-label">ФИО пациента:</span>
                    <span class="visit-cards__patient-name-name">${this.content.patientFullName}</span>
                </div>
                <div class="visit-cards__patient-title hide">
                    <span class="visit-cards__patient-title-label">Цель визита</span>
                    <span class="visit-cards__patient-title-subtitle">${this.title}</span>
                </div>
                <div class="visit-cards__patient-description hide">
                    <span class="visit-cards__patient-description-label">Краткое описание визита</span>
                    <span class="visit-cards__patient-description-info">${this.description}</span>
                </div>
                <div class="visit-cards__patient-priority hide">
                    <span class="visit-cards__patient-priority-label">Срочность визита</span>
                    <span class="visit-cards__patient-priority-info">${this.priority}</span>
                </div>
                <div class="visit-cards__patient-status hide">
                    <span class="visit-cards__patient-status-label">Статус визита</span>
                    <span class="visit-cards__patient-status-info">${this.status}</span>
                </div>
                <div class="visit-cards__patient-visit-date hide">
                    <span class="visit-cards__patient-visit-date-label">Дата визита</span>
                    <span class="visit-cards__patient-visit-date-info">${this.content.visitDate}</span>
                </div>    
                <button class="visit__btn-more">Подробнее о приеме <i class="zmdi zmdi-chevron-down"></i></button>
                <div class="visit__options">
                    <button class="visit__options--edit-btn options-btn">Редактировать</button>
                </div>
                <i class="fas fa-edit visit__options--btn-edit"></i>
                <i class="fas fa-trash-alt visit__options--btn-delete"></i>
            </div>
        </div>`;

        container.prepend(visitCard);

        const showMoreBtn = visitCard.querySelector('.visit__btn-more');
        showMoreBtn.addEventListener('click', () => this.showMore());

        const visitOptionsBtn = visitCard.querySelector('.visit__options--btn-edit');
        visitOptionsBtn.addEventListener('click', () => this.showOptions(visitOptionsBtn));

        const visitDeleteBtn = visitCard.querySelector('.visit__options--btn-delete');
        visitDeleteBtn.addEventListener('click', () => this.deleteVisit());

        const visitEditBtn = visitCard.querySelector('.visit__options--edit-btn');
        visitEditBtn.addEventListener('click', () => {
            this.editVisit();
            document.body.classList.add('scroll-hidden');
        });

        if (this.status === 'Завершен') {
            this._visitCard.classList.add('finished');
        }
        const cardTitle = this._visitCard.querySelector('.visit-cards__doctor')
        if (this.doctor === 'Кардиолог') {
            cardTitle.classList.add('visit-cards__doctor--red');
        }
        if (this.doctor === 'Дантист') {
            cardTitle.classList.add('visit-cards__doctor--blue')
        }
        if (this.doctor === 'Терапевт') {
            cardTitle.classList.add('visit-cards__doctor--green');
        }
    }

    showMoreMain() {
        this._visitCard.querySelector('.visit-cards__patient-title').classList.remove('hide');
        this._visitCard.querySelector('.visit-cards__patient-description').classList.remove('hide');
        this._visitCard.querySelector('.visit-cards__patient-status').classList.remove('hide');
        this._visitCard.querySelector('.visit-cards__patient-priority').classList.remove('hide');
        this._visitCard.querySelector('.visit-cards__patient-visit-date').classList.remove('hide');

        const showMoreBtn = this._visitCard.querySelector('.visit__btn-more');
        showMoreBtn.classList.add('hidden');

        const showLessBtn = document.createElement('button');
        showLessBtn.classList.add('visit__btn-less');
        showLessBtn.innerHTML = `Скрыть подробности <i class="zmdi zmdi-chevron-up"></i>`;

        showLessBtn.addEventListener('click', () => this.showLess(showMoreBtn, showLessBtn));
        this._visitCard.append(showLessBtn);

    }
    showLess(showMoreBtn, showLessBtn) {
        showLessBtn.remove();
        this._visitCard.querySelector('.visit__more-info').remove();
        showMoreBtn.classList.remove('hidden');
        this._visitCard.querySelector('.visit-cards__patient-title').classList.add('hide');
        this._visitCard.querySelector('.visit-cards__patient-description').classList.add('hide');
        this._visitCard.querySelector('.visit-cards__patient-status').classList.add('hide');
        this._visitCard.querySelector('.visit-cards__patient-priority').classList.add('hide');
        this._visitCard.querySelector('.visit-cards__patient-visit-date').classList.add('hide');
    }

    showOptions(visitOptionsBtn) {
        visitOptionsBtn.classList.toggle('visit__options-btn--active');
        const optionBtnArr = this._visitCard.querySelectorAll('.options-btn');
        optionBtnArr.forEach(el => el.classList.toggle('btn_active'));
    }

    deleteVisit() {
        deleteCard(this.id).then(() => {
            this._visitCard.remove();
        });
        this._visitCard.remove();
    }
    editVisit() {
        const createVisitWindow = document.querySelector(".modal");
        createVisitWindow.style.display = "block";
        return createVisitWindow
    }

    static renderAllCards(cards) {
        document.querySelectorAll('.visit-cards').forEach(e => {
            e.remove();
        });
    }
}


export default Visit
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkb2N0b3JzL2RvY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWxldGVDYXJkIH0gZnJvbSBcIi4uL2FqYXgvYWpheC5qc1wiXHJcblxyXG5jbGFzcyBWaXNpdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aXNpdCkge1xyXG4gICAgICAgIHRoaXMuZG9jdG9yID0gdmlzaXQuZG9jdG9yO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB2aXNpdC5wdXJwb3NlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2aXNpdC5kZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gdmlzaXQudGltZTtcclxuICAgICAgICB0aGlzLmlkID0gdmlzaXQuaWQ7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0ge307XHJcbiAgICAgICAgdGhpcy5jb250ZW50LnBhdGllbnRGdWxsTmFtZSA9IHZpc2l0Lm5hbWU7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LnZpc2l0RGF0ZSA9IHZpc2l0WydkYXRlLXZpc2l0J107XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBuZXcgRGF0ZSgpIDwgbmV3IERhdGUodGhpcy5jb250ZW50LnZpc2l0RGF0ZSkgPyAn0J7RgtC60YDRi9GCJyA6ICfQl9Cw0LLQtdGA0YjQtdC9JztcclxuICAgICAgICB0aGlzLl92aXNpdENhcmQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihlbGVtKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2l0Jyk7XHJcbiAgICAgICAgY29uc3Qgbm9WaXNpdHNNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlzaXRfX3RpdGxlJyk7XHJcbiAgICAgICAgbm9WaXNpdHNNc2cgPyBub1Zpc2l0c01zZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgdmlzaXRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmlzaXRDYXJkLmNsYXNzTGlzdC5hZGQoJ3Zpc2l0LWNhcmRzJyk7XHJcbiAgICAgICAgdmlzaXRDYXJkLmlkID0gdGhpcy5pZDtcclxuICAgICAgICB0aGlzLl92aXNpdENhcmQgPSB2aXNpdENhcmQ7XHJcblxyXG4gICAgICAgIHZpc2l0Q2FyZC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aXNpdC1jYXJkc19fZG9jdG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc2l0LWNhcmRzX19kb2N0b3ItdGl0bGVcIj4ke3RoaXMuZG9jdG9yfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aXNpdC1jYXJkc19fcGF0aWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpc2l0LWNhcmRzX19wYXRpZW50LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc2l0LWNhcmRzX19wYXRpZW50LW5hbWUtbGFiZWxcIj7QpNCY0J4g0L/QsNGG0LjQtdC90YLQsDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXNpdC1jYXJkc19fcGF0aWVudC1uYW1lLW5hbWVcIj4ke3RoaXMuY29udGVudC5wYXRpZW50RnVsbE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlzaXQtY2FyZHNfX3BhdGllbnQtdGl0bGUgaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzaXQtY2FyZHNfX3BhdGllbnQtdGl0bGUtbGFiZWxcIj7QptC10LvRjCDQstC40LfQuNGC0LA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXNpdC1jYXJkc19fcGF0aWVudC10aXRsZS1zdWJ0aXRsZVwiPiR7dGhpcy50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aXNpdC1jYXJkc19fcGF0aWVudC1kZXNjcmlwdGlvbiBoaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXNpdC1jYXJkc19fcGF0aWVudC1kZXNjcmlwdGlvbi1sYWJlbFwiPtCa0YDQsNGC0LrQvtC1INC+0L/QuNGB0LDQvdC40LUg0LLQuNC30LjRgtCwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzaXQtY2FyZHNfX3BhdGllbnQtZGVzY3JpcHRpb24taW5mb1wiPiR7dGhpcy5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aXNpdC1jYXJkc19fcGF0aWVudC1wcmlvcml0eSBoaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXNpdC1jYXJkc19fcGF0aWVudC1wcmlvcml0eS1sYWJlbFwiPtCh0YDQvtGH0L3QvtGB0YLRjCDQstC40LfQuNGC0LA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXNpdC1jYXJkc19fcGF0aWVudC1wcmlvcml0eS1pbmZvXCI+JHt0aGlzLnByaW9yaXR5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpc2l0LWNhcmRzX19wYXRpZW50LXN0YXR1cyBoaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXNpdC1jYXJkc19fcGF0aWVudC1zdGF0dXMtbGFiZWxcIj7QodGC0LDRgtGD0YEg0LLQuNC30LjRgtCwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzaXQtY2FyZHNfX3BhdGllbnQtc3RhdHVzLWluZm9cIj4ke3RoaXMuc3RhdHVzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpc2l0LWNhcmRzX19wYXRpZW50LXZpc2l0LWRhdGUgaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzaXQtY2FyZHNfX3BhdGllbnQtdmlzaXQtZGF0ZS1sYWJlbFwiPtCU0LDRgtCwINCy0LjQt9C40YLQsDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc2l0LWNhcmRzX19wYXRpZW50LXZpc2l0LWRhdGUtaW5mb1wiPiR7dGhpcy5jb250ZW50LnZpc2l0RGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidmlzaXRfX2J0bi1tb3JlXCI+0J/QvtC00YDQvtCx0L3QtdC1INC+INC/0YDQuNC10LzQtSA8aSBjbGFzcz1cInptZGkgem1kaS1jaGV2cm9uLWRvd25cIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlzaXRfX29wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidmlzaXRfX29wdGlvbnMtLWVkaXQtYnRuIG9wdGlvbnMtYnRuXCI+0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZWRpdCB2aXNpdF9fb3B0aW9ucy0tYnRuLWVkaXRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10cmFzaC1hbHQgdmlzaXRfX29wdGlvbnMtLWJ0bi1kZWxldGVcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5wcmVwZW5kKHZpc2l0Q2FyZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dNb3JlQnRuID0gdmlzaXRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy52aXNpdF9fYnRuLW1vcmUnKTtcclxuICAgICAgICBzaG93TW9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc2hvd01vcmUoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpc2l0T3B0aW9uc0J0biA9IHZpc2l0Q2FyZC5xdWVyeVNlbGVjdG9yKCcudmlzaXRfX29wdGlvbnMtLWJ0bi1lZGl0Jyk7XHJcbiAgICAgICAgdmlzaXRPcHRpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zaG93T3B0aW9ucyh2aXNpdE9wdGlvbnNCdG4pKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmlzaXREZWxldGVCdG4gPSB2aXNpdENhcmQucXVlcnlTZWxlY3RvcignLnZpc2l0X19vcHRpb25zLS1idG4tZGVsZXRlJyk7XHJcbiAgICAgICAgdmlzaXREZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmRlbGV0ZVZpc2l0KCkpO1xyXG5cclxuICAgICAgICBjb25zdCB2aXNpdEVkaXRCdG4gPSB2aXNpdENhcmQucXVlcnlTZWxlY3RvcignLnZpc2l0X19vcHRpb25zLS1lZGl0LWJ0bicpO1xyXG4gICAgICAgIHZpc2l0RWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lZGl0VmlzaXQoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtaGlkZGVuJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ9CX0LDQstC10YDRiNC10L0nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Zpc2l0Q2FyZC5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSB0aGlzLl92aXNpdENhcmQucXVlcnlTZWxlY3RvcignLnZpc2l0LWNhcmRzX19kb2N0b3InKVxyXG4gICAgICAgIGlmICh0aGlzLmRvY3RvciA9PT0gJ9Ca0LDRgNC00LjQvtC70L7QsycpIHtcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Zpc2l0LWNhcmRzX19kb2N0b3ItLXJlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kb2N0b3IgPT09ICfQlNCw0L3RgtC40YHRgicpIHtcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Zpc2l0LWNhcmRzX19kb2N0b3ItLWJsdWUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kb2N0b3IgPT09ICfQotC10YDQsNC/0LXQstGCJykge1xyXG4gICAgICAgICAgICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgndmlzaXQtY2FyZHNfX2RvY3Rvci0tZ3JlZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01vcmVNYWluKCkge1xyXG4gICAgICAgIHRoaXMuX3Zpc2l0Q2FyZC5xdWVyeVNlbGVjdG9yKCcudmlzaXQtY2FyZHNfX3BhdGllbnQtdGl0bGUnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgdGhpcy5fdmlzaXRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy52aXNpdC1jYXJkc19fcGF0aWVudC1kZXNjcmlwdGlvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICB0aGlzLl92aXNpdENhcmQucXVlcnlTZWxlY3RvcignLnZpc2l0LWNhcmRzX19wYXRpZW50LXN0YXR1cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICB0aGlzLl92aXNpdENhcmQucXVlcnlTZWxlY3RvcignLnZpc2l0LWNhcmRzX19wYXRpZW50LXByaW9yaXR5JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIHRoaXMuX3Zpc2l0Q2FyZC5xdWVyeVNlbGVjdG9yKCcudmlzaXQtY2FyZHNfX3BhdGllbnQtdmlzaXQtZGF0ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd01vcmVCdG4gPSB0aGlzLl92aXNpdENhcmQucXVlcnlTZWxlY3RvcignLnZpc2l0X19idG4tbW9yZScpO1xyXG4gICAgICAgIHNob3dNb3JlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93TGVzc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHNob3dMZXNzQnRuLmNsYXNzTGlzdC5hZGQoJ3Zpc2l0X19idG4tbGVzcycpO1xyXG4gICAgICAgIHNob3dMZXNzQnRuLmlubmVySFRNTCA9IGDQodC60YDRi9GC0Ywg0L/QvtC00YDQvtCx0L3QvtGB0YLQuCA8aSBjbGFzcz1cInptZGkgem1kaS1jaGV2cm9uLXVwXCI+PC9pPmA7XHJcblxyXG4gICAgICAgIHNob3dMZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zaG93TGVzcyhzaG93TW9yZUJ0biwgc2hvd0xlc3NCdG4pKTtcclxuICAgICAgICB0aGlzLl92aXNpdENhcmQuYXBwZW5kKHNob3dMZXNzQnRuKTtcclxuXHJcbiAgICB9XHJcbiAgICBzaG93TGVzcyhzaG93TW9yZUJ0biwgc2hvd0xlc3NCdG4pIHtcclxuICAgICAgICBzaG93TGVzc0J0bi5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLl92aXNpdENhcmQucXVlcnlTZWxlY3RvcignLnZpc2l0X19tb3JlLWluZm8nKS5yZW1vdmUoKTtcclxuICAgICAgICBzaG93TW9yZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB0aGlzLl92aXNpdENhcmQucXVlcnlTZWxlY3RvcignLnZpc2l0LWNhcmRzX19wYXRpZW50LXRpdGxlJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIHRoaXMuX3Zpc2l0Q2FyZC5xdWVyeVNlbGVjdG9yKCcudmlzaXQtY2FyZHNfX3BhdGllbnQtZGVzY3JpcHRpb24nKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgdGhpcy5fdmlzaXRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy52aXNpdC1jYXJkc19fcGF0aWVudC1zdGF0dXMnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgdGhpcy5fdmlzaXRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy52aXNpdC1jYXJkc19fcGF0aWVudC1wcmlvcml0eScpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICB0aGlzLl92aXNpdENhcmQucXVlcnlTZWxlY3RvcignLnZpc2l0LWNhcmRzX19wYXRpZW50LXZpc2l0LWRhdGUnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd09wdGlvbnModmlzaXRPcHRpb25zQnRuKSB7XHJcbiAgICAgICAgdmlzaXRPcHRpb25zQnRuLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2l0X19vcHRpb25zLWJ0bi0tYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uQnRuQXJyID0gdGhpcy5fdmlzaXRDYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb25zLWJ0bicpO1xyXG4gICAgICAgIG9wdGlvbkJ0bkFyci5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2J0bl9hY3RpdmUnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVmlzaXQoKSB7XHJcbiAgICAgICAgZGVsZXRlQ2FyZCh0aGlzLmlkKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdmlzaXRDYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Zpc2l0Q2FyZC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIGVkaXRWaXNpdCgpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVWaXNpdFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbiAgICAgICAgY3JlYXRlVmlzaXRXaW5kb3cuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICByZXR1cm4gY3JlYXRlVmlzaXRXaW5kb3dcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVuZGVyQWxsQ2FyZHMoY2FyZHMpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlzaXQtY2FyZHMnKS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICBlLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlzaXQiXSwiZmlsZSI6ImRvY3RvcnMvZG9jdG9yLmpzIn0=
