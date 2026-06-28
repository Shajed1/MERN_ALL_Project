export function setEmail(email){
    sessionStorage.setItem('email', email)
}
export function getEmail(){
    sessionStorage.getItem('email')
}