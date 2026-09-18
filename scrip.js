// 1. Ambil elemen dari HTML
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// 2. Fungsi untuk menambah tugas
function addTask() {
  const text = taskInput.value.trim();

  // Validasi: Jangan tambah kalau input kosong
  if (text === '') {
    alert('Tugas tidak boleh kosong!');
    return;
  }

  // Buat elemen <li> baru
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${text}</span>
    <button class="delete-btn">Hapus</button>
  `;

  // Tambahkan event hapus pada tombol hapus di item ini
  const deleteBtn = li.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function() {
    li.remove();
  });

  // Masukkan <li> ke dalam <ul>
  taskList.appendChild(li);

  // Kosongkan input setelah ditambah
  taskInput.value = '';
}

// 3. Jalankan fungsi saat tombol "Tambah" diklik
addBtn.addEventListener('click', addTask);

// Opsional: Bikin tombol "Enter" di keyboard juga bisa nambah tugas
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
