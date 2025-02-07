import requests

URL ='https://api.pokemonbattle.ru/v2'
TOKEN ='4d36d1071ccc9aa474269bc7f5f53be8'
HEADER = {'Content-Type':'application/json','trainer_token':TOKEN,}
body_registration ={
    "trainer_token": TOKEN,
    "email": "egorulm2000@mail.ru",
    "password": "Egorka4a44"
}
'''response=requests.post(url= f'{URL}/trainers/reg',headers=HEADER,json=body_registration)print(response.text)'''

body_confirmation={
"trainer_token": TOKEN
}

body_create={
    "name": "RUST",
    "photo_id": 1
}
'''response_confirmation =requests.post(url=f'{URL}/trainers/confirm_email',headers=HEADER,json=body_confirmation)
print(response_confirmation.text)'''

'''response_create=requests.post(url=f'{URL}/pokemons',headers=HEADER,json=body_create)
print(response_create.text)'''

body_change={
    "pokemon_id":"224704",
    "name": "Tarkov",
    "photo_id": 2
}

'''response_create=requests.put(url=f'{URL}/pokemons',headers=HEADER,json=body_change)
print(response_create)'''

body_Pokeball={
    "pokemon_id": "225018"
}
response_create=requests.post(url=f'{URL}/trainers/add_pokeball',headers=HEADER,json=body_Pokeball)
print(response_create)

body_create_pokemon={
    "name": "Tarkov",
    "photo_id": 1
}
'''response_create=requests.post(url=f'{URL}/pokemons',headers=HEADER,json=body_create_pokemon)
print(response_create)'''