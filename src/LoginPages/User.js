const userData = { userName: "dev", password: "Test@12345", Name: "Dev Pandya", Age: 30 }

export function Login(userName, password) {

    if (userName === userData.userName && password === userData.password) {

        return { ErrorCode: "OK", UserData: { userName: userData.userName, Name: userData.Name, Age: userData.Age, isLoggedIn: true } };
    }
    return { ErrorCode:"InValid UserName or Password", UserData: { isLoggedIn:false}};
}

