const getCookie = (cookieName) => {
    const cookie = {}
    document.cookie.split(';').forEach(el => {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}

export default getCookie