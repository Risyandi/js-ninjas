const target = document.querySelector('#user');
// target.id == 'user'
// target.dataset.id === '1234567890'
// target.dataset.user === 'johndoe'
// target.dataset.dateOfBirth === ''

// set the data attribute
el.dataset.dateOfBirth = '1960-10-03'; 
// Result: target.dataset.dateOfBirth === 1960-10-03

delete el.dataset.dateOfBirth;
// Result: target.dataset.dateOfBirth === undefined

// 'someDataAttr' in target.dataset === false
el.dataset.someDataAttr = 'mydata';
// Result: 'someDataAttr' in target.dataset === true