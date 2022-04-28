
var currentContact = {
    name:'',
    phoneNumber:'',
    address:'',
    email:''
}
const modal = document.getElementById('contact-modal')
const modalText = document.getElementById('modal-text')
const modalClose = document.getElementById('close-2').addEventListener('click', closeModal)

const searchBar = document.getElementById('search-bar')
const searchBtn = document.getElementById('search-btn').addEventListener('click', filter)

const searchModal = document.getElementById('search-modal')
const searchName = document.getElementById('search-text')
const searchPhone = document.getElementById('search-phone')
const searchAddress = document.getElementById('search-address')
const searchEmail = document.getElementById('search-email')
const searchClose = document.getElementById('close-1').addEventListener('click', closeSearch)

var aList = []
var bList = []
var cList = []
var dList = []
var eList = []
var fList = []
var gList = []
var hList = []
var iList = []
var jList = []
var kList = []
var lList = []
var mList = []
var nList = []
var oList = []
var pList = []
var qList = []
var rList = []
var sList = []
var tList = []
var uList = []
var vList = []
var wList = []
var xList = []
var yList = []
var zList = []
const contactList = [aList,bList,cList,dList,eList,fList,gList,hList,iList,jList,kList,lList,mList,nList,oList,pList,qList,rList,sList,tList,uList,vList,wList,xList,yList,zList]
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const A = document.getElementById('i-a').addEventListener('click', () => { updateModalText(aList) })
const B = document.getElementById('i-b').addEventListener('click', () => { updateModalText(bList) })
const C = document.getElementById('i-c').addEventListener('click', () => { updateModalText(cList) })
const D = document.getElementById('i-d').addEventListener('click', () => { updateModalText(dList) })
const E = document.getElementById('i-e').addEventListener('click', () => { updateModalText(eList) })
const F = document.getElementById('i-f').addEventListener('click', () => { updateModalText(fList) })
const G = document.getElementById('i-g').addEventListener('click', () => { updateModalText(gList) })
const H = document.getElementById('i-h').addEventListener('click', () => { updateModalText(hList) })
const I = document.getElementById('i-i').addEventListener('click', () => { updateModalText(iList) })
const J = document.getElementById('i-j').addEventListener('click', () => { updateModalText(jList) })
const K = document.getElementById('i-k').addEventListener('click', () => { updateModalText(kList) })
const L = document.getElementById('i-l').addEventListener('click', () => { updateModalText(lList) })
const M = document.getElementById('i-m').addEventListener('click', () => { updateModalText(mList) })
const N = document.getElementById('i-n').addEventListener('click', () => { updateModalText(nList) })
const O = document.getElementById('i-o').addEventListener('click', () => { updateModalText(oList) })
const P = document.getElementById('i-p').addEventListener('click', () => { updateModalText(pList) })
const Q = document.getElementById('i-q').addEventListener('click', () => { updateModalText(qList) })
const R = document.getElementById('i-r').addEventListener('click', () => { updateModalText(rList) })
const S = document.getElementById('i-s').addEventListener('click', () => { updateModalText(sList) })
const T = document.getElementById('i-t').addEventListener('click', () => { updateModalText(tList) })
const U = document.getElementById('i-u').addEventListener('click', () => { updateModalText(uList) })
const V = document.getElementById('i-v').addEventListener('click', () => { updateModalText(vList) })
const W = document.getElementById('i-w').addEventListener('click', () => { updateModalText(wList) })
const X = document.getElementById('i-x').addEventListener('click', () => { updateModalText(xList) })
const Y = document.getElementById('i-y').addEventListener('click', () => { updateModalText(yList) })
const Z = document.getElementById('i-z').addEventListener('click', () => { updateModalText(zList) })

const firstNames = ['Aapo','Aaron','Aart','Amy','Agnes','Aliza','Bart','Balzac','Baptiste','Caden','Charlie','Caesar','Diego','Daisy','Daffodil','Eagle','Edgar','Eustice','Felix','Femi','Gabby','Gauge','Hai','Hang','Ian','Ira','Jackie','John','Kelly','Keiran','Luke','Landon','Marcy','Mike','Nella','Nutella','Orange','Odey','Park','Percy','Quasar','Renelle','Randy','Steve','Stegosaur','Truistan','Terry','Uganda','Uaams','Victoria','Veronica','Willy','Wanda','Xilophone','Yelena']
const lastNames = ['Garcia','Smith','Johnson','Williams','Brown','Miller','Davis','Rodriguez','Martinez','Rivera','Jones','Hernandez','Lopez','Gonzalez','Wilson','Anderson','Thomas','Taylor','Moor','Martin','Jackson','Lee']
const emails = ['gmail','hotmail']
const streets = ['Main Street','Elm Street','Maple Street','Maple Avenue','Liberty Street','3rd Avenue','Broadway','Mill Road','Dogwood Lane','College Street','Sunset Drive']


var enabled = false;

// add event listener to each index
const totalList = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]

// functions
function updateModal(){
    if(!enabled){
        enabled = true
        modal.classList.remove('hidden')
    }
}

