// frontend/frontend.js

document.addEventListener('DOMContentLoaded', function() {
    fetchComics();
});

// Fetch comics from the backend
function fetchComics() {
    fetch('http://localhost:8090/comics/all')
        .then(response => response.json())
        .then(data => {
            const comicTable = document.getElementById('comicTable');
            comicTable.innerHTML = ''; // Clear existing rows

            data.forEach(comic => {
                const row = `<tr>
                                <td>${comic.id}</td>
                                <td>${comic.title}</td>
                                <td><button onclick="editComic(${comic.id})">Edit</button></td>
                                <td><button onclick="deleteComic(${comic.id})">Delete</button></td>
                             </tr>`;
                comicTable.innerHTML += row;
            });
        });
}

// Add a new comic
function addComic() {
    const title = prompt('Enter comic title:');

    fetch('http://localhost:8090/comics/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add comic.');
            }
            return response.json();
        })
        .then(() => {
            // Call fetchComics to reload the table
            fetchComics();
        })
        .catch(error => {
            console.error('Error adding comic:', error);
            alert('Error adding comic. Please try again.');
            fetchComics();
        });
}

// Edit a comic
function editComic(id) {
    const updatedTitle = prompt('Enter updated title:');
    fetch(`http://localhost:8090/comics/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: updatedTitle }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update comic.');
            }
            return response.json();
        })
        .then(() => {
            // Call fetchComics to reload the table
            fetchComics();
        })
        .catch(error => {
            console.error('Error updating comic:', error);
            alert('Error updating comic. Please try again.');
            fetchComics();
        });
}

// Delete a comic
function deleteComic(id) {
    fetch(`http://localhost:8090/comics/delete/${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete comic.');
            }
        })
        .then(() => {
            // Call fetchComics to reload the table
            fetchComics();
        })
        .catch(error => {
            console.error('Error deleting comic:', error);
            alert('Error deleting comic. Please try again.');
            fetchComics();
        });
}
