const person = 
[{
    firstName:"John", 
    lastName:"Doe", 
    age:46
},
{
    firstName:"Smriti", 
    lastName:"Doe", 
    age:12
},
{
    firstName:"John", 
    lastName:"Nepal", 
    age:49
},
{
    firstName:"Jasper", 
    lastName:"D", 
    age:2
},
];

function Signup (){
    return(
        <div>
            {person.filter(name => name.firstName.includes("J")).map(filteredName => (
            <li>
            {filteredName.firstName}
            </li>))}
        </div>
    ) 
}
export default Signup;