function closeModal(){
    enabled = false
    modal.classList.add('hidden')
}

function randomNumber(min,max){
    let number = Math.floor(Math.random() * (max - min) + min)
    return number
}

function generateContacts(list,letter){

    let currentLetter = []
    for(let namegrabber = 0; namegrabber < firstNames.length; namegrabber++){
        let firstLetter = firstNames[namegrabber].slice(0,1)
        if(firstLetter.toLowerCase() == letter){
            currentLetter.push(firstNames[namegrabber])
        }
    }
    
    for(let current of currentLetter){
        console.log(current)
    }

    let firstName = currentLetter[randomNumber(0,(currentLetter.length))]
    if(!firstName){
        modalText.textContent = 'Contact List is Empty'
        return
    }
    let lastName = lastNames[randomNumber(0,(lastNames.length - 1))]
    let fullName = `${firstName} ${lastName}`
    let cellNumber = `(${randomNumber(0,9)}${randomNumber(0,9)}${randomNumber(0,9)}) ${randomNumber(0,9)}${randomNumber(0,9)}${randomNumber(0,9)} - ${randomNumber(0,9)}${randomNumber(0,9)}${randomNumber(0,9)}${randomNumber(0,9)}`
    let address_ = `${randomNumber(1,50)}0 ${streets[randomNumber(0,(streets.length - 1))]}`
    let email = `${firstName.toLowerCase()}${lastName.toLowerCase()}@${emails[randomNumber(0,1)]}.com`

    let newObject = {
        name:fullName,
        phoneNumber:cellNumber,
        address:address_,
        email:email
    }
    list.push(newObject)
}

function initiate(){
    // iterates through the contact List and provides arguments for the generator
    for(let i = 0; i < contactList.length; i++){
        var listLength = randomNumber(0,5)
        // create a new contact a random amount of times
        for(let k = 0; k < listLength; k++){
            generateContacts(contactList[i],alphabet[i])
        }
    }
}

function updateModalText(list){
    deleteModal()
    if(!list.length){
        modalText.textContent = "Contact List is Empty"
    }
    else{
        modalText.textContent = ''
        for(let j of list){

            const newSpan = document.createElement('span')
            newSpan.classList.add('modal-item')

            const spanName = document.createElement('div')
            spanName.textContent = j.name
            const spanPhone = document.createElement('div')
            spanPhone.textContent = j.phoneNumber
            const spanAddress = document.createElement('div')
            spanAddress.textContent = j.address
            const spanEmail = document.createElement('div')
            spanEmail.textContent = j.email

            newSpan.appendChild(spanName)
            newSpan.appendChild(spanPhone)
            newSpan.appendChild(spanAddress)
            newSpan.appendChild(spanEmail)

            modal.appendChild(newSpan)
        }
    }
    updateModal()
}

function deleteModal(){
    const spans = document.querySelectorAll('.modal-item')
    for(let span of spans){
        span.remove()
    }
}

function filter(){
    let query = searchBar.value
    query = query.toLowerCase()
    searchBar.value = ''
    let queryFirst = query.slice(0,1)

    switch(queryFirst.toLowerCase()){
        case 'a':
            search(aList,query)
            break
        case 'b':
            search(bList,query)
            break
        case 'c':
            search(cList,query)
            break
        case 'd':
            search(dList,query)
            break
        case 'e':
            search(eList,query)
            break
        case 'f':
            search(fList,query)
            break
        case 'g':
            search(gList,query)
            break
        case 'h':
            search(hList,query)
            break
        case 'i':
            search(iList,query)
            break
        case 'j':
            search(jList,query)
            break
        case 'k':
            search(kList,query)
            break
        case 'l':
            search(lList,query)
            break
        case 'm':
            search(mList,query)
            break
        case 'n':
            search(nList,query)
            break
        case 'o':
            search(oList,query)
            break
        case 'p':
            search(pList,query)
            break
        case 'q':
            search(qList,query)
            break
        case 'r':
            search(rList,query)
            break
        case 's':
            search(sList,query)
            break
        case 't':
            search(tList,query)
            break
        case 'u':
            search(uList,query)
            break
        case 'v':
            search(vList,query)
            break
        case 'w':
            search(wList,query)
            break
        case 'x':
            search(xList,query)
            break
        case 'y':
            search(yList,query)
            break
        case 'z':
            search(zList,query)
            break
    }
}

function search(list,query){
    openSearch()
    searchName.textContent = `${query} Not in Address Book`
    searchPhone.textContent = ''
    searchAddress.textContent = ''
    searchEmail.textContent = ''

    for(let entry of list){
        let lowerName = entry.name.toLowerCase()
        if(lowerName == query){
            // found query

            searchName.textContent = entry.name
            searchPhone.textContent = entry.phoneNumber
            searchAddress.textContent = entry.address
            searchEmail.textContent = entry.email
        }
    }
}

function closeSearch(){
    searchModal.classList.add('hidden')
}

function openSearch(){
    searchModal.classList.remove('hidden')
}

initiate()