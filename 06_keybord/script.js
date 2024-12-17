const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class='color'>
            <table class='center'>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'space' : e.key}</td>
                <td>${e.keyCode}s</td>
                <td>${e.code}</td>
            </tr>
            </table>
        </div>
    `
})