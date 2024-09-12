function MyFetchPut() {
    let usuario = {
        nombre: 'Maria',
        edad: 32
    }
    //API PUT de usuario.
    fetch('https://reqres.in/', {
        method: 'PUT',
        body: JSON.stringify(usuario), //data a enviar
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(console.log)
    .catch(error => {
        console.log('Error en la petición API PUT');
        console.log(error);
    });
    return (
        <>
            <div>
                <h1>
                    Programa para FETCH API PUT
                </h1>
            </div>
       
        </>
    );
};
export default MyFetchPut;