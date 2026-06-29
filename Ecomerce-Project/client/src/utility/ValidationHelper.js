export function setEmail(email) {
    sessionStorage.setItem("email", email);
}

export function getEmail() {
    return sessionStorage.getItem("email");
}

class ValidationHelper{
    static IsEmail(value){
        let EmailRegx=/\S+@\S+/;
        return EmailRegx.test(value)
    }
    static IsEmpty(value){
        return value.length === 0;
    }

}

export default ValidationHelper