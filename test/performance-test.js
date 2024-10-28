import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 10, // Número de usuários virtuais
    duration: '30s', // Duração do teste
};

export default function () {
    // Teste de requisição GET
    let res = http.get('http://localhost:3000/api/items'); // Altere para a URL da sua API

    // Verifica se a resposta está OK
    check(res, {
        'status é 200': (r) => r.status === 200,
        'tempo de resposta < 200ms': (r) => r.timings.duration < 200,
    });

    // Teste de requisição POST
    res = http.post('http://localhost:3000/api/items', JSON.stringify({
        name: `Item ${Math.floor(Math.random() * 1000)}`,
    }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Verifica se a resposta está OK
    check(res, {
        'status é 201': (r) => r.status === 201,
    });

    sleep(1); // Pausa de 1 segundo entre as requisições
}
