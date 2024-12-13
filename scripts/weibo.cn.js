const params = new URLSearchParams(window.location.search);
if (params.get("u")) {
    window.location.replace(params.get("u"))
}
