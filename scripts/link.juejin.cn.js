const params = new URLSearchParams(window.location.search);
if (params.get("target")) {
    window.location.replace(params.get("target"))
}
