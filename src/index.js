
   
   
   // compile the template
    const Handlebars = require('handlebars')
    var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
    // execute the compiled template and print the output to the console
    var filled = template({ doesWhat: "my hb!" })

 document.getElementById('root').innerHTML = filled

