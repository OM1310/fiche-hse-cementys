import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/main.css'

import formData from '../form-data.js'

import { $, appendTo, createElement } from './dom-utils'

const createTitle = () => {
  const h2 = createElement('h2', { className: 'titre-2', innerHTML: 'Remplissez en ligne votre fiche HSE : ' })
  const p = createElement('p', { className: 'msg-info', innerHTML: 'Tous les champs sont obligatoires.' })
  return [h2, p]
}
// createElement('div', { className: 'form-group' })

const onPosteChanged = () => {
  alert('La valeur choisie est:'+document.getElementById("field-posteDeTravail").value)

  if (document.getElementById("field-posteDeTravail").value === 'poste1')
  {
    document.getElementById("field-lieuDeTravail2").parentElement.parentElement.style.display = 'none'
    document.getElementById("field-lieuDeTravail3").parentElement.parentElement.style.display = 'none'
  }

}

const createFormGroup = ({
  autocomplete = false,
  autofocus = false,
  inputmode,
  label,
  max,
  min,
  maxlength,
  minlength,
  name,
  pattern,
  placeholder = '',
  type = 'text',
  items,
}) => {
  const formGroup = createElement('div', { className: 'form-group' })
  const labelAttrs = {
    for: `field-${name}`,
    id: `field-${name}-label`,
    innerHTML: label,
  }
  const labelEl = createElement('label', labelAttrs)

  const inputGroup = createElement('div', { className: 'input-group align-items-center' })

  let input;
  if(type !== "select") {
    const inputAttrs = {
      autocomplete,
      autofocus,
      className: 'form-control',
      id: `field-${name}`,
      inputmode,
      min,
      max,
      minlength,
      maxlength,
      name,
      pattern,
      placeholder,
      required: true,
      type,
    }
    input = createElement('input', inputAttrs)
  }
  else {

    const inputAttrs = {
      autofocus,
      className: 'form-control',
      id: `field-${name}`,
      name,
      required: true,
    
    }

    if (name === 'posteDeTravail')

      inputAttrs.onchange = onPosteChanged

    input = createElement('select', inputAttrs)

    items.forEach(option=> {
      const optionEl = createElement('option', {value:option.code});
      var textnode = document.createTextNode(option.label);
      optionEl.appendChild(textnode);                
      input.appendChild(optionEl);
    })

    

  }


  const validityAttrs = {
    className: 'validity',
  }
  const validity = createElement('span', validityAttrs)

  const example = createElement('p', { className: 'exemple  basis-100' })

  const appendToFormGroup = appendTo(formGroup)
  appendToFormGroup(labelEl)
  appendToFormGroup(inputGroup)
  appendToFormGroup(example)

  const appendToInputGroup = appendTo(inputGroup)
  inputGroup.appendChild(input)
  appendToInputGroup(validity)

  return formGroup
}

const createReasonField = (reasonData) => {
  const formReasonAttrs = { className: 'form-checkbox align-items-center' }
  const formReason = createElement('div', formReasonAttrs)
  const appendToReason = appendTo(formReason)

  const id = `checkbox-${reasonData.code}`
  const inputReasonAttrs = {
    className: 'form-check-input',
    type: 'checkbox',
    id,
    name: 'field-reason',
    value: reasonData.code,
  }
  const inputReason = createElement('input', inputReasonAttrs)

  const labelAttrs = { innerHTML: reasonData.label, className: 'form-checkbox-label', for: id }
  const label = createElement('label', labelAttrs)

  appendToReason([inputReason, label])
  return formReason
}

const createReasonFieldset = (reasonsData) => {
  const fieldsetAttrs = {
    id: 'reason-fieldset',
    className: 'fieldset',
  }

  const fieldset = createElement('fieldset', fieldsetAttrs)
  const appendToFieldset = appendTo(fieldset)

  const legendAttrs = {
    className: 'legend titre-3',
    innerHTML: 'Choisissez un motif de déplacement',
  }
  const legend = createElement('legend', legendAttrs)

  const textAlertAttrs = { className: 'msg-alert hidden', innerHTML: 'Veuillez choisir un motif' }
  const textAlert = createElement('p', textAlertAttrs)

  const textSubscribeReasonAttrs = {
    innerHTML: 'certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé en application des mesures générales nécessaires pour faire face à l\'épidémie de Covid19 dans le cadre de l\'état d\'urgence sanitaire  <a class="footnote" href="#footnote1">[1]</a>&nbsp;:',
  }

  const textSubscribeReason = createElement('p', textSubscribeReasonAttrs)

  const reasonsFields = reasonsData.items.map(createReasonField)

  appendToFieldset([legend, textAlert, textSubscribeReason, ...reasonsFields])
  // Créer un form-checkbox par motif
  return fieldset
}

export function createForm () {
  const form = $('#form-profile')
  // Évite de recréer le formulaire s'il est déjà créé par react-snap (ou un autre outil de prerender)
  if (form.innerHTML !== '') {
    return
  }

  const appendToForm = appendTo(form)

  const formFirstPart = formData
    .flat(1)
    .filter(field => field.key !== 'reason')
    .filter(field => !field.isHidden)
    .map((field,
      index) => {
      const formGroup = createFormGroup({
        autofocus: index === 0,
        ...field,
        name: field.key,
      })

      return formGroup
    })

  const reasonsData = formData
    .flat(1)
    .find(field => field.key === 'reason')

  const reasonFieldset = createReasonFieldset(reasonsData)
  appendToForm([...createTitle(), ...formFirstPart, reasonFieldset])
}
