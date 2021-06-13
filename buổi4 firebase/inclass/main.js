
// create data
firebase.firestore().collection("users").add({
    email: "dat9d3@gmail.com",
    password: "123",
})

// read data
// async function demo(){
//     const result = await firebase.firestore().collection("users").get()

//     result.docs.forEach((doc) => console.log(doc.data()))
// }
// demo()


// update data
async function demo(){
    const result = await firebase.firestore().collection("users").get();

    result.docs.forEach((doc) => {
        if (doc.data().email ==="dat9d3@gmail.com")
            firebase.firestore().collection("users").doc(doc.id).update({
                email: "thedat237@gmail.com",
                password: "234"
            });
    });
}
demo();

// delete data
// async function demo(){
//     const result = await firebase.firestore().collection("users").get();

//     result.docs.forEach((doc) => {
//         if (doc.data().email ==="thedat237@gmail.com")
//             firebase.firestore().collection("users").doc(doc.id).delete();
//     });
// }
// demo();

