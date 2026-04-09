from flask import Flask, jsonify, request

app = Flask(__name__)


animes = [
    {'id': 1, 'titulo': 'Naruto Shippuden', 'autor': 'Masashi Kishimoto'},
    {'id': 2, 'titulo': 'One Piece', 'autor': 'Eiichiro Oda'},
    {'id': 3, 'titulo': 'Dragon Ball Z', 'autor': 'Akira Toriyama'}
]

# Consultar 
@app.route('/animes', methods=['GET'])
def obter_animes():
    return jsonify(animes)

# Consultar 
@app.route('/animes/<int:id>', methods=['GET'])
def obter_animes_por_id(id):
    for anime in animes:
        if anime.get('id') == id:
            return jsonify(anime)
    return jsonify({'mensagem': 'Anime não encontrado'}), 404

# Editar
@app.route('/animes/<int:id>', methods=['PUT'])
def editar_anime_por_id(id):
    anime_alterado = request.get_json()
    for indice, anime in enumerate(animes):
        if anime.get('id') == id:
            animes[indice].update(anime_alterado)
            return jsonify(animes[indice])
    return jsonify({'mensagem': 'Anime não encontrado'}), 404

# Criar
@app.route('/animes', methods=['POST'])
def incluir_novo_anime():
    novo_anime = request.get_json()
    animes.append(novo_anime)
    return jsonify(novo_anime), 201

# Excluir
@app.route('/animes/<int:id>', methods=['DELETE'])
def excluir_anime(id):
    for indice, anime in enumerate(animes):
        if anime.get('id') == id:
            del animes[indice]
            return jsonify({'mensagem': 'Excluído com sucesso'})
    return jsonify({'mensagem': 'Anime não encontrado'}), 404

if __name__ == '__main__':
    app.run(port=5000, host='localhost', debug=True)
