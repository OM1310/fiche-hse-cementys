export default
[
  [
    {
      "key": "firstname",
      "type": "text",
      "contentType": "firstname",
      "label": "Prénom",
      "autocomplete": "given-name",
      "placeholder": "Ouafae"
    },
    // {
    //   "key": "hgfhgf",
    //   "type": "text",
    //   "contentType": "hgdgh",
    //   "label": "hgfdgh",
    //   "autocomplete": "given-name",
    //   "placeholder": "Ouafae"
    // },
    {
      "key": "lastname",
      "type": "text",
      "contentType": "lastname",
      "label": "Nom",
      "autocomplete": "family-name",
      "placeholder": "Moudni"
    },
    {
      "key": "posteDeTravail",
      "type": "select",
      "contentType": "posteDeTravail",
      "label": "Poste de travail",
      "autocomplete": "posteDeTravail",
      "items": [
        {"code":"poste1","label":"poste 1"},
        {"code":"poste2","label":"poste 2"},
        {"code":"poste3","label":"poste 3"}
      ]
    },
    {
      "key": "lieuDeTravail1",
      "type": "select",
      "contentType": "lieuDeTravail1",
      "label": "lieuDeTravail1",
      "autocomplete": "lieuDeTravail1",
      "items": [
        {"code":"LDT1_1","label":"LDT 1_1"},
        {"code":"LDT1_2","label":"LDT 1_2"},
        {"code":"LDT1_3","label":"LDT 1_3"}
      ]
    },
    {
      "key": "lieuDeTravail2",
      "type": "select",
      "contentType": "lieuDeTravail2",
      "label": "Lieu de travail2",
      "autocomplete": "lieuDeTravail2",
      "items": [
        {"code":"LDT2_1","label":"LDT 2_1"},
        {"code":"LDT2_2","label":"LDT 2_2"},
        {"code":"LDT2_3","label":"LDT 2_3"}
      ]
    },
    {
      "key": "lieuDeTravail3",
      "type": "text",
     "contentType": "LDT3",
      "label": "LieuDeTravail",
      "autocomplete": "family-name",
      "placeholder": "PDT"
    },
       
    {
      "key": "birthday",
      "type": "text",
      "contentType": "birthday",
      "label": "Poste de travail",
      "autocomplete": "birthday",
      "pattern": "^([0][1-9]|[1-2][0-9]|30|31)\/([0][1-9]|10|11|12)\/(19[0-9][0-9]|20[0-1][0-9]|2020)",
      "maxlength": 10,
      "placeholder": "Chef de projet"
    }
  ],
  [
    {
      "key": "placeofbirth",
      "type": "text",
      "contentType": "cityofbirth",
      "label": "Lieu de naissance",
      "autocomplete": "off",
      "placeholder": "Paris"
    },
    {
      "key": "address",
      "type": "text",
      "contentType": "address",
      "label": "Adresse",
      "autocomplete": "address-line1",
      "placeholder": "999 avenue de France"
    },
    {
      "key": "city",
      "type": "text",
      "contentType": "city",
      "label": "Ville",
      "autocomplete": "address-level2",
      "placeholder": "Paris"
    },
    {
      "key": "zipcode",
      "type": "number",
      "contentType": "zipcode",
      "label": "Code Postal",
      "autocomplete": "postal-code",
      "placeholder": "75001",
      "inputmode": "numeric",
      "pattern": "[0-9]{5}",
      "min": 1000,
      "max": 99999,
      "minlength":4,
      "maxlength":5
    }
  ],
  [
    {
      "key": "creationDate",
      "type": "date",
      "contentType": "creationDate",
      "label": "Date de création",
      "isHidden": true
    },
    {
      "key": "creationHour",
      "type": "time",
      "contentType": "creationHour",
      "label": "Heure de création",
      "isHidden": true
    },
    {
      "key": "datesortie",
      "type": "date",
      "contentType": "datesortie",
      "label": "Date de sortie",
      "pattern": "^([0][1-9]|[1-2][0-9]|30|31)\/([0][1-9]|10|11|12)\/(19[0-9][0-9]|20[0-1][0-9]|2020)",
      "autocomplete": ""
    },
    {
      "key": "heuresortie",
      "type": "time",
      "contentType": "heuresortie",
      "label": "Heure de sortie",
      "autocomplete": ""
    },
    {
      "key": "reason",
      "type": "list",
      "items": [
        {
          "code": "travail",
          "label": "Chute ;"
        },
        {
          "code": "coactivite",
          "label": "Coactivité engin ;"
        },
        {
          "code": "sante",
          "label": "Electrocution ;"
        }
      ]
    },
   {
      "key": "risque1",
      "type": "checkbox",
      "contentType": "risque1",
      "label": "risque1",
      "autocomplete": "family-name",
      "placeholder": "risque1"
    },
  ]
]
