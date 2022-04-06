// Setting Cookie Function
export function setUser(value) {
  const d = new Date();
  d.setTime(d.getTime() + 2 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `user=${value};${expires};path=/`;
}

// Getting Cookie Function
export function getUser(defaultValue = false) {
  const name = "user=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return defaultValue;
}

// Deconsting Cookie Function
export function deleteUser() {
  const d = new Date();
  d.setTime(d.getTime() - 2 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `user=;${expires};path=/`;
}
