const API_URL = 'https://67220f092108960b9cc2b93c.mockapi.io/pets'; 

export async function fetchPets() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Ошибка при получении данных');
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при получении питомцев:', error);
        return [];
    }
}

export async function addPet(newPet) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPet),
        });

        if (!response.ok) {
            throw new Error('Ошибка при добавлении питомца');
        }

        return await response.json();
    } catch (error) {
        console.error('Ошибка при добавлении питомца:', error);
    }
}
export async function updatePet(petId, updatedPet) {
    try {
        const response = await fetch(`${API_URL}/${petId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPet),
        });

        if (!response.ok) {
            throw new Error('Ошибка при обновлении питомца');
        }

        return await response.json();
    } catch (error) {
        console.error('Ошибка при обновлении питомца:', error);
    }
}

export async function deletePet(petId) {
    try {
        const response = await fetch(`${API_URL}/${petId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Ошибка при удалении питомца');
        }

        return await response.json();
    } catch (error) {
        console.error('Ошибка при удалении питомца:', error);
    }
}
