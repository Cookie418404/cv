import requests
import pytest
URL ='https://api.pokemonbattle.ru/v2'
TOKEN ='4d36d1071ccc9aa474269bc7f5f53be8'
HEADER = {'Content-Type':'application/json','trainer_token':TOKEN,}
TRAINER_ID= '30059'

def test_status_code():
    response= requests.get(url=f'{URL}/trainers',params={'trainer_id':TRAINER_ID})
    assert response.status_code== 200

    def test_part_of_response():
        response_get=requests.get(url=f'{URL}/pokemons',params={'trainer_id':TRAINER_ID})
        assert response_get.json()["data"]== 'RUST'

@pytest.mark.parametrize('key, value',[('name','RUST'),('trainer_id',TRAINER_ID),('id','225349')])
def test_parametrize(key, value):
    response_parametrize=requests.get(url=f'{URL}/pokemons',params={'trainer_id':TRAINER_ID})
    assert response_parametrize.json()["data"][0][key]== value