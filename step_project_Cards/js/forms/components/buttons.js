import Element from "./element.js";
import VisitModal from "../../modals/visitModal.js";
import LoginModal from "../../modals/loginModal.js";

const createVisitWindow = document.querySelector(".modal");
const visitModal = new VisitModal().render();

const CreateBtn = new Element({
    tag: "button",
    content: "Создать визит",
    class: "btn-list__item btn-list__item--create",
}).render();

const EnterBtn = new Element({
    tag: "button",
    content: "Войти",
    class: "btn-list__item btn-list__item--sign-in",
}).render();
EnterBtn.addEventListener("click", () => {
    const loginModal = new LoginModal().render();
    createVisitWindow.append(loginModal);
    createVisitWindow.style.display = "block";
    document.body.classList.add('scroll-hidden');
});
CreateBtn.addEventListener("click", function handlerCreateBtn() {
    createVisitWindow.append(visitModal);
    createVisitWindow.style.display = "block";
    document.body.classList.add('scroll-hidden');
});

export { CreateBtn, EnterBtn }
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3Jtcy9jb21wb25lbnRzL2J1dHRvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC5qc1wiO1xyXG5pbXBvcnQgVmlzaXRNb2RhbCBmcm9tIFwiLi4vLi4vbW9kYWxzL3Zpc2l0TW9kYWwuanNcIjtcclxuaW1wb3J0IExvZ2luTW9kYWwgZnJvbSBcIi4uLy4uL21vZGFscy9sb2dpbk1vZGFsLmpzXCI7XHJcblxyXG5jb25zdCBjcmVhdGVWaXNpdFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbmNvbnN0IHZpc2l0TW9kYWwgPSBuZXcgVmlzaXRNb2RhbCgpLnJlbmRlcigpO1xyXG5cclxuY29uc3QgQ3JlYXRlQnRuID0gbmV3IEVsZW1lbnQoe1xyXG4gICAgdGFnOiBcImJ1dHRvblwiLFxyXG4gICAgY29udGVudDogXCLQodC+0LfQtNCw0YLRjCDQstC40LfQuNGCXCIsXHJcbiAgICBjbGFzczogXCJidG4tbGlzdF9faXRlbSBidG4tbGlzdF9faXRlbS0tY3JlYXRlXCIsXHJcbn0pLnJlbmRlcigpO1xyXG5cclxuY29uc3QgRW50ZXJCdG4gPSBuZXcgRWxlbWVudCh7XHJcbiAgICB0YWc6IFwiYnV0dG9uXCIsXHJcbiAgICBjb250ZW50OiBcItCS0L7QudGC0LhcIixcclxuICAgIGNsYXNzOiBcImJ0bi1saXN0X19pdGVtIGJ0bi1saXN0X19pdGVtLS1zaWduLWluXCIsXHJcbn0pLnJlbmRlcigpO1xyXG5FbnRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgbG9naW5Nb2RhbCA9IG5ldyBMb2dpbk1vZGFsKCkucmVuZGVyKCk7XHJcbiAgICBjcmVhdGVWaXNpdFdpbmRvdy5hcHBlbmQobG9naW5Nb2RhbCk7XHJcbiAgICBjcmVhdGVWaXNpdFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtaGlkZGVuJyk7XHJcbn0pO1xyXG5DcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIGhhbmRsZXJDcmVhdGVCdG4oKSB7XHJcbiAgICBjcmVhdGVWaXNpdFdpbmRvdy5hcHBlbmQodmlzaXRNb2RhbCk7XHJcbiAgICBjcmVhdGVWaXNpdFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtaGlkZGVuJyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgQ3JlYXRlQnRuLCBFbnRlckJ0biB9Il0sImZpbGUiOiJmb3Jtcy9jb21wb25lbnRzL2J1dHRvbnMuanMifQ==
