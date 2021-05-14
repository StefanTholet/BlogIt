
export default  function hideAlertAndRedirect(setShowAlert, showAlert, history ,redirectLink) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(setShowAlert(false))
        }, 2000)
    })
        .then(res => {
            console.log('test')
            if (redirectLink) {
                if (showAlert === 'success') history.push(redirectLink)
            }
        })
}
// `/users/${userId}/profile`

