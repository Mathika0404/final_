 // Format today's date like "October 27, 2025"
    function formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }

    // Initialize date
    const dateElement = document.getElementById("current-date");
    const dateInput = document.getElementById("date-input");
    const dateFilter = document.getElementById("date-filter");

    function updateDateDisplay(date) {
      dateElement.textContent = formatDate(date);
      dateInput.valueAsDate = date;
    }

    // Set current date on load
    const today = new Date();
    updateDateDisplay(today);

    // Toggle dropdown calendar
    dateFilter.addEventListener("click", (e) => {
      dateFilter.classList.toggle("open");
      e.stopPropagation();
    });

    // Update displayed date when user picks new date
    dateInput.addEventListener("change", () => {
      const selectedDate = new Date(dateInput.value);
      updateDateDisplay(selectedDate);
      dateFilter.classList.remove("open");
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", (e) => {
      if (!dateFilter.contains(e.target)) {
        dateFilter.classList.remove("open");
      }
    });