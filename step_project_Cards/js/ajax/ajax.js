import Request from "./request.js";

async function login() {
    const form = document.querySelector(".enter-window__form");
    const email = form.querySelector('[type="email"]').value;
    const password = form.querySelector('[type="password"]').value;

    const data = await new Request("http://cards.danit.com.ua").post("/login", {
        email,
        password,
    });
    if (data.data.message === "Login or password are incorrect")
        alert(data.data.message);
    else {
        const token = data.data.token;
        sessionStorage.setItem("token", token);
    }

}

//------------------запрос на создание карточки-------

const baseUrl = new Request("http://cards.danit.com.ua", {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
});

async function saveVisitOnBase(visit) {
    const data = await baseUrl.post("/cards", visit);


  
    return data.data;
}

// --------------- удаление карточки----------------------

async function deleteCard(id) {
    
    const response = await baseUrl.delete(`/cards/${id}`);
    return response;
}

//-----------------получение всех карточек -------------------
async function getAllCards() {

    const response = await baseUrl.get("/cards");
    return response;
}

async function getCard(id) {
    const response = await baseUrl.get(`/cards/${+id}`, );
    return response;
}

async function editVisitOnBase(id, data) {
    const response = await baseUrl.put(`/cards/${id}`, data);
    return response;
}
export { login, saveVisitOnBase, getAllCards, getCard, deleteCard, editVisitOnBase };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhamF4L2FqYXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdC5qc1wiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9naW4oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbnRlci13aW5kb3dfX2Zvcm1cIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW3R5cGU9XCJlbWFpbFwiXScpLnZhbHVlO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwicGFzc3dvcmRcIl0nKS52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgbmV3IFJlcXVlc3QoXCJodHRwOi8vY2FyZHMuZGFuaXQuY29tLnVhXCIpLnBvc3QoXCIvbG9naW5cIiwge1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZGF0YS5kYXRhLm1lc3NhZ2UgPT09IFwiTG9naW4gb3IgcGFzc3dvcmQgYXJlIGluY29ycmVjdFwiKVxyXG4gICAgICAgIGFsZXJ0KGRhdGEuZGF0YS5tZXNzYWdlKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gZGF0YS5kYXRhLnRva2VuO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLdC30LDQv9GA0L7RgSDQvdCwINGB0L7Qt9C00LDQvdC40LUg0LrQsNGA0YLQvtGH0LrQuC0tLS0tLS1cclxuXHJcbmNvbnN0IGJhc2VVcmwgPSBuZXcgUmVxdWVzdChcImh0dHA6Ly9jYXJkcy5kYW5pdC5jb20udWFcIiwge1xyXG4gICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Nlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKX1gLFxyXG59KTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmVWaXNpdE9uQmFzZSh2aXNpdCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGJhc2VVcmwucG9zdChcIi9jYXJkc1wiLCB2aXNpdCk7XHJcblxyXG5cclxuICBcclxuICAgIHJldHVybiBkYXRhLmRhdGE7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLSDRg9C00LDQu9C10L3QuNC1INC60LDRgNGC0L7Rh9C60LgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5hc3luYyBmdW5jdGlvbiBkZWxldGVDYXJkKGlkKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYmFzZVVybC5kZWxldGUoYC9jYXJkcy8ke2lkfWApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0t0L/QvtC70YPRh9C10L3QuNC1INCy0YHQtdGFINC60LDRgNGC0L7Rh9C10LogLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxDYXJkcygpIHtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJhc2VVcmwuZ2V0KFwiL2NhcmRzXCIpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRDYXJkKGlkKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJhc2VVcmwuZ2V0KGAvY2FyZHMvJHsraWR9YCwgKTtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZWRpdFZpc2l0T25CYXNlKGlkLCBkYXRhKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJhc2VVcmwucHV0KGAvY2FyZHMvJHtpZH1gLCBkYXRhKTtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxufVxyXG5leHBvcnQgeyBsb2dpbiwgc2F2ZVZpc2l0T25CYXNlLCBnZXRBbGxDYXJkcywgZ2V0Q2FyZCwgZGVsZXRlQ2FyZCwgZWRpdFZpc2l0T25CYXNlIH07Il0sImZpbGUiOiJhamF4L2FqYXguanMifQ==
