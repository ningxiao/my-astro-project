export const isLoggedIn = (cookie: string) => {
    return cookie.indexOf('ssoid') !== -1;
}
