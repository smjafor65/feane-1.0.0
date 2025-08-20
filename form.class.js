class FormSubmit{
    static submitForm() {
        let form=document.getElementById("form");
        form.addEventListener("submit", function(e){
            e.preventDefault();

            let name=document.getElementById("name");
            let email=document.getElementById("email");
            let password=document.getElementById("password");
            let contact=document.getElementById("contact");
            let comment=document.getElementById("comment");
            let city=document.getElementById("city");

            let subjects="";
            let selectGender="";

            let subject=document.getElementsByName("subject");
            let gender=document.getElementsByName("gender");

            Array.from(gender).forEach((g)=>{
                if (g.checked) {
                    selectGender+=g.value ;
                }
            });
             Array.from(subject).forEach((s)=>{
                if (s.checked) {
                    subjects+=s.value +"";
                }
            });

            let w=open("","_blank","width=400, height=500");

            w.document.write(`<h5>${name.value}</h5>`);
            w.document.write(`<h5>${email.value}</h5>`);
            w.document.write(`<h5>${contact.value}</h5>`);
            w.document.write(`<h5>${password.value}</h5>`);
            w.document.write(`<h5>${city.value}</h5>`);
            w.document.write(`<h5>${subjects}</h5>`);
            w.document.write(`<h5>${selectGender}</h5>`);
            w.document.write(`<h5>${comment.value}</h5>`);
            w.document.write(`<button onclick="self.close()" >Close</buttond >`);
            w.document.write(`<button onclick="print()" >Print</buttond >`);
        });
    }
}