
import getElement from './utils/getElement.js'

const URL = 'https://randomuser.me/api/';

const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');

const btns = [...document.querySelectorAll('.icon')];

const getUser = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    //data destructure
    const person = data.results[0];
    const {phone,email} = person;
    const {large:image} = person.picture;
    const {password} = person.login;
    const {first,last} = person.name;
    const {dob:{age}} = person; //different way but same reuslt
    const {street:{number, name}} = person.location;

    return{
        phone,
        email,
        image,
        password,
        age,
        name: `${first} ${last}`,
        street: `${number} ${name}`,

    }
    console.log(person);
}

const showUser = () => {
    //get user from api
    getUser().then(data => console.log(data));
}
window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)

