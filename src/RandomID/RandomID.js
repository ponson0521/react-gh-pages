
const RandomID = (length) => {
    let newname = "";
    const characters = "0123456789";
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        newname += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return newname;
}

export default RandomID;
