
let items = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        
        const addItem = (ev)=>{
            console.log("Hello")
            ev.preventDefault();  //to stop the form submitting
            let item = {
                Name: document.getElementById('iname').value,
                Quantity: document.getElementById('inum').value,
                Unit: document.getElementById('tbox1').value,
                Department: document.getElementById('tbox2').value,
                Notes: document.getElementById('tbox3').value
            }
            items.push(item);
            console.log(items);
           
            
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {items} );
            // let pre = document.querySelector('#msg pre');
            // pre.textContent = '\n' + JSON.stringify(items, '\t', 2);
            let output = "<tr><th>Name</th><th>Quantiy</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
            for (let i = 0; i < items.length; i++) {
                
                    output += "<tr>";
                    // output += "<td>" + item[i].SrNum + "</td>";
                    output += "<td>" + items[i].Name + "</td>";
                    output += "<td>" + items[i].Quantity + "</td>";
                    output += "<td>" + items[i].Unit + "</td>";
                    output += "<td>" + items[i].Department + "</td>";
                    output += "<td>" + items[i].Notes + "</td>";
            
             

            }

            tbl1.innerHTML = output;
            //saving to localStorage
            // localStorage.setItem("list.json", JSON.stringify(items) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('adnewbt').addEventListener('click', addItem);
        });