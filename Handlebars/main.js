const source = document.getElementById('eachHelper').innerHTML;
const template = Handlebars.compile(source);

const context = {
  newArray: ['oi', 'vc', 'esta', '4', '5', '6', '7', '8', '9', '10']
};

const compiledHtml = template(context);

const displayElements = document.getElementById('display');
displayElements.innerHTML = compiledHtml;
