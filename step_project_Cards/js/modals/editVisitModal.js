import { Element } from "../forms/components/index.js";


import Modal from "./modal.js";
import renderCards from "../script.js";
import { editVisitOnBase } from "../ajax/ajax.js";

class EditVisitModal extends Modal {
    title = {
        tag: "h3",
        class: "modal-title",
        content: "Изменить визит",
    };

    render(card) {
        const { title } = this;
        const modalWindow = super.render();

        modalWindow.append(new Element(title).render());

        modalWindow.classList.add("visit-modal");

        modalWindow.addEventListener("submit", async function editVisit(ev) {
            document.body.classList.remove('scroll-hidden');
            ev.preventDefault();
            let visit = {};
            visit.doctor = card.doctor;
            this.querySelectorAll("input, textarea, select").forEach((elem) => {
                visit[elem.name] = elem.value;
            });
            this.closest("#create-modal-window").style.display = "none";

            this.remove();
            const data = await editVisitOnBase(card.id, visit);

            document.getElementById(`${card.id}`).remove()

            renderCards(data.data);

        });
        return modalWindow;
    }
}
export default EditVisitModal;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RhbHMvZWRpdFZpc2l0TW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9mb3Jtcy9jb21wb25lbnRzL2luZGV4LmpzXCI7XHJcblxyXG5cclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL21vZGFsLmpzXCI7XHJcbmltcG9ydCByZW5kZXJDYXJkcyBmcm9tIFwiLi4vc2NyaXB0LmpzXCI7XHJcbmltcG9ydCB7IGVkaXRWaXNpdE9uQmFzZSB9IGZyb20gXCIuLi9hamF4L2FqYXguanNcIjtcclxuXHJcbmNsYXNzIEVkaXRWaXNpdE1vZGFsIGV4dGVuZHMgTW9kYWwge1xyXG4gICAgdGl0bGUgPSB7XHJcbiAgICAgICAgdGFnOiBcImgzXCIsXHJcbiAgICAgICAgY2xhc3M6IFwibW9kYWwtdGl0bGVcIixcclxuICAgICAgICBjb250ZW50OiBcItCY0LfQvNC10L3QuNGC0Ywg0LLQuNC30LjRglwiLFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoY2FyZCkge1xyXG4gICAgICAgIGNvbnN0IHsgdGl0bGUgfSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgbW9kYWxXaW5kb3cgPSBzdXBlci5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgbW9kYWxXaW5kb3cuYXBwZW5kKG5ldyBFbGVtZW50KHRpdGxlKS5yZW5kZXIoKSk7XHJcblxyXG4gICAgICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoXCJ2aXNpdC1tb2RhbFwiKTtcclxuXHJcbiAgICAgICAgbW9kYWxXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbiBlZGl0VmlzaXQoZXYpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCB2aXNpdCA9IHt9O1xyXG4gICAgICAgICAgICB2aXNpdC5kb2N0b3IgPSBjYXJkLmRvY3RvcjtcclxuICAgICAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmlzaXRbZWxlbS5uYW1lXSA9IGVsZW0udmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3Nlc3QoXCIjY3JlYXRlLW1vZGFsLXdpbmRvd1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZWRpdFZpc2l0T25CYXNlKGNhcmQuaWQsIHZpc2l0KTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2NhcmQuaWR9YCkucmVtb3ZlKClcclxuXHJcbiAgICAgICAgICAgIHJlbmRlckNhcmRzKGRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBtb2RhbFdpbmRvdztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBFZGl0VmlzaXRNb2RhbDsiXSwiZmlsZSI6Im1vZGFscy9lZGl0VmlzaXRNb2RhbC5qcyJ9
