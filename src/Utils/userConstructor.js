export const userCreater = (userData) => {
    let date = new Date().toISOString().slice(0,10)
    let newUsers = {
        name: userData.name,
        id: 'id_' + (new Date()).getTime(),
        status: userData.status,
        phone: userData.phone,
        email: userData.email,
        password: userData.password,
        creationDate: date,
        lastModifideDate: date
    }
    return newUsers
}

export const userEditor = (newUserData, mutableUser) => {
    let date = new Date().toISOString().slice(0,10)
    let newUsers = {
        name: newUserData.name,
        id: mutableUser.id,
        status: newUserData.status,
        phone: newUserData.phone,
        email: newUserData.email,
        password: newUserData.password,
        creationDate: mutableUser.creationDate,
        lastModifideDate: date
    }
    return newUsers
}