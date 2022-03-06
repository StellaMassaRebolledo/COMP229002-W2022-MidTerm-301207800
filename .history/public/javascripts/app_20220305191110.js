/* Author: Prof. Julio Vinicius A. de Carvalho
Modified by: Stella Massa Rebolledo
Student ID: 301207800
Comp 229 Midterm
*/


console.log('Goes to the client side.');

if(getTitle == "Movie List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure you want to delete?")) 
            {
                event.preventDefault();
            }
        });
    }
}