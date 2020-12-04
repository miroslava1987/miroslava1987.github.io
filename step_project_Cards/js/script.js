import {
    VisitCardiologist,
    VisitDentist,
    VisitTherapist,
} from "./doctors/index.js";
import { getAllCards } from "./ajax/ajax.js";

import { CreateBtn, EnterBtn } from "./forms/components/buttons.js";

//---------cоздание кнопки войти ----------------

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
    const token = sessionStorage.getItem("token");
    const btnContainer = document.querySelector(".header__buttons");

    if (!token) {
        btnContainer.append(EnterBtn);
    } else {
        btnContainer.append(CreateBtn);
    }
}

//---------------------создание карточек----------------------

function renderCards(data) {
    switch (data.doctor) {
        case "Терапевт":
            new VisitTherapist(data).render();
            break;
        case "Кардиолог":
            new VisitCardiologist(data).render();
            break;
        case "Дантист":
            new VisitDentist(data).render();
            break;
    }
}

const filterBtn = document.querySelector(".filter__btn");

filterBtn.addEventListener("click", async(ev) => {
    const inputSearch = document.querySelector(".filter__search").value;
    const statusVisit = document.querySelector("#time-select").value;
    const priorityVisit = document.querySelector(".filter__time > select").value;
    clearCards()
    const response = await getAllCards();

    response.data.forEach((el) => {
        const status =
            new Date() < new Date(el["date-visit"]) ? "Открыт" : "Завершен";
        const { time, ...rest } = el;

        if (time === priorityVisit && statusVisit === status) {
            if (inputSearch) {
                Object.values(rest).filter((item) => {
                    if (item === inputSearch) renderCards(el);
                });
            }
            if (!inputSearch) renderCards(el);
        }
    });
});

function clearCards() {
    const container = document.querySelector(".visit, .container");
    container.querySelectorAll(".visit-cards").forEach((card) => card.remove());
    container.querySelector('.visit__title').classList.toggle('hidden')
}
const clearBtn = document.querySelector(".filter__btn-clr");
clearBtn.addEventListener("click", clearCards);

// ------------удаление модалок вне клика на них-----------------

let modal = document.querySelector('.modal');
modal.addEventListener('click', (e) => {
    let modalWindow = document.querySelector('.modal-window');

    if (e.target.className === "modal") {
        modal.style.display = 'none';
        modalWindow.remove();
        document.body.classList.remove('scroll-hidden');
    }
})

export default renderCards;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIFZpc2l0Q2FyZGlvbG9naXN0LFxyXG4gICAgVmlzaXREZW50aXN0LFxyXG4gICAgVmlzaXRUaGVyYXBpc3QsXHJcbn0gZnJvbSBcIi4vZG9jdG9ycy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBnZXRBbGxDYXJkcyB9IGZyb20gXCIuL2FqYXgvYWpheC5qc1wiO1xyXG5cclxuaW1wb3J0IHsgQ3JlYXRlQnRuLCBFbnRlckJ0biB9IGZyb20gXCIuL2Zvcm1zL2NvbXBvbmVudHMvYnV0dG9ucy5qc1wiO1xyXG5cclxuLy8tLS0tLS0tLS1j0L7Qt9C00LDQvdC40LUg0LrQvdC+0L/QutC4INCy0L7QudGC0LggLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgb25Mb2FkKTtcclxuXHJcbmZ1bmN0aW9uIG9uTG9hZCgpIHtcclxuICAgIGNvbnN0IHRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1dHRvbnNcIik7XHJcblxyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGJ0bkNvbnRhaW5lci5hcHBlbmQoRW50ZXJCdG4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBidG5Db250YWluZXIuYXBwZW5kKENyZWF0ZUJ0bik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0t0YHQvtC30LTQsNC90LjQtSDQutCw0YDRgtC+0YfQtdC6LS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2FyZHMoZGF0YSkge1xyXG4gICAgc3dpdGNoIChkYXRhLmRvY3Rvcikge1xyXG4gICAgICAgIGNhc2UgXCLQotC10YDQsNC/0LXQstGCXCI6XHJcbiAgICAgICAgICAgIG5ldyBWaXNpdFRoZXJhcGlzdChkYXRhKS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcItCa0LDRgNC00LjQvtC70L7Qs1wiOlxyXG4gICAgICAgICAgICBuZXcgVmlzaXRDYXJkaW9sb2dpc3QoZGF0YSkucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCLQlNCw0L3RgtC40YHRglwiOlxyXG4gICAgICAgICAgICBuZXcgVmlzaXREZW50aXN0KGRhdGEpLnJlbmRlcigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2J0blwiKTtcclxuXHJcbmZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMoZXYpID0+IHtcclxuICAgIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX3NlYXJjaFwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHN0YXR1c1Zpc2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lLXNlbGVjdFwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5VmlzaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fdGltZSA+IHNlbGVjdFwiKS52YWx1ZTtcclxuICAgIGNsZWFyQ2FyZHMoKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRBbGxDYXJkcygpO1xyXG5cclxuICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPVxyXG4gICAgICAgICAgICBuZXcgRGF0ZSgpIDwgbmV3IERhdGUoZWxbXCJkYXRlLXZpc2l0XCJdKSA/IFwi0J7RgtC60YDRi9GCXCIgOiBcItCX0LDQstC10YDRiNC10L1cIjtcclxuICAgICAgICBjb25zdCB7IHRpbWUsIC4uLnJlc3QgfSA9IGVsO1xyXG5cclxuICAgICAgICBpZiAodGltZSA9PT0gcHJpb3JpdHlWaXNpdCAmJiBzdGF0dXNWaXNpdCA9PT0gc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dFNlYXJjaCkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhyZXN0KS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PT0gaW5wdXRTZWFyY2gpIHJlbmRlckNhcmRzKGVsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaW5wdXRTZWFyY2gpIHJlbmRlckNhcmRzKGVsKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjbGVhckNhcmRzKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXNpdCwgLmNvbnRhaW5lclwiKTtcclxuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpc2l0LWNhcmRzXCIpLmZvckVhY2goKGNhcmQpID0+IGNhcmQucmVtb3ZlKCkpO1xyXG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy52aXNpdF9fdGl0bGUnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxyXG59XHJcbmNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2J0bi1jbHJcIik7XHJcbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckNhcmRzKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLdGD0LTQsNC70LXQvdC40LUg0LzQvtC00LDQu9C+0Log0LLQvdC1INC60LvQuNC60LAg0L3QsCDQvdC40YUtLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGxldCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3cnKTtcclxuXHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcIm1vZGFsXCIpIHtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIG1vZGFsV2luZG93LnJlbW92ZSgpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWhpZGRlbicpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ2FyZHM7Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
