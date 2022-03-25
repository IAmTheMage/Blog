let htmlContent = `

`

let selectedElement = ""
let linkModalHidden = true;
let linkEditData = "";

let documentData = {}

const functionUtils = {
  link: (id) => {
    const a = document.getElementById(id);

  }
}

function removeClassWithTextComponent(_classList, sentence = "text") {
  let arr = []
  _classList.forEach(element => {
    if(!element.includes(sentence)) {
      arr.push(element);
    }
  })
  return arr;
}

function openLinkModal(edit = false) {
  const linkModal = document.getElementById('linkModal')
  if(linkModalHidden) {
    linkModal.classList.remove('hidden')
    linkModalHidden = false;
    if(linkEditData != null) {
      linkModal.querySelector('input').value = linkEditData
      linkEditData = "";
    }
  }
  else {
    linkModal.classList.add('hidden')
    linkModal.querySelector('input').value = '';
    linkModalHidden = true;
  }
}

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
  }
  return result;
}

const h1 = document.getElementById('h1');
const output_div = document.getElementById('output_div')

output_div.addEventListener('click', (e) => {
  selectedElement = e.target.id;
})

h1.addEventListener('click', () => {
  const id = makeid(16)
  htmlContent = htmlContent.replace('{{}}', `<h1 id="${id}" contentEditable="true" style="color: white">Hello</h1>\n{{}}`)
  const element = document.createElement('h1')
  element.textContent = 'Hello';
  element.id = id;
  element.style.color = 'white';
  element.contentEditable = true;
  output_div.append(element)
  documentData[element.id] = element;
})

const alignCenter = document.getElementById('alignCenter')
alignCenter.addEventListener('click', () => {
  const element = document.getElementById(selectedElement)
  if(element.tagName == 'H1' || element.tagName == 'H2') {
    element.classList = removeClassWithTextComponent(element.classList)
    element.classList.add('textCenter');
  }
  else if(element.tagName == "IMG") {
    const parentDiv = element.parentElement;
    parentDiv.classList = removeClassWithTextComponent(parentDiv.classList, 'flex')
    parentDiv.classList.add('flexDivCenter')
  }
})

const alignRight = document.getElementById('alignRight')
alignRight.addEventListener('click', () => {
  const element = document.getElementById(selectedElement)
  if(element.tagName == 'H1' || element.tagName == 'H2') {
    element.classList = removeClassWithTextComponent(element.classList)
    element.classList.add('textRight');
  }
})

const alignLeft = document.getElementById('alignLeft')
alignLeft.addEventListener('click', () => {
  const element = document.getElementById(selectedElement)
  if(element.tagName == 'H1' || element.tagName == 'H2') {
    element.classList = removeClassWithTextComponent(element.classList)
    element.classList.add('textLeft');
  }
  else if(element.tagName == "IMG") {
    const parentDiv = element.parentElement;
    console.log(parentDiv)
    parentDiv.classList = removeClassWithTextComponent(parentDiv.classList, 'flex')
    parentDiv.classList.add('flexDivLeft')
  }
})

const h2 = document.getElementById('h2');
h2.addEventListener('click', () => {
  const id = makeid(16)
  htmlContent = htmlContent.replace('{{}}', `<h1 id="${id}" contentEditable="true" style="color: white">Hello</h1>\n{{}}`)
  const element = document.createElement('h2')
  element.textContent = 'Hello';
  element.id = id;
  element.style.color = 'white';
  element.contentEditable = true;
  output_div.append(element)
  documentData[element.id] = element;
})

const bold = document.getElementById('bold')
bold.addEventListener('click', () => {
  const element = document.getElementById(selectedElement)
  if(element.classList.contains('bold')) {
    element.classList.remove('bold')
  }
  else {
    element.classList.add('bold')
  }
  documentData[element.id] = element;
})

const underline = document.getElementById('underline')
underline.addEventListener('click', () => {
  const element = document.getElementById(selectedElement)
  if(element.classList.contains('underline')) {
    element.classList.remove('underline')
  }
  else {
    element.classList.add('underline')
  }
  documentData[element.id] = element;
})

const italic = document.getElementById('italic')
italic.addEventListener('click', () => {
  console.log("italic")
  const element = document.getElementById(selectedElement)
  if(element.classList.contains('italic')) {
    element.classList.remove('italic')
  }
  else {
    element.classList.add('italic')
  }
  documentData[element.id] = element;
})

const link = document.getElementById('link')
link.addEventListener('click', () => {
  openLinkModal()
})

document.getElementById('linkModal').querySelector('div > #confirmLinkButton').addEventListener('click', (e) => {
  e.preventDefault()
  const inp_value = document.getElementById('linkModal').querySelector('input').value;
  const link = document.createElement('a')
  const parentDiv = document.createElement('div');
  link.classList.add('link');
  link.href = inp_value;
  link.target = '_blank';
  link.style.display = 'flex';
  const id = makeid(16)
  link.id = id;
  documentData[id] = link;
  const selected = documentData[selectedElement]
  selected.width = '90%';
  const output = selected.parentNode;
  parentDiv.style.display = 'flex';
  parentDiv.style.width = '100%';
  const edit_id = makeid(16);
  parentDiv.insertAdjacentElement('beforeend', link);
  output.insertBefore(parentDiv, selected)
  link.append(document.getElementById(selectedElement));
  const edit = document.getElementById(edit_id);
  edit.addEventListener('click', () => {
    const a = edit.parentNode.querySelector('a');
    selectedElement = a.id;
    linkEditData = a.href;
    openLinkModal()
  })
  delete documentData[selectedElement]
  /*console.log(selectedElement);
  document.getElementById(selectedElement).remove()*/
})


document.getElementById('linkModal').querySelector('div > #cancelLinkButton').addEventListener('click', () => {
  openLinkModal();
})

document.getElementById('image').addEventListener('click', () => {
  document.getElementById('filePicker').click()
})

const filePicker = document.getElementById('filePicker')

filePicker.onchange = e => {
  const file = filePicker.files[0]
  const virtualUrl = URL.createObjectURL(file)
  const img = document.createElement('img')
  const div = document.createElement('div')
  div.classList.add('flexDivCenter');
  img.src = virtualUrl;
  img.id = makeid(16);
  img.width = 400;
  img.height = 400;
  div.appendChild(img)
  output_div.appendChild(div);
  selectedElement = img.id;
  openImageEditor();
}

function openImageEditor() {
  const selected = document.getElementById(selectedElement)
  document.getElementById('editing_image_preview').src = selected.src;
  document.getElementById('imageEditor').classList.remove('hidden')
}

