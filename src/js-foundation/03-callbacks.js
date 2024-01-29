//Callbacks son útiles para leer archivos o Lib de terceros
const users= [
    {
        id: 1,
        name:'John Doe', 
    },
   
    {
        id:2, 
        name: 'Jane Doe',
    }
];

//Imaginemos funcion para buscar una persona
function getUserById(id){
    const users= users.find(function(user){
        return user.id ===id;
    });
    console.log({user_user}) //ocn poner user basta

}