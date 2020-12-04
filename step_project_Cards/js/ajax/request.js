class Request {
    constructor(baseURL, headers) {
        this.baseURL = baseURL;
        this.headers = headers;
        this.response = axios.create({
            baseURL,
            headers,
        });
    }
    get(mod = "", options = {}) {
        return this.response.get(mod, options);
    }
    put(mod = "", options = {}) {
        return this.response.put(mod, options);
    }
    post(mod = "", options = {}) {
        return this.response.post(mod, options);
    }
    delete(mod = "", options = {}) {
        return this.response.delete(mod, options);
    }
}
export default Request
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhamF4L3JlcXVlc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUmVxdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihiYXNlVVJMLCBoZWFkZXJzKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gYmFzZVVSTDtcclxuICAgICAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBiYXNlVVJMLFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0KG1vZCA9IFwiXCIsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlLmdldChtb2QsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcHV0KG1vZCA9IFwiXCIsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlLnB1dChtb2QsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcG9zdChtb2QgPSBcIlwiLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZS5wb3N0KG1vZCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUobW9kID0gXCJcIiwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2UuZGVsZXRlKG1vZCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdCJdLCJmaWxlIjoiYWpheC9yZXF1ZXN0LmpzIn0=
