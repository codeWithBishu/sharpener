document.addEventListener('DOMContentLoaded', function() {
    loadExpenses();

    document.getElementById('expenseForm').addEventListener('submit', function(event) {
      event.preventDefault();
      addOrUpdateExpense();
    });
  });

  function addOrUpdateExpense() {
    var expenseAmount = document.getElementById('expenseAmount').value;
    var description = document.getElementById('description').value;
    var category = document.getElementById('category').value;

    if (expenseAmount && description && category) {
      var expense = {
        amount: expenseAmount,
        description: description,
        category: category
      };
      var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
      var editIndex = document.getElementById('editIndex').value;
      if (editIndex !== '') {
        expenses[editIndex] = expense;
      } else {
        expenses.unshift(expense);
      }
      localStorage.setItem('expenses', JSON.stringify(expenses));

      loadExpenses();

      document.getElementById('expenseForm').reset();
      document.getElementById('editIndex').value = '';
      document.getElementById('addExpenseBtn').innerText = 'Add Expense';
    } else {
      alert('Please fill in all fields.');
    }
  }

  function loadExpenses() {
    var expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    var expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    expenses.forEach(function(expense, index) {
      var expenseItem = document.createElement('div');
      expenseItem.className = 'alert alert-info';
      expenseItem.innerHTML = `
        ${expense.amount} - ${expense.category} - ${expense.description}
        <button type="button" class="btn btn-sm btn-warning ml-2" onclick="editExpense(${index})">Edit</button>
        <button type="button" class="btn btn-sm btn-danger ml-2" onclick="deleteExpense(${index})">Delete</button>
      `;
      expenseList.appendChild(expenseItem);
    });
  }

  function editExpense(index) {
    var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    var expense = expenses[index];
    document.getElementById('expenseAmount').value = expense.amount;
    document.getElementById('description').value = expense.description;
    document.getElementById('category').value = expense.category;
    document.getElementById('editIndex').value = index;
    document.getElementById('addExpenseBtn').innerText = 'Update Expense';
  }

  function deleteExpense(index) {
    var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    loadExpenses();
  }