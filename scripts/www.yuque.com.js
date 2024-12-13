const params = new URLSearchParams(window.location.search);
if (params.get("url")) {
    window.location.replace(params.get("url"))
}
