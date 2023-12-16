// frontend/frontend.js

document.addEventListener('DOMContentLoaded', function () {
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
        .then(newComic => {
            // Update the table with the new comic
            const comicTable = document.getElementById('comicTable');
            const row = `<tr>
                            <td>${newComic.id}</td>
                            <td>${newComic.title}</td>
                            <td><button onclick="editComic(${newComic.id})">Edit</button></td>
                            <td><button onclick="deleteComic(${newComic.id})">Delete</button></td>
                         </tr>`;
            comicTable.innerHTML += row;
        })
        .catch(error => {
            console.error('Error adding comic:', error);
            alert('Error adding comic. Please try again.');
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
        .then(updatedComic => {
            // Update the table with the edited comic
            const comicTable = document.getElementById('comicTable');
            const rows = comicTable.getElementsByTagName('tr');

            for (let i = 1; i < rows.length; i++) {
                const columns = rows[i].getElementsByTagName('td');
                const comicId = parseInt(columns[0].innerText, 10);

                if (comicId === updatedComic.id) {
                    // Update the corresponding row with the edited details
                    columns[1].innerText = updatedComic.title;
                    break;
                }
            }
        })
        .catch(error => {
            console.error('Error updating comic:', error);
            alert('Error updating comic. Please try again.');
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
            return response.json();
        })
        .then(() => {
            // Remove the corresponding row from the table
            const comicTable = document.getElementById('comicTable');
            const rows = comicTable.getElementsByTagName('tr');

            for (let i = 1; i < rows.length; i++) {
                const columns = rows[i].getElementsByTagName('td');
                const comicId = parseInt(columns[0].innerText, 10);

                if (comicId === id) {
                    // Remove the corresponding row
                    rows[i].remove();
                    break;
                }
            }
        })
        .catch(error => {
            console.error('Error deleting comic:', error);
            alert('Error deleting comic. Please try again.');
        });
}
