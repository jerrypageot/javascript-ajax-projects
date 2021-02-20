const URL = 'https://randomuser.me/api/';

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

    };
}

export default getUser;