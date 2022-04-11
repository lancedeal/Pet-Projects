// the modals
const m1 = document.getElementById('1');
const m2 = document.getElementById('2');
const m3 = document.getElementById('3');
const m4 = document.getElementById('4');
const m5 = document.getElementById('5');
const m6 = document.getElementById('6');

const m_list = [m1,m2,m3,m4,m5,m6]

// button - temp
const temp = document.getElementById('add-list').addEventListener('click',() => {
    for(let i = 0;i<m_list.length;i++){
        m_list[i].classList.add('show')
    }
})

// buttons - open

// buttons - close
const close1 = document.getElementById('close-1').addEventListener('click',() => {
    m1.classList.remove('show')
    console.log('Class List Removed')
})
const close2 = document.getElementById('close-2').addEventListener('click',() => {
    m2.classList.remove('show')
    console.log('Class List Removed')
})
const close3 = document.getElementById('close-3').addEventListener('click',() => {
    m3.classList.remove('show')
    console.log('Class List Removed')
})
const close4 = document.getElementById('close-4').addEventListener('click',() => {
    m4.classList.remove('show')
    console.log('Class List Removed')
})
const close5 = document.getElementById('close-5').addEventListener('click',() => {
    m5.classList.remove('show')
    console.log('Class List Removed')
})
const close6 = document.getElementById('close-6').addEventListener('click',() => {
    m6.classList.remove('show')
    console.log('Class List Removed')
})