const firebaseConfig = {
    apiKey: "AIzaSyCC0UxmV_ozDfAwBMZ1q72yIs9Cqo5x-_0",
    authDomain: "form-14c97.firebaseapp.com",
    projectId: "form-14c97",
    storageBucket: "form-14c97.appspot.com",
    messagingSenderId: "1055759849927",
    appId: "1:1055759849927:web:68f0152f594bf20c5f21e2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore()

const messagesRef = firestore.collection('message')



// Reference Messages collection

// const messagesRef = firestore.database().ref('messages');


const contactForm = document.getElementById('contactform');

contactForm.addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault();

    // Get Values
    const name = getInputVal('name');
    const company = getInputVal('company');
    const email = getInputVal('email');
    const number = getInputVal('number');
    const message = getInputVal('message');

    
    // Show Alert
    document.querySelector('.alert').style.display = 'block'

    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none'
    }, 3000)
    // Save Message
    // saveMessage(name, company, email, number, message)
    
    // save from data to Firebase
    messagesRef.doc().set({
        name: name,
        company: company,
        email: email,
        number: number,
        message: message
    }).then(() => {
        console.log('Data Saved')
    }).catch((error) => {
        console.log(error)
    })


    // Reset Form
    contactForm.reset();

}


// Function to get input values

function getInputVal(id) {
    return document.getElementById(id).value;
}


// Save Messages to firebase
// function saveMessage(name, company, email, number, message){
//     const newMessageRef = messagesRef.push();

//     newMessageRef.set({
//         name: name,
//         company: company,
//         email: email,
//         number: number,
//         message: message
//     })
// }
