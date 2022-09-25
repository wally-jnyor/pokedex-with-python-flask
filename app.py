# app.py

from flask.globals import request
from pokemon import Pokemon
from flask import Flask, render_template
import requests
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/buscar", methods = ["GET", "POST"])
def buscar():
    pokemon = Pokemon(request.form.get("nome").lower(), "","","","","")
    try:
        res = json.loads(requests.get(f"https://pokeapi.co/api/v2/pokemon/{pokemon.nome}").text)
        result = res["sprites"]
        result = result["front_default"]
        pokemon.foto = result
        pokemon.num_habilidade = len(res["moves"])
        pokemon.habilidades = []
        for i in range(0, len(res["moves"])):
            pokemon.habilidades.append(res["moves"][i]["move"]["name"])

        if len(res["types"])==2:
            pokemon.tipo1 = res["types"][0]["type"]["name"]
            pokemon.tipo2 = res["types"][1]["type"]["name"]
        else:
            pokemon.tipo1 = res["types"][0]["type"]["name"]

    except:
        return render_template("index.html",
        nome = 'Pokemon não encontrado.'
        )
        
    return render_template("index.html",
    nome = pokemon.nome,
    foto = pokemon.foto,
    tipo1 = pokemon.tipo1.upper(),
    tipo2 = pokemon.tipo2.upper(),
    habilidades = pokemon.habilidades,
    num_habilidade = pokemon.num_habilidade
    )

if __name__=="__main__":
    app.run(debug=True)