


const sagas = {

}

function registerWithMiddleware(middleware) {
    for (const saga in sagas) {
        middleware.run(sagas[saga]);
    }
}

export { registerWithMiddleware };
