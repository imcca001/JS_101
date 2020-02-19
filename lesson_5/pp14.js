let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

function processGroceries(groceries){

  let capitalize = word => word[0].toUpperCase() + word.slice(1);

  let processed = Object.values(obj).map(attributes => {
    if (attributes.type === 'fruit') {
      return attributes.colors.map(char => capitalize(char));
    } else {
      return attributes['size'].toUpperCase();
    }
  });

  return processed;
}

console.log(processGroceries(obj));



